var Letter = require("./letters.js");

// Word constructor
function Word(randMovie) {
    this.randMovie = randMovie;
    this.letter = [];
    for (var i = 0; i < randMovie.length; i++) {
        this.letter.push(new Letter(this.randMovie[i]));
    }
    this.retString = function(userInput) {
        var checkUserInput = new Letter(userInput);
        return checkUserInput.guesses(userInput);
            
    }
    this.toString = function() {
        var output = "";
        //return string of dashes or letters
        for (var j = 0; j < this.letter.length; j++) {
            output += this.letter[j].returnLetter();
        }

        return output;

    };

    

}


module.exports = Word;