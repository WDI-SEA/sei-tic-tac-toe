const gridSquare = document.querySelector(".grid-container")
const message = document.getElementById(".gameResults")
const resetButton = document.querySelector("#resetButton")
// let gridsquare = [" "," "," "," "," "," "," "," "," "]
let playerOne = "X"
let playerTwo = "O"
// gridSquare.addEventListener("onclick", () => {})
// // for (let i = 0; i < gridSquare.length; i++) {
//     const square = gridSquare[i]
//     square.addEventListener("onclick") 
//     square.innerHTML="X" || "O"
//     console.log(gridSquare)
//}
gridSquare.addEventListener("click", function () {
    if (playerOne % 2 === 0) {
        gridSquare.innerText = "O"
    } else if (playerTwo %2 !== 0) {
        gridSquare.innerText = "X"
    
        console.log("x" || "O")
    };
})
resetButton.addEventListener("click",function restartGame() {
    gridSquare = [" "," "," "," "," "," "," "," "," "]
})



const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

