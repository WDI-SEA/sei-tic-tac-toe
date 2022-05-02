const playerTurnText = document.querySelector("#playerTurn")
const clearButton = document.querySelector("#clearButton")
const oWinCountText = document.querySelector("#oWinCount")
const xWinCountText = document.querySelector("#xWinCount")
const tieCountText = document.querySelector("#tieCount")
const vsCompButton = document.querySelector("#vsComp-Button")
const playerXspan = document.querySelector("#playerXspan")
let playerVsText = document.querySelector("#playerVsText")
let btns = document.querySelectorAll('.btns')

let playerO = [false, false, false, false, false, false, false, false, false]
let playerX = [false, false, false, false, false, false, false, false, false]
let gameArr = [false, false, false, false, false, false, false, false, false]

const Oturn = "Player: O's Turn"
const Xturn = "Player: X's Turn"

let tieText = "No One won, Clear to try again"
let clickNum = 0
let playerChoice = "O"
let currPlayerArr = playerO
let playerOwins = 0
let playerXwins = 0
let tieCounter = 0
let randy
let playVScomp = false
let winFlag = false

document.addEventListener('DOMContentLoaded', function() {

    btns.forEach(function(i){
        i.addEventListener("click", function(event){
        // console.log("-----------------------------------")

            const play = event.target
            if (play.innerText == "") {
                play.innerText = playerChoice
                
                if (playerChoice == "O"){
                    playerO[play.value-1] = true
                    gameArr[play.value-1] = true
                    i.disabled = true
                    currPlayerArr = playerO
                    clickNum++
                    winCheck(playerChoice, currPlayerArr, clickNum)
                } 
                
                if(playerChoice == "X") {
                    playerX[play.value-1] = true
                    gameArr[play.value-1] = true
                    i.disabled = true
                    currPlayerArr = playerX
                    clickNum++
                    winCheck(playerChoice, currPlayerArr, clickNum)
                }
                console.log("clickNum:",clickNum)
                console.log("player on click:",playerChoice)
                

            }
            console.log("play vs comp:", playVScomp)
            
            if (playVScomp == true && clickNum < 8 && winFlag == false) {
                playerChoice = playerSwitcher(playerChoice)
                waitTime = Math.floor(Math.random()*5000)
                setTimeout(compAIturn(playerChoice, gameArr),waitTime)
                currPlayerArr = playerX
                winCheck(playerChoice, currPlayerArr, clickNum)
                playerChoice = playerSwitcher(playerChoice)

            } else if (playVScomp == false && winFlag == false){
                playerChoice = playerSwitcher(playerChoice)
            }
    
        })
    })


    clearButton.addEventListener('click', function(){
        reset()
    })

    vsCompButton.addEventListener("click", function(){
        console.log("comp button pushed")
        console.log("vs computer? before switch:", playVScomp)
        if (playVScomp == true) {
            playVScomp = false
            
            vsCompButton.innerText = "Player Vs Computer"
            playerXspan.innerText = "Player X"
        } else {
            playVScomp = true
            
            vsCompButton.innerText = "Player Vs Player"
            playerXspan.innerText = "Computer"
            
        }
        reset()
        playerXwins = 0
        playerOwins = 0
        tieCounter = 0
        oWinCountText.innerText = playerOwins
        xWinCountText.innerHTML = playerXwins
        tieCountText. innerHTML = tieCounter
        console.log("vs computer? after switch:", playVScomp)
    })

})


function reset() {
    enButtons(btns)
    playerX = [false, false, false, false, false, false, false, false, false]
    playerO = [false, false, false, false, false, false, false, false, false]
    gameArr = [false, false, false, false, false, false, false, false, false]
    clickNum = 0
    playerTurnText.innerHTML = Oturn
    playerChoice = "O"
    winFlag = false
}

function getRand(Array) {
    g =  Math.floor(Math.random() * (8 - 0) + 0)
    randCounter = 0
    while(Array[g] == true) {
        g =  Math.floor(Math.random() * (8 - 0) + 0)
        randCounter++
    }
    randCounter = 0
    return g
}


function compAIturn(playerChoice,gameArr,randy) {
    // console.log("compAIturn running")
    randy = getRand(gameArr)
    for (i = 0; i<9;i++) {
        if (playerX[randy] == false) {
            btns.forEach(function(i) {
                if (i.value - 1 == randy) {
                    i.innerText = playerChoice
                    gameArr[randy] = true
                    playerX[randy] = true
                    console.log("Player X arr:",playerX)
                    i.disabled = true
                }                
            })
        }
    }
    // console.log("Final gameArr:",gameArr)
    // console.log("Final player X:",playerX)
    clickNum++
}

function winCheck (playerChoice, arr,clickNum) {
    let count = 0
    const winArr = [
        [true, true, true, "", "", "", "", "", ""],
        ["", "", "",true, true, true, "", "", ""],
        ["", "", "", "", "", "",true, true, true],
        [true, "", "", true, "", "",true, "", ""],
        ["", true, "", "", true, "","", true, ""],
        ["", "", true, "", "", true,"", "", true],
        [true, "", "", "", true, "", "", "", true],
        ["", "", true, "", true, "", true, "", ""]
    ]
    // count 
    for (i=0; i < winArr.length ; i++){
        for (j=0; j < winArr[i].length ;j++){
            if (winArr[i][j] === true && arr[j] === true) {               
                count++
                if (count === 3) {
                    winFlag = true                    
                }
            }
        }
        count = 0
    }

    //checks to see if someone wins, switches to next player if not and sets tie at 9 turns.
    if (winFlag == true) {
        // console.log("Current Player", playerChoice)
        // console.log("click number:",clickNum)
        if (playVScomp == false) {
            playerTurnText.innerText = "Player " + playerChoice + " wins"
        } else if (playVScomp == true) {
            if (playerChoice == "X"){
                playerTurnText.innerText = "Computer wins"
            } else {
                playerTurnText.innerText = "Player " + playerChoice + " wins"
            }
        } 
        disButtons(btns)
        if (playerChoice == "O") {
            // console.log("O wins flag")
            playerOwins++
            oWinCountText.innerText = playerOwins
        } else if (playerChoice == "X"){
            // console.log("X wins flag")
            playerXwins++
            xWinCountText.innerText = playerXwins
        } 

    } else if (winFlag == false && clickNum == 9){
        // console.log("tie flag")
    playerTurnText.innerText = tieText
    disButtons(btns)
    tieCounter++
    tieCountText.innerText = tieCounter
    }
}

function playerSwitcher(turn) {
    if (turn == "X") {
        turn = "O"
        playerTurnText.innerText = "Player: O's turn"
    } else if (turn == "O"){
        turn = "X"
        playerTurnText.innerText = "Player: X's turn"
    }

    return turn
}

function disButtons(btns) {
    btns.forEach(function(i){
        i.disabled = true
        // console.log("disbutton runs")
    })
}

function enButtons(btns) {
    btns.forEach(function(i){
        i.disabled = false
        i.innerText = ""
    })
}
