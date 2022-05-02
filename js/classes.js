class Game {
  #HUMAN_MODE = "HUMAN_MODE"
  #AI_MODE = "AI_MODE"
  #MODES = [this.#HUMAN_MODE, this.#AI_MODE]

  #board
  #players
  #mode = this.#HUMAN_MODE
  #activePlayerIndex
  #isGameOver
  #renderer

  constructor(player1, player2, renderer) {
    this.#players = [player1, player2]
    this.#board = this.#generateBoard()
    this.#activePlayerIndex = 0
    this.#isGameOver = false
    this.#renderer = renderer
  }

  set mode(mode) {
    if (!this.#MODES.includes(mode)) {
      throw new Error("Incorrect mode")
    }

    this.#mode = mode
  }

  // Source is only set for AI moves
  makeMove([row, col], source = "HUMAN") {
    // Do nothing if the game is over
    if (this.#isGameOver) return

    // Do nothing if it's the computer's turn and a human clicked
    if (this.#mode === this.#AI_MODE && this.#activePlayerIndex === 1) {
      if (source !== "COMPUTER") return
    }

    // Do nothing if tile is already taken
    if (this.#isTileMarked([row, col])) return

    const mark = this.#activePlayer().mark
    this.#board[row][col] = mark
    this.#renderer.addMark([row, col], mark)

    this.#checkGameOver()
    if (!this.#isGameOver) this.#switchPlayers()
  }

  newRound() {
    this.#isGameOver = false
    this.#board = this.#generateBoard()
    renderer.newRound()
    this.#switchPlayers()
  }

  restart() {
    player1.wins = 0
    player2.wins = 0

    this.newRound()
  }

  #generateBoard() {
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

  #switchPlayers() {
    this.#activePlayerIndex = this.#activePlayerIndex === 0 ? 1 : 0
    renderer.activePlayerNum = this.#activePlayerIndex
  }

  #activePlayer() {
    return this.#players[this.#activePlayerIndex]
  }

  #isTileMarked([row, col]) {
    return this.#board[row][col] !== ""
  }

  #checkGameOver() {
    let winner = null

    const horizontalWinner = this.#horizontalWinner()
    const verticalWinner = this.#verticalWinner()
    const diagonalWinner = this.#diagonalWinner()

    if ([0, 1].includes(horizontalWinner)) {
      winner = horizontalWinner
    } else if ([0, 1].includes(verticalWinner)) {
      winner = verticalWinner
    } else if ([0, 1].includes(diagonalWinner)) {
      winner = diagonalWinner
    }

    if ([0, 1].includes(winner)) {
      this.#setGameOver(winner)
    } else if (this.#isTie()) {
      this.#setGameOver(null)
    }
  }

  #setGameOver(winnerIndex) {
    this.#isGameOver = true
    renderer.setWinner(winnerIndex)

    if (winnerIndex === 0 || winnerIndex === 1) {
      const wins = ++this.#players[winnerIndex].wins
      renderer.updatePlayerWins(winnerIndex, wins)
    }
  }

  #horizontalWinner() {
    let winningMark = ""

    for (let i = 0; i < 3; i++) {
      const row = this.#board[i]

      if (this.#isSameMark(row[0], row[1], row[2])) {
        winningMark = row[0]
        break
      }
    }

    if (!winningMark) {
      return null
    }

    return this.#markToPlayerIndex(winningMark)
  }

  #verticalWinner() {
    let winningMark = ""

    for (let i = 0; i < 3; i++) {
      const mark1 = this.#board[0][i]
      const mark2 = this.#board[1][i]
      const mark3 = this.#board[2][i]

      if (this.#isSameMark(mark1, mark2, mark3)) {
        winningMark = mark1
        break
      }
    }

    if (!winningMark) {
      return null
    }

    return this.#markToPlayerIndex(winningMark)
  }

  #diagonalWinner() {
    let winningMark = ""

    const diagonal1 = [this.#board[0][0], this.#board[1][1], this.#board[2][2]]
    const diagonal2 = [this.#board[0][2], this.#board[1][1], this.#board[2][0]]

    if (this.#isSameMark(...diagonal1)) {
      winningMark = diagonal1[0]
    } else if (this.#isSameMark(...diagonal2)) {
      winningMark = diagonal2[0]
    }

    if (!winningMark) {
      return null
    }

    return this.#markToPlayerIndex(winningMark)
  }

  #isTie() {
    return (
      this.#isRowFull(this.#board[0]) &&
      this.#isRowFull(this.#board[1]) &&
      this.#isRowFull(this.#board[2])
    )
  }

  #isRowFull(row) {
    return !!row[0] && !!row[1] && !!row[2]
  }

  #markToPlayerIndex(mark) {
    if (this.#players[0].mark === mark) return 0
    if (this.#players[1].mark === mark) return 1
  }

  #isSameMark(mark1, mark2, mark3) {
    if (mark1 === "") return false

    return mark1 === mark2 && mark1 === mark3
  }
}

