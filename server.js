// Using Node js to create this server
// Note: in CLI enter npm install -g nodemon to allow page refresh w/o restarting server

// require express Library
var express = require('express');
// require MongoClient for mongodb to Retrieve
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;
// Require body-parser needed by json to auto-parse 'body' in (req.body)
var bodyParser = require('body-parser');
// Back-end app
var app = express();

var db = null;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/twitter_clone_meanstack", function(err, dbconn) {
  if(!err) {
    console.log("We are connected to MongoDB");
    db = dbconn;
  }
});

// Require body-parser needed by json to auto-parse 'body' in (req.body)
app.use(bodyParser.json());

  //// This block of code is removed once we store it in mongodb
  // var meows = [
  //   'Hello, I flipped over a cup.',
  //   'My owner just said hi to me. Yum.',
  //   'It is time for a nap',
  //   'It is my birthday!',
  // ];

// Serving static files in Express, lets you specify a folder to serve file
app.use(express.static('public'));

// API (Application Interface Call), route
app.get('/meows', function(req, res, next) {

  db.collection('meows', function(err, meowsCollection) {
    meowsCollection.find().toArray(function(err, meows) {
      return res.json(meows);
    });
  });
});

app.post('/meows', function(req, res, next) {

  db.collection('meows', function(err, meowsCollection) {
    var newMeow = {
        text: req.body.newMeow
      };
    // Inserting 1) object, 2) options {w:1} and 3) callback function
    meowsCollection.insert(newMeow, {w:1}, function(err) {
      return res.send();

    });
  });
});

app.put('/meows/remove', function(req, res, next) {

  db.collection('meows', function(err, meowsCollection) {
    var meowId = req.body.meow._id;
    // Inserting 1) object, 2) options {w:1} and 3) callback function
    meowsCollection.remove({_id: ObjectId(meowId)}, {w:1}, function(err) {
      return res.send();
    });
  });
});

app.post('/users', function(req, res, next) {

  db.collection('users', function(err, usersCollection) {

    usersCollection.insert(req.body, {w:1}, function(err) {
      return res.send();

    });
  });
});

// Have to specify port 3000, defaults on 8080. Listen is a callback
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
