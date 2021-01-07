import { operators } from './thesscript.js';

export default class Call {
    constructor(name) {
        this.operator = operators[name];
    }

}