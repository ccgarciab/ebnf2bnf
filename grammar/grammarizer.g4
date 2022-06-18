grammar grammarizer;

grammarFile: rule* EOF;
rule: name=GRAMMAR_RULE_NAME ':' body ';';
body: alternative ('|' alternative)*;
alternative: unit+;
unit: (grouping | primitive) MULTIPLICITY_OP?;
grouping: '(' body ')';
primitive: TK_LITERAL | GRAMMAR_RULE_NAME | LEXICAL_RULE_NAME;

LEXICAL_RULE_NAME: [A-Z][A-Za-z_]*;
GRAMMAR_RULE_NAME: [a-z][A-Za-z_]*;
MULTIPLICITY_OP: '*' | '+' | '?';
TK_LITERAL: '\'' .* '\'';
WHITESPACE: [ \t\r\n]+ -> skip;