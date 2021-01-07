import Operator from './Operator.js';
import settings from './Settings.js';
import Tools from './Tools.js';
import { operators, manuscript, audioFiles, status, filters } from './thesscript.js'
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const fs = require('fs');
const { getAudioDurationInSeconds } = require('get-audio-duration');


export default class Sound extends Operator {
    constructor(name){
        super(name);
        this.start1 = 0;
        this.end1 = 0;
        this.duration1 = 0;
        this.start2 = 0;
        this.end2 = 0;
        this.duration2 = 0;
    }

    action(repliques) {
        if (settings.debug) console.log(`${this.name} plays: ${this.source}`);
        // File destination will be created or overwritten by default.
        const source = settings.soundsFolder + this.source;
        const [ tmpFile, mp3File ] = Tools.nextFilenames(this.name);
        audioFiles.push([ tmpFile, mp3File ]);
        status[mp3File] = false;
       
        Tools.waitThenDo(this.lengthSet, Tools.doCopy, {
            source: source, 
            destination: mp3File, 
            name: 'copy',
            cb: (err) => {
                if (err) throw err;
                status[mp3File] = true; 
            },
        })
        // Tools.mp3tomp3(source, mp3File, () => status[mp3File] = true)
    }

    setLength () {
        this.lengthSet = [];
        this.lengthSet[this.name] = false;
        getAudioDurationInSeconds(settings.soundsFolder+this.source).then(duration => {   
            this.length = duration;
            this.lengthSet[this.name] = true;
        })
    }
}