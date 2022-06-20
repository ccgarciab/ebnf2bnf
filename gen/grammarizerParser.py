# Generated from C:/Users/z004hkjh/Documents/Code/grammarizer/grammar\grammarizer.g4 by ANTLR 4.10.1
# encoding: utf-8
from antlr4 import *
from io import StringIO
import sys
if sys.version_info[1] > 5:
	from typing import TextIO
else:
	from typing.io import TextIO

def serializedATN():
    return [
        4,1,10,54,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,1,0,5,0,16,8,0,10,0,12,0,19,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,
        2,1,2,1,2,5,2,31,8,2,10,2,12,2,34,9,2,1,3,4,3,37,8,3,11,3,12,3,38,
        1,4,1,4,3,4,43,8,4,1,4,3,4,46,8,4,1,5,1,5,1,5,1,5,1,6,1,6,1,6,0,
        0,7,0,2,4,6,8,10,12,0,1,1,0,6,8,51,0,17,1,0,0,0,2,22,1,0,0,0,4,27,
        1,0,0,0,6,36,1,0,0,0,8,42,1,0,0,0,10,47,1,0,0,0,12,51,1,0,0,0,14,
        16,3,2,1,0,15,14,1,0,0,0,16,19,1,0,0,0,17,15,1,0,0,0,17,18,1,0,0,
        0,18,20,1,0,0,0,19,17,1,0,0,0,20,21,5,0,0,1,21,1,1,0,0,0,22,23,5,
        7,0,0,23,24,5,1,0,0,24,25,3,4,2,0,25,26,5,2,0,0,26,3,1,0,0,0,27,
        32,3,6,3,0,28,29,5,3,0,0,29,31,3,6,3,0,30,28,1,0,0,0,31,34,1,0,0,
        0,32,30,1,0,0,0,32,33,1,0,0,0,33,5,1,0,0,0,34,32,1,0,0,0,35,37,3,
        8,4,0,36,35,1,0,0,0,37,38,1,0,0,0,38,36,1,0,0,0,38,39,1,0,0,0,39,
        7,1,0,0,0,40,43,3,10,5,0,41,43,3,12,6,0,42,40,1,0,0,0,42,41,1,0,
        0,0,43,45,1,0,0,0,44,46,5,9,0,0,45,44,1,0,0,0,45,46,1,0,0,0,46,9,
        1,0,0,0,47,48,5,4,0,0,48,49,3,4,2,0,49,50,5,5,0,0,50,11,1,0,0,0,
        51,52,7,0,0,0,52,13,1,0,0,0,5,17,32,38,42,45
    ]

