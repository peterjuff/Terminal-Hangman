var inquirer = require('inquirer');
var chalk = require("chalk");
var words = require("./words.js");
var list = require("./list.js");

var randMovie;
//Game constructor keeps track of score and controlls game flow

function Game() {

    this.play = function() {
        this.guessesLeft = randMovie.length + 5;
        this.nextWord();
    };
};

//creates new Word object, ask for user guess
this.nextWord = function() {

    randMovie = list[Math.floor(Math.random() * list.length)];
    this.currentMovie = new Word(randMovie);
    console.log("\n" + this.currentMovie + "\n");
    this.makeGuess();
};

// console.log(randMovie);
// var guesses = [];
// var guessesLeft = randMovie.length + 5;

// function ask() {
// //prompts user for each guess + keeps track of remaining guesses
// inquirer.prompt([
//     {
//         type: "input",
//         message: "Hello. Guess a letter. Come on, go ahead and guess a letter.",
//         name: "Letter"
//       }



// ]).then(answers => {
//     Word(letters);
    
//     });

// }
// ask();

module.exports = Game;