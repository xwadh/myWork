var models = require('../model/index');
var User = models.User;
var uuid = require('node-uuid');

//根据用户名，密码登陆
exports.findUserByName = function(name,password,callback){
    User.findOne({name:name,password:password},callback);
};

//创建新用户
exports.addUser = function(name,password,sex,date,callback){
    User.create({name,password,sex,date},callback);
}

