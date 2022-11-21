let spot1 = document.getElementById('spot1')
let spot2 = document.getElementById('spot2')
let spot3 = document.getElementById('spot3')
let spot4 = document.getElementById('spot4')
let spot5 = document.getElementById('spot5')
let spot6 = document.getElementById('spot6')
let spot7 = document.getElementById('spot7')
let spot8 = document.getElementById('spot8')
let spot9 = document.getElementById('spot9')


let spotArray = [
    spot1,
    spot2,
    spot3,
    spot4,
    spot5,
    spot6,
    spot7,
    spot8,
    spot9
]

//taking turns
let displayTurn = document.getElementById('turnText')
let turnCounter = 2
 let players = "X"
// let turn = players[0]'



//event listeners
spot1.addEventListener("click", function(event) {
    if (turnCounter % 2 === 0){
        spot1.innerText = "X"
        spot1 = "X"
        players = 'O'
    } else {
        spot1.innerText = "O"
        spot1 = "O"
        players = 'X'
    }
    turnCounter++
    console.log(turnCounter)
})
spot2.addEventListener("click", function(event) {
    if (turnCounter % 2 === 0){
        spot2.innerText = "X"
        spot2 = 'X'
        players = 'O'
    } else {
        spot2.innerText = "O"
        spot2 = 'O'
        players = 'X'
    }
    turnCounter++
    console.log(turnCounter)
})
spot3.addEventListener("click", function(event) {
    if (turnCounter % 2 === 0){
        spot3.innerText = "X"
        spot3 = 'X'
        players = 'O'
    } else {
        spot3.innerText = "O"
        spot3 = 'O'
        players = 'X'
    }
    turnCounter++
    console.log(turnCounter)
})
spot4.addEventListener("click", function(event) {
    if (turnCounter % 2 === 0){
        spot4.innerText = "X"
        spot4 = 'X'
        players = 'O'
    } else {
        spot4.innerText = "O"
        spot4 = '0'
        players = 'X'
    }
    turnCounter++
    console.log(turnCounter)
})
spot5.addEventListener("click", function(event) {
    if (turnCounter % 2 === 0){
        spot5.innerText = "X"
        spot5 = 'X'
        players = 'O'
    } else {
        spot5.innerText = "O"
        spot5 = '0'
        players = 'X'
    }
    turnCounter++
    console.log(turnCounter)
})
spot6.addEventListener("click", function(event) {
    if (turnCounter % 2 === 0){
        spot6.innerText = "X"
        spot6 = 'X'
        players = 'O'
    } else {
        spot6.innerText = "O"
        spot6 = 'O'
        players = 'X'
    }
    turnCounter++
    console.log(turnCounter)
})
spot7.addEventListener("click", function(event) {
    if (turnCounter % 2 === 0){
        spot7.innerText = "X"
        spot7 = 'X'
        players = 'O'
    } else {
        spot7.innerText = "O"
        spot7 = 'O'
        players = 'X'
    }
    turnCounter++
    console.log(turnCounter)
})
spot8.addEventListener("click", function(event) {
    if (turnCounter % 2 === 0){
        spot8.innerText = "X"
        spot8 = 'X'
        players = 'O'
    } else {
        spot8.innerText = "O"
        spot8 = 'O'
        players = 'X'
    }
    turnCounter++
    console.log(turnCounter)
})
spot9.addEventListener("click", function(event) {
    if (turnCounter % 2 === 0){
        spot9.innerText = "X"
        spot9 = 'X'
        players = 'O'
    } else {
        spot9.innerText = "O"
        spot9 = 'O'
        players = 'X'
    }
    turnCounter++
    console.log(turnCounter)
})


// let reset = document.getElementById('reset')
// reset.addEventListener("click",restart) //error
// function restart() {
//     location.reload()
// }

//winning combo
// const winCombinations = [
//     [1,2,3]
//     [1,4,7]
//     [1,5,9]
//     [2,5,8]
//     [3,6,9]
//     [3,5,7]
//     [4,5,6]
//     [7,8,9]
// ]
 