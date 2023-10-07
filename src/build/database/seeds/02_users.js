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
        yield knex('users')
            .del()
            .then(() => {
            return knex('users').insert([
                {
                    id: 1,
                    userName: `aaa`,
                    email: `aaa@a.com`,
                    hash: `123`,
                    salt: `321`,
                    isLogged: false,
                },
                {
                    id: 2,
                    userName: `bbb`,
                    email: `bbb@b.com`,
                    hash: `456`,
                    salt: `654`,
                    isLogged: false,
                },
                {
                    id: 3,
                    userName: `ccc`,
                    email: `ccc@c.com`,
                    hash: `789`,
                    salt: `987`,
                    isLogged: false,
                },
            ]);
        });
    });
}
exports.seed = seed;
;
