// export default class Player {
//   constructor(name, symbol) {
//     this.name = name
//     this.symbol = symbol
//   }
//   // winning condition arrays
//   winningConditionRow1 = ["", "", ""]
//   winningConditionRow2 = ["", "", ""]
//   winningConditionRow3 = ["", "", ""]
//   winningConditionColumn1 = ["", "", ""]
//   winningConditionColumn2 = ["", "", ""]
//   winningConditionColumn3 = ["", "", ""]
//   winningConditionHorizontal1 = ["", "", ""]
//   winningConditionHorizontal2 = ["", "", ""]

//   sayHello() {
//     console.log(`Welcome ${this.name} you will be using the ${this.symbol}`)
//   }
//   chooseSquare(userInput) {
//     // is square marked ? do nothing : choose square
//     if (userInput.textContent === "x" || userInput.textContent === "o") {
//     } else {
//       userInput.textContent === currentPlayerSymbol
//       this.toggleActivePlayer()
//     }
//     // change square to players symbol
//     //
//   }

//   toggleActivePlayer(currentPlayer, DOMOutputElement) {
//     // toggle active player
//     // if player === x toggle player o
//     if (currentPlayer === "x") {
//       currentPlayer === "o"
//     } else {
//       currentPlayer === "x"
//     }
//     // if player === 0 toggle player x
//     // Render to below H1 "Player ? it is your turn"
//     DOMOutputElement.textContent = `${currentPlayer} it is your turn`
//   }

//   updatePlayerState() {
//     // get square that was clicked and update arrays
//   }
//   checkWinCondition() {
//     // checks arrays. If any winning condition is full the player has won.
//     // If no array is full and certain amount of moves has taken place cats game
//     // Render result below h1
//   }
//   newGame() {
//     location.reload()
//   }
// }

// let jay = new Player()
// jay.
