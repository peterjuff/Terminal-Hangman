

//obj const to character guessed or placeholder
function Letter(letter) {
    this.letter = letter;
    this.guess = false;
    this.charRet = function() {
        if (this.guess == false) {
            return " _ ";
        } else {return letter}
            
    };
    this.charCheck = function(guesses) {
        if (guesses == this.letter) { 
            this.guess = true;
        } 
        
    }
};


module.exports = Letter;


