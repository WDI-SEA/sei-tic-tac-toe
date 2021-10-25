const gameStatus = document.getElementById("gamestatus")
const playArea = document.querySelector("#container")
const resetButton = document.getElementById("resetBut")
let playerOne = "X"
let playerTwo = "O"
const notifier = document.getElementById("output")
const boxOne = document.getElementById("div-1")
const boxTwo = document.getElementById("div-2")
const boxThree = document.getElementById("div-3")
const boxFour = document.getElementById("div-4")
const boxFive = document.getElementById("div-5")
const boxSix = document.getElementById("div-6")
const boxSeven = document.getElementById("div-7")
const boxEight = document.getElementById("div-8")
const boxNine = document.getElementById("div-9")
const allBoxes = document.getElementsByClassName("playArea")
const playableBoxes = [
  boxOne,
  boxTwo,
  boxThree,
  boxFour,
  boxFive,
  boxSix,
  boxSeven,
  boxEight,
  boxNine,
]
// const winningChoices = [
//   [boxOne, boxTwo, boxThree],
//   [boxFour, boxFive, boxSix],
//   [boxSeven, boxEight, boxNine],
//   [boxOne, boxFour, boxSeven],
//   [boxTwo, boxFive, boxEight],
//   [boxThree, boxSix, boxNine],
//   [boxOne, boxFive, boxNine],
//   [boxThree, boxFive, boxSeven],
// ]

//for loop to check arrays for winning choices

// const endTurn =()=> {e.target = null}

// loops over all playable boxes and adds click event listener to each

const eventListenerGenerator = () => {
  for (let i = 0; i < playableBoxes.length; i++) {
    playableBoxes[i].addEventListener("click", playerTurn, { once: true })
  }
}
eventListenerGenerator()

let countingClicks = 0

// Alternating X and O
function playerTurn(e) {
  console.log("player turn\n", e.target)
  const boxClicked = e.target
  if (playerOne === 1) {
    boxClicked.innerText = "X"
    playerOne = 0
  } else {
    boxClicked.innerText = "O"
    playerOne = 1
  }
  countingClicks++
  if (countingClicks >= 5) {
    checkWinner()
  }
  if (countingClicks == 9 && checkWinner() != true) {
    notifier.innerText = "It's a tie!"
  }
}

// find out how to return truthy values and pass it to a variable
function checkWinner() {
  if (
    // b1=b2=b3
    boxOne.innerText == boxTwo.innerText &&
    boxOne.innerText == boxThree.innerText &&
    boxOne.innerText != ""
  ) {
    notifier.innerText = "We have a winner!"
    playArea.style.pointerEvents = "none"
    return true
  }
  if (
    //b4=b5=b6
    boxFour.innerText == boxFive.innerText &&
    boxFour.innerText == boxSix.innerText &&
    boxFour.innerText != ""
  ) {
    notifier.innerText = "We have a winner!"
    playArea.style.pointerEvents = "none"
    return true
  }
  if (
    // b7= b8 =b9
    boxSeven.innerText == boxEight.innerText &&
    boxSeven.innerText == boxNine.innerText &&
    boxSeven.innerText != ""
  ) {
    notifier.innerText = "We have a winner!"
    playArea.style.pointerEvents = "none"
    return true
  }
  if (
    // b1=b4=b7
    boxOne.innerText == boxFour.innerText &&
    boxOne.innerText == boxSeven.innerText &&
    boxOne.innerText != ""
  ) {
    notifier.innerText = "We have a winner!"
    playArea.style.pointerEvents = "none"
    return true
  }
  if (
    // b2=b5=b8
    boxTwo.innerText == boxFive.innerText &&
    boxTwo.innerText == boxEight.innerText &&
    boxTwo.innerText != ""
  ) {
    notifier.innerText = "We have a winner!"
    playArea.style.pointerEvents = "none"
    return true
  }
  if (
    // b3 =b6 =b9
    boxThree.innerText == boxSix.innerText &&
    boxThree.innerText == boxNine.innerText &&
    boxThree.innerText != ""
  ) {
    notifier.innerText = "We have a winner!"
    playArea.style.pointerEvents = "none"
    return true
  }
  if (
    // b1=b5=b9
    boxOne.innerText == boxFive.innerText &&
    boxOne.innerText == boxNine.innerText &&
    boxNine.innerText != ""
  ) {
    notifier.innerText = "We have a winner!"
    playArea.style.pointerEvents = "none"
    return true
  }
  if (
    boxThree.innerText == boxFive.innerText &&
    boxThree.innerText == boxSeven.innerText &&
    boxFive.innerText != ""
  ) {
    notifier.innerText = "We have a winner!"
    playArea.style.pointerEvents = "none"
    return true
  }
}

// const checkWinner = () => {
//   for (let i = 0; i < winningChoices.length; i++) {
//     const winCheckCombo = winningChoices[i]
//     const a = winCheckCombo[0].innerText
//     const b = winCheckCombo[1].innerText
//     const c = winCheckCombo[2].innerText
//     if (a === "" && b === "" && c === "") return
//     if (a === b && b === c) {
//       console.log("you won")
//     }
//   }
// }

// reset button
resetButton.addEventListener("click", () => {
  for (i = 0; i < allBoxes.length; i++) {
    allBoxes[i].textContent = ""
    playableBoxes.enabled = true
  }
  countingClicks = 0
  console.log("working reset")
  eventListenerGenerator()
  notifier.innerText = ""
  playArea.style.pointerEvents = "auto"
})

//  const clearTable=()=> {
//   playableBoxes.innerText = ' '
// }

// const checkTurn = () => {if (boxClicked.innerText == 'I clicked this') {
//     notifier.innerText = 'Not your turn anymore!'
//   } else notifier.innerText = 'Next up!'
// }
// resetButton.addEventListener(click, )

// add event listeners to divs -done
// event listeners need to be clickable -done
// determine which box was clicked on -done
// determine if the box already has text inside -done
// if the box has text, dont let other person click- done
// if there is no text, add relevant move - done?
//switch from X to O after first move - done kinda
// reset button - function there, missing something

//after 5th move check for winner
// loop over array of win conditions.
//check if there was a winner by looking at
// example: if text content of box[0]===box[1]===box[2] -> winner - done
//else check next win condition the same way
