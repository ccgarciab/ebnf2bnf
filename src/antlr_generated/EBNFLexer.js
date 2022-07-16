// Generated from grammar/EBNF.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,10,63,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,1,0,1,0,1,1,1,1,1,2,1,2,1,
3,1,3,1,4,1,4,1,5,1,5,5,5,34,8,5,10,5,12,5,37,9,5,1,6,1,6,5,6,41,8,6,10,
6,12,6,44,9,6,1,7,1,7,5,7,48,8,7,10,7,12,7,51,9,7,1,7,1,7,1,8,1,8,1,9,4,
9,58,8,9,11,9,12,9,59,1,9,1,9,1,49,0,10,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,
8,17,9,19,10,1,0,5,1,0,65,90,3,0,65,90,95,95,97,122,1,0,97,122,2,0,42,43,
63,63,3,0,9,10,13,13,32,32,66,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,
0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,
19,1,0,0,0,1,21,1,0,0,0,3,23,1,0,0,0,5,25,1,0,0,0,7,27,1,0,0,0,9,29,1,0,
0,0,11,31,1,0,0,0,13,38,1,0,0,0,15,45,1,0,0,0,17,54,1,0,0,0,19,57,1,0,0,
0,21,22,5,58,0,0,22,2,1,0,0,0,23,24,5,59,0,0,24,4,1,0,0,0,25,26,5,124,0,
0,26,6,1,0,0,0,27,28,5,40,0,0,28,8,1,0,0,0,29,30,5,41,0,0,30,10,1,0,0,0,
31,35,7,0,0,0,32,34,7,1,0,0,33,32,1,0,0,0,34,37,1,0,0,0,35,33,1,0,0,0,35,
36,1,0,0,0,36,12,1,0,0,0,37,35,1,0,0,0,38,42,7,2,0,0,39,41,7,1,0,0,40,39,
1,0,0,0,41,44,1,0,0,0,42,40,1,0,0,0,42,43,1,0,0,0,43,14,1,0,0,0,44,42,1,
0,0,0,45,49,5,39,0,0,46,48,9,0,0,0,47,46,1,0,0,0,48,51,1,0,0,0,49,50,1,0,
0,0,49,47,1,0,0,0,50,52,1,0,0,0,51,49,1,0,0,0,52,53,5,39,0,0,53,16,1,0,0,
0,54,55,7,3,0,0,55,18,1,0,0,0,56,58,7,4,0,0,57,56,1,0,0,0,58,59,1,0,0,0,
59,57,1,0,0,0,59,60,1,0,0,0,60,61,1,0,0,0,61,62,6,9,0,0,62,20,1,0,0,0,5,
0,35,42,49,59,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class EBNFLexer extends antlr4.Lexer {

    static grammarFileName = "EBNF.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "':'", "';'", "'|'", "'('", "')'" ];
	static symbolicNames = [ null, null, null, null, null, null, "LEXICAL_RULE_NAME", 
                          "GRAMMAR_RULE_NAME", "TK_LITERAL", "MULTIPLICITY_OP", 
                          "WHITESPACE" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", "LEXICAL_RULE_NAME", 
                      "GRAMMAR_RULE_NAME", "TK_LITERAL", "MULTIPLICITY_OP", 
                      "WHITESPACE" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

EBNFLexer.EOF = antlr4.Token.EOF;
EBNFLexer.T__0 = 1;
EBNFLexer.T__1 = 2;
EBNFLexer.T__2 = 3;
EBNFLexer.T__3 = 4;
EBNFLexer.T__4 = 5;
EBNFLexer.LEXICAL_RULE_NAME = 6;
EBNFLexer.GRAMMAR_RULE_NAME = 7;
EBNFLexer.TK_LITERAL = 8;
EBNFLexer.MULTIPLICITY_OP = 9;
EBNFLexer.WHITESPACE = 10;



