//requring the different user types
const FreeUser = require('./Model/freeUser');
const PayingUser = require('./Model/payingUser');

//hardcoding two new users and saving their data in an array
let erwin = new FreeUser ("Erwin", "Smith", "30", "Smithy", "sasageyo@susume.com", "Humans0utside", ["horses", "swords", "speeches"], null);
let finn = new PayingUser ("Finn", "TheHuman", "15", "AdventureF1nn", "finnNjake@ooo.com", "BubbleF1re", ["Adventures", "dogs", "Candy"], ["457123450980", "12/12", "505"]);

let userArray = [erwin, finn];

//exporting this array so that other files can use it
module.exports = userArray;