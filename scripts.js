function clickFunction () {
    document.addEventListener(getElementByClass('box').style)
    console.log("hello")
}

document.querySelector("#box").addEventListener("click", function(event) {
    console.log("box has been clicked")
    console.log(event.target)
    event.target
})


const box = Array.from(document.querySelectorAll(".box"))
const WorL = docuuemnt.querySelector("#winorlose")
const RESET = document.querySelector("#CLEAR")

let BoardThing = ["", "", "", "", "", "", "", "",""]


const WinConditions = [
    [0,1,2],
    [1,4,7],
    [3,4,5],
    [2,5,8],
    [0,3,6],
    [6,7,8],
    [0,4,8],
    [2,4,6]
];

const Clicked = (boxes)

let currentPlayer= "x";

function startGame() {

}
function restartGame() {
    clearButton.addEventListener('click', resetBoard)

}

const PlayerXWins="Player X Won"
const PlayerOWins="Player O Won"
const tie ="tie"

let RoundWon=false;
for (let i =0; i<=7; i++) {
    const winCon = WinConditions[i];
    

}


