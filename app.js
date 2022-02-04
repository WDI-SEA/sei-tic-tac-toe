let gameActive = true
let currentPlayer = "X"
let secondPlayer = "O"
const clickOne = document.querySelector("#squareOne")
const clickTwo = document.querySelector("#squareTwo")
const clickThree = document.querySelector("#squareThree")
const clickFour = document.querySelector("#squareFour")
const clickFive = document.querySelector("#squareFive")
const clickSix = document.querySelector("#squareSix")
const clickSeven = document.querySelector("#squareSeven")
const clickEight = document.querySelector("#squareEight")
const clickNine = document.querySelector("#squareNine")
const winner = document.querySelector("#the-winner")
const reset = document.querySelector("#reset-button")
let turnCounter = 1;



// Turn counter that keeps track of whether it is X's turn or O's turn
const changeTurn = () => {
   if(turnCounter === 0){
       currentPlayer="X";}else if (turnCounter ===1) {
           currentPlayer="O";} else if (turnCounter ===2) {currentPlayer="X"}else if (turnCounter===3) {currentPlayer="O"}else if (turnCounter ===4) {currentPlayer="X"}else if (turnCounter===5) {currentPlayer="O"}else if (turnCounter ===6) {currentPlayer="X"}else if (turnCounter===7) {currentPlayer="O"}
           else if (turnCounter ===8) {currentPlayer="X"}else if (turnCounter===9) {currentPlayer="O"};
           turnCounter++;
       }

const tie = () => {
    if(turnCounter===10 && winOne() === false && winTwo() === false){
         document.getElementById("the-winner").innerHTML = "it's a tie!"
    }
    // if (turnCounter===10){
    //     document.getElementById("the-winner").innerHTML = "it's a tie!"
    // }
}

