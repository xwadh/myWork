// var User = require('../proxy').User;


class loginMiddle{
    
    //判断是否有用户
    haveUser(req,res,next) {
        var user = req.session.user;
        if(user === undefined ||user === null){
            res.render('index',{title:"no user exists"});
        }
    }
}

exports = module.exports = loginMiddle;