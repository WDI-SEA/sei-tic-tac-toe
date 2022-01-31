const arrBoard = [,,,,,,,,]
const winCombos =[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]]
let winExist = false
// function to check if player won. returns true if player`s board matches winCombos
let checkBoard = (playerBoard,winKeys) => {
    let x = 0
    let win = false
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 3; j++) {
            if (playerBoard[winKeys[i][j]] === 1) {
                x++                
            } 
        }        
        if (x === 3) {
           win = true        
           winExist = true    
        } 
        x = 0   // reinitialize counter back to 0       
    }    
    return win
}

let playerX = [,,,,,,,,]
let playerO = [,,,,,,,,]
let turnCount = 0

const onClick = (event) => {    
    if (event.target.nodeName === 'BUTTON') {
        let choice = event.target.id
        let player = document.getElementById('play').innerText
        do {
            if (player === "X") {
                playerX[choice] = 1
                document.getElementById('play').innerText = "O"
                document.getElementById(choice).innerText = "X"
                document.getElementById(choice).style.backgroundColor = "khaki"
                document.getElementById(choice).disabled = true;
                if (checkBoard(playerX,winCombos) === true) {
                    // using .innerHTML for fun purposes
                    document.getElementById('game-message').innerHTML = '<img src="img/duck-dancing.gif" width="200px">Player X wins!'
                }
            } else {
                playerO[choice] = 1
                document.getElementById('play').innerText = "X"
                document.getElementById(choice).innerText = "O"
                document.getElementById(choice).style.backgroundColor = "coral"
                document.getElementById(choice).disabled = true;
                if (checkBoard(playerO,winCombos) === true) {
                    document.getElementById('game-message').innerHTML = '<img src="img/duck-dancing.gif" width="200px">Player O wins!'
                }
            }
            arrBoard[choice] = player                         
            turnCount++
            if (turnCount ==9  && winExist == false) {
                document.getElementById('game-message').innerHTML = '<img src="img/duck-dancing.gif" width="200px">Draw! Good game!'
            }
        } while (document.getElementById("0").innerText.length ==0);
    }
}
window.addEventListener('click', onClick);