const winOne = () => {
if (document.getElementById('squareOne').innerText === 'X' && document.getElementById('squareTwo').innerText === 'X' && document.getElementById('squareThree').innerText === 'X'){
    document.getElementById("squareOne").style.color = "red"
    document.getElementById("squareTwo").style.color = "red"
    document.getElementById("squareThree").style.color = "red"
    document.getElementById("the-winner").innerHTML = "X has won!"
    clickOne.removeEventListener('click', moveMade)
    clickTwo.removeEventListener('click', moveMadeTwo)
    clickThree.removeEventListener('click', moveMadeThree)
    clickFour.removeEventListener('click', moveMadeFour)
    clickFive.removeEventListener('click', moveMadeFive)
    clickSix.removeEventListener('click', moveMadeSix)
    clickSeven.removeEventListener('click', moveMadeSeven)
    clickEight.removeEventListener('click', moveMadeEight)
    clickNine.removeEventListener('click', moveMadeNine)
    return true
} else if (document.getElementById('squareOne').innerText === 'X' && document.getElementById('squareFive').innerText === 'X' && document.getElementById('squareNine').innerText === 'X') {
    document.getElementById("the-winner").innerHTML = "X has won!" 
    document.getElementById("squareOne").style.color = "red"
    document.getElementById("squareFive").style.color = "red"
    document.getElementById("squareNine").style.color = "red"
    clickOne.removeEventListener('click', moveMade)
    clickTwo.removeEventListener('click', moveMadeTwo)
    clickThree.removeEventListener('click', moveMadeThree)
    clickFour.removeEventListener('click', moveMadeFour)
    clickFive.removeEventListener('click', moveMadeFive)
    clickSix.removeEventListener('click', moveMadeSix)
    clickSeven.removeEventListener('click', moveMadeSeven)
    clickEight.removeEventListener('click', moveMadeEight)
    clickNine.removeEventListener('click', moveMadeNine)
    return true
} else if (document.getElementById('squareThree').innerText === 'X' && document.getElementById('squareFive').innerText === 'X' && document.getElementById('squareSeven').innerText === 'X') {
    document.getElementById("the-winner").innerHTML = "X has won!"
    document.getElementById("squareThree").style.color = "red"
    document.getElementById("squareFive").style.color = "red"
    document.getElementById("squareSeven").style.color = "red"
    clickOne.removeEventListener('click', moveMade)
    clickTwo.removeEventListener('click', moveMadeTwo)
    clickThree.removeEventListener('click', moveMadeThree)
    clickFour.removeEventListener('click', moveMadeFour)
    clickFive.removeEventListener('click', moveMadeFive)
    clickSix.removeEventListener('click', moveMadeSix)
    clickSeven.removeEventListener('click', moveMadeSeven)
    clickEight.removeEventListener('click', moveMadeEight)
    clickNine.removeEventListener('click', moveMadeNine)
    return true
} else if (document.getElementById('squareOne').innerText === 'X' && document.getElementById('squareFour').innerText === 'X' && document.getElementById('squareSeven').innerText === 'X') {
    document.getElementById("the-winner").innerHTML = "X has won!"
    document.getElementById("squareOne").style.color = "red"
    document.getElementById("squareFour").style.color = "red"
    document.getElementById("squareSeven").style.color = "red"
    clickOne.removeEventListener('click', moveMade)
    clickTwo.removeEventListener('click', moveMadeTwo)
    clickThree.removeEventListener('click', moveMadeThree)
    clickFour.removeEventListener('click', moveMadeFour)
    clickFive.removeEventListener('click', moveMadeFive)
    clickSix.removeEventListener('click', moveMadeSix)
    clickSeven.removeEventListener('click', moveMadeSeven)
    clickEight.removeEventListener('click', moveMadeEight)
    clickNine.removeEventListener('click', moveMadeNine)
    return true
} else if (document.getElementById('squareTwo').innerText === 'X' && document.getElementById('squareFive').innerText === 'X' && document.getElementById('squareEight').innerText === 'X') {
    document.getElementById("the-winner").innerHTML = "X has won!"
    document.getElementById("squareTwo").style.color = "red"
    document.getElementById("squareFive").style.color = "red"
    document.getElementById("squareEight").style.color = "red"
    clickOne.removeEventListener('click', moveMade)
    clickTwo.removeEventListener('click', moveMadeTwo)
    clickThree.removeEventListener('click', moveMadeThree)
    clickFour.removeEventListener('click', moveMadeFour)
    clickFive.removeEventListener('click', moveMadeFive)
    clickSix.removeEventListener('click', moveMadeSix)
    clickSeven.removeEventListener('click', moveMadeSeven)
    clickEight.removeEventListener('click', moveMadeEight)
    clickNine.removeEventListener('click', moveMadeNine)
    return true
} else if (document.getElementById('squareThree').innerText === 'X' && document.getElementById('squareSix').innerText === 'X' && document.getElementById('squareNine').innerText === 'X') {
    document.getElementById("the-winner").innerHTML = "X has won!"
    document.getElementById("squareThree").style.color = "red"
    document.getElementById("squareSix").style.color = "red"
    document.getElementById("squareNine").style.color = "red"
    clickOne.removeEventListener('click', moveMade)
    clickTwo.removeEventListener('click', moveMadeTwo)
    clickThree.removeEventListener('click', moveMadeThree)
    clickFour.removeEventListener('click', moveMadeFour)
    clickFive.removeEventListener('click', moveMadeFive)
    clickSix.removeEventListener('click', moveMadeSix)
    clickSeven.removeEventListener('click', moveMadeSeven)
    clickEight.removeEventListener('click', moveMadeEight)
    clickNine.removeEventListener('click', moveMadeNine)
    return true
} else if (document.getElementById('squareFour').innerText === 'X' && document.getElementById('squareFive').innerText === 'X' && document.getElementById('squareSix').innerText === 'X') {
    document.getElementById("the-winner").innerHTML = "X has won!"
    document.getElementById("squareFour").style.color = "red"
    document.getElementById("squareFive").style.color = "red"
    document.getElementById("squareSix").style.color = "red"
    clickOne.removeEventListener('click', moveMade)
    clickTwo.removeEventListener('click', moveMadeTwo)
    clickThree.removeEventListener('click', moveMadeThree)
    clickFour.removeEventListener('click', moveMadeFour)
    clickFive.removeEventListener('click', moveMadeFive)
    clickSix.removeEventListener('click', moveMadeSix)
    clickSeven.removeEventListener('click', moveMadeSeven)
    clickEight.removeEventListener('click', moveMadeEight)
    clickNine.removeEventListener('click', moveMadeNine)
    return true
} else if (document.getElementById('squareSeven').innerText === 'X' && document.getElementById('squareEight').innerText === 'X' && document.getElementById('squareNine').innerText === 'X') {
    document.getElementById("the-winner").innerHTML = "X has won!"
    document.getElementById("squareSeven").style.color = "red"
    document.getElementById("squareEight").style.color = "red"
    document.getElementById("squareNine").style.color = "red"
    clickOne.removeEventListener('click', moveMade)
    clickTwo.removeEventListener('click', moveMadeTwo)
    clickThree.removeEventListener('click', moveMadeThree)
    clickFour.removeEventListener('click', moveMadeFour)
    clickFive.removeEventListener('click', moveMadeFive)
    clickSix.removeEventListener('click', moveMadeSix)
    clickSeven.removeEventListener('click', moveMadeSeven)
    clickEight.removeEventListener('click', moveMadeEight)
    clickNine.removeEventListener('click', moveMadeNine)
    return true
} else {
    return false
}
}


