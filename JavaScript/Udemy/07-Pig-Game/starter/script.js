'use strict';
// Buttons Game
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
// Current SCores
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
// Total Scores
const scores0El = document.getElementById('score--0');
const scores1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
// Start conditions
current0El.textContent = 0;
const totalScore = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

// Switch Player functionaliteit
const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active')
    player1El.classList.toggle('player--active')
}
// Dice Roller handler
btnRoll.addEventListener('click', function () {
    if (playing) {
        diceEl.classList.remove('hidden');
        const rollDice = Math.trunc(Math.random() * 6) + 1;
        console.log(rollDice);
        diceEl.src = `dice-${rollDice}.png`;

        currentScore += rollDice;
        if (rollDice !== 1) {
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
            // current0El.textContent = score;
        } else {
            switchPlayer();
        }
    }
})
// Hold button Handler
btnHold.addEventListener('click', function () {
    if (playing) {
        totalScore[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = totalScore[activePlayer];

        if (totalScore[activePlayer] >= 20) {
            playing = false;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        } else {
            switchPlayer();
        }
    }
});