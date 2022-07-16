// Generated from grammar/EBNF.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import EBNFVisitor from './EBNFVisitor.js';

const serializedATN = [4,1,10,54,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,1,0,5,0,16,8,0,10,0,12,0,19,9,0,1,0,1,0,1,1,1,1,1,1,1,1,
1,1,1,2,1,2,1,2,5,2,31,8,2,10,2,12,2,34,9,2,1,3,4,3,37,8,3,11,3,12,3,38,
1,4,1,4,3,4,43,8,4,1,4,3,4,46,8,4,1,5,1,5,1,5,1,5,1,6,1,6,1,6,0,0,7,0,2,
4,6,8,10,12,0,1,1,0,6,8,51,0,17,1,0,0,0,2,22,1,0,0,0,4,27,1,0,0,0,6,36,1,
0,0,0,8,42,1,0,0,0,10,47,1,0,0,0,12,51,1,0,0,0,14,16,3,2,1,0,15,14,1,0,0,
0,16,19,1,0,0,0,17,15,1,0,0,0,17,18,1,0,0,0,18,20,1,0,0,0,19,17,1,0,0,0,
20,21,5,0,0,1,21,1,1,0,0,0,22,23,5,7,0,0,23,24,5,1,0,0,24,25,3,4,2,0,25,
26,5,2,0,0,26,3,1,0,0,0,27,32,3,6,3,0,28,29,5,3,0,0,29,31,3,6,3,0,30,28,
1,0,0,0,31,34,1,0,0,0,32,30,1,0,0,0,32,33,1,0,0,0,33,5,1,0,0,0,34,32,1,0,
0,0,35,37,3,8,4,0,36,35,1,0,0,0,37,38,1,0,0,0,38,36,1,0,0,0,38,39,1,0,0,
0,39,7,1,0,0,0,40,43,3,10,5,0,41,43,3,12,6,0,42,40,1,0,0,0,42,41,1,0,0,0,
43,45,1,0,0,0,44,46,5,9,0,0,45,44,1,0,0,0,45,46,1,0,0,0,46,9,1,0,0,0,47,
48,5,4,0,0,48,49,3,4,2,0,49,50,5,5,0,0,50,11,1,0,0,0,51,52,7,0,0,0,52,13,
1,0,0,0,5,17,32,38,42,45];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class EBNFParser extends antlr4.Parser {

    static grammarFileName = "EBNF.g4";
    static literalNames = [ null, "':'", "';'", "'|'", "'('", "')'" ];
    static symbolicNames = [ null, null, null, null, null, null, "LEXICAL_RULE_NAME", 
                             "GRAMMAR_RULE_NAME", "TK_LITERAL", "MULTIPLICITY_OP", 
                             "WHITESPACE" ];
    static ruleNames = [ "grammarFile", "rule", "body", "alternative", "unit", 
                         "grouping", "primitive" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = EBNFParser.ruleNames;
        this.literalNames = EBNFParser.literalNames;
        this.symbolicNames = EBNFParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	grammarFile() {
	    let localctx = new GrammarFileContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, EBNFParser.RULE_grammarFile);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 17;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===EBNFParser.GRAMMAR_RULE_NAME) {
	            this.state = 14;
	            this.rule_();
	            this.state = 19;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 20;
	        this.match(EBNFParser.EOF);
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



	rule_() {
	    let localctx = new RuleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, EBNFParser.RULE_rule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 22;
	        this.match(EBNFParser.GRAMMAR_RULE_NAME);
	        this.state = 23;
	        this.match(EBNFParser.T__0);
	        this.state = 24;
	        this.body();
	        this.state = 25;
	        this.match(EBNFParser.T__1);
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



	body() {
	    let localctx = new BodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, EBNFParser.RULE_body);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 27;
	        this.alternative();
	        this.state = 32;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===EBNFParser.T__2) {
	            this.state = 28;
	            this.match(EBNFParser.T__2);
	            this.state = 29;
	            this.alternative();
	            this.state = 34;
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



	alternative() {
	    let localctx = new AlternativeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, EBNFParser.RULE_alternative);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 36; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 35;
	            this.unit();
	            this.state = 38; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << EBNFParser.T__3) | (1 << EBNFParser.LEXICAL_RULE_NAME) | (1 << EBNFParser.GRAMMAR_RULE_NAME) | (1 << EBNFParser.TK_LITERAL))) !== 0));
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



	unit() {
	    let localctx = new UnitContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, EBNFParser.RULE_unit);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 42;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case EBNFParser.T__3:
	            this.state = 40;
	            this.grouping();
	            break;
	        case EBNFParser.LEXICAL_RULE_NAME:
	        case EBNFParser.GRAMMAR_RULE_NAME:
	        case EBNFParser.TK_LITERAL:
	            this.state = 41;
	            this.primitive();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 45;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===EBNFParser.MULTIPLICITY_OP) {
	            this.state = 44;
	            this.match(EBNFParser.MULTIPLICITY_OP);
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



	grouping() {
	    let localctx = new GroupingContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, EBNFParser.RULE_grouping);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 47;
	        this.match(EBNFParser.T__3);
	        this.state = 48;
	        this.body();
	        this.state = 49;
	        this.match(EBNFParser.T__4);
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



	primitive() {
	    let localctx = new PrimitiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, EBNFParser.RULE_primitive);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 51;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << EBNFParser.LEXICAL_RULE_NAME) | (1 << EBNFParser.GRAMMAR_RULE_NAME) | (1 << EBNFParser.TK_LITERAL))) !== 0))) {
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


}

