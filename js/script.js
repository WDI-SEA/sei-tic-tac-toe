// Elements that are hidden when start screen is shown
const gameElements = [
  document.querySelector("#player1-info"),
  document.querySelector("#game-board"),
  document.querySelector(".main-buttons"),
  document.querySelector("#player2-info"),
]

// Hide game mode selection buttons and show names form
const hideStartBtns = () => {
  const startBtnsDiv = document.querySelector(".start-btns")
  const namesFormDiv = document.querySelector(".names-form")

  startBtnsDiv.classList.add("hide")
  namesFormDiv.classList.remove("hide")
}

// Hide names form and show game mode selection buttons
const showStartBtns = () => {
  const startBtnsDiv = document.querySelector(".start-btns")
  const namesFormDiv = document.querySelector(".names-form")

  startBtnsDiv.classList.remove("hide")
  namesFormDiv.classList.add("hide")
}

// Hide the start screen and show the game board
const hideStartScreen = () => {
  const startScreen = document.querySelector(".start-screen")
  startScreen.classList.add("hide")
  gameElements.forEach((ele) => ele.classList.remove("hide"))
}

// Show the start screen with game mode selection buttons
// Hide the game board
// Reset player names and name input fields
const showStartScreen = () => {
  const startScreen = document.querySelector(".start-screen")
  showStartBtns()
  startScreen.classList.remove("hide")
  gameElements.forEach((ele) => ele.classList.add("hide"))

  // Show input for p2's name again, incase it was hidden before
  const p2NameControl = document.querySelector("#p2-name-form-control")
  p2NameControl.classList.remove("hide")

  // Reset name inputs
  const p1Input = document.querySelector("#p1-name")
  const p2Input = document.querySelector("#p2-name")
  p1Input.value = ""
  p2Input.value = ""

  // Reset player names
  player1.name = "Player 1"
  player2.name = "Player 2"
}

// Constants
const WIN_MESSAGE = "🎉 You Won 🎉"
const TIE_MESSAGE = "It's a tie"
const HUMAN_MODE = "HUMAN_MODE"
const AI_MODE = "AI_MODE"

// Get global buttons
const new2PlayerBtn = document.querySelector("#new-2-player-game")
const newAiBtn = document.querySelector("#new-computer-game")
const startGameBtn = document.querySelector("#start-game-btn")
const newRoundBtn = document.querySelector("#new-round-btn")
const restartBtn = document.querySelector("#restart-btn")
const colorToggle = document.querySelector("#color-mode")

// Create tiles in JS
// so we can add their position index as an attribute.
// This will make it easier to link which button was clicked
// with the same position in our game board
const gameBoardElement = document.querySelector("#game-board")
const tileElements = []

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    // Create a button
    const tile = document.createElement("button")
    tile.setAttribute("type", "button")
    tile.classList.add("tile")

    // Add the index
    tile.setAttribute("position", `[${i}, ${j}]`)

    // Add the button as a child of the game board
    gameBoardElement.appendChild(tile)

    // Add the button to our tileElements array
    tileElements.push(tile)
  }
}

/////////////////
// Game State //
///////////////

// 2D array representation of the board state
// Each cell is either empty ('') or holds a player's mark ('X' or 'O')
const generateBoard = () => {
  const board = []
  for (let i = 0; i < 3; i++) {
    const row = []
    for (let j = 0; j < 3; j++) {
      row.push("")
    }
    board.push(row)
  }
  return board
}

let board = generateBoard()

const player1 = {
  name: "Player 1",
  mark: "X",
  wins: 0,
  infoEle: document.querySelector("#player1-info .player-info"),
  winDisplayEle: document.querySelector("#player1-win-display"),
}

const player2 = {
  name: "Player 2",
  mark: "O",
  wins: 0,
  infoEle: document.querySelector("#player2-info .player-info"),
  winDisplayEle: document.querySelector("#player2-win-display"),
}

let activePlayer = player1

let isGameOver = false

let gameMode = HUMAN_MODE

/////////////////
// Game Logic //
///////////////

// Starts a new game round
// The game board is reset and isGameOver is set to false
// Messages like "you win" or "it's a tie" are hidden
// switchPlayers() is called so that P1 doesn't start every game
const newRound = () => {
  isGameOver = false
  board = generateBoard()
  clearTiles()
  switchPlayers()
  newRoundBtn.disabled = true
  removeGameOverMessage()
}

// Removes X's and O's from the screen
const clearTiles = () => {
  tileElements.forEach((tile) => (tile.innerText = ""))
}

