const arrBoard = [,,,,,,,,]
const winCombos = 
[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],    
]

// function to check if player won. returns true if player board matches winCombos
let checkBoard = (playerBoard,winKeys) => {
    let x = 0
    let win = false
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 3; j++) {
            if (playerBoard[winKeys[i][j]] === 1) {
                x++
                // debug line
                // console.log("X value : " + x + " | key : " + winKeys[i][j] + " | playerboard : " + playerBoard[winKeys[i][j]])
            } 
        }
        // console.log("vvvvvvvvvvvvvvvvvvvv")
        if (x === 3) {
           win = true            
        } 
        // reinitialize counter back to 0
        x = 0
          
    }    
    return win
}

let playerX = [,,,,,,,,]
let playerO = [,,,,,,,,]

const onClick = (event) => {
    if (event.target.nodeName === 'BUTTON') {
        let choice = event.target.id
        let player = document.getElementById('play').innerText
        console.log(player)
        if (player === "X") {
            playerX[choice] = 1
            document.getElementById('play').innerText = "O"
            document.getElementById(choice).innerText = "X"
            document.getElementById(choice).style.backgroundColor = "khaki"
            if (checkBoard(playerX,winCombos) === true) {
                // using .innerHTML for fun purposes
                document.getElementById('game-message').innerHTML = '<img src="img/duck-dancing.gif" width="200px">Player X wins!'
                
            }
        } else {
            playerO[choice] = 1
            document.getElementById('play').innerText = "X"
            document.getElementById(choice).innerText = "O"
            document.getElementById(choice).style.backgroundColor = "coral"
            if (checkBoard(playerO,winCombos) === true) {
                document.getElementById('game-message').innerHTML = '<img src="img/duck-dancing.gif" width="200px">Player O wins!'
            }
        }
        arrBoard[choice] = player             
        
    }
  }
  window.addEventListener('click', onClick);
