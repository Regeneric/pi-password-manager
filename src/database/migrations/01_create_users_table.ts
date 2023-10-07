import {Knex} from "knex";

export async function up(knex: Knex): Promise<any> {
    return knex.schema.createTable('users', (table: Knex.TableBuilder) => {
        table.increments('id').primary();
        
        table.string('userName').unique().notNullable();
        table.string('email').unique().notNullable();
        table.string('hash').notNullable();
        table.string('salt').notNullable();
        table.boolean('isLogged').notNullable();
        // table.string('stores').nullable();
        
        table.timestamps(false, true);
    })
};

export async function down(knex: Knex): Promise<any> {
    return knex.schema.dropTableIfExists('users')
};