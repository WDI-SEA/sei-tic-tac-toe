// //variables
function compareGame () {
    let r1B1 = document.getElementById('R1B1').innerText;
    let r1B2 = document.getElementById('R1B2').innerText;
    let r1B3 = document.getElementById('R1B3').innerText;
    let r2B1 = document.getElementById('R2B1').innerText;
    let r2B2 = document.getElementById('R2B2').innerText;
    let r2B3 = document.getElementById('R2B3').innerText;
    let r3B1 = document.getElementById('R3B1').innerText;
    let r3B2 = document.getElementById('R3B2').innerText;
    let r3B3 = document.getElementById('R3B3').innerText;
    if (r1B1 === player_ && r1B2 === player_ && r1B3 === player_) {
        playerWins()
    } else if (r2B1 === player_ && r2B2 === player_ && r2B3 === player_) {
        playerWins()
    } else if (r3B1 === player_ && r3B2 === player_ && r3B3 === player_) {
        playerWins()
    } else if (r1B1 === player_ && r2B1 === player_ && r3B1 === player_) {
        playerWins()
    } else if (r1B2 === player_ && r2B2 === player_ && r3B2 === player_) {
        playerWins()
    } else if (r1B3 === player_ && r2B3 === player_ && r3B3 === player_) {
        playerWins()
    } else if (r1B1 === player_ && r2B2 === player_ && r3B3 === player_) {
        playerWins()
    } else if (r1B3 === player_ && r2B2 === player_ && r3B1 === player_) {
        playerWins()
    }
};


let win = false;
let CountClicks = 0;
let player1 = 0;
let player2 = 0;
let player_ = "";
let playerTurn = document.querySelector('#playerturn');
let grid = document.querySelectorAll('.grid');
let player1score = document.querySelector('#player1score');
let player2score = document.querySelector('#player2score');
let moveTracker = document.querySelector('#trackplayerturn');
let resetGame = document.querySelector('.reset-game');
let resetscoreboard = document.querySelector('.reset-scoreboard');
let fireworks = document.getElementById('firework');
let movecounter = document.getElementById('movecounter');
function playerWins() {
    win = true;
    setTimeout(function() {
        playerTurn.innerText = "Player " + player_ + " wins!"
        if (player_ === "X") {
            player1 ++;
            player1score.innerText = player1
            grid.forEach(div => { 
                div.setAttribute('disabled','')})
            fireworks.style.display = 'inline';
            movecounter.style.marginTop = '-20%';
        } else {
            player2 ++;
            player2score.innerText = player2;
            grid.forEach(div => { 
                div.setAttribute('disabled','')})
            fireworks.style.display = 'inline';
            movecounter.style.marginTop = '-20%';
        }
    }, 10)
};
function draw () {
    setTimeout(function() {
        playerTurn.innerText = "It's a Draw! Press 'Reset Game' to Play Again."
    } )
    grid.forEach(div => { 
        div.setAttribute('disabled','')}, 10)
};
const checkPlayerTurn = e => {
    if (CountClicks % 2 === 0) {
        player_ = "X"
        e.currentTarget.innerText = "X";
        e.currentTarget.setAttribute('disabled', '');
        compareGame(player_);
        CountClicks ++
        playerTurn.innerText = 'Player 2 (O) Turn';
    } else {
        player_ = "O"
        e.currentTarget.innerText = "O";
        e.currentTarget.setAttribute('disabled', '');
        compareGame(player_);
        CountClicks ++
        playerTurn.innerText = 'Player 1 (X) Turn'
    };
    moveTracker.innerText = CountClicks
    if (CountClicks >= 9 && win === false) {
        draw()
    }
    }
grid.forEach(div => { 
    div.addEventListener('click', checkPlayerTurn) 
});


resetGame.addEventListener('click', function() {
    grid.forEach(div => { 
        CountClicks = 0;
        div.innerText = '';
        div.removeAttribute('disabled','')
        win = false;
        playerTurn.innerText = 'Player 1 (X) Turn'
        moveTracker.innerHTML = "0";
        fireworks.style.display = 'none';
        movecounter.style.marginTop = '5%'; 
    });
});
resetscoreboard.addEventListener('click', function() {
    player1score.innerText = 0;
    player2score.innerText = 0;
    player1 = 0;
    player2 = 0;
    return [player1, player2]
});






//previous work... before I spoke to sebastian. 
// I had a lot of difficulty with setting the array/grids of the deliverable... 
// He helped me quite a bit by explaining how to make my work more simple.
// let none = '?'
// let X = "X"
// let O = "O"
// let player1 = "Player 1"
// let player2 = "Player 2"
// let gameBoard = ['', '', '',
//                  '', '', '',
//                  '', '', ''];
// 
// let gameTracker = document.querySelector('.Tic-Tac-Toe');
// let playerTurn = document.querySelector('.playerturn');
// let resetGame = document.querySelector('.reset-game');
// let pageTracker = document.querySelector('.page')


