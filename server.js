var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var chalk = require('chalk');
var express = require('express');
var config = require('./config.js');
var global = require('./global.js');

var app = express();

MongoClient.connect(config.db.url + config.db.database, function (err, db) {
    assert.equal(null, err, '[ERROR] Cannot connect to ' + config.db.database);
    console.log(chalk.bgGreen('[SUCESS] Connect to ' + config.db.database + ' successful'));
    db.close();
});