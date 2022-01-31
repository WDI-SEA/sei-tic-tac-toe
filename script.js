let remainingChoice = 9;
let currentP = 'X'
let winner = false
let scoreX = 0
let scoreO = 0
// let simpAI = false

//Array of boxes
const arraySpaces = Array.from(document.querySelectorAll('.box'))
const resetBtn = document.querySelector('#reset')
let dispCurP = document.querySelector('#current')
let dispWinner = document.querySelector('#dispWin')
let dispscoreX = document.querySelector('#trackX')
let dispscoreO = document.querySelector('#trackO')
// let btnAI = document.querySelector('#AI')

// let arrX = [] //array containing IDs of the boxes that contains X
// let arrO = [] //array containing IDs of the boxes that contains O

// FOR AI 
// const simpMode = () => {
//      simpAI = true
//      console.log(arraySpaces)
//      initGame
// }

// const simpA = () =>{
//     let num = Math.floor(Math.random()*8)
//      if(arraySpaces[num] === ''){
//          arraySpaces[num].innerText = currentP
//          checkWinCon()
//          toggleCurrent()
//          toCheck()
//      }else simpA()
// }
// btnAI.addEventListener('click',simpMode)

const resetGame = () =>{
    currentP = 'X'
    winner = false
    remainingChoice = 9
    // simpAI = false

    for(let i = 0; i < arraySpaces.length; i++){
        arraySpaces[i].innerText = ''
    }
    dispCurP.innerText = 'Current Player:'
    dispWinner.innerText = ''
    initGame()
    console.log('reset')
}

resetBtn.addEventListener('click',resetGame)

//initialize the game and attach an event listener to all the boxes
const initGame = () =>{
    for(let i = 0; i < arraySpaces.length; i++){
        arraySpaces[i].style.fontSize = '500%'
    }
    for(let i = 0; i < arraySpaces.length; i++){
        arraySpaces[i].addEventListener('click',toCheck)
    }
}



//To listen for eventlisteners
const toCheck = (event) => {
    //check if the box, that was clicked, has a value of X or O
    let box = event.target.innerText
    //push all the value of the box inside the array

    if(box === '' && currentP === 'X')
    {
        box = currentP
        event.target.innerText = box
        remainingChoice--
        dispCurP.innerText = `Current Player: ${currentP}`
        console.log(`box: ${box}, next player: ${currentP}, remaining: ${remainingChoice}`)
        //arrX.push(event.target.id) //pushing the id of the box where the inside is X
        checkWinCon()
        toggleCurrent()
    }
    else if(box === '' && currentP === 'O' ){
        box = currentP
        event.target.innerText = box
        remainingChoice--
        dispCurP.innerText = `Current Player: ${currentP}`
        console.log(`box: ${box}, next player: ${currentP}, remaining: ${remainingChoice}`)
        //arrO.push(event.target.id) //pushing the id of the box where the inside is O
        checkWinCon()
        toggleCurrent()
    }
    // else if(simpAI === true && currentP === 'O')
    // simpA()

}

const toggleCurrent = () => {
    if (currentP === 'X'){
        currentP = 'O'
    }else
        currentP = 'X'
}


// win-conditions are:
// [1] [2] [3]
// [4] [5] [6]
// [7] [8] [9]
// 1. 1,2,3
// 2. 4,5,6
// 3. 7,8,9
// 4. 1,4,7
// 5. 2,5,8
// 6. 3,6,9
// 7. 1,5,9
// 8. 3,5,7

