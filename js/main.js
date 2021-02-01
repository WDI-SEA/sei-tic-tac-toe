/*----- constants -----*/
const INITIAL_MOVE = 'url(img/letter-x.png)';

/*----- Game Logic Variables and State -----*/
let gameOver = false
let firstMove = null
let boxesToClick = []
let boxState = {
    box1: false,
    box2: false,
    box3: false,
    box4: false,
    box5: false,
    box6: false,
    box7: false,
    box8: false,
    box9: false,
}
let winCombos = [
    [box1, box2, box3],
    [box4, box5, box6],
    [box7, box8, box9],
    [box1, box4, box7],
    [box2, box5, box8],
    [box3, box6, box9],
    [box1, box5, box9],
    [box3, box5, box7]
]
let currentPlayer = 'X';

/*----- DOM references -----*/
let backgroundEl = null
let gameGridEl = null;
let boxes = []
let resetBtnEl = null;
let messageBoxEl = null;

/*----- Function and Game Logic -----*/

function resetGame() {
    gameOver = false
    for(box of boxes) {
        box.src = null
    }
    backgroundEl.style.backgroundImage = null;
    initializeGame();
}

function initializeGame() {
    boxState = {
        box1: false,
        box2: false,
        box3: false,
        box4: false,
        box5: false,
        box6: false,
        box7: false,
        box8: false,
        box9: false,
    }
    boxesToClick = []
    gameOver = false;
    firstMove = INITIAL_MOVE;
    messageBoxEl = null;

    for (const box in boxState) {
        boxesToClick.push(box)
    }
}

function clickBox(event) {
    if(event.target === gameGridEl) return;
    console.log(`You clicked ${event.target.id}.`)

    let boxNumber = event.target.id;

    if(!gameOver && boxState[boxNumber] == false) {
        event.target.src = `img/letter-${currentPlayer}.png`
        boxState[boxNumber] = true;

        if (boxesToClick.includes(boxNumber)) {
            boxesToClick.splice(boxesToClick.indexOf(boxNumber), 1)
        }
            for (const combo in winCombos) {
                if(combo = true) {
                endGame(true);
                }
            }

    if(currentPlayer = 'X') {
        currentPlayer.replace = 'O'
    }else {
        currentPlayer.replace = 'X'
    }

    messageBoxEl.innerText = `${currentPlayer}, it's your turn!`

    if(boxesToClick.length == 0) {
        gameOver = true;
        messageBoxEl.innerText = `😺 Cat's game! 😺`
        backgroundEl.style.backgroundImage = 'url(img/cats.jpg)'
    }
}

function endGame(isGameWon) {
    gameOver = true;
    if(isGameWon && currentPlayer[playerLetter] == true)
        messageBoxEl.innerText = `The winner is ${playerLetter}!`
}

document.addEventListener('DOMContentLoaded', function() {
    backgroundEl = document.querySelector('body');
    gameGridEl = document.querySelector('#game-grid');
    boxes = gameGridEl.children;
    resetBtnEl = document.querySelector('#reset-button');
    messageBoxEl = document.querySelector('#message-box');

    resetBtnEl.addEventListener('click', resetGame);
    gameGridEl.addEventListener('click', clickBox);
    initializeGame();
}