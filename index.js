var inquirer = require('inquirer');
var chalk = require("chalk");
var Word = require("./words.js");
var list = require("./list.js");

var randMovie = list[Math.floor(Math.random() * list.length)];
console.log(randMovie);
var newWord = new Word(randMovie);
var guessesLeft = randMovie.length + 5;
var guesses = [];

//asks user for guesses

function ask() {
    inquirer.prompt([
        {
            type: "input",
            message: "Guess a letter. Come on, you know you want to.",
            name: "userGuess"
        },
    ]).then(function(answers) {
        var storage = answers.userGuess;
        //check if letter guessed
        newWord.checkGuess(storage)
        if (guessesLeft > 0 && guesses.indexOf(storage) === -1) {
            guesses.push(storage);
            guessesLeft--;
            console.log("You have " + guessesLeft + " guesses left.");
            console.log("Already guessed: " + guesses);
            ask();
        } else if (guessesLeft > 0 && guesses.indexOf(storage) !== -1) {
            console.log("Oops, you already guessed that letter.");
            ask();
        } else if (guessesLeft > 0 && randMovie.indexOf(" - ") === -1) {
            console.log("Great job! You won!!");
        } else {
            console.log("No more guesses...better luck next time!");
        }

    });
}

ask();
