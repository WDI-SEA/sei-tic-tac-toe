let playerOneName = document.getElementById("playerOneName")
let playerTwoName = document.querySelector("#playerTwoName")
let startBtn = document.querySelector('#start')
console.log(startBtn)
let resetBtn = document.querySelector('#reset')
let output = document.querySelector('#output')
let areaArray =[]
for (let i = 0; i < 9; i++) {
    areaArray[i] = document.getElementById("area" + i)
}  
let areaClickable = [true, true, true, true, true, true, true, true, true]
let whoseTurn = playerOneName
let playerOneMark ='X'
let playerTwoMark ='O'
let currentMark = 'X'
let gameBoard = [['','',''],['','',''], ['','','']]
let stepCount = 0;
let winningrecord = {}

startBtn.addEventListener("click", function(e) {
    output.innerHTML = "<h1>" + whoseTurn.value+"'s turn" +"</h1>";
})
resetBtn.addEventListener("click", function(e) {
    let allArea = document.querySelectorAll("div.checkpoint")
    for (const area of allArea){
        area.style.color = "rgb(214, 217, 210)"
        area.style.innerText = " "
    }
    areaClickable = [true, true, true, true, true, true, true, true, true]
    whoseTurn = playerOneName
    currentMark = 'X'
    gameBoard = [['','',''],['','',''], ['','','']]
    stepCount = 0;
    playerOneName.value = ""
    playerTwoName.value = ""
    output.innerHTML = "<h1>Put in players' names and click 'start' to start</h1>";
})
for (let i = 0; i < areaArray.length; i++) {
    areaArray[i].addEventListener('click', function(e) {
        if (areaClickable[i]) {
            currentMark = whoseTurn === playerOneName? 'X':'O'
            e.target.innerText = currentMark
            e.target.style.color = 'blue'
            stepCount++
            gameBoard[Math.floor(i / 3)][i % 3] = currentMark
            areaClickable[i] = false
            whoseTurn = whoseTurn === playerOneName? playerTwoName : playerOneName
            output.innerHTML = "<h1>" + whoseTurn.value+"'s turn" +"</h1>";
            if (stepCount >= 5) {
                let result = gameresult(gameBoard, stepCount)
                gameOver(result)
            }
        }
    })
}
console.log(gameBoard)
function gameresult(arr, stepCount) {
    if (arr[0][0]===arr[0][1] && arr[0][0]===arr[0][2] && arr[0][0] !== "") {
        return arr[0][0];
    }
    if (arr[1][0]===arr[1][1] && arr[1][0]===arr[1][2] && arr[1][0] !== "") {
        return arr[1][0];
    }
    if (arr[2][0]===arr[2][1] && arr[2][0]===arr[2][2] && arr[2][0] !== "") {
        return arr[2][0];
    }
    if (arr[0][0]===arr[1][0] && arr[0][0]===arr[2][0] && arr[0][0] !== "") {
        return arr[0][0];
    }
    if (arr[0][1]===arr[1][1] && arr[0][1]===arr[2][1] && arr[0][1] !== "") {
        return arr[0][1];
    }
    if (arr[0][2]===arr[1][2] && arr[0][2]===arr[2][2] && arr[0][2] !== "") {
        return arr[0][1];
    }
    if (arr[0][0]===arr[1][1] && arr[0][0]===arr[2][2] && arr[0][0] !== "") {
        return arr[0][0];
    }
    if (arr[0][2]===arr[1][1] && arr[0][2]===arr[2][0] && arr[0][2] !== "") {
        return arr[0][0];
    } 
    if (stepCount === 9) {
        return 'd'
    }
    return 'n'
}
function gameOver(result) {
    if (result === playerOneMark) {
        output.innerHTML = "<h1>Game Over! " + playerOneName.value+" wins" +"</h1>";
        areaClickable = [false, false, false, false, false, false, false, false, false]
        if (winningrecord[playerOneName.value]) {
            winningrecord[playerOneName.value]++
        } else {
            winningrecord[playerOneName.value] = 1
        }
    } else if (result === playerTwoMark) {
        output.innerHTML = "<h1>Game Over! " + playerTwoName.value+" wins" +"</h1>";
        areaClickable = [false, false, false, false, false, false, false, false, false]
        if (winningrecord[playerTwoName.value]) {
            winningrecord[playerTwoName.value]++
        } else {
            winningrecord[playerTwoName.value] = 1
        }
    } else if (result === 'd') {
        output.innerHTML = "<h1>It's a draw</h1>";
        areaClickable = [false, false, false, false, false, false, false, false, false]
    }
}
