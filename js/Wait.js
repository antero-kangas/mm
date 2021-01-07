import Operator from './Operator.js'
import settings from "./Settings.js";

export default class Wait extends Operator{
    constructor(name){
        super(name);
    }
    
    action(repliques) {
        if (settings.debug) {
            console.log(`${this.name} waits: ${this.delay} ms`);
        }
    }

}