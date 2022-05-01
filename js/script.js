const playerTurnText = document.querySelector("#playerTurn")

document.addEventListener('DOMContentLoaded', function() {
    
    let btns = document.querySelectorAll('.btns');
    const clearButton = document.querySelector("#clearButton")
    const oWinCountText = document.querySelector("#oWinCount")
    const xWinCountText = document.querySelector("#xWinCount")
    const tieCountText = document.querySelector("#tieCount")
    
    let playerX = [false, false, false, false, false, false, false, false, false]
    let playerO = [false, false, false, false, false, false, false, false, false]

    const Oturn = "Player: O's Turn"
    const Xturn = "Player: X's Turn"

    let tieText = "No One won, Clear to try again"
    
    let clickNum = 0
    let playerChoice = "O"
    let game = playerO
    let winFlag = 0
    let playerOwins = 0
    let playerXwins = 0
    let tieCounter = 0
    let randy = Math.floor(Math.random() * 10);
    console.log("Random Number:", randy)

    btns.forEach(function(i){
        i.addEventListener("click", function(event){
            const play = event.target
            if (play.innerText == "") {
                play.innerText = playerChoice
                
                if (playerChoice == "O"){
                    playerO[play.value-1] = true
                    game = playerO
                    clickNum++
                } 
                
                if(playerChoice == "X") {
                    playerX[play.value-1] = true
                    game = playerX
                    clickNum++
                }
                console.log("clickNum:",clickNum)
                winFlag = winCheck(game)

                //checks to see if someone wins, switches to next player if not and sets tie at 9 turns.
                if (winFlag == 1) {
                    playerTurnText.innerText = "Player " + playerChoice + " wins"
                    disButtons(btns)

                    if (playerChoice == "O") {
                        playerOwins++
                        oWinCountText.innerText = playerOwins
                    } else if (playerChoice == "X"){
                        playerXwins++
                        xWinCountText.innerText = playerXwins
                    }

                } else if (clickNum < 9 && winFlag != 1) {
                    playerChoice = playerSwitcher(playerChoice)
                } else if (clickNum == 9){
                    playerTurnText.innerText = tieText
                    disButtons(btns)
                    tieCounter++
                    tieCountText.innerText = tieCounter
                }
            }
        })
    }) 

    clearButton.addEventListener('click', function(){
        enButtons(btns)
        playerX = [false, false, false, false, false, false, false, false, false]
        playerO = [false, false, false, false, false, false, false, false, false]
        clickNum = 0
        document.querySelector("#playerTurn").innerHTML = Oturn
        playerChoice = "O"
    })
})

function winCheck (arr) {
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
                    return 1                    
                }
            }
        }
        count = 0
    }
    return 0
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
        console.log("disbutton runs")
    })
}

function enButtons(btns) {
    btns.forEach(function(i){
        i.disabled = false
        i.innerText = ""
        playerChoice = "O"
    })
}