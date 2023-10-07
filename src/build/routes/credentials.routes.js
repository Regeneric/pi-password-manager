"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const credentials_controller_1 = __importDefault(require("../controllers/credentials.controller"));
const api_middlewares_1 = __importDefault(require("../middlewares/api.middlewares"));
const errors_middlewares_1 = __importDefault(require("../middlewares/errors.middlewares"));
class CredentialsRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.credentialsController = new credentials_controller_1.default();
        this.apiMiddlewares = new api_middlewares_1.default();
        this.errMiddlewares = new errors_middlewares_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(`/`, this.apiMiddlewares.redirectOnWrongKey, this.credentialsController.findAll);
        this.router.get(`/:slug`, this.apiMiddlewares.redirectOnWrongKey, this.credentialsController.findOne);
        this.router.post(`/add`, this.apiMiddlewares.redirectOnWrongKey, this.credentialsController.create);
        this.router.put(`/update/:slug`, this.apiMiddlewares.redirectOnWrongKey, this.credentialsController.update);
        this.router.delete(`/remove/:slug`, this.apiMiddlewares.redirectOnWrongKey, this.credentialsController.remove);
    }
}
exports.default = new CredentialsRoutes().router;
