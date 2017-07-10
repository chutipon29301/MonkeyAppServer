import {config} from './config.js';

let log = function(data){
    if (config.debugMode) {
        console.log(data);
    }
}

module.exports = {
    log: log
}