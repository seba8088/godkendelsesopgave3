
var jwt = require('jsonwebtoken');

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

module.exports = protectedController;