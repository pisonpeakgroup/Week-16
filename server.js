// require express as a dependecy
var express = require('express');

// require body-parser as a dependency
 bodyParser = require('body-parser');

// create express app
var app = express();
// parse requests of content-type - application/x-www-form-urlencoded
 app.use(bodyParser.urlencoded({ extended: true }));
 // parse requests of content-type - application/json 
  app.use(bodyParser.json());


// Configuring the database in server.js
var mongoose = require('mongoose');
var db = require('./config/db.js');

mongoose.connect(db.url);
mongoose.connection.on('error', function() {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});
mongoose.connection.once('open', function() {
   })
 console.log("Successfully connected to the database");

// definning a simple route
app.get('/', function(req, res){
    res.json({"message": "Welcome to School Data application. Take notes quickly. Organize and keep track of all your notes."});
});
// Require user routes UserRoute.js
var UserRoute = require('./routes/UserRoute.js');
// listen for requests
app.listen(3000, function(){
    console.log("Server is listening on port 3000, so two down few to go!");
});

// We use module.exports to make this app object visible to the rest of the program
//after calling for it using require() 
module.exports = app;
