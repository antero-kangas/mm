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


        // loppuun " " missä erik.merkki + " "...
        const specialChars = /[\.!?;:,]/;
        const specialMatch = /[\.!?;:,] /g;
        const joined = repliques.join(' ') + ' ';
        const match = joined.match(specialMatch) || [];
        const splitted = joined.split(specialChars)
        const trimmed = splitted.map(str => str.trim())
        const filtered = trimmed.filter(str => str !== '')
        const speaks = filtered.map((str, i) => {
            if (match[i] === undefined) {
                return str
            }
            return str + match[i].charAt(0); 
        })
        const filter = Tools.mp3Filter({
            gain: this.gain,
            pitch: this.pitch,
            rate: this.rate,
        });
        const promises = [];
        const self = this;
        speaks.forEach(async function (speak) {
            console.log("gtts speak=", speak)
            let [ tmpFile, mp3File ] = Tools.nextFilenames(self.name);audioFiles.push([ tmpFile, mp3File ]);
            status[mp3File] = false;
            filters[mp3File] = filter;
            const gtts = new gTTS(speak, self.lang);
            gtts.save(tmpFile, function (err, result) {
                if (err) { 
                    throw new Error(err) 
                }
                status[mp3File] = true;
                Tools.doFiltering(status, tmpFile, mp3File);
            })
        });
    }
}