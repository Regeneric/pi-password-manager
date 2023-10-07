"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_session_1 = __importDefault(require("express-session"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes/routes"));
const server_config_1 = require("./config/server.config");
class Server {
    constructor(app) {
        this.config(app);
        this.address = server_config_1.serverConfig.address;
        this.port = server_config_1.serverConfig.port;
        new routes_1.default(app);
    }
    config(app) {
        app.use((0, cors_1.default)());
        app.use(express_1.default.json());
        app.use((0, cookie_parser_1.default)());
        app.use(express_1.default.urlencoded({ extended: true, limit: "4mb" }));
        app.use((0, express_session_1.default)({
            secret: server_config_1.serverConfig.sessionSecret,
            resave: false,
            saveUninitialized: false,
            unset: 'destroy',
            cookie: {
                maxAge: 60 * 30 * 100,
                secure: true
            }
        }));
    }
}
exports.default = Server;
