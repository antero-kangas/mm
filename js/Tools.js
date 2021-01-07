import CONST from './theconstants.js';
import settings from './Settings.js';
import { operators, manuscript, audioFiles, status, filters } from './thesscript.js'

import { createRequire } from 'module';
import { SSL_OP_EPHEMERAL_RSA } from 'constants';
const require = createRequire(import.meta.url);
const fs = require('fs');
const Lame = require("node-lame").Lame;
const play = require('play');
const ffmpeg = require('fluent-ffmpeg');
const proc = new ffmpeg();

export default class Tools{
    static fileCounter = 0;

    static pad (num, places=1, padChar='0') {
        return String(num).padStart(places, padChar);
    }

    static paddedCounter () {
        return Tools.pad(++Tools.fileCounter, 5); 
    }

    static concatAudioFiles(clips, result, cb) {
        /**
         * Tämä toimii!!!!!
         * Apu löytyi täältä:
         * https://www.codota.com/code/javascript/functions/fluent-ffmpeg/ffmpeg
         */
        const concatenator = new ffmpeg();
        clips.forEach((clip) => { 
            concatenator.input(clip); 
        });
       
        concatenator
          .on('error', (err) => { 
                console.log('concat failed');  
                cb(err, null);
            })
          .on('end', () => { 
            Tools.setArray(status, true)
            cb(null, settings.tmpFolder);
            })
          .mergeToFile(result, settings.tmpFolder);
    }

    static doConcatAudioFiles(status, param) {
        let clips = [];
        param.audioFiles.forEach(audioFile => clips.push(audioFile[1]));
        let result = param.resultFile;
        Tools.setArray(status, false);
        Tools.concatAudioFiles(clips, result, 
            () => Tools.setArray(status, true));
    }

    static copyAudioFile(inFile, outFile, cb) {
        const copier = new ffmpeg();
        copier.input(inFile);
        copier
            .on('end', () => cb())
            .output(outFile)
    }

    static setArray(array, value) {
        for (const element in array) {
            array[element] = value;
        }
    }

    static play(status, param) {
        play.sound(param.audioFile);
    }

    static forAll (array) {
        let total = true;
        for (const item in array) total &&= array[item];
        return total;
    };

    static waitThenDo(status, action, param) {
        const delay = param.delay || 1000;
        const name = param.name || 'I am waiting';
           
        const checkAndThenDo = () => {
            // console.log("checkAndWait ", name, Tools.forAll(status), status)
            if (Tools.forAll(status)) {
                Tools.setArray(status, false)
                action(status, param);
                
            } else {
                setTimeout(checkAndThenDo, delay);		
            }
        }
        setTimeout(checkAndThenDo, delay);
    }

    static doFilterings (status, param) {
        const audioFiles = param.audioFiles;
        audioFiles.forEach(audioFile => {
            Tools.doFiltering(status, audioFile[0], audioFile[1])
            })
    }

    static doFiltering (status, inFile, outFile) {
        const filter = new ffmpeg();

        status[outFile] = false;
        if (filters[outFile]) {
            const { volume, asetrate, atempo } = filters[outFile];
            filter.addInput(inFile)
                .audioFilters(
                    'volume=' + volume,
                    'asetrate=' + asetrate,
                    'atempo=' + atempo,
                    )
                .output(outFile)
                .on('end', () => {
                    status[outFile]=true;
                    // console.log('filtering ', outFile, ' ready.');
                })
                .run()
        } else {
            filter.addInput(inFile)
            .output(outFile)
            .on('error', () => {
                console.log('non-filtering ', outFile, ' failed.')
            })
            .on('end', () => {
                status[outFile]=true;
                // console.log('non-filtering ', outFile, ' ready.');
            })
            .run()
        }
    }

    static doCopy(status, param) {
        const source = param.source;
        const destination = param.destination;
        const cb = param.cb;
        fs.copyFile(source, destination, cb)
    }

    static nextFilenames(name) {
        let serial = Tools.paddedCounter() 
        let base = name + '_' + serial + '.' + settings.audioType;
        let mp3File = settings.tmpFolder + base;
        let tmpFile = settings.tmpFolder + 'tmp_' + base;
        return [ tmpFile, mp3File ];
    }

    static mp3Filter(params) {
        return {
            volume: params.gain || CONST.DEFAULTGAIN,
            asetrate: CONST.DEFAULTAUDIOFREQUENCY 
                      * (params.pitch || CONST.DEFAULTPITCH),
            atempo: params.rate || CONST.DEFAULTRATE,
        }
    }

}