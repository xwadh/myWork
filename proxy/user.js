var models = require('../model/index');
var User = models.User;
var uuid = require('node-uuid');

//根据用户名，密码登陆
exports.findUserByName = function(name,password,callback){
    if(name === null || password === null){
        return callback(null,[]);
    }
    User.findOne({name:name,password:password},callback);
};

//创建新用户
exports.addUser = function(name,password,sex,date,callback){
    // if()
    User.create({name,password,sex,date},callback);
}