// let compareGame = function() {
//     let winningX = [[X, X, X,
//                      gameBoard[3], gameBoard[4], gameBoard[5],
//                      gameBoard[6], gameBoard[7], gameBoard[8]],
//                     [gameBoard[0], gameBoard[1], gameBoard[2],
//                      X, X, X,
//                      gameBoard[6], gameBoard[7], gameBoard[8]],
//                     [gameBoard[0], gameBoard[1], gameBoard[2],
//                      gameBoard[3], gameBoard[4], gameBoard[5],
//                      'X', 'X', 'X'],
//                     ['X', gameBoard[1], gameBoard[2],
//                      gameBoard[3], 'X', gameBoard[5],
//                      gameBoard[6], gameBoard[7], 'X'],
//                     [gameBoard[0], gameBoard[1], 'X',
//                      gameBoard[3], 'X', gameBoard[5],
//                      'X', gameBoard[7], gameBoard[8]],
//                     ['X', gameBoard[1], gameBoard[2],
//                      'X', gameBoard[4], gameBoard[5],
//                      'X', gameBoard[7], gameBoard[8]],
//                     [gameBoard[0], 'X', gameBoard[2],
//                      gameBoard[3], 'X', gameBoard[5],
//                      gameBoard[6], 'X', gameBoard[8]],
//                     [gameBoard[0], gameBoard[1], 'X',
//                      gameBoard[3], gameBoard[4], 'X',
//                      gameBoard[6], gameBoard[7], 'X']];
//     let winningO = [['O', 'O', 'O',
//                      gameBoard[3], gameBoard[4], gameBoard[5],
//                      gameBoard[6], gameBoard[7], gameBoard[8]],
//                     [gameBoard[0], gameBoard[1], gameBoard[2],
//                      'O', 'O', 'O',
//                      gameBoard[6], gameBoard[7], gameBoard[8]],
//                     [gameBoard[0], gameBoard[1], gameBoard[2],
//                      gameBoard[3], gameBoard[4], gameBoard[5],
//                      'O', 'O', 'O'],
//                     ['O', gameBoard[1], gameBoard[2],
//                      gameBoard[3], 'O', gameBoard[5],
//                      gameBoard[6], gameBoard[7], 'O'],
//                     [gameBoard[0], gameBoard[1], 'O',
//                      gameBoard[3], 'O', gameBoard[5],
//                      'O', gameBoard[7], gameBoard[8]],
//                     ['O', gameBoard[1], gameBoard[2],
//                      'O', gameBoard[4], gameBoard[5],
//                      'O', gameBoard[7], gameBoard[8]],
//                     [gameBoard[0], 'O', gameBoard[2],
//                      gameBoard[3], 'O', gameBoard[5],
//                      gameBoard[6], 'O', gameBoard[8]],
//                     [gameBoard[0], gameBoard[1], 'O',
//                      gameBoard[3], gameBoard[4], 'O',
//                      gameBoard[6], gameBoard[7], 'O']];
//                console.log(gameBoard)
//                console.log(winningX[0])
//     // if (CountClicks >= 0) {
//         for (let i = 0; i < 8; i++) {
//         if ( gameBoard === winningX[i] || gameBoard === winningO[i]) {
//                 console.log('You win!')
//         }
//         }
//     }
// // }

// // let winningX = [['X', 'X', 'X',
// //                 gameBoard[3], gameBoard[4], gameBoard[5],
// //                 gameBoard[6], gameBoard[7], gameBoard[8]],
// //                 ['', '', '',
// //                'X', 'X', 'X',
// //                '', '', ''],
// //                ['', '', '',
// //                '', '', '',
// //                'X', 'X', 'X'],
// //                ['X', '', '',
// //                '', 'X', '',
// //                '', '', 'X'],
// //                ['', '', 'X',
// //                '', 'X', '',
// //                'X', '', ''],
// //                ['X', '', '',
// //                'X', '', '',
// //                'X', '', ''],
// //                ['', 'X', '',
// //                '', 'X', '',
// //                '', 'X', ''],
// //                ['', '', 'X',
// //                '', '', 'X',
// //                '', '', 'X']]




// resetGame.addEventListener("click", function() {
//     CountClicks = 0;
//     playerTurn.innerText = player1 + ' make your move!';
//     r1B1.innerText = '?';
//     r1B2.innerText = '?';
//     r1B3.innerText = '?';
//     r2B1.innerText = '?';
//     r2B2.innerText = '?';
//     r2B3.innerText = '?';
//     r3B1.innerText = '?';
//     r3B2.innerText = '?';
//     r3B3.innerText = '?';

//  });
// // });

