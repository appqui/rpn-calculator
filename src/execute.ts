import { Expression, Operation, OperationState } from "./types.ts";

const stack: number[] = [];

export function stackLastValue() {
    if (!stack.length) return 0;

    return stack[stack.length - 1];
}

export function executeOperations(operations: Expression[]): OperationState {
    for (var operation of operations) {
        
        if (typeof operation == 'number')
            stack.push(operation);

        if (typeof operation == 'string') {
            var state = executeOperation(operation);

            if (state === undefined)
                continue;

            if ('error' in state)
                return state;
        }
    }
}

function executeOperation(operation: Operation): OperationState {
    if (stack.length < 2)
        return { error: 'To execute operation enter atleast 2 values' };

    const value1 = stack.pop()!; // ! to enforce cannot be undefined
    const value2 = stack.pop()!;

    const newValue = calculate(value1, value2, operation);

    stack.push(newValue);
}

function calculate(value1: number, value2: number, operation: Operation) {
    switch (operation) {
        case '+': return value2 + value1;
        case '-': return value2 - value1;
        case '*': return value2 * value1;
        case '/': return value2 / value1;
    }
}