

//obj const to character guessed or placeholder
function Letter(letter, character) {
    this.letter = letter;
    this.character = character;
    this.guess = false;
    this.charRet = function(userInput) {
        if (this.letter === userInput) {
            this.guess = true;
        } else {return " - "}
        console.log(this.guess); 
            
    };
    //shows letter if this.guess is true or - if false
    this.charCheck = function() {
        if (this.guess) {
            return this.guess;
        } return " - ";
    };
        
    
};

module.exports = Letter;


