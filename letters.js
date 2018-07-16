

//obj const to character guessed or placeholder
function Letter(letter, character) {
    this.letter = letter;
    this.character = character;
    this.guess = false;
    this.charRet = function(userInput) {
        if (this.guess == userInput) {
            this.guess = true;
        } 
            
};
    //shows letter if this.guess is true or - if false
    this.charCheck = function() {
        if (this.guess) {
            return this.guess;
        } return " - ";
    };
    console.log(this.guess);
        
    
};

module.exports = Letter;


