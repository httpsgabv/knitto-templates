"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.success = exports.failure = exports.Success = exports.Failure = void 0;
class Failure {
    value;
    constructor(value) {
        this.value = value;
    }
    isSuccess() {
        return false;
    }
    isFailure() {
        return true;
    }
}
exports.Failure = Failure;
class Success {
    value;
    constructor(value) {
        this.value = value;
    }
    isSuccess() {
        return true;
    }
    isFailure() {
        return false;
    }
}
exports.Success = Success;
const failure = (reason) => {
    return new Failure(reason);
};
exports.failure = failure;
const success = (result) => {
    return new Success(result);
};
exports.success = success;
//# sourceMappingURL=either.js.map