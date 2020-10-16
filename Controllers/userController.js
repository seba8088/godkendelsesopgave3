const userArray = require('../HardUser');

//controller
function userController(req, res) {
    res.end(JSON.stringify(userArray))
}

//exporting the controller
module.exports = userController;