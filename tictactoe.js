//declare players
let currentPlayer = 'X';

let turn = document.querySelector('.turn');
turn.innerHTML = (currentPlayer + 'turn');

//instantiate gameboard
let gameBoard = ['', '', '', '', '', '', '', '', ''];

let gameActive = true;

let winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8],
];

let parent = document.querySelector('.result');

//create function wonGame
let wonGame = function () {
    parent.innerText = currentPlayer + 'won the game!';
    endGame()
}

//create function tieGame
let tieGame = function () {
    console.log('tieGame');
        parent.innerText = 'Tie game!'
        endGame()
}

//funct to switch players
function switchPlayers(event) {
    if (currentPlayer === 'X') {
        event.target.innerHTML = 'X'
        currentPlayer = 'O'
        document.querySelector('.turn').innerText =  'O turn';
    } else {
        event.target.innerHTML = 'O'
        currentPlayer = 'X'
        document.querySelector('.turn').innerText =  'X turn';
    }
}


//funct for Result Validation
function winCombo() {
    for (let i = 0; i < winConditions.length; i++) {
        let winOptions = winConditions[i]
        const zero = winOptions[0]
        const one = winOptions[1]
        const two = winOptions[2]
        if (gameBoard[0] == gameBoard[1] && gameBoard[0] == gameBoard[2] && 'X' && gameBoard[0]) {
            wonGame()
        }
        else if (gameBoard[zero] == gameBoard[one] && gameBoard[zero] == gameBoard[two] && 'O' && gameBoard[zero]) {
            wonGame()
        } else {
        for (let j = 0; j < gameBoard.length; j++) {
            console.log(gameBoard[j])
        if (gameBoard[j] !== '') {
                tieGame()
        }
        }
    }
    } 
}
winCombo()

//eventLis for reset button
document.querySelector('.reset').addEventListener('click', function () {
    gameActive = true;
    document.querySelector('.turn').innerText =  'X turn';
    gameBoard = ["", "", "", "", "", "", "", "", ""];
    document.getElementsByClassName('.cell').innerText = '';
    console.log(document.querySelectorAll('.cell'))
});


//funct to endGame (in 2 cases: 1- when there is no empty space (tie); 2-if someone won)
function endGame() {
        gameActive = false;
}

    //add eventList to each cells
   const allCells = document.querySelectorAll('.cell')
   allCells.forEach(cell=> {
   cell.addEventListener('click', switchPlayers, {once: true})
   })

    // document.querySelectorAll('.cell').onclick = function (event) {
    //     console.log(event);
    //     switchPlayers(event);
    // }


