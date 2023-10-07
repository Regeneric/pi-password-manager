import session from "express-session";
import cookieParser from "cookie-parser";
import cors, {CorsOptions} from "cors";
import express, {Application} from "express";

import Routes from "./routes/routes";
import {serverConfig} from "./config/server.config";


export default class Server {
    public address: string | undefined;
    public port:    string | number;

    constructor(app: Application) {
        this.config(app);
        this.address = serverConfig.address;
        this.port    = serverConfig.port;
    
        new Routes(app);
    }

    private config(app: Application): void {
        app.use(cors());
        app.use(express.json());
        app.use(cookieParser());
        app.use(express.urlencoded({extended: true, limit: "4mb"}));
        
        app.use(session({
            secret: serverConfig.sessionSecret,
            resave: false,
            saveUninitialized: false,
            unset: 'destroy',
            cookie: {
                maxAge: 60*30*100,
                secure: true
            }
        }));
    }
}