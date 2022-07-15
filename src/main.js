import antlr4 from 'antlr4';

import EBNFLexer from "../gen/EBNFLexer.js"
import EBNFParser from "../gen/EBNFParser.js"
import Visitor from "./Visitor";

export function transform(input) {
    const chars = new antlr4.InputStream(input);
    const lexer = new EBNFLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new EBNFParser(tokens);
    parser.removeErrorListeners();
    parser.addErrorListener({
        syntaxError: (rcgzr, bdSymbl, line, column, msg, err) => {
            throw { line, column, msg };
        }
    });
    parser.buildParseTrees = true;
    const tree = parser.grammarFile()
    const visitor = new Visitor();
    const grammar_map = visitor.visitGrammarFile(tree);
    console.log(grammar_map);
    let result_list = [];
    for (let [rule_name, nodes] of grammar_map.entries()) {
        for (let node of nodes) {
            for (let rule of node.values()) {
                result_list.push(`${rule_name}: ${rule || 'epsilon'};`)
            }
        }
    }

    return result_list.join('\n');
}