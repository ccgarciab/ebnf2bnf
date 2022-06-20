from collections import defaultdict
from itertools import count
from typing import List, Mapping, Tuple

from gen.grammarizerParser import grammarizerParser as Parser
from gen.grammarizerVisitor import grammarizerVisitor

from .Node import BranchingNode, Node, SequenceNode, ValueNode


class Visitor(grammarizerVisitor):
    rules_map: Mapping[str, List[Node]] = defaultdict(list)
    counter = count()

    def visitGrammarFile(self, ctx: Parser.GrammarFileContext) -> Mapping[str, List[Node]]:
        for rule_ctx in ctx.rule_():
            name, node = self.visitRule(rule_ctx)
            self.rules_map[name].append(node)
        return self.rules_map

    def visitRule(self, ctx: Parser.RuleContext) -> Tuple[str, Node]:
        node = self.visitBody(ctx.body())
        return ctx.GRAMMAR_RULE_NAME().getText(), node

    def visitBody(self, ctx: Parser.BodyContext) -> BranchingNode:
        alternatives = [self.visitAlternative(c) for c in ctx.alternative()]
        return BranchingNode(alternatives=alternatives)

    def visitAlternative(self, ctx: Parser.AlternativeContext) -> SequenceNode:
        sub_rules = [self.visitUnit(c) for c in ctx.unit()]
        return SequenceNode(sub_rules=sub_rules)

    def visitUnit(self, ctx: Parser.UnitContext) -> Node:
        multiplied_node = (self.visitPrimitive(ctx.primitive())
                           if ctx.primitive()
                           else self.visitGrouping(ctx.grouping()))
        if not ctx.MULTIPLICITY_OP():
            return multiplied_node
        multiplier = ctx.MULTIPLICITY_OP().getText()
        if multiplier == '?':
            alternatives = [multiplied_node, ValueNode(value='')]
            return BranchingNode(alternatives=alternatives)
        aux_rule_name = f"$aux_rule{next(self.counter)}"
        aux_rule_node = ValueNode(value=aux_rule_name)
        aux_rule_alternative = SequenceNode(sub_rules=[multiplied_node, aux_rule_node])
        aux_rule_tree = BranchingNode(alternatives=[multiplied_node, aux_rule_alternative])
        self.rules_map[aux_rule_name].append(aux_rule_tree)
        if multiplier == '*':
            return BranchingNode(alternatives=[aux_rule_node, ValueNode(value='')])
        if multiplier == '+':
            return aux_rule_node
        raise ValueError(f"unhandled multiplier {multiplier}")

    def visitGrouping(self, ctx: Parser.GroupingContext) -> Node:
        return self.visitBody(ctx.body())

    def visitPrimitive(self, ctx: Parser.PrimitiveContext) -> ValueNode:
        return ValueNode(value=ctx.getText())
