import Operator from './Operator.js'
import settings from './Settings.js';
import Tools from './Tools.js';
import CONST from './theconstants.js';
import { operators, manuscript, audioFiles, status, filters } from './thesscript.js'
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const ffmpeg = require('fluent-ffmpeg');
const gTTS = require('gtts');

export default class Role extends Operator {
    constructor(name){
        super(name);
        this.alias = this.name;
        this.lang = settings.defaultLang ;
    }

    action(repliques) {
        if (!repliques || repliques.length==0) {
            repliques = [this.alias];
        }
        if (settings.debug) {
            console.log(`${this.name} says: ${repliques.join(' ')}`);
        }
        // TODO: erota gtts:n käyttö muualle

        const gtts = new gTTS(repliques.join(' '), this.lang);
        const [ tmpFile, mp3File ] = Tools.nextFilenames(this.name);
       
        audioFiles.push([ tmpFile, mp3File ]);
        status[mp3File] = false;
        filters[mp3File] = Tools.mp3Filter({
            gain: this.gain,
            pitch: this.pitch,
            rate: this.rate,
        })
        let f = filters[mp3File]
        gtts.save(tmpFile, function (err, result) {
            if (err) { 
                throw new Error(err) 
            }    
            status[mp3File] = true;
            Tools.doFiltering(status, tmpFile, mp3File)
        });
    }

}