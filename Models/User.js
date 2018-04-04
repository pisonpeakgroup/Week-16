
//requiring mongoose cos its a mongoose schema
var mongoose = require('mongoose');

//user model schema
// creating a schema which will give every user in the database a specific look. 
// A user will have aN id, first name, lastname, username, dateOfbirth, gender, an email, a password, profile photo etc.
// we are binding the layout of the schema to the model which is named 'User' . 
// This is what would be used to access the data in the database, 
// and that’s exactly why would be exporting it to use in other parts of your program.
var Schema = mongoose.Schema;
var userSchema = new Schema({
      title: {
        type: String
    },
    author: {
        type: String
    },
    yearOfPublication: {
        type: Number
    },
    description: {
        type: String
    },
    isbn: {
        type: String
    }
});

module.export = mongoose.model('User', userSchema);
