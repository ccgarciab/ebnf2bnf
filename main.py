from antlr4 import CommonTokenStream, FileStream

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
    for rule_name, nodes in grammar_map.items():
        for node in nodes:
            for rule in node.values():
                print(f"{rule_name}: {rule or 'epsilon'};")


if __name__ == '__main__':
    main()
