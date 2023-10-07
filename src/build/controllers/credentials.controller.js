"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const crypto = __importStar(require("crypto-js"));
const credentials_models_1 = __importDefault(require("../models/credentials.models"));
class UsersController {
    findOne(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const credential = yield credentials_models_1.default.query().where(`slug`, req.params.slug);
            if (!credential)
                return next();
            else {
                credential.map((c) => {
                    const encryptKey = req.headers["encryption-key"];
                    const passwd = crypto.AES.decrypt(c.password, encryptKey).toString(crypto.enc.Utf8);
                    credential[0].password = passwd;
                    return res.status(200).send(credential);
                });
            }
        });
    }
    findAll(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const credentials = yield credentials_models_1.default.query();
            res.status(200).send(credentials);
        });
    }
    create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, siteUrl, userName, passwd, userNameInput, passwordInput, slug } = req.body;
            if (req.headers["encryption-key"] == undefined)
                return res.status(403).send("Missing encryption key");
            const encryptKey = req.headers["encryption-key"];
            const password = crypto.AES.encrypt(passwd, encryptKey).toString();
            try {
                const credential = yield credentials_models_1.default.query()
                    .insert({
                    name, siteUrl,
                    userName, password,
                    userNameInput,
                    passwordInput,
                    slug
                });
                return res.status(201).send(credential);
            }
            catch (_a) {
                return res.status(500).send();
            }
        });
    }
    update(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, siteUrl, userName, passwd, userNameInput, passwordInput, slug } = req.body;
            const encryptKey = req.headers["encryption-key"];
            const password = crypto.AES.encrypt(passwd, encryptKey).toString();
            const credential = yield credentials_models_1.default.query()
                .where("slug", req.params.slug)
                .patch({
                name, siteUrl,
                userName, password,
                userNameInput,
                passwordInput,
                slug
            });
            if (credential)
                return res.status(200).send();
            else
                res.status(500).send();
        });
    }
    remove(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const credential = yield credentials_models_1.default.query().where("slug", req.params.slug).delete();
            if (!credential)
                res.status(500).send();
            else
                return res.status(200).send();
        });
    }
}
exports.default = UsersController;
