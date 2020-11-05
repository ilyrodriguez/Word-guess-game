// confirm("                           -  WELCOME TO THE PSYCHIC GAME  -    \n" +
//     "                                guess what letter I'm thinking of?\n" +
//     "\n" +
//     "                     You have up to 10 guesses to win or lose a point\n" +
//     "                              Win 10 points and you are a Psychic\n" +
//     "                               Loose 10 points and is game over\n" +
//     "\n" +
//     "                                   WOULD YOU LIKE TO PLAY?");

$(document).ready(function(){
    $('#myModal').modal('show');
    disableKeyboard();
});

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
	document.querySelector("#guessesLeft").innerHTML = " " + guessesLeft;
}

pickRandom();
document.getElementById('guessesLeft').innerHTML += " " + guessesLeft;

// FUNCTION ON KEYBOARD PRESS BEHAVIOR :
document.onkeypress = function (event) {

    // WHILE PLAYING IF POINT WIN MODAL DISPLAYS ANY KEYBOARD PRESSED WILL CLOSE MODAL:
    $('.close-point-btn').click();

    var userGuess = event.key.toLocaleLowerCase();
    document.getElementById('user-guess').innerHTML += userGuess;

    if (userGuess === computerGuess) {
        wins++;
        $('#pointModal').modal('show');
        // alert(" You win 1 point ");
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
        $('#myModal').modal('show');
        // SPECIFIC CONTENT IN MODAL WILL DISPLAY/HIDE BASED ON WHAT HAPPENED IN THE GAME:
        $('.game-invite').addClass('d-none');
        $('.win-content').removeClass('d-none');
        // DISABLE THE KEYBOARD WHEN GAME OVER MODAL IS SHOWING:
        disableKeyboard();
        // alert("                                  -     CONGRATULATIONS    -\n " +
        //     "                                      You are a real Psychic! ");
        wins = 0;
        losses = 0;
        userGuess = 9;
        guesses = [];
        console.log(wins);
    }
  

    if (losses === 10) {
        // alert("                                         -    GAME OVER   -\n" +
        //     "                                         You are no Psychic! ");
        $('#myModal').modal('show');
        // SPECIFIC CONTENT IN MODAL WILL DISPLAY/HIDE BASED ON WHAT HAPPENED IN THE GAME:
        $('.game-invite').addClass('d-none');
        $('.gameover-content').removeClass('d-none');
        // DISABLE THE KEYBOARD WHEN GAME OVER MODAL IS SHOWING:
        disableKeyboard();
        wins = 0;
        losses = 0;
        userGuess = 9;
        guesses = [];
        console.log(losses);
    }

    document.getElementById('wins').innerHTML = " " + wins;
    document.getElementById('losses').innerHTML = " " + losses;
    document.getElementById('guessesLeft').innerHTML = " " + guessesLeft;
}

$('.btn-close').click(function (e) { 
        // e.preventDefault();
        $('.game-area').addClass('d-none');
        $('.changed-mind').removeClass('d-none'); 
        disableKeyboard();
    });

    $('.play-button').click(function (e) { 
        // e.preventDefault();
        // enable keyboard if player chooses to play:
        enableKeyboard();
        $('.game-area').removeClass('d-none');
        $('.changed-mind').addClass('d-none'); 
    });

    $('.btn-continue').click(function (e) { 
        // e.preventDefault();
        // enable keyboard if player chooses to play:
        enableKeyboard();
        // SPECIFIC CONTENT IN MODAL WILL DISPLAY/HIDE BASED ON WHAT HAPPENED IN THE GAME:
        $('.game-area').removeClass('d-none');
        $('.changed-mind').addClass('d-none'); 
        $('#myModal').modal('hide');
    });

    //  DISABLE THE KEYBOARD UNTIL CHOOSING TO PLAY:
    function disableKeyboard(){
        document.onkeydown = function (e) {
            return false;
        }
    }

     // ENABLE THE KEYBOARD UNTIL CHOOSING TO PLAY:
     function enableKeyboard(){
        document.onkeydown = function (e) {
            return true;
        }
    }