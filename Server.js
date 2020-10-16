// Setting up the environment with required statements
const express = require("express");
const server = express();
const cors = require("cors");
const port = process.env.PORT || 3000;
server.use(express.static('public'));
server.use(cors());
server.use(express.json());

//geting the hard coded users
userArray = require('./HardUser')

//getting the controllers
const userController = require('./Controller/userController')
const protectedController = require('./Controller/Protectedcontroller')
const loginController = require('./Controller/loginController')

//gettings the middleware
const ensureToken = require('./Middleware/ensureToken')

//read different endpoints
//the first one returns all current users in the system
//the second one generates a JWT token (meaning that the user logged in)
//if the token is inserted, the third one displays the protected content
server.get('/', userController)

server.post('/login', loginController)

server.get('/protected', ensureToken, protectedController)

//CRUD-endpoint for User: delete; this deletes a user
server.delete('/user/delete', (req, res) => {
  res.send("User has been deleted: " + JSON.stringify(userArray[0]));
});

//CRUD-endpoint for interests: update; this updates a users interests
server.put('/interests', (req, res) => {
  res.send("Updated interests for User:" + JSON.stringify(userArray[0]));
});

//CRUD-endpoint for matches: create; this creates a match between two users
server.post('/matches', (req, res) => {
  res.send("There's a match between " + JSON.stringify(userArray[0]) + " and " + JSON.stringify(userArray[1]) + "!");
});

//CRUD-endpoint for user: read; this reads a single user's current information
server.get('/user/info', (req, res) => {
    res.send("The user has the following information: " + JSON.stringify(userArray[1]));
});

//activating the server
server.listen(port, () => {
  console.log(`Listening to port:${port}`)
});