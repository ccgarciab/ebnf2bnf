// Generated from grammar/EBNF.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';

// This class defines a complete generic visitor for a parse tree produced by EBNFParser.

export default class EBNFVisitor extends antlr4.tree.ParseTreeVisitor {

	// Visit a parse tree produced by EBNFParser#grammarFile.
	visitGrammarFile(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by EBNFParser#rule.
	visitRule(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by EBNFParser#body.
	visitBody(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by EBNFParser#alternative.
	visitAlternative(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by EBNFParser#unit.
	visitUnit(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by EBNFParser#grouping.
	visitGrouping(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by EBNFParser#primitive.
	visitPrimitive(ctx) {
	  return this.visitChildren(ctx);
	}



}