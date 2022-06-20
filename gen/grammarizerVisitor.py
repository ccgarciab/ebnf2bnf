# Generated from C:/Users/z004hkjh/Documents/Code/grammarizer/grammar\grammarizer.g4 by ANTLR 4.10.1
from antlr4 import *
if __name__ is not None and "." in __name__:
    from .grammarizerParser import grammarizerParser
else:
    from grammarizerParser import grammarizerParser

# This class defines a complete generic visitor for a parse tree produced by grammarizerParser.

class grammarizerVisitor(ParseTreeVisitor):

    # Visit a parse tree produced by grammarizerParser#grammarFile.
    def visitGrammarFile(self, ctx:grammarizerParser.GrammarFileContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by grammarizerParser#rule.
    def visitRule(self, ctx:grammarizerParser.RuleContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by grammarizerParser#body.
    def visitBody(self, ctx:grammarizerParser.BodyContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by grammarizerParser#alternative.
    def visitAlternative(self, ctx:grammarizerParser.AlternativeContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by grammarizerParser#unit.
    def visitUnit(self, ctx:grammarizerParser.UnitContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by grammarizerParser#grouping.
    def visitGrouping(self, ctx:grammarizerParser.GroupingContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by grammarizerParser#primitive.
    def visitPrimitive(self, ctx:grammarizerParser.PrimitiveContext):
        return self.visitChildren(ctx)



del grammarizerParser