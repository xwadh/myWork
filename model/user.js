var mongoose = require('mongoose');
var moment = require('moment');         //日期处理库
var BaseModel = require('./baseModel');

var UserSchema = new mongoose.Schema({
    name : string,
    age  : number,
    sex  : string,
    createTime: { type : Date, default : Date.now()},
});

UserSchema.plugin(BaseModel);

exports = module.exports =mongoose.model('User',UserSchema);