// Option2 -> WET method lol
const checkWinCon = () => {
    if(arraySpaces[1-1].innerText === arraySpaces[2-1].innerText && arraySpaces[2-1].innerText === arraySpaces[3-1].innerText && arraySpaces[1-1].innerText === currentP){
        winner = true
        dispWinner.innerText = (`Player ${currentP} wins!`)
        if(currentP === 'X') {
            scoreX++
            dispscoreX.innerText = (`Player X: ${scoreX}`)
        }else {
            scoreO++
            dispscoreO.innerText = (`Player O: ${scoreO}`)
        }
        gameOver()
    }else if(arraySpaces[4-1].innerText === arraySpaces[5-1].innerText && arraySpaces[5-1].innerText === arraySpaces[6-1].innerText && arraySpaces[4-1].innerText === currentP){
        winner = true
        dispWinner.innerText = (`Player ${currentP} wins!`)
        if(currentP === 'X') {
            scoreX++
            dispscoreX.innerText = (`Player X: ${scoreX}`)
        }else {
            scoreO++
            dispscoreO.innerText = (`Player O: ${scoreO}`)
        }
        gameOver()
    }else if(arraySpaces[7-1].innerText === arraySpaces[8-1].innerText && arraySpaces[8-1].innerText === arraySpaces[9-1].innerText && arraySpaces[7-1].innerText === currentP){
        winner = true
        dispWinner.innerText = (`Player ${currentP} wins!`)
        if(currentP === 'X') {
            scoreX++
            dispscoreX.innerText = (`Player X: ${scoreX}`)
        }else {
            scoreO++
            dispscoreO.innerText = (`Player O: ${scoreO}`)
        }
        gameOver()
    }else if(arraySpaces[1-1].innerText === arraySpaces[4-1].innerText && arraySpaces[4-1].innerText === arraySpaces[7-1].innerText && arraySpaces[1-1].innerText === currentP){
        winner = true
        dispWinner.innerText = (`Player ${currentP} wins!`)
        if(currentP === 'X') {
            scoreX++
            dispscoreX.innerText = (`Player X: ${scoreX}`)
        }else {
            scoreO++
            dispscoreO.innerText = (`Player O: ${scoreO}`)
        }
        gameOver()
    }else if(arraySpaces[2-1].innerText === arraySpaces[5-1].innerText && arraySpaces[5-1].innerText === arraySpaces[8-1].innerText && arraySpaces[2-1].innerText === currentP){
        winner = true
        dispWinner.innerText = (`Player ${currentP} wins!`)
        if(currentP === 'X') {
            scoreX++
            dispscoreX.innerText = (`Player X: ${scoreX}`)
        }else {
            scoreO++
            dispscoreO.innerText = (`Player O: ${scoreO}`)
        }
        gameOver()
    }else if(arraySpaces[3-1].innerText === arraySpaces[6-1].innerText && arraySpaces[6-1].innerText === arraySpaces[9-1].innerText && arraySpaces[3-1].innerText === currentP){
        winner = true
        dispWinner.innerText = (`Player ${currentP} wins!`)
        if(currentP === 'X') {
            scoreX++
            dispscoreX.innerText = (`Player X: ${scoreX}`)
        }else {
            scoreO++
            dispscoreO.innerText = (`Player O: ${scoreO}`)
        }
        gameOver()
    }else if(arraySpaces[1-1].innerText === arraySpaces[5-1].innerText && arraySpaces[5-1].innerText === arraySpaces[9-1].innerText && arraySpaces[1-1].innerText === currentP){
        winner = true
        dispWinner.innerText = (`Player ${currentP} wins!`)
        if(currentP === 'X') {
            scoreX++
            dispscoreX.innerText = (`Player X: ${scoreX}`)
        }else {
            scoreO++
            dispscoreO.innerText = (`Player O: ${scoreO}`)
        }
        gameOver()
    }else if(arraySpaces[3-1].innerText === arraySpaces[5-1].innerText && arraySpaces[5-1].innerText === arraySpaces[7-1].innerText && arraySpaces[3-1].innerText === currentP){
        winner = true
        dispWinner.innerText = (`Player ${currentP} wins!`)
        if(currentP === 'X') {
            scoreX++
            dispscoreX.innerText = (`Player X: ${scoreX}`)
        }else {
            scoreO++
            dispscoreO.innerText = (`Player O: ${scoreO}`)
        }
        gameOver()
    }else checkTie()
}

