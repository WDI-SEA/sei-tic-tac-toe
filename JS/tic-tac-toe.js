//javascript
    //APP STATE (variables)
        //the gameboard -- use an array
        // [    
        //     [ 'x', ' ', ' ' ]
        //     [ 'x', 'o', ' ' ]
        //     [ 'x', 'o', ' ' ]
        // ]    
    //var for whose turn it is
    //(maybe) -- has the game been won? boolean
    //DOM content loaded
    //query selector(s) to handle user clicks
        //current plater needs to be marked on the board -- if that space is empty (conditional) using css (if you want  to use it)
        //that move needs to be placed in the gameboard array
        //function that checks if there is a winner from the gameboard array
    //function that checks if there is a winner
        //in that function -- if else statements
            //checking all of the win conditions
                //if a win is found -- stop the game and show the winner
                //otherwise let game continue
        //and cats games (after nine moves) (or gameboard is full and no winner)
const gameElements = [
    document.querySelector('#game-board'),
    document.querySelector('.clear-button')
]
//const's
const playerOneWins = 'Player One Wins!'
const playerTwoWins = 'Player Two Wins!'
const tieGame = "It's a tie, run it back"

//global buttons
const clearButton = document.querySelector('.clear-button')

//gamebox
const gameBoardElement = document.querySelector('#game-board')
const gameButtonElements = []

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        //create button
        const gameButton = document.createElement('button')
        gameButton.setAttribute('type', 'button')
        gameButton.classList.add('gameButton')
        //add index
        gameButton.setAttribute('position', `[${i}, ${j}]`)
        //add button to game board as a child
        gameBoardElement.appendChild(gameButton)
        //add button to gameButtonElements []
        gameButtonElements.push(gameButton)
    }
}

//generate game board
const generateBoard = () => {
    const board = []
    for (let i = 0; i < 3; i++) {
        const row =[]
        for (let j = 0; j < 3; j++) {
            row.push('')
        }
        board.push(row)
    }
    return board
}

let board = generateBoard()

//who's turn
let activePlayer = playerOne

let isGameOver = false

//clear board (restart game)
const clearBoard = () => {
    isGameOver = false
    board = generateBoard()
    clearGameButtons()
    clearButton.disabled = true
    removeGameOverMessage()
}

const clearGameButtons = () => {
    gameButtonElements.forEach((gameButton) => (gameButton.innerText = ''))
}

const switchPlayers = () => {
    if (activePlayer === player1) {
        activePlayer = player2
        player2.infoEle.classList.add('active')
        player1.infoEle.classList.remove('active')
    } else {
        activePlayer = player1
        player1.infoEle.classList.add('active')
        player2.infoEle.classList.remove('active')
    }
}

const addPlayerMark = (gameButton) => {
    [row, col] = JSON.parse(tile.getAttribute('position'))
    board[row][col] = activePlayer.playerMark
    gameButton.innerText = activePlayer.playerMark
}

const isGameButtonEmpty = (gameButton) => {
    const [row,col] = JSON.parse(gameButton.getAttribute('position'))
    return !board[row][col]
}

const doesPlayerClick = (event) => {
    if(isGameOver) return


    const gameButton = event.currentTarget

    if (!isGameButtonEmpty(gameButton)) {
    return
    }

    addPlayerMark(gameButton)
    checkGameOver()
    if(!isGameOver) switchPlayers()
}

const isSamePlayerMark = (playerMark1, playerMark2, playerMark3) => {
    if (playerMark1 === '') return false
    return (playerMark1 === playerMark2) && (playerMark1 === playerMark3)
}

const markToPlayer = (playerMark) => {
    if(player1.playerMark === playerMark) {
        return player1
    }
    if (player2.playerMark === playerMark) {
    return player2
    }
}
//checks for winner across
const winnerAcross = () => {
    letwinningMark = ''

    for (let i = 0; i < 3; i++) {
        const row = board[i]
    
        if (isSamePlayerMark(row[0], row[1], row[2])) {
            winningMark = row[0]
            break
        }
    }
    if (!winningMark) {
        return null
    }
    return markToPlayer(winningMark)
}
//checks for winner down
const winnerDown = () => {
    let winningMark = ""
  
    for (let i = 0; i < 3; i++) {
      const playerMark1 = board[0][i]
      const PlayerMark2 = board[1][i]
      const playerMark3 = board[2][i]
  
      if (isSamePlayerMark(playerMark1, PlayerMark2, playerMark3)) {
        winningMark = playerMark1
        break
      }
    }
  
    if (!winningMark) {
      return null
    }
  
    return markToPlayer(winningMark)
}

//checks for winner diagonally
const winnerDiagonal = () => {
    let winningMark = ""
  
    const diagonal1 = [board[0][0], board[1][1], board[2][2]]
    const diagonal2 = [board[0][2], board[1][1], board[2][0]]
  
    if (isSamePlayerMark(...diagonal1)) {
      winningMark = diagonal1[0]
    } else if (isSamePlayerMark(...diagonal2)) {
      winningMark = diagonal2[0]
    }
  
    if (!winningMark) {
      return null
    }
  
    return markToPlayer(winningMark)
}

const isRowFull = (row) => {
    return !!row[0] && !!row[1] && !!row[2]
  }
  
  // Returns true if board is full (ie. all rows are full)
  const isTie = () => {
    return isRowFull(board[0]) && isRowFull(board[1]) && isRowFull(board[2])
  }
  
  const checkGameOver = () => {
    const winner = winnerAcross() || winnerDown() || winnerDiagonal()
  
    if (winner) {
      setGameOver(winner)
    } else if (isTie()) {
      setGameOver(null)
    }
  }


  //INCOMPLETE