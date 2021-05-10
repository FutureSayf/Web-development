'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'correct Number!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;
let x = 20;
console.log(x);

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);



    if (!guess) {
        document.querySelector('.message').textContent =
            'No Number!';
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent =
            'Correct Number!';
    } else if (guess > secretNumber) {
        document.querySelector('.message').textContent =
            'Too high!';
        x--;
        document.querySelector('.score').textContent = x;

    } else if (guess < secretNumber) {
        document.querySelector('.message').textContent =
            'Too low!';
        x--;
        document.querySelector('.score').textContent = x;
    }

});
