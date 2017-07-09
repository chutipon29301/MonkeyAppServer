var config = require('./config');

module.exports.log = function (data) {
    if (config.debugMode) {
        console.log(data);
    }
}