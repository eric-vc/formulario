//var mongoose = require('mongoose');

/*
var mongoDB = 'mongodb://127.0.0.1/mydatabase';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
*/
//mongodb+srv://eric_admin:<W8WVN644EUuvm5Yj>@cluster0.mandk.mongodb.net/my_database?retryWrites=true&w=majority
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://eric_admin:<W8WVN644EUuvm5Yj>@cluster0.mandk.mongodb.net/my_database?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
