import {Application} from "express";

import homeRoutes from "./home.routes";
import usersRoutes from "./users.routes";
import credentialsRoutes from "./credentials.routes";


export default class Routes {
    constructor(app: Application) {
        app.use("/api", homeRoutes);
        app.use("/api/users", usersRoutes);
        app.use("/api/credentials", credentialsRoutes);
    }
}