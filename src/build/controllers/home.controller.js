"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class HomeController {
    showInfo(req, res) {
        if (req.headers['x-api-key'] !== process.env.API_KEY)
            return res.status(403).send(`API key invalid`);
        else
            return res.status(404).send(); // Return 404 to not encourage looking for API path
    }
}
exports.default = HomeController;
