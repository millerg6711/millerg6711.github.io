var $ = function (id) {
    return document.getElementById(id);
};

const MINGUESS = 1;
const MAXGUESS = 100;

var rn = Math.floor(Math.random() * 100) + 1;
var numGuesses = 0;

var processEntries = function () {
    checkGuess();
};

function checkGuess() {
    var status = $("status");
    var guess = $('guessNumber').value;

    if (isNaN(guess) || (guess < MINGUESS) || (guess > MAXGUESS)) {
        alert("All guesses must be numbers between 1- 100. Please try again.")
    } else {
        numGuesses++;
        if (guess < rn) {
            status.value = "Too low! Please try again.";
        } else if (guess > rn) {
            status.value = "Too high! Please try again.";
        } else if (guess == rn) {
            status.value = "Guess " + rn + " correct in " + numGuesses + " guesses";
        }
    }
}

var clearForm = function () {
    $('guessNumber').value = "";

    if ($("status").value != "") {
        $("status").value = "";
    }
};

window.onload = function () {
    $("guess").onclick = processEntries;
    $('clear').onclick = clearForm;
};