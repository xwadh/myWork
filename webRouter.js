var express = require('express');
var router = express.Router();
var login = require('./controller/login');
var logger = require('./common/logger');

//展示界面
router.get('/index',function(req,res,next){
        res.render('index',{title:'后台登陆'});
});

//login
router.post('/login',login.index);

//register
router.get('/register',function(req,res,next){
        res.render('register',{title:'注册'});
});

module.exports = router;