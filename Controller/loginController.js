//requiring the users created in HardUSer
const userArray = require('../HardUser')
//requiring jsonwebtokens for authentication
var jwt = require('jsonwebtoken');

//creating a loginController that will generate a random token.
//This would mean that a user logging in would recieve such a token,
//giving them access to otherwise private info
function loginController(req, res) {
    var user = userArray[0]
    const token = jwt.sign({user}, 'secretText')
    res.json({
        token: token
    })
}

//exporting the function
module.exports = loginController
