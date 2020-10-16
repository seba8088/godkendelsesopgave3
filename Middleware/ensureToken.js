//creating a function that ensures the token is being checked
function ensureToken(req, res, next){
    const header = req.headers["authorization"]
    console.log(header)
    if (header == undefined){
        res.sendStatus(403)
    } else{
        const bearer = header.split(" ")
        const headerToken = bearer[1]
        req.token = headerToken
        next()
        
    }
}

//exporting the function
module.exports = ensureToken