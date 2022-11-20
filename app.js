export default class TTT {
  constructor(name, symbol) {
    this.name = name
    this.symbol = symbol
  }
  // winning condition arrays
  winningConditionRow1 = ["", "", ""]
  winningConditionRow2 = ["", "", ""]
  winningConditionRow3 = ["", "", ""]
  winningConditionColumn1 = ["", "", ""]
  winningConditionColumn2 = ["", "", ""]
  winningConditionColumn3 = ["", "", ""]
  winningConditionHorizontal1 = ["", "", ""]
  winningConditionHorizontal2 = ["", "", ""]
  // Global Variables
  currentPlayer = "x"
  // A game board array will store the game board
  gameBoard = ["", "", "", "", "", "", "", "", ""]
  sayHello() {
    console.log(`Welcome ${this.name} you will be using the ${this.symbol}`)
  }
  chooseSquare(userInput) {
    // is square marked ? do nothing : choose square
    if (userInput.textContent === "x" || userInput.textContent === "o") {
    } else {
      userInput.textContent === currentPlayerSymbol
      this.toggleActivePlayer()
    }
    // change square to players symbol
    //
  }

  toggleActivePlayer(currentPlayer, DOMOutputElement) {
    // toggle active player
    // if player === x toggle player o
    if (currentPlayer === "x") {
      currentPlayer === "o"
    } else {
      currentPlayer === "x"
    }
    // if player === 0 toggle player x
    // Render to below H1 "Player ? it is your turn"
    DOMOutputElement.textContent = `${currentPlayer} it is your turn`
  }

  updatePlayerState() {
    // get square that was clicked and update arrays
  }
  checkWinCondition() {
    // checks arrays. If any winning condition is full the player has won.
    // If no array is full and certain amount of moves has taken place cats game
    // Render result below h1
  }
  newGame() {
    // Button should reset the board and start a new game
    newGameBtn.addEventListener("click", (e) => {
      console.log("button clicked")
      location.reload()
      e.preventDefault()
    })
  }
}

// DOM SELECTORS
const title = document.querySelector(".title")
const newGameBtn = document.querySelector(".new-game")
const btn1 = document.getElementById("button1")
const btn2 = document.getElementById("button2")
const btn3 = document.getElementById("button3")
const btn4 = document.getElementById("button4")
const btn5 = document.getElementById("button5")
const btn6 = document.getElementById("button6")
const btn7 = document.getElementById("button7")
const btn8 = document.getElementById("button8")
const btn9 = document.getElementById("button9")
const squares = document.querySelectorAll(".square")

// EVENT LISTENERS
// square.addEventListener("click", (e) => {
//   console.log(e.target)
//   e.target.textContent = Game.currentPlayer
// })
squares.forEach((square) => {
  square.addEventListener("click", (e) => {
    square.textContent = Game.currentPlayer
  })
})

// btn1.addEventListener("click", (e) => {
//   // change to active currentPlayer
//   btn1.textContent = Game.currentPlayer
// })
// btn2.addEventListener("click", (e) => {
//   btn2.textContent = Game.currentPlayer
// })
// btn3.addEventListener("click", (e) => {})
// btn4.addEventListener("click", (e) => {})
// btn5.addEventListener("click", (e) => {})
// btn6.addEventListener("click", (e) => {})
// btn7.addEventListener("click", (e) => {})
// btn8.addEventListener("click", (e) => {})
// btn9.addEventListener("click", (e) => {})

// Winning combinations and ties will be stored in an array or object

// Start Game
const Game = new TTT("Jay", "x")
Game.newGame()
// A player is designated and the titles text content will display Player X's Turn: For ease of use the first player will always be x

// player x will click a square on the board. The square will turn from the number to the letter x in the DOM.

// A cell should not be able to be replayed once filled

// An array will be populated with the game board and whichever square is clicked will be populated with either an X or an O depending on which players turn it is
