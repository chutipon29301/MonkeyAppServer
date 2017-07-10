import {config} from './config.js';

let log = function(data){
    if (config.debugMode) {
        console.log(data);
    }
}

let error = function(data){
    if(config.debugMode){
        console.error(data);
    }
}

module.exports = {
    log: log,
    error: error
}