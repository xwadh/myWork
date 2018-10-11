var User = require('../proxy').User;
var crypto = require('crypto');

//login路由
exports.index = function(req,res,next){
    var user_name = req.body.name;
    var user_pass = req.body.password;
    var md5       = crypto.createHash('md5');
    var password  = md5.update(user_pass).digest('base64');
    User.findUserByName(user_name,password,function(err,user){
        if(err){
            return next(err);
        }
        if(!user){
            res.render('index',{title:'用户不存在！'});
        }
        if(user.password != password){
            res.render('index',{title:'密码错误'});
        }
        if(user.password == password){
            res.render('index',{title:'登陆成功',name:user_name});
        }
    })
}