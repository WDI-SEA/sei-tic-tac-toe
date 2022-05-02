// APP STATE (variables)
const gameButtons = [...document.querySelectorAll('.gameboard')]
const endGame = document.querySelector('#instructions')
let win = false
const player1Win = function (){
    endGame.innerText = "Player 1 Wins!"
    for(let i = 0; i < gameButtons.length; i++) {
        gameButtons[i].disabled = true
    }
}
const player2Win = function (){
    endGame.innerText = "Player 2 Wins!"
    for(let i = 0; i < gameButtons.length; i++) {
        gameButtons[i].disabled = true
    }
}
const tieGame = function () {
    endGame.innerText = "Cat's Game! Nobody wins!"
    for(let i = 0; i < gameButtons.length; i++) {
        gameButtons[i].disabled = true
    }
}
let turn = 1
let playerTurn = "X"
const activePlayer = function(){
    if (win === false && turn === 10){
        tieGame()
        console.log('tie')
        console.log(turn)
    }else if (turn % 2 !== 0 && turn <= 10){
        playerTurn = "X"
        endGame.innerText = "It's Player 1's turn!"
        winCheck()
        console.log(turn)
    }else if (turn % 2 === 0 && turn <= 10){
        playerTurn = "O"
        endGame.innerText = "It's Player 2's turn!"
        winCheck()
        console.log(turn)
    }
}
const winCheck = function (){
    if(gameBoard[0][0] === gameBoard[0][1] && gameBoard[0][0] === gameBoard[0][2]) {
        if(gameBoard[0][0] === "X"){
            win = true
            player1Win() //working
            return win
        }else if(gameBoard[0][0] === "O"){
            win = true
            player2Win() //working
            return win
        } //top row full
    }else if(gameBoard[1][0] === gameBoard[1][1] && gameBoard[1][0] === gameBoard[1][2]){
        if(gameBoard[1][0] === "X"){
            win = true
            player1Win() //working
            return win
        }else if(gameBoard[1][0] === "O"){
            win = true
            player2Win() //working
            return win
        } //middle row full
    }else if(gameBoard[2][0] === gameBoard[2][1] && gameBoard[2][0] === gameBoard[2][2]){
        if(gameBoard[2][0] === "X"){
            win = true
            player1Win() //working
            return win
        }else if(gameBoard[2][0] === "O"){
            win = true
            player2Win() //working
            return win
        } //bottom row full
    }else if(gameBoard[0][0] === gameBoard[1][0] && gameBoard[0][0] === gameBoard[2][0]){
        if(gameBoard[0][0] === "X"){
            win = true
            player1Win() //working
            return win
        }else if(gameBoard[0][0] === "O"){
            win = true
            player2Win() //working
            return win
        } //left column full
    }else if(gameBoard[0][1] === gameBoard[1][1] && gameBoard[0][1] === gameBoard[2][1]){
        if(gameBoard[0][1] === "X"){
            win = true
            player1Win() //working
            return win
        }else if(gameBoard[0][1] === "O"){
            win = true
            player2Win() //working
            return win
        } //middle column full
    }else if(gameBoard[0][2] === gameBoard[1][2] && gameBoard[0][2] === gameBoard[2][2]){
        if(gameBoard[0][2] === "X"){
            win = true
            player1Win() //working
            return win
        }else if(gameBoard[0][2] === "O"){
            win = true
            player2Win() //working
            return win
        } //right column full
    }else if(gameBoard[0][0] === gameBoard[1][1] && gameBoard[0][0] === gameBoard[2][2]){
        if(gameBoard[0][0] === "X"){
            win = true
            player1Win() //working
            return win
        }else if(gameBoard[0][0] === "O"){
            win = true
            player2Win() //working
            return win
        } // top-left to bottom-right diagonal full
    }else if(gameBoard[0][2] === gameBoard[1][1] && gameBoard[0][2] === gameBoard[2][0]){
        if(gameBoard[0][2] === "X"){
            win = true
            player1Win() //working
            return win
        }else if(gameBoard[0][2] === "O"){
            win = true
            player2Win() //working
            return win
        } //top-right to bottom-left diagonal full
    }
    return win
}
    //wins = gb[0][0],gb[0][1],gb[0][2]; gb[1][0],gb[1][1],gb[1][2];    
    //gb[2][0],gb[2][1],gb[2][2]; gb[0][0],gb[1][0],gb[2][0];
    //gb[0][1],gb[1][1],gb[2][1]; gb[0][2],gb[1][2],gb[2][2];
    //gb[0][0],gb[1][1],gb[2][2]; gb[0][2],gb[1][1],gb[2][0]
