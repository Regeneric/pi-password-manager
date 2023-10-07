import knex from "../config/db.config";
import {Model} from 'objection';

Model.knex(knex);

class Users extends Model {
    static get tableName() {return "users"}
}

export default Users;