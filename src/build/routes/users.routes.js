"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_controller_1 = __importDefault(require("../controllers/users.controller"));
const api_middlewares_1 = __importDefault(require("../middlewares/api.middlewares"));
const errors_middlewares_1 = __importDefault(require("../middlewares/errors.middlewares"));
class UsersRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.usersController = new users_controller_1.default();
        this.apiMiddlewares = new api_middlewares_1.default();
        this.errMiddlewares = new errors_middlewares_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(`/`, this.apiMiddlewares.redirectOnWrongKey, this.usersController.findAll);
        this.router.get(`/:id`, this.apiMiddlewares.redirectOnWrongKey, this.usersController.findOne);
        this.router.post(`/add`, this.apiMiddlewares.redirectOnWrongKey, this.usersController.create);
        this.router.put(`/update/:id`, this.apiMiddlewares.redirectOnWrongKey, this.usersController.update);
        this.router.delete(`/remove/:id`, this.apiMiddlewares.redirectOnWrongKey, this.usersController.remove);
    }
}
exports.default = new UsersRoutes().router;
