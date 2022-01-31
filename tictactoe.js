window.addEventListener('DOMContentLoaded', () => {
    const playerTurn = document.querySelector(".player");
    const board = document.querySelector("#board");
    const result = document.querySelector("#result");
    const resultText = document.querySelector("#result-text");
    const boxes = document.querySelectorAll(".box");
    const restartGame = document.querySelector("#restartButton");
})

let playerX = 'X';
let playerO = 'O';
let isGameActive = true;
const combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];

const swapTurn = () => {
    playerTurn.classList.remove('player${playerX}');
    playerX = playerX === 'X' ? '0' : 'X';
    playerTurn.innerText = 'playerX';
    playerTurn.classList.add('player${playerX}');

boxes.forEach( (box, index) => {
    box.addEventListener('click', () => boxSelected(box, index));
});



                const boxSelected = (box, index) => {
                    if(isValidMark(box) && isGameActive) {
                        box.innerText = 'playerX';
                        box.classList.add('player${playerX}');
                        boxMarked(index);
                        resultControl();
                        swapTurn();
                    }
                } 
 const isValidMark = (box) => {
     if(box.innerText === 'X' || box.innerText === 'O') {
         return false;
     }
     return true;
 };