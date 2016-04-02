// Using Node js to create this server
// Note: in CLI enter npm install -g nodemon to allow page refresh w/o restarting server

// require express Library
var express = require('express');
// Back-end app
var app = express();

// Serving static files in Express, lets you specify a folder to serve file
app.use(express.static('public'));

// API (Application Interface Call), route
app.get('/meows', function(req, res, next) {
  var meows = [
    'Hello, I flipped over a cup.',
    'My owner just said hi to me. Yum.',
    'It is time for a nap',
    'It is my birthday!',
  ];
  return res.send(meows);
});

// Have to specify port 3000, defaults on 8080. Listen is a callback
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
