"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class ErrorsMiddlewares {
    notFound(req, res, next) {
        const err = new Error("404 page not found");
        next(err);
    }
    catchAsync(fn) {
        return (req, res, next) => {
            fn(req, res, next).catch(function (err) { return next(err); });
        };
    }
}
exports.default = ErrorsMiddlewares;
;
