type OperationFailedState = { error: string; };
type OperationSuccessState = { success: boolean; };

type OperationState =
    | OperationFailedState
    | OperationSuccessState;

type Expression =
    | Number
    | Operation

type Operation = '+' | '-' | '*' | '/'