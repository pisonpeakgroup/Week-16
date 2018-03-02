var express = require('express');
var bodyParser = require('body-parser');

// create express app
var app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// define a simple route
app.get('/', function(req, res){
    res.json({"message": "Welcome to School Data application. Take notes quickly. Organize and keep track of all your notes."});
});

// A put route
app.put('/', function(req, res){
    res.json({"message": "Welcome to the part where you can put info. Organize and keep track of all your informations."});
});

// A post route
app.post('/', function(req, res){
    res.json({"message": "Welcome to the School Data application part where all data are posted. Organize and keep track of all your data."});
});

// A delete route
app.delete('/', function(req, res){
    res.json({"message": "Welcome to the School Data application. Here you quickly delete unwanted data. Organize and keep track of all your work."});
});

// listen for requests
app.listen(1000, function(){
    console.log("Server is listening on port 1000");
});
