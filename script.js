const grids = document.querySelectorAll("#grid")
const resetButton = document.querySelector("#reset")
const display = document.querySelector(".indicator")
const combinations = [
    [0, 1, 2], [0, 4, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]
]
let gridSpace = ["", "", "", "", "", "", "", "", ""]
let player1 = "X"
let gameOn = false;
startGame();
function startGame(){
    grids.forEach(grid => grid.addEventListener("click", gridClick));
    resetButton.addEventListener("click", resetGrid);
    display.textContent=`it's player ${player1}'s turn!`
    gameOn = true;
}
function gridClick(){
    const gridIndex = this.getAttribute("gridIndex");
    if(gridSpace[gridIndex]!= "" || !gameOn){
        return;
    } 
    gridUpdate(this, gridIndex);
    player2();
    announceWinner();
}
function gridUpdate(grid, index){
    gridSpace[index] = player1;
    grid.textContent = player1;

}
function player2(){
    player1 = (player1 == "X") ? "O" : "X";
    display.textContent = `it's player ${player1}'s turn!`;
}
function announceWinner(){
    let firstRound = false;
    for(let i = 0; combinations.length; i++){
        const combination = combinations[i];
        const grid1 = gridSpace[combination[0]];
        const grid2 = gridSpace[combination[1]];
        const grid3 = gridSpace[combination[2]];
        if(grid1 == "" || grid2 == "" || grid3 == ""){
            continue;
        }
        if(grid1 == grid2 && grid2 == grid3){
            firstRound = true;
            break;
        }
    }
    if(firstRound){
        display.textContent = `Player ${player1} wins! let goo`;
        gameOn = false;
    }
    else if(!gridSpace.includes("")){
        display.textContent = "You both lose:(";
        gameOn = false;
    }
    else{
        player2();
    }
}
function resetGrid(){
    player1 = "X";
    gridSpace = ["", "", "", "", "", "", "", "", ""];
    display.textContent = `it's player ${player1}'s turn!`;
    grids.forEach(grid => grid.textContent = "");
    gameOn = true;
}