//defining a class for users
class User {
    constructor(firstName, lastName, age, userName, mail, password, interests) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.userName = userName;
      this.mail = mail;
      this.password = password;
      this.interests = interests;
    }
}

//exporting User so other files can use them
module.exports = User;
