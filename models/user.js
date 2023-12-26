const baseModel = require("./base");
class User extends baseModel{
    constructor(props = 'users'){
        super(props);
    }
 }


module.exports=User;