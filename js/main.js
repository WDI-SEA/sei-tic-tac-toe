/*----- constants -----*/
const COLORS = {
    "0": "white",
    "1": "royalblue",
    "-1": "tomato"
}

/*----- state variables -----*/
let borad;
let turn = 1; //1 blue or -1 red
let winner; // null = no winner; 1 o -1 = winner; tie = T
let playerOne;
let playerTwo;

/*----- cached elements  -----*/
const intructionsEl = document.getElementById("intructions");
const resetBtnEl = document.getElementById("reset");
/*----- event listeners -----*/
document.getElementById("field").addEventListener("click", pickSpot);
resetBtnEl.addEventListener("click",init);

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
    renderBoard();
    renderMessage();
    renderControls()
    pickPlayer();
}

function renderMessage(){
    if(winner==="T"){
        intructionsEl.innerText = "It's a Tie";
    }
    else if(winner === 1) {
        intructionsEl.innerHTML = `<span style="color: ${COLORS[winner]};">${COLORS[winner].toUpperCase()}'s WINS!</span>`
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

function renderBoard(){
    borad.forEach(function(colArr, colIdx) {
        colArr.forEach(function(cellVal,rowIdx) {
            const cellId = `r${rowIdx}c${colIdx}`;
            const cellEl = document.getElementById(cellId);
            cellEl.style.backgroundColor = COLORS[cellVal];
            if(cellEl.firstChild){
                cellEl.removeAttribute(backgroundColor);
                //cellEl.removeChild(cellEl.firstChild)
            }
        });
    });
}

function pickSpot(evt){
    console.dir(evt.target.id);

    if(evt.target.id==="field" || winner) return;
    let col =[parseInt(evt.target.id.charAt(1),10)]
    let row =[parseInt(evt.target.id.charAt(3),10)]
    borad[row][col] = turn;

    let marker = document.createElement('p');
    if(turn===1){
        //marker.innerHTML = "<strong>O</strong>"
        marker.setAttribute("class",`p${turn}`)
        //append to
        //evt.target.append(marker);
    }
    else if(turn === -1){
        //marker.innerHTML = "<strong>X</strong>"
        marker.setAttribute("class",`p${turn}`)
        //append to
        //evt.target.append(marker);
    }
    turn *= -1;

    winner = getWinner(rowIdx,colIdx);

    render();
}

function getWinner(){
    return checkVerticalWin(rowIdx,colIdx);
}

function checkVerticalWin(rowIdx,colIdx){
    return countAdjacent(rowIdx,colIdx, 0, -1) === 2 ? borad[rowIdx,colIdx] : null;
}

function countAdjacent(rowIdx,colIdx, rowOffset, colOffset){
    const players = borad[rowIdx][colIdx];
    console.log(players)
}

init();