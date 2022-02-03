// document.getElementById("b1").addEventListener("click", character)

//function character() {}

// function toggleChar() {
//     let char = document.getElementById("b1");
//     if (char.innerText === "") {
//         char.innerText === "O";
//     } 

////logic flow: transform game choice selection data into an array. maybe a document query to log the choices?
////then compare array to 8 or 16 array combinations...based on winning x AND o combos
////if any matches then declare winner is winning character from that group of combos
////if no matches after 9 turns then declare draw
//// reset board 
/////maybe we use inputs instead of buttons 
////link inputs 

//ref all class box
// const boxes = Array.from(document.getElementsByClassName('box'))
// console.log(boxes)

// const drawBoard = () => {
//     //take each box array and iterate through
//     boxes.forEach((box, index)) => {
//     //set up board
//     let styleString = '';
//     if (index < 3) {
//         styleString += 'border-bottom: 3px solid black;';
//     }
//     if (index = 4) {
//         styleString += 'border-right: 3px solid black;';
//     }
//     if (index = 7) {
//         styleString += 'border-right: 3px solid black;';
//     }
//     if (index = 5) {
//         styleString += 'border-left: 3px solid black;';
//     }
//     if (index = 9) {
//         styleString += 'border-left: 3px solid black;';
//     }
//     if (index > 5) {
//         styleString += 'border-top: 3px solid black;';
//     }
//     box.style = styleString;
// //     });
// function toggleChar () {
//     let char = document.getElementById("b1");
//     if (char.innerText === "") {
//         //figure out a way to alternate
//         char.innerText = "O";
//         // char.innerText = "X";
//     } else if (char.innerText = "O") {
//         char.innerText = "X";
//     }
// }

// function toggleChar2 () {
//     let char = document.getElementById("b2");
//     if (char.innerText === "") {
//         //figure out a way to alternate
//         char.innerText = "O";
//         // char.innerText = "X";
//     } else if (char.innerText = "O") {
//         char.innerText = "X";
//     }
// }

// function toggleChar3 () {
//     let char = document.getElementById("b3");
//     if (char.innerText === "") {
//         //figure out a way to alternate
//         char.innerText = "O";
//         // char.innerText = "X";
//     } else if (char.innerText = "O") {
//         char.innerText = "X";
//     }
// }

// function toggleChar4 () {
//     let char = document.getElementById("b4");
//     if (char.innerText === "") {
//         //figure out a way to alternate
//         char.innerText = "O";
//         // char.innerText = "X";
//     } else if (char.innerText = "O") {
//         char.innerText = "X";
//     }
// }

// function toggleChar5 () {
//     let char = document.getElementById("b5");
//     if (char.innerText === "") {
//         //figure out a way to alternate
//         char.innerText = "O";
//         // char.innerText = "X";
//     } else if (char.innerText = "O") {
//         char.innerText = "X";
//     }
// }
// function toggleChar6 () {
//     let char = document.getElementById("b6");
//     if (char.innerText === "") {
//         //figure out a way to alternate
//         char.innerText = "O";
//         // char.innerText = "X";
//     } else if (char.innerText = "O") {
//         char.innerText = "X";
//     }
// }

// function toggleChar7 () {
//     let char = document.getElementById("b7");
//     if (char.innerText === "") {
//         //figure out a way to alternate
//         char.innerText = "O";
//         // char.innerText = "X";
//     } else if (char.innerText = "O") {
//         char.innerText = "X";
//     }
// }

// function toggleChar8 () {
//     let char = document.getElementById("b8");
//     if (char.innerText === "") {
//         //figure out a way to alternate
//         char.innerText = "O";
//         // char.innerText = "X";
//     } else if (char.innerText = "O") {
//         char.innerText = "X";
//     }
// }

// function toggleChar9 () {
//     let char = document.getElementById("b9");
//     if (char.innerText === "") {
//         //figure out a way to alternate
//         char.innerText = "O";
//         // char.innerText = "X";
//     } else if (char.innerText = "O") {
//         char.innerText = "X";
//     }
// }
// // var x = document.getElementById("myDIV");
// // if (x.innerHTML === "Hello") {
// //   x.innerHTML = "Swapped text!";
// // } else {
// //   x.innerHTML = "Hello";
// // }



// //display box--possibly add event listener to click of a button to change, after 9 clicks display draw

// switchTurn = (player) => {
//     if (player === "O's turn") {
        
//     }

// }


//reset



console.log("hello world")

//class review 

//use grid cells within gride area and grid gap black 
//grid trak on horizontal and vertical soilutions,,,

const tiles = Array.from(document.querySelectorAll('.tile'));
const playerDisplay = document.querySelector('.display-player');
const resetButton = document.querySelector('#reset');
const announcer = document.querySelector('.announcer');



let board = ['','','','','','','','',''];
let currentPlayer = 'X';
let isGameActive = true;

const PLAYERX_WON = 'PLAYER X_WON';
const PLAYERO_WON = 'PLAYERO_WON';
const TIE = 'TIE';

const winningConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

//[0][1][2]
//[3][4][5]
//[6][7][8]


function handleResultValidation() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++){
        const winCondition = winningConditions[i];
        const a = board[winCondition[0]];
        const b = board[winCondition[1]];
        const c = board[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b ===c) {
            roundWon = true;
            break;
        }
    }

        if (roundWon) {
            announce(currentPlayer === 'X' ? PLAYERX_WON : PLAYERO_WON);
            isGameActive = false;
            return; 
        } 

        if(!board.includes('')) {
            announce(TIE);
        }
}


const announce = (type) => {
    switch(type){
        case PLAYERO_WON:
            announcer.innerText = 'Player O Won';
            break;
        case PLAYERX_WON:
            announcer.innerText = 'Player X Won';
            break;
        case TIE:
            announcer.innerText = 'Tie';  
    }
    announcer.classList.remove('hide');
};

const isValidAction = (tile) => {
    if (tile.innerText === 'X' || tile.innerText === 'O'){
        return false;
    } 
    return true;
}

const updateBoard = (index) => {
    board[index] = currentPlayer;
}



const userAction = (tile, index) => {
    if(isValidAction(tile) && isGameActive) {
        tile.innerText = currentPlayer;
        tile.classList.add(`player${currentPlayer}`);
        updateBoard(index);
        handleResultValidation();
        changePlayer();
    }
}

const changePlayer = () => {
    playerDisplay.classList.remove(`player${currentPlayer}`);
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    playerDisplay.innerText = currentPlayer;
    playerDisplay.classList.add(`player${currentPlayer}`);
}

const resetBoard = () => {
    board = ['','','','','','','','',''];
    isGameActive = true;
    announcer.classList.add('hide');

    if (currentPlayer === 'O') {
        changePlayer();
    }

    tiles.forEach(tile => {
        tile.innerText = '';
        tile.classList.remove('playerX');
        tile.classList.remove('playerO');
    });
}


tiles.forEach((tile,index) => {
    tile.addEventListener('click', () => userAction(tile,index));
});


resetButton.addEventListener('click', resetBoard);