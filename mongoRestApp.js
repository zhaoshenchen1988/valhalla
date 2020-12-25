'use strict';

var mongodbRest = require('mongodb-rest/server.js');
var config = {
    "db": "mongodb://m001-student:m001-mongodb-basics@sandbox.sppfg.mongodb.net/sample_airbnb?retryWrites=true&w=majority"
};
mongodbRest.startServer(config);

