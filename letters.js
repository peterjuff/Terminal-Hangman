

//obj const to character guessed or placeholder
function Letter(character, guess) {
    this.character = character;
    this.guess = false;
    this.charRet = function(userLetter) {
        if (this.character === userLetter) {
            this.guess = true;
        } 
            
};
    //shows letter if this.guess is true or - if false
    this.charCheck = function() {
        if (this.guess) {
            return this.guess;
        } return " - ";
    };
        
    
};

module.exports = Letter;



//};
