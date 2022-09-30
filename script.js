const cells = document.querySelectorAll(".dash")
const messg = document.querySelectorAll(".msg")
const restbutton = document.querySelectorAll(".style-button")
const winner = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

let choices = [" " , " " , " ", " ", " "," ", " ", " ", " " ]
let currentPlyr = "X" ;
let run = false;


function startGame() {
    cells.forEach(dash => dash.addEventListener("click" , chose))
    restbutton.addEventListener("click" , resetGame)
    
}


function chose() {



}

function update() {



}
function changeRole () {


}

function winning() {


}


function resetGame () {



}

