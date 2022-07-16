import { flatten, product } from "./Itertools.js";

class BranchingNode {
    // Represents a series of sub-rules that are mutually exlusive alternatives
    // example x: a | b | c; this.alternatives -> [Node(a), Node(b), Node(c)]
    constructor(alternatives = []) {
        this.alternatives = alternatives;
    }

    values() {
        // Flattening inner iterators, as branching is composable
        return flatten(this.alternatives.map((alt) => alt.values()));
    }
}

class SequenceNode {
    // Represents a series of sub-rules that are meant to be concatenated
    // example x: a b c; this.sub_rules -> [Node(a), Node(b), Node(c)]
    constructor(sub_rules = []) {
        this.sub_rules = sub_rules;
    }

    values() {
        let result_list = [];
        let cartesian_product = product(this.sub_rules.map((sr) => sr.values()));
        // Cartesian product to find the many ways that branches can be combinated
        for (let combination of cartesian_product) {
            // Each combination is concatenated, as they are a single sub-rule
            // without interal branching
            let res = [...combination].filter((s) => s !== '').join(' ');
            result_list.push(res);
        }
        return result_list;
    }
}

class ValueNode {
    // Represents non-decomposable sub-rules such as a rule identifier
    // or a string literal
    constructor(value) {
        this.value = value;
    }

    values() {
        return [this.value];
    }
}

export { BranchingNode, SequenceNode, ValueNode };