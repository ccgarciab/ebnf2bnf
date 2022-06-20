import logging

from antlr4 import CommonTokenStream, InputStream
from flask import Flask, request

from gen.grammarizerLexer import grammarizerLexer
from gen.grammarizerParser import grammarizerParser
from src.Visitor import Visitor

api = Flask(__name__)


@api.route('/', methods=['POST'])
def endpoint():
    input_str = request.get_json()
    logging.debug(f"input: {input_str}")
    lexer = grammarizerLexer(InputStream(input_str))
    stream = CommonTokenStream(lexer)
    parser = grammarizerParser(stream)
    tree = parser.grammarFile()

    visitor = Visitor()
    grammar_map = visitor.visitGrammarFile(tree)

    result_list = []
    for rule_name, nodes in grammar_map.items():
        for node in nodes:
            for rule in node.values():
                result_list.append(f"{rule_name}: {rule or 'epsilon'};")

    return '\n'.join(result_list)


if __name__ == '__main__':
    api.run()
