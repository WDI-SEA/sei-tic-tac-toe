const topLeft = document.querySelector(".box1")
const topMid = document.querySelector(".box2")
const topRight = document.querySelector(".box3")
const midLeft = document.querySelector(".box4")
const middle = document.querySelector(".box5")
const midRight = document.querySelector(".box6")
const botLeft = document.querySelector(".box7")
const botMid = document.querySelector(".box8")
const botRight = document.querySelector(".box9")
const button = document.querySelector("#start")
const whoseTurn = document.querySelector("#whose-turn")

let gameArray = []
let player = "X"
let gameOver = false

function randomizer() {
    let num = Math.floor(Math.random()*2)
    if (num === 0) {
        return "X"
    } else {
        return "O"
    }
}

let coolFeature = function() {
    topLeft.innerHTML = randomizer()
    topMid.innerHTML = randomizer()
    topRight.innerHTML = randomizer()
    midLeft.innerHTML = randomizer()
    middle.innerHTML = randomizer()
    midRight.innerHTML = randomizer()
    botLeft.innerHTML = randomizer()
    botMid.innerHTML = randomizer()
    botRight.innerHTML = randomizer()
}

function stopGame() {
    let myArray = [topLeft, topMid, topRight, midLeft, middle, midRight,botLeft,botMid,botRight]
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i].innerHTML === "") {
            myArray[i].innerHTML = " "
        }
    }
    console.log("game over")
}

function chickenStratch() {
    if (gameOver === false) {
        if (gameArray.length === 9) {
            whoseTurn.innerHTML = "No one wins :("
        }
    }
    button.innerHTML = "restart game"
}

function currentPlayer() {
    if(player === "X"){
        player = "O"
        whoseTurn.innerHTML = "player 2's turn"
    } else {
        player = "X"
        whoseTurn.innerHTML = "player 1's turn"
    }
    return player
}

function winner() {
    player = "X"
    gameOver = true
    if (player === "O") {
        whoseTurn.innerHTML = "Player 2 WINS"
    } else {
        whoseTurn.innerHTML = "Player 1 WINS"
    }
    button.innerHTML = "reset game"
    stopGame()
}

topLeft.addEventListener("click", function() {
    if (topLeft.innerHTML === "") {
        topLeft.innerHTML = currentPlayer()
        gameArray.push(1)
        if (topMid.innerHTML === player && topRight.innerHTML === player) {
            winner()
        }
        if (midLeft.innerHTML === player && botLeft.innerHTML === player) {
            winner()
        }
        if (middle.innerHTML === player && botRight.innerHTML === player) {
            winner()
        }
    }
    chickenStratch()
}) 
topMid.addEventListener("click", function() {
    if (topMid.innerHTML === "") {
        topMid.innerHTML = currentPlayer()
        gameArray.push(1)
        if (topLeft.innerHTML === player && topRight.innerHTML === player) {
            winner()
        } if (middle.innerHTML === player && botMid.innerHTML === player) {
            winner()
        } 
    }
    chickenStratch()
})
topRight.addEventListener("click", function() {
    if (topRight.innerHTML === "") {
        topRight.innerHTML = currentPlayer()
        gameArray.push(1)
        if (topLeft.innerHTML === player && topMid.innerHTML === player) {
            winner()
        }
        if (midRight.innerHTML === player && botRight.innerHTML === player) {
            winner()
        }
        if (middle.innerHTML === player && botLeft.innerHTML === player) {
            winner()
        }
    }
    chickenStratch()
})
midLeft.addEventListener("click", function() {
    if (midLeft.innerHTML === "") {
        midLeft.innerHTML = currentPlayer()
        gameArray.push(1)
        if(topLeft.innerHTML === player && botLeft.innerHTML === player) {
            winner()
        }
        if(middle.innerHTML === player && midRight.innerHTML === player) {
            winner()
        }
    }
    chickenStratch()
})
middle.addEventListener("click", function() {
    if (middle.innerHTML === "") {
        middle.innerHTML = currentPlayer()
        gameArray.push(1)
        if (topMid.innerHTML === player && botMid.innerHTML === player) {
            winner()
        }
        if (midLeft.innerHTML === player && midRight.innerHTML === player) {
            winner()
        }
        if (botLeft.innerHTML === player && topRight.innerHTML === player) {
            winner()
        }
    }
    chickenStratch()
})
midRight.addEventListener("click", function() {
    if (midRight.innerHTML === "") {
        midRight.innerHTML = currentPlayer()
        gameArray.push(1)
        if (middle.innerHTML === player && midLeft.innerHTML === player) {
            winner()
        }
        if (topRight.innerHTML === player && botRight.innerHTML === player) {
            winner()
        }
    }
    chickenStratch()
})
botLeft.addEventListener("click", function() {
    if (botLeft.innerHTML === "") {
        botLeft.innerHTML = currentPlayer()
        gameArray.push(1)
        if (topLeft.innerHTML === player && midLeft.innerHTML === player) {
            winner()
        }
        if (botMid.innerHTML === player && botRight.innerHTML === player) {
            winner()
        }
        if (middle.innerHTML === player && topRight.innerHTML === player) {
            winner()
        }
    }
    chickenStratch()
})
botMid.addEventListener("click", function() {
    if (botMid.innerHTML === "") {
        botMid.innerHTML = currentPlayer()
        gameArray.push(1)
        if(botRight.innerHTML === player && botLeft.innerHTML === player) {
            winner()
        }
        if (topMid.innerHTML === player && middle.innerHTML === player) {
            winner()
        }
    }
    chickenStratch()
})
botRight.addEventListener("click", function() {
    if (botRight.innerHTML === "") {
        botRight.innerHTML = currentPlayer()
        gameArray.push(1)
        if (topRight.innerHTML === player && midRight.innerHTML === player) {
            winner()
        }
        if (botLeft.innerHTML === player && botMid.innerHTML === player) {
            winner()
        }
        if (middle.innerHTML === player && topLeft.innerHTML === player) {
            winner()
        }
    }
    chickenStratch()
})

button.addEventListener("click", function() {
    topLeft.innerHTML = ""
    topMid.innerHTML = ""
    topRight.innerHTML = ""
    midLeft.innerHTML = ""
    middle.innerHTML = ""
    midRight.innerHTML = ""
    botLeft.innerHTML = ""
    botMid.innerHTML = ""
    botRight.innerHTML = ""
    player = "X"
    whoseTurn.innerHTML = "player 1's turn"
    button.innerHTML = "start"
    gameArray = []
    gameOver = false
    clearInterval(myInterval)
})

const myInterval = setInterval(coolFeature, 1500);