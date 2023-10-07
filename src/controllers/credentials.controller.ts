import {NextFunction, Request, Response} from 'express';
import dotenv from 'dotenv'; dotenv.config();
import * as crypto from 'crypto-js'

import Credentials from '../models/credentials.models';


export default class UsersController {
    async findOne(req: Request, res: Response, next: NextFunction) {
        const credential: Credentials[] | any = await Credentials.query().where(`slug`, req.params.slug);

        if(!credential) return next();
        else {
            credential.map((c: {password: string | crypto.lib.CipherParams}) => {
                const encryptKey: string | undefined = req.headers["encryption-key"] as string;
                const passwd: string = crypto.AES.decrypt(c.password, encryptKey).toString(crypto.enc.Utf8);

                credential[0].password = passwd;
                return res.status(200).send(credential);
            });
        }
    }
    async findAll(req: Request, res: Response, next: NextFunction) {
        const credentials: Credentials[] = await Credentials.query();
        res.status(200).send(credentials);
    } 
    async create(req: Request, res: Response, next: NextFunction) {
        const {
            name, siteUrl,
            userName, passwd,
            userNameInput,
            passwordInput,
            slug
        } = req.body;
        
        if(req.headers["encryption-key"] == undefined) return res.status(403).send("Missing encryption key");

        const encryptKey: string | undefined = req.headers["encryption-key"] as string;
        const password: string = crypto.AES.encrypt(passwd, encryptKey).toString();

        try {
            const credential: Credentials = await Credentials.query()
            .insert({
                name, siteUrl, 
                userName, password, 
                userNameInput,
                passwordInput,
                slug
            }); 

            return res.status(201).send(credential);
        } catch {return res.status(500).send();}

    }
    async update(req: Request, res: Response, next: NextFunction) {
        const {
            name, siteUrl,
            userName, passwd,
            userNameInput,
            passwordInput,
            slug
        } = req.body;

        const encryptKey: string | undefined = req.headers["encryption-key"] as string;
        const password: string = crypto.AES.encrypt(passwd, encryptKey).toString();

        const credential = await Credentials.query()
            .where("slug", req.params.slug)
            .patch({
                name, siteUrl, 
                userName, password, 
                userNameInput,
                passwordInput,
                slug
            });

        if(credential) return res.status(200).send();
        else res.status(500).send();
    }
    async remove(req: Request, res: Response, next: NextFunction) {
        const credential = await Credentials.query().where("slug", req.params.slug).delete();
        
        if(!credential) res.status(500).send();
        else return res.status(200).send();
    }
}