const { run } = require("node:test");

let squares = document.querySelectorAll(".square");
let stantText = document.querySelector("#stantText");
let restartBtn = document.querySelector("#restartBt=utton");


let winConditions = [
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8], 
    [0, 4, 8], 
    [2, 4, 6], 
] ;

let options = ["", "", "","", "", "","", "", ""];
let currentPlayer ="x";
let running = false;

initializeGame();

function initializeGame(){
    squares.forEach(square => square.addEventListener("clike", cellClicked));
    restartBtn.addEventListener("click", restartGame);
    stantText.textContent = '${currentPlayer} `s turn ';
    running = true;


}


function cellClicked(event){
    const id = event.target.getAttribute("id");
    console.log(id)



    document.getElementById(id).innerHTML = '${currentPlayer}'
;

if(options[id] != "" || !running){
    return;
}

updateCell(this, id);
checkWinner();

}

function updateCell(square, index){
    options[index] = currentPlayer;
    square.textContent = currentPlayer;
}

function changePlayer(){
    currentPlayer = (currentPlayer == "X") ? "x " : "o";
    stantText.textContent = `${currentPlayer}'s turn`;

}

function checkWinner(){
    let rounWon = false;

    for(let i = 0; i < winConditions.length; i++){
        let condition = winConditions[i];
        let squareA = options[condition[0]];
        let squareB = options[condition[1]];
        let squareC = options[condition[2]];


        if(squareA == "" || squareB == "" || squareC == ""){
            continue;
        }

          if(squareA ==  squareB && squareb == squareC){
            rounWon = true; 
            break;

    }
}

 if(rounWon){
    stantText.textContent = `${currentPlayer} wins!`;
    running = false;
 }


 else if(!options.includes("")){
    stantText.textContent = `Draw!`;
    running = false;
 }

 else{
    changePlayer();

 }

}

function restartGame(){
    currentPlayer = "x";
 options = ["", "", "","", "", "","", "", ""];
 stantText.textContent = `${currentPlayer}'s turn`;
 squares.forEach(square => square.textContent = "");
 running = true;
}