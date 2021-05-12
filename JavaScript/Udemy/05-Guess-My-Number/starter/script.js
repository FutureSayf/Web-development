'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'correct Number!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

let score = 20;

document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing... ';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

    console.log('again');
    console.log(secretNumber);
});

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    // When player loses
    if (!guess) {
        document.querySelector('.message').textContent =
            'No Number!';

        // When player wins
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent =
            'Correct Number!';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = 'green';

        document.querySelector('.number').style.width = '30rem';


        // When player too high
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent =
                'Too high!';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent =
                'you lost the game';
            document.querySelector('.score').textContent = 0;
        }
        // When too high
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent =
                'Too low!';
            score--;
            document.querySelector('.score').textContent = score;
        }
        // You lost the Game
        else {
            document.querySelector('.message').textContent =
                'you lost the game';
            // document.querySelector('body').style.backgroundColor = 'red';
            document.querySelector('.score').textContent = 0;
        }
    }

});
