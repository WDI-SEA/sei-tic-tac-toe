// app state
let playerUp = 'X';
let playerXchoices = [];
let playerOchoices = [];
let winner = false;
let winsX = 0
let winsO = 0

// switch player function
let switchPlayer = () => {
    if (playerUp == 'X') {
        playerUp = 'O';
        // player turn changed on screen
        document.querySelector('#player-turn').innerText = playerUp
    } else if (playerUp == 'O') {
        playerUp = 'X';
        //player turn changed on screen
        document.querySelector('#player-turn').innerText = playerUp
    }
}

// end game function
let endGame = () => {
    document.querySelector('#message-box').innerText = 'Player ' +playerUp+ ' wins! Click New Game to play again';
    //remove event listener
    for (let i = 0; i<tiles.length; i++) {
        tiles[i].removeEventListener('click', playerMove);
    }
    if (playerUp == 'O') {
        winsO = winsO + 1;
        document.querySelector('#o-wins').innerText = winsO
        console.log(winsO);
    }
    if (playerUp == 'X') {
        winsX = winsX + 1
        document.querySelector('#x-wins').innerText = winsX
        console.log(winsX);
    }
}

// reset game function
let resetGame = () => {
    // remove text from tiles, add event listener, player num to 1, winner false, reset arrays to empty,--all with button
    for (let i = 0; i<tiles.length; i++) {
    tiles[i].innerText = " ";
    tiles[i].addEventListener('click', playerMove);
    }
    playerUp = 'X';
    document.querySelector('#player-turn').innerText = playerUp
    winner = false;
    playerXchoices = [];
    playerOchoices = [];
    document.querySelector('#message-box').innerText = ""
}

// tie game function
let tieGame = () => {
    console.log('tie game');
    document.querySelector('#message-box').innerText = "TIE GAME click new game to play again"
}

// check winner X function
let checkWinnerX = () => { 
    if (playerXchoices.includes(1)&&playerXchoices.includes(2)
        &&playerXchoices.includes(3)) {
        winner = true;
    } else if (playerXchoices.includes(4)&&playerXchoices.includes(5)
        &&playerXchoices.includes(6)) {
        winner = true;
    } else if (playerXchoices.includes(7)&&playerXchoices.includes(8)
        &&playerXchoices.includes(9)) {
        winner = true;
    } else if (playerXchoices.includes(1)&&playerXchoices.includes(4)
        &&playerXchoices.includes(7)) {
        winner = true;
    } else if (playerXchoices.includes(2)&&playerXchoices.includes(5)
        &&playerXchoices.includes(8)) {
        winner = true;
    } else if (playerXchoices.includes(3)&&playerXchoices.includes(6)
        &&playerXchoices.includes(9)) {
        winner = true;
    } else if (playerXchoices.includes(1)&&playerXchoices.includes(5)
        &&playerXchoices.includes(9)) {
        winner = true;
    } else if (playerXchoices.includes(3)&&playerXchoices.includes(5)
        &&playerXchoices.includes(7)) {
        winner = true;
    } else if ((playerXchoices.length == 5 && playerOchoices.length == 4) || (playerXchoices.length == 4 && playerOchoices.length == 5)) {
        tieGame();
    }
}

// check winner O function
let checkWinnerO = () => { 
    if (playerOchoices.includes(1)&&playerOchoices.includes(2)
        &&playerOchoices.includes(3)) {
        winner = true;
    } else if (playerOchoices.includes(4)&&playerOchoices.includes(5)
        &&playerOchoices.includes(6)) {
        winner = true;
    } else if (playerOchoices.includes(7)&&playerOchoices.includes(8)
        &&playerOchoices.includes(9)) {
        winner = true;
    } else if (playerOchoices.includes(1)&&playerOchoices.includes(4)
        &&playerOchoices.includes(7)) {
        winner = true;
    } else if (playerOchoices.includes(2)&&playerOchoices.includes(5)
        &&playerOchoices.includes(8)) {
        winner = true;
    } else if (playerOchoices.includes(3)&&playerOchoices.includes(6)
        &&playerOchoices.includes(9)) {
        winner = true;
    } else if (playerOchoices.includes(1)&&playerOchoices.includes(5)
        &&playerOchoices.includes(9)) {
        winner = true;
    } else if (playerOchoices.includes(3)&&playerOchoices.includes(5)
        &&playerOchoices.includes(7)) {
        winner = true;
    } else if ((playerXchoices.length == 5 && playerOchoices.length == 4) || (playerXchoices.length ==4 && playerOchoices.length == 5)) {
    tieGame();
    }
}

// DOM variables for tiles and reset
let tiles = document.querySelectorAll('.block')
let resetButton = document.querySelector('#reset-button')

resetButton.addEventListener('click', resetGame)

//for loop to run functionality with click
let playerMove = (e) => {
    // parseInt(e.target.id) finds the number of the ID of the clicked div
    //player move conditional
    if (playerUp == 'X') {
        // update inner text--x
        e.target.innerText ="X";
        // add to array--PLAYER 1
        playerXchoices.push(parseInt(e.target.id));
        // check for winner
        checkWinnerX();
        // remove event listener from that tile
        e.target.removeEventListener('click', playerMove)
    } else if (playerUp == 'O') {
        // update inner text--o
        e.target.innerText ="O";
        // add to array--PLAYER 2
        playerOchoices.push(parseInt(e.target.id));
        // check for winner
        checkWinnerO();
        //remove event listener
        e.target.removeEventListener('click', playerMove)
    }
    //winner conditional
    if (winner) {
        console.log('Player ' +playerUp+ ' is the winner');
        //end game
        endGame();
    } else {
        // switch players
        switchPlayer();
    }
}

// Event listener--click on tiles to run playerMove function
for (let i = 0; i<tiles.length; i++) {
    tiles[i].addEventListener('click', playerMove);
}