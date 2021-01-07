import Operator from './Operator.js';
import settings from './Settings.js'
import CONST from './theconstants.js';
import { operators, manuscript, audioFiles, status } from './thesscript.js'

export default class Paragraph extends Operator {
    constructor(name, more={}) {
        //console.log("paragraph: arguments=", arguments);
        super(name);
        this.align = CONST.LEFT;
        this.leftmargin = 0;
        this.rightmargin = 0;
        this.maxLineWidth = settings.lineWidth || CONST.DEFAULTLINEWIDTH;
        this.case = CONST.LOWER;
        for (const [key, value] of Object.entries(more)) {
            this[key] = value;
        }
    }

    action(repliques) {
        if (!repliques || repliques.length==0) {
            repliques = [' '];
        }
        operators[CONST.NARRATOR].action(repliques);
    }

}