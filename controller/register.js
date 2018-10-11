var User   = require('../proxy').User;
var uuid   = require('node-uuid');              //uuid
var crypto = require('crypto');                 //加密模块
var bcrypt = require('bcryptjs');               //盐式加密

exports.addUser=function(req,res,next){
    let md5    = crypto.createHash('md5');
    let name   = req.body.name;
    let password   = md5.update(req.body.password).digest("base64");
    let sex        = '男';
    let createTime = new Date();
    let uuid       = uuid.v4();

    User.addUser(name,password,sex,createTime,uuid,function(err){
        if(err){
            return next(err);
        }
        res.render('',{title:'注册成功'});
    })
}

//盐式加密方法待补充，暂不写