const restartGame = () => {
  // Reset win counts
  player1.wins = 0
  player2.wins = 0

  newRound()
  renderPlayersInfo()
}

// Setup for a game VS the "dumb" computer
// Only called after game mode has already been set to AI_MODE
const startAiGame = () => {
  activePlayer = player2
  restartGame()
  player2.name = "Computer"
  renderPlayersInfo()
}

// Switch active player and set appropriate styles
// Make a move if game mode is AI_MODE and it's the computer's turn
const switchPlayers = () => {
  if (activePlayer === player1) {
    activePlayer = player2
    player2.infoEle.classList.add("active")
    player1.infoEle.classList.remove("active")
  } else {
    activePlayer = player1
    player1.infoEle.classList.add("active")
    player2.infoEle.classList.remove("active")
  }

  if (gameMode === AI_MODE && activePlayer === player2) {
    makeAiMove()
  }
}

// Choose a random tile until an empty one is found
// Wait a random amount of time between minDelay and maxDelay
// Mark the empty tile we found, check if game is over, then switch players
const makeAiMove = () => {
  let foundEmptyTile = null
  while (!foundEmptyTile) {
    const randomIndex = Math.floor(Math.random() * 9)
    const tile = tileElements[randomIndex]
    if (isTileEmpty(tile)) {
      foundEmptyTile = tile
    }
  }

  // Add a radom "tinking time" delay for the computer
  const minDelay = 400
  const maxDelay = 700
  const randomDelay =
    Math.floor(Math.random() * (maxDelay - minDelay)) + minDelay

  setTimeout(() => {
    addMark(foundEmptyTile)
    checkGameOver()
    if (!isGameOver) switchPlayers()
  }, randomDelay)
}

// To remove the active styles from both players when it's a tie
const removeActiveClasses = () => {
  player1.infoEle.classList.remove("active")
  player2.infoEle.classList.remove("active")
}

// Mark a tile both on screen and in our board representation
const addMark = (tile) => {
  // Semicolon explanation: https://prettier.io/docs/en/rationale.html#semicolons
  ;[row, col] = JSON.parse(tile.getAttribute("position"))
  board[row][col] = activePlayer.mark
  tile.innerText = activePlayer.mark
}

const isTileEmpty = (tile) => {
  const [row, col] = JSON.parse(tile.getAttribute("position"))
  // If board position is falsy, return true
  return !board[row][col]
}

// Called when a player clicks on a game tile
const handlePlayerClick = (event) => {
  // Do nothing if game is over
  if (isGameOver) return

  // Do nothing if it's the computer's turn
  if (gameMode === AI_MODE && activePlayer === player2) {
    return
  }

  const tile = event.currentTarget

  // Do nothing if position is not empty (ie. not '')
  if (!isTileEmpty(tile)) {
    return
  }

  // Position is empty, so we add current user's mark and change players
  addMark(tile)
  checkGameOver()
  if (!isGameOver) switchPlayers()
}

// Helper function for win checking
const isSameMark = (mark1, mark2, mark3) => {
  // Dont return true if all marks are empty strings
  if (mark1 === "") return false

  return mark1 === mark2 && mark1 === mark3
}

// Takes a mark and returns the player object associated with that mark
// eg. ('X') => player1
const markToPlayer = (mark) => {
  if (player1.mark === mark) {
    return player1
  }

  if (player2.mark === mark) {
    return player2
  }
}

// Check if there are three in a row horizontally
// Returns the winning player if there is one, or null
const horizontalWinner = () => {
  let winningMark = ""

  for (let i = 0; i < 3; i++) {
    const row = board[i]

    if (isSameMark(row[0], row[1], row[2])) {
      winningMark = row[0]
      break
    }
  }

  if (!winningMark) {
    return null
  }

  return markToPlayer(winningMark)
}

// Check if there are three in a row vertically
// Returns the winning player if there is one, or null
const verticalWinner = () => {
  let winningMark = ""

  for (let i = 0; i < 3; i++) {
    const mark1 = board[0][i]
    const mark2 = board[1][i]
    const mark3 = board[2][i]

    if (isSameMark(mark1, mark2, mark3)) {
      winningMark = mark1
      break
    }
  }

  if (!winningMark) {
    return null
  }

  return markToPlayer(winningMark)
}

// Check if there are three in a row diagonally
// Returns the winning player if there is one, or null
const diagonalWinner = () => {
  let winningMark = ""

  const diagonal1 = [board[0][0], board[1][1], board[2][2]]
  const diagonal2 = [board[0][2], board[1][1], board[2][0]]

  if (isSameMark(...diagonal1)) {
    winningMark = diagonal1[0]
  } else if (isSameMark(...diagonal2)) {
    winningMark = diagonal2[0]
  }

  if (!winningMark) {
    return null
  }

  return markToPlayer(winningMark)
}

