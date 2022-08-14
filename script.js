// APP STATE (variables)

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
   
     // a variable to track whose turn it is
     // a var for 'x' and a var for 'o'
let x = 'x'
let o = 'o'
let currentPlayer =  x

   


    // a var to keep count of moves to detect cats/draw game
        /* Add your logic here */
let count = 9
let catsGame = () => {
    if(count === 9){
        document.getElementById("h2").innerHTML = "Cat\'s Game";
        
    }
}


// setTimeout(catsGame, 2000)

    // gameBoard array to keep track of player moves ['x', '', 'o', 'x', '', 'o', 'x', '', '']
        // 2d array
        // [
        //     ['x', '', 'o'],
        //     ['x', 'o', ''],
        //     ['x', '', 'o']
        // ]

let aOne = document.getElementById("aOne");
let bOne = document.getElementById("bOne");
let cOne = document.getElementById("cOne");
let aTwo = document.getElementById("aTwo");
let bTwo = document.getElementById("bTwo");
let cTwo = document.getElementById("cTwo");
let aThree = document.getElementById("aThree");
let bThree = document.getElementById("bThree");
let cThree = document.getElementById("cThree");


let aOneSpace = true
let bOneSpace = true
let cOneSpace = true
let aTwoSpace = true
let bTwoSpace = true
let cTwoSpace = true
let aThreeSpace = true
let bThreeSpace = true
let cThreeSpace = true



let gameBoard = ['','','','','','','','','']

    // a boolean for if the game is over or not -- is the game currently happening?

let gameOver = false;


let reset = document.querySelector('button')
reset.addEventListener('click', () => {
    console.log('ugh')
})

// EVENT LISTENERS
    // click event listener(s) for player clicks
        // change innertext of div to X or O
        // store the player's move in the gameBoard array
        // change to the next player's turn
        // check for a win -- calling a win condition function/doing all the win logic
    // click event to clear/reset the board
let changePlayers = () => {
    if(currentPlayer === 'x'){
        currentPlayer = o
    } else if (currentPlayer === 'o'){
        currentPlayer = x
    }
}


// let gameBoard = [
// '0','1','2',
// '3','4','5',
// '6','7','8']
let winConditions = () => {
    if(currentPlayer === gameBoard[0] && currentPlayer === gameBoard[1] && currentPlayer === gameBoard[2]){
        gameOver = true
        document.getElementById("h2").innerHTML = `${currentPlayer.toUpperCase()}'s Wins!`
    }else if(currentPlayer === gameBoard[2] && currentPlayer === gameBoard[5] && currentPlayer  === gameBoard[8]){
        gameOver = true
        document.getElementById("h2").innerHTML = `${currentPlayer.toUpperCase()}'s Wins!`
    }else if(currentPlayer === gameBoard[0] && currentPlayer === gameBoard[4] && currentPlayer === gameBoard[8]){
        gameOver = true
        document.getElementById("h2").innerHTML = `${currentPlayer.toUpperCase()}'s Wins!`
    }else if(currentPlayer === gameBoard[0] && currentPlayer === gameBoard[3] && currentPlayer === gameBoard[6]){
        gameOver = true
        document.getElementById("h2").innerHTML = `${currentPlayer.toUpperCase()}'s Wins!`
    }else if(currentPlayer === gameBoard[1] && currentPlayer === gameBoard[4] && currentPlayer === gameBoard[7]){
        gameOver = true
        document.getElementById("h2").innerHTML = `${currentPlayer.toUpperCase()}'s Wins!`
    }else if(currentPlayer === gameBoard[3] && currentPlayer === gameBoard[4] && currentPlayer === gameBoard[5]){
        gameOver = true
        document.getElementById("h2").innerHTML = `${currentPlayer.toUpperCase()}'s Wins!`
    }else if(currentPlayer === gameBoard[6] && currentPlayer === gameBoard[7] && currentPlayer === gameBoard[8]){
        gameOver = true
        document.getElementById("h2").innerHTML = `${currentPlayer.toUpperCase()}'s Wins!`
    }else if(currentPlayer === gameBoard[6] && currentPlayer === gameBoard[4] && currentPlayer === gameBoard[2]){
        gameOver = true
        document.getElementById("h2").innerHTML = `${currentPlayer.toUpperCase()}'s Wins!`
    }
}

let playerMove = (player) => {
    if(gameOver !== true){
        player.innerHTML = `${currentPlayer}`      
    
    }
}


aOne.addEventListener('click', (event) => {
    if(aOneSpace && gameOver !== true){
        playerMove(event.target)
        aOneSpace = false
        gameBoard[0] = currentPlayer
        winConditions()
        changePlayers()
      
    }
})

bOne.addEventListener('click', (event) => {
    if(bOneSpace && gameOver !== true){
        playerMove(event.target)
        bOneSpace = false
        gameBoard[1] = currentPlayer
        winConditions()
        changePlayers()
    }
})

cOne.addEventListener('click', (event) => {
    if(cOneSpace && gameOver !== true){
        playerMove(event.target)
        cOneSpace = false
        gameBoard[2] = currentPlayer
        winConditions()
        changePlayers()
    }
})
aTwo.addEventListener('click', (event) => {
    if(aTwoSpace && gameOver !== true){
        playerMove(event.target)
        aTwoSpace = false
        gameBoard[3] = currentPlayer
        winConditions()
        changePlayers()
    }
})
bTwo.addEventListener('click', (event) => {
    if(bTwoSpace && gameOver !== true){
        playerMove(event.target)
        bTwoSpace = false
        gameBoard[4] = currentPlayer
        winConditions()
        changePlayers()
    }
})
cTwo.addEventListener('click', (event) => {
    if(cTwoSpace && gameOver !== true){
        playerMove(event.target)
        cTwoSpace = false
        gameBoard[5] = currentPlayer
        winConditions()
        changePlayers()
    }
})
aThree.addEventListener('click', (event) => {
    if(aThreeSpace && gameOver !== true){
        playerMove(event.target)
        aThreeSpace = false
        gameBoard[6] = currentPlayer
        winConditions()
        changePlayers()
    }
})
bThree.addEventListener('click', (event) => {
    if(bThreeSpace && gameOver !== true){
        playerMove(event.target)
        bThreeSpace = false
        gameBoard[7] = currentPlayer
        winConditions()
        changePlayers()
    }
})
cThree.addEventListener('click', (event) => {
    if(cThreeSpace && gameOver !== true){
        playerMove(event.target)
        cThreeSpace = false
        gameBoard[8] = currentPlayer
        winConditions()
        changePlayers()
    }
})

// some way to tell if a player has already clicked on a square
// win/tie game logic in functions
    // option: detect a win using conditionals and comparisions 
    // option hard mode: store all winning conditions and use loops to compare them to the gameBoard array
        // if the game is won, display the winner and prevent the users from clicking more
        // if it is a cats game, display that and prevent clicks

});