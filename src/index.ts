import express, {Express} from "express";
import * as https from "https";
import fs from "fs";

import Server from "./server";

const domain: String = process.env.address || `localhost`;
const privateKey:  String = fs.readFileSync(`${process.env.SSL}/${domain}.key`, `utf8`);
const certificate: String = fs.readFileSync(`${process.env.SSL}/${domain}.crt`, `utf8`);

const credentials: Object = {
    key:  privateKey,
    cert: certificate,
};

const app: Express = express();
const server: Server = new Server(app)
const httpsServer: https.Server = https.createServer(credentials, app);

httpsServer.listen(server.port, () => {
    console.log(`Server is running on: https://${server.address}:${server.port}`);
});