const winTwo = () => {
    if (document.getElementById('squareOne').innerText === 'O' && document.getElementById('squareTwo').innerText === 'O' && document.getElementById('squareThree').innerText === 'O'){
        document.getElementById("the-winner").innerHTML = "O has won!"
        document.getElementById("squareOne").style.color = "red"
    document.getElementById("squareTwo").style.color = "red"
    document.getElementById("squareThree").style.color = "red"
        clickOne.removeEventListener('click', moveMade)
        clickTwo.removeEventListener('click', moveMadeTwo)
        clickThree.removeEventListener('click', moveMadeThree)
        clickFour.removeEventListener('click', moveMadeFour)
        clickFive.removeEventListener('click', moveMadeFive)
        clickSix.removeEventListener('click', moveMadeSix)
        clickSeven.removeEventListener('click', moveMadeSeven)
        clickEight.removeEventListener('click', moveMadeEight)
        clickNine.removeEventListener('click', moveMadeNine)
        return true
    } else if (document.getElementById('squareOne').innerText === 'O' && document.getElementById('squareFive').innerText === 'O' && document.getElementById('squareNine').innerText === 'O') {
        document.getElementById("the-winner").innerHTML = "O has won!" 
        document.getElementById("squareOne").style.color = "red"
    document.getElementById("squareFive").style.color = "red"
    document.getElementById("squareNine").style.color = "red"
        clickOne.removeEventListener('click', moveMade)
        clickTwo.removeEventListener('click', moveMadeTwo)
        clickThree.removeEventListener('click', moveMadeThree)
        clickFour.removeEventListener('click', moveMadeFour)
        clickFive.removeEventListener('click', moveMadeFive)
        clickSix.removeEventListener('click', moveMadeSix)
        clickSeven.removeEventListener('click', moveMadeSeven)
        clickEight.removeEventListener('click', moveMadeEight)
        clickNine.removeEventListener('click', moveMadeNine)
        return true
    } else if (document.getElementById('squareThree').innerText === 'O' && document.getElementById('squareFive').innerText === 'O' && document.getElementById('squareSeven').innerText === 'O') {
        document.getElementById("the-winner").innerHTML = "O has won!"
        document.getElementById("squareThree").style.color = "red"
    document.getElementById("squareFive").style.color = "red"
    document.getElementById("squareSeven").style.color = "red"
        clickOne.removeEventListener('click', moveMade)
        clickTwo.removeEventListener('click', moveMadeTwo)
        clickThree.removeEventListener('click', moveMadeThree)
        clickFour.removeEventListener('click', moveMadeFour)
        clickFive.removeEventListener('click', moveMadeFive)
        clickSix.removeEventListener('click', moveMadeSix)
        clickSeven.removeEventListener('click', moveMadeSeven)
        clickEight.removeEventListener('click', moveMadeEight)
        clickNine.removeEventListener('click', moveMadeNine)
        return true
    } else if (document.getElementById('squareOne').innerText === 'O' && document.getElementById('squareFour').innerText === 'O' && document.getElementById('squareSeven').innerText === 'O') {
        document.getElementById("the-winner").innerHTML = "O has won!"
        document.getElementById("squareOne").style.color = "red"
    document.getElementById("squareFour").style.color = "red"
    document.getElementById("squareSeven").style.color = "red"
        clickOne.removeEventListener('click', moveMade)
        clickTwo.removeEventListener('click', moveMadeTwo)
        clickThree.removeEventListener('click', moveMadeThree)
        clickFour.removeEventListener('click', moveMadeFour)
        clickFive.removeEventListener('click', moveMadeFive)
        clickSix.removeEventListener('click', moveMadeSix)
        clickSeven.removeEventListener('click', moveMadeSeven)
        clickEight.removeEventListener('click', moveMadeEight)
        clickNine.removeEventListener('click', moveMadeNine)
        return true
    } else if (document.getElementById('squareTwo').innerText === 'O' && document.getElementById('squareFive').innerText === 'O' && document.getElementById('squareEight').innerText === 'O') {
        document.getElementById("the-winner").innerHTML = "O has won!"
        document.getElementById("squareTwo").style.color = "red"
    document.getElementById("squareFive").style.color = "red"
    document.getElementById("squareEight").style.color = "red"
        clickOne.removeEventListener('click', moveMade)
        clickTwo.removeEventListener('click', moveMadeTwo)
        clickThree.removeEventListener('click', moveMadeThree)
        clickFour.removeEventListener('click', moveMadeFour)
        clickFive.removeEventListener('click', moveMadeFive)
        clickSix.removeEventListener('click', moveMadeSix)
        clickSeven.removeEventListener('click', moveMadeSeven)
        clickEight.removeEventListener('click', moveMadeEight)
        clickNine.removeEventListener('click', moveMadeNine)
        return true
    } else if (document.getElementById('squareThree').innerText === 'O' && document.getElementById('squareSix').innerText === 'O' && document.getElementById('squareNine').innerText === 'O') {
        document.getElementById("the-winner").innerHTML = "O has won!"
        document.getElementById("squareThree").style.color = "red"
    document.getElementById("squareSix").style.color = "red"
    document.getElementById("squareNine").style.color = "red"
        clickOne.removeEventListener('click', moveMade)
        clickTwo.removeEventListener('click', moveMadeTwo)
        clickThree.removeEventListener('click', moveMadeThree)
        clickFour.removeEventListener('click', moveMadeFour)
        clickFive.removeEventListener('click', moveMadeFive)
        clickSix.removeEventListener('click', moveMadeSix)
        clickSeven.removeEventListener('click', moveMadeSeven)
        clickEight.removeEventListener('click', moveMadeEight)
        clickNine.removeEventListener('click', moveMadeNine)
        return true
    } else if (document.getElementById('squareFour').innerText === 'O' && document.getElementById('squareFive').innerText === 'O' && document.getElementById('squareSix').innerText === 'O') {
        document.getElementById("the-winner").innerHTML = "O has won!"
        document.getElementById("squareFour").style.color = "red"
    document.getElementById("squareFive").style.color = "red"
    document.getElementById("squareSix").style.color = "red"
        clickOne.removeEventListener('click', moveMade)
        clickTwo.removeEventListener('click', moveMadeTwo)
        clickThree.removeEventListener('click', moveMadeThree)
        clickFour.removeEventListener('click', moveMadeFour)
        clickFive.removeEventListener('click', moveMadeFive)
        clickSix.removeEventListener('click', moveMadeSix)
        clickSeven.removeEventListener('click', moveMadeSeven)
        clickEight.removeEventListener('click', moveMadeEight)
        clickNine.removeEventListener('click', moveMadeNine)
        return true
    } else if (document.getElementById('squareSeven').innerText === 'O' && document.getElementById('squareEight').innerText === 'O' && document.getElementById('squareNine').innerText === 'O') {
        document.getElementById("the-winner").innerHTML = "O has won!"
        document.getElementById("squareSeven").style.color = "red"
    document.getElementById("squareEight").style.color = "red"
    document.getElementById("squareNine").style.color = "red"
        clickOne.removeEventListener('click', moveMade)
        clickTwo.removeEventListener('click', moveMadeTwo)
        clickThree.removeEventListener('click', moveMadeThree)
        clickFour.removeEventListener('click', moveMadeFour)
        clickFive.removeEventListener('click', moveMadeFive)
        clickSix.removeEventListener('click', moveMadeSix)
        clickSeven.removeEventListener('click', moveMadeSeven)
        clickEight.removeEventListener('click', moveMadeEight)
        clickNine.removeEventListener('click', moveMadeNine)
        return true
    } else {
        return false
    }
    }


