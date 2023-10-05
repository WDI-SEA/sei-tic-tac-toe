/*----- constants -----*/
const COLORS = {
    "0": "white",
    "1": "Blue",
    "2": "Red"
}

/*----- state variables -----*/
let borad;
let turn = 1; //1 blue or 2 red
let winner; // null = no winner; 1 o 2 = winner; tie = T
let playerOne;
let playerTwo;

/*----- cached elements  -----*/
const intructionsEl = document.getElementById("intructions");
const resetBtnEl = document.getElementById("reset");
/*----- event listeners -----*/
document.getElementById("field").addEventListener("click", pickSpot);

/*----- functions -----*/
function init(){
    borad =
[
[0,0,0],
[0,0,0],
[0,0,0],
];
//set players turn
winner = null;
render();
}

function render(){
    clearBoard();
    renderMessage();
    renderControls()
    pickPlayer();
}

function renderMessage(){
    if(winner==="T"){
        intructionsEl.innerText = "It's a Tie";
    }
    else if(winner === 1) {
        intructionsEl.innerHTML = `<span style="color: ${COLORS[winner]};">${COLORS[winner].toUpperCase()}'s} Wins</span>`
    } 
    else {
        intructionsEl.innerHTML = `<span style="color: ${COLORS[turn]};">${COLORS[turn].toUpperCase()}'s Turn</span>`
    }
}

function pickPlayer(){

}
function renderControls(){
    resetBtnEl.style.visibility = winner ? "visible": "hidden";
}

function clearBoard(){
    borad.forEach(function(colArr, colInx) {
        colArr.forEach(function(cellVal,rowIdx) {
            const cellId = `r${rowIdx}c${colInx}`;
            const cellEl = document.getElementById(cellId);
            cellEl.style.backgroundColor = COLORS[cellVal];
        });
    });
}

function pickSpot(evt){
    console.dir(evt.target.id);

    if(evt.target.id==="field" || winner) return;
    let row =[parseInt(evt.target.id.charAt(1),10)]
    let col =[parseInt(evt.target.id.charAt(3),10)]
    borad[row][col] = turn;

    let marker = document.createElement('p');
    if(turn===1){
        marker.innerHTML = "<strong>O</strong>"
        marker.setAttribute("class",`p${turn}`)
    }
    else if(turn === 2){
        marker.innerHTML = "<strong>X</strong>"
        marker.setAttribute("class",`p${turn}`)
    }
    turn = 
    render();
}