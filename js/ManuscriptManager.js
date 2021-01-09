import Role from './Role.js';
import Sound from './Sound.js';
import Wait from './Wait.js';
import Group from './Group.js';
import Paragraph from './Paragraph.js';
import settings from './Settings.js';
import Call from './Call.js';
import Tools from './Tools.js';
import MmListener from './../grammar/MmParserListener.js';
import { operators, manuscript, audioFiles, status, filters } from './thesscript.js'
import CONST from './theconstants.js'
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const ffmpeg = require('fluent-ffmpeg');
const ffmetadata = require("ffmetadata");
const proc = new ffmpeg();

export default class ManuscriptManager extends MmListener {
	
    // override default listener behavior
    constructor() {
        super();
		this.narrator = new Role(CONST.NARRATOR);
		let parenthesis = new Paragraph(CONST.PARENTHESIS);
		let name = new Paragraph('"Name"', {
			align: CONST.CENTER, case: CONST.UPPER});
		let replique = new Paragraph('"Replique"', {
			leftmargin:10, rightmargin:10});
		let title = new Paragraph('title', {align: CONST.CENTER, case: CONST.UPPER});
		let synopsis = new Paragraph('synopsis', {align: CONST.LEFT, case: CONST.UPPER});
		console.log(parenthesis.constructor.name);
    }
	// Enter a parse tree produced by MmParser#mm.
	enterMm(ctx) {
        if (settings.show) {
			console.log("Tästä se alkaa...");
		}
	}

	// Exit a parse tree produced by MmParser#mm.
	 exitMm(ctx) {
        if (settings.show) {
				Tools.waitThenDo(status, () => {
					console.log("Tähän se päättyi.");
					console.log(settings);
					// console.log("Operators");
					// console.log(operators);
					console.log("Manuscript");
					console.log(manuscript);
					console.log(audioFiles.map(element => {return element[1]}))
					console.log("-------------");
					Tools.setArray(status, true);
				 }, {});
		
		}

		manuscript.forEach(call => {
			call.operator.action(call.callValues.say || call.callValues)
		});
		
        // if (settings.show) {
		// 	console.log("AudioFiles");
		// 	console.log(audioFiles.map(audioFile => {return audioFile[1]}))
		// }

		let resultFile = settings.tmpFolder 
					     + settings.title 
				    	 + '.' + settings.audioType;

		
		Tools.waitThenDo(status, Tools.doConcatAudioFiles, 
			{ audioFiles: audioFiles, resultFile: resultFile, name: 'concat' 
		});


		Tools.waitThenDo(status, Tools.play, { audioFile: resultFile, name: 'play' });
		// let proc = new ffmpeg();
		// let volume = 0.9;
		// let rate = 1;
		// let tempo = 0.99;
		// //let chorus = '0.7:0.9:55:0.4:0.25:2';
		// //let chorus = '0.6:0.9:50|60:0.4|0.32:0.25|0.4:2|1.3';
		// //let chorus = '0.5:0.9:50|60|40:0.4|0.32|0.3:0.25|0.4|0.3:2|2.3|1.3';
		// // atrim start=:end=: / duration= (max duration)
		// // fade in: out: ?? t=in/out st= d=
		// let fade = 'afade=t=in:st=0ms:d=1000ms,afade=t=out:st=3000ms:d=1000ms';

	
		/* proc.addInput(settings.tmpFolder + 'AKU_00003.mp3')
			.audioFilters(
				'volume=' + volume, 
				'asetrate=' + (24000*rate), 
				'atempo=' + tempo,
				//'chorus=' + chorus,
				fade,
				)
			//.audioFilters('volume=1', 'atempo=1')
			.output(settings.tmpFolder + 'ffmpeg-test.mp3')
			.run();	 */
	}
    
	// Enter a parse tree produced by MmParser#narrator.
	enterNarrator(ctx) {
		this.call = new Call(this.narrator.name);
		this.call.callValues = [];
	}

	// Exit a parse tree produced by MmParser#narrator.
	exitNarrator(ctx) {
		manuscript.push(this.call);
	}

	// Enter a parse tree produced by MmParser#string.
	enterString(ctx) {
		this.call.callValues.push(ctx.getText());
	}

	// Enter a parse tree produced by MmParser#callCommand.
	enterCallCommand(ctx) {
        this.call = new Call(ctx.getText());
	}

	// Exit a parse tree produced by MmParser#callCommand.
	exitCallCommand(ctx) {
		manuscript.push(this.call);
	}

	// Enter a parse tree produced by MmParser#roleName.
	enterRoleName(ctx) {
		this.operator = new Role(ctx.getText());
	}

