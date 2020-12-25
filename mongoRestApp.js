'use strict';

var mongodbRest = require('../../../root/node_modules/mongodb-rest/server.js');
var config = {
    "db": "mongodb://m001-student:m001-mongodb-basics@sandbox.sppfg.mongodb.net/sample_airbnb?retryWrites=true&w=majority"
};
mongodbRest.startServer(config);

