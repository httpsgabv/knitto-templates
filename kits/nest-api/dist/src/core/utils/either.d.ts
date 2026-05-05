export declare class Failure<F, S> {
    readonly value: F;
    constructor(value: F);
    isSuccess(): this is Success<F, S>;
    isFailure(): this is Failure<F, S>;
}
export declare class Success<F, S> {
    readonly value: S;
    constructor(value: S);
    isSuccess(): this is Success<F, S>;
    isFailure(): this is Failure<F, S>;
}
export type Either<F, S> = Failure<F, S> | Success<F, S>;
export declare const failure: <F, S>(reason: F) => Either<F, S>;
export declare const success: <F, S>(result: S) => Either<F, S>;
