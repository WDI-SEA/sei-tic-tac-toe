// document.addEventListener('DOMContentLoade', () => {
    const cells = document.querySelectorAll('.cell'); //tiles
    const textOutput = document.querySelector('#textOutput'); //announcer
    const resetBtn = document.querySelector('#resetBtn') //reset
    
    let X = "X"
    let board = ["", "", "", "", "", "", "", "", ""]; // //variable//options array of 9 empty strings to assign game selection options(place holders)
    let currentPlayer = 'X';   //variable player X starts first every time
    let gameRunning = false;

    //end game state
    // const playerXWin = 'PLAYER X WINS';
    // const playerOWin = 'PLAYER O WINS';
    // const tie = 'CATS GAME';


    //variable 2d array that shows all of the winning condition combonations
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    //event listener added to each cell/ userAction function will be called each time a cell is clicked
    // cells.forEach((cell, index) => {
    //     cell.addEventListener('click', () => userAction(cell, index));
        
    // });




//     resetBtn.addEventListener('click', resetBoard); //listening for a click on the restart button to run restartBoard function
// })

//FUNCTIONS
startGame(); //start game function fires when DOM is loaded
    
function startGame() { //at the start of game. cells will be listening for a click, text output will show current player, resetbtn will be listening in case you wish to reset game again
    cells.forEach(cell => cell.addEventListener('click', cellClick)); //for each cell, add eventlistener to cell('click', cellClick) event is click with a callback of cellClick
    resetBtn.addEventListener('click', resetGame) //when reset button is clicked the resetGame function will run.
    textOutput.textContent = `It is Player ${currentPlayer}'s Turn` //textContent sets the text of the element textOutput
    gameRunning = true; // game will only start if gameRunning is true
}

function cellClick() { //every time cell is clicked, insertMark and check for winner
    const dataCell = this.getAttribute('data-cell') //create a local variable to get attribute from data-cell this. is whatever cell that is clicked
    if (board[dataCell] != "" || !gameRunning) { //if dataCell on board is not an empty cell || if game is not running, then return. : run insertMark function with two arguments (this, dataCell)
        return;
    }
    insertMark(this, dataCell); //run insertMark if if statememnt does not return
    checkWinner();
}
function insertMark(cell, index) {
    board[index] = currentPlayer;
    cell.textContent = currentPlayer;
    changePlayer()
    console.log(insertMark)
}
function changePlayer() {
    if (currentPlayer = (currentPlayer == "X")) {
        currentPlayer = "O"
    } else {
        currentPlayer = "X"
    }
    textOutput.textContent = `It is Player ${currentPlayer}'s Turn` //each time player changes, add text to output of whose turn it is

   }


function checkWinner() {
    if (board[0] = "X") {
    console.log('Xwins!')
    } else {
        console.log('o wins');
    }
        
    }
    // let winner = false;

    

function resetGame(){}

    
    


//     cell.forEach (cell => cell.addEventListener('click', boxClicked))
// }
// //initalize game eventListeners needed to listen for the event in our cells variable to begin game.
// // 'forEach' cell that is clicked, addEventListener to cell.event will be 'click' and will callback function cellClick. resetbtn addEventListener will listen for click and run gameReset function.
// // Output will return which players turn it is 
// // function boxCli(e) {
// //     e.innerText = "X";
// // }

// let container = document.getElementById('cellContainer') //set variable for cellContainer(Play area) Get cell
// container.addEventListener('click', function (e) { //element container is listening to an event of click, and will run function insertMove when clicked
//    e.target.textContent = currentPlayer //e.target triggers the ellement that
//     options[e.target.id] = "X"

//     moves++ //moves = 0. moves++ is now moves +1
//     if (moves % 2 === 0) { //remainder after divsion %
//         currentPlayer = "X"
//     }else if(moves % 2 !== 0) {
//         currentPlayer = "O"
//     }
//     // console.log(moves)
//     // console.log(currentPlayer)
// });

// })



// ///read into switch statements










// // //Inset "O"
// // container.addEventListener('click', function (e) {
// //     insertO(e.target);
// // })
// // function insertO(cell) {
// //     cell.innerText = "O"
// // };
// // if (currentPlayer === "X") {
// //     console.log('here')
// // }
// // statusText.textContent = `${currentPlayer}'s turn`;




// // // window.addEventListener('DOMContentLoaded'), () => {
// //     const cell = Array.from(document.getElementsByClassName('cell'));
// //     const statusText = document.getElementById('statusText');
// //     const restartBtn = document.getElementById('restartBtn')
    
// //     // //variable//options array of 9 empty strings to assign game selection options(place holders)
    
// //     let options = ["", "", "", "", "", "", "", "", ""];
// //     // //variable player X starts first every time
// //     let currentPlayer = "X";
// //     // let nextPlayer = "O";
// //     // // variable//running boolean that will keep the game running for as long as the condtion is true
// //     let isGameRunning = false;
// //     restartBtn.addEventListener('click', restartBoard)
    
    
// //     //get all elements with className cell/create a variable with an array Array.from
// //     //console log will show an array of 9
// //     // const cell = Array.from(document.getElementsByClassName('cell'));
// //     // console.log(cell);
// //     // let currentPlayer;
    
// //     // gameStart();
// //     // //function for start of game/clears board and reset to player X 
// //     // function gameStart() {
    