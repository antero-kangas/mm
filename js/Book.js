import settings from './Settings.js';
import Tools from './Tools.js';
import CONST from './CONST.js'
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const fs = require('fs');

export default class Book {
    constructor(manuscript) {
        Tools.debug("Käsikirjoituksen kirjoittaminen alkaa");
        let sentence;
        let sentences;
        let text = '';
        manuscript.forEach(part => {
            sentence = '';
            switch (part.operator.constructor.name) {
                case "Paragraph": 
                    sentences = part.callParameters.say || part.callValues || [''];
                    sentence += sentences.join(' ');
                    break;
                case "Role":
                case "Group":
                    if (part.operator.name != CONST.NARRATOR) {
                        sentence += part.operator.name.toUpperCase() + '\n';
                    }
                    if (part.callValues.length === 0) {
                        sentence += part.operator.alias;
                    } else {
                        sentence += part.callValues.join(' ');
                    }
                    break;
                case "Sound":
                case "Wait":
                    sentence += '(' + part.operator.name + ')';
                    break;
                default: 
                    sentence += '*** Error ***'; 
            }
            text += sentence + '\n\n';

        })
        this.text = text;
    }
}