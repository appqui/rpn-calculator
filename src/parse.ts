import type { Operation, Expression } from '../src/types.d.ts'

const possibleOperations = ['+', '-', '*', '/'] as const;

export function expressionToOperators(expression: string | null): Expression[] {
    if (expression == null)
        return [];

    return expression
        .split(' ')
        .filter(x => x !== '')
        .filter(x => possibleOperations.indexOf(x as Operation) != -1 || !Number.isNaN(Number.parseFloat(x)))
        .map(x => possibleOperations.indexOf(x as Operation) != -1 ? x as Operation : Number.parseFloat(x))
}