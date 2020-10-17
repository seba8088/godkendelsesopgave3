//requiring the previously defined class, User
const User = require('./user');

//defining a class for paying users
class PayingUser extends User {
    constructor(firstName, lastName, age, userName, mail, password, interests, profilePic, creditCardInfo) {
      super(firstName, lastName, age, userName, mail, password, interests, profilePic);
      this.creditCardInfo = creditCardInfo;
    }
}

//exporting payingUser so that other files can use it
module.exports = PayingUser;