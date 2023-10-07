import {NextFunction, Request, Response} from 'express';
import dotenv from 'dotenv'; dotenv.config();
import bcrypt from 'bcrypt';

import Users from '../models/users.models'


export default class UsersController {
    async findOne(req: Request, res: Response, next: NextFunction) {
        const user: Users | undefined = await Users.query().findById(req.params.id);

        if(!user) return next();
        else return res.status(200).send(user);
    }
    async findAll(req: Request, res: Response, next: NextFunction) {
        const users: Users[] = await Users.query();
        res.status(200).send(users);
    } 
    async create(req: Request, res: Response, next: NextFunction) {
        const {
            userName, email,
            password, isLogged,
            // stores
        } = req.body;
        
        const salt: string = bcrypt.genSaltSync(10);
        const hash: string = bcrypt.hashSync(password, salt);

        const user: Users = await Users.query()
            .insert({
                userName, email, 
                hash, salt, 
                isLogged, 
                // stores
            });

        return res.status(201).send(user);
    }
    async update(req: Request, res: Response, next: NextFunction) {
        const {
            userName, email,
            password, isLogged,
            stores
        } = req.body;

        const salt: string = bcrypt.genSaltSync(10);
        const hash: string = bcrypt.hashSync(password, salt);

        const user = await Users.query()
            .findById(req.params.id)
            .patch({
                userName, email, 
                hash, salt, 
                isLogged, stores
            });

        if(user) return res.status(200).send();
        else res.status(500).send();
    }
    async remove(req: Request, res: Response, next: NextFunction) {
        const user = await Users.query().deleteById(req.params.id);
        
        if(!user) res.status(500).send();
        else return res.status(200).send();
    }
}