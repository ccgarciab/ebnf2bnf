from collections import defaultdict
from itertools import count
from typing import Mapping, List, Tuple

from gen.grammarizerParser import grammarizerParser as Parser
from gen.grammarizerVisitor import grammarizerVisitor

from Node import Node, BranchingNode, SequenceNode, ValueNode


class Visitor(grammarizerVisitor):
    rules_map: Mapping[str, List[Node]] = defaultdict(list)
    counter = count()

    def visitGrammarFile(self, ctx: Parser.GrammarFileContext) -> Mapping[str, List[Node]]:
        raise NotImplemented

    def visitRule(self, ctx: Parser.RuleContext) -> Tuple[str, Node]:
        raise NotImplemented

    def visitBody(self, ctx: Parser.BodyContext) -> BranchingNode:
        raise NotImplemented

    def visitAlternative(self, ctx: Parser.AlternativeContext) -> SequenceNode:
        raise NotImplemented

    def visitUnit(self, ctx: Parser.UnitContext) -> Node:
        raise NotImplemented

    def visitGrouping(self, ctx: Parser.GroupingContext) -> Node:
        raise NotImplemented

    def visitPrimitive(self, ctx: Parser.PrimitiveContext) -> ValueNode:
        raise NotImplemented