// r1B1.addEventListener("click", function() {
//     CountClicks ++;
//     if (CountClicks % 2 == 0) {
//         r1B1.innerText = O;
//         gameBoard[0] = O;
//         checkPlayerTurn();
//         compareGame();
//         return [CountClicks, r1B1.innerText, gameBoard[0]];
//     } else {
//         r1B1.innerText = X;
//         gameBoard[0] = X;
//         checkPlayerTurn();
//         compareGame();
//         return [CountClicks, r1B1.innerText, gameBoard[0]]; 
//     };
// });
// r1B2.addEventListener("click", function() {
//     CountClicks ++;
//     if (CountClicks % 2 == 0) {
//         r1B2.innerText = O;
//         gameBoard[1] = O;
//         checkPlayerTurn();
//         compareGame();
//         return [CountClicks, r1B2.innerText, gameBoard[1]];
//     } else {
//         r1B2.innerText = X;
//         gameBoard[1] = X;
//         checkPlayerTurn();
//         compareGame();
//         return [CountClicks, r1B2.innerText, gameBoard[1]];
//     };
// }, {once : true});
// r1B3.addEventListener("click", function() {
//     CountClicks ++;
//     if (CountClicks % 2 == 0) {
//         r1B3.innerText = O;
//         gameBoard[2] = O;
//         checkPlayerTurn();
//         compareGame();
//         return [CountClicks, r1B3.innerText, gameBoard[2]];
//     } else {
//         r1B3.innerText = X;
//         gameBoard[2] = X;
//         checkPlayerTurn();
//         compareGame();
//         return [CountClicks, r1B3.innerText, gameBoard[2]];
//     };
// }, {once : true});
// r2B1.addEventListener("click", function() {
//     CountClicks ++;
//     if (CountClicks % 2 == 0) {
//         r2B1.innerText = O;
//         gameBoard[3] = X;
//         checkPlayerTurn();
//         compareGame();
//         return [CountClicks, r2B1.innerText, gameBoard[3]];
//     } else {
//         r2B1.innerText = X;
//         gameBoard[3] = X;
//         checkPlayerTurn();
//         compareGame();
//         return [CountClicks, r2B1.innerText, gameBoard[3]];
//     };
// }, {once : true});
// r2B2.addEventListener("click", function() {
//     CountClicks ++;
//     if (CountClicks % 2 == 0) {
//         r2B2.innerText = O;
//         gameBoard[4] = O;
//         checkPlayerTurn();
//         compareGame();
//         return [CountClicks, r2B2.innerText, gameBoard[4]];
//     } else {
//         r2B2.innerText = X;
//         gameBoard[4] = X;
//         checkPlayerTurn();
//         compareGame();
//         return [CountClicks, r2B2.innerText, gameBoard[4]];
//     };
// }, {once : true});
// r2B3.addEventListener("click", function() {
//     CountClicks ++;
//     if (CountClicks % 2 == 0) {
//         r2B3.innerText = O;
//         gameBoard[5] = O;
//         checkPlayerTurn();
//         compareGame();
//         return [CountClicks, r2B3.innerText, gameBoard[5]];
//     } else {
//         r2B3.innerText = X;
//         gameBoard[5] = X;
//         checkPlayerTurn();
//         compareGame();
//         return [CountClicks, r2B3.innerText, gameBoard[5]];
//     };
// }, {once : true});
// r3B1.addEventListener("click", function() {
//     CountClicks ++;
//     if (CountClicks % 2 == 0) {
//         r3B1.innerText = O;
//         gameBoard[6] = O;
//         checkPlayerTurn();
//         compareGame();
//         return [CountClicks, r3B1.innerText, gameBoard[6]];
//     } else {
//         r3B1.innerText = X;
//         gameBoard[6] = X;
//         checkPlayerTurn();
//         compareGame();
//         return [CountClicks, r3B1.innerText, gameBoard[6]];
//     };
// }, {once : true});
// r3B2.addEventListener("click", function() {
//     CountClicks ++;
//     if (CountClicks % 2 == 0) {
//         r3B2.innerText = O;
//         gameBoard[7] = O;
//         checkPlayerTurn();
//         compareGame();
//         return [CountClicks, r3B2.innerText, gameBoard[7]];
//     } else {
//         r3B2.innerText = X;
//         gameBoard[7] = X;
//         checkPlayerTurn();
//         compareGame();
//         return [CountClicks, r3B2.innerText, gameBoard[7]];
//     }
// }, {once : true});
// r3B3.addEventListener("click", function() {
//     CountClicks ++;
//     if (CountClicks % 2 == 0) {
//         r3B3.innerText = O;
//         gameBoard[8] = O;
//         checkPlayerTurn();
//         compareGame();
//         return [CountClicks, r3B3.innerText, gameBoard[8]];
//     } else {
//         r3B3.innerText = X;
//         gameBoard[8] = X;
//         checkPlayerTurn();
//         compareGame();
//         return [CountClicks, r3B3.innerText, gameBoard[8]];
//     };
// }, {once : true});
