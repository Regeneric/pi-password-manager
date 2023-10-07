import {Request, Response, NextFunction} from 'express';
import dotenv from 'dotenv'; dotenv.config();


export default class ErrorsMiddlewares {
    notFound(req: Request, res: Response, next: NextFunction) {
        const err = new Error("404 page not found");
        next(err);
    }
    catchAsync(fn: Function) {
        return (req: Request, res: Response, next: NextFunction) => {
            fn(req, res, next).catch(function(err: Error) {return next(err)});
        };
    }
};