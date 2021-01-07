parser grammar MmParser ;
options { 
   tokenVocab = MmLexer; 
   language = 'JavaScript';
}

/**
 * Manuscript Manager (mm)
 * 
 * Syntactical rules for manuscript language
 * 
 */

mm :
   ( narrator
   | command
   )*
   ;

narrator : string+ ;

string 
   : 
   ( sQString
   | dQString
   | nQString
   )
   ;

sQString : SQString ;
dQString : DQString ;
nQString : NQString ;

command
   : 
   ( CommandStart 
      ( roleCommand roleName roleParameters 
      | soundCommand soundName soundParameters 
      | waitCommand waitName waitParameters 
      | groupCommand groupName groupParameters 
      | settingsCommand settingsParameters 
      | paragraphCommand paragraphName paragraphParameters 
      | callCommand callValues callParameters 
      ) 
   ) commandEnd
   ;

roleCommand : RoleCommand ;
soundCommand : SoundCommand ;
waitCommand : WaitCommand ;
groupCommand : GroupCommand ;
settingsCommand : SettingsCommand ;
paragraphCommand : ParagraphCommand ;
callCommand : CallCommand ;

commandEnd
   : RoleCommandEnd
   | SoundCommandEnd
   | WaitCommandEnd
   | GroupCommandEnd
   | SettingsEnd
   | ParagraphCommandEnd
   | CallCommandEnd
   ;

callEnd : CallCommandEnd ;

roleName : RoleName ;
roleParameters : roleParameter* ;
roleParameter
   : RoleParameterStart
   ( RolePitch rolePitchValue 
   | RoleGain roleGainValue
   | RoleVolume roleVolumeValue
   | RoleRate roleRateValue
   | RoleAlias roleAlias
   | RoleSOUND roleSOUND
   | RoleLang roleLanguageValue
   ) RoleParameterEnd  
   ;
rolePitchValue : Number ;
roleGainValue : Number ;
roleVolumeValue : Number ;
roleRateValue : Number ;
roleAlias : RoleValue ;
roleSOUND : RoleValue ;
roleLanguageValue : RoleValue ;

soundName : SoundName ;
soundParameters : soundParameter* ;
soundParameter
   : SoundParameterStart
   ( SoundGain soundGainValue
   | SoundFadeIn soundFadeInValue
   | SoundFadeOut soundFadeOutValue
   | SoundSource soundSource
   | SoundSOUND soundSOUND
   | SoundStart1 soundStart1Value
   | SoundEnd1 soundEnd1Value
   | SoundDuration1 soundDuration1Value
   | SoundStart2 soundStart2Value
   | SoundEnd2 soundEnd2Value
   | SoundDuration2 soundDuration2Value
   ) SoundParameterEnd  
   ;
soundGainValue : Number ;
soundFadeInValue : Number ;
soundFadeOutValue : Number ;
soundSource : SoundValue ;
soundSOUND : SoundValue ;
soundStart1Value : Number ;
soundEnd1Value : Number ;
soundDuration1Value : Number ;
soundStart2Value : Number ;
soundEnd2Value : Number ;
soundDuration2Value : Number ;

waitName : WaitName ;
waitParameters : waitParameter* ;
waitParameter
   : WaitParameterStart
   ( WaitDelay waitDelayValue
   ) WaitParameterEnd  
   ;
waitDelayValue : Number ;

groupName : GroupName ;
groupParameters : groupParameter* ;
groupParameter
   : GroupParameterStart
   ( GroupMembers groupMembers
   ) GroupParameterEnd  
   ;
groupMembers : groupMember+ ;
groupMember : GroupMember ;

settingsParameters : settingsParameter* ;
settingsParameter
   : SettingsParameterStart
   ( SettingsDefaultLang settingsDefaultLang
   | SettingsTitle settingsTitle
   | SettingsSoundsFolder settingsSoundsFolder
   | SettingsTmpFolder settingsTmpFolder
   | SettingsShow settingsShowValue
   | SettingsDebug settingsDebugValue
   | SettingsAudioType settingsAudioType
   ) SettingsParameterEnd  
   ;
settingsDefaultLang: SettingsValue;
settingsTitle: SettingsValue;
settingsSoundsFolder: SettingsValue;
settingsTmpFolder: SettingsValue;
settingsShowValue : Boolean ;
settingsDebugValue : Boolean ;
settingsAudioType: SettingsValue;
settingsValue : SettingsValue ;

paragraphName : ParagraphName ;
paragraphParameters : paragraphParameter* ;
paragraphParameter
   : ParagraphParameterStart
   ( ParagraphAlign paragraphAlignValue
   | ParagraphLeftMargin paragraphLeftMarginValue
   | ParagraphRightMargin paragraphRightMarginValue
   | ParagraphMaxWidth paragraphMaxWidthValue
   | ParagraphCase paragraphCaseValue
   ) ParagraphParameterEnd  
   ;
paragraphAlignValue : AlignValue ;
paragraphLeftMarginValue : Number ;
paragraphRightMarginValue : Number ;
paragraphMaxWidthValue : Number ;
paragraphCaseValue : CaseValue ;
paragraphValue : ParagraphValue ;

callValues : callValue* ;
callValue : CallValue ;
callParameters : callParameter* ;
callParameter 
   : CallParameterStart
   ( callParameterName parameterMembers
   ) ParameterEnd
   ;
callParameterName : CallParameterName ;
parameterMembers: parameterMember* ;
parameterMember : ParameterMember ;