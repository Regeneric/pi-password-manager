import {Knex} from "knex";

export async function up(knex: Knex): Promise<any> {
    return knex.schema.createTable('credentials', (table: Knex.TableBuilder) => {
        table.increments('id').primary();
        
        table.string('name').unique().notNullable();
        table.string('siteUrl').unique().notNullable();
        table.string('userName').notNullable();
        table.string('password').notNullable();
        table.string('userNameInput').notNullable();
        table.string('passwordInput').notNullable();
        table.string('slug').unique().notNullable();
        
        table.timestamps(false, true);
    })
};

export async function down(knex: Knex): Promise<any> {
    return knex.schema.dropTableIfExists('credentials')
};