import knex from "../config/db.config";
import {Model} from 'objection';

Model.knex(knex);

class Credentials extends Model {
    static get tableName() {return "credentials"}
}

export default Credentials;