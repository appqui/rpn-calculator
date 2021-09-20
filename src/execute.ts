import type { Expression, Operation } from './types.d.ts'

export class ExecuteEngine {
    private stack: number[] = [];
    private successState: OperationSuccessState = { success: true }

    lastValue () {
        if (!this.stack.length) return 0;
    
        return this.stack[this.stack.length - 1];
    }    
    
    executeOperations(operations: Expression[]): OperationState {
        for (var operation of operations) {
            
            if (typeof operation == 'number')
                this.stack.push(operation);
    
            if (typeof operation == 'string') {
                var state = this.executeOperation(operation);
    
                if ('success' in state)
                    continue;
    
                if ('error' in state)
                    return state;
            }
        }

        return this.successState;
    }

    private executeOperation(operation: Operation): OperationState {
        if (this.stack.length < 2)
            return { error: 'To execute operation enter atleast 2 values' };
    
        const value1 = this.stack[this.stack.length - 1];
        const value2 = this.stack[this.stack.length - 2];
    
        const newValue = this.calculate(value1, value2, operation);
        
        if (newValue === undefined)
            return { error: 'Cannot calculate expression' };
        
        if (!Number.isFinite(newValue))
            return { error: 'Divide by zero' }

        if (Number.isNaN(newValue))
            return { error: 'Unknown value' }

        this.stack.pop();
        this.stack.pop();
        this.stack.push(newValue);

        return this.successState;
    }
    
    private calculate(value1: number, value2: number, operation: Operation) {
        switch (operation) {
            case '+': return value2 + value1;
            case '-': return value2 - value1;
            case '*': return value2 * value1;
            case '/': return value2 / value1;
        }
    }
}