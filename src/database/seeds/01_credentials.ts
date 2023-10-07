import {Knex} from "knex"

export async function seed(knex: Knex): Promise<any> {
    await knex('credentials')
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
        ])
    })
};