//variables
let r1B1 = document.getElementById('R1B1');
let r1B2 = document.getElementById('R1B2');
let r1B3 = document.getElementById('R1B3');
let r2B1 = document.getElementById('R2B1');
let r2B2 = document.getElementById('R2B2');
let r2B3 = document.getElementById('R2B3');
let r3B1 = document.getElementById('R3B1');
let r3B2 = document.getElementById('R3B2');
let r3B3 = document.getElementById('R3B3');
let gameBoard = [r1B1,r1B2,r1B3,
                 r2B1,r2B2,r2B2,
                 r3B1,r2B3,r3B3];



let gameTracker = document.querySelector('.Tic-Tac-Toe');
let resetGame = document.querySelector('.reset');
let playerTurn = document.querySelector('.playerturn');
let CountClicks = 0;
let startGame = document.querySelector('.start-button');
// //event listeners

startGame.addEventListener("click", function() {
    console.log('hi')
});

gameTracker.addEventListener("click", function() {
    CountClicks += 1;
    // console.log(CountClicks);
    if (CountClicks % 2 == 0) {
        playerTurn.innerText = 'Player 1 make your move!'
    } else {
        playerTurn.innerText = 'Player 2 make your move!'
    }
    
});