'use strict';

var mongodbRest = require('../../../root/node_modules/mongodb-rest/server.js');
var config = {
    "db": "mongodb://m001-student:m001-mongodb-basics@sandbox-shard-00-00.sppfg.mongodb.net:27017,sandbox-shard-00-01.sppfg.mongodb.net:27017,sandbox-shard-00-02.sppfg.mongodb.net:27017/sample_airbnb"
};
mongodbRest.startServer(config);