const gameOver = () => {
    if (winner === true){
        for(let i = 0; i < arraySpaces.length; i++){
            if(arraySpaces[i].innerText === ''){
                arraySpaces[i].removeEventListener('click',toCheck)
            }
        }
    }
}

const checkTie = () => {
    if(remainingChoice === 0 && winner === false){
        dispWinner.innerText = 'Draw!'
        console.log('We have a stalemate')
    }
}

// //Option 1 -> dry method by comparing arrays (Does not work)
// //comparing the winning combinations to the arrX && arrO arrays
// //if the values inside the wining combo arrays match with the values inside the arrX && arrO arrays, we have a winner!
// const winCon1 = [1,2,3]
// const winCon2 = [4,5,6]
// const winCon3 = [7,8,9]
// const winCon4 = [1,4,7]
// const winCon5 = [2,5,8]
// const winCon6 = [3,6,9]
// const winCon7 = [1,5,9]
// const winCon8 = [3,6,7]

// const checkWinCon = () => {
//     let count = winCon1.length //this to check if the values inside the combos are found inside the arrX/arrO array
//     if(currentP === 'X'){
//         for(let j = 0; j < winCon1.length; j++){
//             for(let i = 0; i < arrX.length;){
//                 if(winCon1[j] === arrX[i]){ //check if both values are same. If same, move to the next index
//                     j++
//                     i++
//                     count--
//                 } else i++ //If not same, we move to the next index of arrX/arrO array
//             }
//         }
//         if(count === 0){//if the count == 0, then all the values inside the combos were found inside the arrX/arrO array
//             winner = true
//             console.log('we have a winner')
//         }else {
//             count = winCon2.length
//             for(let j = 0; j < winCon2.length; j++){
//                 for(let i = 0; i < arrX.length;){
//                     if(winCon1[j] === arrX[i]){
//                         j++
//                         i++
//                         count--
//                     } else i++
//                 }
//             }
//             if(count === 0){
//                 winner = true
//                 console.log('we have a winner')
//             }else {
//                 count = winCon3.length
//                 for(let j = 0; j < winCon3.length; j++){
//                     for(let i = 0; i < arrX.length;){
//                         if(winCon1[j] === arrX[i]){
//                             j++
//                             i++
//                             count--
//                         } else i++
//                     }
//                 }
//                 if(count === 0){
//                     winner = true
//                     console.log('we have a winner')
//                 }else{
//                     count = winCon4.length
//                     for(let j = 0; j < winCon4.length; j++){
//                         for(let i = 0; i < arrX.length;){
//                             if(winCon1[j] === arrX[i]){
//                                 j++
//                                 i++
//                                 count--
//                             } else i++
//                         }
//                     }
//                     if(count === 0){
//                         winner = true
//                         console.log('we have a winner')
//                     }else {
//                         count = winCon5.length
//                         for(let j = 0; j < winCon5.length; j++){
//                             for(let i = 0; i < arrX.length;){
//                                 if(winCon1[j] === arrX[i]){
//                                     j++
//                                     i++
//                                     count--
//                                 } else i++
//                             }
//                         }
//                         if(count === 0){
//                             winner = true
//                             console.log('we have a winner')
//                         }else {
//                             count = winCon6.length
//                             for(let j = 0; j < winCon6.length; j++){
//                                 for(let i = 0; i < arrX.length;){
//                                     if(winCon1[j] === arrX[i]){
//                                         j++
//                                         i++
//                                         count--
//                                     } else i++
//                                 }
//                             }
//                             if(count === 0){
//                                 winner = true
//                                 console.log('we have a winner')
//                             }else {
//                                 count = winCon7.length
//                                 for(let j = 0; j < winCon7.length; j++){
//                                     for(let i = 0; i < arrX.length;){
//                                         if(winCon1[j] === arrX[i]){
//                                             j++
//                                             i++
//                                             count--
//                                         } else i++
//                                     }
//                                 }
//                                 if(count === 0){
//                                     winner = true
//                                     console.log('we have a winner')
//                                 }else {
//                                     count = winCon8.length
//                                     for(let j = 0; j < winCon8.length; j++){
//                                         for(let i = 0; i < arrX.length;){
//                                             if(winCon1[j] === arrX[i]){
//                                                 j++
//                                                 i++
//                                                 count--
//                                             } else i++
//                                         }
//                                     }
//                                     if(count === 0){
//                                         winner = true
//                                         console.log('we have a winner')
//                                     }else checkTie()
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }
//         }

