'use strict';

var mongodbRest = require('../../../root/node_modules/mongodb-rest/server.js');
var config = {
    "db": "mongodb://m001-student:m001-mongodb-basics@sandbox-shard-00-00.sppfg.mongodb.net:27017/sample_airbnb?ssl=true&replicaSet=atlas-b5vzke-shard-0&authSource=admin&retryWrites=true&w=majority"
};
mongodbRest.startServer(config);