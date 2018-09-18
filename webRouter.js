var express = require('express');
var router = express.Router();
var logger = require('./common/logger');

//homepage
router.get('/index',function(err,res,req){
        res.render('index',{title:'后台登陆'});
});

//login
router.get('/login',function(err,req,res){
    
});

//register
router.post('/register',function(err,req,res){

});

module.exports = router;