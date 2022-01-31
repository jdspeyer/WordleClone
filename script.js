let guesses = 0;
let lettersCorrect = 0;
let word = "";
setUpGame();

/**
 * setUpGame
 * 
 * Sets up the game by reseting the total guesses that the user has
 * and picks a new word.
 */
function setUpGame() {
    word = dictionary[Math.floor(Math.random() * dictionary.length)];
    console.log("Word to guess: " + word);

    guesses = 0;
    lettersCorrect = 0;
}

/**
 * getGuess
 * 
 * Gets the users guess from the text field and checks to ensure that it is valid.
 * Checks preformed befroe subtracting a guess from the user:
 * 
 * 1. Does the word contain illegal characters? (Numbers, punctuation, etc.)
 * 2. Is the word in the dictionary?
 **/
async function processGuess() {
    let guess = document.getElementById('userGuess').value;

    let validWord = checkIllegalChars(guess);
    let inDictionary = checkDictionary(guess);

    if (validWord && guess.length > 4 && inDictionary) {
        let choppedWord = word;
        for (let i = 1; i < 6; i++) {
            // Writes letter to the square
            let lettersSquareName = 'row' + (guesses + 1) + 'col' + i;
            let letterSquare = document.getElementById(lettersSquareName);
            let letterSquareText = document.getElementById(lettersSquareName).children[0];
            letterSquareText.innerHTML = guess.toUpperCase().at(i - 1);

            //Letter is not in the word
            if (!(choppedWord.toUpperCase().includes(guess.toUpperCase().at(i - 1)))) {
                letterSquare.style.backgroundColor = "var(--incorrect-guess)";
                letterSquare.style.borderColor = "var(--incorrect-guess)";
                letterSquare.classList.add("letterAnimation")
            }

            //Letter is in the correct spot
            else if (choppedWord.at(i - 1).toUpperCase() == guess.at(i - 1).toUpperCase()) {
                letterSquare.style.backgroundColor = "var(--correct-guess)";
                letterSquare.style.borderColor = "var(--correct-guess)";
                letterSquare.classList.add("letterAnimation")
                lettersCorrect += 1;
                choppedWord = choppedWord.replaceAt(i - 1, ".");
            }

            //Letter is in word but not in the correct spot
            else {
                letterSquare.style.backgroundColor = "var(--almost-guess)";
                letterSquare.style.borderColor = "var(--almost-guess)";
                letterSquare.classList.add("letterAnimation")
            }

            await sleep(0.3);
        }

        // Checks if the users guess was correct
        if (lettersCorrect == 5) {
            showAlert("Word Guessed!", "You guessed the word " + word + " in " + (guesses + 1) + " guesses. Click \"Dismiss\" to play again.");
            setUpGame();
            resetGameBoard();
        } else {
            lettersCorrect = 0; // Incorrect guess- reset the counter.
            guesses += 1;

            // Checks to see if the user lost
            if (guesses == 5) {
                showAlert("Out Of Guesses", "You were not able to guess the word " + "\"" + word + "\"" + " in 5 guesses. Click \"Dismiss\" to play again.");
                setUpGame();
                resetGameBoard();
            }
        }
    }

    /**
     * checkIllegalChars
     * 
     * Checks to ensure that the user provided valid input.
     * @param {*} userGuess a string that is passed in to check if it only contains letters
     * @returns boolean true or false. True if it is only letters, false if it contains anything else.
     */
    function checkIllegalChars(userGuess) {
        return /^[a-zA-Z]+$/.test(userGuess)
    }

    /**
     * checkDictionary
     * 
     * Checks to see if the users input exists in our dictionary.
     * @param {*} userGuess a string that is passed in to check if it is in the dictionary
     * @returns boolean true or false. True if it is in the dictionary, false if it is not in the dictionary.
     */
    function checkDictionary(userGuess) {
        let guess = userGuess.at(0).toLowerCase() + userGuess.slice(1).toLowerCase();
        return dictionary.includes(guess);
    }

    /**
     * resetGameBoard
     * 
     * Resets the gameboards contents for the next game.
     */
    function resetGameBoard() {
        let resetLetter = "";
        for (let i = 1; i < 6; i++) {
            for (let j = 1; j < 6; j++) {
                let lettersSquareName = 'row' + i + 'col' + j;
                let letterSquare = document.getElementById(lettersSquareName);
                letterSquare.classList.remove("letterAnimation");
                let letterSquareText = document.getElementById(lettersSquareName).children[0];
                letterSquareText.innerHTML = resetLetter;
                letterSquare.style.backgroundColor = "var(--background-color)";
                letterSquare.style.borderColor = "var(--incorrect-guess)";
            }
        }
    }
}