lexer grammar MmLexer ;
options { 
   language = 'JavaScript';
}

/**
 * Manuscript Manager (mm)
 * 
 * Lexical rules for manuscript language
 * 
 */
fragment EOL : '\r'? '\n' ;
LineComment : '//' .*? EOL -> skip ;
BlockComment : ( '(*' .*? '*)' | '(+' .*? '+)' ) -> skip ;
WS : [ \t\r\n] -> skip ;
fragment SQ : '\'' ;
fragment DQ : '"' ;
fragment NQ : ~[() \t\r\n"'] ; //' ;

SQString : SQ .*? SQ ;
DQString : DQ .*? DQ ;
NQString : NQ+ ;
String : SQString | DQString | NQString;

CommandStart : '(' -> pushMode(CommandMode) ;

/**
 * Commands and call
 */
mode CommandMode ;
CommandBlockComment : '(*' .*? '*)' -> skip ;
CommandLineComment : '//' .*? EOL -> skip ;
CommandWS : [ \t\n\r]  -> skip ;
RoleCommand : 'Role' -> pushMode(RoleCommandMode) ;
WaitCommand : 'Wait' -> pushMode(WaitCommandMode) ;
SoundCommand : 'Sound' -> pushMode(SoundCommandMode) ;
GroupCommand : 'Group' -> pushMode(GroupCommandMode) ;
SettingsCommand : 'Settings' -> pushMode(SettingsMode) ;
ParagraphCommand : 'Paragraph' -> pushMode(ParagraphMode) ;
CallCommand : NQString -> pushMode(CallCommandMode) ;

mode ParagraphMode ;
ParagraphCommandBlockComment : '(*' .*? '*)' -> skip ;
ParagraphCommandLineComment : '//' .*? EOL -> skip ;
ParagraphCommandWS : [ \t\n\r]  -> skip ;
ParagraphName : String ;
ParagraphParameterStart : '(' -> pushMode(ParagraphParameterMode);
ParagraphCommandEnd : ')' -> mode(DEFAULT_MODE) ;

mode ParagraphParameterMode ;
ParagraphParameterComment : '(*' .*? '*)' -> skip ;
ParagraphParameterLineComment : '//' .*? EOL -> skip ;
ParagraphParameterWS : [ \t\n\r]  -> skip ;
ParagraphAlign : 'align' -> pushMode(ParagraphValuesMode) ;
ParagraphLeftMargin : 'leftmargin' -> pushMode(NumberMode) ;
ParagraphRightMargin : 'rightmargin' -> pushMode(NumberMode) ;
ParagraphMaxWidth : 'maxwidth' -> pushMode(NumberMode) ;
ParagraphCase : 'case' -> pushMode(ParagraphValuesMode) ;
ParagraphParameterEnd : ')' -> popMode ;
ParagraphValue : String ;

mode SettingsMode ;
SettingsCommandBlockComment : '(*' .*? '*)' -> skip ;
SettingsCommandLineComment : '//' .*? EOL -> skip ;
SettingsCommandWS : [ \t\n\r]  -> skip ;
// No SettingsName !!
SettingsParameterStart : '(' -> pushMode(SettingsParameterMode);
SettingsEnd : ')' -> mode(DEFAULT_MODE) ;

mode SettingsParameterMode ;
SettingsParameterComment : '(*' .*? '*)' -> skip ;
SettingsParameterLineComment : '//' .*? EOL -> skip ;
SettingsParameterWS : [ \t\n\r]  -> skip ;
SettingsTitle : 'title' ;
SettingsSoundsFolder : 'soundsfolder' ;
SettingsTmpFolder : 'tmp' ;
SettingsAudioType : 'mp3' ;
SettingsShow : 'show' -> pushMode(BooleanMode) ;
SettingsDebug : 'debug' -> pushMode(BooleanMode) ;
SettingsDefaultLang : 'defaultlang' ;
SettingsLineWidth : 'linewidth' -> pushMode(NumberMode) ;
SettingsValue : String ;
SettingsParameterEnd : ')' -> popMode ;


mode RoleCommandMode ;
RoleCommandBlockComment : '(*' .*? '*)' -> skip ;
RoleCommandLineComment : '//' .*? EOL -> skip ;
RoleCommandWS : [ \t\n\r]  -> skip ;
RoleName : String ;
RoleParameterStart : '(' -> pushMode(RoleParameterMode);
RoleCommandEnd : ')' -> mode(DEFAULT_MODE) ;

mode RoleParameterMode ;
RoleParameterBlockComment : '(*' .*? '*)' -> skip ;
RoleParameterLineComment : '//' .*? EOL -> skip ;
RoleParameterWS : [ \t\n\r]  -> skip ;
RolePitch : 'pitch' -> pushMode(NumberMode) ;
RoleRate : 'rate' -> pushMode(NumberMode) ;
RoleGain : 'gain' -> pushMode(NumberMode) ;
RoleVolume : 'volume' -> pushMode(NumberMode) ;
RoleAlias : 'alias' ;
RoleSOUND : 'SOUND' ;
RoleLang : 'lang' ;
RoleValue : String ;
RoleParameterEnd : ')' -> popMode ;

mode SoundCommandMode ;
SoundCommandBlockComment : '(*' .*? '*)' -> skip ;
SoundCommandLineComment : '//' .*? EOL -> skip ;
SoundCommandWS : [ \t\n\r]  -> skip ;
SoundName : NQString ;
SoundParameterStart : '(' -> pushMode(SoundParameterMode);
SoundCommandEnd : ')' -> mode(DEFAULT_MODE) ;

mode SoundParameterMode ;
SoundParameterComment : '(*' .*? '*)' -> skip ;
SoundParameterLineComment : '//' .*? EOL -> skip ;
SoundParameterWS : [ \t\n\r]  -> skip ;
SoundGain : 'gain' -> pushMode(NumberMode) ;
SoundFadeIn : 'fadein' -> pushMode(NumberMode) ;
SoundFadeOut : 'fadeout' -> pushMode(NumberMode) ;
SoundSource : 'source' ;
SoundSOUND : 'SOUND' ;
SoundStart1 : 'start1' -> pushMode(NumberMode) ;
SoundEnd1 : 'end1' -> pushMode(NumberMode) ;
SoundDuration1 : 'duration1' -> pushMode(NumberMode) ;
SoundStart2 : 'start2' -> pushMode(NumberMode) ;
SoundEnd2 : 'end2' -> pushMode(NumberMode) ;
SoundDuration2 : 'duration2' -> pushMode(NumberMode) ;
SoundValue : String ;
SoundParameterEnd : ')' -> popMode ;

mode WaitCommandMode ;
WaitCommandBlockComment : '(*' .*? '*)' -> skip ;
WaiyCommandLineComment : '//' .*? EOL -> skip ;
WaitCommandWS : [ \t\n\r]  -> skip ;

WaitName : NQString ;
WaitValue : [+-0123456789] -> more, pushMode(NumberMode) ;
WaitParameterStart : '(' -> pushMode(WaitParameterMode);
WaitCommandEnd : ')' ->  mode(DEFAULT_MODE) ;

mode WaitParameterMode ;
WaitParameterBlockComment : '(*' .*? '*)' -> skip ;
WaitParameterLineComment : '//' .*? EOL -> skip ;
WaitParameterWS : [ \t\n\r]  -> skip ;
WaitDelay : 'delay' -> pushMode(NumberMode) ;
WaitParameterEnd : ')' -> popMode ;

mode GroupCommandMode ;
GroupCommandBlockComment : '(*' .*? '*)' -> skip ;
GroupCommandLineComment : '//' .*? EOL -> skip ;
GroupCommandWS : [ \t\n\r]  -> skip ;
GroupName : NQString ;
GroupParameterStart : '(' -> pushMode(GroupParameterMode);
GroupCommandEnd : ')' ->  mode(DEFAULT_MODE) ;

mode GroupParameterMode ;
GroupParameterComment : '(*' .*? '*)' -> skip ;
GroupParameterLineComment : '//' .*? EOL -> skip ;
GroupParameterWS : [ \t\n\r]  -> skip ;
GroupMembers : 'members' ;
GroupMember : String ;
GroupParameterEnd : ')' -> popMode ;

mode CallCommandMode ;
CallCommandBlockComment : '(*' .*? '*)' -> skip ;
CallCommandLineComment : '//' .*? EOL -> skip ;
CallCommandWS : [ \t\n\r]  -> skip ;
CallValue : String ;
CallParameterStart : '(' -> pushMode(CallParameterMode);
CallCommandEnd : ')' -> mode(DEFAULT_MODE) ;

mode CallParameterMode ;
CallParameterBlockComment : '(*' .*? '*)' -> skip ;
CallParameterLineComment : '//' .*? EOL -> skip ;
CallParameterWS : [ \t\n\r]  -> skip ;
CallParameterName : NQString -> mode(ParameterMembersMode) ;

mode ParameterMembersMode ;
ParameterMembersBlockComment : '(*' .*? '*)' -> skip ;
ParameterMembersLineComment : '//' .*? EOL -> skip ;
ParameterMembersWS : [ \t\n\r]  -> skip ;
ParameterMember : String ;
ParameterEnd : ')' -> popMode ;

/************************
 * Types except Strings *
 ************************/

mode NumberMode ;
NumberWS : [ \t\n\r]  -> skip ;
fragment Num : [0123456789] ; 
Number : [+/-]? Num+ ([.,] Num+)? ([Ee] [+-]? Num+)? -> popMode ;

mode LanguageMode ;
LanguageWS : [ \t\n\r]  -> skip ;
// Language propably just NQString 
Language : ( 'en' | 'fi' | 'sv' ) -> popMode ; 

mode ParagraphValuesMode ;
ParagraphValuesWS : [ \t\n\r]  -> skip ;
fragment Left : ( 'left' | 'Left' | 'LEFT') ;
fragment Right : ( 'right' | 'Right' | 'RIGHT') ;
fragment Center : ( 'center' | 'Center' | 'CENTER') ;
fragment Lower : ( 'lower' | 'Lower' | 'LOWER') ;
fragment Upper : ( 'upper' | 'Upper' | 'UPPER') ;
AlignValue : ( Left | Right | Center ) -> popMode ;
CaseValue : ( Lower | Upper ) -> popMode ; 

mode BooleanMode ;
BooleanWS : [ \t\n\r]  -> skip ;
fragment True : 'True' | 'true' ; 
fragment False : 'False' | 'false' ; 
Boolean : ( True | False )  -> popMode ; 