// Helper function for checking if it's a tie game
// Returns true if every tile in a row has a mark
const isRowFull = (row) => {
  return !!row[0] && !!row[1] && !!row[2]
}

// Returns true if board is full (ie. all rows are full)
const isTie = () => {
  return isRowFull(board[0]) && isRowFull(board[1]) && isRowFull(board[2])
}

const checkGameOver = () => {
  const winner = horizontalWinner() || verticalWinner() || diagonalWinner()

  if (winner) {
    setGameOver(winner)
  } else if (isTie()) {
    setGameOver(null)
  }
}

const setGameOver = (winner) => {
  isGameOver = true

  if (winner) {
    winner.wins++
    renderPlayersInfo()
  } else {
    // It's a tie
    removeActiveClasses()
  }

  // Will show "You Win" if there is a winner or "It's a tie" if winner is null
  renderGameOverMessage(winner)
  newRoundBtn.disabled = false
}

// Convert a number of wins to a string to display
const winString = (numWins) => {
  if (numWins === 1) {
    return "1 win"
  }

  return `${numWins} wins`
}

// Update each player's info displayed on the screen
const renderPlayersInfo = () => {
  const player1Name = document.querySelector("#player1-name")
  const player1Mark = document.querySelector("#player1-mark")
  const player1Wins = document.querySelector("#player1-wins")

  const player2Name = document.querySelector("#player2-name")
  const player2Mark = document.querySelector("#player2-mark")
  const player2Wins = document.querySelector("#player2-wins")

  player1Name.innerText = player1.name
  player1Mark.innerText = player1.mark
  player1Wins.innerText = winString(player1.wins)

  player2Name.innerText = player2.name
  player2Mark.innerText = player2.mark
  player2Wins.innerText = winString(player2.wins)
}

// If a winner is passed, show "You Win" above that user's info box
// If no winner is passed it's a tie game and the tie message is displayed
const renderGameOverMessage = (winner) => {
  if (winner) {
    winner.winDisplayEle.innerText = WIN_MESSAGE
  } else {
    const tieDisplayEle = document.querySelector("#tie-display")
    tieDisplayEle.innerText = TIE_MESSAGE
  }
}

// Used when starting a new round or new game
// to remove the "you win" or "it's a tie" messages
const removeGameOverMessage = () => {
  const tieDisplayEle = document.querySelector("#tie-display")
  tieDisplayEle.innerText = ""
  player1.winDisplayEle.innerText = ""
  player2.winDisplayEle.innerText = ""
}

// After users enter their names, update their names in the game player object
// Then start the game based on the game mode that was set
const handleNamesSubmit = () => {
  const p1Input = document.querySelector("#p1-name")
  const p2Input = document.querySelector("#p2-name")

  const p1Val = p1Input.value
  const p2Val = p2Input.value

  if (p1Val !== "") {
    player1.name = p1Val
  }

  if (p2Val !== "") {
    player2.name = p2Val
  }

  if (gameMode === HUMAN_MODE) {
    restartGame()
  } else if (gameMode === AI_MODE) {
    startAiGame()
  }

  hideStartScreen()
}

/////////////////////////////
// Attach click listeners //
//////////////////////////

// Set game mode to HUMAN_MODE and go to 2 player name input screen
new2PlayerBtn.addEventListener("click", () => {
  gameMode = HUMAN_MODE
  hideStartBtns()
})

// Set game mode to AI_MODE and go to player name input screen
newAiBtn.addEventListener("click", () => {
  gameMode = AI_MODE
  // Dont allow changing the computer's name (Player 2)
  const p2NameControl = document.querySelector("#p2-name-form-control")
  p2NameControl.classList.add("hide")

  hideStartBtns()
})

// On name input screen, called after users enter their names
startGameBtn.addEventListener("click", handleNamesSubmit)

// Give each game board tile a click event
tileElements.forEach((tile) =>
  tile.addEventListener("click", handlePlayerClick)
)

// Start a new round between the same players
newRoundBtn.addEventListener("click", newRound)
// Go back to the start screen so a new game mode can be selected
restartBtn.addEventListener("click", showStartScreen)

// Toggle dark and light mode
colorToggle.addEventListener("change", () => {
  document.querySelector("html").classList.toggle("light")
})

//////////////////////////////////////////////////////////

// Show the start screen with game mode selection buttons on page load
showStartScreen()
