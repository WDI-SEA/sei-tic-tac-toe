const squareA = document.getElementById('div1')
// console.log(squareA)
const squareB = document.getElementById('div2')
const squareC = document.getElementById('div3')
const squareD = document.getElementById('div4')
const squareE = document.getElementById('div5')
const squareF = document.getElementById('div6')
const squareG = document.getElementById('div7')
const squareH = document.getElementById('div8')
const squareI = document.getElementById('div9')



let currentPlayer = "x";

// //stores the status of the game, whether its over or still in play
// let gameStatus = document.getElementById('.gamestatus') 
// // console.log(statusGame)

//Gets all Boxes elements
const choices = document.querySelectorAll(".choice");
console.log(choices)

let moves = 0

//check for matching x's or o's
const checkForWin = () => {
    if (
        squareA.innerText == squareB.innerText &&
        squareB.innerText == squareC.innerText
    ) {
       console.log('Winner')
    }
    else if (
        squareA.innerText == squareE.innerText &&
        squareE.innerText == squareI.innerText
    ) {
        console.log('Winner')
    } else if (
        squareA.innerText == squareD.innerText &&
        squareD.innerText == squareG.innerText
    ) {
        console.log('Winner')
    } else if (
        squareC.innerText == squareE.innerText &&
        squareE.innerText == squareG.innerText

    ) {
        console.log('Winner')
    } else if (
        squareC.innerText == squareF.innerText &&
        squareF.innerText == squareI.innerText

    ) {
        console.log('Winner')
    } else if (
        squareB.innerText == squareE.innerText &&
        squareE.innerText == squareH.innerText

    ) {
        console.log('Winner')
    } else if (
        squareD.innerText == squareE.innerText &&
        squareD.innerText == squareF.innerText
    ) {
        console.log('Winner')
    } else if (
        squareG.innerText == squareH.innerText &&
        squareH.innerText == squareI.innerText
    ) {
        console.log('Winner')
    }
    else if (moves === 9) {
        // return true
        console.log("draw")
    }
}
const switchClicks = (e) => {
    let choice = e.target
    if (currentPlayer === "x") {
        currentPlayer = "o"
        choice.innerText = currentPlayer
        moves++
    } else {
        currentPlayer = "x"
        choice.innerText = currentPlayer
        moves++
    }
    console.log("switchClicks")
    choice.removeEventListener("click", switchClicks);
    checkForWin()
}
for (let i = 0; i < choices.length; i++) {
    choices[i].addEventListener("click", switchClicks);
}



// statusDisplay.innerText = currentPlayerTurn();
// document.querySelector('.gamestatus').innerText = 
// console.log(statusDisplay)