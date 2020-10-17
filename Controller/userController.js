//requiring the hardcoded users
const userArray = require('../HardUser');

//making a function that returns all the users in the system along with their information
function userController(req, res) {
    res.send(JSON.stringify(userArray))
}

//exporting the userController
module.exports = userController;