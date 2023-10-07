"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seed = void 0;
function seed(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        yield knex('credentials')
            .del()
            .then(() => {
            return knex('credentials').insert([
                {
                    id: 1,
                    name: `Facebook`,
                    siteUrl: `https://facebook.com`,
                    userName: `a@a.com`,
                    password: `test`,
                    userNameInput: `email`,
                    passwordInput: `password`,
                    slug: `httpsfacebookcom`
                },
                {
                    id: 2,
                    name: `GitHub`,
                    siteUrl: `https://github.com`,
                    userName: `a@a.com`,
                    password: `test`,
                    userNameInput: `email`,
                    passwordInput: `password`,
                    slug: `httpsgithubcom`
                },
                {
                    id: 3,
                    name: `Twitter`,
                    siteUrl: `https://twitter.com`,
                    userName: `a@a.com`,
                    password: `test`,
                    userNameInput: `email`,
                    passwordInput: `password`,
                    slug: `httpstwittercom`
                },
            ]);
        });
    });
}
exports.seed = seed;
;
