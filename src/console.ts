import { ExecuteEngine } from "./execute.ts";
import { expressionToOperators } from './parse.ts';

const engine = new ExecuteEngine();

while (true) {
    const expression = prompt('>');

    if (expression == 'q') {
        console.log('Thank you for using RPN Calculator');
        break;
    }

    const operations = expressionToOperators(expression);

    const state = engine.executeOperations(operations);

    if ('success' in state) {
        console.log(engine.lastValue().toFixed(1));
    }
    else if ('error' in state) {
        console.error(state.error);
    }
}