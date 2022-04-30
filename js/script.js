// Elements that are hidden when start screen is shown
const gameElements = [
  document.querySelector("#player1-info"),
  document.querySelector("#game-board"),
  document.querySelector(".main-buttons"),
  document.querySelector("#player2-info"),
]
const startScreen = document.querySelector(".start-screen")

const hideStartScreen = () => {
  startScreen.classList.add("hide")
  gameElements.forEach((ele) => ele.classList.remove("hide"))
}

const showStartScreen = () => {
  startScreen.classList.remove("hide")
  gameElements.forEach((ele) => ele.classList.add("hide"))
}

showStartScreen()

const WIN_MESSAGE = "🎉 You Won 🎉"
const TIE_MESSAGE = "It's a tie"

// Get buttons
const new2PlayerBtn = document.querySelector("#new-2-player-game")
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

/////////////////
// Game Logic //
///////////////

const newRound = () => {
  isGameOver = false
  board = generateBoard()
  clearTiles()
  switchPlayers()
  newRoundBtn.disabled = true
  removeGameOverMessage()
}

const clearTiles = () => {
  tileElements.forEach((tile) => (tile.innerText = ""))
}

const restartGame = () => {
  player1.wins = 0
  player2.wins = 0
  newRound()
  renderPlayersInfo()
}

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
}

// To remove the active styles when it's a tie
const removeActiveCasses = () => {
  player1.infoEle.classList.remove("active")
  player2.infoEle.classList.remove("active")
}

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

const handlePlayerClick = (event) => {
  // Do nothing if game is over
  if (isGameOver) return

  const tile = event.currentTarget

  // Return if position is not empty (ie. not '')
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

// Takes a mark and returns the player object
const markToPlayer = (mark) => {
  if (player1.mark === mark) {
    return player1
  }

  if (player2.mark === mark) {
    return player2
  }
}

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
    // isGameOver = true
    // console.log("Winner found", winner)
    setGameOver(winner)
  } else if (isTie()) {
    // isGameOver = true
    // console.log("It's a tie!")
    setGameOver(null)
  }
}

const setGameOver = (winner) => {
  isGameOver = true

  if (winner) {
    winner.wins++
    renderPlayersInfo()
  } else {
    removeActiveCasses()
  }

  renderGameOverMessage(winner)
  newRoundBtn.disabled = false
}

const winString = (numWins) => {
  if (numWins === 1) {
    return "1 win"
  }

  return `${numWins} wins`
}

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

const renderGameOverMessage = (winner) => {
  if (winner) {
    winner.winDisplayEle.innerText = WIN_MESSAGE
  } else {
    const tieDisplayEle = document.querySelector("#tie-display")
    tieDisplayEle.innerText = TIE_MESSAGE
  }
}

const removeGameOverMessage = () => {
  const tieDisplayEle = document.querySelector("#tie-display")
  tieDisplayEle.innerText = ""
  player1.winDisplayEle.innerText = ""
  player2.winDisplayEle.innerText = ""
}

// Attatch click listeners
new2PlayerBtn.addEventListener("click", () => {
  restartGame()
  hideStartScreen()
})

tileElements.forEach((tile) =>
  tile.addEventListener("click", handlePlayerClick)
)

newRoundBtn.addEventListener("click", newRound)
restartBtn.addEventListener("click", showStartScreen)

colorToggle.addEventListener("change", () => {
  document.querySelector("html").classList.toggle("light")
})
