var User = require('../proxy').User;


//login路由
exports.index = function(req,res,next){
    var user_name = req.params.name;
    var user_pass = req.params.password;
    User.findUserByName(user_name,user_pass,function(err,user){
        if(err){
            return next(err);
        }
        if(!user){
            res.render('用户不存在！');
            return;
        }
        if(user.password !== user_pass){
            res.render('register',{title:'密码错误'});
        }
        if(user.password == user_pass){
            res.render('register',{title:'登陆成功',name:user_name,password:user_pass});
        }
    })
}