const stopClick = () => {
    if (winOne() === true) {
        clickOne.removeEventListener("click")
        clickTwo.removeEventListener("click")
        clickThree.removeEventListener("click")
        clickFour.removeEventListener("click")
        clickFive.removeEventListener("click")
        clickSix.removeEventListener("click")
        clickSeven.removeEventListener("click")
        clickEight.removeEventListener("click")
        clickNine.removeEventListener("click")
    }
}

const moveMade = () => {
    changeTurn()
    document.getElementById('squareOne').innerText = currentPlayer
    clickOne.removeEventListener('click', moveMade)
    if (winOne() === true) {
        winOne()
    } else if (winTwo() === true) {
        winTwo()
    } else {
        tie()
    }
    // winTwo()
    // tie()
}
clickOne.addEventListener("click", moveMade)

const moveMadeTwo = () => {
    changeTurn()
    document.getElementById('squareTwo').innerText = currentPlayer
    // winOne()
    // winTwo()
    // tie()
    if (winOne() === true) {
        winOne()
    } else if (winTwo() === true) {
        winTwo()
    } else {
        tie()
    }
    clickTwo.removeEventListener('click', moveMadeTwo)
}
clickTwo.addEventListener("click", moveMadeTwo)

const moveMadeThree = () => {
    changeTurn()
    document.getElementById('squareThree').innerText = currentPlayer
    // winOne()
    // winTwo()
    // tie()
    if (winOne() === true) {
        winOne()
    } else if (winTwo() === true) {
        winTwo()
    } else {
        tie()
    }
    clickThree.removeEventListener('click', moveMadeThree)
}
clickThree.addEventListener("click", moveMadeThree)

