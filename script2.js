//introduce variables
let playerScore;
let computerScore;

const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const reset = document.getElementById('resetButton')


//set game conditions
let turn = 0;
let gameOver = false;
//set computer initial state
let computerPlayer = {
    points: 0,
    currentChoice: null,
}
//set player initial state
let humanPlayer = {
    points: 0,
    currentChoice: null,
}


//array for boxes to be filled

let boxesToFill = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

//array for winning combinations
//i learned this from TA Karly
const winCombos = [
    ["one", "five", "nine"], 
    ["one", "two", "three"], 
    ["three", "six", "nine"], 
    ["two", "five", "eight"], 
    ["one", "four", "seven"], 
    ["four", "five", "six"], 
    ["three", "five", "seven"], 
    ["seven", "eight", "nine"]
    ];


//function to check if turn is human or computer
function getTurn() {
    if (turn % 2 === 0) {
        return true;
    } else {
        return false;
    }
    }

//function for computer to choose randomly math.floor/math.random
function getRandomChoice() {
    const randomIndex = Math.floor(Math.random * boxesToFill.length)   
    const randomChoice = boxesToFill[randomIndex];
    return randomChoice;
}

//function for player choice
//function for computer choice
//function to update game board
//function to restart the game
/* 
*/
//eventListeners
one.addEventListener("click", test)
function test () {
    console.log("i clicked one")
}

//winning conditions