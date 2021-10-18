const container = document.getElementById("board");
const boxArray = [];
const square = document.getElementsByClassName("square");
const playAgain = document.querySelector("#reload");
let numberOfBoxClicks = 0;
let nextMove = "x"
let isThereAWinner = false;
// playerOne will be 'x'
// playerTwo will be 'o'
const playerOne = ("X")
//console.log(playerOne)
const playerTwo = ("O")
// console.log(playerTwo)

// write a function that will check for winning conditionals
function winCombo() {
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],

    ];
    // write a for loop 
    for (let i = 0; i < lines.length; i++) {
        const arr1 = lines[i];
        let possibleWins = "";
        for (let j = 0; j < arr1.length; j++) {
            let paragraph = document.getElementById("p" + arr1[j]);   
            possibleWins = possibleWins + paragraph.innerText;
        }
        if (possibleWins === "ooo") {
            let winningMessage = document.getElementById("winningMessage");
            winningMessage.innerText = "player O wins!";
            isThereAWinner = true;
        } else if (possibleWins === "xxx") {
            let winningMessage = document.getElementById("winningMessage");
            winningMessage.innerText = "player X wins!";
            isThereAWinner = true;
        } 
    }
}
// listen for a click on the box
const onBoxClick = (boxId) => {
    // if all the boxes are clicked
    if (isThereAWinner === true || numberOfBoxClicks > 8) {
        return;
    }
    numberOfBoxClicks = numberOfBoxClicks + 1;
    // console.log("hello" + boxId);
    const playerChoice = document.getElementById("p" + boxId);
    console.log(playerChoice);
    playerChoice.innerText = nextMove;
    if (nextMove === "x") {
        nextMove = "o";
    } else { 
        nextMove = "x";
    }
    winCombo();
}
// write a function that will check for a tie
// let onBoxClick = (boxId) => {
//     if (isThereAWinner === false || numberOfBoxClicks > 8) {
//         return "it's a tie!";
//     }
// }
// write a function that will refresh the game when "play again" button is clicked
function reload() {
    reload = location.reload();
}
playAgain.addEventListener("click", reload, false);