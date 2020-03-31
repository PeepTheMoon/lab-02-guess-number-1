# lab-02-guess-number
Create an app that allows the user four guesses to find a number between 1 and 20 inclusive (including "1" and "20"). After each incorrect guess, tell them whether 
their guess was "too high" or "too low". If they guess correct, or use up all 
their guesses, disable further input and display an end lose or win message.

---

## Steps

### Make a New Branch

Be on `master` and make a new branch for today's lab (like
`git checkout -b dev`)

### Design the App  DONE!!!

Using HTML and CSS, design the look and feel of the guessing game. At a minimum you
will need:
1. Page layout (title, header, etc.)
1. Explain the rules to the user
1. An input of type number for specifying the guess
1. A button to click to submit the guess
1. Display of number of tries remaining
1. Display of guess too high or too low
1. Display of lose and win result

### TDD `compareNumbers` Function

We will need to know whether the user's guess is correct, too low, or too high.

TDD a `compareNumbers` function that:
1. Has two parameters: `guess` and `correctNumber`
1. Returns one of the following values:
   - `0` - the numbers are identical
   - `-1` - the guessed number is too low
   - `1` - the guessed number is too high

Write one test at a time, each test should address one of the three possible outcomes.

You can assume _valid input_, meaning the passed input will always be a number.

SUPER STRETCH: Actually test for invalid input. You should throw an error if either parameter is not a number. Consult the QUnit docs for how to test for an exception.

### App

Add an `app.js` file that is included via `<script>` tag.

Basic module structure:
1. Get and store into variables all the DOM elements you will need to either
read or write from.
2. Define variables and initial values for "state". Be aware of whether the values will change over the life of the App (`let`) or will stay the same (`const`). 
   - Don't forget to define a variable with the correct number!
3. Define an event handler functions on appropriate DOM element(s).

Basic Logic Flow:

1. Convert guess to a number
1. Compare guessed number to actual number using `compareNumbers`
   - Guess too high or low?
      1. Display message
      1. Decrement tries remaining
         - No tries remaining?
            1. Display lose message
            1. Disable game play
   - Correct guess?
      1. Display win message
      1. Disable game play
