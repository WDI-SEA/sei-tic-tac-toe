const cells = document.querySelectorAll(".cell")
const msg = document.querySelector(".msg")
const restbutton = document.querySelector(".style-button")
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

let choices = ["" , "" , "", "", "","", "", "", "" ];
let currentPlyr = "X" ;
let run = false;

startGame();

function startGame() {
    cells.forEach(cell => cell.addEventListener("click" , chose));
    restbutton.addEventListener("click" , resetGame);
    msg.textContent = `${currentPlyr}'s turn`;
    run = true;
}


function chose() {
    const cellIndex = this.getAttribute("cellIndex");
    
    if(choices[cellIndex] != "" || !run) {
        return;
    }

    update(this , cellIndex);
    changeRole();
    winner();
}

function update(cell , index) {
    choices[index] = currentPlyr;
    cell.textContent = currentPlyr;
}

function changeRole () {
    currentPlyr = (currentPlyr == "X") ? "O" : "X";
    msg.textContent = `${currentPlyr}'s turn`;


}

function winning() {
    let Win = false;

    for(let i = 0; i < winner.length; i++) {
        const cond =  winner[i] ;
        const cellA = choices[cond[0]];
        const cellB = choices[cond[1]];
        const cellC = choices[cond[2]];

        if(cellA == "" || cellB == "" || cellC == "") {
            continue;
        }
        if(cellA == cellB && cellB == cellC ){
            Win = true;
            break;
        }
    }
        if(Win) {
            msg.textContent = `${currentPlyr}'s Wins!` ;
            run = false ;
        }
        else if (!choices.includes("")) {
            msg.textContent = "Draw!";
            run = false;
        }
        else{
            changeRole();
        }
    }



function resetGame () {
    currentPlyr = "X";
    choices = ["" , "" , "", "", "","", "", "", "" ];
    msg.textContent = `${currentPlyr}'s turn!` ;
    cells.forEach(cell => cell.textContent = "");
    run = true ;
}

