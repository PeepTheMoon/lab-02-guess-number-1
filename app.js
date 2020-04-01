import compareNumbers from '../compare-numbers.js';

const guessedNum = document.getElementById('number-input');
const guessedValue = guessedNum.value;
const tryNum = document.getElementById('num-try');
const myButton = document.getElementById('button');
const highOrLow = document.getElementById('high-or-low');
const theNumber = Math.ceil(Math.random() * 20);
const winLose = document.getElementById('win-lose');
const newNum = Number(guessedValue);


console.log(theNumber);


let numOfTry = 4;

tryNum.textContent = numOfTry;


function reduceTry() {
    numOfTry -= 1;
}

function goodNumber() {
    if (newNum > 0) {
        highOrLow.textContent = 'greater than zero!';
    }
}


myButton.addEventListener('click', () => {
    //convert guess to a number
    const newResults = compareNumbers(newNum, theNumber);
    console.log(newResults);
    if (newResults === 0) {
        winLose.textContent = 'Winner';
    } else if (newResults === 1) {
        winLose.textContent = 'Too high';
    } else if (newResults === -1) {
        winLose.textContent = 'Too low';
    }


    //compare the actual to the guessed number using func
    // if to hi or to low display message
        //decrement number of tries remaining
        // if no tries remaining , display the lose' msg
        // and disable game play
    // if it is correct guess , display the win msg
    // and disable game play
    goodNumber();
    reduceTry();
    tryNum.textContent = numOfTry;
});




