let gameActive = true
let currentPlayer = "X"
const clickOne = document.querySelector("#squareOne")
const clickTwo = document.querySelector("#squareTwo")
const clickThree = document.querySelector("#squareThree")
const clickFour = document.querySelector("#squareFour")
const clickFive = document.querySelector("#squareFive")
const clickSix = document.querySelector("#squareSix")
const clickSeven = document.querySelector("#squareSeven")
const clickEight = document.querySelector("#squareEight")
const clickNine = document.querySelector("#squareNine")
const reset = document.querySelector("#reset-button")
let turnCounter = 1;



// Turn counter that keeps track of whether it is X's turn or O's turn
const changeTurn = () => {
   if(turnCounter === 0){
       currentPlayer="X";}else if (turnCounter ===1) {
           currentPlayer="O";} else if (turnCounter ===2) {currentPlayer="X"}else if (turnCounter===3) {currentPlayer="O"}else if (turnCounter ===4) {currentPlayer="X"}else if (turnCounter===5) {currentPlayer="O"}else if (turnCounter ===6) {currentPlayer="X"}else if (turnCounter===7) {currentPlayer="O"}
           else if (turnCounter ===8) {currentPlayer="X"}else if (turnCounter===9) {currentPlayer="O"};
               

           
    
           turnCounter++;
           console.log(turnCounter)
       }


    //    Event listeners that change from a blank box to an x or o
clickOne.addEventListener("click", () => {
    changeTurn()
    document.getElementById('squareOne').innerText = currentPlayer
});


clickFive.addEventListener("click", () => {
    changeTurn()
    document.getElementById('squareFive').innerText = currentPlayer
});


clickFour.addEventListener("click", () => {
    changeTurn()
    document.getElementById('squareFour').innerText = currentPlayer
});


clickThree.addEventListener("click", () => {
    changeTurn()
    document.getElementById('squareThree').innerText = currentPlayer
});


clickTwo.addEventListener("click", () => {
    changeTurn()
    document.getElementById('squareTwo').innerText = currentPlayer
});


clickSix.addEventListener("click", () => {
    changeTurn()
    document.getElementById('squareSix').innerText = currentPlayer
});


clickSeven.addEventListener("click", () => {
    changeTurn()
    document.getElementById('squareSeven').innerText = currentPlayer
});


clickEight.addEventListener("click", () => {
    changeTurn()
    document.getElementById('squareEight').innerText = currentPlayer
});


clickNine.addEventListener("click", () => {
    changeTurn()
    document.getElementById('squareNine').innerHTML = currentPlayer
});


// Reset Button, Just reloads the page
reset.addEventListener("click", () => {
    location.reload();
});