import { operators } from './SCRIPT.js';

export default class Call {
    constructor(name) {
        this.operator = operators[name];
    }

}