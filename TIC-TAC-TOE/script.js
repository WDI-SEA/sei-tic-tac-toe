let turn = 'X'
let choice = 0
const gameboard = document.querySelectorAll(".box").innerText
const winConditions = [
[0, 1, 2], 
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6]
]
//Show X or O on board
//Change Turns
// Check for X win
//Check for O win
//Check for Draw

function switchTurn () {
    if (turn === 'X') {
       turn = 'O'
    } else if (turn === 'O') {
       turn = 'X'
    }
} 

function checkForWins () {
    if (document.getElementById("boxA").innerText && document.getElementById("boxA").innerText === document.getElementById("boxB").innerText && document.getElementById("boxC").innerText === document.getElementById("boxB").innerText) {document.getElementById("status").innerText = 'Winner!'}

    if (document.getElementById("boxD").innerText && document.getElementById("boxD").innerText === document.getElementById("boxE").innerText && document.getElementById("boxF").innerText === document.getElementById("boxD").innerText) { document.getElementById("status").innerText = 'Winner!'}

    if (document.getElementById("boxG").innerText && document.getElementById("boxG").innerText === document.getElementById("boxH").innerText && document.getElementById("boxI").innerText === document.getElementById("boxG").innerText) { document.getElementById("status").innerText = 'Winner!'}

    if (document.getElementById("boxA").innerText && document.getElementById("boxA").innerText === document.getElementById("boxD").innerText && document.getElementById("boxG").innerText === document.getElementById("boxA").innerText) { document.getElementById("status").innerText = 'Winner!'}

    if (document.getElementById("boxB").innerText && document.getElementById("boxB").innerText === document.getElementById("boxE").innerText && document.getElementById("boxH").innerText === document.getElementById("boxB").innerText) { document.getElementById("status").innerText = 'Winner!'}

    if (document.getElementById("boxA").innerText && document.getElementById("boxA").innerText === document.getElementById("boxE").innerText && document.getElementById("boxI").innerText === document.getElementById("boxA").innerText) { document.getElementById("status").innerText = 'Winner!'}

    if (document.getElementById("boxC").innerText && document.getElementById("boxC").innerText === document.getElementById("boxE").innerText && document.getElementById("boxG").innerText === document.getElementById("boxC").innerText) { document.getElementById("status").innerText = 'Winner!'}

    if (document.getElementById("boxC").innerText && document.getElementById("boxC").innerText === document.getElementById("boxF").innerText && document.getElementById("boxI").innerText === document.getElementById("boxC").innerText) { document.getElementById("status").innerText = 'Winner!'}
}

function checkforDraw () {
    if (checkForWins() != true && choice === 9) {
        document.getElementById("status").innerText = 'Draw!'
    }
    
}




function playerTurn (e) {
    switchTurn()
    const target = e.target
    console.log('target', target)
    target.innerText = turn
    choice = choice + 1
    console.log(choice)
    checkForWins()
     console.log(turn)
     checkforDraw()
} 


 document.getElementById("boxA").addEventListener("click", playerTurn)

 document.getElementById("boxB").addEventListener("click", playerTurn)

 document.getElementById("boxC").addEventListener("click", playerTurn)

 document.getElementById("boxD").addEventListener("click", playerTurn)

 document.getElementById("boxE").addEventListener("click", playerTurn)

 document.getElementById("boxF").addEventListener("click", playerTurn)

 document.getElementById("boxG").addEventListener("click", playerTurn)

 document.getElementById("boxH").addEventListener("click", playerTurn)

 document.getElementById("boxI").addEventListener("click", playerTurn)

 function clearGame() {
   window.location.reload()
 }

  document.getElementById("Reset").addEventListener("click", clearGame)
