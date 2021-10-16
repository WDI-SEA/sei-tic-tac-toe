const container = document.getElementById("board");
const boxArray = [];
const square = document.getElementsByClassName("square");
let nextMove = "x"
// playerOne will be 'x'
// playerTwo will be 'o'
const playerOne = ("x")
//console.log(playerOne)
const playerTwo = ("o")
// console.log(playerTwo)

// player one goes first and puts an x
// player two goes next and puts an o
// create an eventListener for a button click
//
document.createElement("p")
// const button = document.querySelector ("button");


document.getElementById("btn").addEventListener("click",();

// check for winning conditionals
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
    for (let i = 0; i < lines.length; i++)
        const
}

// write a conditional that will declare player one as the winner
// write a conditional taht will declare player two as the winner
// check for a tie


// create a loop that for the 9 boxes
for (let i = 0; i < 9; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    const square = new classSquare(div, index);
    container.appendChild(div)
    squareArray.push(square);
// create a p tag that will hold value 'x' or 'o'
    div.appendChild(document.createElement("p"));
}

console.log(squareArray);