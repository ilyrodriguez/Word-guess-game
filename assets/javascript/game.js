
alert("Welcome to The Physic Game " + "guess what letter I'm thinking, you have up to 10 guesses");

var userGuess = document.getElementById("user-guess");
// var answer = "I";
var guessLetters = [];
// ("what's your guess?");
var computerChoice = "";

var wins = 0;
var losses = 0;
var guesses = 10;

function pickRandom (){
    var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var randomNumber = Math.floor(Math.random()*letters.length);

    var randomLetter = letters[randomNumber];
    computerChoice = randomLetter;
}

userGuess.innerHTML += " " + guessLetters;
pickRandom();

    document.onkeypress = function(event) {
        var userGuess = event.key;
        document.getElementById('user-guess').innerHTML += userGuess;
    
        if(userGuess === computerChoice){
            wins++;
            attempts = 10;
            usedArray = [];
        }else{
            guesses--;
        }
    
        if(guesses !== computerChoice){
            losses++;
        }
    
        document.getElementById('wins').innerHTML = "Wins: " + wins;
        document.getElementById('losses').innerHTML = "losses: " + losses;
        document.getElementById('guesses').innerHTML = "Guesses left: " + guesses;
    
    }   