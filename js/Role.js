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
        /**
         * puhutaan repliikki
         */
        if (!repliques || repliques.length==0) {
            repliques = [this.alias];
        }
        if (settings.debug) {
            console.log(`${this.name} says: ${repliques.join(' ')}`);
        }
        // TODO: erota gtts:n käyttö muualle


        // loppuun " " missä erik.merkki + " "...
        const joined = repliques.join(' ') + ' ';
        const match = joined.match(CONST.SPECIALMATCH) || [];
        const splitted = joined.split(CONST.SPECIALMATCH);
        const trimmed = splitted.map(str => str.trim())
        const filtered = trimmed.filter(str => str !== '')
        const speaks = filtered.map((str, i) => {
            str = str.replace(CONST.HYPHENHINT, CONST.HYPHEN);
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
            let words = speak.split(' ');
            let i = 0
            while (i < words.length) {
                let sentence = words[i++];
                while (i < words.length 
                       && sentence.length + words[i].length + 1 
                       <= CONST.GTTSMAXIMUM) {
                    sentence += ' ' + words[i++];
                }
                let [ tmpFile, mp3File ] = Tools.nextFilenames(self.name);
                audioFiles.push([ tmpFile, mp3File ]);
                status[mp3File] = false; // korvaa promisella
                filters[mp3File] = filter;
                const gtts = new gTTS(sentence, self.lang);
                gtts.save(tmpFile, function (err, result) {
                    if (err) {  
                        console.log("gtts save failed:", tmpFile)
                        throw new Error(err) 
                    }
                    status[mp3File] = true;
                    Tools.doFiltering(status, tmpFile, mp3File);
                })
            }
        });
    }
}