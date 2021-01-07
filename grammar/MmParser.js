// Generated from MmParser.g4 by ANTLR 4.9
// jshint ignore: start
import antlr4 from 'antlr4';
import MmParserListener from './MmParserListener.js';

const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u008d\u01d3\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0004\u001b\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e",
    "\t\u001e\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#",
    "\t#\u0004$\t$\u0004%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004",
    "*\t*\u0004+\t+\u0004,\t,\u0004-\t-\u0004.\t.\u0004/\t/\u00040\t0\u0004",
    "1\t1\u00042\t2\u00043\t3\u00044\t4\u00045\t5\u00046\t6\u00047\t7\u0004",
    "8\t8\u00049\t9\u0004:\t:\u0004;\t;\u0004<\t<\u0004=\t=\u0004>\t>\u0004",
    "?\t?\u0004@\t@\u0004A\tA\u0004B\tB\u0004C\tC\u0004D\tD\u0004E\tE\u0004",
    "F\tF\u0004G\tG\u0004H\tH\u0004I\tI\u0004J\tJ\u0004K\tK\u0004L\tL\u0003",
    "\u0002\u0003\u0002\u0007\u0002\u009b\n\u0002\f\u0002\u000e\u0002\u009e",
    "\u000b\u0002\u0003\u0003\u0006\u0003\u00a1\n\u0003\r\u0003\u000e\u0003",
    "\u00a2\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004\u00a8\n\u0004",
    "\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007",
    "\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0005\b\u00cc\n\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\n",
    "\u0003\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003",
    "\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003",
    "\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0013\u0007\u0013\u00e5",
    "\n\u0013\f\u0013\u000e\u0013\u00e8\u000b\u0013\u0003\u0014\u0003\u0014",
    "\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014",
    "\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014",
    "\u0003\u0014\u0005\u0014\u00f9\n\u0014\u0003\u0014\u0003\u0014\u0003",
    "\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0003",
    "\u0018\u0003\u0018\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a\u0003",
    "\u001b\u0003\u001b\u0003\u001c\u0003\u001c\u0003\u001d\u0007\u001d\u010e",
    "\n\u001d\f\u001d\u000e\u001d\u0111\u000b\u001d\u0003\u001e\u0003\u001e",
    "\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e",
    "\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e",
    "\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e",
    "\u0003\u001e\u0003\u001e\u0003\u001e\u0005\u001e\u012a\n\u001e\u0003",
    "\u001e\u0003\u001e\u0003\u001f\u0003\u001f\u0003 \u0003 \u0003!\u0003",
    "!\u0003\"\u0003\"\u0003#\u0003#\u0003$\u0003$\u0003%\u0003%\u0003&\u0003",
    "&\u0003\'\u0003\'\u0003(\u0003(\u0003)\u0003)\u0003*\u0003*\u0003+\u0007",
    "+\u0147\n+\f+\u000e+\u014a\u000b+\u0003,\u0003,\u0003,\u0003,\u0003",
    ",\u0003,\u0003-\u0003-\u0003.\u0003.\u0003/\u0007/\u0157\n/\f/\u000e",
    "/\u015a\u000b/\u00030\u00030\u00030\u00030\u00030\u00030\u00031\u0006",
    "1\u0163\n1\r1\u000e1\u0164\u00032\u00032\u00033\u00073\u016a\n3\f3\u000e",
    "3\u016d\u000b3\u00034\u00034\u00034\u00034\u00034\u00034\u00034\u0003",
    "4\u00034\u00034\u00034\u00034\u00034\u00034\u00034\u00054\u017e\n4\u0003",
    "4\u00034\u00035\u00035\u00036\u00036\u00037\u00037\u00038\u00038\u0003",
    "9\u00039\u0003:\u0003:\u0003;\u0003;\u0003<\u0003<\u0003=\u0003=\u0003",
    ">\u0007>\u0195\n>\f>\u000e>\u0198\u000b>\u0003?\u0003?\u0003?\u0003",
    "?\u0003?\u0003?\u0003?\u0003?\u0003?\u0003?\u0003?\u0005?\u01a5\n?\u0003",
    "?\u0003?\u0003@\u0003@\u0003A\u0003A\u0003B\u0003B\u0003C\u0003C\u0003",
    "D\u0003D\u0003E\u0003E\u0003F\u0007F\u01b6\nF\fF\u000eF\u01b9\u000b",
    "F\u0003G\u0003G\u0003H\u0007H\u01be\nH\fH\u000eH\u01c1\u000bH\u0003",
    "I\u0003I\u0003I\u0003I\u0003I\u0003I\u0003J\u0003J\u0003K\u0007K\u01cc",
    "\nK\fK\u000eK\u01cf\u000bK\u0003L\u0003L\u0003L\u0002\u0002M\u0002\u0004",
    "\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e ",
    "\"$&(*,.02468:<>@BDFHJLNPRTVXZ\\^`bdfhjlnprtvxz|~\u0080\u0082\u0084",
    "\u0086\u0088\u008a\u008c\u008e\u0090\u0092\u0094\u0096\u0002\u0003\t",
    "\u0002\u001a\u001a))<<NNddoo{{\u0002\u01b6\u0002\u009c\u0003\u0002\u0002",
    "\u0002\u0004\u00a0\u0003\u0002\u0002\u0002\u0006\u00a7\u0003\u0002\u0002",
    "\u0002\b\u00a9\u0003\u0002\u0002\u0002\n\u00ab\u0003\u0002\u0002\u0002",
    "\f\u00ad\u0003\u0002\u0002\u0002\u000e\u00af\u0003\u0002\u0002\u0002",
    "\u0010\u00cf\u0003\u0002\u0002\u0002\u0012\u00d1\u0003\u0002\u0002\u0002",
    "\u0014\u00d3\u0003\u0002\u0002\u0002\u0016\u00d5\u0003\u0002\u0002\u0002",
    "\u0018\u00d7\u0003\u0002\u0002\u0002\u001a\u00d9\u0003\u0002\u0002\u0002",
    "\u001c\u00db\u0003\u0002\u0002\u0002\u001e\u00dd\u0003\u0002\u0002\u0002",
    " \u00df\u0003\u0002\u0002\u0002\"\u00e1\u0003\u0002\u0002\u0002$\u00e6",
    "\u0003\u0002\u0002\u0002&\u00e9\u0003\u0002\u0002\u0002(\u00fc\u0003",
    "\u0002\u0002\u0002*\u00fe\u0003\u0002\u0002\u0002,\u0100\u0003\u0002",
    "\u0002\u0002.\u0102\u0003\u0002\u0002\u00020\u0104\u0003\u0002\u0002",
    "\u00022\u0106\u0003\u0002\u0002\u00024\u0108\u0003\u0002\u0002\u0002",
    "6\u010a\u0003\u0002\u0002\u00028\u010f\u0003\u0002\u0002\u0002:\u0112",
    "\u0003\u0002\u0002\u0002<\u012d\u0003\u0002\u0002\u0002>\u012f\u0003",
    "\u0002\u0002\u0002@\u0131\u0003\u0002\u0002\u0002B\u0133\u0003\u0002",
    "\u0002\u0002D\u0135\u0003\u0002\u0002\u0002F\u0137\u0003\u0002\u0002",
    "\u0002H\u0139\u0003\u0002\u0002\u0002J\u013b\u0003\u0002\u0002\u0002",
    "L\u013d\u0003\u0002\u0002\u0002N\u013f\u0003\u0002\u0002\u0002P\u0141",
    "\u0003\u0002\u0002\u0002R\u0143\u0003\u0002\u0002\u0002T\u0148\u0003",
    "\u0002\u0002\u0002V\u014b\u0003\u0002\u0002\u0002X\u0151\u0003\u0002",
    "\u0002\u0002Z\u0153\u0003\u0002\u0002\u0002\\\u0158\u0003\u0002\u0002",
    "\u0002^\u015b\u0003\u0002\u0002\u0002`\u0162\u0003\u0002\u0002\u0002",
    "b\u0166\u0003\u0002\u0002\u0002d\u016b\u0003\u0002\u0002\u0002f\u016e",
    "\u0003\u0002\u0002\u0002h\u0181\u0003\u0002\u0002\u0002j\u0183\u0003",
    "\u0002\u0002\u0002l\u0185\u0003\u0002\u0002\u0002n\u0187\u0003\u0002",
    "\u0002\u0002p\u0189\u0003\u0002\u0002\u0002r\u018b\u0003\u0002\u0002",
    "\u0002t\u018d\u0003\u0002\u0002\u0002v\u018f\u0003\u0002\u0002\u0002",
    "x\u0191\u0003\u0002\u0002\u0002z\u0196\u0003\u0002\u0002\u0002|\u0199",
    "\u0003\u0002\u0002\u0002~\u01a8\u0003\u0002\u0002\u0002\u0080\u01aa",
    "\u0003\u0002\u0002\u0002\u0082\u01ac\u0003\u0002\u0002\u0002\u0084\u01ae",
    "\u0003\u0002\u0002\u0002\u0086\u01b0\u0003\u0002\u0002\u0002\u0088\u01b2",
    "\u0003\u0002\u0002\u0002\u008a\u01b7\u0003\u0002\u0002\u0002\u008c\u01ba",
    "\u0003\u0002\u0002\u0002\u008e\u01bf\u0003\u0002\u0002\u0002\u0090\u01c2",
    "\u0003\u0002\u0002\u0002\u0092\u01c8\u0003\u0002\u0002\u0002\u0094\u01cd",
    "\u0003\u0002\u0002\u0002\u0096\u01d0\u0003\u0002\u0002\u0002\u0098\u009b",
    "\u0005\u0004\u0003\u0002\u0099\u009b\u0005\u000e\b\u0002\u009a\u0098",
    "\u0003\u0002\u0002\u0002\u009a\u0099\u0003\u0002\u0002\u0002\u009b\u009e",
    "\u0003\u0002\u0002\u0002\u009c\u009a\u0003\u0002\u0002\u0002\u009c\u009d",
    "\u0003\u0002\u0002\u0002\u009d\u0003\u0003\u0002\u0002\u0002\u009e\u009c",
    "\u0003\u0002\u0002\u0002\u009f\u00a1\u0005\u0006\u0004\u0002\u00a0\u009f",
    "\u0003\u0002\u0002\u0002\u00a1\u00a2\u0003\u0002\u0002\u0002\u00a2\u00a0",
    "\u0003\u0002\u0002\u0002\u00a2\u00a3\u0003\u0002\u0002\u0002\u00a3\u0005",
    "\u0003\u0002\u0002\u0002\u00a4\u00a8\u0005\b\u0005\u0002\u00a5\u00a8",
    "\u0005\n\u0006\u0002\u00a6\u00a8\u0005\f\u0007\u0002\u00a7\u00a4\u0003",
    "\u0002\u0002\u0002\u00a7\u00a5\u0003\u0002\u0002\u0002\u00a7\u00a6\u0003",
    "\u0002\u0002\u0002\u00a8\u0007\u0003\u0002\u0002\u0002\u00a9\u00aa\u0007",
    "\u0006\u0002\u0002\u00aa\t\u0003\u0002\u0002\u0002\u00ab\u00ac\u0007",
    "\u0007\u0002\u0002\u00ac\u000b\u0003\u0002\u0002\u0002\u00ad\u00ae\u0007",
    "\b\u0002\u0002\u00ae\r\u0003\u0002\u0002\u0002\u00af\u00cb\u0007\n\u0002",
    "\u0002\u00b0\u00b1\u0005\u0010\t\u0002\u00b1\u00b2\u0005\"\u0012\u0002",
    "\u00b2\u00b3\u0005$\u0013\u0002\u00b3\u00cc\u0003\u0002\u0002\u0002",
    "\u00b4\u00b5\u0005\u0012\n\u0002\u00b5\u00b6\u00056\u001c\u0002\u00b6",
    "\u00b7\u00058\u001d\u0002\u00b7\u00cc\u0003\u0002\u0002\u0002\u00b8",
    "\u00b9\u0005\u0014\u000b\u0002\u00b9\u00ba\u0005R*\u0002\u00ba\u00bb",
    "\u0005T+\u0002\u00bb\u00cc\u0003\u0002\u0002\u0002\u00bc\u00bd\u0005",
    "\u0016\f\u0002\u00bd\u00be\u0005Z.\u0002\u00be\u00bf\u0005\\/\u0002",
    "\u00bf\u00cc\u0003\u0002\u0002\u0002\u00c0\u00c1\u0005\u0018\r\u0002",
    "\u00c1\u00c2\u0005d3\u0002\u00c2\u00cc\u0003\u0002\u0002\u0002\u00c3",
    "\u00c4\u0005\u001a\u000e\u0002\u00c4\u00c5\u0005x=\u0002\u00c5\u00c6",
    "\u0005z>\u0002\u00c6\u00cc\u0003\u0002\u0002\u0002\u00c7\u00c8\u0005",
    "\u001c\u000f\u0002\u00c8\u00c9\u0005\u008aF\u0002\u00c9\u00ca\u0005",
    "\u008eH\u0002\u00ca\u00cc\u0003\u0002\u0002\u0002\u00cb\u00b0\u0003",
    "\u0002\u0002\u0002\u00cb\u00b4\u0003\u0002\u0002\u0002\u00cb\u00b8\u0003",
    "\u0002\u0002\u0002\u00cb\u00bc\u0003\u0002\u0002\u0002\u00cb\u00c0\u0003",
    "\u0002\u0002\u0002\u00cb\u00c3\u0003\u0002\u0002\u0002\u00cb\u00c7\u0003",
    "\u0002\u0002\u0002\u00cc\u00cd\u0003\u0002\u0002\u0002\u00cd\u00ce\u0005",
    "\u001e\u0010\u0002\u00ce\u000f\u0003\u0002\u0002\u0002\u00cf\u00d0\u0007",
    "\u000e\u0002\u0002\u00d0\u0011\u0003\u0002\u0002\u0002\u00d1\u00d2\u0007",
    "\u0010\u0002\u0002\u00d2\u0013\u0003\u0002\u0002\u0002\u00d3\u00d4\u0007",
    "\u000f\u0002\u0002\u00d4\u0015\u0003\u0002\u0002\u0002\u00d5\u00d6\u0007",
    "\u0011\u0002\u0002\u00d6\u0017\u0003\u0002\u0002\u0002\u00d7\u00d8\u0007",
    "\u0012\u0002\u0002\u00d8\u0019\u0003\u0002\u0002\u0002\u00d9\u00da\u0007",
    "\u0013\u0002\u0002\u00da\u001b\u0003\u0002\u0002\u0002\u00db\u00dc\u0007",
    "\u0014\u0002\u0002\u00dc\u001d\u0003\u0002\u0002\u0002\u00dd\u00de\t",
    "\u0002\u0002\u0002\u00de\u001f\u0003\u0002\u0002\u0002\u00df\u00e0\u0007",
    "{\u0002\u0002\u00e0!\u0003\u0002\u0002\u0002\u00e1\u00e2\u0007:\u0002",
    "\u0002\u00e2#\u0003\u0002\u0002\u0002\u00e3\u00e5\u0005&\u0014\u0002",
    "\u00e4\u00e3\u0003\u0002\u0002\u0002\u00e5\u00e8\u0003\u0002\u0002\u0002",
    "\u00e6\u00e4\u0003\u0002\u0002\u0002\u00e6\u00e7\u0003\u0002\u0002\u0002",
    "\u00e7%\u0003\u0002\u0002\u0002\u00e8\u00e6\u0003\u0002\u0002\u0002",
    "\u00e9\u00f8\u0007;\u0002\u0002\u00ea\u00eb\u0007@\u0002\u0002\u00eb",
    "\u00f9\u0005(\u0015\u0002\u00ec\u00ed\u0007B\u0002\u0002\u00ed\u00f9",
    "\u0005*\u0016\u0002\u00ee\u00ef\u0007C\u0002\u0002\u00ef\u00f9\u0005",
    ",\u0017\u0002\u00f0\u00f1\u0007A\u0002\u0002\u00f1\u00f9\u0005.\u0018",
    "\u0002\u00f2\u00f3\u0007D\u0002\u0002\u00f3\u00f9\u00050\u0019\u0002",
    "\u00f4\u00f5\u0007E\u0002\u0002\u00f5\u00f9\u00052\u001a\u0002\u00f6",
    "\u00f7\u0007F\u0002\u0002\u00f7\u00f9\u00054\u001b\u0002\u00f8\u00ea",
    "\u0003\u0002\u0002\u0002\u00f8\u00ec\u0003\u0002\u0002\u0002\u00f8\u00ee",
    "\u0003\u0002\u0002\u0002\u00f8\u00f0\u0003\u0002\u0002\u0002\u00f8\u00f2",
    "\u0003\u0002\u0002\u0002\u00f8\u00f4\u0003\u0002\u0002\u0002\u00f8\u00f6",
    "\u0003\u0002\u0002\u0002\u00f9\u00fa\u0003\u0002\u0002\u0002\u00fa\u00fb",
    "\u0007H\u0002\u0002\u00fb\'\u0003\u0002\u0002\u0002\u00fc\u00fd\u0007",
    "\u0086\u0002\u0002\u00fd)\u0003\u0002\u0002\u0002\u00fe\u00ff\u0007",
    "\u0086\u0002\u0002\u00ff+\u0003\u0002\u0002\u0002\u0100\u0101\u0007",
    "\u0086\u0002\u0002\u0101-\u0003\u0002\u0002\u0002\u0102\u0103\u0007",
    "\u0086\u0002\u0002\u0103/\u0003\u0002\u0002\u0002\u0104\u0105\u0007",
    "G\u0002\u0002\u01051\u0003\u0002\u0002\u0002\u0106\u0107\u0007G\u0002",
    "\u0002\u01073\u0003\u0002\u0002\u0002\u0108\u0109\u0007G\u0002\u0002",
    "\u01095\u0003\u0002\u0002\u0002\u010a\u010b\u0007L\u0002\u0002\u010b",
    "7\u0003\u0002\u0002\u0002\u010c\u010e\u0005:\u001e\u0002\u010d\u010c",
    "\u0003\u0002\u0002\u0002\u010e\u0111\u0003\u0002\u0002\u0002\u010f\u010d",
    "\u0003\u0002\u0002\u0002\u010f\u0110\u0003\u0002\u0002\u0002\u01109",
    "\u0003\u0002\u0002\u0002\u0111\u010f\u0003\u0002\u0002\u0002\u0112\u0129",
    "\u0007M\u0002\u0002\u0113\u0114\u0007R\u0002\u0002\u0114\u012a\u0005",
    "<\u001f\u0002\u0115\u0116\u0007S\u0002\u0002\u0116\u012a\u0005> \u0002",
    "\u0117\u0118\u0007T\u0002\u0002\u0118\u012a\u0005@!\u0002\u0119\u011a",
    "\u0007U\u0002\u0002\u011a\u012a\u0005B\"\u0002\u011b\u011c\u0007V\u0002",
    "\u0002\u011c\u012a\u0005D#\u0002\u011d\u011e\u0007W\u0002\u0002\u011e",
    "\u012a\u0005F$\u0002\u011f\u0120\u0007X\u0002\u0002\u0120\u012a\u0005",
    "H%\u0002\u0121\u0122\u0007Y\u0002\u0002\u0122\u012a\u0005J&\u0002\u0123",
    "\u0124\u0007Z\u0002\u0002\u0124\u012a\u0005L\'\u0002\u0125\u0126\u0007",
    "[\u0002\u0002\u0126\u012a\u0005N(\u0002\u0127\u0128\u0007\\\u0002\u0002",
    "\u0128\u012a\u0005P)\u0002\u0129\u0113\u0003\u0002\u0002\u0002\u0129",
    "\u0115\u0003\u0002\u0002\u0002\u0129\u0117\u0003\u0002\u0002\u0002\u0129",
    "\u0119\u0003\u0002\u0002\u0002\u0129\u011b\u0003\u0002\u0002\u0002\u0129",
    "\u011d\u0003\u0002\u0002\u0002\u0129\u011f\u0003\u0002\u0002\u0002\u0129",
    "\u0121\u0003\u0002\u0002\u0002\u0129\u0123\u0003\u0002\u0002\u0002\u0129",
    "\u0125\u0003\u0002\u0002\u0002\u0129\u0127\u0003\u0002\u0002\u0002\u012a",
    "\u012b\u0003\u0002\u0002\u0002\u012b\u012c\u0007^\u0002\u0002\u012c",
    ";\u0003\u0002\u0002\u0002\u012d\u012e\u0007\u0086\u0002\u0002\u012e",
    "=\u0003\u0002\u0002\u0002\u012f\u0130\u0007\u0086\u0002\u0002\u0130",
    "?\u0003\u0002\u0002\u0002\u0131\u0132\u0007\u0086\u0002\u0002\u0132",
    "A\u0003\u0002\u0002\u0002\u0133\u0134\u0007]\u0002\u0002\u0134C\u0003",
    "\u0002\u0002\u0002\u0135\u0136\u0007]\u0002\u0002\u0136E\u0003\u0002",
    "\u0002\u0002\u0137\u0138\u0007\u0086\u0002\u0002\u0138G\u0003\u0002",
    "\u0002\u0002\u0139\u013a\u0007\u0086\u0002\u0002\u013aI\u0003\u0002",
    "\u0002\u0002\u013b\u013c\u0007\u0086\u0002\u0002\u013cK\u0003\u0002",
    "\u0002\u0002\u013d\u013e\u0007\u0086\u0002\u0002\u013eM\u0003\u0002",
    "\u0002\u0002\u013f\u0140\u0007\u0086\u0002\u0002\u0140O\u0003\u0002",
    "\u0002\u0002\u0141\u0142\u0007\u0086\u0002\u0002\u0142Q\u0003\u0002",
    "\u0002\u0002\u0143\u0144\u0007b\u0002\u0002\u0144S\u0003\u0002\u0002",
    "\u0002\u0145\u0147\u0005V,\u0002\u0146\u0145\u0003\u0002\u0002\u0002",
    "\u0147\u014a\u0003\u0002\u0002\u0002\u0148\u0146\u0003\u0002\u0002\u0002",
    "\u0148\u0149\u0003\u0002\u0002\u0002\u0149U\u0003\u0002\u0002\u0002",
    "\u014a\u0148\u0003\u0002\u0002\u0002\u014b\u014c\u0007c\u0002\u0002",
    "\u014c\u014d\u0007h\u0002\u0002\u014d\u014e\u0005X-\u0002\u014e\u014f",
    "\u0003\u0002\u0002\u0002\u014f\u0150\u0007i\u0002\u0002\u0150W\u0003",
    "\u0002\u0002\u0002\u0151\u0152\u0007\u0086\u0002\u0002\u0152Y\u0003",
    "\u0002\u0002\u0002\u0153\u0154\u0007m\u0002\u0002\u0154[\u0003\u0002",
    "\u0002\u0002\u0155\u0157\u0005^0\u0002\u0156\u0155\u0003\u0002\u0002",
    "\u0002\u0157\u015a\u0003\u0002\u0002\u0002\u0158\u0156\u0003\u0002\u0002",
    "\u0002\u0158\u0159\u0003\u0002\u0002\u0002\u0159]\u0003\u0002\u0002",
    "\u0002\u015a\u0158\u0003\u0002\u0002\u0002\u015b\u015c\u0007n\u0002",
    "\u0002\u015c\u015d\u0007s\u0002\u0002\u015d\u015e\u0005`1\u0002\u015e",
    "\u015f\u0003\u0002\u0002\u0002\u015f\u0160\u0007u\u0002\u0002\u0160",
    "_\u0003\u0002\u0002\u0002\u0161\u0163\u0005b2\u0002\u0162\u0161\u0003",
    "\u0002\u0002\u0002\u0163\u0164\u0003\u0002\u0002\u0002\u0164\u0162\u0003",
    "\u0002\u0002\u0002\u0164\u0165\u0003\u0002\u0002\u0002\u0165a\u0003",
    "\u0002\u0002\u0002\u0166\u0167\u0007t\u0002\u0002\u0167c\u0003\u0002",
    "\u0002\u0002\u0168\u016a\u0005f4\u0002\u0169\u0168\u0003\u0002\u0002",
    "\u0002\u016a\u016d\u0003\u0002\u0002\u0002\u016b\u0169\u0003\u0002\u0002",
    "\u0002\u016b\u016c\u0003\u0002\u0002\u0002\u016ce\u0003\u0002\u0002",
    "\u0002\u016d\u016b\u0003\u0002\u0002\u0002\u016e\u017d\u0007(\u0002",
    "\u0002\u016f\u0170\u00073\u0002\u0002\u0170\u017e\u0005h5\u0002\u0171",
    "\u0172\u0007-\u0002\u0002\u0172\u017e\u0005j6\u0002\u0173\u0174\u0007",
    ".\u0002\u0002\u0174\u017e\u0005l7\u0002\u0175\u0176\u0007/\u0002\u0002",
    "\u0176\u017e\u0005n8\u0002\u0177\u0178\u00071\u0002\u0002\u0178\u017e",
    "\u0005p9\u0002\u0179\u017a\u00072\u0002\u0002\u017a\u017e\u0005r:\u0002",
    "\u017b\u017c\u00070\u0002\u0002\u017c\u017e\u0005t;\u0002\u017d\u016f",
    "\u0003\u0002\u0002\u0002\u017d\u0171\u0003\u0002\u0002\u0002\u017d\u0173",
    "\u0003\u0002\u0002\u0002\u017d\u0175\u0003\u0002\u0002\u0002\u017d\u0177",
    "\u0003\u0002\u0002\u0002\u017d\u0179\u0003\u0002\u0002\u0002\u017d\u017b",
    "\u0003\u0002\u0002\u0002\u017e\u017f\u0003\u0002\u0002\u0002\u017f\u0180",
    "\u00076\u0002\u0002\u0180g\u0003\u0002\u0002\u0002\u0181\u0182\u0007",
    "5\u0002\u0002\u0182i\u0003\u0002\u0002\u0002\u0183\u0184\u00075\u0002",
    "\u0002\u0184k\u0003\u0002\u0002\u0002\u0185\u0186\u00075\u0002\u0002",
    "\u0186m\u0003\u0002\u0002\u0002\u0187\u0188\u00075\u0002\u0002\u0188",
    "o\u0003\u0002\u0002\u0002\u0189\u018a\u0007\u008d\u0002\u0002\u018a",
    "q\u0003\u0002\u0002\u0002\u018b\u018c\u0007\u008d\u0002\u0002\u018c",
    "s\u0003\u0002\u0002\u0002\u018d\u018e\u00075\u0002\u0002\u018eu\u0003",
    "\u0002\u0002\u0002\u018f\u0190\u00075\u0002\u0002\u0190w\u0003\u0002",
    "\u0002\u0002\u0191\u0192\u0007\u0018\u0002\u0002\u0192y\u0003\u0002",
    "\u0002\u0002\u0193\u0195\u0005|?\u0002\u0194\u0193\u0003\u0002\u0002",
    "\u0002\u0195\u0198\u0003\u0002\u0002\u0002\u0196\u0194\u0003\u0002\u0002",
    "\u0002\u0196\u0197\u0003\u0002\u0002\u0002\u0197{\u0003\u0002\u0002",
    "\u0002\u0198\u0196\u0003\u0002\u0002\u0002\u0199\u01a4\u0007\u0019\u0002",
    "\u0002\u019a\u019b\u0007\u001e\u0002\u0002\u019b\u01a5\u0005~@\u0002",
    "\u019c\u019d\u0007\u001f\u0002\u0002\u019d\u01a5\u0005\u0080A\u0002",
    "\u019e\u019f\u0007 \u0002\u0002\u019f\u01a5\u0005\u0082B\u0002\u01a0",
    "\u01a1\u0007!\u0002\u0002\u01a1\u01a5\u0005\u0084C\u0002\u01a2\u01a3",
    "\u0007\"\u0002\u0002\u01a3\u01a5\u0005\u0086D\u0002\u01a4\u019a\u0003",
    "\u0002\u0002\u0002\u01a4\u019c\u0003\u0002\u0002\u0002\u01a4\u019e\u0003",
    "\u0002\u0002\u0002\u01a4\u01a0\u0003\u0002\u0002\u0002\u01a4\u01a2\u0003",
    "\u0002\u0002\u0002\u01a5\u01a6\u0003\u0002\u0002\u0002\u01a6\u01a7\u0007",
    "#\u0002\u0002\u01a7}\u0003\u0002\u0002\u0002\u01a8\u01a9\u0007\u008a",
    "\u0002\u0002\u01a9\u007f\u0003\u0002\u0002\u0002\u01aa\u01ab\u0007\u0086",
    "\u0002\u0002\u01ab\u0081\u0003\u0002\u0002\u0002\u01ac\u01ad\u0007\u0086",
    "\u0002\u0002\u01ad\u0083\u0003\u0002\u0002\u0002\u01ae\u01af\u0007\u0086",
    "\u0002\u0002\u01af\u0085\u0003\u0002\u0002\u0002\u01b0\u01b1\u0007\u008b",
    "\u0002\u0002\u01b1\u0087\u0003\u0002\u0002\u0002\u01b2\u01b3\u0007$",
    "\u0002\u0002\u01b3\u0089\u0003\u0002\u0002\u0002\u01b4\u01b6\u0005\u008c",
    "G\u0002\u01b5\u01b4\u0003\u0002\u0002\u0002\u01b6\u01b9\u0003\u0002",
    "\u0002\u0002\u01b7\u01b5\u0003\u0002\u0002\u0002\u01b7\u01b8\u0003\u0002",
    "\u0002\u0002\u01b8\u008b\u0003\u0002\u0002\u0002\u01b9\u01b7\u0003\u0002",
    "\u0002\u0002\u01ba\u01bb\u0007y\u0002\u0002\u01bb\u008d\u0003\u0002",
    "\u0002\u0002\u01bc\u01be\u0005\u0090I\u0002\u01bd\u01bc\u0003\u0002",
    "\u0002\u0002\u01be\u01c1\u0003\u0002\u0002\u0002\u01bf\u01bd\u0003\u0002",
    "\u0002\u0002\u01bf\u01c0\u0003\u0002\u0002\u0002\u01c0\u008f\u0003\u0002",
    "\u0002\u0002\u01c1\u01bf\u0003\u0002\u0002\u0002\u01c2\u01c3\u0007z",
    "\u0002\u0002\u01c3\u01c4\u0005\u0092J\u0002\u01c4\u01c5\u0005\u0094",
    "K\u0002\u01c5\u01c6\u0003\u0002\u0002\u0002\u01c6\u01c7\u0007\u0084",
    "\u0002\u0002\u01c7\u0091\u0003\u0002\u0002\u0002\u01c8\u01c9\u0007\u007f",
    "\u0002\u0002\u01c9\u0093\u0003\u0002\u0002\u0002\u01ca\u01cc\u0005\u0096",
    "L\u0002\u01cb\u01ca\u0003\u0002\u0002\u0002\u01cc\u01cf\u0003\u0002",
    "\u0002\u0002\u01cd\u01cb\u0003\u0002\u0002\u0002\u01cd\u01ce\u0003\u0002",
    "\u0002\u0002\u01ce\u0095\u0003\u0002\u0002\u0002\u01cf\u01cd\u0003\u0002",
    "\u0002\u0002\u01d0\u01d1\u0007\u0083\u0002\u0002\u01d1\u0097\u0003\u0002",
    "\u0002\u0002\u0015\u009a\u009c\u00a2\u00a7\u00cb\u00e6\u00f8\u010f\u0129",
    "\u0148\u0158\u0164\u016b\u017d\u0196\u01a4\u01b7\u01bf\u01cd"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class MmParser extends antlr4.Parser {

    static grammarFileName = "MmParser.g4";
    static literalNames = [ null, null, null, null, null, null, null, null, 
                            null, null, null, null, "'Role'", "'Wait'", 
                            "'Sound'", "'Group'", "'Settings'", "'Paragraph'", 
                            null, null, null, null, null, null, null, null, 
                            null, null, "'align'", "'leftmargin'", "'rightmargin'", 
                            "'maxwidth'", "'case'", null, null, null, null, 
                            null, null, null, null, null, null, "'title'", 
                            "'soundsfolder'", "'tmp'", "'mp3'", "'show'", 
                            "'debug'", "'defaultlang'", "'linewidth'", null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, "'pitch'", "'rate'", null, "'volume'", 
                            "'alias'", null, "'lang'", null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, "'fadein'", "'fadeout'", "'source'", null, 
                            "'start1'", "'end1'", "'duration1'", "'start2'", 
                            "'end2'", "'duration2'", null, null, null, null, 
                            null, null, null, null, null, null, null, "'delay'", 
                            null, null, null, null, null, null, null, null, 
                            null, null, "'members'" ];
    static symbolicNames = [ null, "LineComment", "BlockComment", "WS", 
                             "SQString", "DQString", "NQString", "String", 
                             "CommandStart", "CommandBlockComment", "CommandLineComment", 
                             "CommandWS", "RoleCommand", "WaitCommand", 
                             "SoundCommand", "GroupCommand", "SettingsCommand", 
                             "ParagraphCommand", "CallCommand", "ParagraphCommandBlockComment", 
                             "ParagraphCommandLineComment", "ParagraphCommandWS", 
                             "ParagraphName", "ParagraphParameterStart", 
                             "ParagraphCommandEnd", "ParagraphParameterComment", 
                             "ParagraphParameterLineComment", "ParagraphParameterWS", 
                             "ParagraphAlign", "ParagraphLeftMargin", "ParagraphRightMargin", 
                             "ParagraphMaxWidth", "ParagraphCase", "ParagraphParameterEnd", 
                             "ParagraphValue", "SettingsCommandBlockComment", 
                             "SettingsCommandLineComment", "SettingsCommandWS", 
                             "SettingsParameterStart", "SettingsEnd", "SettingsParameterComment", 
                             "SettingsParameterLineComment", "SettingsParameterWS", 
                             "SettingsTitle", "SettingsSoundsFolder", "SettingsTmpFolder", 
                             "SettingsAudioType", "SettingsShow", "SettingsDebug", 
                             "SettingsDefaultLang", "SettingsLineWidth", 
                             "SettingsValue", "SettingsParameterEnd", "RoleCommandBlockComment", 
                             "RoleCommandLineComment", "RoleCommandWS", 
                             "RoleName", "RoleParameterStart", "RoleCommandEnd", 
                             "RoleParameterBlockComment", "RoleParameterLineComment", 
                             "RoleParameterWS", "RolePitch", "RoleRate", 
                             "RoleGain", "RoleVolume", "RoleAlias", "RoleSOUND", 
                             "RoleLang", "RoleValue", "RoleParameterEnd", 
                             "SoundCommandBlockComment", "SoundCommandLineComment", 
                             "SoundCommandWS", "SoundName", "SoundParameterStart", 
                             "SoundCommandEnd", "SoundParameterComment", 
                             "SoundParameterLineComment", "SoundParameterWS", 
                             "SoundGain", "SoundFadeIn", "SoundFadeOut", 
                             "SoundSource", "SoundSOUND", "SoundStart1", 
                             "SoundEnd1", "SoundDuration1", "SoundStart2", 
                             "SoundEnd2", "SoundDuration2", "SoundValue", 
                             "SoundParameterEnd", "WaitCommandBlockComment", 
                             "WaiyCommandLineComment", "WaitCommandWS", 
                             "WaitName", "WaitParameterStart", "WaitCommandEnd", 
                             "WaitParameterBlockComment", "WaitParameterLineComment", 
                             "WaitParameterWS", "WaitDelay", "WaitParameterEnd", 
                             "GroupCommandBlockComment", "GroupCommandLineComment", 
                             "GroupCommandWS", "GroupName", "GroupParameterStart", 
                             "GroupCommandEnd", "GroupParameterComment", 
                             "GroupParameterLineComment", "GroupParameterWS", 
                             "GroupMembers", "GroupMember", "GroupParameterEnd", 
                             "CallCommandBlockComment", "CallCommandLineComment", 
                             "CallCommandWS", "CallValue", "CallParameterStart", 
                             "CallCommandEnd", "CallParameterBlockComment", 
                             "CallParameterLineComment", "CallParameterWS", 
                             "CallParameterName", "ParameterMembersBlockComment", 
                             "ParameterMembersLineComment", "ParameterMembersWS", 
                             "ParameterMember", "ParameterEnd", "NumberWS", 
                             "Number", "LanguageWS", "Language", "ParagraphValuesWS", 
                             "AlignValue", "CaseValue", "BooleanWS", "Boolean" ];
    static ruleNames = [ "mm", "narrator", "string", "sQString", "dQString", 
                         "nQString", "command", "roleCommand", "soundCommand", 
                         "waitCommand", "groupCommand", "settingsCommand", 
                         "paragraphCommand", "callCommand", "commandEnd", 
                         "callEnd", "roleName", "roleParameters", "roleParameter", 
                         "rolePitchValue", "roleGainValue", "roleVolumeValue", 
                         "roleRateValue", "roleAlias", "roleSOUND", "roleLanguageValue", 
                         "soundName", "soundParameters", "soundParameter", 
                         "soundGainValue", "soundFadeInValue", "soundFadeOutValue", 
                         "soundSource", "soundSOUND", "soundStart1Value", 
                         "soundEnd1Value", "soundDuration1Value", "soundStart2Value", 
                         "soundEnd2Value", "soundDuration2Value", "waitName", 
                         "waitParameters", "waitParameter", "waitDelayValue", 
                         "groupName", "groupParameters", "groupParameter", 
                         "groupMembers", "groupMember", "settingsParameters", 
                         "settingsParameter", "settingsDefaultLang", "settingsTitle", 
                         "settingsSoundsFolder", "settingsTmpFolder", "settingsShowValue", 
                         "settingsDebugValue", "settingsAudioType", "settingsValue", 
                         "paragraphName", "paragraphParameters", "paragraphParameter", 
                         "paragraphAlignValue", "paragraphLeftMarginValue", 
                         "paragraphRightMarginValue", "paragraphMaxWidthValue", 
                         "paragraphCaseValue", "paragraphValue", "callValues", 
                         "callValue", "callParameters", "callParameter", 
                         "callParameterName", "parameterMembers", "parameterMember" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = MmParser.ruleNames;
        this.literalNames = MmParser.literalNames;
        this.symbolicNames = MmParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	mm() {
	    let localctx = new MmContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, MmParser.RULE_mm);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 154;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MmParser.SQString) | (1 << MmParser.DQString) | (1 << MmParser.NQString) | (1 << MmParser.CommandStart))) !== 0)) {
	            this.state = 152;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case MmParser.SQString:
	            case MmParser.DQString:
	            case MmParser.NQString:
	                this.state = 150;
	                this.narrator();
	                break;
	            case MmParser.CommandStart:
	                this.state = 151;
	                this.command();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 156;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	narrator() {
	    let localctx = new NarratorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, MmParser.RULE_narrator);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 158; 
	        this._errHandler.sync(this);
	        let _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 157;
	        		this.string();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 160; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,2, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	string() {
	    let localctx = new StringContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, MmParser.RULE_string);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 165;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case MmParser.SQString:
	            this.state = 162;
	            this.sQString();
	            break;
	        case MmParser.DQString:
	            this.state = 163;
	            this.dQString();
	            break;
	        case MmParser.NQString:
	            this.state = 164;
	            this.nQString();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sQString() {
	    let localctx = new SQStringContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, MmParser.RULE_sQString);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 167;
	        this.match(MmParser.SQString);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	dQString() {
	    let localctx = new DQStringContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, MmParser.RULE_dQString);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 169;
	        this.match(MmParser.DQString);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	nQString() {
	    let localctx = new NQStringContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, MmParser.RULE_nQString);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 171;
	        this.match(MmParser.NQString);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	command() {
	    let localctx = new CommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, MmParser.RULE_command);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 173;
	        this.match(MmParser.CommandStart);
	        this.state = 201;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case MmParser.RoleCommand:
	            this.state = 174;
	            this.roleCommand();
	            this.state = 175;
	            this.roleName();
	            this.state = 176;
	            this.roleParameters();
	            break;
	        case MmParser.SoundCommand:
	            this.state = 178;
	            this.soundCommand();
	            this.state = 179;
	            this.soundName();
	            this.state = 180;
	            this.soundParameters();
	            break;
	        case MmParser.WaitCommand:
	            this.state = 182;
	            this.waitCommand();
	            this.state = 183;
	            this.waitName();
	            this.state = 184;
	            this.waitParameters();
	            break;
	        case MmParser.GroupCommand:
	            this.state = 186;
	            this.groupCommand();
	            this.state = 187;
	            this.groupName();
	            this.state = 188;
	            this.groupParameters();
	            break;
	        case MmParser.SettingsCommand:
	            this.state = 190;
	            this.settingsCommand();
	            this.state = 191;
	            this.settingsParameters();
	            break;
	        case MmParser.ParagraphCommand:
	            this.state = 193;
	            this.paragraphCommand();
	            this.state = 194;
	            this.paragraphName();
	            this.state = 195;
	            this.paragraphParameters();
	            break;
	        case MmParser.CallCommand:
	            this.state = 197;
	            this.callCommand();
	            this.state = 198;
	            this.callValues();
	            this.state = 199;
	            this.callParameters();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 203;
	        this.commandEnd();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	roleCommand() {
	    let localctx = new RoleCommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, MmParser.RULE_roleCommand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 205;
	        this.match(MmParser.RoleCommand);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	soundCommand() {
	    let localctx = new SoundCommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, MmParser.RULE_soundCommand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 207;
	        this.match(MmParser.SoundCommand);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	waitCommand() {
	    let localctx = new WaitCommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, MmParser.RULE_waitCommand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 209;
	        this.match(MmParser.WaitCommand);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	groupCommand() {
	    let localctx = new GroupCommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, MmParser.RULE_groupCommand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 211;
	        this.match(MmParser.GroupCommand);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	settingsCommand() {
	    let localctx = new SettingsCommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, MmParser.RULE_settingsCommand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 213;
	        this.match(MmParser.SettingsCommand);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	paragraphCommand() {
	    let localctx = new ParagraphCommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, MmParser.RULE_paragraphCommand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 215;
	        this.match(MmParser.ParagraphCommand);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	callCommand() {
	    let localctx = new CallCommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, MmParser.RULE_callCommand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 217;
	        this.match(MmParser.CallCommand);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	commandEnd() {
	    let localctx = new CommandEndContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, MmParser.RULE_commandEnd);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 219;
	        _la = this._input.LA(1);
	        if(!(_la===MmParser.ParagraphCommandEnd || _la===MmParser.SettingsEnd || _la===MmParser.RoleCommandEnd || _la===MmParser.SoundCommandEnd || ((((_la - 98)) & ~0x1f) == 0 && ((1 << (_la - 98)) & ((1 << (MmParser.WaitCommandEnd - 98)) | (1 << (MmParser.GroupCommandEnd - 98)) | (1 << (MmParser.CallCommandEnd - 98)))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	callEnd() {
	    let localctx = new CallEndContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, MmParser.RULE_callEnd);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 221;
	        this.match(MmParser.CallCommandEnd);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	roleName() {
	    let localctx = new RoleNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, MmParser.RULE_roleName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 223;
	        this.match(MmParser.RoleName);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	roleParameters() {
	    let localctx = new RoleParametersContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, MmParser.RULE_roleParameters);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 228;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===MmParser.RoleParameterStart) {
	            this.state = 225;
	            this.roleParameter();
	            this.state = 230;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	roleParameter() {
	    let localctx = new RoleParameterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, MmParser.RULE_roleParameter);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 231;
	        this.match(MmParser.RoleParameterStart);
	        this.state = 246;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case MmParser.RolePitch:
	            this.state = 232;
	            this.match(MmParser.RolePitch);
	            this.state = 233;
	            this.rolePitchValue();
	            break;
	        case MmParser.RoleGain:
	            this.state = 234;
	            this.match(MmParser.RoleGain);
	            this.state = 235;
	            this.roleGainValue();
	            break;
	        case MmParser.RoleVolume:
	            this.state = 236;
	            this.match(MmParser.RoleVolume);
	            this.state = 237;
	            this.roleVolumeValue();
	            break;
	        case MmParser.RoleRate:
	            this.state = 238;
	            this.match(MmParser.RoleRate);
	            this.state = 239;
	            this.roleRateValue();
	            break;
	        case MmParser.RoleAlias:
	            this.state = 240;
	            this.match(MmParser.RoleAlias);
	            this.state = 241;
	            this.roleAlias();
	            break;
	        case MmParser.RoleSOUND:
	            this.state = 242;
	            this.match(MmParser.RoleSOUND);
	            this.state = 243;
	            this.roleSOUND();
	            break;
	        case MmParser.RoleLang:
	            this.state = 244;
	            this.match(MmParser.RoleLang);
	            this.state = 245;
	            this.roleLanguageValue();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 248;
	        this.match(MmParser.RoleParameterEnd);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	rolePitchValue() {
	    let localctx = new RolePitchValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, MmParser.RULE_rolePitchValue);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 250;
	        this.match(MmParser.Number);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	roleGainValue() {
	    let localctx = new RoleGainValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, MmParser.RULE_roleGainValue);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 252;
	        this.match(MmParser.Number);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	roleVolumeValue() {
	    let localctx = new RoleVolumeValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, MmParser.RULE_roleVolumeValue);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 254;
	        this.match(MmParser.Number);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	roleRateValue() {
	    let localctx = new RoleRateValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, MmParser.RULE_roleRateValue);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 256;
	        this.match(MmParser.Number);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	roleAlias() {
	    let localctx = new RoleAliasContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, MmParser.RULE_roleAlias);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 258;
	        this.match(MmParser.RoleValue);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	roleSOUND() {
	    let localctx = new RoleSOUNDContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, MmParser.RULE_roleSOUND);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 260;
	        this.match(MmParser.RoleValue);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	roleLanguageValue() {
	    let localctx = new RoleLanguageValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, MmParser.RULE_roleLanguageValue);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 262;
	        this.match(MmParser.RoleValue);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	soundName() {
	    let localctx = new SoundNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, MmParser.RULE_soundName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 264;
	        this.match(MmParser.SoundName);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	soundParameters() {
	    let localctx = new SoundParametersContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, MmParser.RULE_soundParameters);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 269;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===MmParser.SoundParameterStart) {
	            this.state = 266;
	            this.soundParameter();
	            this.state = 271;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	soundParameter() {
	    let localctx = new SoundParameterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, MmParser.RULE_soundParameter);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 272;
	        this.match(MmParser.SoundParameterStart);
	        this.state = 295;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case MmParser.SoundGain:
	            this.state = 273;
	            this.match(MmParser.SoundGain);
	            this.state = 274;
	            this.soundGainValue();
	            break;
	        case MmParser.SoundFadeIn:
	            this.state = 275;
	            this.match(MmParser.SoundFadeIn);
	            this.state = 276;
	            this.soundFadeInValue();
	            break;
	        case MmParser.SoundFadeOut:
	            this.state = 277;
	            this.match(MmParser.SoundFadeOut);
	            this.state = 278;
	            this.soundFadeOutValue();
	            break;
	        case MmParser.SoundSource:
	            this.state = 279;
	            this.match(MmParser.SoundSource);
	            this.state = 280;
	            this.soundSource();
	            break;
	        case MmParser.SoundSOUND:
	            this.state = 281;
	            this.match(MmParser.SoundSOUND);
	            this.state = 282;
	            this.soundSOUND();
	            break;
	        case MmParser.SoundStart1:
	            this.state = 283;
	            this.match(MmParser.SoundStart1);
	            this.state = 284;
	            this.soundStart1Value();
	            break;
	        case MmParser.SoundEnd1:
	            this.state = 285;
	            this.match(MmParser.SoundEnd1);
	            this.state = 286;
	            this.soundEnd1Value();
	            break;
	        case MmParser.SoundDuration1:
	            this.state = 287;
	            this.match(MmParser.SoundDuration1);
	            this.state = 288;
	            this.soundDuration1Value();
	            break;
	        case MmParser.SoundStart2:
	            this.state = 289;
	            this.match(MmParser.SoundStart2);
	            this.state = 290;
	            this.soundStart2Value();
	            break;
	        case MmParser.SoundEnd2:
	            this.state = 291;
	            this.match(MmParser.SoundEnd2);
	            this.state = 292;
	            this.soundEnd2Value();
	            break;
	        case MmParser.SoundDuration2:
	            this.state = 293;
	            this.match(MmParser.SoundDuration2);
	            this.state = 294;
	            this.soundDuration2Value();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 297;
	        this.match(MmParser.SoundParameterEnd);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	soundGainValue() {
	    let localctx = new SoundGainValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, MmParser.RULE_soundGainValue);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 299;
	        this.match(MmParser.Number);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	soundFadeInValue() {
	    let localctx = new SoundFadeInValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, MmParser.RULE_soundFadeInValue);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 301;
	        this.match(MmParser.Number);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	soundFadeOutValue() {
	    let localctx = new SoundFadeOutValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, MmParser.RULE_soundFadeOutValue);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 303;
	        this.match(MmParser.Number);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	soundSource() {
	    let localctx = new SoundSourceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, MmParser.RULE_soundSource);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 305;
	        this.match(MmParser.SoundValue);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	soundSOUND() {
	    let localctx = new SoundSOUNDContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, MmParser.RULE_soundSOUND);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 307;
	        this.match(MmParser.SoundValue);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	soundStart1Value() {
	    let localctx = new SoundStart1ValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, MmParser.RULE_soundStart1Value);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 309;
	        this.match(MmParser.Number);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	soundEnd1Value() {
	    let localctx = new SoundEnd1ValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, MmParser.RULE_soundEnd1Value);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 311;
	        this.match(MmParser.Number);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	soundDuration1Value() {
	    let localctx = new SoundDuration1ValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, MmParser.RULE_soundDuration1Value);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 313;
	        this.match(MmParser.Number);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	soundStart2Value() {
	    let localctx = new SoundStart2ValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, MmParser.RULE_soundStart2Value);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 315;
	        this.match(MmParser.Number);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	soundEnd2Value() {
	    let localctx = new SoundEnd2ValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, MmParser.RULE_soundEnd2Value);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 317;
	        this.match(MmParser.Number);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	soundDuration2Value() {
	    let localctx = new SoundDuration2ValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 78, MmParser.RULE_soundDuration2Value);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 319;
	        this.match(MmParser.Number);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	waitName() {
	    let localctx = new WaitNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 80, MmParser.RULE_waitName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 321;
	        this.match(MmParser.WaitName);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	waitParameters() {
	    let localctx = new WaitParametersContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 82, MmParser.RULE_waitParameters);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 326;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===MmParser.WaitParameterStart) {
	            this.state = 323;
	            this.waitParameter();
	            this.state = 328;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	waitParameter() {
	    let localctx = new WaitParameterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 84, MmParser.RULE_waitParameter);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 329;
	        this.match(MmParser.WaitParameterStart);

	        this.state = 330;
	        this.match(MmParser.WaitDelay);
	        this.state = 331;
	        this.waitDelayValue();
	        this.state = 333;
	        this.match(MmParser.WaitParameterEnd);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	waitDelayValue() {
	    let localctx = new WaitDelayValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 86, MmParser.RULE_waitDelayValue);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 335;
	        this.match(MmParser.Number);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	groupName() {
	    let localctx = new GroupNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 88, MmParser.RULE_groupName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 337;
	        this.match(MmParser.GroupName);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	groupParameters() {
	    let localctx = new GroupParametersContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 90, MmParser.RULE_groupParameters);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 342;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===MmParser.GroupParameterStart) {
	            this.state = 339;
	            this.groupParameter();
	            this.state = 344;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	groupParameter() {
	    let localctx = new GroupParameterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 92, MmParser.RULE_groupParameter);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 345;
	        this.match(MmParser.GroupParameterStart);

	        this.state = 346;
	        this.match(MmParser.GroupMembers);
	        this.state = 347;
	        this.groupMembers();
	        this.state = 349;
	        this.match(MmParser.GroupParameterEnd);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	groupMembers() {
	    let localctx = new GroupMembersContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 94, MmParser.RULE_groupMembers);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 352; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 351;
	            this.groupMember();
	            this.state = 354; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===MmParser.GroupMember);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	groupMember() {
	    let localctx = new GroupMemberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 96, MmParser.RULE_groupMember);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 356;
	        this.match(MmParser.GroupMember);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	settingsParameters() {
	    let localctx = new SettingsParametersContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 98, MmParser.RULE_settingsParameters);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 361;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===MmParser.SettingsParameterStart) {
	            this.state = 358;
	            this.settingsParameter();
	            this.state = 363;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	settingsParameter() {
	    let localctx = new SettingsParameterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 100, MmParser.RULE_settingsParameter);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 364;
	        this.match(MmParser.SettingsParameterStart);
	        this.state = 379;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case MmParser.SettingsDefaultLang:
	            this.state = 365;
	            this.match(MmParser.SettingsDefaultLang);
	            this.state = 366;
	            this.settingsDefaultLang();
	            break;
	        case MmParser.SettingsTitle:
	            this.state = 367;
	            this.match(MmParser.SettingsTitle);
	            this.state = 368;
	            this.settingsTitle();
	            break;
	        case MmParser.SettingsSoundsFolder:
	            this.state = 369;
	            this.match(MmParser.SettingsSoundsFolder);
	            this.state = 370;
	            this.settingsSoundsFolder();
	            break;
	        case MmParser.SettingsTmpFolder:
	            this.state = 371;
	            this.match(MmParser.SettingsTmpFolder);
	            this.state = 372;
	            this.settingsTmpFolder();
	            break;
	        case MmParser.SettingsShow:
	            this.state = 373;
	            this.match(MmParser.SettingsShow);
	            this.state = 374;
	            this.settingsShowValue();
	            break;
	        case MmParser.SettingsDebug:
	            this.state = 375;
	            this.match(MmParser.SettingsDebug);
	            this.state = 376;
	            this.settingsDebugValue();
	            break;
	        case MmParser.SettingsAudioType:
	            this.state = 377;
	            this.match(MmParser.SettingsAudioType);
	            this.state = 378;
	            this.settingsAudioType();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 381;
	        this.match(MmParser.SettingsParameterEnd);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	settingsDefaultLang() {
	    let localctx = new SettingsDefaultLangContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 102, MmParser.RULE_settingsDefaultLang);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 383;
	        this.match(MmParser.SettingsValue);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	settingsTitle() {
	    let localctx = new SettingsTitleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 104, MmParser.RULE_settingsTitle);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 385;
	        this.match(MmParser.SettingsValue);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	settingsSoundsFolder() {
	    let localctx = new SettingsSoundsFolderContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 106, MmParser.RULE_settingsSoundsFolder);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 387;
	        this.match(MmParser.SettingsValue);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	settingsTmpFolder() {
	    let localctx = new SettingsTmpFolderContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 108, MmParser.RULE_settingsTmpFolder);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 389;
	        this.match(MmParser.SettingsValue);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	settingsShowValue() {
	    let localctx = new SettingsShowValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 110, MmParser.RULE_settingsShowValue);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 391;
	        this.match(MmParser.Boolean);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	settingsDebugValue() {
	    let localctx = new SettingsDebugValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 112, MmParser.RULE_settingsDebugValue);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 393;
	        this.match(MmParser.Boolean);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	settingsAudioType() {
	    let localctx = new SettingsAudioTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 114, MmParser.RULE_settingsAudioType);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 395;
	        this.match(MmParser.SettingsValue);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	settingsValue() {
	    let localctx = new SettingsValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 116, MmParser.RULE_settingsValue);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 397;
	        this.match(MmParser.SettingsValue);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	paragraphName() {
	    let localctx = new ParagraphNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 118, MmParser.RULE_paragraphName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 399;
	        this.match(MmParser.ParagraphName);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	paragraphParameters() {
	    let localctx = new ParagraphParametersContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 120, MmParser.RULE_paragraphParameters);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 404;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===MmParser.ParagraphParameterStart) {
	            this.state = 401;
	            this.paragraphParameter();
	            this.state = 406;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	paragraphParameter() {
	    let localctx = new ParagraphParameterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 122, MmParser.RULE_paragraphParameter);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 407;
	        this.match(MmParser.ParagraphParameterStart);
	        this.state = 418;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case MmParser.ParagraphAlign:
	            this.state = 408;
	            this.match(MmParser.ParagraphAlign);
	            this.state = 409;
	            this.paragraphAlignValue();
	            break;
	        case MmParser.ParagraphLeftMargin:
	            this.state = 410;
	            this.match(MmParser.ParagraphLeftMargin);
	            this.state = 411;
	            this.paragraphLeftMarginValue();
	            break;
	        case MmParser.ParagraphRightMargin:
	            this.state = 412;
	            this.match(MmParser.ParagraphRightMargin);
	            this.state = 413;
	            this.paragraphRightMarginValue();
	            break;
	        case MmParser.ParagraphMaxWidth:
	            this.state = 414;
	            this.match(MmParser.ParagraphMaxWidth);
	            this.state = 415;
	            this.paragraphMaxWidthValue();
	            break;
	        case MmParser.ParagraphCase:
	            this.state = 416;
	            this.match(MmParser.ParagraphCase);
	            this.state = 417;
	            this.paragraphCaseValue();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 420;
	        this.match(MmParser.ParagraphParameterEnd);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	paragraphAlignValue() {
	    let localctx = new ParagraphAlignValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 124, MmParser.RULE_paragraphAlignValue);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 422;
	        this.match(MmParser.AlignValue);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	paragraphLeftMarginValue() {
	    let localctx = new ParagraphLeftMarginValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 126, MmParser.RULE_paragraphLeftMarginValue);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 424;
	        this.match(MmParser.Number);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	paragraphRightMarginValue() {
	    let localctx = new ParagraphRightMarginValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 128, MmParser.RULE_paragraphRightMarginValue);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 426;
	        this.match(MmParser.Number);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	paragraphMaxWidthValue() {
	    let localctx = new ParagraphMaxWidthValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 130, MmParser.RULE_paragraphMaxWidthValue);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 428;
	        this.match(MmParser.Number);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	paragraphCaseValue() {
	    let localctx = new ParagraphCaseValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 132, MmParser.RULE_paragraphCaseValue);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 430;
	        this.match(MmParser.CaseValue);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	paragraphValue() {
	    let localctx = new ParagraphValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 134, MmParser.RULE_paragraphValue);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 432;
	        this.match(MmParser.ParagraphValue);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	callValues() {
	    let localctx = new CallValuesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 136, MmParser.RULE_callValues);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 437;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===MmParser.CallValue) {
	            this.state = 434;
	            this.callValue();
	            this.state = 439;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	callValue() {
	    let localctx = new CallValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 138, MmParser.RULE_callValue);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 440;
	        this.match(MmParser.CallValue);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	callParameters() {
	    let localctx = new CallParametersContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 140, MmParser.RULE_callParameters);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 445;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===MmParser.CallParameterStart) {
	            this.state = 442;
	            this.callParameter();
	            this.state = 447;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	callParameter() {
	    let localctx = new CallParameterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 142, MmParser.RULE_callParameter);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 448;
	        this.match(MmParser.CallParameterStart);

	        this.state = 449;
	        this.callParameterName();
	        this.state = 450;
	        this.parameterMembers();
	        this.state = 452;
	        this.match(MmParser.ParameterEnd);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	callParameterName() {
	    let localctx = new CallParameterNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 144, MmParser.RULE_callParameterName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 454;
	        this.match(MmParser.CallParameterName);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parameterMembers() {
	    let localctx = new ParameterMembersContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 146, MmParser.RULE_parameterMembers);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 459;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===MmParser.ParameterMember) {
	            this.state = 456;
	            this.parameterMember();
	            this.state = 461;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parameterMember() {
	    let localctx = new ParameterMemberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 148, MmParser.RULE_parameterMember);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 462;
	        this.match(MmParser.ParameterMember);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

MmParser.EOF = antlr4.Token.EOF;
MmParser.LineComment = 1;
MmParser.BlockComment = 2;
MmParser.WS = 3;
MmParser.SQString = 4;
MmParser.DQString = 5;
MmParser.NQString = 6;
MmParser.String = 7;
MmParser.CommandStart = 8;
MmParser.CommandBlockComment = 9;
MmParser.CommandLineComment = 10;
MmParser.CommandWS = 11;
MmParser.RoleCommand = 12;
MmParser.WaitCommand = 13;
MmParser.SoundCommand = 14;
MmParser.GroupCommand = 15;
MmParser.SettingsCommand = 16;
MmParser.ParagraphCommand = 17;
MmParser.CallCommand = 18;
MmParser.ParagraphCommandBlockComment = 19;
MmParser.ParagraphCommandLineComment = 20;
MmParser.ParagraphCommandWS = 21;
MmParser.ParagraphName = 22;
MmParser.ParagraphParameterStart = 23;
MmParser.ParagraphCommandEnd = 24;
MmParser.ParagraphParameterComment = 25;
MmParser.ParagraphParameterLineComment = 26;
MmParser.ParagraphParameterWS = 27;
MmParser.ParagraphAlign = 28;
MmParser.ParagraphLeftMargin = 29;
MmParser.ParagraphRightMargin = 30;
MmParser.ParagraphMaxWidth = 31;
MmParser.ParagraphCase = 32;
MmParser.ParagraphParameterEnd = 33;
MmParser.ParagraphValue = 34;
MmParser.SettingsCommandBlockComment = 35;
MmParser.SettingsCommandLineComment = 36;
MmParser.SettingsCommandWS = 37;
MmParser.SettingsParameterStart = 38;
MmParser.SettingsEnd = 39;
MmParser.SettingsParameterComment = 40;
MmParser.SettingsParameterLineComment = 41;
MmParser.SettingsParameterWS = 42;
MmParser.SettingsTitle = 43;
MmParser.SettingsSoundsFolder = 44;
MmParser.SettingsTmpFolder = 45;
MmParser.SettingsAudioType = 46;
MmParser.SettingsShow = 47;
MmParser.SettingsDebug = 48;
MmParser.SettingsDefaultLang = 49;
MmParser.SettingsLineWidth = 50;
MmParser.SettingsValue = 51;
MmParser.SettingsParameterEnd = 52;
MmParser.RoleCommandBlockComment = 53;
MmParser.RoleCommandLineComment = 54;
MmParser.RoleCommandWS = 55;
MmParser.RoleName = 56;
MmParser.RoleParameterStart = 57;
MmParser.RoleCommandEnd = 58;
MmParser.RoleParameterBlockComment = 59;
MmParser.RoleParameterLineComment = 60;
MmParser.RoleParameterWS = 61;
MmParser.RolePitch = 62;
MmParser.RoleRate = 63;
MmParser.RoleGain = 64;
MmParser.RoleVolume = 65;
MmParser.RoleAlias = 66;
MmParser.RoleSOUND = 67;
MmParser.RoleLang = 68;
MmParser.RoleValue = 69;
MmParser.RoleParameterEnd = 70;
MmParser.SoundCommandBlockComment = 71;
MmParser.SoundCommandLineComment = 72;
MmParser.SoundCommandWS = 73;
MmParser.SoundName = 74;
MmParser.SoundParameterStart = 75;
MmParser.SoundCommandEnd = 76;
MmParser.SoundParameterComment = 77;
MmParser.SoundParameterLineComment = 78;
MmParser.SoundParameterWS = 79;
MmParser.SoundGain = 80;
MmParser.SoundFadeIn = 81;
MmParser.SoundFadeOut = 82;
MmParser.SoundSource = 83;
MmParser.SoundSOUND = 84;
MmParser.SoundStart1 = 85;
MmParser.SoundEnd1 = 86;
MmParser.SoundDuration1 = 87;
MmParser.SoundStart2 = 88;
MmParser.SoundEnd2 = 89;
MmParser.SoundDuration2 = 90;
MmParser.SoundValue = 91;
MmParser.SoundParameterEnd = 92;
MmParser.WaitCommandBlockComment = 93;
MmParser.WaiyCommandLineComment = 94;
MmParser.WaitCommandWS = 95;
MmParser.WaitName = 96;
MmParser.WaitParameterStart = 97;
MmParser.WaitCommandEnd = 98;
MmParser.WaitParameterBlockComment = 99;
MmParser.WaitParameterLineComment = 100;
MmParser.WaitParameterWS = 101;
MmParser.WaitDelay = 102;
MmParser.WaitParameterEnd = 103;
MmParser.GroupCommandBlockComment = 104;
MmParser.GroupCommandLineComment = 105;
MmParser.GroupCommandWS = 106;
MmParser.GroupName = 107;
MmParser.GroupParameterStart = 108;
MmParser.GroupCommandEnd = 109;
MmParser.GroupParameterComment = 110;
MmParser.GroupParameterLineComment = 111;
MmParser.GroupParameterWS = 112;
MmParser.GroupMembers = 113;
MmParser.GroupMember = 114;
MmParser.GroupParameterEnd = 115;
MmParser.CallCommandBlockComment = 116;
MmParser.CallCommandLineComment = 117;
MmParser.CallCommandWS = 118;
MmParser.CallValue = 119;
MmParser.CallParameterStart = 120;
MmParser.CallCommandEnd = 121;
MmParser.CallParameterBlockComment = 122;
MmParser.CallParameterLineComment = 123;
MmParser.CallParameterWS = 124;
MmParser.CallParameterName = 125;
MmParser.ParameterMembersBlockComment = 126;
MmParser.ParameterMembersLineComment = 127;
MmParser.ParameterMembersWS = 128;
MmParser.ParameterMember = 129;
MmParser.ParameterEnd = 130;
MmParser.NumberWS = 131;
MmParser.Number = 132;
MmParser.LanguageWS = 133;
MmParser.Language = 134;
MmParser.ParagraphValuesWS = 135;
MmParser.AlignValue = 136;
MmParser.CaseValue = 137;
MmParser.BooleanWS = 138;
MmParser.Boolean = 139;

MmParser.RULE_mm = 0;
MmParser.RULE_narrator = 1;
MmParser.RULE_string = 2;
MmParser.RULE_sQString = 3;
MmParser.RULE_dQString = 4;
MmParser.RULE_nQString = 5;
MmParser.RULE_command = 6;
MmParser.RULE_roleCommand = 7;
MmParser.RULE_soundCommand = 8;
MmParser.RULE_waitCommand = 9;
MmParser.RULE_groupCommand = 10;
MmParser.RULE_settingsCommand = 11;
MmParser.RULE_paragraphCommand = 12;
MmParser.RULE_callCommand = 13;
MmParser.RULE_commandEnd = 14;
MmParser.RULE_callEnd = 15;
MmParser.RULE_roleName = 16;
MmParser.RULE_roleParameters = 17;
MmParser.RULE_roleParameter = 18;
MmParser.RULE_rolePitchValue = 19;
MmParser.RULE_roleGainValue = 20;
MmParser.RULE_roleVolumeValue = 21;
MmParser.RULE_roleRateValue = 22;
MmParser.RULE_roleAlias = 23;
MmParser.RULE_roleSOUND = 24;
MmParser.RULE_roleLanguageValue = 25;
MmParser.RULE_soundName = 26;
MmParser.RULE_soundParameters = 27;
MmParser.RULE_soundParameter = 28;
MmParser.RULE_soundGainValue = 29;
MmParser.RULE_soundFadeInValue = 30;
MmParser.RULE_soundFadeOutValue = 31;
MmParser.RULE_soundSource = 32;
MmParser.RULE_soundSOUND = 33;
MmParser.RULE_soundStart1Value = 34;
MmParser.RULE_soundEnd1Value = 35;
MmParser.RULE_soundDuration1Value = 36;
MmParser.RULE_soundStart2Value = 37;
MmParser.RULE_soundEnd2Value = 38;
MmParser.RULE_soundDuration2Value = 39;
MmParser.RULE_waitName = 40;
MmParser.RULE_waitParameters = 41;
MmParser.RULE_waitParameter = 42;
MmParser.RULE_waitDelayValue = 43;
MmParser.RULE_groupName = 44;
MmParser.RULE_groupParameters = 45;
MmParser.RULE_groupParameter = 46;
MmParser.RULE_groupMembers = 47;
MmParser.RULE_groupMember = 48;
MmParser.RULE_settingsParameters = 49;
MmParser.RULE_settingsParameter = 50;
MmParser.RULE_settingsDefaultLang = 51;
MmParser.RULE_settingsTitle = 52;
MmParser.RULE_settingsSoundsFolder = 53;
MmParser.RULE_settingsTmpFolder = 54;
MmParser.RULE_settingsShowValue = 55;
MmParser.RULE_settingsDebugValue = 56;
MmParser.RULE_settingsAudioType = 57;
MmParser.RULE_settingsValue = 58;
MmParser.RULE_paragraphName = 59;
MmParser.RULE_paragraphParameters = 60;
MmParser.RULE_paragraphParameter = 61;
MmParser.RULE_paragraphAlignValue = 62;
MmParser.RULE_paragraphLeftMarginValue = 63;
MmParser.RULE_paragraphRightMarginValue = 64;
MmParser.RULE_paragraphMaxWidthValue = 65;
MmParser.RULE_paragraphCaseValue = 66;
MmParser.RULE_paragraphValue = 67;
MmParser.RULE_callValues = 68;
MmParser.RULE_callValue = 69;
MmParser.RULE_callParameters = 70;
MmParser.RULE_callParameter = 71;
MmParser.RULE_callParameterName = 72;
MmParser.RULE_parameterMembers = 73;
MmParser.RULE_parameterMember = 74;

class MmContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MmParser.RULE_mm;
    }

	narrator = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NarratorContext);
	    } else {
	        return this.getTypedRuleContext(NarratorContext,i);
	    }
	};

	command = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CommandContext);
	    } else {
	        return this.getTypedRuleContext(CommandContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.enterMm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.exitMm(this);
		}
	}


}



class NarratorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MmParser.RULE_narrator;
    }

	string = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StringContext);
	    } else {
	        return this.getTypedRuleContext(StringContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.enterNarrator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.exitNarrator(this);
		}
	}


}



class StringContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MmParser.RULE_string;
    }

	sQString() {
	    return this.getTypedRuleContext(SQStringContext,0);
	};

	dQString() {
	    return this.getTypedRuleContext(DQStringContext,0);
	};

	nQString() {
	    return this.getTypedRuleContext(NQStringContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.enterString(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.exitString(this);
		}
	}


}



class SQStringContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MmParser.RULE_sQString;
    }

	SQString() {
	    return this.getToken(MmParser.SQString, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.enterSQString(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.exitSQString(this);
		}
	}


}



class DQStringContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MmParser.RULE_dQString;
    }

	DQString() {
	    return this.getToken(MmParser.DQString, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.enterDQString(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.exitDQString(this);
		}
	}


}



class NQStringContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MmParser.RULE_nQString;
    }

	NQString() {
	    return this.getToken(MmParser.NQString, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.enterNQString(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.exitNQString(this);
		}
	}


}



class CommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MmParser.RULE_command;
    }

	commandEnd() {
	    return this.getTypedRuleContext(CommandEndContext,0);
	};

	CommandStart() {
	    return this.getToken(MmParser.CommandStart, 0);
	};

	roleCommand() {
	    return this.getTypedRuleContext(RoleCommandContext,0);
	};

	roleName() {
	    return this.getTypedRuleContext(RoleNameContext,0);
	};

	roleParameters() {
	    return this.getTypedRuleContext(RoleParametersContext,0);
	};

	soundCommand() {
	    return this.getTypedRuleContext(SoundCommandContext,0);
	};

	soundName() {
	    return this.getTypedRuleContext(SoundNameContext,0);
	};

	soundParameters() {
	    return this.getTypedRuleContext(SoundParametersContext,0);
	};

	waitCommand() {
	    return this.getTypedRuleContext(WaitCommandContext,0);
	};

	waitName() {
	    return this.getTypedRuleContext(WaitNameContext,0);
	};

	waitParameters() {
	    return this.getTypedRuleContext(WaitParametersContext,0);
	};

	groupCommand() {
	    return this.getTypedRuleContext(GroupCommandContext,0);
	};

	groupName() {
	    return this.getTypedRuleContext(GroupNameContext,0);
	};

	groupParameters() {
	    return this.getTypedRuleContext(GroupParametersContext,0);
	};

	settingsCommand() {
	    return this.getTypedRuleContext(SettingsCommandContext,0);
	};

	settingsParameters() {
	    return this.getTypedRuleContext(SettingsParametersContext,0);
	};

	paragraphCommand() {
	    return this.getTypedRuleContext(ParagraphCommandContext,0);
	};

	paragraphName() {
	    return this.getTypedRuleContext(ParagraphNameContext,0);
	};

	paragraphParameters() {
	    return this.getTypedRuleContext(ParagraphParametersContext,0);
	};

	callCommand() {
	    return this.getTypedRuleContext(CallCommandContext,0);
	};

	callValues() {
	    return this.getTypedRuleContext(CallValuesContext,0);
	};

	callParameters() {
	    return this.getTypedRuleContext(CallParametersContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.enterCommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.exitCommand(this);
		}
	}


}



class RoleCommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MmParser.RULE_roleCommand;
    }

	RoleCommand() {
	    return this.getToken(MmParser.RoleCommand, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.enterRoleCommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.exitRoleCommand(this);
		}
	}


}



class SoundCommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MmParser.RULE_soundCommand;
    }

	SoundCommand() {
	    return this.getToken(MmParser.SoundCommand, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.enterSoundCommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.exitSoundCommand(this);
		}
	}


}



class WaitCommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MmParser.RULE_waitCommand;
    }

	WaitCommand() {
	    return this.getToken(MmParser.WaitCommand, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.enterWaitCommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.exitWaitCommand(this);
		}
	}


}



class GroupCommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MmParser.RULE_groupCommand;
    }

	GroupCommand() {
	    return this.getToken(MmParser.GroupCommand, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.enterGroupCommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.exitGroupCommand(this);
		}
	}


}



class SettingsCommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MmParser.RULE_settingsCommand;
    }

	SettingsCommand() {
	    return this.getToken(MmParser.SettingsCommand, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.enterSettingsCommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.exitSettingsCommand(this);
		}
	}


}



class ParagraphCommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MmParser.RULE_paragraphCommand;
    }

	ParagraphCommand() {
	    return this.getToken(MmParser.ParagraphCommand, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.enterParagraphCommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.exitParagraphCommand(this);
		}
	}


}



class CallCommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MmParser.RULE_callCommand;
    }

	CallCommand() {
	    return this.getToken(MmParser.CallCommand, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.enterCallCommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.exitCallCommand(this);
		}
	}


}



class CommandEndContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MmParser.RULE_commandEnd;
    }

	RoleCommandEnd() {
	    return this.getToken(MmParser.RoleCommandEnd, 0);
	};

	SoundCommandEnd() {
	    return this.getToken(MmParser.SoundCommandEnd, 0);
	};

	WaitCommandEnd() {
	    return this.getToken(MmParser.WaitCommandEnd, 0);
	};

	GroupCommandEnd() {
	    return this.getToken(MmParser.GroupCommandEnd, 0);
	};

	SettingsEnd() {
	    return this.getToken(MmParser.SettingsEnd, 0);
	};

	ParagraphCommandEnd() {
	    return this.getToken(MmParser.ParagraphCommandEnd, 0);
	};

	CallCommandEnd() {
	    return this.getToken(MmParser.CallCommandEnd, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.enterCommandEnd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.exitCommandEnd(this);
		}
	}


}



class CallEndContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MmParser.RULE_callEnd;
    }

	CallCommandEnd() {
	    return this.getToken(MmParser.CallCommandEnd, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.enterCallEnd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.exitCallEnd(this);
		}
	}


}



class RoleNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MmParser.RULE_roleName;
    }

	RoleName() {
	    return this.getToken(MmParser.RoleName, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.enterRoleName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.exitRoleName(this);
		}
	}


}



class RoleParametersContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MmParser.RULE_roleParameters;
    }

	roleParameter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RoleParameterContext);
	    } else {
	        return this.getTypedRuleContext(RoleParameterContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.enterRoleParameters(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.exitRoleParameters(this);
		}
	}


}



class RoleParameterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MmParser.RULE_roleParameter;
    }

	RoleParameterStart() {
	    return this.getToken(MmParser.RoleParameterStart, 0);
	};

	RoleParameterEnd() {
	    return this.getToken(MmParser.RoleParameterEnd, 0);
	};

	RolePitch() {
	    return this.getToken(MmParser.RolePitch, 0);
	};

	rolePitchValue() {
	    return this.getTypedRuleContext(RolePitchValueContext,0);
	};

	RoleGain() {
	    return this.getToken(MmParser.RoleGain, 0);
	};

	roleGainValue() {
	    return this.getTypedRuleContext(RoleGainValueContext,0);
	};

	RoleVolume() {
	    return this.getToken(MmParser.RoleVolume, 0);
	};

	roleVolumeValue() {
	    return this.getTypedRuleContext(RoleVolumeValueContext,0);
	};

	RoleRate() {
	    return this.getToken(MmParser.RoleRate, 0);
	};

	roleRateValue() {
	    return this.getTypedRuleContext(RoleRateValueContext,0);
	};

	RoleAlias() {
	    return this.getToken(MmParser.RoleAlias, 0);
	};

	roleAlias() {
	    return this.getTypedRuleContext(RoleAliasContext,0);
	};

	RoleSOUND() {
	    return this.getToken(MmParser.RoleSOUND, 0);
	};

	roleSOUND() {
	    return this.getTypedRuleContext(RoleSOUNDContext,0);
	};

	RoleLang() {
	    return this.getToken(MmParser.RoleLang, 0);
	};

	roleLanguageValue() {
	    return this.getTypedRuleContext(RoleLanguageValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.enterRoleParameter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.exitRoleParameter(this);
		}
	}


}



class RolePitchValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MmParser.RULE_rolePitchValue;
    }

	Number() {
	    return this.getToken(MmParser.Number, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.enterRolePitchValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.exitRolePitchValue(this);
		}
	}


}



class RoleGainValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MmParser.RULE_roleGainValue;
    }

	Number() {
	    return this.getToken(MmParser.Number, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.enterRoleGainValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.exitRoleGainValue(this);
		}
	}


}



class RoleVolumeValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MmParser.RULE_roleVolumeValue;
    }

	Number() {
	    return this.getToken(MmParser.Number, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.enterRoleVolumeValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.exitRoleVolumeValue(this);
		}
	}


}



class RoleRateValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MmParser.RULE_roleRateValue;
    }

	Number() {
	    return this.getToken(MmParser.Number, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.enterRoleRateValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.exitRoleRateValue(this);
		}
	}


}



class RoleAliasContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MmParser.RULE_roleAlias;
    }

	RoleValue() {
	    return this.getToken(MmParser.RoleValue, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.enterRoleAlias(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.exitRoleAlias(this);
		}
	}


}



class RoleSOUNDContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MmParser.RULE_roleSOUND;
    }

	RoleValue() {
	    return this.getToken(MmParser.RoleValue, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.enterRoleSOUND(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.exitRoleSOUND(this);
		}
	}


}



class RoleLanguageValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MmParser.RULE_roleLanguageValue;
    }

	RoleValue() {
	    return this.getToken(MmParser.RoleValue, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.enterRoleLanguageValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.exitRoleLanguageValue(this);
		}
	}


}



class SoundNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MmParser.RULE_soundName;
    }

	SoundName() {
	    return this.getToken(MmParser.SoundName, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.enterSoundName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.exitSoundName(this);
		}
	}


}



class SoundParametersContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MmParser.RULE_soundParameters;
    }

	soundParameter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SoundParameterContext);
	    } else {
	        return this.getTypedRuleContext(SoundParameterContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.enterSoundParameters(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.exitSoundParameters(this);
		}
	}


}



class SoundParameterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MmParser.RULE_soundParameter;
    }

	SoundParameterStart() {
	    return this.getToken(MmParser.SoundParameterStart, 0);
	};

	SoundParameterEnd() {
	    return this.getToken(MmParser.SoundParameterEnd, 0);
	};

	SoundGain() {
	    return this.getToken(MmParser.SoundGain, 0);
	};

	soundGainValue() {
	    return this.getTypedRuleContext(SoundGainValueContext,0);
	};

	SoundFadeIn() {
	    return this.getToken(MmParser.SoundFadeIn, 0);
	};

	soundFadeInValue() {
	    return this.getTypedRuleContext(SoundFadeInValueContext,0);
	};

	SoundFadeOut() {
	    return this.getToken(MmParser.SoundFadeOut, 0);
	};

	soundFadeOutValue() {
	    return this.getTypedRuleContext(SoundFadeOutValueContext,0);
	};

	SoundSource() {
	    return this.getToken(MmParser.SoundSource, 0);
	};

	soundSource() {
	    return this.getTypedRuleContext(SoundSourceContext,0);
	};

	SoundSOUND() {
	    return this.getToken(MmParser.SoundSOUND, 0);
	};

	soundSOUND() {
	    return this.getTypedRuleContext(SoundSOUNDContext,0);
	};

	SoundStart1() {
	    return this.getToken(MmParser.SoundStart1, 0);
	};

	soundStart1Value() {
	    return this.getTypedRuleContext(SoundStart1ValueContext,0);
	};

	SoundEnd1() {
	    return this.getToken(MmParser.SoundEnd1, 0);
	};

	soundEnd1Value() {
	    return this.getTypedRuleContext(SoundEnd1ValueContext,0);
	};

	SoundDuration1() {
	    return this.getToken(MmParser.SoundDuration1, 0);
	};

	soundDuration1Value() {
	    return this.getTypedRuleContext(SoundDuration1ValueContext,0);
	};

	SoundStart2() {
	    return this.getToken(MmParser.SoundStart2, 0);
	};

	soundStart2Value() {
	    return this.getTypedRuleContext(SoundStart2ValueContext,0);
	};

	SoundEnd2() {
	    return this.getToken(MmParser.SoundEnd2, 0);
	};

	soundEnd2Value() {
	    return this.getTypedRuleContext(SoundEnd2ValueContext,0);
	};

	SoundDuration2() {
	    return this.getToken(MmParser.SoundDuration2, 0);
	};

	soundDuration2Value() {
	    return this.getTypedRuleContext(SoundDuration2ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.enterSoundParameter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.exitSoundParameter(this);
		}
	}


}



class SoundGainValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MmParser.RULE_soundGainValue;
    }

	Number() {
	    return this.getToken(MmParser.Number, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.enterSoundGainValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.exitSoundGainValue(this);
		}
	}


}



class SoundFadeInValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MmParser.RULE_soundFadeInValue;
    }

	Number() {
	    return this.getToken(MmParser.Number, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.enterSoundFadeInValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.exitSoundFadeInValue(this);
		}
	}


}



class SoundFadeOutValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MmParser.RULE_soundFadeOutValue;
    }

	Number() {
	    return this.getToken(MmParser.Number, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.enterSoundFadeOutValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.exitSoundFadeOutValue(this);
		}
	}


}



class SoundSourceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MmParser.RULE_soundSource;
    }

	SoundValue() {
	    return this.getToken(MmParser.SoundValue, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.enterSoundSource(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.exitSoundSource(this);
		}
	}


}



class SoundSOUNDContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MmParser.RULE_soundSOUND;
    }

	SoundValue() {
	    return this.getToken(MmParser.SoundValue, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.enterSoundSOUND(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.exitSoundSOUND(this);
		}
	}


}



class SoundStart1ValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MmParser.RULE_soundStart1Value;
    }

	Number() {
	    return this.getToken(MmParser.Number, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.enterSoundStart1Value(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.exitSoundStart1Value(this);
		}
	}


}



class SoundEnd1ValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MmParser.RULE_soundEnd1Value;
    }

	Number() {
	    return this.getToken(MmParser.Number, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.enterSoundEnd1Value(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.exitSoundEnd1Value(this);
		}
	}


}



class SoundDuration1ValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MmParser.RULE_soundDuration1Value;
    }

	Number() {
	    return this.getToken(MmParser.Number, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.enterSoundDuration1Value(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.exitSoundDuration1Value(this);
		}
	}


}



class SoundStart2ValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MmParser.RULE_soundStart2Value;
    }

	Number() {
	    return this.getToken(MmParser.Number, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.enterSoundStart2Value(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.exitSoundStart2Value(this);
		}
	}


}



class SoundEnd2ValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MmParser.RULE_soundEnd2Value;
    }

	Number() {
	    return this.getToken(MmParser.Number, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.enterSoundEnd2Value(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.exitSoundEnd2Value(this);
		}
	}


}



class SoundDuration2ValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MmParser.RULE_soundDuration2Value;
    }

	Number() {
	    return this.getToken(MmParser.Number, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.enterSoundDuration2Value(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.exitSoundDuration2Value(this);
		}
	}


}



class WaitNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MmParser.RULE_waitName;
    }

	WaitName() {
	    return this.getToken(MmParser.WaitName, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.enterWaitName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.exitWaitName(this);
		}
	}


}



class WaitParametersContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MmParser.RULE_waitParameters;
    }

	waitParameter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(WaitParameterContext);
	    } else {
	        return this.getTypedRuleContext(WaitParameterContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.enterWaitParameters(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.exitWaitParameters(this);
		}
	}


}



class WaitParameterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MmParser.RULE_waitParameter;
    }

	WaitParameterStart() {
	    return this.getToken(MmParser.WaitParameterStart, 0);
	};

	WaitParameterEnd() {
	    return this.getToken(MmParser.WaitParameterEnd, 0);
	};

	WaitDelay() {
	    return this.getToken(MmParser.WaitDelay, 0);
	};

	waitDelayValue() {
	    return this.getTypedRuleContext(WaitDelayValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.enterWaitParameter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.exitWaitParameter(this);
		}
	}


}



class WaitDelayValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MmParser.RULE_waitDelayValue;
    }

	Number() {
	    return this.getToken(MmParser.Number, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.enterWaitDelayValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.exitWaitDelayValue(this);
		}
	}


}



class GroupNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MmParser.RULE_groupName;
    }

	GroupName() {
	    return this.getToken(MmParser.GroupName, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.enterGroupName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.exitGroupName(this);
		}
	}


}



class GroupParametersContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MmParser.RULE_groupParameters;
    }

	groupParameter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(GroupParameterContext);
	    } else {
	        return this.getTypedRuleContext(GroupParameterContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.enterGroupParameters(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.exitGroupParameters(this);
		}
	}


}



class GroupParameterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MmParser.RULE_groupParameter;
    }

	GroupParameterStart() {
	    return this.getToken(MmParser.GroupParameterStart, 0);
	};

	GroupParameterEnd() {
	    return this.getToken(MmParser.GroupParameterEnd, 0);
	};

	GroupMembers() {
	    return this.getToken(MmParser.GroupMembers, 0);
	};

	groupMembers() {
	    return this.getTypedRuleContext(GroupMembersContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.enterGroupParameter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.exitGroupParameter(this);
		}
	}


}



class GroupMembersContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MmParser.RULE_groupMembers;
    }

	groupMember = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(GroupMemberContext);
	    } else {
	        return this.getTypedRuleContext(GroupMemberContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.enterGroupMembers(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.exitGroupMembers(this);
		}
	}


}



class GroupMemberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MmParser.RULE_groupMember;
    }

	GroupMember() {
	    return this.getToken(MmParser.GroupMember, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.enterGroupMember(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.exitGroupMember(this);
		}
	}


}



class SettingsParametersContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MmParser.RULE_settingsParameters;
    }

	settingsParameter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SettingsParameterContext);
	    } else {
	        return this.getTypedRuleContext(SettingsParameterContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.enterSettingsParameters(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.exitSettingsParameters(this);
		}
	}


}



class SettingsParameterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MmParser.RULE_settingsParameter;
    }

	SettingsParameterStart() {
	    return this.getToken(MmParser.SettingsParameterStart, 0);
	};

	SettingsParameterEnd() {
	    return this.getToken(MmParser.SettingsParameterEnd, 0);
	};

	SettingsDefaultLang() {
	    return this.getToken(MmParser.SettingsDefaultLang, 0);
	};

	settingsDefaultLang() {
	    return this.getTypedRuleContext(SettingsDefaultLangContext,0);
	};

	SettingsTitle() {
	    return this.getToken(MmParser.SettingsTitle, 0);
	};

	settingsTitle() {
	    return this.getTypedRuleContext(SettingsTitleContext,0);
	};

	SettingsSoundsFolder() {
	    return this.getToken(MmParser.SettingsSoundsFolder, 0);
	};

	settingsSoundsFolder() {
	    return this.getTypedRuleContext(SettingsSoundsFolderContext,0);
	};

	SettingsTmpFolder() {
	    return this.getToken(MmParser.SettingsTmpFolder, 0);
	};

	settingsTmpFolder() {
	    return this.getTypedRuleContext(SettingsTmpFolderContext,0);
	};

	SettingsShow() {
	    return this.getToken(MmParser.SettingsShow, 0);
	};

	settingsShowValue() {
	    return this.getTypedRuleContext(SettingsShowValueContext,0);
	};

	SettingsDebug() {
	    return this.getToken(MmParser.SettingsDebug, 0);
	};

	settingsDebugValue() {
	    return this.getTypedRuleContext(SettingsDebugValueContext,0);
	};

	SettingsAudioType() {
	    return this.getToken(MmParser.SettingsAudioType, 0);
	};

	settingsAudioType() {
	    return this.getTypedRuleContext(SettingsAudioTypeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.enterSettingsParameter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.exitSettingsParameter(this);
		}
	}


}



class SettingsDefaultLangContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MmParser.RULE_settingsDefaultLang;
    }

	SettingsValue() {
	    return this.getToken(MmParser.SettingsValue, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.enterSettingsDefaultLang(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.exitSettingsDefaultLang(this);
		}
	}


}



class SettingsTitleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MmParser.RULE_settingsTitle;
    }

	SettingsValue() {
	    return this.getToken(MmParser.SettingsValue, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.enterSettingsTitle(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.exitSettingsTitle(this);
		}
	}


}



class SettingsSoundsFolderContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MmParser.RULE_settingsSoundsFolder;
    }

	SettingsValue() {
	    return this.getToken(MmParser.SettingsValue, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.enterSettingsSoundsFolder(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.exitSettingsSoundsFolder(this);
		}
	}


}



class SettingsTmpFolderContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MmParser.RULE_settingsTmpFolder;
    }

	SettingsValue() {
	    return this.getToken(MmParser.SettingsValue, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.enterSettingsTmpFolder(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.exitSettingsTmpFolder(this);
		}
	}


}



class SettingsShowValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MmParser.RULE_settingsShowValue;
    }

	Boolean() {
	    return this.getToken(MmParser.Boolean, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.enterSettingsShowValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.exitSettingsShowValue(this);
		}
	}


}



class SettingsDebugValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MmParser.RULE_settingsDebugValue;
    }

	Boolean() {
	    return this.getToken(MmParser.Boolean, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.enterSettingsDebugValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.exitSettingsDebugValue(this);
		}
	}


}



class SettingsAudioTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MmParser.RULE_settingsAudioType;
    }

	SettingsValue() {
	    return this.getToken(MmParser.SettingsValue, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.enterSettingsAudioType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.exitSettingsAudioType(this);
		}
	}


}



class SettingsValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MmParser.RULE_settingsValue;
    }

	SettingsValue() {
	    return this.getToken(MmParser.SettingsValue, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.enterSettingsValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.exitSettingsValue(this);
		}
	}


}



class ParagraphNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MmParser.RULE_paragraphName;
    }

	ParagraphName() {
	    return this.getToken(MmParser.ParagraphName, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.enterParagraphName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.exitParagraphName(this);
		}
	}


}



class ParagraphParametersContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MmParser.RULE_paragraphParameters;
    }

	paragraphParameter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ParagraphParameterContext);
	    } else {
	        return this.getTypedRuleContext(ParagraphParameterContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.enterParagraphParameters(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.exitParagraphParameters(this);
		}
	}


}



class ParagraphParameterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MmParser.RULE_paragraphParameter;
    }

	ParagraphParameterStart() {
	    return this.getToken(MmParser.ParagraphParameterStart, 0);
	};

	ParagraphParameterEnd() {
	    return this.getToken(MmParser.ParagraphParameterEnd, 0);
	};

	ParagraphAlign() {
	    return this.getToken(MmParser.ParagraphAlign, 0);
	};

	paragraphAlignValue() {
	    return this.getTypedRuleContext(ParagraphAlignValueContext,0);
	};

	ParagraphLeftMargin() {
	    return this.getToken(MmParser.ParagraphLeftMargin, 0);
	};

	paragraphLeftMarginValue() {
	    return this.getTypedRuleContext(ParagraphLeftMarginValueContext,0);
	};

	ParagraphRightMargin() {
	    return this.getToken(MmParser.ParagraphRightMargin, 0);
	};

	paragraphRightMarginValue() {
	    return this.getTypedRuleContext(ParagraphRightMarginValueContext,0);
	};

	ParagraphMaxWidth() {
	    return this.getToken(MmParser.ParagraphMaxWidth, 0);
	};

	paragraphMaxWidthValue() {
	    return this.getTypedRuleContext(ParagraphMaxWidthValueContext,0);
	};

	ParagraphCase() {
	    return this.getToken(MmParser.ParagraphCase, 0);
	};

	paragraphCaseValue() {
	    return this.getTypedRuleContext(ParagraphCaseValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.enterParagraphParameter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.exitParagraphParameter(this);
		}
	}


}



class ParagraphAlignValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MmParser.RULE_paragraphAlignValue;
    }

	AlignValue() {
	    return this.getToken(MmParser.AlignValue, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.enterParagraphAlignValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.exitParagraphAlignValue(this);
		}
	}


}



class ParagraphLeftMarginValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MmParser.RULE_paragraphLeftMarginValue;
    }

	Number() {
	    return this.getToken(MmParser.Number, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.enterParagraphLeftMarginValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.exitParagraphLeftMarginValue(this);
		}
	}


}



class ParagraphRightMarginValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MmParser.RULE_paragraphRightMarginValue;
    }

	Number() {
	    return this.getToken(MmParser.Number, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.enterParagraphRightMarginValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.exitParagraphRightMarginValue(this);
		}
	}


}



class ParagraphMaxWidthValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MmParser.RULE_paragraphMaxWidthValue;
    }

	Number() {
	    return this.getToken(MmParser.Number, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.enterParagraphMaxWidthValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.exitParagraphMaxWidthValue(this);
		}
	}


}



class ParagraphCaseValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MmParser.RULE_paragraphCaseValue;
    }

	CaseValue() {
	    return this.getToken(MmParser.CaseValue, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.enterParagraphCaseValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.exitParagraphCaseValue(this);
		}
	}


}



class ParagraphValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MmParser.RULE_paragraphValue;
    }

	ParagraphValue() {
	    return this.getToken(MmParser.ParagraphValue, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.enterParagraphValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.exitParagraphValue(this);
		}
	}


}



class CallValuesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MmParser.RULE_callValues;
    }

	callValue = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CallValueContext);
	    } else {
	        return this.getTypedRuleContext(CallValueContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.enterCallValues(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.exitCallValues(this);
		}
	}


}



class CallValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MmParser.RULE_callValue;
    }

	CallValue() {
	    return this.getToken(MmParser.CallValue, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.enterCallValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.exitCallValue(this);
		}
	}


}



class CallParametersContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MmParser.RULE_callParameters;
    }

	callParameter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CallParameterContext);
	    } else {
	        return this.getTypedRuleContext(CallParameterContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.enterCallParameters(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.exitCallParameters(this);
		}
	}


}



class CallParameterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MmParser.RULE_callParameter;
    }

	CallParameterStart() {
	    return this.getToken(MmParser.CallParameterStart, 0);
	};

	ParameterEnd() {
	    return this.getToken(MmParser.ParameterEnd, 0);
	};

	callParameterName() {
	    return this.getTypedRuleContext(CallParameterNameContext,0);
	};

	parameterMembers() {
	    return this.getTypedRuleContext(ParameterMembersContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.enterCallParameter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.exitCallParameter(this);
		}
	}


}



class CallParameterNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MmParser.RULE_callParameterName;
    }

	CallParameterName() {
	    return this.getToken(MmParser.CallParameterName, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.enterCallParameterName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.exitCallParameterName(this);
		}
	}


}



class ParameterMembersContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MmParser.RULE_parameterMembers;
    }

	parameterMember = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ParameterMemberContext);
	    } else {
	        return this.getTypedRuleContext(ParameterMemberContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.enterParameterMembers(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.exitParameterMembers(this);
		}
	}


}



class ParameterMemberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MmParser.RULE_parameterMember;
    }

	ParameterMember() {
	    return this.getToken(MmParser.ParameterMember, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.enterParameterMember(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MmParserListener ) {
	        listener.exitParameterMember(this);
		}
	}


}




MmParser.MmContext = MmContext; 
MmParser.NarratorContext = NarratorContext; 
MmParser.StringContext = StringContext; 
MmParser.SQStringContext = SQStringContext; 
MmParser.DQStringContext = DQStringContext; 
MmParser.NQStringContext = NQStringContext; 
MmParser.CommandContext = CommandContext; 
MmParser.RoleCommandContext = RoleCommandContext; 
MmParser.SoundCommandContext = SoundCommandContext; 
MmParser.WaitCommandContext = WaitCommandContext; 
MmParser.GroupCommandContext = GroupCommandContext; 
MmParser.SettingsCommandContext = SettingsCommandContext; 
MmParser.ParagraphCommandContext = ParagraphCommandContext; 
MmParser.CallCommandContext = CallCommandContext; 
MmParser.CommandEndContext = CommandEndContext; 
MmParser.CallEndContext = CallEndContext; 
MmParser.RoleNameContext = RoleNameContext; 
MmParser.RoleParametersContext = RoleParametersContext; 
MmParser.RoleParameterContext = RoleParameterContext; 
MmParser.RolePitchValueContext = RolePitchValueContext; 
MmParser.RoleGainValueContext = RoleGainValueContext; 
MmParser.RoleVolumeValueContext = RoleVolumeValueContext; 
MmParser.RoleRateValueContext = RoleRateValueContext; 
MmParser.RoleAliasContext = RoleAliasContext; 
MmParser.RoleSOUNDContext = RoleSOUNDContext; 
MmParser.RoleLanguageValueContext = RoleLanguageValueContext; 
MmParser.SoundNameContext = SoundNameContext; 
MmParser.SoundParametersContext = SoundParametersContext; 
MmParser.SoundParameterContext = SoundParameterContext; 
MmParser.SoundGainValueContext = SoundGainValueContext; 
MmParser.SoundFadeInValueContext = SoundFadeInValueContext; 
MmParser.SoundFadeOutValueContext = SoundFadeOutValueContext; 
MmParser.SoundSourceContext = SoundSourceContext; 
MmParser.SoundSOUNDContext = SoundSOUNDContext; 
MmParser.SoundStart1ValueContext = SoundStart1ValueContext; 
MmParser.SoundEnd1ValueContext = SoundEnd1ValueContext; 
MmParser.SoundDuration1ValueContext = SoundDuration1ValueContext; 
MmParser.SoundStart2ValueContext = SoundStart2ValueContext; 
MmParser.SoundEnd2ValueContext = SoundEnd2ValueContext; 
MmParser.SoundDuration2ValueContext = SoundDuration2ValueContext; 
MmParser.WaitNameContext = WaitNameContext; 
MmParser.WaitParametersContext = WaitParametersContext; 
MmParser.WaitParameterContext = WaitParameterContext; 
MmParser.WaitDelayValueContext = WaitDelayValueContext; 
MmParser.GroupNameContext = GroupNameContext; 
MmParser.GroupParametersContext = GroupParametersContext; 
MmParser.GroupParameterContext = GroupParameterContext; 
MmParser.GroupMembersContext = GroupMembersContext; 
MmParser.GroupMemberContext = GroupMemberContext; 
MmParser.SettingsParametersContext = SettingsParametersContext; 
MmParser.SettingsParameterContext = SettingsParameterContext; 
MmParser.SettingsDefaultLangContext = SettingsDefaultLangContext; 
MmParser.SettingsTitleContext = SettingsTitleContext; 
MmParser.SettingsSoundsFolderContext = SettingsSoundsFolderContext; 
MmParser.SettingsTmpFolderContext = SettingsTmpFolderContext; 
MmParser.SettingsShowValueContext = SettingsShowValueContext; 
MmParser.SettingsDebugValueContext = SettingsDebugValueContext; 
MmParser.SettingsAudioTypeContext = SettingsAudioTypeContext; 
MmParser.SettingsValueContext = SettingsValueContext; 
MmParser.ParagraphNameContext = ParagraphNameContext; 
MmParser.ParagraphParametersContext = ParagraphParametersContext; 
MmParser.ParagraphParameterContext = ParagraphParameterContext; 
MmParser.ParagraphAlignValueContext = ParagraphAlignValueContext; 
MmParser.ParagraphLeftMarginValueContext = ParagraphLeftMarginValueContext; 
MmParser.ParagraphRightMarginValueContext = ParagraphRightMarginValueContext; 
MmParser.ParagraphMaxWidthValueContext = ParagraphMaxWidthValueContext; 
MmParser.ParagraphCaseValueContext = ParagraphCaseValueContext; 
MmParser.ParagraphValueContext = ParagraphValueContext; 
MmParser.CallValuesContext = CallValuesContext; 
MmParser.CallValueContext = CallValueContext; 
MmParser.CallParametersContext = CallParametersContext; 
MmParser.CallParameterContext = CallParameterContext; 
MmParser.CallParameterNameContext = CallParameterNameContext; 
MmParser.ParameterMembersContext = ParameterMembersContext; 
MmParser.ParameterMemberContext = ParameterMemberContext; 
