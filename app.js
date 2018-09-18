var express = require('express');               //导入express框架
var createError = require('http-errors');
var path = require('path');                     //处理文件路径
var bodyParser = require('body-parser');        //解析post请求主体
var cookieParser = require('cookie-parser');    //cookie
require('colors');                              //控制台文本颜色
var session = require('express-session');       //启用session
var RedisStore = require('connect-redis')(session);
var passport = require('passport');             //引入权限认证模块
var compress = require('compression');          //传输数据进行gzip压缩
var logger = require('./common/logger');        //启用log4js日志管理
var helmet =require('helmet');                  //启用安全保护模块
//var errorPageMiddleware = require('./middlewares/error_page');
var csurf = require('csurf');
var webRouter = require('./webRouter');
var errorhandler = require('errorhandler');
var config = require('./config');                //引入配置表
var mongoose = require('mongoose');
require('./model/index');                        //MongoDB的操作

var app=express();

// mongoose.connect(config.db, function (err) {
//   if (err) {
//     console.error('connect to %s error: ', config.db, err.message);
//     process.exit(1);
//   }else{
//     console.log('mongodb is connecting');
//   }
// });
 
//静态文件目录
var staticDir = path.join(__dirname,'public');
//路由
app.use('/',webRouter);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');                   //启用ejs模板

app.use('./public',express.static(staticDir));

app.use(require('response-time')());            //引用反应时间
app.use(helmet.frameguard('sameorigin'));       //helmet
app.use(bodyParser.json({limit: '1mb'}));           
app.use(bodyParser.urlencoded({ extended: true, limit: '1mb' }));    
app.use(require('method-override')());          //扩展http请求
app.use(require('cookie-parser')(config.session_secret));
app.use(compress());
app.use(session({
    secret: config.session_secret,
    store: new RedisStore({
      port: config.redis_port,
      host: config.redis_host,
      db: config.redis_db,
      pass: config.redis_password,
    }),
    resave: false,
    saveUninitialized: false,
  }));

// oauth 中间件
app.use(passport.initialize());

app.use(cookieParser());

// error handler
if (config.debug) {
  app.use(errorhandler());
} else {
  app.use(function (err, req, res, next) {
    logger.error(err);
    return res.status(500).send('500 status');
  });
}
  
app.listen('3000',function(){
    console.log('server start ...');
    console.log('You can debug your app with http://' + config.hostname + ':' + config.port);
    logger.info("app start on port 3000!");
    logger.info('God bless love....');
    logger.info('You can debug your app with http://' + config.hostname + ':' + config.port);
})

module.exports = app;