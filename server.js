import MongoClient from 'mongodb';
import assert from 'assert';
import chalk from 'chalk';
import express from 'express';
import config from './config.js';
import global from './global.js';

var app = express();

// app.listen()

MongoClient.connect(config.db.url + config.db.database, function (err, db) {
    assert.equal(null, err, '[ERROR] Cannot connect to ' + config.db.database);
    console.log(chalk.bgGreen('[SUCESS] Connect to ' + config.db.database + ' successful'));
    db.close();
});