var wordBank = ["html", "css", "javascript", "node", "jquery"];

//randomly selects a word and uses Word const to store it
var randWord = wordBank[Math.floor(Math.random() * wordBank.length)];
console.log(randWord);

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
