//Random Number Guessing Game: Develop a program that generates a random number between 1 and 100. 
//Allow the user to guess the number and provide feedback on whether the guess is too high, too low, or correct. 
//By the way, please, for the graded Assignment, do not use Prompt else, i will mark as 0.

function numGenerator(guessedNum) {
    let num = Math.floor(Math.random() * 100 + 1);

    if (!isNaN(guessedNum) && guessedNum >= 1 && guessedNum <= 100) {
        if (guessedNum === num) {
            return "Correct! You Won!";
        } else if (guessedNum > num) {
            return "Too High! Try again!";
        } else {
            return "Too Low! Try again!";
        }
    } else {
        return "Please guess a number between 1 and 100.";
    }
}

