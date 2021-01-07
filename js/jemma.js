
import { operators, manuscript, audioFiles, status, filters } from './thesscript.js'
import settings from './Settings.js';

import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const fs = require('fs');
const play = require('play');
const Lame = require('node-lame').Lame;
const VLC = require('node-vlc-json');
const sox = require('sox-stream');
const wav = require('wav');
const audioconcat = require('audioconcat');
const FfmpegCommand = require('fluent-ffmpeg');
const command = new FfmpegCommand();
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

    static concatenate(clips, result) {
        let dhh =  fs.createWriteStream(result);
        concat();
        return;
    
        function concat() {
            if (!clips.length) {
                dhh.end('Done');
                return;
            }
            let clip = clips.shift();
            Tools.play(clip);
            let stream = fs.createReadStream(clip);
            stream.pipe(dhh, {end: false});
            stream.on("end", function() {
                console.log(clip + ' appended');
                concat();   
            });
        }
    }

    static mp3concat(clips, result) {
        const async = require('async');
        const concatstream = require('mp3-concat');
        
        // Create the concat stream
        let concatenater = concatstream();
        
        // Pipe the output to a 'concat.mp3' file
        concatenater.pipe(fs.createWriteStream(result));
        
        // Loop through the files in series
        async.eachSeries(clips, function(file, cb) {
            console.log('async: file=',file);
            // ... and pipe them into the concatenater
            fs
                .createReadStream(file)
                .on('end', cb)
                .pipe(concatenater, { end: false });
            }, 
            function() {
            // Finally, when all files have been read, close the stream
                concatenater.end();  
            });
    }

    static ffconcat(clips, result) {
        audioconcat(clips)
            .concat(result)
            .on('start', function (command) {
                console.log('ffmpeg process started:', command)
            })
            .on('error', function (err, stdout, stderr) {
                console.error('Error:', err)
                console.error('ffmpeg stderr:', stderr)
            })
            .on('end', function (output) {
                console.error('Audio created in:', output)
            })
    }

    static ffdata(audiofile) {
        console.log('==== ffmbeg - data =======');
        console.log(FfmpegCommand(audiofile).native());
        console.log('--------------------------');
    }

    static ffSetAudioFrequency(audiofile, audioFrequency=22050) {
        FfmpegCommand(audiofile)
            .audioBitrate(audioFrequency)
            .output('./tmp/X_' + Tools.paddedCounter() + ".mp3");
    }

    static concatAudioFiles(clips, result, cb) {
        /**
         * Tämä toimii!!!!!
         * Apu löytyi täältä:
         * https://www.codota.com/code/javascript/functions/fluent-ffmpeg/ffmpeg
         */
        let ffmpegCmd = FfmpegCommand();
        clips.forEach((clip) => { 
            ffmpegCmd.input(clip); 
            status[clip] = false
        });
       
        ffmpegCmd
          .on('error', (err) => { cb(err, null); })
          .on('end', () => { 
              cb(null, settings.tmpFolder);
            })
          .mergeToFile(result, settings.tmpFolder);
    }

    static concatAudioFilesX(result) {
        Tools.concatAudioFiles(audioFiles, result, 
            () => audioFiles.forEach(audioFile => status[audioFile]=true));
    }

    static play(audiofile) {
        play.sound(audiofile);
    }

    static mp3tomp3 (source, destination, cb) {
        console.log(`mp3tomp3: ${source} --> ${destination}`);

        let tmpwav = settings.tmpFolder 
                     + 'tmpwav_' 
                     + Tools.paddedCounter() 
                     + '.wav';

        const decoder = new Lame({
            output: tmpwav,
        }).setFile(source);
         
        decoder
            .decode()
            .then(() => {
                // Decoding finished
                console.log(`${source} decoding to ${tmpwav} successed (${destination})`);
                const encoder = new Lame({
                    output: destination,
                    bitrate: 192
                }).setFile(tmpwav)
                 
                encoder
                    .encode()
                    .then(() => {
                        // Encoding finished
                        if (settings.debug) {
                            console.log(`${tmpwav} encoding to ${destination} successed`);
                        }
                        cb();
                    })
                    .catch(error => {
                        // Something went wrong
                        if (settings.debug) {
                            console.log(`${tmpwav} encoding to ${destination} failed: `, error);
                        }
                    });
            })
            .catch(error => {
                // Something went wrong
                if (settings.debug) {
                    console.log(`${source} decoding to ${tmpwav} failed (${destination}): `, error);
                }
            });
    }
    static mp3towav(source, destination) {
        let input = fs.createReadStream(source);
        let output = fs.createWriteStream(destination);

        let decoder = new Lame({
            output: destination
        });
        decoder.on('format', onFormat);
        input.pipe(decoder);

        function onFormat (format) {
            console.error('MP3 format: %j', format);
            let writer = new wav.Writer(format);
            decoder.pipe(writer).pipe(output);
        }
    }

    static wavtomp3(source, destination) {
        let input = fs.createReadStream(source);
        let output = fs.createWriteStream(tmpwavfile);

        let reader = new wav.Reader();
        reader.on('format', onformat);
        input.pipe(reader);
        
        function onFormat (format) {
            console.error('WAV format: %j', format);
            let encoder = new Lame(format);
            reader.pipe(encoder).pipe(output);
        }
    }

    static mwm (source, destination) {
        let tmpwav = './tmp/tmpwav_'+ Tools.paddedCounter() + '.wav';
        Tools.mp3towav(source, tmpwav);
        Tools.wavtomp3(tmpwav, destination);
    }

    static vlc(filename) {
        let player = new VLC();
        player.play(filename, () => {
            player.status(res => console.log(res.state))
        }); 
    }

    static transcode (source, destination) {
        if (settings.debug) console.log('transcode ', source, ' -> ', destination);
        fs.createReadStream(source)
            .pipe( sox({ output: { type: 'mp3' } }) )
            .pipe( fs.createWriteStream(destination) )
    }


    static forAll (array) {
        let total = true;
        for (const item in array) total &&= array[item];
        return total;
    };

    static waitThenDo(status, action, param, delay=1000) {
        console.log("->waitThenDo")
        const checkAndThenDo = () => {
            if (Tools.forAll(status)) {
                action(status, param);
            } else {
                setTimeout(checkAndThenDo, delay);		
            }
        }
        setTimeout(checkAndThenDo, delay);
    }

    static doFilterings (status, audioFiles) {
        console.log("-->doFilterings ", audioFiles)
        function doFiltering (status, audioFile) {
            console.log("-->doFiltering")
            let [ tmpFile, mp3File ] = audioFile;
            let { volume, asetrate, atempo } = filters[mp3File];
            console.log('----------');
            console.log("tmpFile=", tmpFile);
            console.log("mp3File=", mp3File);
            console.log("status=", status[mp3File]);
            console.log("volume=", volume);
            console.log("asetrate=", asetrate);
            console.log("atempo=", atempo);
            status[mp3File] = false;
            proc.addInput(tmpFile)
                .audioFilters(
                    'volume=' + volume,
                    'asetrate=' + asetrate,
                    'atempo=' + atempo,
                    )
                .output(mp3File)
                .on('end', () => {status[mp3File]=true})
                .run()
            console.log('filtering ready.');
        }
        audioFiles.forEach(audioFile => doFiltering(status, audioFile))
    }



    static mp3tomp3 (status, param) {
        const source = param.source;
        const destination = param.destination;
        const cb = param.cb;
        console.log(`mp3tomp3: ${source} --> ${destination}`);
        console.log("param", param)

        let tmpwav = settings.tmpFolder 
                        + 'tmpwav_' 
                        + Tools.paddedCounter() 
                        + '.wav';

        const decoder = new Lame({
            output: tmpwav,
        }).setFile(source);
            
        decoder
            .decode()
            .then(() => {
                // Decoding finished
                console.log(`${source} decoding to ${tmpwav} successed (${destination})`);
                const encoder = new Lame({
                    output: destination,
                    bitrate: 192
                }).setFile(tmpwav)
                    
                encoder
                    .encode()
                    .then(() => {
                        // Encoding finished
                        if (settings.debug) {
                            console.log(`${tmpwav} encoding to ${destination} successed`);
                        }
                        cb();
                    })
                    .catch(error => {
                        // Something went wrong
                        if (settings.debug) {
                            console.log(`${tmpwav} encoding to ${destination} failed: `, error);
                        }
                    });
            })
            .catch(error => {
                // Something went wrong
                if (settings.debug) {
                    console.log(`${source} decoding to ${tmpwav} failed (${destination}): `, error);
                }
            });
    }
}