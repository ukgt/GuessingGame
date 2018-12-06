var wordList = [

    "tulips",
    "flowers",
    "rain",
    "daffodils",
    "green",
    "grass",
    "fragrance",
    "birds",
    "love",
    "roses",
    "lilies",

]

var guessedLetters = [];    //list letters guessed
var currentWord = [];       //randomize selection of wordList
var correctGuess = [];          //input letter
var lettersInWord = [];
var wrongGuess;                //counter will count down by 1
var remainingGuesses;           //display how many guesses are left
var gameOver;               //you win image or game over image
var gameStart;          //press the button to get started
var resetGame;
var wins;
var counter = 10;
var startBtn = $("#startBtn")

// to start game - click on startBtn
//computer will select a word from wordList to place number of _ _ _ _ in currentWord area on page
//correctGuess will add letter to _ _ _ _ blanks
//wrongGuess will make counter count down by 1 and which is shown in Guesses Remaining
// and also log to guessedLetters
//if user guesses word in 10 tries, then win count goes up by 1
// if not, then game resets



function startGame() {

    currentWord = wordList[Math.floor(Math.random() * wordList.length)];
    lettersInWord = currentWord.split("");

};

startBtn.click(function () {

    startGame()
    pushDashes()
    console.log(lettersInWord);
    console.log(currentWord);
    console.log("this is my letter in word" + lettersInWord);
})

// function guessWord() {

//     // currentWord = wordList[Math.floor(Math.random() * wordList.length)];
//     // lettersInWord = currentWord.split("");

// }

function pushDashes() {
    
    for (var i = 0; i < lettersInWord.length; i++) {
        var dash = document.createTextNode("_");
       
        var element = document.getElementById("currentWord");
        element.appendChild(dash);
    }
}
pushDashes();

function correctLetter(){
for ( var x = 0; x < lettersInWord.length; x++){

    var letterDash = $("<button>")
    $(letterDash).addClass("letter-button letter letter-button-color");
    letterDash.attr("data-letter",lettersInWord[x]);
    $("#buttons").append(letterDash);
}
}



// function guessedLetters (){
//     guessedLetters = correctGuess[i];
//     correctGuess = lettersInWord("");
// }
// guessedLetters();
// pushDashes();
// console.log ("this is a correct letter" + correctGuess);


// function numberOfGuesses(){
//     for (remainingGuesses; counter.length > 10; resetGame) {

// }


// }
// numberOfGuesses();




// function resetGame() {
//     remainingGuesses = 0

// }
// resetGame()
// console.log("all you used up guesses" + counter)





// if (guessedLetters === correctGuess[i]) {
//     let lettersInWord = document.createElement('p');
//     lettersInWord.textContent = guessedLetters[i];
//     guessedLetters.appendChild(lettersInWord);
// }

// else {
//     guessedLetters.push(guessedLetters);
//     console.log(guessedLetters);
// }

// document.onkeyup = function (event) {
//     keyPressed = event.key.toLowerCase();
//     for (var i; i < guessedLetters.length; i++) {
//         if (keyPressed === guessedLetters[i]) {
//             alert("You've already tried that letter");
//         } else {
//             guessedLetters.push(keyPressed);
//             console.log(guessedLetters);
//         }


//     }
// }


