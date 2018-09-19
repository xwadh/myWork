var epxress = require('express');
var router = epxress.Router();
var crypto = require('crypto');                 //加密模块
var User = require('../proxy').User;


//login路由
exports.index = function(req,res,next){
    var user_name = req.params.name;
    var user_pass = req.params.password;
    User.findUserByName(user_name,function(err,user){
        if(err){
            return next(err);
        }
        if(!user){
            res.render('用户不存在！');
            return;
        }
        if(user.password!==user_pass){
            res.render('register.ejs',{title:'登陆成功',name:user_name,password:user_pass});
        }
    })
}