import {Router} from "express";

import HomeController from "../controllers/home.controller";
import ApiMiddlewares from "../middlewares/api.middlewares";


class HomeRoutes {
    router: Router = Router();
    homeController: HomeController;
    apiMiddlewares: ApiMiddlewares;

    constructor() {
        this.homeController = new HomeController();
        this.apiMiddlewares = new ApiMiddlewares();
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.get(`/` , this.apiMiddlewares.redirectOnWrongKey, this.homeController.showInfo);
        this.router.put(`/` , this.apiMiddlewares.redirectOnWrongKey, this.homeController.showInfo);
        this.router.post(`/`, this.apiMiddlewares.redirectOnWrongKey, this.homeController.showInfo);
        this.router.delete(`/`, this.apiMiddlewares.redirectOnWrongKey, this.homeController.showInfo);
    }
}


export default new HomeRoutes().router;