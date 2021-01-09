import Operator from './Operator.js'
import settings from "./Settings.js";
import Tools from './Tools.js';

export default class Wait extends Operator {
    constructor(name){
        super(name);
    }
    
    action(repliques) {
        Tools.debug(`${this.name} waits: ${this.delay} ms`);
    }
}