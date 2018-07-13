var inquirer = require('inquirer');
var chalk = require("chalk");
var words = require("./words.js");
var list = require("./list.js");

var randMovie = list[Math.floor(Math.random() * list.length)];
console.log(randMovie);
var guessesLeft = randMovie.length + 5;
var guesses = [];

//asks user for guesses

function ask() {
    inquirer.prompt([
        {
            type: "input",
            message: "Hello. Guess a letter. Come on, you know you want to.",
            name: "Letter"
        },
    ]).then(function(answers) {
        var storage = answers.Letter;

    })
}

ask();
