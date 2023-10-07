import {Request, Response, NextFunction} from 'express';
import dotenv from 'dotenv'; dotenv.config();

export default class ApiMiddlewares {
    redirectOnWrongKey(req: Request, res: Response, next: NextFunction): void {
        if(req.headers['x-api-key'] !== process.env.API_KEY) {
            res.status(403).redirect(301, "/");
        } else next();
    }
};