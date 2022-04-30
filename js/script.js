// Get buttons
const newRoundBtn = document.querySelector("#new-round-btn")
const restartBtn = document.querySelector("#restart-btn")

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

const board = []
for (let i = 0; i < 3; i++) {
  const row = []
  for (let j = 0; j < 3; j++) {
    row.push("")
  }
  board.push(row)
}

const player1 = {
  name: "Player 1",
  mark: "X",
  wins: 0,
}

const player2 = {
  name: "Player 2",
  mark: "O",
  wins: 0,
}

let activePlayer = player1

let isGameOver = false

/////////////////
// Game Logic //
///////////////

const switchPlayers = () => {
  activePlayer = activePlayer === player1 ? player2 : player1
}

const addMark = (tile) => {
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
  const tile = event.currentTarget

  // Return if position is not empty (ie. not '')
  if (!isTileEmpty(tile)) {
    return
  }

  // Position is empty, so we add current user's mark and change players
  addMark(tile)
  switchPlayers()
}

// Attatch click listeners
tileElements.forEach((tile) =>
  tile.addEventListener("click", handlePlayerClick)
)
