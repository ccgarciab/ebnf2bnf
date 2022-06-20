from dataclasses import dataclass, field
from itertools import chain, product
from typing import Iterable, List


class Node:

    def values(self) -> Iterable[str]:
        raise NotImplemented


@dataclass
class BranchingNode (Node):
    alternatives: List[Node] = field(default_factory=list)

    def values(self) -> Iterable[str]:
        return chain.from_iterable(n.values() for n in self.alternatives)


@dataclass
class SequenceNode (Node):
    sub_rules: List[Node] = field(default_factory=list)

    def values(self) -> Iterable[str]:
        all_values = [n.values() for n in self.sub_rules]
        for values_tuple in product(*all_values):
            yield ' '.join(s for s in values_tuple if s)


@dataclass
class ValueNode (Node):
    value: str

    def values(self) -> Iterable[str]:
        return [self.value]
