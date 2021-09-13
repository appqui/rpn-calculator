export type OperationFailedState = { error: string; };
export type OperationSuccessState = undefined;

export type OperationState =
    | OperationFailedState
    | OperationSuccessState;

export const possibleOperations = ['+', '-', '*', '/'] as const; 

export type Expression =
    | Number
    | Operation

export type Operation = typeof possibleOperations[number]