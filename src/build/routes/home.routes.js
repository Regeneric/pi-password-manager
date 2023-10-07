"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const home_controller_1 = __importDefault(require("../controllers/home.controller"));
const api_middlewares_1 = __importDefault(require("../middlewares/api.middlewares"));
class HomeRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.homeController = new home_controller_1.default();
        this.apiMiddlewares = new api_middlewares_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(`/`, this.apiMiddlewares.redirectOnWrongKey, this.homeController.showInfo);
        this.router.put(`/`, this.apiMiddlewares.redirectOnWrongKey, this.homeController.showInfo);
        this.router.post(`/`, this.apiMiddlewares.redirectOnWrongKey, this.homeController.showInfo);
        this.router.delete(`/`, this.apiMiddlewares.redirectOnWrongKey, this.homeController.showInfo);
    }
}
exports.default = new HomeRoutes().router;