EBNFParser.EOF = antlr4.Token.EOF;
EBNFParser.T__0 = 1;
EBNFParser.T__1 = 2;
EBNFParser.T__2 = 3;
EBNFParser.T__3 = 4;
EBNFParser.T__4 = 5;
EBNFParser.LEXICAL_RULE_NAME = 6;
EBNFParser.GRAMMAR_RULE_NAME = 7;
EBNFParser.TK_LITERAL = 8;
EBNFParser.MULTIPLICITY_OP = 9;
EBNFParser.WHITESPACE = 10;

EBNFParser.RULE_grammarFile = 0;
EBNFParser.RULE_rule = 1;
EBNFParser.RULE_body = 2;
EBNFParser.RULE_alternative = 3;
EBNFParser.RULE_unit = 4;
EBNFParser.RULE_grouping = 5;
EBNFParser.RULE_primitive = 6;

class GrammarFileContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = EBNFParser.RULE_grammarFile;
    }

	EOF() {
	    return this.getToken(EBNFParser.EOF, 0);
	};

	rule_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RuleContext);
	    } else {
	        return this.getTypedRuleContext(RuleContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof EBNFVisitor ) {
	        return visitor.visitGrammarFile(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RuleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = EBNFParser.RULE_rule;
    }

	GRAMMAR_RULE_NAME() {
	    return this.getToken(EBNFParser.GRAMMAR_RULE_NAME, 0);
	};

	body() {
	    return this.getTypedRuleContext(BodyContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof EBNFVisitor ) {
	        return visitor.visitRule(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = EBNFParser.RULE_body;
    }

	alternative = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AlternativeContext);
	    } else {
	        return this.getTypedRuleContext(AlternativeContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof EBNFVisitor ) {
	        return visitor.visitBody(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AlternativeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = EBNFParser.RULE_alternative;
    }

	unit = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(UnitContext);
	    } else {
	        return this.getTypedRuleContext(UnitContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof EBNFVisitor ) {
	        return visitor.visitAlternative(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class UnitContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = EBNFParser.RULE_unit;
    }

	grouping() {
	    return this.getTypedRuleContext(GroupingContext,0);
	};

	primitive() {
	    return this.getTypedRuleContext(PrimitiveContext,0);
	};

	MULTIPLICITY_OP() {
	    return this.getToken(EBNFParser.MULTIPLICITY_OP, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof EBNFVisitor ) {
	        return visitor.visitUnit(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class GroupingContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = EBNFParser.RULE_grouping;
    }

	body() {
	    return this.getTypedRuleContext(BodyContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof EBNFVisitor ) {
	        return visitor.visitGrouping(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PrimitiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = EBNFParser.RULE_primitive;
    }

	TK_LITERAL() {
	    return this.getToken(EBNFParser.TK_LITERAL, 0);
	};

	GRAMMAR_RULE_NAME() {
	    return this.getToken(EBNFParser.GRAMMAR_RULE_NAME, 0);
	};

	LEXICAL_RULE_NAME() {
	    return this.getToken(EBNFParser.LEXICAL_RULE_NAME, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof EBNFVisitor ) {
	        return visitor.visitPrimitive(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




EBNFParser.GrammarFileContext = GrammarFileContext; 
EBNFParser.RuleContext = RuleContext; 
EBNFParser.BodyContext = BodyContext; 
EBNFParser.AlternativeContext = AlternativeContext; 
EBNFParser.UnitContext = UnitContext; 
EBNFParser.GroupingContext = GroupingContext; 
EBNFParser.PrimitiveContext = PrimitiveContext; 
