var express = require('express');
var router = express.Router();
var logger = require('./common/logger');

//homepage
router.get('/',function(err,res,req){
        res.send('HELLO');
});

//login
router.get('/login',function(err,req,res){
    
});

//register
router.post('/register',function(err,req,res){

});

module.exports = router;