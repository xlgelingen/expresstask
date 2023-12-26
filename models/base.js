const config = require('../knexfile')
const knex = require("knex")(config);
class Base {

    constructor(props){
        this.table = props;
    }
    all(){
        return knex(this.table).select();
    }

    add(params){
        return knex(this.table).insert(params);
    }

    update(id,params){
        return knex(this.table).where("id",id).update(params);
    }

    delete(id){
        return knex(this.table).where({id}).del()
    }

    select(params){
        return knex(this.table).where(params).select();
    }
}
module.exports=Base;