"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class ApiMiddlewares {
    redirectOnWrongKey(req, res, next) {
        if (req.headers['x-api-key'] !== process.env.API_KEY) {
            res.status(403).redirect(301, "/");
        }
        else
            next();
    }
}
exports.default = ApiMiddlewares;
;