class Player {
  #name

  constructor(index, name, mark) {
    if (index !== 0 && index !== 1) throw new Error("Position must be 0 or 1")
    this.index = index

    this.name = name

    if (!mark) {
      this.mark = this.index === 0 ? "X" : "O"
    } else {
      this.mark = mark
    }
    this.wins = 0
  }

  set name(name) {
    if (!name) {
      this.#name = this.index === 0 ? "Player 1" : "Player 2"
    } else {
      this.#name = name
    }
  }

  get name() {
    return this.#name
  }
}

class Renderer {
  #gameElements
  #startBtnsDiv
  #namesFormDiv
  #menuPanel
  #gameBoardElement = document.querySelector("#game-board")
  #tieDisplayElement = document.querySelector("#tie-display")
  #newRoundBtn = document.querySelector("#new-round-btn")
  #new2PlayerBtn = document.querySelector("#new-2-player-game")
  #startGameBtn = document.querySelector("#start-game-btn")

  #player1 = {
    infoElement: document.querySelector("#player1-info .player-info"),
    winMessageElement: document.querySelector("#player1-win-display"),
    nameElement: document.querySelector("#player1-name"),
    winCountElement: document.querySelector("#player1-wins"),
  }

  #player2 = {
    infoElement: document.querySelector("#player2-info .player-info"),
    winMessageElement: document.querySelector("#player2-win-display"),
    nameElement: document.querySelector("#player2-name"),
    winCountElement: document.querySelector("#player2-wins"),
  }

  #GAME_MODE = "GAME"
  #MENU_MODE = "MENU"
  #mode
  #tiles = []
  #tileMap = {}

  constructor() {
    this.#gameElements = [
      document.querySelector("#player1-info"),
      document.querySelector("#game-board"),
      document.querySelector(".main-buttons"),
      document.querySelector("#player2-info"),
    ]

    this.#startBtnsDiv = document.querySelector(".start-btns")
    this.#namesFormDiv = document.querySelector(".names-form")
    this.#menuPanel = document.querySelector(".start-screen")

    this.#createTiles()
    this.toggleMenuAndGame()

    this.#startGameBtn.addEventListener("click", () => {
      this.#handleNamesSubmit
      this.toggleMenuAndGame()
    })

    this.#new2PlayerBtn.addEventListener("click", () => {
      this.mode = this.#GAME_MODE
      this.#showNamesForm()
    })
  }

  addMark(position, mark) {
    const tile = this.#tileMap[position]
    tile.innerText = mark
  }

  updatePlayerName(playerIndex, name) {
    if (![0, 1].includes(playerIndex)) {
      throw new Error("Player index must be 0 or 1")
    }

    if (!name) name = `Player ${playerIndex + 1}`

    if (playerIndex === 0) {
      this.#player1.nameElement.innerText = name
      return
    }

    this.#player2.nameElement.innerText = name
  }

  updatePlayerWins(playerIndex, wins) {
    if (![0, 1].includes(playerIndex)) {
      throw new Error("Player index must be 0 or 1")
    }

    const winString = wins === 1 ? "1 win" : `${wins} wins`

    if (playerIndex === 0) {
      this.#player1.winCountElement.innerText = winString
      return
    }
    this.#player2.winCountElement.innerText = winString
  }

  toggleMenuAndGame() {
    if (!this.#mode) {
      this.#mode = this.#MENU_MODE
    } else {
      this.#mode =
        this.#mode === this.#MENU_MODE ? this.#GAME_MODE : this.#MENU_MODE
    }

    if (this.#mode === this.#MENU_MODE) {
      this.#hideGameBoard()
      this.#showMenuPanel()
      return
    }

    if (this.#mode === this.#GAME_MODE) {
      this.#hideMenuPanel()
      this.#showGameBoard()
      return
    }
  }

  newRound() {
    this.#clearTiles()
    this.#clearMessages()
    // this.#isGameOver = false
    this.#newRoundBtn.disabled = true
  }

  setWinner(winnerIndex) {
    // this.#isGameOver = true
    if ([0, 1].includes(winnerIndex)) {
      this.#showWinMessage(winnerIndex)
      this.activePlayerNum = winnerIndex
    } else {
      this.#showTieMessage()
      this.activePlayerNum = null
    }
    this.#newRoundBtn.disabled = false
  }

  set activePlayerNum(playerIndex) {
    if (![null, 0, 1].includes(playerIndex)) {
      throw new Error("Player number must be 0 or 1 or null")
    }

    if (playerIndex !== 0 && !playerIndex) {
      this.#player1.infoElement.classList.remove("active")
      this.#player2.infoElement.classList.remove("active")
    } else if (playerIndex === 0) {
      this.#player1.infoElement.classList.add("active")
      this.#player2.infoElement.classList.remove("active")
    } else {
      this.#player1.infoElement.classList.remove("active")
      this.#player2.infoElement.classList.add("active")
    }
    // this.#activePlayerNum = playerIndex
  }

  addTileClickListener(callback) {
    this.#tiles.forEach((tile) => tile.addEventListener("click", callback))
  }

  #handleNamesSubmit() {
    const p1Input = document.querySelector("#p1-name")
    const p2Input = document.querySelector("#p2-name")

    const p1Val = p1Input.value
    const p2Val = p2Input.value

    if (p1Val !== "") {
      this.updatePlayerName(0, p1Val)
    }

    if (p2Val !== "") {
      this.updatePlayerName(1, p2Val)
    }
  }

  #createTiles() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        // Create a button
        const tile = document.createElement("button")
        tile.setAttribute("type", "button")
        tile.classList.add("tile")

        // Add the index
        tile.setAttribute("position", `[${i}, ${j}]`)

        // Add the button as a child of the game board
        this.#gameBoardElement.appendChild(tile)

        // Add the button to our tileElements array
        this.#tiles.push(tile)
        this.#tileMap[[i, j]] = tile
      }
    }
  }

  #showNamesForm() {
    this.#startBtnsDiv.classList.add("hide")
    this.#namesFormDiv.classList.remove("hide")
  }

  #showMainMenu() {
    this.#startBtnsDiv.classList.remove("hide")
    this.#namesFormDiv.classList.add("hide")
  }

  #showMenuPanel() {
    this.#menuPanel.classList.remove("hide")
  }

  #hideMenuPanel() {
    this.#menuPanel.classList.add("hide")
  }

  #showGameBoard() {
    this.#hideMenuPanel()
    this.#gameElements.forEach((ele) => ele.classList.remove("hide"))
  }

  #hideGameBoard() {
    this.#showMenuPanel()
    this.#gameElements.forEach((ele) => ele.classList.add("hide"))
  }

  #clearTiles() {
    this.#tiles.forEach((tile) => (tile.innerText = ""))
  }

  #showTieMessage() {
    const tie_message = "It's a tie"
    this.#tieDisplayElement.innerText = tie_message
  }

  #showWinMessage(winnerIndex) {
    const win_message = "🎉 You Won 🎉"
    if (winnerIndex === 0) {
      this.#player1.winMessageElement.innerText = win_message
      return
    }

    if (winnerIndex === 1) {
      this.#player2.winMessageElement.innerText = win_message
    }
  }

  #clearMessages() {
    this.#tieDisplayElement.innerText = ""
    this.#player1.winMessageElement.innerText = ""
    this.#player2.winMessageElement.innerText = ""
  }
}

const renderer = new Renderer()

const player1 = new Player(0)
const player2 = new Player(1)
const game = new Game(player1, player2, renderer)

const handlePlayerClick = (event) => {
  const tile = event.currentTarget
  const position = JSON.parse(tile.getAttribute("position"))
  game.makeMove(position)
}

const handleNewRound = () => {
  game.newRound()
}

renderer.addTileClickListener(handlePlayerClick)
document
  .querySelector("#new-round-btn")
  .addEventListener("click", handleNewRound)

document.querySelector("#restart-btn").addEventListener("click", () => {
  game.restart()
  renderer.updatePlayerWins(0, 0)
  renderer.updatePlayerWins(1, 0)
  renderer.toggleMenuAndGame()
})
