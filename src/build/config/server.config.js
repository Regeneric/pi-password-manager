"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverConfig = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.serverConfig = {
    env: process.env.NODE_ENV,
    port: process.env.SERVER_PORT || 8000,
    address: process.env.SERVER_ADDRESS || `localhost`,
    sessionSecret: process.env.SESSION_SECRET || `e894cb8398073d09909e4a6e3595f9856e2566b4af9a471542fb11eca415f596`,
};
