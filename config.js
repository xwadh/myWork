var path = require('path');

var config = {
    session_secret: 'node_club_secret', // 务必修改
    auth_cookie_name: 'node_club',

    // redis 配置，默认是本地
    redis_host: '127.0.0.1',
    redis_port: 6379,
    redis_db: 0,
    redis_password: '',
    //app的域名
    host: 'localhost',
    hostname:'localhost',
    //端口号
    port: 3000 ,

    // mongodb 配置
    db: 'mongodb://127.0.0.1/myWork',

    // debug 为 true 时，用于本地调试
    debug: true
}

exports=module.exports=config;