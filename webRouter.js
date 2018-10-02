var express             = require('express');
var router              = express.Router();
var login               = require('./controller/login');
var register            = require('./controller/register');
var loginMiddle         = require('./middleware/loginMidlle');

//展示界面
router.get('/index',function(req,res,next){
        res.render('index',{title:'后台登陆'});
});

//login
router.post('/login',login.index);

//校验当前用户存在
// router.all(loginMiddle.haveUser);

//注册界面跳转
router.get('/register',function(req,res,next){
        res.render('register',{title:'注册'});
});

//用户注册
router.post('/register_suc',register.addUser);

module.exports = router;