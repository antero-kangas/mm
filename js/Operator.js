import settings from "./Settings.js";
import { operators, manuscript, audioFiles, status } from './thesscript.js'

export default class Operator {
    constructor(name) {
        this.name = name;
        operators[this.name] = this;
        //console.log('\nname=', name, this.name, '\nOperators: ', operators)
    }

    action(parameter) {
        if (settings.debug) console.log("operator:", this.name, 'action(', parameter, ')');
    }
}