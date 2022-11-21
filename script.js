//VARIABLES

// variable selecting all of the class name cell tags
const cells = document.querySelectorAll(".cell");

// variable selecting gameOutput id that announces game status//statusText
const statusText = document.querySelector("#statusText")

//  variable selecting reset button that resets the game board function
const restartBtn = document.querySelector("#restartGame")

//variable 2d array that shows all of the winning condition combonations
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
//variable//options array of 9 empty strings to assign game selection options(place holders)
let options = ["", "", "", "", "", "", "", "", ""]

//variable player X starts first every time
let currentPlayer = 'X';

const winner = () => `The Winner Is ${currentPlayer}`;
const draw = () => `Cat's Game!`;


// variable//running boolean that will keep the game running for as long as the condtion is true
let running = false;

//FUNCTIONS

//initalize game eventListeners needed to listen for the event in our cells variable to begin game.
// 'forEach' cell that is clicked, addEventListener to cell.event will be 'click' and will callback function cellClick. resetbtn addEventListener will listen for click and run gameReset function.
// Output will return which players turn it is 



function gamStart() {

}
// cellClicked when we click on the cell, what is going to happen.'this' refers to whatever sell that is clicked.getAttribute cellIndex.
function cellClicked() {
    const cellIndex = this.getAttribute('cellIndex');
    // only want to input in cell if it is emptty
    //if our options at cellIndex does !NOT have an empty cell ||OR if the game is not Active then return and do nothing
    if (options[cellIndex] != "" || !running) {
        return;
    }
    updateCell(this, cellIndex);
    checkWinner();
}
//otherwise we would run the cellInput function to run 'this' from the cellIndex. and check the winnerStatus function.]

function updateCell() {

}
// updating placeholders at index is set to currentPlayer.text content will be changed when cell is clicked on.
//     updateCell 
// two parameters(cell, index)
function cellInput(cell) {


    changePlayer
    function playerChange() {


    }
    //checkWinner
    function checkWinner() {

        for (let i = 0)

}
    //restartGame
    function restartGame() {

    }