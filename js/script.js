document.addEventListener('DOMContentLoaded', function() {
    
    let btns = document.querySelectorAll('.btns');
    const clearButton = document.querySelector("#clearButton")
    
    let playerX = [false, false, false, false, false, false, false, false, false]
    let playerO = [false, false, false, false, false, false, false, false, false]

    const Oturn = "Player O's Turn"
    const Xturn = "Player X's Turn"
    let tieText = "No One won, Clear to try again"
    
    let clickNum = 0
    let playerChoice = "O"
    let game = playerO
    let winFlag = 0

    btns.forEach(function(i){
        i.addEventListener("click", function(event){
            const play = event.target
            if (play.innerText == "") {
                play.innerText = playerChoice
                if (playerChoice == "O"){
                    playerO[play.value-1] = true
                    // console.log(playerO)
                    game = playerO
                    clickNum++
                } else if(playerChoice == "X") {
                    playerX[play.value-1] = true
                    // console.log(playerX)
                    game = playerX
                    clickNum++
                }
                console.log("clickNum:",clickNum)
                winFlag = winCheck(game)
                // console.log("winFlag:",winFlag)
                if (winFlag == 1) {
                    document.querySelector("#playerTurn").innerHTML = "Player " + playerChoice + " wins"
                    disButtons(btns)
                } else if (clickNum < 9 && winFlag != 1) {
                    playerChoice = playerSwitcher(playerChoice)
                } else if (clickNum > 9){
                    document.querySelector("#playerTurn").innerHTML = tieText
                    disButtons(btns)
                }
            }
        })
    }) 

    clearButton.addEventListener('click', function(){
        enButtons(btns)
        playerX = [false, false, false, false, false, false, false, false, false]
        playerO = [false, false, false, false, false, false, false, false, false]
        clickNum = 0
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
    
    for (i=0; i < winArr.length ; i++){
        for (j=0; j < winArr[i].length ;j++){
            if (winArr[i][j] === true && arr[j] === true) {
                // console.log("i:",i)
                // console.log("j:",j)
                // console.log("winArr"+i+"/"+j ,winArr[i][j])
                // console.log("Arr"+":"+j+":", arr[j])
                // console.log("winArr[i] length:", winArr[i].length)
                
                count++
                // console.log("count:",count)
                if (count === 3) {
                    return 1                    
                }
            }
        }
        count = 0
    }
    // console.log("count:",count)
    return 0
}

function playerSwitcher(turn) {
    if (turn == "X") {
        turn = "O"
        document.querySelector("#playerTurn").innerText = "Player O's turn"
    } else if (turn == "O"){
        turn = "X"
        document.querySelector("#playerTurn").innerText = "Player X's turn"
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