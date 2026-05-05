import { type NestMiddleware } from '@nestjs/common';
import type { NextFunction, Request, Response } from 'express';
export interface RequestWithId extends Request {
    requestId: string;
}
export declare class RequestIdMiddleware implements NestMiddleware {
    use(request: Request, response: Response, next: NextFunction): void;
}