	// Enter a parse tree produced by MmParser#rolePitchValue.
	enterRolePitchValue(ctx) {
		this.operator.pitch = parseFloat(ctx.getText()) || 0;
	}

	// Enter a parse tree produced by MmParser#roleGainValue.
	enterRoleGainValue(ctx) {
		this.operator.gain = parseFloat(ctx.getText()) || 0;
	}

	// Enter a parse tree produced by MmParser#roleGainValue.
	enterRoleVolumeValue(ctx) {
		this.operator.volume = parseFloat(ctx.getText()) || 0;
	}

	// Enter a parse tree produced by MmParser#roleRateValue.
	enterRoleRateValue(ctx) {
		this.operator.rate  = parseInt(ctx.getText()) || 0;
	}

	// Enter a parse tree produced by MmParser#roleAlias.
	enterRoleAlias(ctx) {
        this.operator.alias = ctx.getText();
	}

	// Enter a parse tree produced by MmParser#roleSOUND.
	enterRoleSOUND(ctx) {
        this.operator.SOUND = ctx.getText();
	}

	// Enter a parse tree produced by MmParser#roleLanguageValue.
	enterRoleLanguageValue(ctx) {
        this.operator.lang = ctx.getText();
	}

	// Enter a parse tree produced by MmParser#soundName.
	enterSoundName(ctx) {
        this.operator = new Sound(ctx.getText());
	}

	// Enter a parse tree produced by MmParser#soundParameters.
	enterSoundParameters(ctx) {
		operators[this.operator.name] = this.operator;
	}

	// Enter a parse tree produced by MmParser#soundGainValue.
	enterSoundGainValue(ctx) {
		this.operator.gain = parseInt(ctx.getText()) || 0;
	}

	// Enter a parse tree produced by MmParser#soundFadeInValue.
	enterSoundFadeInValue(ctx) {
		this.operator.fadeIn = parseInt(ctx.getText()) || 0;
	}

	// Enter a parse tree produced by MmParser#soundFadeOutValue.
	enterSoundFadeOutValue(ctx) {
		this.operator.fadeOut = parseInt(ctx.getText()) || 0;
	}

	// Enter a parse tree produced by MmParser#soundSource.
	enterSoundSource(ctx) {
		this.operator.source = ctx.getText();
		this.operator.setLength()
	}

	// Exit a parse tree produced by MmParser#soundSource.
	exitSoundSource(ctx) {	
		operators[this.operator.name] = this.operator;
	}

	// Enter a parse tree produced by MmParser#soundSOUND.
	enterSoundSOUND(ctx) {
        this.operator.SOUND = ctx.getText();
	}

	// Enter a parse tree produced by MmParser#soundStart1Value.
	enterSoundStart1Value(ctx) {
		this.operator.start1 = parseInt(ctx.getText()) || 0;
	}

	// Enter a parse tree produced by MmParser#soundEnd1Value.
	enterSoundEnd1Value(ctx) {
		this.operator.end1 = parseInt(ctx.getText()) || 0;
	}

	// Enter a parse tree produced by MmParser#soundDuration1Value.
	enterSoundDuration1Value(ctx) {
		this.operator.duration1 = parseInt(ctx.getText()) || 0;
	}

	// Enter a parse tree produced by MmParser#soundStart2Value.
	enterSoundStart2Value(ctx) {
		this.operator.start2 = parseInt(ctx.getText()) || 0;
	}

	// Enter a parse tree produced by MmParser#soundEnd2Value.
	enterSoundEnd2Value(ctx) {
		this.operator.end2 = parseInt(ctx.getText()) || 0;
	}

	// Enter a parse tree produced by MmParser#soundDuration2Value.
	enterSoundDuration2Value(ctx) {
		this.operator.duration2 = parseInt(ctx.getText()) || 0;
	}

	// Enter a parse tree produced by MmParser#waitName.
	enterWaitName(ctx) {
        this.operator = new Wait(ctx.getText());
	}

	// Enter a parse tree produced by MmParser#waitParameters.
	enterWaitParameters(ctx) {
		operators[this.operator.name] = this.operator;
	}

	// Enter a parse tree produced by MmParser#waitParameter.
	enterWaitParameter(ctx) {
	}

	// Enter a parse tree produced by MmParser#waitDelayValue.
	enterWaitDelayValue(ctx) {
		this.operator.delay = parseInt(ctx.getText()) || 0;
	}

	// Enter a parse tree produced by MmParser#groupName.
	enterGroupName(ctx) {
        this.operator = new Group(ctx.getText());
	}