// var for whose turn it is
// has the game been won? bool

// DOM contented Loaded
// query selector(s) to handle user clicks 
    // current player needs to be marked on the board -- if that space is empty (conditional) using css (if you want to use it)
    // that move needs to be place in the gameboard array
    // function that checks if there is a winner from the gameboard array
        // in that function -- if else statements
            // checking all of the win conditions (visualize all ways to win the game)
                // if a win is found -- stop the game and show the winner
                // otherwise let game continue      
        // and cats games (after nine moves) (or gameboard is full and no winner)
// the gameboard -- use an array
let gameBoard = [
    ['.', '.', '.'],
    ['.', '.', '.'],
    ['.', '.', '.']
]

document.addEventListener('DOMContentLoaded', function () { 

    document.querySelector('#top-left').addEventListener('click', function(){
        document.querySelector('#top-left').style.backgroundColor = 'slateblue';
        document.querySelector('#top-left').style.color = 'yellow';
        if (gameBoard[0][0]==='.' && playerTurn==='X') {
            document.querySelector('#top-left').innerText = "X"
            gameBoard[0][0] = 'X'
            turn++
            console.log('topleftX')
            console.log(gameBoard[0][0])
            activePlayer()
        } else if (gameBoard[0][0]==='.' && playerTurn ==='O') {
            document.querySelector('#top-left').innerText = "O"
            gameBoard[0][0] = 'O'
            turn++
            console.log('topleftO')
            activePlayer()
        }
    })
    document.querySelector('#top-middle').addEventListener('click', function(){
        document.querySelector('#top-middle').style.backgroundColor = 'slateblue';
        document.querySelector('#top-middle').style.color = 'yellow';
        if (gameBoard[0][1]==='.'&& playerTurn==='X') {
            document.querySelector('#top-middle').innerText = "X"
            gameBoard[0][1] = 'X'
            turn++
            console.log('topmiddleX')
            activePlayer()
        }else if (gameBoard[0][1]==='.' && playerTurn ==='O') {
            document.querySelector('#top-middle').innerText = "O"
            // document.querySelector('#bottom-middle').style.padding = '25px 33px 25px 32px'
            gameBoard[0][1] = 'O'
            turn++
            console.log('topmiddleO')
            activePlayer()
        }
    })
    document.querySelector('#top-right').addEventListener('click', function(){
        document.querySelector('#top-right').style.backgroundColor = 'slateblue';
        document.querySelector('#top-right').style.color = 'yellow';
        if (gameBoard[0][2]==='.'&& playerTurn==='X') {
            document.querySelector('#top-right').innerText = "X"
            gameBoard[0][2] = 'X'
            turn++
            console.log('toprightX')
            activePlayer()
        }else if (gameBoard[0][2]==='.' && playerTurn ==='O') {
            document.querySelector('#top-right').innerText = "O"
            // document.querySelector('#bottom-middle').style.padding = '25px 33px 25px 32px'
            gameBoard[0][2] = 'O'
            turn++
            console.log('toprightO')
            activePlayer()
        }
    })
    document.querySelector('#middle-left').addEventListener('click', function(){
        document.querySelector('#middle-left').style.backgroundColor = 'slateblue';
        document.querySelector('#middle-left').style.color = 'yellow';
        if (gameBoard[1][0]==='.'&& playerTurn==='X') {
            document.querySelector('#middle-left').innerText = "X"
            gameBoard[1][0] = 'X'
            turn++
            console.log('middleleftX')
            activePlayer()
        }else if (gameBoard[1][0]==='.' && playerTurn ==='O') {
            document.querySelector('#middle-left').innerText = "O"
            // document.querySelector('#bottom-middle').style.padding = '25px 33px 25px 32px'
            gameBoard[1][0] = 'O'
            turn++
            console.log('middleleftO')
            activePlayer()
        }
    })
    document.querySelector('#center').addEventListener('click', function(){
        document.querySelector('#center').style.backgroundColor = 'slateblue';
        document.querySelector('#center').style.color = 'yellow';
        if (gameBoard[1][1]==='.' && playerTurn==='X') {
            document.querySelector('#center').innerText = "X"
            gameBoard[1][1] = 'X'
            turn++
            console.log('centerX')
            activePlayer()
        }else if (gameBoard[1][1]==='.' && playerTurn ==='O') {
            document.querySelector('#center').innerText = "O"
            // document.querySelector('#bottom-middle').style.padding = '25px 33px 25px 32px'
            gameBoard[1][1] = 'O'
            turn++
            console.log('centerO')
            activePlayer()
        }
    })
    document.querySelector('#middle-right').addEventListener('click', function(){
        document.querySelector('#middle-right').style.backgroundColor = 'slateblue';
        document.querySelector('#middle-right').style.color = 'yellow';
        if (gameBoard[1][2]==='.'&& playerTurn==='X') {
            document.querySelector('#middle-right').innerText = "X"
            gameBoard[1][2] = 'X'
            turn++
            console.log('middlerightX')
            activePlayer()
        }else if (gameBoard[1][2]==='.' && playerTurn ==='O') {
            document.querySelector('#middle-right').innerText = "O"
            // document.querySelector('#bottom-middle').style.padding = '25px 33px 25px 32px'
            gameBoard[1][2] = 'O'
            turn++
            console.log('middlerightO')
            activePlayer()
        }
    })
    document.querySelector('#bottom-left').addEventListener('click', function(){
        document.querySelector('#bottom-left').style.backgroundColor = 'slateblue';
        document.querySelector('#bottom-left').style.color = 'yellow';
        if (gameBoard[2][0]==='.'&& playerTurn==='X') {
            document.querySelector('#bottom-left').innerText = "X"
            gameBoard[2][0] = 'X'
            turn++
            console.log('bottomleftX')
            activePlayer()
        }else if (gameBoard[2][0]==='.' && playerTurn ==='O') {
            document.querySelector('#bottom-left').innerText = "O"
            // document.querySelector('#bottom-middle').style.padding = '25px 33px 25px 32px'
            gameBoard[2][0] = 'O'
            turn++
            console.log('bottomleftO')
            activePlayer()
        }
    })
    document.querySelector('#bottom-middle').addEventListener('click', function(){
        document.querySelector('#bottom-middle').style.backgroundColor = 'slateblue';
        document.querySelector('#bottom-middle').style.color = 'yellow';
        if (gameBoard[2][1]==='.'&& playerTurn==='X') {
            document.querySelector('#bottom-middle').innerText = "X"
            gameBoard[2][1] = 'X'
            turn++
            console.log('bottommiddleX')
            activePlayer()
        }else if (gameBoard[2][1]==='.' && playerTurn ==='O') {
            document.querySelector('#bottom-middle').innerText = "O"
            // document.querySelector('#bottom-middle').style.padding = '25px 33px 25px 32px'
            gameBoard[2][1] = 'O'
            turn++
            console.log('bottommiddleO')
            activePlayer()
        }
    })
    document.querySelector('#bottom-right').addEventListener('click', function(){
        document.querySelector('#bottom-right').style.backgroundColor = 'slateblue';
        document.querySelector('#bottom-right').style.color = 'yellow';
        if (gameBoard[2][2]==='.'&& playerTurn==='X') {
            document.querySelector('#bottom-right').innerText = "X"
            gameBoard[2][2] = 'X'
            turn++
            console.log('bottomrightX')
            activePlayer()
        }else if (gameBoard[2][2]==='.' && playerTurn ==='O') {
            document.querySelector('#bottom-right').innerText = "O"
            gameBoard[2][2] = 'O'
            turn++
            console.log('bottomrightO')
            activePlayer()
        }
    })
    document.querySelector('#clear').addEventListener('click', function (){
        gameBoard= [['.', '.', '.'], ['.', '.', '.'], ['.', '.', '.']]
        for(let j = 0; j < gameButtons.length; j++){
            gameButtons[j].innerText = 'X'
            gameButtons[j].style.backgroundColor = 'rgb(234, 222, 114)'
            gameButtons[j].style.color = ' rgb(234, 222, 114)'
            gameButtons[j].disabled = false
        }
        turn = 1
        playerTurn = "X"
        endGame.innerText = "Player 1 is X. Player 2 is O. Click an empty square on the board to place your piece. Player 1 starts."
    })
})