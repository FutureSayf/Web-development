"use strict";
// Selecting elements
const shootButton = document.getElementById("gameShootButton");
const gameVoetbal = document.getElementById("gameVoetbal");
const resetButton = document.getElementById("gameResetButton");
const reloadButton = document.getElementById("gameReloadButton");
const speler1 = document.getElementById("player--0");
const speler2 = document.getElementById("player--1");
const player1Score = document.getElementById("player--0");
const gameText = document.getElementById('gameText');
let score = 0;
let play = true;
let activePlayer = 0;
let totalScore = [0, 0];

// Reload functionality
reloadButton.addEventListener('click', function () {
    location.reload();
})

// Reset functionality
resetButton.addEventListener("click", function () {
    // location.reload();
    play = true;
    switchPlayer();
    gameVoetbal.style.left = `47%`;
    gameVoetbal.style.bottom = `40px`;
    gameText.textContent = 'Penalty Shoot Out';
    gameText.style.color = "white";
});
// Switch player functionality
const switchPlayer = function () {
    activePlayer = activePlayer === 0 ? 1 : 0;
    speler1.classList.toggle("active");
    speler2.classList.toggle("active");


};
// ShootButton Functionality
shootButton.addEventListener("click", function () {
    const randomNumber = Math.trunc(Math.random() * 10) + 1;
    console.log("randomNumber:", randomNumber);
    if (play) {
        if (randomNumber <= 5) {

            const shootHeightCo = Math.trunc(Math.random() * 150 + 250);
            const shootWidthCo = Math.trunc(Math.random() * 460);
            // gameVoetbal.style.bottom = `40px`;
            gameVoetbal.style.left = `${shootWidthCo}px`;
            gameVoetbal.style.bottom = `${shootHeightCo}px`;

            document.getElementById(`player--${activePlayer}`).textContent++;
            // score += 1;
            // score++;
            score = document.getElementById(`player--${activePlayer}`).textContent;
            // document.getElementById(`player--${activePlayer}`).textContent = score;
            gameText.textContent = "GOALLLLLL";
            gameText.style.color = "yellow";
            play = false;
            // switchPlayer();

        }
        if (randomNumber > 5 && randomNumber <= 7) {
            const shootMissHeight = Math.trunc(Math.random() * 250) + 250;
            const shootMissLeft = Math.trunc(Math.random() * -450) - 50;
            gameVoetbal.style.left = `${shootMissLeft}px`;
            gameVoetbal.style.bottom = `${shootMissHeight}px`;

            switchPlayer();
        }
        if (randomNumber > 7) {
            const shootMissHeight = Math.trunc(Math.random() * 250) + 250;
            const shootMissRight = Math.trunc(Math.random() * -420) - 50;
            console.log(shootMissRight, shootMissHeight);
            gameVoetbal.style.right = `${shootMissRight}px`;
            // gameVoetbal.style.right = `-270px`;
            gameVoetbal.style.bottom = `${shootMissHeight}px`;
            // gameVoetbal.style.bottom = `327px`;
            gameText.textContent = "AHHHHHH YOU MISSED!";
            gameText.style.color = "red";
            switchPlayer();
        }
    }
    if (score == 5) {
        play = false;
        gameText.textContent = `We hebben een winaar Player: ${activePlayer} heeft gewonnen!`;

    }
});
// bottom maximum = 495px
// bottom max = -50px

// -270 327