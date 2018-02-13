var letters = require("./letters.js");

// Word constructor
function Word() {
    this.letter = [];
    for (var i = 0; i < randWord.length; i++) {
        this.letter.push(randWord[i]);
    }
    this.retString = function() {
            this.Letter();
    }

    

}
//console.log(Letter.charRet());

//console.log(randWord);




//var toString = function() {
    //returns string of the Word
//}

module.exports = Word;