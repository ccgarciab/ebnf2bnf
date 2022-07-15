import { flatten, product } from "./Itertools.js";

class BranchingNode {

    constructor(alternatives = []) {
        this.alternatives = alternatives;
    }

    values() {
        return flatten(this.alternatives.map((alt) => alt.values()));
    }
}

class SequenceNode {

    constructor(sub_rules = []) {
        this.sub_rules = sub_rules;
    }

    values() {
        let result_list = [];
        let cartesian_product = product(this.sub_rules.map((sr) => sr.values()));
        for (let combination of cartesian_product) {
            let res = [...combination].filter((s) => s !== '').join(' ');
            result_list.push(res);
        }
        return result_list;
    }
}

class ValueNode {

    constructor(value) {
        this.value = value;
    }

    values() {
        return [this.value];
    }
}

export { BranchingNode, SequenceNode, ValueNode };