import CONST from './CONST.js';

class Settings {
    constructor(name){
        /**
         * Default values
         */
        this.name = CONST.SETTINGS;
        this.title = CONST.DEFAULTTITLE;
        this.soundsFolder = CONST.DEFAULTSOUNDSFOLDER;
        this.defaultLang = CONST.DEFAULTLANG;
        this.tmpFolder = CONST.DEFAULTTMPFOLDER;
        this.show = false;
        this.debug = false;
        this.audioType = CONST.MP3;
        this.lineWidth = CONST.DEFAULTLINEWIDTH;
    }

}

let settings = new Settings();
export default settings;
