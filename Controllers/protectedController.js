//requiring the jsonwebtoken
var jwt = require('jsonwebtoken');

//creating a function that verifies the token given.
//if it matches the token created the user will recieve a message.
function protectedController(req, res) {
    //man kunne også tjekke her om token findes. 
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