import {Router} from "express";
import CredentialsController from "../controllers/credentials.controller";
import ApiMiddlewares from "../middlewares/api.middlewares";
import ErrorsMiddlewares from "../middlewares/errors.middlewares";


class CredentialsRoutes {
    router: Router = Router();
    credentialsController: CredentialsController;
    apiMiddlewares: ApiMiddlewares;
    errMiddlewares: ErrorsMiddlewares;

    constructor() {
        this.credentialsController = new CredentialsController();
        this.apiMiddlewares = new ApiMiddlewares();
        this.errMiddlewares = new ErrorsMiddlewares();
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.get(`/`    , this.apiMiddlewares.redirectOnWrongKey, this.credentialsController.findAll);
        this.router.get(`/:slug` , this.apiMiddlewares.redirectOnWrongKey, this.credentialsController.findOne);
        this.router.post(`/add`, this.apiMiddlewares.redirectOnWrongKey, this.credentialsController.create);
        this.router.put(`/update/:slug`   , this.apiMiddlewares.redirectOnWrongKey, this.credentialsController.update);
        this.router.delete(`/remove/:slug`, this.apiMiddlewares.redirectOnWrongKey, this.credentialsController.remove);
    }
} export default new CredentialsRoutes().router;