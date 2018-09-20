var User   = require('../proxy').User;
var uuid   = require('node-uuid');              //uuid
var crypto = require('crypto');                 //加密模块

class register{
    register(name,password){
        var user= new User();
        var md5 = crypto.createHash(md5);
        user.name = name;
        user.password = 
    }
}

exports = module.exports = register;