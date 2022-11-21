// DOM SELECTORS
const title = document.querySelector(".title")
const squares = document.querySelectorAll(".square")
const reset = document.querySelector(".reset")

// Global Variables
let currentPlayer = "x"
let moves = 0
//   // winning condition object
const winningConditions = {
  winningConditionRow1: ["x", "x", "x"],
  winningConditionRow2: ["o", "o", ""],
  winningConditionRow3: ["", "", ""],
  winningConditionColumn1: ["", "", ""],
  winningConditionColumn2: ["", "", ""],
  winningConditionColumn3: ["", "", ""],
  winningConditionDiagonal1: ["", "", ""],
  winningConditionDiagonal2: ["", "", ""],
}

// if iterate through object and any array is full of one char x or o return win for that player AND disable all remaining buttons

// Check for cats game if 9 moves have been made return cats game / TIE

// toggle player from x to o
// if moves are even player turn = x
// else if moves not even player turn = x

// check to see if square is already x or o

function winTester(inputObject) {
  Object.values(inputObject).forEach((item) => {
    let counterX = 0
    let counterO = 0

    item.forEach((item) => {
      if (item[0] === "x" || item[1] === "x" || item[2] === "x") {
        counterX = counterX += 1
      } else if (item[0] === "o" || item[1] === "o" || item[2] === "o") {
        counterO = counterO += 1
      }
    })
    // for each item create two counters

    console.log(`counterX: ${counterX}`)
    console.log(`counterO: ${counterO}`)
  })
}
winTester(winningConditions)
// Event listeners
// Set squares to current player on btn click
squares.forEach((square) => {
  // Winning conditions

  square.addEventListener("click", (e) => {
    // If player is even then currentPlayer = x else currentPlayer= 'o'
    if (moves % 2 === 0) {
      currentPlayer = "x"
    } else {
      currentPlayer = "o"
    }
    // Adding +1 to moves
    moves = moves += 1
    // check for cats game
    if (moves >= 9) {
      console.log("cats game / TIE")
    }
    console.log(square.id)
    console.log(moves)
    // Switch
    switch (square.id) {
      case "square-1":
        square.textContent = currentPlayer
        square.disabled = true

        console.log(`${square.id} clicked`)
        winningConditions.winningConditionRow1[0] = currentPlayer
        winningConditions.winningConditionColumn1[0] = currentPlayer
        winningConditions.winningConditionDiagonal1[0] = currentPlayer
        square
        console.log(
          winningConditions.winningConditionRow1,
          winningConditions.winningConditionColumn1,
          winningConditions.winningConditionDiagonal1
        )

        break
      case "square-2":
        square.textContent = currentPlayer
        square.disabled = true

        console.log(`${square.id} clicked`)
        winningConditions.winningConditionRow1[1] = currentPlayer
        winningConditions.winningConditionColumn2[0] = currentPlayer
        console.log(
          winningConditions.winningConditionRow1,
          winningConditions.winningConditionColumn2
        )
        break
      case "square-3":
        square.textContent = currentPlayer
        square.disabled = true

        console.log(`${square.id} clicked`)
        winningConditions.winningConditionRow1[2] = currentPlayer
        winningConditions.winningConditionColumn3[0] = currentPlayer
        winningConditions.winningConditionDiagonal2[0] = currentPlayer
        console.log(
          winningConditions.winningConditionRow1,
          winningConditions.winningConditionColumn3,
          winningConditions.winningConditionDiagonal2
        )
        break
      case "square-4":
        square.textContent = currentPlayer
        square.disabled = true

        console.log(`${square.id} clicked`)
        winningConditions.winningConditionRow2[0] = currentPlayer
        winningConditions.winningConditionColumn1[1] = currentPlayer
        console.log(
          winningConditions.winningConditionRow2,
          winningConditions.winningConditionColumn1
        )

        break
      case "square-5":
        square.textContent = currentPlayer
        square.disabled = true

        console.log(`${square.id} clicked`)
        winningConditions.winningConditionRow2[1] = currentPlayer
        winningConditions.winningConditionColumn2[1] = currentPlayer
        winningConditions.winningConditionDiagonal1[1] = currentPlayer
        winningConditions.winningConditionDiagonal2[1] = currentPlayer
        console.log(
          winningConditions.winningConditionRow2,
          winningConditions.winningConditionColumn2,
          winningConditions.winningConditionDiagonal1,
          winningConditions.winningConditionDiagonal2
        )
        break
      case "square-6":
        square.textContent = currentPlayer
        square.disabled = true

        console.log(`${square.id} clicked`)
        winningConditions.winningConditionRow2[2] = currentPlayer
        winningConditions.winningConditionColumn3[1] = currentPlayer
        console.log(
          winningConditions.winningConditionRow2,
          winningConditions.winningConditionColumn3
        )
        break
      case "square-7":
        square.textContent = currentPlayer
        square.disabled = true

        console.log(`${square.id} clicked`)
        winningConditions.winningConditionRow3[0] = currentPlayer
        winningConditions.winningConditionColumn1[2] = currentPlayer
        winningConditions.winningConditionDiagonal2[2] = currentPlayer
        console.log(
          winningConditions.winningConditionRow3,
          winningConditions.winningConditionColumn1,
          winningConditions.winningConditionDiagonal2
        )
        break
      case "square-8":
        square.textContent = currentPlayer
        square.disabled = true

        console.log(`${square.id} clicked`)
        winningConditions.winningConditionRow3[1] = currentPlayer
        winningConditions.winningConditionColumn2[2] = currentPlayer
        console.log(
          winningConditions.winningConditionRow3,
          winningConditions.winningConditionColumn2
        )
        break
      case "square-9":
        square.textContent = currentPlayer
        square.disabled = true

        console.log(`${square.id} clicked`)
        winningConditions.winningConditionRow3[2] = currentPlayer
        winningConditions.winningConditionColumn3[2] = currentPlayer
        winningConditions.winningConditionDiagonal1[2] = currentPlayer
        console.log(
          winningConditions.winningConditionRow3,
          winningConditions.winningConditionColumn3,
          winningConditions.winningConditionDiagonal1
        )
        break
    }
  })
})

// Winning Condition Check
function checkWin() {}

// reset DOM
reset.addEventListener("click", (e) => {
  location.reload()
})
