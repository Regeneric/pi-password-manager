import {Knex} from "knex"

export async function seed(knex: Knex): Promise<any> {
    await knex('users')
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
        ])
    })
};