//     } else if(currentP === 'O'){
//         for(let j = 0; j < winCon1.length; j++){
//             for(let i = 0; i < arrO.length;){
//                 if(winCon1[j] === arrO[i]){
//                     j++
//                     i++
//                     count--
//                 } else i++
//             }
//         }
//         if(count === 0){
//             winner = true
//             console.log('we have a winner')
//         }else {
//             count = winCon2.length
//             for(let j = 0; j < winCon2.length; j++){
//                 for(let i = 0; i < arrO.length;){
//                     if(winCon1[j] === arrO[i]){
//                         j++
//                         i++
//                         count--
//                     } else i++
//                 }
//             }
//             if(count === 0){
//                 winner = true
//                 console.log('we have a winner')
//             }else {
//                 count = winCon3.length
//                 for(let j = 0; j < winCon3.length; j++){
//                     for(let i = 0; i < arrO.length;){
//                         if(winCon1[j] === arrO[i]){
//                             j++
//                             i++
//                             count--
//                         } else i++
//                     }
//                 }
//                 if(count === 0){
//                     winner = true
//                     console.log('we have a winner')
//                 }else{
//                     count = winCon4.length
//                     for(let j = 0; j < winCon4.length; j++){
//                         for(let i = 0; i < arrO.length;){
//                             if(winCon1[j] === arrO[i]){
//                                 j++
//                                 i++
//                                 count--
//                             } else i++
//                         }
//                     }
//                     if(count === 0){
//                         winner = true
//                         console.log('we have a winner')
//                     }else {
//                         count = winCon5.length
//                         for(let j = 0; j < winCon5.length; j++){
//                             for(let i = 0; i < arrO.length;){
//                                 if(winCon1[j] === arrO[i]){
//                                     j++
//                                     i++
//                                     count--
//                                 } else i++
//                             }
//                         }
//                         if(count === 0){
//                             winner = true
//                             console.log('we have a winner')
//                         }else {
//                             count = winCon6.length
//                             for(let j = 0; j < winCon6.length; j++){
//                                 for(let i = 0; i < arrO.length;){
//                                     if(winCon1[j] === arrO[i]){
//                                         j++
//                                         i++
//                                         count--
//                                     } else i++
//                                 }
//                             }
//                             if(count === 0){
//                                 winner = true
//                                 console.log('we have a winner')
//                             }else {
//                                 count = winCon7.length
//                                 for(let j = 0; j < winCon7.length; j++){
//                                     for(let i = 0; i < arrO.length;){
//                                         if(winCon1[j] === arrO[i]){
//                                             j++
//                                             i++
//                                             count--
//                                         } else i++
//                                     }
//                                 }
//                                 if(count === 0){
//                                     winner = true
//                                     console.log('we have a winner')
//                                 }else {
//                                     count = winCon8.length
//                                     for(let j = 0; j < winCon8.length; j++){
//                                         for(let i = 0; i < arrO.length;){
//                                             if(winCon1[j] === arrO[i]){
//                                                 j++
//                                                 i++
//                                                 count--
//                                             } else i++
//                                         }
//                                     }
//                                     if(count === 0){
//                                         winner = true
//                                         console.log('we have a winner')
//                                     }else checkTie()
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }
//         }

//     }
// }





initGame()