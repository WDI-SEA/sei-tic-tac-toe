
console.log("Linked")
//let boxes = gameBox.child;
//console.dir(gameBoxEl)
// declaring the variables
let user = 'X';
let computerInput = 'O';
let gameBoxEl = null;
let gameRecEl = null;
let resetBtnEl = null;
let startGame = true;
let endGame = true;
let selectBox = [];

// user inputs 







//adding event listner on the refresh 

document.addEventListener('DOMContentLoaded', () => {
    gameBoxEl = document.querySelector('#grid');
    resetBtnEl = document.querySelector('#button') 
   resetBtnEl.addEventListener('click', myFunction);
    gameBoxEl.addEventListener('click', myFunction)

})