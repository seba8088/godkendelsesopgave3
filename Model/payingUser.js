//requiring the previously defined class, User
const User = require('./user');

//defining a class for paying users
class PayingUser extends User {
    constructor(firstName, lastName, age, userName, mail, password, interests, profilePic, paymentInfo) {
      super(firstName, lastName, age, userName, mail, password, interests, profilePic);
      this.paymentInfo = paymentInfo;
    }
}

//exporting payingUser so that other files can use it
module.exports = PayingUser;