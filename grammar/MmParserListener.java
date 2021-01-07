// Generated from MmParser.g4 by ANTLR 4.9
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link MmParser}.
 */
public interface MmParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link MmParser#mm}.
	 * @param ctx the parse tree
	 */
	void enterMm(MmParser.MmContext ctx);
	/**
	 * Exit a parse tree produced by {@link MmParser#mm}.
	 * @param ctx the parse tree
	 */
	void exitMm(MmParser.MmContext ctx);
	/**
	 * Enter a parse tree produced by {@link MmParser#narrator}.
	 * @param ctx the parse tree
	 */
	void enterNarrator(MmParser.NarratorContext ctx);
	/**
	 * Exit a parse tree produced by {@link MmParser#narrator}.
	 * @param ctx the parse tree
	 */
	void exitNarrator(MmParser.NarratorContext ctx);
	/**
	 * Enter a parse tree produced by {@link MmParser#string}.
	 * @param ctx the parse tree
	 */
	void enterString(MmParser.StringContext ctx);
	/**
	 * Exit a parse tree produced by {@link MmParser#string}.
	 * @param ctx the parse tree
	 */
	void exitString(MmParser.StringContext ctx);
	/**
	 * Enter a parse tree produced by {@link MmParser#sQString}.
	 * @param ctx the parse tree
	 */
	void enterSQString(MmParser.SQStringContext ctx);
	/**
	 * Exit a parse tree produced by {@link MmParser#sQString}.
	 * @param ctx the parse tree
	 */
	void exitSQString(MmParser.SQStringContext ctx);
	/**
	 * Enter a parse tree produced by {@link MmParser#dQString}.
	 * @param ctx the parse tree
	 */
	void enterDQString(MmParser.DQStringContext ctx);
	/**
	 * Exit a parse tree produced by {@link MmParser#dQString}.
	 * @param ctx the parse tree
	 */
	void exitDQString(MmParser.DQStringContext ctx);
	/**
	 * Enter a parse tree produced by {@link MmParser#nQString}.
	 * @param ctx the parse tree
	 */
	void enterNQString(MmParser.NQStringContext ctx);
	/**
	 * Exit a parse tree produced by {@link MmParser#nQString}.
	 * @param ctx the parse tree
	 */
	void exitNQString(MmParser.NQStringContext ctx);
	/**
	 * Enter a parse tree produced by {@link MmParser#command}.
	 * @param ctx the parse tree
	 */
	void enterCommand(MmParser.CommandContext ctx);
	/**
	 * Exit a parse tree produced by {@link MmParser#command}.
	 * @param ctx the parse tree
	 */
	void exitCommand(MmParser.CommandContext ctx);
	/**
	 * Enter a parse tree produced by {@link MmParser#roleCommand}.
	 * @param ctx the parse tree
	 */
	void enterRoleCommand(MmParser.RoleCommandContext ctx);
	/**
	 * Exit a parse tree produced by {@link MmParser#roleCommand}.
	 * @param ctx the parse tree
	 */
	void exitRoleCommand(MmParser.RoleCommandContext ctx);
	/**
	 * Enter a parse tree produced by {@link MmParser#soundCommand}.
	 * @param ctx the parse tree
	 */
	void enterSoundCommand(MmParser.SoundCommandContext ctx);
	/**
	 * Exit a parse tree produced by {@link MmParser#soundCommand}.
	 * @param ctx the parse tree
	 */
	void exitSoundCommand(MmParser.SoundCommandContext ctx);
	/**
	 * Enter a parse tree produced by {@link MmParser#waitCommand}.
	 * @param ctx the parse tree
	 */
	void enterWaitCommand(MmParser.WaitCommandContext ctx);
	/**
	 * Exit a parse tree produced by {@link MmParser#waitCommand}.
	 * @param ctx the parse tree
	 */
	void exitWaitCommand(MmParser.WaitCommandContext ctx);
	/**
	 * Enter a parse tree produced by {@link MmParser#groupCommand}.
	 * @param ctx the parse tree
	 */
	void enterGroupCommand(MmParser.GroupCommandContext ctx);
	/**
	 * Exit a parse tree produced by {@link MmParser#groupCommand}.
	 * @param ctx the parse tree
	 */
	void exitGroupCommand(MmParser.GroupCommandContext ctx);
	/**
	 * Enter a parse tree produced by {@link MmParser#settingsCommand}.
	 * @param ctx the parse tree
	 */
	void enterSettingsCommand(MmParser.SettingsCommandContext ctx);
	/**
	 * Exit a parse tree produced by {@link MmParser#settingsCommand}.
	 * @param ctx the parse tree
	 */
	void exitSettingsCommand(MmParser.SettingsCommandContext ctx);
	/**
	 * Enter a parse tree produced by {@link MmParser#paragraphCommand}.
	 * @param ctx the parse tree
	 */
	void enterParagraphCommand(MmParser.ParagraphCommandContext ctx);
	/**
	 * Exit a parse tree produced by {@link MmParser#paragraphCommand}.
	 * @param ctx the parse tree
	 */
	void exitParagraphCommand(MmParser.ParagraphCommandContext ctx);
	/**
	 * Enter a parse tree produced by {@link MmParser#callCommand}.
	 * @param ctx the parse tree
	 */
	void enterCallCommand(MmParser.CallCommandContext ctx);
	/**
	 * Exit a parse tree produced by {@link MmParser#callCommand}.
	 * @param ctx the parse tree
	 */
	void exitCallCommand(MmParser.CallCommandContext ctx);
	/**
	 * Enter a parse tree produced by {@link MmParser#commandEnd}.
	 * @param ctx the parse tree
	 */
	void enterCommandEnd(MmParser.CommandEndContext ctx);
	/**
	 * Exit a parse tree produced by {@link MmParser#commandEnd}.
	 * @param ctx the parse tree
	 */
	void exitCommandEnd(MmParser.CommandEndContext ctx);
	/**
	 * Enter a parse tree produced by {@link MmParser#callEnd}.
	 * @param ctx the parse tree
	 */
	void enterCallEnd(MmParser.CallEndContext ctx);
	/**
	 * Exit a parse tree produced by {@link MmParser#callEnd}.
	 * @param ctx the parse tree
	 */
	void exitCallEnd(MmParser.CallEndContext ctx);
	/**
	 * Enter a parse tree produced by {@link MmParser#roleName}.
	 * @param ctx the parse tree
	 */
	void enterRoleName(MmParser.RoleNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link MmParser#roleName}.
	 * @param ctx the parse tree
	 */
	void exitRoleName(MmParser.RoleNameContext ctx);
	/**
	 * Enter a parse tree produced by {@link MmParser#roleParameters}.
	 * @param ctx the parse tree
	 */
	void enterRoleParameters(MmParser.RoleParametersContext ctx);
	/**
	 * Exit a parse tree produced by {@link MmParser#roleParameters}.
	 * @param ctx the parse tree
	 */
	void exitRoleParameters(MmParser.RoleParametersContext ctx);
	/**
	 * Enter a parse tree produced by {@link MmParser#roleParameter}.
	 * @param ctx the parse tree
	 */
	void enterRoleParameter(MmParser.RoleParameterContext ctx);
	/**
	 * Exit a parse tree produced by {@link MmParser#roleParameter}.
	 * @param ctx the parse tree
	 */
	void exitRoleParameter(MmParser.RoleParameterContext ctx);
	/**
	 * Enter a parse tree produced by {@link MmParser#rolePitchValue}.
	 * @param ctx the parse tree
	 */
	void enterRolePitchValue(MmParser.RolePitchValueContext ctx);
	/**
	 * Exit a parse tree produced by {@link MmParser#rolePitchValue}.
	 * @param ctx the parse tree
	 */
	void exitRolePitchValue(MmParser.RolePitchValueContext ctx);
	/**
	 * Enter a parse tree produced by {@link MmParser#roleGainValue}.
	 * @param ctx the parse tree
	 */
	void enterRoleGainValue(MmParser.RoleGainValueContext ctx);
	/**
	 * Exit a parse tree produced by {@link MmParser#roleGainValue}.
	 * @param ctx the parse tree
	 */
	void exitRoleGainValue(MmParser.RoleGainValueContext ctx);
	/**
	 * Enter a parse tree produced by {@link MmParser#roleVolumeValue}.
	 * @param ctx the parse tree
	 */
	void enterRoleVolumeValue(MmParser.RoleVolumeValueContext ctx);
	/**
	 * Exit a parse tree produced by {@link MmParser#roleVolumeValue}.
	 * @param ctx the parse tree
	 */
	void exitRoleVolumeValue(MmParser.RoleVolumeValueContext ctx);
	/**
	 * Enter a parse tree produced by {@link MmParser#roleRateValue}.
	 * @param ctx the parse tree
	 */
	void enterRoleRateValue(MmParser.RoleRateValueContext ctx);
	/**
	 * Exit a parse tree produced by {@link MmParser#roleRateValue}.
	 * @param ctx the parse tree
	 */
	void exitRoleRateValue(MmParser.RoleRateValueContext ctx);
	/**
	 * Enter a parse tree produced by {@link MmParser#roleAlias}.
	 * @param ctx the parse tree
	 */
	void enterRoleAlias(MmParser.RoleAliasContext ctx);
	/**
	 * Exit a parse tree produced by {@link MmParser#roleAlias}.
	 * @param ctx the parse tree
	 */
	void exitRoleAlias(MmParser.RoleAliasContext ctx);
	/**
	 * Enter a parse tree produced by {@link MmParser#roleSOUND}.
	 * @param ctx the parse tree
	 */
	void enterRoleSOUND(MmParser.RoleSOUNDContext ctx);
	/**
	 * Exit a parse tree produced by {@link MmParser#roleSOUND}.
	 * @param ctx the parse tree
	 */
	void exitRoleSOUND(MmParser.RoleSOUNDContext ctx);
	/**
	 * Enter a parse tree produced by {@link MmParser#roleLanguageValue}.
	 * @param ctx the parse tree
	 */
	void enterRoleLanguageValue(MmParser.RoleLanguageValueContext ctx);
	/**
	 * Exit a parse tree produced by {@link MmParser#roleLanguageValue}.
	 * @param ctx the parse tree
	 */
	void exitRoleLanguageValue(MmParser.RoleLanguageValueContext ctx);
	/**
	 * Enter a parse tree produced by {@link MmParser#soundName}.
	 * @param ctx the parse tree
	 */
	void enterSoundName(MmParser.SoundNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link MmParser#soundName}.
	 * @param ctx the parse tree
	 */
	void exitSoundName(MmParser.SoundNameContext ctx);
	/**
	 * Enter a parse tree produced by {@link MmParser#soundParameters}.
	 * @param ctx the parse tree
	 */
	void enterSoundParameters(MmParser.SoundParametersContext ctx);
	/**
	 * Exit a parse tree produced by {@link MmParser#soundParameters}.
	 * @param ctx the parse tree
	 */
	void exitSoundParameters(MmParser.SoundParametersContext ctx);
	/**
	 * Enter a parse tree produced by {@link MmParser#soundParameter}.
	 * @param ctx the parse tree
	 */
	void enterSoundParameter(MmParser.SoundParameterContext ctx);
	/**
	 * Exit a parse tree produced by {@link MmParser#soundParameter}.
	 * @param ctx the parse tree
	 */
	void exitSoundParameter(MmParser.SoundParameterContext ctx);
	/**
	 * Enter a parse tree produced by {@link MmParser#soundGainValue}.
	 * @param ctx the parse tree
	 */
	void enterSoundGainValue(MmParser.SoundGainValueContext ctx);
	/**
	 * Exit a parse tree produced by {@link MmParser#soundGainValue}.
	 * @param ctx the parse tree
	 */
	void exitSoundGainValue(MmParser.SoundGainValueContext ctx);
	/**
	 * Enter a parse tree produced by {@link MmParser#soundFadeInValue}.
	 * @param ctx the parse tree
	 */
	void enterSoundFadeInValue(MmParser.SoundFadeInValueContext ctx);
	/**
	 * Exit a parse tree produced by {@link MmParser#soundFadeInValue}.
	 * @param ctx the parse tree
	 */
	void exitSoundFadeInValue(MmParser.SoundFadeInValueContext ctx);
	/**
	 * Enter a parse tree produced by {@link MmParser#soundFadeOutValue}.
	 * @param ctx the parse tree
	 */
	void enterSoundFadeOutValue(MmParser.SoundFadeOutValueContext ctx);
	/**
	 * Exit a parse tree produced by {@link MmParser#soundFadeOutValue}.
	 * @param ctx the parse tree
	 */
	void exitSoundFadeOutValue(MmParser.SoundFadeOutValueContext ctx);
	/**
	 * Enter a parse tree produced by {@link MmParser#soundSource}.
	 * @param ctx the parse tree
	 */
	void enterSoundSource(MmParser.SoundSourceContext ctx);
	/**
	 * Exit a parse tree produced by {@link MmParser#soundSource}.
	 * @param ctx the parse tree
	 */
	void exitSoundSource(MmParser.SoundSourceContext ctx);
	/**
	 * Enter a parse tree produced by {@link MmParser#soundSOUND}.
	 * @param ctx the parse tree
	 */
	void enterSoundSOUND(MmParser.SoundSOUNDContext ctx);
	/**
	 * Exit a parse tree produced by {@link MmParser#soundSOUND}.
	 * @param ctx the parse tree
	 */
	void exitSoundSOUND(MmParser.SoundSOUNDContext ctx);
	/**
	 * Enter a parse tree produced by {@link MmParser#soundStart1Value}.
	 * @param ctx the parse tree
	 */
	void enterSoundStart1Value(MmParser.SoundStart1ValueContext ctx);
	/**
	 * Exit a parse tree produced by {@link MmParser#soundStart1Value}.
	 * @param ctx the parse tree
	 */
	void exitSoundStart1Value(MmParser.SoundStart1ValueContext ctx);
	/**
	 * Enter a parse tree produced by {@link MmParser#soundEnd1Value}.
	 * @param ctx the parse tree
	 */
	void enterSoundEnd1Value(MmParser.SoundEnd1ValueContext ctx);
	/**
	 * Exit a parse tree produced by {@link MmParser#soundEnd1Value}.
	 * @param ctx the parse tree
	 */
	void exitSoundEnd1Value(MmParser.SoundEnd1ValueContext ctx);
	/**
	 * Enter a parse tree produced by {@link MmParser#soundDuration1Value}.
	 * @param ctx the parse tree
	 */
	void enterSoundDuration1Value(MmParser.SoundDuration1ValueContext ctx);
	/**
	 * Exit a parse tree produced by {@link MmParser#soundDuration1Value}.
	 * @param ctx the parse tree
	 */
	void exitSoundDuration1Value(MmParser.SoundDuration1ValueContext ctx);
	/**
	 * Enter a parse tree produced by {@link MmParser#soundStart2Value}.
	 * @param ctx the parse tree
	 */
	void enterSoundStart2Value(MmParser.SoundStart2ValueContext ctx);
	/**
	 * Exit a parse tree produced by {@link MmParser#soundStart2Value}.
	 * @param ctx the parse tree
	 */
	void exitSoundStart2Value(MmParser.SoundStart2ValueContext ctx);
	/**
	 * Enter a parse tree produced by {@link MmParser#soundEnd2Value}.
	 * @param ctx the parse tree
	 */
	void enterSoundEnd2Value(MmParser.SoundEnd2ValueContext ctx);
	/**
	 * Exit a parse tree produced by {@link MmParser#soundEnd2Value}.
	 * @param ctx the parse tree
	 */
	void exitSoundEnd2Value(MmParser.SoundEnd2ValueContext ctx);
	/**
	 * Enter a parse tree produced by {@link MmParser#soundDuration2Value}.
	 * @param ctx the parse tree
	 */
	void enterSoundDuration2Value(MmParser.SoundDuration2ValueContext ctx);
	/**
	 * Exit a parse tree produced by {@link MmParser#soundDuration2Value}.
	 * @param ctx the parse tree
	 */
	void exitSoundDuration2Value(MmParser.SoundDuration2ValueContext ctx);
	/**
	 * Enter a parse tree produced by {@link MmParser#waitName}.
	 * @param ctx the parse tree
	 */
	void enterWaitName(MmParser.WaitNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link MmParser#waitName}.
	 * @param ctx the parse tree
	 */
	void exitWaitName(MmParser.WaitNameContext ctx);
	/**
	 * Enter a parse tree produced by {@link MmParser#waitParameters}.
	 * @param ctx the parse tree
	 */
	void enterWaitParameters(MmParser.WaitParametersContext ctx);
	/**
	 * Exit a parse tree produced by {@link MmParser#waitParameters}.
	 * @param ctx the parse tree
	 */
	void exitWaitParameters(MmParser.WaitParametersContext ctx);
	/**
	 * Enter a parse tree produced by {@link MmParser#waitParameter}.
	 * @param ctx the parse tree
	 */
	void enterWaitParameter(MmParser.WaitParameterContext ctx);
	/**
	 * Exit a parse tree produced by {@link MmParser#waitParameter}.
	 * @param ctx the parse tree
	 */
	void exitWaitParameter(MmParser.WaitParameterContext ctx);
	/**
	 * Enter a parse tree produced by {@link MmParser#waitDelayValue}.
	 * @param ctx the parse tree
	 */
	void enterWaitDelayValue(MmParser.WaitDelayValueContext ctx);
	/**
	 * Exit a parse tree produced by {@link MmParser#waitDelayValue}.
	 * @param ctx the parse tree
	 */
	void exitWaitDelayValue(MmParser.WaitDelayValueContext ctx);
	/**
	 * Enter a parse tree produced by {@link MmParser#groupName}.
	 * @param ctx the parse tree
	 */
	void enterGroupName(MmParser.GroupNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link MmParser#groupName}.
	 * @param ctx the parse tree
	 */
	void exitGroupName(MmParser.GroupNameContext ctx);
	/**
	 * Enter a parse tree produced by {@link MmParser#groupParameters}.
	 * @param ctx the parse tree
	 */
	void enterGroupParameters(MmParser.GroupParametersContext ctx);
	/**
	 * Exit a parse tree produced by {@link MmParser#groupParameters}.
	 * @param ctx the parse tree
	 */
	void exitGroupParameters(MmParser.GroupParametersContext ctx);
	/**
	 * Enter a parse tree produced by {@link MmParser#groupParameter}.
	 * @param ctx the parse tree
	 */
	void enterGroupParameter(MmParser.GroupParameterContext ctx);
	/**
	 * Exit a parse tree produced by {@link MmParser#groupParameter}.
	 * @param ctx the parse tree
	 */
	void exitGroupParameter(MmParser.GroupParameterContext ctx);
	/**
	 * Enter a parse tree produced by {@link MmParser#groupMembers}.
	 * @param ctx the parse tree
	 */
	void enterGroupMembers(MmParser.GroupMembersContext ctx);
	/**
	 * Exit a parse tree produced by {@link MmParser#groupMembers}.
	 * @param ctx the parse tree
	 */
	void exitGroupMembers(MmParser.GroupMembersContext ctx);
	/**
	 * Enter a parse tree produced by {@link MmParser#groupMember}.
	 * @param ctx the parse tree
	 */
	void enterGroupMember(MmParser.GroupMemberContext ctx);
	/**
	 * Exit a parse tree produced by {@link MmParser#groupMember}.
	 * @param ctx the parse tree
	 */
	void exitGroupMember(MmParser.GroupMemberContext ctx);
	/**
	 * Enter a parse tree produced by {@link MmParser#settingsParameters}.
	 * @param ctx the parse tree
	 */
	void enterSettingsParameters(MmParser.SettingsParametersContext ctx);
	/**
	 * Exit a parse tree produced by {@link MmParser#settingsParameters}.
	 * @param ctx the parse tree
	 */
	void exitSettingsParameters(MmParser.SettingsParametersContext ctx);
	/**
	 * Enter a parse tree produced by {@link MmParser#settingsParameter}.
	 * @param ctx the parse tree
	 */
	void enterSettingsParameter(MmParser.SettingsParameterContext ctx);
	/**
	 * Exit a parse tree produced by {@link MmParser#settingsParameter}.
	 * @param ctx the parse tree
	 */
	void exitSettingsParameter(MmParser.SettingsParameterContext ctx);
	/**
	 * Enter a parse tree produced by {@link MmParser#settingsDefaultLang}.
	 * @param ctx the parse tree
	 */
	void enterSettingsDefaultLang(MmParser.SettingsDefaultLangContext ctx);
	/**
	 * Exit a parse tree produced by {@link MmParser#settingsDefaultLang}.
	 * @param ctx the parse tree
	 */
	void exitSettingsDefaultLang(MmParser.SettingsDefaultLangContext ctx);
	/**
	 * Enter a parse tree produced by {@link MmParser#settingsTitle}.
	 * @param ctx the parse tree
	 */
	void enterSettingsTitle(MmParser.SettingsTitleContext ctx);
	/**
	 * Exit a parse tree produced by {@link MmParser#settingsTitle}.
	 * @param ctx the parse tree
	 */
	void exitSettingsTitle(MmParser.SettingsTitleContext ctx);
	/**
	 * Enter a parse tree produced by {@link MmParser#settingsSoundsFolder}.
	 * @param ctx the parse tree
	 */
	void enterSettingsSoundsFolder(MmParser.SettingsSoundsFolderContext ctx);
	/**
	 * Exit a parse tree produced by {@link MmParser#settingsSoundsFolder}.
	 * @param ctx the parse tree
	 */
	void exitSettingsSoundsFolder(MmParser.SettingsSoundsFolderContext ctx);
	/**
	 * Enter a parse tree produced by {@link MmParser#settingsTmpFolder}.
	 * @param ctx the parse tree
	 */
	void enterSettingsTmpFolder(MmParser.SettingsTmpFolderContext ctx);
	/**
	 * Exit a parse tree produced by {@link MmParser#settingsTmpFolder}.
	 * @param ctx the parse tree
	 */
	void exitSettingsTmpFolder(MmParser.SettingsTmpFolderContext ctx);
	/**
	 * Enter a parse tree produced by {@link MmParser#settingsShowValue}.
	 * @param ctx the parse tree
	 */
	void enterSettingsShowValue(MmParser.SettingsShowValueContext ctx);
	/**
	 * Exit a parse tree produced by {@link MmParser#settingsShowValue}.
	 * @param ctx the parse tree
	 */
	void exitSettingsShowValue(MmParser.SettingsShowValueContext ctx);
	/**
	 * Enter a parse tree produced by {@link MmParser#settingsDebugValue}.
	 * @param ctx the parse tree
	 */
	void enterSettingsDebugValue(MmParser.SettingsDebugValueContext ctx);
	/**
	 * Exit a parse tree produced by {@link MmParser#settingsDebugValue}.
	 * @param ctx the parse tree
	 */
	void exitSettingsDebugValue(MmParser.SettingsDebugValueContext ctx);
	/**
	 * Enter a parse tree produced by {@link MmParser#settingsAudioType}.
	 * @param ctx the parse tree
	 */
	void enterSettingsAudioType(MmParser.SettingsAudioTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link MmParser#settingsAudioType}.
	 * @param ctx the parse tree
	 */
	void exitSettingsAudioType(MmParser.SettingsAudioTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link MmParser#settingsValue}.
	 * @param ctx the parse tree
	 */
	void enterSettingsValue(MmParser.SettingsValueContext ctx);
	/**
	 * Exit a parse tree produced by {@link MmParser#settingsValue}.
	 * @param ctx the parse tree
	 */
	void exitSettingsValue(MmParser.SettingsValueContext ctx);
	/**
	 * Enter a parse tree produced by {@link MmParser#paragraphName}.
	 * @param ctx the parse tree
	 */
	void enterParagraphName(MmParser.ParagraphNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link MmParser#paragraphName}.
	 * @param ctx the parse tree
	 */
	void exitParagraphName(MmParser.ParagraphNameContext ctx);
	/**
	 * Enter a parse tree produced by {@link MmParser#paragraphParameters}.
	 * @param ctx the parse tree
	 */
	void enterParagraphParameters(MmParser.ParagraphParametersContext ctx);
	/**
	 * Exit a parse tree produced by {@link MmParser#paragraphParameters}.
	 * @param ctx the parse tree
	 */
	void exitParagraphParameters(MmParser.ParagraphParametersContext ctx);
	/**
	 * Enter a parse tree produced by {@link MmParser#paragraphParameter}.
	 * @param ctx the parse tree
	 */
	void enterParagraphParameter(MmParser.ParagraphParameterContext ctx);
	/**
	 * Exit a parse tree produced by {@link MmParser#paragraphParameter}.
	 * @param ctx the parse tree
	 */
	void exitParagraphParameter(MmParser.ParagraphParameterContext ctx);
	/**
	 * Enter a parse tree produced by {@link MmParser#paragraphAlignValue}.
	 * @param ctx the parse tree
	 */
	void enterParagraphAlignValue(MmParser.ParagraphAlignValueContext ctx);
	/**
	 * Exit a parse tree produced by {@link MmParser#paragraphAlignValue}.
	 * @param ctx the parse tree
	 */
	void exitParagraphAlignValue(MmParser.ParagraphAlignValueContext ctx);
	/**
	 * Enter a parse tree produced by {@link MmParser#paragraphLeftMarginValue}.
	 * @param ctx the parse tree
	 */
	void enterParagraphLeftMarginValue(MmParser.ParagraphLeftMarginValueContext ctx);
	/**
	 * Exit a parse tree produced by {@link MmParser#paragraphLeftMarginValue}.
	 * @param ctx the parse tree
	 */
	void exitParagraphLeftMarginValue(MmParser.ParagraphLeftMarginValueContext ctx);
	/**
	 * Enter a parse tree produced by {@link MmParser#paragraphRightMarginValue}.
	 * @param ctx the parse tree
	 */
	void enterParagraphRightMarginValue(MmParser.ParagraphRightMarginValueContext ctx);
	/**
	 * Exit a parse tree produced by {@link MmParser#paragraphRightMarginValue}.
	 * @param ctx the parse tree
	 */
	void exitParagraphRightMarginValue(MmParser.ParagraphRightMarginValueContext ctx);
	/**
	 * Enter a parse tree produced by {@link MmParser#paragraphMaxWidthValue}.
	 * @param ctx the parse tree
	 */
	void enterParagraphMaxWidthValue(MmParser.ParagraphMaxWidthValueContext ctx);
	/**
	 * Exit a parse tree produced by {@link MmParser#paragraphMaxWidthValue}.
	 * @param ctx the parse tree
	 */
	void exitParagraphMaxWidthValue(MmParser.ParagraphMaxWidthValueContext ctx);
	/**
	 * Enter a parse tree produced by {@link MmParser#paragraphCaseValue}.
	 * @param ctx the parse tree
	 */
	void enterParagraphCaseValue(MmParser.ParagraphCaseValueContext ctx);
	/**
	 * Exit a parse tree produced by {@link MmParser#paragraphCaseValue}.
	 * @param ctx the parse tree
	 */
	void exitParagraphCaseValue(MmParser.ParagraphCaseValueContext ctx);
	/**
	 * Enter a parse tree produced by {@link MmParser#paragraphValue}.
	 * @param ctx the parse tree
	 */
	void enterParagraphValue(MmParser.ParagraphValueContext ctx);
	/**
	 * Exit a parse tree produced by {@link MmParser#paragraphValue}.
	 * @param ctx the parse tree
	 */
	void exitParagraphValue(MmParser.ParagraphValueContext ctx);
	/**
	 * Enter a parse tree produced by {@link MmParser#callValues}.
	 * @param ctx the parse tree
	 */
	void enterCallValues(MmParser.CallValuesContext ctx);
	/**
	 * Exit a parse tree produced by {@link MmParser#callValues}.
	 * @param ctx the parse tree
	 */
	void exitCallValues(MmParser.CallValuesContext ctx);
	/**
	 * Enter a parse tree produced by {@link MmParser#callValue}.
	 * @param ctx the parse tree
	 */
	void enterCallValue(MmParser.CallValueContext ctx);
	/**
	 * Exit a parse tree produced by {@link MmParser#callValue}.
	 * @param ctx the parse tree
	 */
	void exitCallValue(MmParser.CallValueContext ctx);
	/**
	 * Enter a parse tree produced by {@link MmParser#callParameters}.
	 * @param ctx the parse tree
	 */
	void enterCallParameters(MmParser.CallParametersContext ctx);
	/**
	 * Exit a parse tree produced by {@link MmParser#callParameters}.
	 * @param ctx the parse tree
	 */
	void exitCallParameters(MmParser.CallParametersContext ctx);
	/**
	 * Enter a parse tree produced by {@link MmParser#callParameter}.
	 * @param ctx the parse tree
	 */
	void enterCallParameter(MmParser.CallParameterContext ctx);
	/**
	 * Exit a parse tree produced by {@link MmParser#callParameter}.
	 * @param ctx the parse tree
	 */
	void exitCallParameter(MmParser.CallParameterContext ctx);
	/**
	 * Enter a parse tree produced by {@link MmParser#callParameterName}.
	 * @param ctx the parse tree
	 */
	void enterCallParameterName(MmParser.CallParameterNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link MmParser#callParameterName}.
	 * @param ctx the parse tree
	 */
	void exitCallParameterName(MmParser.CallParameterNameContext ctx);
	/**
	 * Enter a parse tree produced by {@link MmParser#parameterMembers}.
	 * @param ctx the parse tree
	 */
	void enterParameterMembers(MmParser.ParameterMembersContext ctx);
	/**
	 * Exit a parse tree produced by {@link MmParser#parameterMembers}.
	 * @param ctx the parse tree
	 */
	void exitParameterMembers(MmParser.ParameterMembersContext ctx);
	/**
	 * Enter a parse tree produced by {@link MmParser#parameterMember}.
	 * @param ctx the parse tree
	 */
	void enterParameterMember(MmParser.ParameterMemberContext ctx);
	/**
	 * Exit a parse tree produced by {@link MmParser#parameterMember}.
	 * @param ctx the parse tree
	 */
	void exitParameterMember(MmParser.ParameterMemberContext ctx);
}