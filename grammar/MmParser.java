// Generated from MmParser.g4 by ANTLR 4.9
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class MmParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.9", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		LineComment=1, BlockComment=2, WS=3, SQString=4, DQString=5, NQString=6, 
		String=7, CommandStart=8, CommandBlockComment=9, CommandLineComment=10, 
		CommandWS=11, RoleCommand=12, WaitCommand=13, SoundCommand=14, GroupCommand=15, 
		SettingsCommand=16, ParagraphCommand=17, CallCommand=18, ParagraphCommandBlockComment=19, 
		ParagraphCommandLineComment=20, ParagraphCommandWS=21, ParagraphName=22, 
		ParagraphParameterStart=23, ParagraphCommandEnd=24, ParagraphParameterComment=25, 
		ParagraphParameterLineComment=26, ParagraphParameterWS=27, ParagraphAlign=28, 
		ParagraphLeftMargin=29, ParagraphRightMargin=30, ParagraphMaxWidth=31, 
		ParagraphCase=32, ParagraphParameterEnd=33, ParagraphValue=34, SettingsCommandBlockComment=35, 
		SettingsCommandLineComment=36, SettingsCommandWS=37, SettingsParameterStart=38, 
		SettingsEnd=39, SettingsParameterComment=40, SettingsParameterLineComment=41, 
		SettingsParameterWS=42, SettingsTitle=43, SettingsSoundsFolder=44, SettingsTmpFolder=45, 
		SettingsAudioType=46, SettingsShow=47, SettingsDebug=48, SettingsDefaultLang=49, 
		SettingsLineWidth=50, SettingsValue=51, SettingsParameterEnd=52, RoleCommandBlockComment=53, 
		RoleCommandLineComment=54, RoleCommandWS=55, RoleName=56, RoleParameterStart=57, 
		RoleCommandEnd=58, RoleParameterBlockComment=59, RoleParameterLineComment=60, 
		RoleParameterWS=61, RolePitch=62, RoleRate=63, RoleGain=64, RoleVolume=65, 
		RoleAlias=66, RoleSOUND=67, RoleLang=68, RoleValue=69, RoleParameterEnd=70, 
		SoundCommandBlockComment=71, SoundCommandLineComment=72, SoundCommandWS=73, 
		SoundName=74, SoundParameterStart=75, SoundCommandEnd=76, SoundParameterComment=77, 
		SoundParameterLineComment=78, SoundParameterWS=79, SoundGain=80, SoundFadeIn=81, 
		SoundFadeOut=82, SoundSource=83, SoundSOUND=84, SoundStart1=85, SoundEnd1=86, 
		SoundDuration1=87, SoundStart2=88, SoundEnd2=89, SoundDuration2=90, SoundValue=91, 
		SoundParameterEnd=92, WaitCommandBlockComment=93, WaiyCommandLineComment=94, 
		WaitCommandWS=95, WaitName=96, WaitParameterStart=97, WaitCommandEnd=98, 
		WaitParameterBlockComment=99, WaitParameterLineComment=100, WaitParameterWS=101, 
		WaitDelay=102, WaitParameterEnd=103, GroupCommandBlockComment=104, GroupCommandLineComment=105, 
		GroupCommandWS=106, GroupName=107, GroupParameterStart=108, GroupCommandEnd=109, 
		GroupParameterComment=110, GroupParameterLineComment=111, GroupParameterWS=112, 
		GroupMembers=113, GroupMember=114, GroupParameterEnd=115, CallCommandBlockComment=116, 
		CallCommandLineComment=117, CallCommandWS=118, CallValue=119, CallParameterStart=120, 
		CallCommandEnd=121, CallParameterBlockComment=122, CallParameterLineComment=123, 
		CallParameterWS=124, CallParameterName=125, ParameterMembersBlockComment=126, 
		ParameterMembersLineComment=127, ParameterMembersWS=128, ParameterMember=129, 
		ParameterEnd=130, NumberWS=131, Number=132, LanguageWS=133, Language=134, 
		ParagraphValuesWS=135, AlignValue=136, CaseValue=137, BooleanWS=138, Boolean=139;
	public static final int
		RULE_mm = 0, RULE_narrator = 1, RULE_string = 2, RULE_sQString = 3, RULE_dQString = 4, 
		RULE_nQString = 5, RULE_command = 6, RULE_roleCommand = 7, RULE_soundCommand = 8, 
		RULE_waitCommand = 9, RULE_groupCommand = 10, RULE_settingsCommand = 11, 
		RULE_paragraphCommand = 12, RULE_callCommand = 13, RULE_commandEnd = 14, 
		RULE_callEnd = 15, RULE_roleName = 16, RULE_roleParameters = 17, RULE_roleParameter = 18, 
		RULE_rolePitchValue = 19, RULE_roleGainValue = 20, RULE_roleVolumeValue = 21, 
		RULE_roleRateValue = 22, RULE_roleAlias = 23, RULE_roleSOUND = 24, RULE_roleLanguageValue = 25, 
		RULE_soundName = 26, RULE_soundParameters = 27, RULE_soundParameter = 28, 
		RULE_soundGainValue = 29, RULE_soundFadeInValue = 30, RULE_soundFadeOutValue = 31, 
		RULE_soundSource = 32, RULE_soundSOUND = 33, RULE_soundStart1Value = 34, 
		RULE_soundEnd1Value = 35, RULE_soundDuration1Value = 36, RULE_soundStart2Value = 37, 
		RULE_soundEnd2Value = 38, RULE_soundDuration2Value = 39, RULE_waitName = 40, 
		RULE_waitParameters = 41, RULE_waitParameter = 42, RULE_waitDelayValue = 43, 
		RULE_groupName = 44, RULE_groupParameters = 45, RULE_groupParameter = 46, 
		RULE_groupMembers = 47, RULE_groupMember = 48, RULE_settingsParameters = 49, 
		RULE_settingsParameter = 50, RULE_settingsDefaultLang = 51, RULE_settingsTitle = 52, 
		RULE_settingsSoundsFolder = 53, RULE_settingsTmpFolder = 54, RULE_settingsShowValue = 55, 
		RULE_settingsDebugValue = 56, RULE_settingsAudioType = 57, RULE_settingsValue = 58, 
		RULE_paragraphName = 59, RULE_paragraphParameters = 60, RULE_paragraphParameter = 61, 
		RULE_paragraphAlignValue = 62, RULE_paragraphLeftMarginValue = 63, RULE_paragraphRightMarginValue = 64, 
		RULE_paragraphMaxWidthValue = 65, RULE_paragraphCaseValue = 66, RULE_paragraphValue = 67, 
		RULE_callValues = 68, RULE_callValue = 69, RULE_callParameters = 70, RULE_callParameter = 71, 
		RULE_callParameterName = 72, RULE_parameterMembers = 73, RULE_parameterMember = 74;
	private static String[] makeRuleNames() {
		return new String[] {
			"mm", "narrator", "string", "sQString", "dQString", "nQString", "command", 
			"roleCommand", "soundCommand", "waitCommand", "groupCommand", "settingsCommand", 
			"paragraphCommand", "callCommand", "commandEnd", "callEnd", "roleName", 
			"roleParameters", "roleParameter", "rolePitchValue", "roleGainValue", 
			"roleVolumeValue", "roleRateValue", "roleAlias", "roleSOUND", "roleLanguageValue", 
			"soundName", "soundParameters", "soundParameter", "soundGainValue", "soundFadeInValue", 
			"soundFadeOutValue", "soundSource", "soundSOUND", "soundStart1Value", 
			"soundEnd1Value", "soundDuration1Value", "soundStart2Value", "soundEnd2Value", 
			"soundDuration2Value", "waitName", "waitParameters", "waitParameter", 
			"waitDelayValue", "groupName", "groupParameters", "groupParameter", "groupMembers", 
			"groupMember", "settingsParameters", "settingsParameter", "settingsDefaultLang", 
			"settingsTitle", "settingsSoundsFolder", "settingsTmpFolder", "settingsShowValue", 
			"settingsDebugValue", "settingsAudioType", "settingsValue", "paragraphName", 
			"paragraphParameters", "paragraphParameter", "paragraphAlignValue", "paragraphLeftMarginValue", 
			"paragraphRightMarginValue", "paragraphMaxWidthValue", "paragraphCaseValue", 
			"paragraphValue", "callValues", "callValue", "callParameters", "callParameter", 
			"callParameterName", "parameterMembers", "parameterMember"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			"'Role'", "'Wait'", "'Sound'", "'Group'", "'Settings'", "'Paragraph'", 
			null, null, null, null, null, null, null, null, null, null, "'align'", 
			"'leftmargin'", "'rightmargin'", "'maxwidth'", "'case'", null, null, 
			null, null, null, null, null, null, null, null, "'title'", "'soundsfolder'", 
			"'tmp'", "'mp3'", "'show'", "'debug'", "'defaultlang'", "'linewidth'", 
			null, null, null, null, null, null, null, null, null, null, null, "'pitch'", 
			"'rate'", null, "'volume'", "'alias'", null, "'lang'", null, null, null, 
			null, null, null, null, null, null, null, null, null, "'fadein'", "'fadeout'", 
			"'source'", null, "'start1'", "'end1'", "'duration1'", "'start2'", "'end2'", 
			"'duration2'", null, null, null, null, null, null, null, null, null, 
			null, null, "'delay'", null, null, null, null, null, null, null, null, 
			null, null, "'members'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "LineComment", "BlockComment", "WS", "SQString", "DQString", "NQString", 
			"String", "CommandStart", "CommandBlockComment", "CommandLineComment", 
			"CommandWS", "RoleCommand", "WaitCommand", "SoundCommand", "GroupCommand", 
			"SettingsCommand", "ParagraphCommand", "CallCommand", "ParagraphCommandBlockComment", 
			"ParagraphCommandLineComment", "ParagraphCommandWS", "ParagraphName", 
			"ParagraphParameterStart", "ParagraphCommandEnd", "ParagraphParameterComment", 
			"ParagraphParameterLineComment", "ParagraphParameterWS", "ParagraphAlign", 
			"ParagraphLeftMargin", "ParagraphRightMargin", "ParagraphMaxWidth", "ParagraphCase", 
			"ParagraphParameterEnd", "ParagraphValue", "SettingsCommandBlockComment", 
			"SettingsCommandLineComment", "SettingsCommandWS", "SettingsParameterStart", 
			"SettingsEnd", "SettingsParameterComment", "SettingsParameterLineComment", 
			"SettingsParameterWS", "SettingsTitle", "SettingsSoundsFolder", "SettingsTmpFolder", 
			"SettingsAudioType", "SettingsShow", "SettingsDebug", "SettingsDefaultLang", 
			"SettingsLineWidth", "SettingsValue", "SettingsParameterEnd", "RoleCommandBlockComment", 
			"RoleCommandLineComment", "RoleCommandWS", "RoleName", "RoleParameterStart", 
			"RoleCommandEnd", "RoleParameterBlockComment", "RoleParameterLineComment", 
			"RoleParameterWS", "RolePitch", "RoleRate", "RoleGain", "RoleVolume", 
			"RoleAlias", "RoleSOUND", "RoleLang", "RoleValue", "RoleParameterEnd", 
			"SoundCommandBlockComment", "SoundCommandLineComment", "SoundCommandWS", 
			"SoundName", "SoundParameterStart", "SoundCommandEnd", "SoundParameterComment", 
			"SoundParameterLineComment", "SoundParameterWS", "SoundGain", "SoundFadeIn", 
			"SoundFadeOut", "SoundSource", "SoundSOUND", "SoundStart1", "SoundEnd1", 
			"SoundDuration1", "SoundStart2", "SoundEnd2", "SoundDuration2", "SoundValue", 
			"SoundParameterEnd", "WaitCommandBlockComment", "WaiyCommandLineComment", 
			"WaitCommandWS", "WaitName", "WaitParameterStart", "WaitCommandEnd", 
			"WaitParameterBlockComment", "WaitParameterLineComment", "WaitParameterWS", 
			"WaitDelay", "WaitParameterEnd", "GroupCommandBlockComment", "GroupCommandLineComment", 
			"GroupCommandWS", "GroupName", "GroupParameterStart", "GroupCommandEnd", 
			"GroupParameterComment", "GroupParameterLineComment", "GroupParameterWS", 
			"GroupMembers", "GroupMember", "GroupParameterEnd", "CallCommandBlockComment", 
			"CallCommandLineComment", "CallCommandWS", "CallValue", "CallParameterStart", 
			"CallCommandEnd", "CallParameterBlockComment", "CallParameterLineComment", 
			"CallParameterWS", "CallParameterName", "ParameterMembersBlockComment", 
			"ParameterMembersLineComment", "ParameterMembersWS", "ParameterMember", 
			"ParameterEnd", "NumberWS", "Number", "LanguageWS", "Language", "ParagraphValuesWS", 
			"AlignValue", "CaseValue", "BooleanWS", "Boolean"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "MmParser.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public MmParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class MmContext extends ParserRuleContext {
		public List<NarratorContext> narrator() {
			return getRuleContexts(NarratorContext.class);
		}
		public NarratorContext narrator(int i) {
			return getRuleContext(NarratorContext.class,i);
		}
		public List<CommandContext> command() {
			return getRuleContexts(CommandContext.class);
		}
		public CommandContext command(int i) {
			return getRuleContext(CommandContext.class,i);
		}
		public MmContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_mm; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).enterMm(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).exitMm(this);
		}
	}

	public final MmContext mm() throws RecognitionException {
		MmContext _localctx = new MmContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_mm);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(154);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << SQString) | (1L << DQString) | (1L << NQString) | (1L << CommandStart))) != 0)) {
				{
				setState(152);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case SQString:
				case DQString:
				case NQString:
					{
					setState(150);
					narrator();
					}
					break;
				case CommandStart:
					{
					setState(151);
					command();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(156);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NarratorContext extends ParserRuleContext {
		public List<StringContext> string() {
			return getRuleContexts(StringContext.class);
		}
		public StringContext string(int i) {
			return getRuleContext(StringContext.class,i);
		}
		public NarratorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_narrator; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).enterNarrator(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).exitNarrator(this);
		}
	}

	public final NarratorContext narrator() throws RecognitionException {
		NarratorContext _localctx = new NarratorContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_narrator);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(158); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(157);
					string();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(160); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,2,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StringContext extends ParserRuleContext {
		public SQStringContext sQString() {
			return getRuleContext(SQStringContext.class,0);
		}
		public DQStringContext dQString() {
			return getRuleContext(DQStringContext.class,0);
		}
		public NQStringContext nQString() {
			return getRuleContext(NQStringContext.class,0);
		}
		public StringContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_string; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).enterString(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).exitString(this);
		}
	}

	public final StringContext string() throws RecognitionException {
		StringContext _localctx = new StringContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_string);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(165);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case SQString:
				{
				setState(162);
				sQString();
				}
				break;
			case DQString:
				{
				setState(163);
				dQString();
				}
				break;
			case NQString:
				{
				setState(164);
				nQString();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SQStringContext extends ParserRuleContext {
		public TerminalNode SQString() { return getToken(MmParser.SQString, 0); }
		public SQStringContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sQString; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).enterSQString(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).exitSQString(this);
		}
	}

	public final SQStringContext sQString() throws RecognitionException {
		SQStringContext _localctx = new SQStringContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_sQString);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(167);
			match(SQString);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DQStringContext extends ParserRuleContext {
		public TerminalNode DQString() { return getToken(MmParser.DQString, 0); }
		public DQStringContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dQString; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).enterDQString(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).exitDQString(this);
		}
	}

	public final DQStringContext dQString() throws RecognitionException {
		DQStringContext _localctx = new DQStringContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_dQString);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(169);
			match(DQString);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NQStringContext extends ParserRuleContext {
		public TerminalNode NQString() { return getToken(MmParser.NQString, 0); }
		public NQStringContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_nQString; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).enterNQString(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).exitNQString(this);
		}
	}

	public final NQStringContext nQString() throws RecognitionException {
		NQStringContext _localctx = new NQStringContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_nQString);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(171);
			match(NQString);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CommandContext extends ParserRuleContext {
		public CommandEndContext commandEnd() {
			return getRuleContext(CommandEndContext.class,0);
		}
		public TerminalNode CommandStart() { return getToken(MmParser.CommandStart, 0); }
		public RoleCommandContext roleCommand() {
			return getRuleContext(RoleCommandContext.class,0);
		}
		public RoleNameContext roleName() {
			return getRuleContext(RoleNameContext.class,0);
		}
		public RoleParametersContext roleParameters() {
			return getRuleContext(RoleParametersContext.class,0);
		}
		public SoundCommandContext soundCommand() {
			return getRuleContext(SoundCommandContext.class,0);
		}
		public SoundNameContext soundName() {
			return getRuleContext(SoundNameContext.class,0);
		}
		public SoundParametersContext soundParameters() {
			return getRuleContext(SoundParametersContext.class,0);
		}
		public WaitCommandContext waitCommand() {
			return getRuleContext(WaitCommandContext.class,0);
		}
		public WaitNameContext waitName() {
			return getRuleContext(WaitNameContext.class,0);
		}
		public WaitParametersContext waitParameters() {
			return getRuleContext(WaitParametersContext.class,0);
		}
		public GroupCommandContext groupCommand() {
			return getRuleContext(GroupCommandContext.class,0);
		}
		public GroupNameContext groupName() {
			return getRuleContext(GroupNameContext.class,0);
		}
		public GroupParametersContext groupParameters() {
			return getRuleContext(GroupParametersContext.class,0);
		}
		public SettingsCommandContext settingsCommand() {
			return getRuleContext(SettingsCommandContext.class,0);
		}
		public SettingsParametersContext settingsParameters() {
			return getRuleContext(SettingsParametersContext.class,0);
		}
		public ParagraphCommandContext paragraphCommand() {
			return getRuleContext(ParagraphCommandContext.class,0);
		}
		public ParagraphNameContext paragraphName() {
			return getRuleContext(ParagraphNameContext.class,0);
		}
		public ParagraphParametersContext paragraphParameters() {
			return getRuleContext(ParagraphParametersContext.class,0);
		}
		public CallCommandContext callCommand() {
			return getRuleContext(CallCommandContext.class,0);
		}
		public CallValuesContext callValues() {
			return getRuleContext(CallValuesContext.class,0);
		}
		public CallParametersContext callParameters() {
			return getRuleContext(CallParametersContext.class,0);
		}
		public CommandContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_command; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).enterCommand(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).exitCommand(this);
		}
	}

	public final CommandContext command() throws RecognitionException {
		CommandContext _localctx = new CommandContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_command);
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(173);
			match(CommandStart);
			setState(201);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case RoleCommand:
				{
				setState(174);
				roleCommand();
				setState(175);
				roleName();
				setState(176);
				roleParameters();
				}
				break;
			case SoundCommand:
				{
				setState(178);
				soundCommand();
				setState(179);
				soundName();
				setState(180);
				soundParameters();
				}
				break;
			case WaitCommand:
				{
				setState(182);
				waitCommand();
				setState(183);
				waitName();
				setState(184);
				waitParameters();
				}
				break;
			case GroupCommand:
				{
				setState(186);
				groupCommand();
				setState(187);
				groupName();
				setState(188);
				groupParameters();
				}
				break;
			case SettingsCommand:
				{
				setState(190);
				settingsCommand();
				setState(191);
				settingsParameters();
				}
				break;
			case ParagraphCommand:
				{
				setState(193);
				paragraphCommand();
				setState(194);
				paragraphName();
				setState(195);
				paragraphParameters();
				}
				break;
			case CallCommand:
				{
				setState(197);
				callCommand();
				setState(198);
				callValues();
				setState(199);
				callParameters();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
			setState(203);
			commandEnd();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RoleCommandContext extends ParserRuleContext {
		public TerminalNode RoleCommand() { return getToken(MmParser.RoleCommand, 0); }
		public RoleCommandContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_roleCommand; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).enterRoleCommand(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).exitRoleCommand(this);
		}
	}

	public final RoleCommandContext roleCommand() throws RecognitionException {
		RoleCommandContext _localctx = new RoleCommandContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_roleCommand);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(205);
			match(RoleCommand);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SoundCommandContext extends ParserRuleContext {
		public TerminalNode SoundCommand() { return getToken(MmParser.SoundCommand, 0); }
		public SoundCommandContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_soundCommand; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).enterSoundCommand(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).exitSoundCommand(this);
		}
	}

	public final SoundCommandContext soundCommand() throws RecognitionException {
		SoundCommandContext _localctx = new SoundCommandContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_soundCommand);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(207);
			match(SoundCommand);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class WaitCommandContext extends ParserRuleContext {
		public TerminalNode WaitCommand() { return getToken(MmParser.WaitCommand, 0); }
		public WaitCommandContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_waitCommand; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).enterWaitCommand(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).exitWaitCommand(this);
		}
	}

	public final WaitCommandContext waitCommand() throws RecognitionException {
		WaitCommandContext _localctx = new WaitCommandContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_waitCommand);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(209);
			match(WaitCommand);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class GroupCommandContext extends ParserRuleContext {
		public TerminalNode GroupCommand() { return getToken(MmParser.GroupCommand, 0); }
		public GroupCommandContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_groupCommand; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).enterGroupCommand(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).exitGroupCommand(this);
		}
	}

	public final GroupCommandContext groupCommand() throws RecognitionException {
		GroupCommandContext _localctx = new GroupCommandContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_groupCommand);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(211);
			match(GroupCommand);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SettingsCommandContext extends ParserRuleContext {
		public TerminalNode SettingsCommand() { return getToken(MmParser.SettingsCommand, 0); }
		public SettingsCommandContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_settingsCommand; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).enterSettingsCommand(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).exitSettingsCommand(this);
		}
	}

	public final SettingsCommandContext settingsCommand() throws RecognitionException {
		SettingsCommandContext _localctx = new SettingsCommandContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_settingsCommand);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(213);
			match(SettingsCommand);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ParagraphCommandContext extends ParserRuleContext {
		public TerminalNode ParagraphCommand() { return getToken(MmParser.ParagraphCommand, 0); }
		public ParagraphCommandContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_paragraphCommand; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).enterParagraphCommand(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).exitParagraphCommand(this);
		}
	}

	public final ParagraphCommandContext paragraphCommand() throws RecognitionException {
		ParagraphCommandContext _localctx = new ParagraphCommandContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_paragraphCommand);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(215);
			match(ParagraphCommand);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CallCommandContext extends ParserRuleContext {
		public TerminalNode CallCommand() { return getToken(MmParser.CallCommand, 0); }
		public CallCommandContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_callCommand; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).enterCallCommand(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).exitCallCommand(this);
		}
	}

	public final CallCommandContext callCommand() throws RecognitionException {
		CallCommandContext _localctx = new CallCommandContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_callCommand);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(217);
			match(CallCommand);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CommandEndContext extends ParserRuleContext {
		public TerminalNode RoleCommandEnd() { return getToken(MmParser.RoleCommandEnd, 0); }
		public TerminalNode SoundCommandEnd() { return getToken(MmParser.SoundCommandEnd, 0); }
		public TerminalNode WaitCommandEnd() { return getToken(MmParser.WaitCommandEnd, 0); }
		public TerminalNode GroupCommandEnd() { return getToken(MmParser.GroupCommandEnd, 0); }
		public TerminalNode SettingsEnd() { return getToken(MmParser.SettingsEnd, 0); }
		public TerminalNode ParagraphCommandEnd() { return getToken(MmParser.ParagraphCommandEnd, 0); }
		public TerminalNode CallCommandEnd() { return getToken(MmParser.CallCommandEnd, 0); }
		public CommandEndContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_commandEnd; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).enterCommandEnd(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).exitCommandEnd(this);
		}
	}

	public final CommandEndContext commandEnd() throws RecognitionException {
		CommandEndContext _localctx = new CommandEndContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_commandEnd);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(219);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << ParagraphCommandEnd) | (1L << SettingsEnd) | (1L << RoleCommandEnd))) != 0) || ((((_la - 76)) & ~0x3f) == 0 && ((1L << (_la - 76)) & ((1L << (SoundCommandEnd - 76)) | (1L << (WaitCommandEnd - 76)) | (1L << (GroupCommandEnd - 76)) | (1L << (CallCommandEnd - 76)))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CallEndContext extends ParserRuleContext {
		public TerminalNode CallCommandEnd() { return getToken(MmParser.CallCommandEnd, 0); }
		public CallEndContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_callEnd; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).enterCallEnd(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).exitCallEnd(this);
		}
	}

	public final CallEndContext callEnd() throws RecognitionException {
		CallEndContext _localctx = new CallEndContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_callEnd);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(221);
			match(CallCommandEnd);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RoleNameContext extends ParserRuleContext {
		public TerminalNode RoleName() { return getToken(MmParser.RoleName, 0); }
		public RoleNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_roleName; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).enterRoleName(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).exitRoleName(this);
		}
	}

	public final RoleNameContext roleName() throws RecognitionException {
		RoleNameContext _localctx = new RoleNameContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_roleName);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(223);
			match(RoleName);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RoleParametersContext extends ParserRuleContext {
		public List<RoleParameterContext> roleParameter() {
			return getRuleContexts(RoleParameterContext.class);
		}
		public RoleParameterContext roleParameter(int i) {
			return getRuleContext(RoleParameterContext.class,i);
		}
		public RoleParametersContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_roleParameters; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).enterRoleParameters(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).exitRoleParameters(this);
		}
	}

	public final RoleParametersContext roleParameters() throws RecognitionException {
		RoleParametersContext _localctx = new RoleParametersContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_roleParameters);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(228);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==RoleParameterStart) {
				{
				{
				setState(225);
				roleParameter();
				}
				}
				setState(230);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RoleParameterContext extends ParserRuleContext {
		public TerminalNode RoleParameterStart() { return getToken(MmParser.RoleParameterStart, 0); }
		public TerminalNode RoleParameterEnd() { return getToken(MmParser.RoleParameterEnd, 0); }
		public TerminalNode RolePitch() { return getToken(MmParser.RolePitch, 0); }
		public RolePitchValueContext rolePitchValue() {
			return getRuleContext(RolePitchValueContext.class,0);
		}
		public TerminalNode RoleGain() { return getToken(MmParser.RoleGain, 0); }
		public RoleGainValueContext roleGainValue() {
			return getRuleContext(RoleGainValueContext.class,0);
		}
		public TerminalNode RoleVolume() { return getToken(MmParser.RoleVolume, 0); }
		public RoleVolumeValueContext roleVolumeValue() {
			return getRuleContext(RoleVolumeValueContext.class,0);
		}
		public TerminalNode RoleRate() { return getToken(MmParser.RoleRate, 0); }
		public RoleRateValueContext roleRateValue() {
			return getRuleContext(RoleRateValueContext.class,0);
		}
		public TerminalNode RoleAlias() { return getToken(MmParser.RoleAlias, 0); }
		public RoleAliasContext roleAlias() {
			return getRuleContext(RoleAliasContext.class,0);
		}
		public TerminalNode RoleSOUND() { return getToken(MmParser.RoleSOUND, 0); }
		public RoleSOUNDContext roleSOUND() {
			return getRuleContext(RoleSOUNDContext.class,0);
		}
		public TerminalNode RoleLang() { return getToken(MmParser.RoleLang, 0); }
		public RoleLanguageValueContext roleLanguageValue() {
			return getRuleContext(RoleLanguageValueContext.class,0);
		}
		public RoleParameterContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_roleParameter; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).enterRoleParameter(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).exitRoleParameter(this);
		}
	}

	public final RoleParameterContext roleParameter() throws RecognitionException {
		RoleParameterContext _localctx = new RoleParameterContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_roleParameter);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(231);
			match(RoleParameterStart);
			setState(246);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case RolePitch:
				{
				setState(232);
				match(RolePitch);
				setState(233);
				rolePitchValue();
				}
				break;
			case RoleGain:
				{
				setState(234);
				match(RoleGain);
				setState(235);
				roleGainValue();
				}
				break;
			case RoleVolume:
				{
				setState(236);
				match(RoleVolume);
				setState(237);
				roleVolumeValue();
				}
				break;
			case RoleRate:
				{
				setState(238);
				match(RoleRate);
				setState(239);
				roleRateValue();
				}
				break;
			case RoleAlias:
				{
				setState(240);
				match(RoleAlias);
				setState(241);
				roleAlias();
				}
				break;
			case RoleSOUND:
				{
				setState(242);
				match(RoleSOUND);
				setState(243);
				roleSOUND();
				}
				break;
			case RoleLang:
				{
				setState(244);
				match(RoleLang);
				setState(245);
				roleLanguageValue();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(248);
			match(RoleParameterEnd);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RolePitchValueContext extends ParserRuleContext {
		public TerminalNode Number() { return getToken(MmParser.Number, 0); }
		public RolePitchValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_rolePitchValue; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).enterRolePitchValue(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).exitRolePitchValue(this);
		}
	}

	public final RolePitchValueContext rolePitchValue() throws RecognitionException {
		RolePitchValueContext _localctx = new RolePitchValueContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_rolePitchValue);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(250);
			match(Number);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RoleGainValueContext extends ParserRuleContext {
		public TerminalNode Number() { return getToken(MmParser.Number, 0); }
		public RoleGainValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_roleGainValue; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).enterRoleGainValue(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).exitRoleGainValue(this);
		}
	}

	public final RoleGainValueContext roleGainValue() throws RecognitionException {
		RoleGainValueContext _localctx = new RoleGainValueContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_roleGainValue);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(252);
			match(Number);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RoleVolumeValueContext extends ParserRuleContext {
		public TerminalNode Number() { return getToken(MmParser.Number, 0); }
		public RoleVolumeValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_roleVolumeValue; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).enterRoleVolumeValue(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).exitRoleVolumeValue(this);
		}
	}

	public final RoleVolumeValueContext roleVolumeValue() throws RecognitionException {
		RoleVolumeValueContext _localctx = new RoleVolumeValueContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_roleVolumeValue);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(254);
			match(Number);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RoleRateValueContext extends ParserRuleContext {
		public TerminalNode Number() { return getToken(MmParser.Number, 0); }
		public RoleRateValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_roleRateValue; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).enterRoleRateValue(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).exitRoleRateValue(this);
		}
	}

	public final RoleRateValueContext roleRateValue() throws RecognitionException {
		RoleRateValueContext _localctx = new RoleRateValueContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_roleRateValue);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(256);
			match(Number);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RoleAliasContext extends ParserRuleContext {
		public TerminalNode RoleValue() { return getToken(MmParser.RoleValue, 0); }
		public RoleAliasContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_roleAlias; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).enterRoleAlias(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).exitRoleAlias(this);
		}
	}

	public final RoleAliasContext roleAlias() throws RecognitionException {
		RoleAliasContext _localctx = new RoleAliasContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_roleAlias);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(258);
			match(RoleValue);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RoleSOUNDContext extends ParserRuleContext {
		public TerminalNode RoleValue() { return getToken(MmParser.RoleValue, 0); }
		public RoleSOUNDContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_roleSOUND; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).enterRoleSOUND(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).exitRoleSOUND(this);
		}
	}

	public final RoleSOUNDContext roleSOUND() throws RecognitionException {
		RoleSOUNDContext _localctx = new RoleSOUNDContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_roleSOUND);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(260);
			match(RoleValue);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RoleLanguageValueContext extends ParserRuleContext {
		public TerminalNode RoleValue() { return getToken(MmParser.RoleValue, 0); }
		public RoleLanguageValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_roleLanguageValue; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).enterRoleLanguageValue(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).exitRoleLanguageValue(this);
		}
	}

	public final RoleLanguageValueContext roleLanguageValue() throws RecognitionException {
		RoleLanguageValueContext _localctx = new RoleLanguageValueContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_roleLanguageValue);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(262);
			match(RoleValue);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SoundNameContext extends ParserRuleContext {
		public TerminalNode SoundName() { return getToken(MmParser.SoundName, 0); }
		public SoundNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_soundName; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).enterSoundName(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).exitSoundName(this);
		}
	}

	public final SoundNameContext soundName() throws RecognitionException {
		SoundNameContext _localctx = new SoundNameContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_soundName);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(264);
			match(SoundName);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SoundParametersContext extends ParserRuleContext {
		public List<SoundParameterContext> soundParameter() {
			return getRuleContexts(SoundParameterContext.class);
		}
		public SoundParameterContext soundParameter(int i) {
			return getRuleContext(SoundParameterContext.class,i);
		}
		public SoundParametersContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_soundParameters; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).enterSoundParameters(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).exitSoundParameters(this);
		}
	}

	public final SoundParametersContext soundParameters() throws RecognitionException {
		SoundParametersContext _localctx = new SoundParametersContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_soundParameters);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(269);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==SoundParameterStart) {
				{
				{
				setState(266);
				soundParameter();
				}
				}
				setState(271);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SoundParameterContext extends ParserRuleContext {
		public TerminalNode SoundParameterStart() { return getToken(MmParser.SoundParameterStart, 0); }
		public TerminalNode SoundParameterEnd() { return getToken(MmParser.SoundParameterEnd, 0); }
		public TerminalNode SoundGain() { return getToken(MmParser.SoundGain, 0); }
		public SoundGainValueContext soundGainValue() {
			return getRuleContext(SoundGainValueContext.class,0);
		}
		public TerminalNode SoundFadeIn() { return getToken(MmParser.SoundFadeIn, 0); }
		public SoundFadeInValueContext soundFadeInValue() {
			return getRuleContext(SoundFadeInValueContext.class,0);
		}
		public TerminalNode SoundFadeOut() { return getToken(MmParser.SoundFadeOut, 0); }
		public SoundFadeOutValueContext soundFadeOutValue() {
			return getRuleContext(SoundFadeOutValueContext.class,0);
		}
		public TerminalNode SoundSource() { return getToken(MmParser.SoundSource, 0); }
		public SoundSourceContext soundSource() {
			return getRuleContext(SoundSourceContext.class,0);
		}
		public TerminalNode SoundSOUND() { return getToken(MmParser.SoundSOUND, 0); }
		public SoundSOUNDContext soundSOUND() {
			return getRuleContext(SoundSOUNDContext.class,0);
		}
		public TerminalNode SoundStart1() { return getToken(MmParser.SoundStart1, 0); }
		public SoundStart1ValueContext soundStart1Value() {
			return getRuleContext(SoundStart1ValueContext.class,0);
		}
		public TerminalNode SoundEnd1() { return getToken(MmParser.SoundEnd1, 0); }
		public SoundEnd1ValueContext soundEnd1Value() {
			return getRuleContext(SoundEnd1ValueContext.class,0);
		}
		public TerminalNode SoundDuration1() { return getToken(MmParser.SoundDuration1, 0); }
		public SoundDuration1ValueContext soundDuration1Value() {
			return getRuleContext(SoundDuration1ValueContext.class,0);
		}
		public TerminalNode SoundStart2() { return getToken(MmParser.SoundStart2, 0); }
		public SoundStart2ValueContext soundStart2Value() {
			return getRuleContext(SoundStart2ValueContext.class,0);
		}
		public TerminalNode SoundEnd2() { return getToken(MmParser.SoundEnd2, 0); }
		public SoundEnd2ValueContext soundEnd2Value() {
			return getRuleContext(SoundEnd2ValueContext.class,0);
		}
		public TerminalNode SoundDuration2() { return getToken(MmParser.SoundDuration2, 0); }
		public SoundDuration2ValueContext soundDuration2Value() {
			return getRuleContext(SoundDuration2ValueContext.class,0);
		}
		public SoundParameterContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_soundParameter; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).enterSoundParameter(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).exitSoundParameter(this);
		}
	}

	public final SoundParameterContext soundParameter() throws RecognitionException {
		SoundParameterContext _localctx = new SoundParameterContext(_ctx, getState());
		enterRule(_localctx, 56, RULE_soundParameter);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(272);
			match(SoundParameterStart);
			setState(295);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case SoundGain:
				{
				setState(273);
				match(SoundGain);
				setState(274);
				soundGainValue();
				}
				break;
			case SoundFadeIn:
				{
				setState(275);
				match(SoundFadeIn);
				setState(276);
				soundFadeInValue();
				}
				break;
			case SoundFadeOut:
				{
				setState(277);
				match(SoundFadeOut);
				setState(278);
				soundFadeOutValue();
				}
				break;
			case SoundSource:
				{
				setState(279);
				match(SoundSource);
				setState(280);
				soundSource();
				}
				break;
			case SoundSOUND:
				{
				setState(281);
				match(SoundSOUND);
				setState(282);
				soundSOUND();
				}
				break;
			case SoundStart1:
				{
				setState(283);
				match(SoundStart1);
				setState(284);
				soundStart1Value();
				}
				break;
			case SoundEnd1:
				{
				setState(285);
				match(SoundEnd1);
				setState(286);
				soundEnd1Value();
				}
				break;
			case SoundDuration1:
				{
				setState(287);
				match(SoundDuration1);
				setState(288);
				soundDuration1Value();
				}
				break;
			case SoundStart2:
				{
				setState(289);
				match(SoundStart2);
				setState(290);
				soundStart2Value();
				}
				break;
			case SoundEnd2:
				{
				setState(291);
				match(SoundEnd2);
				setState(292);
				soundEnd2Value();
				}
				break;
			case SoundDuration2:
				{
				setState(293);
				match(SoundDuration2);
				setState(294);
				soundDuration2Value();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(297);
			match(SoundParameterEnd);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SoundGainValueContext extends ParserRuleContext {
		public TerminalNode Number() { return getToken(MmParser.Number, 0); }
		public SoundGainValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_soundGainValue; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).enterSoundGainValue(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).exitSoundGainValue(this);
		}
	}

	public final SoundGainValueContext soundGainValue() throws RecognitionException {
		SoundGainValueContext _localctx = new SoundGainValueContext(_ctx, getState());
		enterRule(_localctx, 58, RULE_soundGainValue);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(299);
			match(Number);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SoundFadeInValueContext extends ParserRuleContext {
		public TerminalNode Number() { return getToken(MmParser.Number, 0); }
		public SoundFadeInValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_soundFadeInValue; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).enterSoundFadeInValue(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).exitSoundFadeInValue(this);
		}
	}

	public final SoundFadeInValueContext soundFadeInValue() throws RecognitionException {
		SoundFadeInValueContext _localctx = new SoundFadeInValueContext(_ctx, getState());
		enterRule(_localctx, 60, RULE_soundFadeInValue);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(301);
			match(Number);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SoundFadeOutValueContext extends ParserRuleContext {
		public TerminalNode Number() { return getToken(MmParser.Number, 0); }
		public SoundFadeOutValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_soundFadeOutValue; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).enterSoundFadeOutValue(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).exitSoundFadeOutValue(this);
		}
	}

	public final SoundFadeOutValueContext soundFadeOutValue() throws RecognitionException {
		SoundFadeOutValueContext _localctx = new SoundFadeOutValueContext(_ctx, getState());
		enterRule(_localctx, 62, RULE_soundFadeOutValue);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(303);
			match(Number);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SoundSourceContext extends ParserRuleContext {
		public TerminalNode SoundValue() { return getToken(MmParser.SoundValue, 0); }
		public SoundSourceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_soundSource; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).enterSoundSource(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).exitSoundSource(this);
		}
	}

	public final SoundSourceContext soundSource() throws RecognitionException {
		SoundSourceContext _localctx = new SoundSourceContext(_ctx, getState());
		enterRule(_localctx, 64, RULE_soundSource);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(305);
			match(SoundValue);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SoundSOUNDContext extends ParserRuleContext {
		public TerminalNode SoundValue() { return getToken(MmParser.SoundValue, 0); }
		public SoundSOUNDContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_soundSOUND; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).enterSoundSOUND(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).exitSoundSOUND(this);
		}
	}

	public final SoundSOUNDContext soundSOUND() throws RecognitionException {
		SoundSOUNDContext _localctx = new SoundSOUNDContext(_ctx, getState());
		enterRule(_localctx, 66, RULE_soundSOUND);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(307);
			match(SoundValue);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SoundStart1ValueContext extends ParserRuleContext {
		public TerminalNode Number() { return getToken(MmParser.Number, 0); }
		public SoundStart1ValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_soundStart1Value; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).enterSoundStart1Value(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).exitSoundStart1Value(this);
		}
	}

	public final SoundStart1ValueContext soundStart1Value() throws RecognitionException {
		SoundStart1ValueContext _localctx = new SoundStart1ValueContext(_ctx, getState());
		enterRule(_localctx, 68, RULE_soundStart1Value);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(309);
			match(Number);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SoundEnd1ValueContext extends ParserRuleContext {
		public TerminalNode Number() { return getToken(MmParser.Number, 0); }
		public SoundEnd1ValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_soundEnd1Value; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).enterSoundEnd1Value(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).exitSoundEnd1Value(this);
		}
	}

	public final SoundEnd1ValueContext soundEnd1Value() throws RecognitionException {
		SoundEnd1ValueContext _localctx = new SoundEnd1ValueContext(_ctx, getState());
		enterRule(_localctx, 70, RULE_soundEnd1Value);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(311);
			match(Number);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SoundDuration1ValueContext extends ParserRuleContext {
		public TerminalNode Number() { return getToken(MmParser.Number, 0); }
		public SoundDuration1ValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_soundDuration1Value; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).enterSoundDuration1Value(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).exitSoundDuration1Value(this);
		}
	}

	public final SoundDuration1ValueContext soundDuration1Value() throws RecognitionException {
		SoundDuration1ValueContext _localctx = new SoundDuration1ValueContext(_ctx, getState());
		enterRule(_localctx, 72, RULE_soundDuration1Value);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(313);
			match(Number);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SoundStart2ValueContext extends ParserRuleContext {
		public TerminalNode Number() { return getToken(MmParser.Number, 0); }
		public SoundStart2ValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_soundStart2Value; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).enterSoundStart2Value(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).exitSoundStart2Value(this);
		}
	}

	public final SoundStart2ValueContext soundStart2Value() throws RecognitionException {
		SoundStart2ValueContext _localctx = new SoundStart2ValueContext(_ctx, getState());
		enterRule(_localctx, 74, RULE_soundStart2Value);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(315);
			match(Number);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SoundEnd2ValueContext extends ParserRuleContext {
		public TerminalNode Number() { return getToken(MmParser.Number, 0); }
		public SoundEnd2ValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_soundEnd2Value; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).enterSoundEnd2Value(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).exitSoundEnd2Value(this);
		}
	}

	public final SoundEnd2ValueContext soundEnd2Value() throws RecognitionException {
		SoundEnd2ValueContext _localctx = new SoundEnd2ValueContext(_ctx, getState());
		enterRule(_localctx, 76, RULE_soundEnd2Value);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(317);
			match(Number);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SoundDuration2ValueContext extends ParserRuleContext {
		public TerminalNode Number() { return getToken(MmParser.Number, 0); }
		public SoundDuration2ValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_soundDuration2Value; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).enterSoundDuration2Value(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).exitSoundDuration2Value(this);
		}
	}

	public final SoundDuration2ValueContext soundDuration2Value() throws RecognitionException {
		SoundDuration2ValueContext _localctx = new SoundDuration2ValueContext(_ctx, getState());
		enterRule(_localctx, 78, RULE_soundDuration2Value);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(319);
			match(Number);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class WaitNameContext extends ParserRuleContext {
		public TerminalNode WaitName() { return getToken(MmParser.WaitName, 0); }
		public WaitNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_waitName; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).enterWaitName(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).exitWaitName(this);
		}
	}

	public final WaitNameContext waitName() throws RecognitionException {
		WaitNameContext _localctx = new WaitNameContext(_ctx, getState());
		enterRule(_localctx, 80, RULE_waitName);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(321);
			match(WaitName);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class WaitParametersContext extends ParserRuleContext {
		public List<WaitParameterContext> waitParameter() {
			return getRuleContexts(WaitParameterContext.class);
		}
		public WaitParameterContext waitParameter(int i) {
			return getRuleContext(WaitParameterContext.class,i);
		}
		public WaitParametersContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_waitParameters; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).enterWaitParameters(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).exitWaitParameters(this);
		}
	}

	public final WaitParametersContext waitParameters() throws RecognitionException {
		WaitParametersContext _localctx = new WaitParametersContext(_ctx, getState());
		enterRule(_localctx, 82, RULE_waitParameters);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(326);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==WaitParameterStart) {
				{
				{
				setState(323);
				waitParameter();
				}
				}
				setState(328);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class WaitParameterContext extends ParserRuleContext {
		public TerminalNode WaitParameterStart() { return getToken(MmParser.WaitParameterStart, 0); }
		public TerminalNode WaitParameterEnd() { return getToken(MmParser.WaitParameterEnd, 0); }
		public TerminalNode WaitDelay() { return getToken(MmParser.WaitDelay, 0); }
		public WaitDelayValueContext waitDelayValue() {
			return getRuleContext(WaitDelayValueContext.class,0);
		}
		public WaitParameterContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_waitParameter; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).enterWaitParameter(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).exitWaitParameter(this);
		}
	}

	public final WaitParameterContext waitParameter() throws RecognitionException {
		WaitParameterContext _localctx = new WaitParameterContext(_ctx, getState());
		enterRule(_localctx, 84, RULE_waitParameter);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(329);
			match(WaitParameterStart);
			{
			setState(330);
			match(WaitDelay);
			setState(331);
			waitDelayValue();
			}
			setState(333);
			match(WaitParameterEnd);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class WaitDelayValueContext extends ParserRuleContext {
		public TerminalNode Number() { return getToken(MmParser.Number, 0); }
		public WaitDelayValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_waitDelayValue; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).enterWaitDelayValue(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).exitWaitDelayValue(this);
		}
	}

	public final WaitDelayValueContext waitDelayValue() throws RecognitionException {
		WaitDelayValueContext _localctx = new WaitDelayValueContext(_ctx, getState());
		enterRule(_localctx, 86, RULE_waitDelayValue);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(335);
			match(Number);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class GroupNameContext extends ParserRuleContext {
		public TerminalNode GroupName() { return getToken(MmParser.GroupName, 0); }
		public GroupNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_groupName; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).enterGroupName(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).exitGroupName(this);
		}
	}

	public final GroupNameContext groupName() throws RecognitionException {
		GroupNameContext _localctx = new GroupNameContext(_ctx, getState());
		enterRule(_localctx, 88, RULE_groupName);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(337);
			match(GroupName);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class GroupParametersContext extends ParserRuleContext {
		public List<GroupParameterContext> groupParameter() {
			return getRuleContexts(GroupParameterContext.class);
		}
		public GroupParameterContext groupParameter(int i) {
			return getRuleContext(GroupParameterContext.class,i);
		}
		public GroupParametersContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_groupParameters; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).enterGroupParameters(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).exitGroupParameters(this);
		}
	}

	public final GroupParametersContext groupParameters() throws RecognitionException {
		GroupParametersContext _localctx = new GroupParametersContext(_ctx, getState());
		enterRule(_localctx, 90, RULE_groupParameters);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(342);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==GroupParameterStart) {
				{
				{
				setState(339);
				groupParameter();
				}
				}
				setState(344);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class GroupParameterContext extends ParserRuleContext {
		public TerminalNode GroupParameterStart() { return getToken(MmParser.GroupParameterStart, 0); }
		public TerminalNode GroupParameterEnd() { return getToken(MmParser.GroupParameterEnd, 0); }
		public TerminalNode GroupMembers() { return getToken(MmParser.GroupMembers, 0); }
		public GroupMembersContext groupMembers() {
			return getRuleContext(GroupMembersContext.class,0);
		}
		public GroupParameterContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_groupParameter; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).enterGroupParameter(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).exitGroupParameter(this);
		}
	}

	public final GroupParameterContext groupParameter() throws RecognitionException {
		GroupParameterContext _localctx = new GroupParameterContext(_ctx, getState());
		enterRule(_localctx, 92, RULE_groupParameter);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(345);
			match(GroupParameterStart);
			{
			setState(346);
			match(GroupMembers);
			setState(347);
			groupMembers();
			}
			setState(349);
			match(GroupParameterEnd);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class GroupMembersContext extends ParserRuleContext {
		public List<GroupMemberContext> groupMember() {
			return getRuleContexts(GroupMemberContext.class);
		}
		public GroupMemberContext groupMember(int i) {
			return getRuleContext(GroupMemberContext.class,i);
		}
		public GroupMembersContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_groupMembers; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).enterGroupMembers(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).exitGroupMembers(this);
		}
	}

	public final GroupMembersContext groupMembers() throws RecognitionException {
		GroupMembersContext _localctx = new GroupMembersContext(_ctx, getState());
		enterRule(_localctx, 94, RULE_groupMembers);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(352); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(351);
				groupMember();
				}
				}
				setState(354); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==GroupMember );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class GroupMemberContext extends ParserRuleContext {
		public TerminalNode GroupMember() { return getToken(MmParser.GroupMember, 0); }
		public GroupMemberContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_groupMember; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).enterGroupMember(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).exitGroupMember(this);
		}
	}

	public final GroupMemberContext groupMember() throws RecognitionException {
		GroupMemberContext _localctx = new GroupMemberContext(_ctx, getState());
		enterRule(_localctx, 96, RULE_groupMember);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(356);
			match(GroupMember);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SettingsParametersContext extends ParserRuleContext {
		public List<SettingsParameterContext> settingsParameter() {
			return getRuleContexts(SettingsParameterContext.class);
		}
		public SettingsParameterContext settingsParameter(int i) {
			return getRuleContext(SettingsParameterContext.class,i);
		}
		public SettingsParametersContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_settingsParameters; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).enterSettingsParameters(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).exitSettingsParameters(this);
		}
	}

	public final SettingsParametersContext settingsParameters() throws RecognitionException {
		SettingsParametersContext _localctx = new SettingsParametersContext(_ctx, getState());
		enterRule(_localctx, 98, RULE_settingsParameters);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(361);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==SettingsParameterStart) {
				{
				{
				setState(358);
				settingsParameter();
				}
				}
				setState(363);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SettingsParameterContext extends ParserRuleContext {
		public TerminalNode SettingsParameterStart() { return getToken(MmParser.SettingsParameterStart, 0); }
		public TerminalNode SettingsParameterEnd() { return getToken(MmParser.SettingsParameterEnd, 0); }
		public TerminalNode SettingsDefaultLang() { return getToken(MmParser.SettingsDefaultLang, 0); }
		public SettingsDefaultLangContext settingsDefaultLang() {
			return getRuleContext(SettingsDefaultLangContext.class,0);
		}
		public TerminalNode SettingsTitle() { return getToken(MmParser.SettingsTitle, 0); }
		public SettingsTitleContext settingsTitle() {
			return getRuleContext(SettingsTitleContext.class,0);
		}
		public TerminalNode SettingsSoundsFolder() { return getToken(MmParser.SettingsSoundsFolder, 0); }
		public SettingsSoundsFolderContext settingsSoundsFolder() {
			return getRuleContext(SettingsSoundsFolderContext.class,0);
		}
		public TerminalNode SettingsTmpFolder() { return getToken(MmParser.SettingsTmpFolder, 0); }
		public SettingsTmpFolderContext settingsTmpFolder() {
			return getRuleContext(SettingsTmpFolderContext.class,0);
		}
		public TerminalNode SettingsShow() { return getToken(MmParser.SettingsShow, 0); }
		public SettingsShowValueContext settingsShowValue() {
			return getRuleContext(SettingsShowValueContext.class,0);
		}
		public TerminalNode SettingsDebug() { return getToken(MmParser.SettingsDebug, 0); }
		public SettingsDebugValueContext settingsDebugValue() {
			return getRuleContext(SettingsDebugValueContext.class,0);
		}
		public TerminalNode SettingsAudioType() { return getToken(MmParser.SettingsAudioType, 0); }
		public SettingsAudioTypeContext settingsAudioType() {
			return getRuleContext(SettingsAudioTypeContext.class,0);
		}
		public SettingsParameterContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_settingsParameter; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).enterSettingsParameter(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).exitSettingsParameter(this);
		}
	}

	public final SettingsParameterContext settingsParameter() throws RecognitionException {
		SettingsParameterContext _localctx = new SettingsParameterContext(_ctx, getState());
		enterRule(_localctx, 100, RULE_settingsParameter);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(364);
			match(SettingsParameterStart);
			setState(379);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case SettingsDefaultLang:
				{
				setState(365);
				match(SettingsDefaultLang);
				setState(366);
				settingsDefaultLang();
				}
				break;
			case SettingsTitle:
				{
				setState(367);
				match(SettingsTitle);
				setState(368);
				settingsTitle();
				}
				break;
			case SettingsSoundsFolder:
				{
				setState(369);
				match(SettingsSoundsFolder);
				setState(370);
				settingsSoundsFolder();
				}
				break;
			case SettingsTmpFolder:
				{
				setState(371);
				match(SettingsTmpFolder);
				setState(372);
				settingsTmpFolder();
				}
				break;
			case SettingsShow:
				{
				setState(373);
				match(SettingsShow);
				setState(374);
				settingsShowValue();
				}
				break;
			case SettingsDebug:
				{
				setState(375);
				match(SettingsDebug);
				setState(376);
				settingsDebugValue();
				}
				break;
			case SettingsAudioType:
				{
				setState(377);
				match(SettingsAudioType);
				setState(378);
				settingsAudioType();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(381);
			match(SettingsParameterEnd);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SettingsDefaultLangContext extends ParserRuleContext {
		public TerminalNode SettingsValue() { return getToken(MmParser.SettingsValue, 0); }
		public SettingsDefaultLangContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_settingsDefaultLang; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).enterSettingsDefaultLang(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).exitSettingsDefaultLang(this);
		}
	}

	public final SettingsDefaultLangContext settingsDefaultLang() throws RecognitionException {
		SettingsDefaultLangContext _localctx = new SettingsDefaultLangContext(_ctx, getState());
		enterRule(_localctx, 102, RULE_settingsDefaultLang);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(383);
			match(SettingsValue);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SettingsTitleContext extends ParserRuleContext {
		public TerminalNode SettingsValue() { return getToken(MmParser.SettingsValue, 0); }
		public SettingsTitleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_settingsTitle; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).enterSettingsTitle(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).exitSettingsTitle(this);
		}
	}

	public final SettingsTitleContext settingsTitle() throws RecognitionException {
		SettingsTitleContext _localctx = new SettingsTitleContext(_ctx, getState());
		enterRule(_localctx, 104, RULE_settingsTitle);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(385);
			match(SettingsValue);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SettingsSoundsFolderContext extends ParserRuleContext {
		public TerminalNode SettingsValue() { return getToken(MmParser.SettingsValue, 0); }
		public SettingsSoundsFolderContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_settingsSoundsFolder; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).enterSettingsSoundsFolder(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).exitSettingsSoundsFolder(this);
		}
	}

	public final SettingsSoundsFolderContext settingsSoundsFolder() throws RecognitionException {
		SettingsSoundsFolderContext _localctx = new SettingsSoundsFolderContext(_ctx, getState());
		enterRule(_localctx, 106, RULE_settingsSoundsFolder);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(387);
			match(SettingsValue);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SettingsTmpFolderContext extends ParserRuleContext {
		public TerminalNode SettingsValue() { return getToken(MmParser.SettingsValue, 0); }
		public SettingsTmpFolderContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_settingsTmpFolder; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).enterSettingsTmpFolder(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).exitSettingsTmpFolder(this);
		}
	}

	public final SettingsTmpFolderContext settingsTmpFolder() throws RecognitionException {
		SettingsTmpFolderContext _localctx = new SettingsTmpFolderContext(_ctx, getState());
		enterRule(_localctx, 108, RULE_settingsTmpFolder);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(389);
			match(SettingsValue);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SettingsShowValueContext extends ParserRuleContext {
		public TerminalNode Boolean() { return getToken(MmParser.Boolean, 0); }
		public SettingsShowValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_settingsShowValue; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).enterSettingsShowValue(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).exitSettingsShowValue(this);
		}
	}

	public final SettingsShowValueContext settingsShowValue() throws RecognitionException {
		SettingsShowValueContext _localctx = new SettingsShowValueContext(_ctx, getState());
		enterRule(_localctx, 110, RULE_settingsShowValue);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(391);
			match(Boolean);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SettingsDebugValueContext extends ParserRuleContext {
		public TerminalNode Boolean() { return getToken(MmParser.Boolean, 0); }
		public SettingsDebugValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_settingsDebugValue; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).enterSettingsDebugValue(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).exitSettingsDebugValue(this);
		}
	}

	public final SettingsDebugValueContext settingsDebugValue() throws RecognitionException {
		SettingsDebugValueContext _localctx = new SettingsDebugValueContext(_ctx, getState());
		enterRule(_localctx, 112, RULE_settingsDebugValue);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(393);
			match(Boolean);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SettingsAudioTypeContext extends ParserRuleContext {
		public TerminalNode SettingsValue() { return getToken(MmParser.SettingsValue, 0); }
		public SettingsAudioTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_settingsAudioType; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).enterSettingsAudioType(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).exitSettingsAudioType(this);
		}
	}

	public final SettingsAudioTypeContext settingsAudioType() throws RecognitionException {
		SettingsAudioTypeContext _localctx = new SettingsAudioTypeContext(_ctx, getState());
		enterRule(_localctx, 114, RULE_settingsAudioType);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(395);
			match(SettingsValue);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SettingsValueContext extends ParserRuleContext {
		public TerminalNode SettingsValue() { return getToken(MmParser.SettingsValue, 0); }
		public SettingsValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_settingsValue; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).enterSettingsValue(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).exitSettingsValue(this);
		}
	}

	public final SettingsValueContext settingsValue() throws RecognitionException {
		SettingsValueContext _localctx = new SettingsValueContext(_ctx, getState());
		enterRule(_localctx, 116, RULE_settingsValue);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(397);
			match(SettingsValue);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ParagraphNameContext extends ParserRuleContext {
		public TerminalNode ParagraphName() { return getToken(MmParser.ParagraphName, 0); }
		public ParagraphNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_paragraphName; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).enterParagraphName(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).exitParagraphName(this);
		}
	}

	public final ParagraphNameContext paragraphName() throws RecognitionException {
		ParagraphNameContext _localctx = new ParagraphNameContext(_ctx, getState());
		enterRule(_localctx, 118, RULE_paragraphName);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(399);
			match(ParagraphName);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ParagraphParametersContext extends ParserRuleContext {
		public List<ParagraphParameterContext> paragraphParameter() {
			return getRuleContexts(ParagraphParameterContext.class);
		}
		public ParagraphParameterContext paragraphParameter(int i) {
			return getRuleContext(ParagraphParameterContext.class,i);
		}
		public ParagraphParametersContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_paragraphParameters; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).enterParagraphParameters(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).exitParagraphParameters(this);
		}
	}

	public final ParagraphParametersContext paragraphParameters() throws RecognitionException {
		ParagraphParametersContext _localctx = new ParagraphParametersContext(_ctx, getState());
		enterRule(_localctx, 120, RULE_paragraphParameters);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(404);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ParagraphParameterStart) {
				{
				{
				setState(401);
				paragraphParameter();
				}
				}
				setState(406);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ParagraphParameterContext extends ParserRuleContext {
		public TerminalNode ParagraphParameterStart() { return getToken(MmParser.ParagraphParameterStart, 0); }
		public TerminalNode ParagraphParameterEnd() { return getToken(MmParser.ParagraphParameterEnd, 0); }
		public TerminalNode ParagraphAlign() { return getToken(MmParser.ParagraphAlign, 0); }
		public ParagraphAlignValueContext paragraphAlignValue() {
			return getRuleContext(ParagraphAlignValueContext.class,0);
		}
		public TerminalNode ParagraphLeftMargin() { return getToken(MmParser.ParagraphLeftMargin, 0); }
		public ParagraphLeftMarginValueContext paragraphLeftMarginValue() {
			return getRuleContext(ParagraphLeftMarginValueContext.class,0);
		}
		public TerminalNode ParagraphRightMargin() { return getToken(MmParser.ParagraphRightMargin, 0); }
		public ParagraphRightMarginValueContext paragraphRightMarginValue() {
			return getRuleContext(ParagraphRightMarginValueContext.class,0);
		}
		public TerminalNode ParagraphMaxWidth() { return getToken(MmParser.ParagraphMaxWidth, 0); }
		public ParagraphMaxWidthValueContext paragraphMaxWidthValue() {
			return getRuleContext(ParagraphMaxWidthValueContext.class,0);
		}
		public TerminalNode ParagraphCase() { return getToken(MmParser.ParagraphCase, 0); }
		public ParagraphCaseValueContext paragraphCaseValue() {
			return getRuleContext(ParagraphCaseValueContext.class,0);
		}
		public ParagraphParameterContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_paragraphParameter; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).enterParagraphParameter(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).exitParagraphParameter(this);
		}
	}

	public final ParagraphParameterContext paragraphParameter() throws RecognitionException {
		ParagraphParameterContext _localctx = new ParagraphParameterContext(_ctx, getState());
		enterRule(_localctx, 122, RULE_paragraphParameter);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(407);
			match(ParagraphParameterStart);
			setState(418);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ParagraphAlign:
				{
				setState(408);
				match(ParagraphAlign);
				setState(409);
				paragraphAlignValue();
				}
				break;
			case ParagraphLeftMargin:
				{
				setState(410);
				match(ParagraphLeftMargin);
				setState(411);
				paragraphLeftMarginValue();
				}
				break;
			case ParagraphRightMargin:
				{
				setState(412);
				match(ParagraphRightMargin);
				setState(413);
				paragraphRightMarginValue();
				}
				break;
			case ParagraphMaxWidth:
				{
				setState(414);
				match(ParagraphMaxWidth);
				setState(415);
				paragraphMaxWidthValue();
				}
				break;
			case ParagraphCase:
				{
				setState(416);
				match(ParagraphCase);
				setState(417);
				paragraphCaseValue();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(420);
			match(ParagraphParameterEnd);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ParagraphAlignValueContext extends ParserRuleContext {
		public TerminalNode AlignValue() { return getToken(MmParser.AlignValue, 0); }
		public ParagraphAlignValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_paragraphAlignValue; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).enterParagraphAlignValue(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).exitParagraphAlignValue(this);
		}
	}

	public final ParagraphAlignValueContext paragraphAlignValue() throws RecognitionException {
		ParagraphAlignValueContext _localctx = new ParagraphAlignValueContext(_ctx, getState());
		enterRule(_localctx, 124, RULE_paragraphAlignValue);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(422);
			match(AlignValue);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ParagraphLeftMarginValueContext extends ParserRuleContext {
		public TerminalNode Number() { return getToken(MmParser.Number, 0); }
		public ParagraphLeftMarginValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_paragraphLeftMarginValue; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).enterParagraphLeftMarginValue(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).exitParagraphLeftMarginValue(this);
		}
	}

	public final ParagraphLeftMarginValueContext paragraphLeftMarginValue() throws RecognitionException {
		ParagraphLeftMarginValueContext _localctx = new ParagraphLeftMarginValueContext(_ctx, getState());
		enterRule(_localctx, 126, RULE_paragraphLeftMarginValue);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(424);
			match(Number);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ParagraphRightMarginValueContext extends ParserRuleContext {
		public TerminalNode Number() { return getToken(MmParser.Number, 0); }
		public ParagraphRightMarginValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_paragraphRightMarginValue; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).enterParagraphRightMarginValue(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).exitParagraphRightMarginValue(this);
		}
	}

	public final ParagraphRightMarginValueContext paragraphRightMarginValue() throws RecognitionException {
		ParagraphRightMarginValueContext _localctx = new ParagraphRightMarginValueContext(_ctx, getState());
		enterRule(_localctx, 128, RULE_paragraphRightMarginValue);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(426);
			match(Number);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ParagraphMaxWidthValueContext extends ParserRuleContext {
		public TerminalNode Number() { return getToken(MmParser.Number, 0); }
		public ParagraphMaxWidthValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_paragraphMaxWidthValue; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).enterParagraphMaxWidthValue(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).exitParagraphMaxWidthValue(this);
		}
	}

	public final ParagraphMaxWidthValueContext paragraphMaxWidthValue() throws RecognitionException {
		ParagraphMaxWidthValueContext _localctx = new ParagraphMaxWidthValueContext(_ctx, getState());
		enterRule(_localctx, 130, RULE_paragraphMaxWidthValue);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(428);
			match(Number);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ParagraphCaseValueContext extends ParserRuleContext {
		public TerminalNode CaseValue() { return getToken(MmParser.CaseValue, 0); }
		public ParagraphCaseValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_paragraphCaseValue; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).enterParagraphCaseValue(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).exitParagraphCaseValue(this);
		}
	}

	public final ParagraphCaseValueContext paragraphCaseValue() throws RecognitionException {
		ParagraphCaseValueContext _localctx = new ParagraphCaseValueContext(_ctx, getState());
		enterRule(_localctx, 132, RULE_paragraphCaseValue);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(430);
			match(CaseValue);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ParagraphValueContext extends ParserRuleContext {
		public TerminalNode ParagraphValue() { return getToken(MmParser.ParagraphValue, 0); }
		public ParagraphValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_paragraphValue; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).enterParagraphValue(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).exitParagraphValue(this);
		}
	}

	public final ParagraphValueContext paragraphValue() throws RecognitionException {
		ParagraphValueContext _localctx = new ParagraphValueContext(_ctx, getState());
		enterRule(_localctx, 134, RULE_paragraphValue);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(432);
			match(ParagraphValue);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CallValuesContext extends ParserRuleContext {
		public List<CallValueContext> callValue() {
			return getRuleContexts(CallValueContext.class);
		}
		public CallValueContext callValue(int i) {
			return getRuleContext(CallValueContext.class,i);
		}
		public CallValuesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_callValues; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).enterCallValues(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).exitCallValues(this);
		}
	}

	public final CallValuesContext callValues() throws RecognitionException {
		CallValuesContext _localctx = new CallValuesContext(_ctx, getState());
		enterRule(_localctx, 136, RULE_callValues);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(437);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==CallValue) {
				{
				{
				setState(434);
				callValue();
				}
				}
				setState(439);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CallValueContext extends ParserRuleContext {
		public TerminalNode CallValue() { return getToken(MmParser.CallValue, 0); }
		public CallValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_callValue; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).enterCallValue(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).exitCallValue(this);
		}
	}

	public final CallValueContext callValue() throws RecognitionException {
		CallValueContext _localctx = new CallValueContext(_ctx, getState());
		enterRule(_localctx, 138, RULE_callValue);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(440);
			match(CallValue);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CallParametersContext extends ParserRuleContext {
		public List<CallParameterContext> callParameter() {
			return getRuleContexts(CallParameterContext.class);
		}
		public CallParameterContext callParameter(int i) {
			return getRuleContext(CallParameterContext.class,i);
		}
		public CallParametersContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_callParameters; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).enterCallParameters(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).exitCallParameters(this);
		}
	}

	public final CallParametersContext callParameters() throws RecognitionException {
		CallParametersContext _localctx = new CallParametersContext(_ctx, getState());
		enterRule(_localctx, 140, RULE_callParameters);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(445);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==CallParameterStart) {
				{
				{
				setState(442);
				callParameter();
				}
				}
				setState(447);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CallParameterContext extends ParserRuleContext {
		public TerminalNode CallParameterStart() { return getToken(MmParser.CallParameterStart, 0); }
		public TerminalNode ParameterEnd() { return getToken(MmParser.ParameterEnd, 0); }
		public CallParameterNameContext callParameterName() {
			return getRuleContext(CallParameterNameContext.class,0);
		}
		public ParameterMembersContext parameterMembers() {
			return getRuleContext(ParameterMembersContext.class,0);
		}
		public CallParameterContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_callParameter; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).enterCallParameter(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).exitCallParameter(this);
		}
	}

	public final CallParameterContext callParameter() throws RecognitionException {
		CallParameterContext _localctx = new CallParameterContext(_ctx, getState());
		enterRule(_localctx, 142, RULE_callParameter);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(448);
			match(CallParameterStart);
			{
			setState(449);
			callParameterName();
			setState(450);
			parameterMembers();
			}
			setState(452);
			match(ParameterEnd);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CallParameterNameContext extends ParserRuleContext {
		public TerminalNode CallParameterName() { return getToken(MmParser.CallParameterName, 0); }
		public CallParameterNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_callParameterName; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).enterCallParameterName(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).exitCallParameterName(this);
		}
	}

	public final CallParameterNameContext callParameterName() throws RecognitionException {
		CallParameterNameContext _localctx = new CallParameterNameContext(_ctx, getState());
		enterRule(_localctx, 144, RULE_callParameterName);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(454);
			match(CallParameterName);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ParameterMembersContext extends ParserRuleContext {
		public List<ParameterMemberContext> parameterMember() {
			return getRuleContexts(ParameterMemberContext.class);
		}
		public ParameterMemberContext parameterMember(int i) {
			return getRuleContext(ParameterMemberContext.class,i);
		}
		public ParameterMembersContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parameterMembers; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).enterParameterMembers(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).exitParameterMembers(this);
		}
	}

	public final ParameterMembersContext parameterMembers() throws RecognitionException {
		ParameterMembersContext _localctx = new ParameterMembersContext(_ctx, getState());
		enterRule(_localctx, 146, RULE_parameterMembers);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(459);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ParameterMember) {
				{
				{
				setState(456);
				parameterMember();
				}
				}
				setState(461);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ParameterMemberContext extends ParserRuleContext {
		public TerminalNode ParameterMember() { return getToken(MmParser.ParameterMember, 0); }
		public ParameterMemberContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parameterMember; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).enterParameterMember(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MmParserListener ) ((MmParserListener)listener).exitParameterMember(this);
		}
	}

	public final ParameterMemberContext parameterMember() throws RecognitionException {
		ParameterMemberContext _localctx = new ParameterMemberContext(_ctx, getState());
		enterRule(_localctx, 148, RULE_parameterMember);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(462);
			match(ParameterMember);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\u008d\u01d3\4\2\t"+
		"\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\4<\t<\4=\t="+
		"\4>\t>\4?\t?\4@\t@\4A\tA\4B\tB\4C\tC\4D\tD\4E\tE\4F\tF\4G\tG\4H\tH\4I"+
		"\tI\4J\tJ\4K\tK\4L\tL\3\2\3\2\7\2\u009b\n\2\f\2\16\2\u009e\13\2\3\3\6"+
		"\3\u00a1\n\3\r\3\16\3\u00a2\3\4\3\4\3\4\5\4\u00a8\n\4\3\5\3\5\3\6\3\6"+
		"\3\7\3\7\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3"+
		"\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\5\b\u00cc\n\b\3\b\3"+
		"\b\3\t\3\t\3\n\3\n\3\13\3\13\3\f\3\f\3\r\3\r\3\16\3\16\3\17\3\17\3\20"+
		"\3\20\3\21\3\21\3\22\3\22\3\23\7\23\u00e5\n\23\f\23\16\23\u00e8\13\23"+
		"\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3\24"+
		"\3\24\5\24\u00f9\n\24\3\24\3\24\3\25\3\25\3\26\3\26\3\27\3\27\3\30\3\30"+
		"\3\31\3\31\3\32\3\32\3\33\3\33\3\34\3\34\3\35\7\35\u010e\n\35\f\35\16"+
		"\35\u0111\13\35\3\36\3\36\3\36\3\36\3\36\3\36\3\36\3\36\3\36\3\36\3\36"+
		"\3\36\3\36\3\36\3\36\3\36\3\36\3\36\3\36\3\36\3\36\3\36\3\36\5\36\u012a"+
		"\n\36\3\36\3\36\3\37\3\37\3 \3 \3!\3!\3\"\3\"\3#\3#\3$\3$\3%\3%\3&\3&"+
		"\3\'\3\'\3(\3(\3)\3)\3*\3*\3+\7+\u0147\n+\f+\16+\u014a\13+\3,\3,\3,\3"+
		",\3,\3,\3-\3-\3.\3.\3/\7/\u0157\n/\f/\16/\u015a\13/\3\60\3\60\3\60\3\60"+
		"\3\60\3\60\3\61\6\61\u0163\n\61\r\61\16\61\u0164\3\62\3\62\3\63\7\63\u016a"+
		"\n\63\f\63\16\63\u016d\13\63\3\64\3\64\3\64\3\64\3\64\3\64\3\64\3\64\3"+
		"\64\3\64\3\64\3\64\3\64\3\64\3\64\5\64\u017e\n\64\3\64\3\64\3\65\3\65"+
		"\3\66\3\66\3\67\3\67\38\38\39\39\3:\3:\3;\3;\3<\3<\3=\3=\3>\7>\u0195\n"+
		">\f>\16>\u0198\13>\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\3?\5?\u01a5\n?\3?\3?"+
		"\3@\3@\3A\3A\3B\3B\3C\3C\3D\3D\3E\3E\3F\7F\u01b6\nF\fF\16F\u01b9\13F\3"+
		"G\3G\3H\7H\u01be\nH\fH\16H\u01c1\13H\3I\3I\3I\3I\3I\3I\3J\3J\3K\7K\u01cc"+
		"\nK\fK\16K\u01cf\13K\3L\3L\3L\2\2M\2\4\6\b\n\f\16\20\22\24\26\30\32\34"+
		"\36 \"$&(*,.\60\62\64\668:<>@BDFHJLNPRTVXZ\\^`bdfhjlnprtvxz|~\u0080\u0082"+
		"\u0084\u0086\u0088\u008a\u008c\u008e\u0090\u0092\u0094\u0096\2\3\t\2\32"+
		"\32))<<NNddoo{{\2\u01b6\2\u009c\3\2\2\2\4\u00a0\3\2\2\2\6\u00a7\3\2\2"+
		"\2\b\u00a9\3\2\2\2\n\u00ab\3\2\2\2\f\u00ad\3\2\2\2\16\u00af\3\2\2\2\20"+
		"\u00cf\3\2\2\2\22\u00d1\3\2\2\2\24\u00d3\3\2\2\2\26\u00d5\3\2\2\2\30\u00d7"+
		"\3\2\2\2\32\u00d9\3\2\2\2\34\u00db\3\2\2\2\36\u00dd\3\2\2\2 \u00df\3\2"+
		"\2\2\"\u00e1\3\2\2\2$\u00e6\3\2\2\2&\u00e9\3\2\2\2(\u00fc\3\2\2\2*\u00fe"+
		"\3\2\2\2,\u0100\3\2\2\2.\u0102\3\2\2\2\60\u0104\3\2\2\2\62\u0106\3\2\2"+
		"\2\64\u0108\3\2\2\2\66\u010a\3\2\2\28\u010f\3\2\2\2:\u0112\3\2\2\2<\u012d"+
		"\3\2\2\2>\u012f\3\2\2\2@\u0131\3\2\2\2B\u0133\3\2\2\2D\u0135\3\2\2\2F"+
		"\u0137\3\2\2\2H\u0139\3\2\2\2J\u013b\3\2\2\2L\u013d\3\2\2\2N\u013f\3\2"+
		"\2\2P\u0141\3\2\2\2R\u0143\3\2\2\2T\u0148\3\2\2\2V\u014b\3\2\2\2X\u0151"+
		"\3\2\2\2Z\u0153\3\2\2\2\\\u0158\3\2\2\2^\u015b\3\2\2\2`\u0162\3\2\2\2"+
		"b\u0166\3\2\2\2d\u016b\3\2\2\2f\u016e\3\2\2\2h\u0181\3\2\2\2j\u0183\3"+
		"\2\2\2l\u0185\3\2\2\2n\u0187\3\2\2\2p\u0189\3\2\2\2r\u018b\3\2\2\2t\u018d"+
		"\3\2\2\2v\u018f\3\2\2\2x\u0191\3\2\2\2z\u0196\3\2\2\2|\u0199\3\2\2\2~"+
		"\u01a8\3\2\2\2\u0080\u01aa\3\2\2\2\u0082\u01ac\3\2\2\2\u0084\u01ae\3\2"+
		"\2\2\u0086\u01b0\3\2\2\2\u0088\u01b2\3\2\2\2\u008a\u01b7\3\2\2\2\u008c"+
		"\u01ba\3\2\2\2\u008e\u01bf\3\2\2\2\u0090\u01c2\3\2\2\2\u0092\u01c8\3\2"+
		"\2\2\u0094\u01cd\3\2\2\2\u0096\u01d0\3\2\2\2\u0098\u009b\5\4\3\2\u0099"+
		"\u009b\5\16\b\2\u009a\u0098\3\2\2\2\u009a\u0099\3\2\2\2\u009b\u009e\3"+
		"\2\2\2\u009c\u009a\3\2\2\2\u009c\u009d\3\2\2\2\u009d\3\3\2\2\2\u009e\u009c"+
		"\3\2\2\2\u009f\u00a1\5\6\4\2\u00a0\u009f\3\2\2\2\u00a1\u00a2\3\2\2\2\u00a2"+
		"\u00a0\3\2\2\2\u00a2\u00a3\3\2\2\2\u00a3\5\3\2\2\2\u00a4\u00a8\5\b\5\2"+
		"\u00a5\u00a8\5\n\6\2\u00a6\u00a8\5\f\7\2\u00a7\u00a4\3\2\2\2\u00a7\u00a5"+
		"\3\2\2\2\u00a7\u00a6\3\2\2\2\u00a8\7\3\2\2\2\u00a9\u00aa\7\6\2\2\u00aa"+
		"\t\3\2\2\2\u00ab\u00ac\7\7\2\2\u00ac\13\3\2\2\2\u00ad\u00ae\7\b\2\2\u00ae"+
		"\r\3\2\2\2\u00af\u00cb\7\n\2\2\u00b0\u00b1\5\20\t\2\u00b1\u00b2\5\"\22"+
		"\2\u00b2\u00b3\5$\23\2\u00b3\u00cc\3\2\2\2\u00b4\u00b5\5\22\n\2\u00b5"+
		"\u00b6\5\66\34\2\u00b6\u00b7\58\35\2\u00b7\u00cc\3\2\2\2\u00b8\u00b9\5"+
		"\24\13\2\u00b9\u00ba\5R*\2\u00ba\u00bb\5T+\2\u00bb\u00cc\3\2\2\2\u00bc"+
		"\u00bd\5\26\f\2\u00bd\u00be\5Z.\2\u00be\u00bf\5\\/\2\u00bf\u00cc\3\2\2"+
		"\2\u00c0\u00c1\5\30\r\2\u00c1\u00c2\5d\63\2\u00c2\u00cc\3\2\2\2\u00c3"+
		"\u00c4\5\32\16\2\u00c4\u00c5\5x=\2\u00c5\u00c6\5z>\2\u00c6\u00cc\3\2\2"+
		"\2\u00c7\u00c8\5\34\17\2\u00c8\u00c9\5\u008aF\2\u00c9\u00ca\5\u008eH\2"+
		"\u00ca\u00cc\3\2\2\2\u00cb\u00b0\3\2\2\2\u00cb\u00b4\3\2\2\2\u00cb\u00b8"+
		"\3\2\2\2\u00cb\u00bc\3\2\2\2\u00cb\u00c0\3\2\2\2\u00cb\u00c3\3\2\2\2\u00cb"+
		"\u00c7\3\2\2\2\u00cc\u00cd\3\2\2\2\u00cd\u00ce\5\36\20\2\u00ce\17\3\2"+
		"\2\2\u00cf\u00d0\7\16\2\2\u00d0\21\3\2\2\2\u00d1\u00d2\7\20\2\2\u00d2"+
		"\23\3\2\2\2\u00d3\u00d4\7\17\2\2\u00d4\25\3\2\2\2\u00d5\u00d6\7\21\2\2"+
		"\u00d6\27\3\2\2\2\u00d7\u00d8\7\22\2\2\u00d8\31\3\2\2\2\u00d9\u00da\7"+
		"\23\2\2\u00da\33\3\2\2\2\u00db\u00dc\7\24\2\2\u00dc\35\3\2\2\2\u00dd\u00de"+
		"\t\2\2\2\u00de\37\3\2\2\2\u00df\u00e0\7{\2\2\u00e0!\3\2\2\2\u00e1\u00e2"+
		"\7:\2\2\u00e2#\3\2\2\2\u00e3\u00e5\5&\24\2\u00e4\u00e3\3\2\2\2\u00e5\u00e8"+
		"\3\2\2\2\u00e6\u00e4\3\2\2\2\u00e6\u00e7\3\2\2\2\u00e7%\3\2\2\2\u00e8"+
		"\u00e6\3\2\2\2\u00e9\u00f8\7;\2\2\u00ea\u00eb\7@\2\2\u00eb\u00f9\5(\25"+
		"\2\u00ec\u00ed\7B\2\2\u00ed\u00f9\5*\26\2\u00ee\u00ef\7C\2\2\u00ef\u00f9"+
		"\5,\27\2\u00f0\u00f1\7A\2\2\u00f1\u00f9\5.\30\2\u00f2\u00f3\7D\2\2\u00f3"+
		"\u00f9\5\60\31\2\u00f4\u00f5\7E\2\2\u00f5\u00f9\5\62\32\2\u00f6\u00f7"+
		"\7F\2\2\u00f7\u00f9\5\64\33\2\u00f8\u00ea\3\2\2\2\u00f8\u00ec\3\2\2\2"+
		"\u00f8\u00ee\3\2\2\2\u00f8\u00f0\3\2\2\2\u00f8\u00f2\3\2\2\2\u00f8\u00f4"+
		"\3\2\2\2\u00f8\u00f6\3\2\2\2\u00f9\u00fa\3\2\2\2\u00fa\u00fb\7H\2\2\u00fb"+
		"\'\3\2\2\2\u00fc\u00fd\7\u0086\2\2\u00fd)\3\2\2\2\u00fe\u00ff\7\u0086"+
		"\2\2\u00ff+\3\2\2\2\u0100\u0101\7\u0086\2\2\u0101-\3\2\2\2\u0102\u0103"+
		"\7\u0086\2\2\u0103/\3\2\2\2\u0104\u0105\7G\2\2\u0105\61\3\2\2\2\u0106"+
		"\u0107\7G\2\2\u0107\63\3\2\2\2\u0108\u0109\7G\2\2\u0109\65\3\2\2\2\u010a"+
		"\u010b\7L\2\2\u010b\67\3\2\2\2\u010c\u010e\5:\36\2\u010d\u010c\3\2\2\2"+
		"\u010e\u0111\3\2\2\2\u010f\u010d\3\2\2\2\u010f\u0110\3\2\2\2\u01109\3"+
		"\2\2\2\u0111\u010f\3\2\2\2\u0112\u0129\7M\2\2\u0113\u0114\7R\2\2\u0114"+
		"\u012a\5<\37\2\u0115\u0116\7S\2\2\u0116\u012a\5> \2\u0117\u0118\7T\2\2"+
		"\u0118\u012a\5@!\2\u0119\u011a\7U\2\2\u011a\u012a\5B\"\2\u011b\u011c\7"+
		"V\2\2\u011c\u012a\5D#\2\u011d\u011e\7W\2\2\u011e\u012a\5F$\2\u011f\u0120"+
		"\7X\2\2\u0120\u012a\5H%\2\u0121\u0122\7Y\2\2\u0122\u012a\5J&\2\u0123\u0124"+
		"\7Z\2\2\u0124\u012a\5L\'\2\u0125\u0126\7[\2\2\u0126\u012a\5N(\2\u0127"+
		"\u0128\7\\\2\2\u0128\u012a\5P)\2\u0129\u0113\3\2\2\2\u0129\u0115\3\2\2"+
		"\2\u0129\u0117\3\2\2\2\u0129\u0119\3\2\2\2\u0129\u011b\3\2\2\2\u0129\u011d"+
		"\3\2\2\2\u0129\u011f\3\2\2\2\u0129\u0121\3\2\2\2\u0129\u0123\3\2\2\2\u0129"+
		"\u0125\3\2\2\2\u0129\u0127\3\2\2\2\u012a\u012b\3\2\2\2\u012b\u012c\7^"+
		"\2\2\u012c;\3\2\2\2\u012d\u012e\7\u0086\2\2\u012e=\3\2\2\2\u012f\u0130"+
		"\7\u0086\2\2\u0130?\3\2\2\2\u0131\u0132\7\u0086\2\2\u0132A\3\2\2\2\u0133"+
		"\u0134\7]\2\2\u0134C\3\2\2\2\u0135\u0136\7]\2\2\u0136E\3\2\2\2\u0137\u0138"+
		"\7\u0086\2\2\u0138G\3\2\2\2\u0139\u013a\7\u0086\2\2\u013aI\3\2\2\2\u013b"+
		"\u013c\7\u0086\2\2\u013cK\3\2\2\2\u013d\u013e\7\u0086\2\2\u013eM\3\2\2"+
		"\2\u013f\u0140\7\u0086\2\2\u0140O\3\2\2\2\u0141\u0142\7\u0086\2\2\u0142"+
		"Q\3\2\2\2\u0143\u0144\7b\2\2\u0144S\3\2\2\2\u0145\u0147\5V,\2\u0146\u0145"+
		"\3\2\2\2\u0147\u014a\3\2\2\2\u0148\u0146\3\2\2\2\u0148\u0149\3\2\2\2\u0149"+
		"U\3\2\2\2\u014a\u0148\3\2\2\2\u014b\u014c\7c\2\2\u014c\u014d\7h\2\2\u014d"+
		"\u014e\5X-\2\u014e\u014f\3\2\2\2\u014f\u0150\7i\2\2\u0150W\3\2\2\2\u0151"+
		"\u0152\7\u0086\2\2\u0152Y\3\2\2\2\u0153\u0154\7m\2\2\u0154[\3\2\2\2\u0155"+
		"\u0157\5^\60\2\u0156\u0155\3\2\2\2\u0157\u015a\3\2\2\2\u0158\u0156\3\2"+
		"\2\2\u0158\u0159\3\2\2\2\u0159]\3\2\2\2\u015a\u0158\3\2\2\2\u015b\u015c"+
		"\7n\2\2\u015c\u015d\7s\2\2\u015d\u015e\5`\61\2\u015e\u015f\3\2\2\2\u015f"+
		"\u0160\7u\2\2\u0160_\3\2\2\2\u0161\u0163\5b\62\2\u0162\u0161\3\2\2\2\u0163"+
		"\u0164\3\2\2\2\u0164\u0162\3\2\2\2\u0164\u0165\3\2\2\2\u0165a\3\2\2\2"+
		"\u0166\u0167\7t\2\2\u0167c\3\2\2\2\u0168\u016a\5f\64\2\u0169\u0168\3\2"+
		"\2\2\u016a\u016d\3\2\2\2\u016b\u0169\3\2\2\2\u016b\u016c\3\2\2\2\u016c"+
		"e\3\2\2\2\u016d\u016b\3\2\2\2\u016e\u017d\7(\2\2\u016f\u0170\7\63\2\2"+
		"\u0170\u017e\5h\65\2\u0171\u0172\7-\2\2\u0172\u017e\5j\66\2\u0173\u0174"+
		"\7.\2\2\u0174\u017e\5l\67\2\u0175\u0176\7/\2\2\u0176\u017e\5n8\2\u0177"+
		"\u0178\7\61\2\2\u0178\u017e\5p9\2\u0179\u017a\7\62\2\2\u017a\u017e\5r"+
		":\2\u017b\u017c\7\60\2\2\u017c\u017e\5t;\2\u017d\u016f\3\2\2\2\u017d\u0171"+
		"\3\2\2\2\u017d\u0173\3\2\2\2\u017d\u0175\3\2\2\2\u017d\u0177\3\2\2\2\u017d"+
		"\u0179\3\2\2\2\u017d\u017b\3\2\2\2\u017e\u017f\3\2\2\2\u017f\u0180\7\66"+
		"\2\2\u0180g\3\2\2\2\u0181\u0182\7\65\2\2\u0182i\3\2\2\2\u0183\u0184\7"+
		"\65\2\2\u0184k\3\2\2\2\u0185\u0186\7\65\2\2\u0186m\3\2\2\2\u0187\u0188"+
		"\7\65\2\2\u0188o\3\2\2\2\u0189\u018a\7\u008d\2\2\u018aq\3\2\2\2\u018b"+
		"\u018c\7\u008d\2\2\u018cs\3\2\2\2\u018d\u018e\7\65\2\2\u018eu\3\2\2\2"+
		"\u018f\u0190\7\65\2\2\u0190w\3\2\2\2\u0191\u0192\7\30\2\2\u0192y\3\2\2"+
		"\2\u0193\u0195\5|?\2\u0194\u0193\3\2\2\2\u0195\u0198\3\2\2\2\u0196\u0194"+
		"\3\2\2\2\u0196\u0197\3\2\2\2\u0197{\3\2\2\2\u0198\u0196\3\2\2\2\u0199"+
		"\u01a4\7\31\2\2\u019a\u019b\7\36\2\2\u019b\u01a5\5~@\2\u019c\u019d\7\37"+
		"\2\2\u019d\u01a5\5\u0080A\2\u019e\u019f\7 \2\2\u019f\u01a5\5\u0082B\2"+
		"\u01a0\u01a1\7!\2\2\u01a1\u01a5\5\u0084C\2\u01a2\u01a3\7\"\2\2\u01a3\u01a5"+
		"\5\u0086D\2\u01a4\u019a\3\2\2\2\u01a4\u019c\3\2\2\2\u01a4\u019e\3\2\2"+
		"\2\u01a4\u01a0\3\2\2\2\u01a4\u01a2\3\2\2\2\u01a5\u01a6\3\2\2\2\u01a6\u01a7"+
		"\7#\2\2\u01a7}\3\2\2\2\u01a8\u01a9\7\u008a\2\2\u01a9\177\3\2\2\2\u01aa"+
		"\u01ab\7\u0086\2\2\u01ab\u0081\3\2\2\2\u01ac\u01ad\7\u0086\2\2\u01ad\u0083"+
		"\3\2\2\2\u01ae\u01af\7\u0086\2\2\u01af\u0085\3\2\2\2\u01b0\u01b1\7\u008b"+
		"\2\2\u01b1\u0087\3\2\2\2\u01b2\u01b3\7$\2\2\u01b3\u0089\3\2\2\2\u01b4"+
		"\u01b6\5\u008cG\2\u01b5\u01b4\3\2\2\2\u01b6\u01b9\3\2\2\2\u01b7\u01b5"+
		"\3\2\2\2\u01b7\u01b8\3\2\2\2\u01b8\u008b\3\2\2\2\u01b9\u01b7\3\2\2\2\u01ba"+
		"\u01bb\7y\2\2\u01bb\u008d\3\2\2\2\u01bc\u01be\5\u0090I\2\u01bd\u01bc\3"+
		"\2\2\2\u01be\u01c1\3\2\2\2\u01bf\u01bd\3\2\2\2\u01bf\u01c0\3\2\2\2\u01c0"+
		"\u008f\3\2\2\2\u01c1\u01bf\3\2\2\2\u01c2\u01c3\7z\2\2\u01c3\u01c4\5\u0092"+
		"J\2\u01c4\u01c5\5\u0094K\2\u01c5\u01c6\3\2\2\2\u01c6\u01c7\7\u0084\2\2"+
		"\u01c7\u0091\3\2\2\2\u01c8\u01c9\7\177\2\2\u01c9\u0093\3\2\2\2\u01ca\u01cc"+
		"\5\u0096L\2\u01cb\u01ca\3\2\2\2\u01cc\u01cf\3\2\2\2\u01cd\u01cb\3\2\2"+
		"\2\u01cd\u01ce\3\2\2\2\u01ce\u0095\3\2\2\2\u01cf\u01cd\3\2\2\2\u01d0\u01d1"+
		"\7\u0083\2\2\u01d1\u0097\3\2\2\2\25\u009a\u009c\u00a2\u00a7\u00cb\u00e6"+
		"\u00f8\u010f\u0129\u0148\u0158\u0164\u016b\u017d\u0196\u01a4\u01b7\u01bf"+
		"\u01cd";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}