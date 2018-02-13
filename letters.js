

//obj const to character guessed or placeholder
function Letter(character, guess) {
    this.character = character;
    this.guess = guess;
    this.charRet = function() {
        if (this.guess) {
            return this.character}
        else {return "_"};  
            
};
    this.charCheck = function() {
        this.guess = true;
        this.guess
    };

};

module.exports = Letter;



//};
