// Using Node js to create this server
// Note: in CLI enter npm install -g nodemon to allow page refresh w/o restarting server

// require express Library
var express = require('express');
// Require body-parser needed by json to auto-parse 'body' in (req.body)
var bodyParser = require('body-parser');
// Back-end app
var app = express();

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

  return res.send(meows);
});

app.post('/meows', function(req, res, next) {
  meows.push(req.body.newMeow);
  res.send();
});

// Have to specify port 3000, defaults on 8080. Listen is a callback
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
