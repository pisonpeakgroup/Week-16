# Week-16
A RESTFUL API call app1 in the Repository call week16

A school list API to
1. GET - retrieve information
2. PUT - update information
3. POST - send information
4. DELETE - remove information
info.


Our program/API has Four major files;
1. An app.js for configuring the application,
2. A db.js for specifying the connection to the database,
3. A server.js for spinning up the node server on a specific port of your choice.
   with some simple defined routes like get, post, delete, and put.
4. And Package.json for carrying node package info.
5. Then other folders and files carry the business logic of your program/API.


HOW I CREATEd this API

1. create a folder
2. create a package.json file into it.
3. install npm modules
3b. install dependencies into it.
4. create a READme File as seen here.
5. create a server.js file
6. create sub-folders: Config, Controllers, Models and Routes etc.
6a. All the configurations for the app GOES into Config's folder.
6b. All the Controllers for the app goes into Controller's folder
6c. All the Models for the app goes into Model's folder.
6d. All the Routes for the app goes into Route's folder.
etc.

1. We’ll be using Express for this application as it is the standard for a great majority of Node applications today. 
2. Mongoose is an ORM — Object Relational Mapper. 
The official ORM used for MongoDB to be precise. 
we use an ORM to simplify the transfer of data between our application and the database. 
It maps the data we have in our app to uphold a set of strict rules set by the database. 
3. Body-parser module is just a middleware we use to parse our data sent through HTTP requests.
