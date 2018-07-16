var inquirer = require('inquirer');
var chalk = require("chalk");
var Word = require("./words.js");
var list = require("./list.js");
var letter = require("./letters.js");

var randMovie = list[Math.floor(Math.random() * list.length)];
console.log(randMovie);
var guessesLeft = randMovie.length + 5;
var guesses = [];
var newWord = new Word(randMovie);

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
        console.log(storage);
        //check if letter guessed
        newWord.retString(randMovie);
        if (guessesLeft > 0 && guesses.indexOf(storage) === -1) {
            console.log(guesses.indexOf(storage));
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
