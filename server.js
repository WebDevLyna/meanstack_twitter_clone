// Using Node js to create this server

// require express Library
var express = require('express');
// Back-end app
var app = express();

// Serving static files in Express, lets you specify a folder to serve file
app.use(express.static('public'));

// Have to specify port 3000, defaults on 8080. Listen is a callback
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
