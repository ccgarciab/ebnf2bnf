import antlr4 from 'antlr4';

import EBNFLexer from "../antlr_generated/EBNFLexer.js"
import EBNFParser from "../antlr_generated/EBNFParser.js"

export function transform(input) {
    const chars = new antlr4.InputStream(input);
    const lexer = new EBNFLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new EBNFParser(tokens);
}