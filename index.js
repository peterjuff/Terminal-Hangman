var inquirer = require('inquirer');
var words = require("./words.js");

var wordBank = ["html", "css", "javascript", "node", "jquery", "bootstrap", "react"];

//randomly selects a word and uses Word const to store it
var randWord = wordBank[Math.floor(Math.random() * wordBank.length)];
console.log(randWord);


//prompts user for each guess + keeps track of remaining guesses
inquirer.prompt([
    {
        type: "input",
        message: "Hello. Guess a letter. Come on, go ahead and guess a letter.",
        name: "Letter"
      }



]).then(answers => {
    Word(letters);
    
});
//randWord = new Letter();
