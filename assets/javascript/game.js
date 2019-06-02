confirm("                           -  WELCOME TO THE PSYCHIC GAME  -    \n" +
    "                                guess what letter I'm thinking of?\n" +
    "\n" +
    "                     You have up to 10 guesses to win or lose a point\n" +
    "                              Win 10 points and you are a Psychic\n" +
    "                               Loose 10 points and is game over\n" +
    "\n" +
    "                                   WOULD YOU LIKE TO PLAY?");

// Array of letters
var computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Variables 
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guesses = [];

function pickRandom() {
    guessesLeft = 9;
    guesses = [];
    document.getElementById('user-guess').textContent = " ";
    computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    console.log(computerGuess);
}
function countGuessesLeft() {
	document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
}

pickRandom();
document.getElementById('guessesLeft').innerHTML += " " + guessesLeft;

document.onkeypress = function (event) {
    var userGuess = event.key.toLocaleLowerCase();
    document.getElementById('user-guess').innerHTML += userGuess;

    if (userGuess === computerGuess) {
        wins++;
        alert(" You win 1 point ");
        pickRandom();
    } 

    else if (guessesLeft === 0) {
        losses++;
        pickRandom();
     }

    else {
      guessesLeft--;
      guesses.push(userGuess);
    }

    if (wins === 10) {
        alert("                                  -     CONGRATULATIONS    -\n " +
            "                                      You are a real Psychic! ");
        console.log(wins);
    }
  

    if (losses === 10) {
        alert("                                         -    GAME OVER   -\n" +
            "                                         You are no Psychic! ");
        console.log(losses);
        wins = 0;
        losses = 0;
        userGuess = 9;
        guesses = [];
    }

    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "losses: " + losses;
    document.getElementById('guessesLeft').innerHTML = "Guesses left: " + guessesLeft;

}