/*----- state variables -----*/
let winner
let player = 1
let xScore = 0
let oScore = 0

/*----- cached elements  -----*/
const div = document.getElementById("boardDiv")
const header = document.querySelector("h1")
const span = document.querySelector("span")
const playAgainButton = document.getElementById("playAgainButton")

/*----- event listeners -----*/
div.addEventListener("click", (evt) => {
  handleTurn(evt)
})

playAgainButton.addEventListener("click", () => { init() })

/*----- functions -----*/
init()

function init() {
  winner = null
  board = [
    [0, 0, 0,],
    [0, 0, 0,],
    [0, 0, 0,],
  ]
  playAgainButton.style.visibility = "hidden"
  render()
  /* init() does not reset the current player back to X on subsequent rounds, but rather alternates again.
  This is intentional for balancing across multiple games, as the player who lost will now have an advantage
  in going first. */
}

function handleTurn(evt) {
  if (checkPiece(evt.target.id[0], evt.target.id[1], evt.target.tagName) && !winner) {
    claimPiece(evt.target.id[0], evt.target.id[1])
    checkWin()
    player *= -1
    render()
  }
}


function checkPiece(arr1, arr2, tagName) {
  if (tagName === "BUTTON" && board[arr1][arr2] === 0) {
    return true
  }
}

function claimPiece(arr1, arr2) {
  board[arr1][arr2] = player
}

function render() {
  board.forEach((arr, aI) => {
    arr.forEach((cell, cI) => {
      if (cell === 1) {
        document.getElementById(`${aI}${cI}`).innerHTML = "X"
        document.getElementById(`${aI}${cI}`).style.color = "#ff6464"

      } else if (cell === -1) {
        document.getElementById(`${aI}${cI}`).innerHTML = "O"
        document.getElementById(`${aI}${cI}`).style.color = "#40bfc1"
        /* I'm aware that using multiple query selectors here violates DRY principles, however
        it seems that the template encouraged declares cached elements before the creation of
        these spans. Redeclaring the variable entirely seemed sloppier than simply selecting
        it again, so with my current skillset, this is the cleanest solution I'm aware of. */
      } else {
        document.getElementById(`${aI}${cI}`).innerHTML = ""
      }

    })
  })
  if (winner === 1) {
    header.innerText = `X Wins!`
    playAgainButton.style.visibility = "visible"
    xScore++
  } else if (winner === -1) {
    header.innerText = `O Wins!`
    playAgainButton.style.visibility = "visible"
    oScore++
  } else if (winner === 0) {
    header.innerText = "It's a Tie!"
    header.style.color = "orange"
    playAgainButton.style.visibility = "visible"
  } else {
    if (player === 1) {
      header.innerText = "X's Turn"
      header.style.color = "#ff6464"
    } else if (player === -1) {
      header.innerText = "O's Turn"
      header.style.color = "#40bfc1"
    }
  }
  document.getElementById("xScoreEl").innerText = xScore
  document.getElementById("oScoreEl").innerText = oScore
}

function checkWin() {
  checkTie()
  checkHorWin()
  checkVirWin()
  checkDiagUpWin()
  checkDiagDownWin()
}

function checkHorWin() {
  board.forEach(arr => {
    let horCount = 0
    arr.forEach(cell => {
      if (cell === player) {
        horCount++
      }
      if (horCount === 3) {
        winner = player
      }
    })
  })
}

function checkVirWin() {
  for (let i = 0; i < 3; i++) {
    let virCount = 0
    board.forEach(arr => {
      if (arr[i] === player) {
        virCount++
      }
      if (virCount === 3) {
        winner = player
      }
    })
  }
}

function checkDiagUpWin() {
  if (board[0][2] === player &&
    board[1][1] === player &&
    board[2][0] === player) {
    winner = player
  }
}

function checkDiagDownWin() {
  if (board[0][0] === player &&
    board[1][1] === player &&
    board[2][2] === player) {
    winner = player
  }
}

function checkTie() {
  let tieCount = 0
  board.forEach(arr => {
    if (arr.includes(0)) return
    else tieCount++
  })
  if (tieCount === 3) winner = 0
}