//import compareNumbers from '../compare-numbers.js';

const guessedNum = document.getElementById('number-input');
const guessedValue = guessedNum.value;
const tryNum = document.getElementById('num-try');
const myButton = document.getElementById('button');
const highOrLow = document.getElementById('high-or-low');
const theNumber = Math.ceil(Math.random() * 20);
const winLose = document.getElementById('win-lose');

console.log(theNumber);


let numOfTry = 4;

tryNum.textContent = numOfTry;


function reduceTry() {
    numOfTry -= 1;
}

function checkCorrectNum() {
    if (guessedValue > 0 && guessedValue < 21) {
        return true;
    } 
    else {
        highOrLow.textContent = 'Incorrect Number';
    }
}



myButton.addEventListener('click', () => {
    //convert guess to a number
    //compare the actual to the guessed number using func
    // if to hi or to low display message
        //decrement number of tries remaining
        // if no tries remaining , display the lose' msg
        // and disable game play
    // if it is correct guess , display the win msg
    // and disable game play
    checkCorrectNum();
    reduceTry();
    tryNum.textContent = numOfTry;
});




