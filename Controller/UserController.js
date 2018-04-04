var app = require('express')();

// UserController.js
var UserControllers  = require('express').Router();


// CREATES A NEW USER
exports.create = function(req, res) {
    // Create and Save a new Note
    if(!req.body.content) {
        res.status(400).send({message: "Note can not be empty"});
    }
    var usercontrollers = new UserControllers({title: req.body.title || "Untitled Note", content: req.body.content});

    usercontrollers.save(function(err, data) {
        console.log(data);
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error occurred while creating the Note."});
        } else {
            res.send(data);
        }
    });
};

 // Retrieve and return all notes from the database.
exports.findAll = function(req, res) {
       UserControllers.find(function(err, notes){
        if(err) {
            res.status(500).send({message: "Some error occurred while retrieving notes."});
        } else {
            res.send(usercontrollers);
        }
    });
};

    // Find a single note with a noteId
exports.findOne = function(req, res) {
    UserControllers.findById(req.params.userId, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not retrieve note with id " + req.params.userId});
        } else {
            res.send(data);
        }
    });
};


// Update a note identified by the noteId in the request
exports.update = function(req, res) {
       UserControllers.findById(req.params.userId, function(err, user) {
        if(err) {
            res.status(500).send({message: "Could not find a note with id " + req.params.noteId});
        }

        user.title = req.body.title;
        user.content = req.body.content;

        user.save(function(err, data){
            if(err) {
                res.status(500).send({message: "Could not update note with id " + req.params.noteId});
            } else {
                res.send(data);
            }
        });
    });
};

// Delete a note with the specified noteId in the request
exports.delete = function(req, res) {
        UserControllers.remove({_id: req.params.userId}, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not delete note with id " + req.params.id});
        } else {
            res.send({message: "Note deleted successfully!"})
        }
    });
};

module.exports = UserControllers;
