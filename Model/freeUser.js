//requiring the previously defined class, User
const User = require('./user');

//defining a class for free users
class FreeUser extends User {
    constructor(firstName, lastName, age, userName, mail, password, interests, adPreferences) {
        super(firstName, lastName, age, userName, mail, password, interests, adPreferences);
    }
}

//exporting freeuser so that other files can use it
module.exports = FreeUser;