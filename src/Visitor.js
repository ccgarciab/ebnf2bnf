import { range } from "./Itertools.js";

import DefaultMap from "./DefaultMap.js";
import EBNFVisitor from "../gen/EBNFVisitor.js";
import { BranchingNode, SequenceNode, ValueNode } from "./Node.js";


export default class Visitor extends EBNFVisitor {

    constructor() {
        super();
        this.rules_map = new DefaultMap(() => []);
        this.counter = range();
    }

    visitGrammarFile(ctx) {
        for (let rule_ctx of ctx.rule_()) {
            let [name, node] = this.visitRule(rule_ctx);
            this.rules_map.get(name).push(node);
        }
        return this.rules_map;
    }

    visitRule(ctx) {
        let node = this.visitBody(ctx.body());
        return [ctx.GRAMMAR_RULE_NAME().getText(), node];
    }

    visitBody(ctx) {
        let alternatives = ctx.alternative().map((c) => this.visitAlternative(c));
        return new BranchingNode(alternatives);
    }

    visitAlternative(ctx) {
        let sub_rules = ctx.unit().map((c) => this.visitUnit(c));
        return new SequenceNode(sub_rules);
    }

    visitUnit(ctx) {
        let multiplied_node = ctx.primitive() ?
            this.visitPrimitive(ctx.primitive()) :
            this.visitGrouping(ctx.grouping());

        if (!ctx.MULTIPLICITY_OP()) {
            return multiplied_node;
        }

        let multiplier = ctx.MULTIPLICITY_OP().getText();
        if (multiplier === '?') {
            let alternatives = [multiplied_node, new ValueNode('')];
            return new BranchingNode(alternatives);
        }

        let aux_rule_name = `$aux_rule${this.counter.next().value}`;
        let aux_rule_node = new ValueNode(aux_rule_name);
        let aux_rule_alternative = new SequenceNode([multiplied_node, aux_rule_node]);
        let aux_rule_tree = new BranchingNode([multiplied_node, aux_rule_alternative]);
        this.rules_map.get(aux_rule_name).push(aux_rule_tree);
        if (multiplier === '*') {
            return new BranchingNode([aux_rule_node, new ValueNode('')]);
        }
        if (multiplier === '+') {
            return aux_rule_node;
        }
        throw new Error('Unsupported multiplier');
    }

    visitGrouping(ctx) {
        return this.visitBody(ctx.body());
    }

    visitPrimitive(ctx) {
        return new ValueNode(ctx.getText());
    }
}
