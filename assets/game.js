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
var correctGuess = [];      //input letter
var lettersInWord = [];     //each letter in word "split"
var wrongGuess;             //counter will count down by 1
var remainingGuesses;       //display how many guesses are left
//var gameOver;               //you win image or game over image
var gameStart;              //click the button to get started
var resetGame;
var wins;
var counter = 10;
var startBtn = $("#startBtn")

//Pseudo Code for Guessing Game:
// to start game - click on "Press the Button to Get Started!"
//computer will select a randomized word from wordList to place number of _ _ _ _ in currentWord div = word length
//Guess a letter - if correctGuess: correct letter will be added to correct spot of _ _ _ _ and log to Letters Guessed; 
//if wrongGuess then make counter count down by 1 - displayed on screen in Guesses Remaining
//if user guesses word in 10 tries or less, then win count goes up by 1
// if not, then game resets


function startGame() {

    currentWord = wordList[Math.floor(Math.random() * wordList.length)];
    lettersInWord = currentWord.split("");

};

startBtn.click(function () {

    startGame()
    pushDashes()
    letterGuessed();
    console.log(lettersInWord);
    console.log(currentWord);
    console.log("this is my letter in word" + lettersInWord);
})


function pushDashes() {

    for (var i = 0; i < lettersInWord.length; i++) {
        var dash = document.createTextNode("_");

        var element = document.getElementById("currentWord");
        element.appendChild(dash);
    }
}
pushDashes();

//Guess a letter - if correctGuess: correct letter will be added to correct spot of _ _ _ _ and log to Letters Guessed; 
//if wrongGuess then make counter count down by 1 - displayed on screen in Guesses Remaining


function letterGuessed() {
    for (var i = 0; i < lettersInWord.length; i++)
        var guessedLetters = $("<div>");
    guessedLetters.addClass("_")
    $(".lettersInWord").textContent = guessedLetters[i];
    guessedLetters.append(dash);

}
lettersGuessed();


if (guessedLetters === correctGuess) {

    $(".lettersInWord").textContent = guessedLetters[i];
    guessedLetters.append(dash);
}

else {
    guessedLetters.push(guessedLetters);
    console.log(guessedLetters);
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


