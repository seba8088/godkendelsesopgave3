//requiring the jsonwebtoken
var jwt = require('jsonwebtoken');

//creating a function that protects some information, in this case a message
//if the token can be verified the message will be displayed
function protectedController(req, res) { 
    jwt.verify(req.token, 'secretText', function(err, data){
        if(err){
            res.sendStatus(403);
        } else{
            res.json({
                msg: "You can only see this if you're logged in",
                data: data
            })
        }
    }) 
}

//exporting the function
module.exports = protectedController;