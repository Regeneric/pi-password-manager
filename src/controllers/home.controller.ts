import {Request, Response} from 'express';
import dotenv from 'dotenv'; dotenv.config();


export default class HomeController {
    showInfo(req: Request, res: Response): Response {
        if(req.headers['x-api-key'] !== process.env.API_KEY) return res.status(403).send(`API key invalid`);
        else return res.status(404).send();  // Return 404 to not encourage looking for API path
    }
}