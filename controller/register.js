var User   = require('../proxy').User;
var uuid   = require('node-uuid');              //uuid
var crypto = require('crypto');                 //加密模块

class register{
    addUser(req,res){
        var md5    = crypto.createHash(md5);
        var name   = req.body.name;
        password   = md5.update(req,body.password).digest("base64");
        sex        = '男';
        createTime = new Date();
        user.uuid       = uuid.v4();

        User.addUser(name,password,sex,createTime,uuid,function(err){
            if(err){
                return next(err);
            }
            res.render('',{title:'注册成功'});
        })
    }
}

exports = module.exports = register;