class grammarizerParser ( Parser ):

    grammarFileName = "grammarizer.g4"

    atn = ATNDeserializer().deserialize(serializedATN())

    decisionsToDFA = [ DFA(ds, i) for i, ds in enumerate(atn.decisionToState) ]

    sharedContextCache = PredictionContextCache()

    literalNames = [ "<INVALID>", "':'", "';'", "'|'", "'('", "')'" ]

    symbolicNames = [ "<INVALID>", "<INVALID>", "<INVALID>", "<INVALID>", 
                      "<INVALID>", "<INVALID>", "LEXICAL_RULE_NAME", "GRAMMAR_RULE_NAME", 
                      "TK_LITERAL", "MULTIPLICITY_OP", "WHITESPACE" ]

    RULE_grammarFile = 0
    RULE_rule = 1
    RULE_body = 2
    RULE_alternative = 3
    RULE_unit = 4
    RULE_grouping = 5
    RULE_primitive = 6

    ruleNames =  [ "grammarFile", "rule", "body", "alternative", "unit", 
                   "grouping", "primitive" ]

    EOF = Token.EOF
    T__0=1
    T__1=2
    T__2=3
    T__3=4
    T__4=5
    LEXICAL_RULE_NAME=6
    GRAMMAR_RULE_NAME=7
    TK_LITERAL=8
    MULTIPLICITY_OP=9
    WHITESPACE=10

    def __init__(self, input:TokenStream, output:TextIO = sys.stdout):
        super().__init__(input, output)
        self.checkVersion("4.10.1")
        self._interp = ParserATNSimulator(self, self.atn, self.decisionsToDFA, self.sharedContextCache)
        self._predicates = None




    class GrammarFileContext(ParserRuleContext):
        __slots__ = 'parser'

        def __init__(self, parser, parent:ParserRuleContext=None, invokingState:int=-1):
            super().__init__(parent, invokingState)
            self.parser = parser

        def EOF(self):
            return self.getToken(grammarizerParser.EOF, 0)

        def rule_(self, i:int=None):
            if i is None:
                return self.getTypedRuleContexts(grammarizerParser.RuleContext)
            else:
                return self.getTypedRuleContext(grammarizerParser.RuleContext,i)


        def getRuleIndex(self):
            return grammarizerParser.RULE_grammarFile

        def enterRule(self, listener:ParseTreeListener):
            if hasattr( listener, "enterGrammarFile" ):
                listener.enterGrammarFile(self)

        def exitRule(self, listener:ParseTreeListener):
            if hasattr( listener, "exitGrammarFile" ):
                listener.exitGrammarFile(self)

        def accept(self, visitor:ParseTreeVisitor):
            if hasattr( visitor, "visitGrammarFile" ):
                return visitor.visitGrammarFile(self)
            else:
                return visitor.visitChildren(self)




    def grammarFile(self):

        localctx = grammarizerParser.GrammarFileContext(self, self._ctx, self.state)
        self.enterRule(localctx, 0, self.RULE_grammarFile)
        self._la = 0 # Token type
        try:
            self.enterOuterAlt(localctx, 1)
            self.state = 17
            self._errHandler.sync(self)
            _la = self._input.LA(1)
            while _la==grammarizerParser.GRAMMAR_RULE_NAME:
                self.state = 14
                self.rule_()
                self.state = 19
                self._errHandler.sync(self)
                _la = self._input.LA(1)

            self.state = 20
            self.match(grammarizerParser.EOF)
        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.exitRule()
        return localctx


    class RuleContext(ParserRuleContext):
        __slots__ = 'parser'

        def __init__(self, parser, parent:ParserRuleContext=None, invokingState:int=-1):
            super().__init__(parent, invokingState)
            self.parser = parser
            self.name = None # Token

        def body(self):
            return self.getTypedRuleContext(grammarizerParser.BodyContext,0)


        def GRAMMAR_RULE_NAME(self):
            return self.getToken(grammarizerParser.GRAMMAR_RULE_NAME, 0)

        def getRuleIndex(self):
            return grammarizerParser.RULE_rule

        def enterRule(self, listener:ParseTreeListener):
            if hasattr( listener, "enterRule" ):
                listener.enterRule(self)

        def exitRule(self, listener:ParseTreeListener):
            if hasattr( listener, "exitRule" ):
                listener.exitRule(self)

        def accept(self, visitor:ParseTreeVisitor):
            if hasattr( visitor, "visitRule" ):
                return visitor.visitRule(self)
            else:
                return visitor.visitChildren(self)




    def rule_(self):

        localctx = grammarizerParser.RuleContext(self, self._ctx, self.state)
        self.enterRule(localctx, 2, self.RULE_rule)
        try:
            self.enterOuterAlt(localctx, 1)
            self.state = 22
            localctx.name = self.match(grammarizerParser.GRAMMAR_RULE_NAME)
            self.state = 23
            self.match(grammarizerParser.T__0)
            self.state = 24
            self.body()
            self.state = 25
            self.match(grammarizerParser.T__1)
        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.exitRule()
        return localctx


    class BodyContext(ParserRuleContext):
        __slots__ = 'parser'

        def __init__(self, parser, parent:ParserRuleContext=None, invokingState:int=-1):
            super().__init__(parent, invokingState)
            self.parser = parser

        def alternative(self, i:int=None):
            if i is None:
                return self.getTypedRuleContexts(grammarizerParser.AlternativeContext)
            else:
                return self.getTypedRuleContext(grammarizerParser.AlternativeContext,i)


        def getRuleIndex(self):
            return grammarizerParser.RULE_body

        def enterRule(self, listener:ParseTreeListener):
            if hasattr( listener, "enterBody" ):
                listener.enterBody(self)

        def exitRule(self, listener:ParseTreeListener):
            if hasattr( listener, "exitBody" ):
                listener.exitBody(self)

        def accept(self, visitor:ParseTreeVisitor):
            if hasattr( visitor, "visitBody" ):
                return visitor.visitBody(self)
            else:
                return visitor.visitChildren(self)




    def body(self):

        localctx = grammarizerParser.BodyContext(self, self._ctx, self.state)
        self.enterRule(localctx, 4, self.RULE_body)
        self._la = 0 # Token type
        try:
            self.enterOuterAlt(localctx, 1)
            self.state = 27
            self.alternative()
            self.state = 32
            self._errHandler.sync(self)
            _la = self._input.LA(1)
            while _la==grammarizerParser.T__2:
                self.state = 28
                self.match(grammarizerParser.T__2)
                self.state = 29
                self.alternative()
                self.state = 34
                self._errHandler.sync(self)
                _la = self._input.LA(1)

        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.exitRule()
        return localctx


    class AlternativeContext(ParserRuleContext):
        __slots__ = 'parser'

        def __init__(self, parser, parent:ParserRuleContext=None, invokingState:int=-1):
            super().__init__(parent, invokingState)
            self.parser = parser

        def unit(self, i:int=None):
            if i is None:
                return self.getTypedRuleContexts(grammarizerParser.UnitContext)
            else:
                return self.getTypedRuleContext(grammarizerParser.UnitContext,i)


        def getRuleIndex(self):
            return grammarizerParser.RULE_alternative

        def enterRule(self, listener:ParseTreeListener):
            if hasattr( listener, "enterAlternative" ):
                listener.enterAlternative(self)

        def exitRule(self, listener:ParseTreeListener):
            if hasattr( listener, "exitAlternative" ):
                listener.exitAlternative(self)

        def accept(self, visitor:ParseTreeVisitor):
            if hasattr( visitor, "visitAlternative" ):
                return visitor.visitAlternative(self)
            else:
                return visitor.visitChildren(self)




    def alternative(self):

        localctx = grammarizerParser.AlternativeContext(self, self._ctx, self.state)
        self.enterRule(localctx, 6, self.RULE_alternative)
        self._la = 0 # Token type
        try:
            self.enterOuterAlt(localctx, 1)
            self.state = 36 
            self._errHandler.sync(self)
            _la = self._input.LA(1)
            while True:
                self.state = 35
                self.unit()
                self.state = 38 
                self._errHandler.sync(self)
                _la = self._input.LA(1)
                if not ((((_la) & ~0x3f) == 0 and ((1 << _la) & ((1 << grammarizerParser.T__3) | (1 << grammarizerParser.LEXICAL_RULE_NAME) | (1 << grammarizerParser.GRAMMAR_RULE_NAME) | (1 << grammarizerParser.TK_LITERAL))) != 0)):
                    break

        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.exitRule()
        return localctx


    class UnitContext(ParserRuleContext):
        __slots__ = 'parser'

        def __init__(self, parser, parent:ParserRuleContext=None, invokingState:int=-1):
            super().__init__(parent, invokingState)
            self.parser = parser

        def grouping(self):
            return self.getTypedRuleContext(grammarizerParser.GroupingContext,0)


        def primitive(self):
            return self.getTypedRuleContext(grammarizerParser.PrimitiveContext,0)


        def MULTIPLICITY_OP(self):
            return self.getToken(grammarizerParser.MULTIPLICITY_OP, 0)

        def getRuleIndex(self):
            return grammarizerParser.RULE_unit

        def enterRule(self, listener:ParseTreeListener):
            if hasattr( listener, "enterUnit" ):
                listener.enterUnit(self)

        def exitRule(self, listener:ParseTreeListener):
            if hasattr( listener, "exitUnit" ):
                listener.exitUnit(self)

        def accept(self, visitor:ParseTreeVisitor):
            if hasattr( visitor, "visitUnit" ):
                return visitor.visitUnit(self)
            else:
                return visitor.visitChildren(self)




    def unit(self):

        localctx = grammarizerParser.UnitContext(self, self._ctx, self.state)
        self.enterRule(localctx, 8, self.RULE_unit)
        self._la = 0 # Token type
        try:
            self.enterOuterAlt(localctx, 1)
            self.state = 42
            self._errHandler.sync(self)
            token = self._input.LA(1)
            if token in [grammarizerParser.T__3]:
                self.state = 40
                self.grouping()
                pass
            elif token in [grammarizerParser.LEXICAL_RULE_NAME, grammarizerParser.GRAMMAR_RULE_NAME, grammarizerParser.TK_LITERAL]:
                self.state = 41
                self.primitive()
                pass
            else:
                raise NoViableAltException(self)

            self.state = 45
            self._errHandler.sync(self)
            _la = self._input.LA(1)
            if _la==grammarizerParser.MULTIPLICITY_OP:
                self.state = 44
                self.match(grammarizerParser.MULTIPLICITY_OP)


        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.exitRule()
        return localctx


    class GroupingContext(ParserRuleContext):
        __slots__ = 'parser'

        def __init__(self, parser, parent:ParserRuleContext=None, invokingState:int=-1):
            super().__init__(parent, invokingState)
            self.parser = parser

        def body(self):
            return self.getTypedRuleContext(grammarizerParser.BodyContext,0)


        def getRuleIndex(self):
            return grammarizerParser.RULE_grouping

        def enterRule(self, listener:ParseTreeListener):
            if hasattr( listener, "enterGrouping" ):
                listener.enterGrouping(self)

        def exitRule(self, listener:ParseTreeListener):
            if hasattr( listener, "exitGrouping" ):
                listener.exitGrouping(self)

        def accept(self, visitor:ParseTreeVisitor):
            if hasattr( visitor, "visitGrouping" ):
                return visitor.visitGrouping(self)
            else:
                return visitor.visitChildren(self)




    def grouping(self):

        localctx = grammarizerParser.GroupingContext(self, self._ctx, self.state)
        self.enterRule(localctx, 10, self.RULE_grouping)
        try:
            self.enterOuterAlt(localctx, 1)
            self.state = 47
            self.match(grammarizerParser.T__3)
            self.state = 48
            self.body()
            self.state = 49
            self.match(grammarizerParser.T__4)
        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.exitRule()
        return localctx


    class PrimitiveContext(ParserRuleContext):
        __slots__ = 'parser'

        def __init__(self, parser, parent:ParserRuleContext=None, invokingState:int=-1):
            super().__init__(parent, invokingState)
            self.parser = parser

        def TK_LITERAL(self):
            return self.getToken(grammarizerParser.TK_LITERAL, 0)

        def GRAMMAR_RULE_NAME(self):
            return self.getToken(grammarizerParser.GRAMMAR_RULE_NAME, 0)

        def LEXICAL_RULE_NAME(self):
            return self.getToken(grammarizerParser.LEXICAL_RULE_NAME, 0)

        def getRuleIndex(self):
            return grammarizerParser.RULE_primitive

        def enterRule(self, listener:ParseTreeListener):
            if hasattr( listener, "enterPrimitive" ):
                listener.enterPrimitive(self)

        def exitRule(self, listener:ParseTreeListener):
            if hasattr( listener, "exitPrimitive" ):
                listener.exitPrimitive(self)

        def accept(self, visitor:ParseTreeVisitor):
            if hasattr( visitor, "visitPrimitive" ):
                return visitor.visitPrimitive(self)
            else:
                return visitor.visitChildren(self)




    def primitive(self):

        localctx = grammarizerParser.PrimitiveContext(self, self._ctx, self.state)
        self.enterRule(localctx, 12, self.RULE_primitive)
        self._la = 0 # Token type
        try:
            self.enterOuterAlt(localctx, 1)
            self.state = 51
            _la = self._input.LA(1)
            if not((((_la) & ~0x3f) == 0 and ((1 << _la) & ((1 << grammarizerParser.LEXICAL_RULE_NAME) | (1 << grammarizerParser.GRAMMAR_RULE_NAME) | (1 << grammarizerParser.TK_LITERAL))) != 0)):
                self._errHandler.recoverInline(self)
            else:
                self._errHandler.reportMatch(self)
                self.consume()
        except RecognitionException as re:
            localctx.exception = re
            self._errHandler.reportError(self, re)
            self._errHandler.recover(self, re)
        finally:
            self.exitRule()
        return localctx





