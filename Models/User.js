
//requiring mongoose cos its a mongoose schema
const mongoose = require('mongoose');

//user model schema
// creating a schema which will give every user in the database a specific look. 
// A user will have aN id, first name, lastname, username, dateOfbirth, gender, an email, a password, profile photo etc.
// we are binding the layout of the schema to the model which is named 'User' . 
// This is what would be used to access the data in the database, 
// and that’s exactly why would be exporting it to use in other parts of your program.

const Schema = mongoose.Schema;

const userSchema = new Schema({
  _id: {
    type: String,
     },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  dateOfBirth: {
    type: Date,
    default: Date.now
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Decline'],
    default: 'Decline'
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  hashedPassword: {
    type: String,
    required: true
  },
  profilePhoto: {
    type: String
  },
  joined: {
    type: Date,
    default: Date.now
  },
  role: {
    type: Number,
    ref: 'Role',
    default: 1
  }
});

userSchema.virtual('password').get(function () {
  return this.hashedPassword;
});

userSchema.virtual('password').set(function (plainText) {
  const salt = bcrypt.genSaltSync(10);
  this.hashedPassword = bcrypt.hashSync(plainText, salt);
});

const userModel = mongoose.model('User', userSchema);