	// Enter a parse tree produced by MmParser#groupParameters.
	enterGroupParameters(ctx) {
		//operators[this.operator.name] = this.operator;
	}

	// Enter a parse tree produced by MmParser#groupMembers.
	enterGroupMembers(ctx) {
		this.groupMembers = []
	}

	// Exit a parse tree produced by MmParser#groupMembers.
	exitGroupMembers(ctx) {
		this.operator.groupMembers = this.groupMembers;
	}

	// Enter a parse tree produced by MmParser#groupMember.
	enterGroupMember(ctx) {
		let memberName = ctx.getText();
		let groupMember = operators[memberName];
		if (!groupMember) {
			console.log(`In the definition of Group "${this.operator.name}": undefined groupmember "${memberName}"`);
		} else {
			this.groupMembers.push(groupMember)
		}
	}

	// Enter a parse tree produced by MmParser#settingsLang.
	enterSettingsDefaultLang(ctx) {
		settings.defaultLang = ctx.getText();
		this.narrator.lang = settings.defaultLang;
	}

	// Enter a parse tree produced by MmParser#settingsTitleName.
	enterSettingsTitle(ctx) {
		settings.title = ctx.getText();
	}

	// Enter a parse tree produced by MmParser#settingsSoundsName.
	enterSettingsSoundsFolderName(ctx) {
        settings.soundsFolder = ctx.getText();
	}

	// Enter a parse tree produced by MmParser#settingsTmpFolderName.
	enterSettingsTmpFolderName(ctx) {
		settings.tmpFolder = ctx.getText();
	}

	// Enter a parse tree produced by MmParser#settingsShowValue.
	enterSettingsShowValue(ctx) {
        settings.show = ctx.getText().toUpperCase() == "TRUE";
	}

	// Enter a parse tree produced by MmParser#settingsDebugValue.
	enterSettingsDebugValue(ctx) {
        settings.debug = ctx.getText().toUpperCase() == "TRUE";
	}

	// Enter a parse tree produced by MmParser#settingsAudioTypeName.
	enterSettingsAudioTypeName(ctx) {
		settings.tmpFolder = ctx.getText();
	}

	// Enter a parse tree produced by MmParser#paragraphName.
	enterParagraphName(ctx) {
        this.operator = new Paragraph(ctx.getText());
	}

	// Enter a parse tree produced by MmParser#paragraphAlignValue.
	enterParagraphAlignValue(ctx) {
        this.operator.align = ctx.getText().toUpperCase();
	}

	// Enter a parse tree produced by MmParser#paragraphLeftMarginValue.
	enterParagraphLeftMarginValue(ctx) {
		this.operator.leftmargin = parseInt(ctx.getText()) || 0;
	}

	// Enter a parse tree produced by MmParser#paragraphRightMarginValue.
	enterParagraphRightMarginValue(ctx) {
		this.operator.rightmargin = parseInt(ctx.getText()) || 0;
	}

	// Enter a parse tree produced by MmParser#paragraphMaxWidthValue.
	enterParagraphMaxWidthValue(ctx) {	
		this.operator.maxWidth = parseInt(ctx.getText()) || 0;
	}

	// Enter a parse tree produced by MmParser#paragraphCaseValue.
	enterParagraphCaseValue(ctx) {
		this.operator.align = ctx.getText().toUpperCase();
	}

	// Enter a parse tree produced by MmParser#callValues.
	enterCallValues(ctx) {
        this.call.callValues = [];
	}

	// Enter a parse tree produced by MmParser#callValue.
	enterCallValue(ctx) {
		this.call.callValues.push(ctx.getText());
	}

	// Enter a parse tree produced by MmParser#callParameters.
	enterCallParameters(ctx) {
		this.call.callParameters = [];
	}

	// Enter a parse tree produced by MmParser#callParameterName.
	enterCallParameterName(ctx) {
		// console.log("callParameterName=",ctx.getText());
		this.callParameterName = ctx.getText();
	}

	// Enter a parse tree produced by MmParser#parameterMembers.
	enterParameterMembers(ctx) {
		this.parameterMembers = [];
	}

	// Exit a parse tree produced by MmParser#parameterMembers.
	exitParameterMembers(ctx) {
		this.call.callParameters[this.callParameterName] = this.parameterMembers;
	}

	// Enter a parse tree produced by MmParser#parameterMember.
	enterParameterMember(ctx) {
		// console.log("callParameterMember=",ctx.getText());
		this.parameterMembers.push(ctx.getText());
	}

	// Exit a parse tree produced by MmParser#parameterMember.
	exitParameterMember(ctx) {
	}
}