

var user = require('../models/User.js');

exports.create = function(req, res) {
    // Create and Save a new Note
       if(!req.body.content) {
        res.status(400).send({message: "User can not be empty"});
    }
    var User = new User({title: req.body.title || "Untitled User", content: req.body.content});

    user.save(function(err, data) {
        console.log(data);
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error occurred while creating the User."});
        } else {
            res.send(data);
        }
    });
};

exports.findAll = function(req, res) {
    // Retrieve and return all notes from the database.
    user.find(function(err, user){
        if(err) {
            res.status(500).send({message: "Some error occurred while retrieving user."});
        } else {
            res.send(notes);
        }
    });
};

exports.findOne = function(req, res) {
    // Find a single note with a noteId
    user.findById(req.params.userId, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not retrieve note with id " + req.params.userId});
        } else {
            res.send(data);
        }
    });

};

exports.update = function(req, res) {
    // Update a note identified by the noteId in the request
     User.findById(req.params.userId, function(err, user) {
        if(err) {
            res.status(500).send({message: "Could not find a note with id " + req.params.userId});
        }

        user.title = req.body.title;
        user.content = req.body.content;

        user.save(function(err, data){
            if(err) {
                res.status(500).send({message: "Could not update note with id " + req.params.userId});
            } else {
                res.send(data);
            }
        });
    });

};

exports.delete = function(req, res) {
    // Delete a note with the specified noteId in the request
    User.remove({_id: req.params.userId}, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not delete note with id " + req.params.id});
        } else {
            res.send({message: "Note deleted successfully!"})
        }
    });

};
