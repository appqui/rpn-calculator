import { executeOperations, stackLastValue } from './execute.ts';
import { expressionToOperators } from './parse.ts';



while (true) {
    const expression = prompt('> ');

    if (expression == 'quit()') {
        console.log('Thank you for using RPN Calculator');
        break;
    }

    const operations = expressionToOperators(expression);

    const state = executeOperations(operations);

    if (state === undefined) {
        console.log(stackLastValue());
    } 
    else if ('error' in state) {
        console.error(state.error);
    }
}