var wordList= [

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
var correctGuess =[];          //input letter
var lettersInWord = [];                           
var wrongGuess;                //counter will count down by 1
var remainingGuesses;           //display how many guesses are left
//var gameOver;               //you win image or game over image
var gameStart;          //press the button to get started
var resetGame;
var wins;
var counter = 10;


function gameStart() {

    currentWord = wordList[Math.floor(Math.random() * wordList.length)];
    lettersInWord = currentWord.split("");
    
};
gameStart()
console.log("this is my current word" + currentWord)
console.log("this is my letter in word" +  lettersInWord)


for (remainingGuesses; counter.length < 10; resetGame){

}

for ( var i = 0; i < wordList.length; i++) {}

function guessedLetters (){
    guessedLetters = correctGuess[i];
    correctGuess = lettersInWord("");
}
guessedLetters()
console.log ("this is a correct letter" + correctGuess)

function resetGame(){
remainingGuesses = 0

}
resetGame()
console.log("all you used up guesses" + counter)





/*if (guessedLetters === correctGuess[i]) {
    let letter = document.createElement ('p');
        letter.textContent = guessedLetters[i];
        guessedLetters.appendChild(letter);

} 

else {
    guessedLetters.push(guessedLetters);
    console.log(guessedLetters);
}*/

/*document.onkeyup = function (event) {
    keyPressed = event.key.toLowerCase();
    for (var i; i < guessedLetters.length; i++) {
        if (keyPressed === guessedLetters[i]) {
            alert("You've already tried that letter");
        } else {
            guessedLetters.push(keyPressed);
            console.log(guessedLetters);
        }


    }
}*/


//for (lettersInWord; correctGuess; ){}





//if (guessedLetters[i] === currentWord[i])


