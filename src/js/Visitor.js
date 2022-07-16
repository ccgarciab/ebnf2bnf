import { range } from "./Itertools.js";

import DefaultMap from "./DefaultMap.js";
import EBNFVisitor from "../antlr_generated/EBNFVisitor.js";
import { BranchingNode, SequenceNode, ValueNode } from "./Node.js";


export default class Visitor extends EBNFVisitor {

    constructor() {
        super();
        //map that creates value at first access (arrays in this case)
        this.rules_map = new DefaultMap(() => []);
        // counter provides unique ids for new auxiliary rules
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
        // The branch operator '|' has higher precedence
        let alternatives = ctx.alternative().map((c) => this.visitAlternative(c));
        return new BranchingNode(alternatives);
    }

    visitAlternative(ctx) {
        // Inside the alternatives of a branch, operators *, ?, + are handled
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
            // ? is an alternative between the sub-rule and the empty string
            let alternatives = [multiplied_node, new ValueNode('')];
            return new BranchingNode(alternatives);
        }

        // The following lines create and register an auxiliary rule that
        // represents sub-rule+ (one or more)
        let aux_rule_name = `$aux_rule${this.counter.next().value}`;
        let aux_rule_node = new ValueNode(aux_rule_name);
        let aux_rule_alternative = new SequenceNode([multiplied_node, aux_rule_node]);
        let aux_rule_tree = new BranchingNode([multiplied_node, aux_rule_alternative]);
        this.rules_map.get(aux_rule_name).push(aux_rule_tree);
        if (multiplier === '*') {
            // * is represented as an alternative between sub-rule+ or empty string
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
