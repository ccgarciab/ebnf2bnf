from antlr4 import *
from gen.grammarizerLexer import grammarizerLexer
from gen.grammarizerParser import grammarizerParser
from src.Visitor import Visitor


def main():
    input_file = FileStream("input.txt")
    lexer = grammarizerLexer(input_file)
    stream = CommonTokenStream(lexer)
    parser = grammarizerParser(stream)
    tree = parser.grammarFile()

    visitor = Visitor()
    grammar_map = visitor.visitGrammarFile(tree)


if __name__ == '__main__':
    main()
