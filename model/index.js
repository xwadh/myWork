var mongoose = require('mongoose');
var config   = require('../config');
var logger = require('../common/logger');

//链接数据库
mongoose.connect(config.db, {
    server: {poolSize: 20}
  }, function (err) {
    if (err) {
      logger.error('connect to %s error: ', config.db, err.message);
      process.exit(1);
    }
  });

// models
require('./user');
require('./bag');

exports.User = mongoose.model('User');
exports.Bag  = mongoose.model('Bag');