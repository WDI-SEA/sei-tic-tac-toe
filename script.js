

const box = document.querySelectorAll(".Box");
const Status = document.querySelector("#Status");
const restart = document.querySelector("#restart");
const winConditions = [
    [0, 1, 2],[3, 4, 5], [6, 7, 8],[0, 3, 6],[1, 4, 7], [2, 5, 8], [0, 4, 8],  [2, 4, 6]];
let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let WORKED = false;

STARTGame();

function STARTGame(){
    box.forEach(box => box.addEventListener("click", boxClicked));
    restart.addEventListener("click", restartGame);
    Status.textContent = `${currentPlayer}'s turn`;
    WORKED = true;
}
function boxClicked(){
    const boxIndex = this.getAttribute("boxIndex");

    if(options[boxIndex] != "" || !WORKED){
        return;
    }

    updatebox(this, boxIndex);
    checkWinner();
}
function updatebox(box, index){
    options[index] = currentPlayer;
    box.textContent = currentPlayer;
}
function changePlayer(){
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    Status.textContent = `${currentPlayer}'s turn`;
}
function checkWinner(){
    let roundWon = false;

    for(let i = 0; i < winConditions.length; i++){
        const condition = winConditions[i];
        const BoxA = options[condition[0]];
        const BoxB = options[condition[1]];
        const BoxC = options[condition[2]];

        if(BoxA == "" || BoxB == "" || BoxC == ""){
            continue;
        }
        if(BoxA == BoxB && BoxB == BoxC){
            roundWon = true;
            break;
        }
    
        }

    if(roundWon){
        Status.textContent = `${currentPlayer} wins 😎!`;
        WORKED = false;
    }
    else if(!options.includes("")){
        Status.textContent = `IT'S A DRAW 🤷🏻‍♀️!`;
        WORKED = false;
    }
    else{
        changePlayer();
    }
}
function restartGame(){
    currentPlayer = "X";
    options = ["", "", "", "", "", "", "", "", ""];
    Status.textContent = `${currentPlayer}'s turn`;
    box.forEach(box => box.textContent = "");
    WORKED = true;
}
