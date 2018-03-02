
// For  database.config.js in config folder
module.exports = {
    url: 'mongodb://localhost:1000/schooldata'
}


// For server.js after app.use bodyperser
// Configuring the database
var dbConfig = require('./config/database.config.js');
var mongoose = require('mongoose');

mongoose.connect(dbConfig.url);

mongoose.connection.on('error', function() {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});
mongoose.connection.once('open', function() {
    console.log("Successfully connected to the database");
})