const moveMadeFour = () => {
    changeTurn()
    document.getElementById('squareFour').innerText = currentPlayer
    // winOne()
    // winTwo()
    // tie()
    if (winOne() === true) {
        winOne()
    } else if (winTwo() === true) {
        winTwo()
    } else {
        tie()
    }
    clickFour.removeEventListener('click', moveMadeFour)
}
clickFour.addEventListener("click", moveMadeFour)

const moveMadeFive = () => {
    changeTurn()
    document.getElementById('squareFive').innerText = currentPlayer
    // winOne()
    // winTwo()
    // tie()
    if (winOne() === true) {
        winOne()
    } else if (winTwo() === true) {
        winTwo()
    } else {
        tie()
    }
    clickFive.removeEventListener('click', moveMadeFive)
}
clickFive.addEventListener("click", moveMadeFive)

const moveMadeSix = () => {
    changeTurn()
    document.getElementById('squareSix').innerText = currentPlayer
    // winOne()
    // winTwo()
    // tie()
    if (winOne() === true) {
        winOne()
    } else if (winTwo() === true) {
        winTwo()
    } else {
        tie()
    }
    clickSix.removeEventListener('click', moveMadeSix)
}
clickSix.addEventListener("click", moveMadeSix)

const moveMadeSeven = () => {
    changeTurn()
    document.getElementById('squareSeven').innerText = currentPlayer
    // winOne()
    // winTwo()
    // tie()
    if (winOne() === true) {
        winOne()
    } else if (winTwo() === true) {
        winTwo()
    } else {
        tie()
    }
    clickSeven.removeEventListener('click', moveMadeSeven)
}
clickSeven.addEventListener("click", moveMadeSeven)

const moveMadeEight = () => {
    changeTurn()
    document.getElementById('squareEight').innerText = currentPlayer
    // winOne()
    // winTwo()
    // tie()
    if (winOne() === true) {
        winOne()
    } else if (winTwo() === true) {
        winTwo()
    } else {
        tie()
    }
    clickEight.removeEventListener('click', moveMadeEight)
}
clickEight.addEventListener("click", moveMadeEight)

const moveMadeNine = () => {
    changeTurn()
    document.getElementById('squareNine').innerText = currentPlayer
    // winOne()
    // winTwo()
    // tie()
    if (winOne() === true) {
        winOne()
    } else if (winTwo() === true) {
        winTwo()
    } else {
        tie()
    }
    clickNine.removeEventListener('click', moveMadeNine)

}
clickNine.addEventListener("click", moveMadeNine)



// Reset Button, Just reloads the page
reset.addEventListener("click", () => {
    location.reload();
});