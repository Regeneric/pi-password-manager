import {Router} from "express";
import UsersController from "../controllers/users.controller";
import ApiMiddlewares from "../middlewares/api.middlewares"
import ErrorsMiddlewares from "../middlewares/errors.middlewares";


class UsersRoutes {
    router: Router = Router();
    usersController: UsersController;
    apiMiddlewares: ApiMiddlewares;
    errMiddlewares: ErrorsMiddlewares;

    constructor() {
        this.usersController = new UsersController();
        this.apiMiddlewares = new ApiMiddlewares();
        this.errMiddlewares = new ErrorsMiddlewares();
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.get(`/`    , this.apiMiddlewares.redirectOnWrongKey, this.usersController.findAll);
        this.router.get(`/:id` , this.apiMiddlewares.redirectOnWrongKey, this.usersController.findOne);
        this.router.post(`/add`, this.apiMiddlewares.redirectOnWrongKey, this.usersController.create);
        this.router.put(`/update/:id`   , this.apiMiddlewares.redirectOnWrongKey, this.usersController.update);
        this.router.delete(`/remove/:id`, this.apiMiddlewares.redirectOnWrongKey, this.usersController.remove);
    }
} export default new UsersRoutes().router;