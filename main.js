//DEFINE VARIABLES - set up the variables we need to store the data our program will use. Variable are containers for values.
//variable to assign a random number between 1 and 100
var randomNumber = Math.floor(Math.random() * 100) + 1;

//these 3 variables store a reference to the results parahraphs in the HTML, and are used to insert valies into the paragraphs later in the the code. 
var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHigh = document.querySelector('.lowOrHi');

// these 2 variables store references to the form text input and submit button and are used to control submitting the guess later on.
var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');

// these 2 variables are used to keep track of the guesses, and reset the game 
var guessCount = 1;
var resetButton;

//FUNCTIONS
function checkGuess() {
    alert("I am a placeholder");
}



//OPERATORS 