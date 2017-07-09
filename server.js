var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var chalk = require('chalk');
var config = require('./config.js');
var global = require('./global.js');

MongoClient.connect(config.db.url + config.db.database, function (err, db) {
    assert.equal(null, err, '[ERROR] Cannot connect to ' + config.db.database);
    console.log(chalk.bgGreen('Connect Successfully'));
    db.close();
});