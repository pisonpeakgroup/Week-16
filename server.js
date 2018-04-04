// require express as a dependecy to create our app
var express = require('express');
//require mongoose as a dependency to create a database connection
var mongoose = require('mongoose');
// require body-parser as a dependency to parse our requests in urlencoded content type
bodyParser = require('body-parser');



// create express app
var app = express();
// parse requests of content-type - application/x-www-form-urlencoded
 app.use(bodyParser.urlencoded({ extended: true }));
 // parse requests of content-type - application/json 
  app.use(bodyParser.json());



//creating the databese connecion using mongoose
mongoose.connection.on('error', function() {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});
mongoose.connection.once('open', function() {
   })
 console.log("Successfully connected to the database");
 
// Configuring the database in server.js to access db.js in config folder
var db = require('./config/db.js');

//configuring the route from UserRoutes.js
var app = require('express')();
var UserRoutes = require('./Routes/UserRoutes.js');
var UserControllers = require('./Controllers/UserControllers.js');
//  Connect all our routes to our application
app.use('/', UserRoutes);


//server port and console message
app.listen(3000, function(){
    console.log("Server is listening on port 3000, so two down few to go!");


// definning a simple route
app.get('/', function(req, res){
    res.json({"message": "Welcome to School Data application. Take notes quickly. Organize and keep track of all your notes."});
});
// We use module.exports to make this app object visible to the rest of the program
module.exports = app;
});
