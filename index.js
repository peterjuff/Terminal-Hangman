var inquirer = require('inquirer');
var words = require("./words.js");
var list = require("./list.js");


//randomly selects a word and uses Word const to store it
var randMovie = list[Math.floor(Math.random() * list.length)];
console.log(randMovie);


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
