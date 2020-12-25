
var MongoClient = require('mongodb').MongoClient;

var uri = "mongodb://m001-student:m001-mongodb-basics@sandbox-shard-00-00.sppfg.mongodb.net:27017,sandbox-shard-00-01.sppfg.mongodb.net:27017,sandbox-shard-00-02.sppfg.mongodb.net:27017/sample_airbnb?ssl=true&replicaSet=atlas-b5vzke-shard-0&authSource=admin&retryWrites=true&w=majority";
MongoClient.connect(uri, function(err, client) {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
