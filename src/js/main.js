import antlr4 from 'antlr4';

import EBNFLexer from "../antlr_generated/EBNFLexer.js"
import EBNFParser from "../antlr_generated/EBNFParser.js"
import Visitor from "./Visitor";

export function transform(input) {
    const chars = new antlr4.InputStream(input);
    const lexer = new EBNFLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new EBNFParser(tokens);
    // Ensure that this function throws on parse error
    parser.removeErrorListeners();
    parser.addErrorListener({
        syntaxError: (rcgzr, bdSymbl, line, column, msg, err) => {
            throw { line, column, msg };
        }
    });
    parser.buildParseTrees = true;
    const tree = parser.grammarFile()
    const visitor = new Visitor();
    // grammar_map is a map from rule names to a list of EBNF rule productions
    const grammar_map = visitor.visitGrammarFile(tree);
    let result_list = [];
    for (let [rule_name, nodes] of grammar_map.entries()) {
        // Each EBNF rule production is a node (from ./Node.js)
        for (let node of nodes) {
            // The .values() method compiles the EBNF production into
            // BNF productions represented with strings
            for (let rule of node.values()) {
                // epsilon represents the empty production
                result_list.push(`${rule_name}: ${rule || 'epsilon'};`)
            }
        }
    }

    return result_list.join('\n');
}