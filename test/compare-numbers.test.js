// IMPORT MODULES under test here:
// import example from '../src/example.js';

const test = QUnit.test;
import compareNumbers from '../compare-numbers.js';


test('test if guess is to low', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const guess = 5;
    const correctNumber = 10;
    const expected = -1;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = compareNumbers(guess, correctNumber);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected, result);
});

test('test if guess is to high', function(assert) {
    const guess = 7;
    const correctNumber = 5;
    const expected = 1;

    const result = compareNumbers(guess, correctNumber);

    assert.equal(expected, result);
});

test('test if guess equals the number', function(assert) {
    const guess = 10;
    const correctNumber = 10;
    const expected = 0;

    const result = compareNumbers(guess, correctNumber);

    assert.equal(expected, result);
});

