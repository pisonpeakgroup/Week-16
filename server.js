// my server.js dependencies
const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const app            = express();
const db             = require('./config/db');
const port = 8000;

//To connect to the database
MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log(err)
  require('./app/routes')(app, database);
//To use bodyParser in handling JSON requests
app.use(bodyParser.urlencoded({ extended: true }));
//To handling routes in CRUD requests
require('./app/routes')(app, {});
//db url
module.exports = {
 mongodb://<dbuser>:<dbpassword>@ds141434.mlab.com:41434/pisonpeakdatabase
};
//To request the app to listen to port
app.listen(port, () => {
  console.log('We are live on ' + port);
});
