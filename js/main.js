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
//document.getElementById("pickPlayer").addEventListener("click",charSelect);

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
//need code to wait till button is clicked
//charSelect();
render();
}

function render(){
    renderBoard();
    renderMessage();
    renderControls()
}

function renderMessage(){
    if(winner==="T"){
        intructionsEl.innerText = "It's a Tie";
    }
    else if(winner === 1||winner === -1) {
        intructionsEl.innerHTML = `<span style="color: ${COLORS[winner]};">${COLORS[winner].toUpperCase()}'s WINS!</span>`
    } 
    else {
        intructionsEl.innerHTML = `<span style="color: ${COLORS[turn]};">${COLORS[turn].toUpperCase()}'s Turn</span>`
    }
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
    //console.dir(evt.target.id);

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

    //winner = getWinner(rowIdx,colIdx);
    //isWinner();
    render();
}

function getWinner(){
    return checkVerticalWin(rowIdx,colIdx);
}
function isWinner(){
    if((vertWin() === false)){
        if((horzWin() === false)){
            diagWin();
        }
    }
}
function vertWin(){
    for(let i=0; i<3;i++){
        for(let j=0;j<3;j++){
            if((borad[i][j]&&borad[i][j]&&borad[i][j] === 1)){
                winner = 1;
                return true;
            }
            else if((borad[i][j]&&borad[i][j]&&borad[i][j] === -1)){
                winner = -1;
                return true;
            }
            else{
                return false;
            }
        }
    }
}

function horzWin(){
    for(let i=0; i<3;i++){
        for(let j=0;j<3;j++){
            if((borad[j][i]&&borad[j][i]&&borad[j][i] === 1)){
                winner = 1;
                return true;
            }
            else if((borad[j][i]&&borad[j][i]&&borad[j][i] === -1)){
                winner = -1;
                return true;
            }
        }
    }
}

function diagWin(){
    if((borad[0][0]&&borad[1][1]&&borad[2][2] === 1)){
        winner = 1;
        return true;
    }
    else if((borad[0][0]&&borad[1][1]&&borad[2][2] === -1)){
        winner = -1;
        return true;
    }
    else if((borad[0][2]&&borad[1][1]&&borad[2][0] === 1)){
        winner = 1;
        return true;
    }
    else if((borad[0][2]&&borad[1][1]&&borad[2][0] === -1)){
        winner = -1;
        return true;
    }
    // else{
    //     return false;
    // }
}

function charSelect(evt){
    if(evt.target.id==="field"){
        return;
    }
    else if(evt.target.id==="x"){
        turn = -1;
        document.getElementById("pickPlayer").style.visibility = winner ? "visible": "hidden";
    }
    else if(evt.target.id==="o"){
        turn = 1;
        document.getElementById("pickPlayer").style.visibility = winner ? "visible": "hidden";
    }
}


// function checkVerticalWin(rowIdx,colIdx){
//     return countAdjacent(rowIdx,colIdx, 0, -1) === 2 ? borad[rowIdx,colIdx] : null;
// }

// function countAdjacent(rowIdx,colIdx, rowOffset, colOffset){
//     const players = borad[rowIdx][colIdx];
//     let count = 0;

//     while(){

//     }
//     console.log(players)
// }

init();