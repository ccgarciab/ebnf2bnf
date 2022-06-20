from dataclasses import dataclass, field
from typing import List


class Node:
    pass


@dataclass
class BranchingNode (Node):
    alternatives: List[Node] = field(default_factory=list)


@dataclass
class SequenceNode (Node):
    sub_rules: List[Node] = field(default_factory=list)


@dataclass
class ValueNode (Node):
    value: str
