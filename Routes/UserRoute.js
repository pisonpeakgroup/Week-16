// we’ll be using the express router to create a subset of routes 
// which can be modular and independent from the whole app
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
// create express app
var app = express();
// UserController.js
module.exports = function(app) {
var users = require('../controllers/UserController.js');


// The body-parser module is used as a middleware to handle data,
// when sending data through HTTP requests using forms.
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());


// CREATES A NEW USER
// the router object has a .post method that takes two parameters. 
// The first is the route which will be linked to a function
// The user model has a create method which also takes two parameters. 
// The first being an object and the second a function
// The object contains the values to be inserted into the database.
// You see, they are structured like the schema you created above. 
// After it is created the callback function is called with another two parameters, an error value and a success value. 
// definning a simple route
app.get('/users', function(req, res){
    res.json({"message": "Get to input your data."});
     users.find({

    }, function (err, users) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(users);
    });
});

// RETURNS ALL THE USERS IN THE DATABASE
// This second method is a bit different. The router object also has a .get method which also takes two parameters
// Find is a method which returns values from the database
router.get('/users', function (req, res) {
    users.find({

    }, function (err, users) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(users);
    });
});

// GETS A SINGLE USER FROM THE DATABASE
router.post('/users:id', function (req, res) {
    users.findById(req.params.id, function (err, users) {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!user) return res.status(404).send("No user found.");
        res.status(200).send(users);
    });
});

// DELETES A USER FROM THE DATABASE
router.delete('/users:id', function (req, res) {
    users.findByIdAndRemove(req.params.id, function (err, users) {
        if (err) return res.status(500).send("There was a problem deleting the user.");
        res.status(200).send("User "+ user.name +" was deleted.");
    });
});

// // UPDATES A SINGLE USER IN THE DATABASE
router.put('/users:id', function (req, res) {

    users.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, users) {
        if (err) return res.status(500).send("There was a problem updating the user.");
        res.status(200).send(users);
    });
});
}
// We use module.exports to make this router object visible to the rest of the program
//after calling for it using require()
module.exports = router;
