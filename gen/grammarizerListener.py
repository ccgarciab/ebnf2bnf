# Generated from C:/Users/z004hkjh/Documents/Code/grammarizer/grammar\grammarizer.g4 by ANTLR 4.10.1
from antlr4 import *
if __name__ is not None and "." in __name__:
    from .grammarizerParser import grammarizerParser
else:
    from grammarizerParser import grammarizerParser

# This class defines a complete listener for a parse tree produced by grammarizerParser.
class grammarizerListener(ParseTreeListener):

    # Enter a parse tree produced by grammarizerParser#grammarFile.
    def enterGrammarFile(self, ctx:grammarizerParser.GrammarFileContext):
        pass

    # Exit a parse tree produced by grammarizerParser#grammarFile.
    def exitGrammarFile(self, ctx:grammarizerParser.GrammarFileContext):
        pass


    # Enter a parse tree produced by grammarizerParser#rule.
    def enterRule(self, ctx:grammarizerParser.RuleContext):
        pass

    # Exit a parse tree produced by grammarizerParser#rule.
    def exitRule(self, ctx:grammarizerParser.RuleContext):
        pass


    # Enter a parse tree produced by grammarizerParser#body.
    def enterBody(self, ctx:grammarizerParser.BodyContext):
        pass

    # Exit a parse tree produced by grammarizerParser#body.
    def exitBody(self, ctx:grammarizerParser.BodyContext):
        pass


    # Enter a parse tree produced by grammarizerParser#alternative.
    def enterAlternative(self, ctx:grammarizerParser.AlternativeContext):
        pass

    # Exit a parse tree produced by grammarizerParser#alternative.
    def exitAlternative(self, ctx:grammarizerParser.AlternativeContext):
        pass


    # Enter a parse tree produced by grammarizerParser#unit.
    def enterUnit(self, ctx:grammarizerParser.UnitContext):
        pass

    # Exit a parse tree produced by grammarizerParser#unit.
    def exitUnit(self, ctx:grammarizerParser.UnitContext):
        pass


    # Enter a parse tree produced by grammarizerParser#grouping.
    def enterGrouping(self, ctx:grammarizerParser.GroupingContext):
        pass

    # Exit a parse tree produced by grammarizerParser#grouping.
    def exitGrouping(self, ctx:grammarizerParser.GroupingContext):
        pass


    # Enter a parse tree produced by grammarizerParser#primitive.
    def enterPrimitive(self, ctx:grammarizerParser.PrimitiveContext):
        pass

    # Exit a parse tree produced by grammarizerParser#primitive.
    def exitPrimitive(self, ctx:grammarizerParser.PrimitiveContext):
        pass



del grammarizerParser