//configuring the route from UserRoutes.js
var app = require('express')();


//requre router
var UserRoutes = require('express').Router();

UserRoutes.get('/users', (req, res) => {
  res.status(200).json({ message: 'Connected with a greatfull heart!' });
});

// A post router
UserRoutes.post('/users', (req, res) => {
  res.status(200).json({ message: 'information successfully sent!' });
});

//A put router
UserRoutes.put('/users', (req, res) => {
  res.status(200).json({ message: 'Information successfully updated' });
});

//A delete router
UserRoutes.delete('/users', (req, res) => {
  res.status(200).json({ message: 'Data deleted successfully!' });
});


module.exports = UserRoutes;
