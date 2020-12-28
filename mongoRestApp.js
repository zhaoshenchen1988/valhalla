'use strict';

var mongodbRest = require('../../../root/node_modules/mongodb-rest/server.js');
var config = {
    "db": "mongodb://localhost:27017",
    "accessControl": {
        "allowOrigin": "*",
        "allowMethods": "GET,POST,PUT,PATCH,DELETE,HEAD,OPTIONS",
        "allowCredentials": false
    }
};
mongodbRest.startServer(config);