//import

const guessedNum = document.getElementById('number-input');
const guessedValue = guessedNum.value;
const tryNum = document.getElementById('num-try');
const myButton = document.getElementById('button');
const output = document.getElementById('output');
const theNumber = (Math.ceil(Math.random() * 10) * 2);


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
        output.textContent = 'Incorrect Number';
    }
}



myButton.addEventListener('click', () => {
    checkCorrectNum();
    reduceTry();
    tryNum.textContent = numOfTry;
});




