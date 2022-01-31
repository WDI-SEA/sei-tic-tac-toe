const clickSpaces = Array.from(document.querySelectorAll(".clickSpace"))
const results = document.querySelector("#results")
const endGameCover = document.querySelector("#gameOver")
const tryAgain = document.querySelector("#tryAgain")
const resetBtn = document.querySelector("#resetBtn")
const newGameBtn = document.querySelector("#newGameBtn")
const playerTurnDisplay = document.querySelector("#playerTurnDisplay")
const selectionTracker = ["", "", "", "", "", "", "", "", "",]
const playerX = "x"
const playerO = "o"
// playerO.style.color = "crimson"
let currentPlayer = playerX
let hasWinner = false;
let movesCounter = 9;

// const winningCombo = [
//     [],
//     [],
// ]
// const playerX = document.createElement("img")
// playerX.src = "https://cdn-icons-png.flaticon.com/512/1076/1076928.png"
// playerX.alt = "dog"
// const playerO = document.createElement("img")
// playerO.src = "https://cdn-icons-png.flaticon.com/512/24/24674.png"
// playerO.alt = "cat"

// console.log(clickSpaces[0].id)
// console.log(currentPlayer)

const gameBoard = () => {
    // clickSpaces.forEach((clickSpace) => {
    //     // clickSpace.innerText = currentPlayer
    //     clickSpace.addEventListener("click", clickedBtnChecker)
    // }) 

    for(let x = 0; x < clickSpaces.length; x++){
        clickSpaces[x].addEventListener("click", clickedBtnChecker)
        // if(clickSpaces[x].innerText !== "" ){
        //     alert("game over!")
        // }
    }


    // clickSpaces[x].innerText = currentPlayer
}

const togglePlayers = () => {
    // if(currentPlayer === playerX){
    //     currentPlayer = playerO
    // } else {
    //     currentPlayer = playerX
    // }
    currentPlayer = currentPlayer === playerO ? playerX : playerO
    playerTurnDisplay.innerText = `${currentPlayer.toUpperCase()}'s turn!`
}


const clickedBtnChecker = (event) => {
    // const clickSpaceIndex = event.target.id
    // console.log(clickSpaceIndex)
    // console.log(selectionTracker[0]++)
    movesCounter--

    
    
    if (!selectionTracker[event.target.id]){
        selectionTracker[event.target.id] = currentPlayer;
        event.target.innerText = currentPlayer
        // getWinner()
        
        if(getWinner()){
            
            // alert(`${currentPlayer} wins!`)
            endGame()
            return;
        } 
        togglePlayers()
        
        if(hasWinner === false && movesCounter === 0){
            endGame()
   
        }

        // console.log("there is something in the array")
    
    }
    //  else {
    //     console.log("there is nothing in the array")
    // }
    // alert(event.target.id)//check if button is working
    // console.log(currentPlayer)
    // return currentPlayer;

    // clickSpaces.forEach((clickSpace) => {
    //     clickSpace.
    //     // clickSpace.append(currentPlayer)
    // })
}


/*

WINNING COMBOS 
[0][1][2] 012, 246
[3][4][5] 345, 036, 147, 258
[6][7][8]

vertical 036, 147,258
horizontal 012, 345, 678
cross 048 246
*/

const endGame = () => {
    if(hasWinner === false && movesCounter === 0){
        results.innerText = "No one wins. Try again?"
    } else {
        results.innerText = `${currentPlayer} wins! Play again?`
    }
    endGameCover.style.display = "block"
    // results.style.display = "block"
    // resetBtn.style.display = "block"
    // tryAgain.style.display = "block"
   
}


/*

I PROMISE TO CLEAN UP THIS "WORKING" getWinner FUNCTION AS SOON AS I HAVE TIME TO WRITE DOWN WHAT WENT WRONG 
AND WHY WHERE THE CONDITIONALS ARE TYPED MATTER

*/
const getWinner = () => {
    // if(selectionTracker[0] === currentPlayer){
    //     if(selectionTracker[4] === currentPlayer && selectionTracker[8] === currentPlayer){
    //         // hasWinner = true;
    //         alert(`${currentPlayer} wins!`)
    //         return true;
    //     }
     if ( selectionTracker[2] === currentPlayer){
        if(selectionTracker[4] === currentPlayer && selectionTracker[6] === currentPlayer){
            // hasWinner = true;
            alert(`${currentPlayer} wins! 246`)
            return true;
        } 
        if(selectionTracker[1] === currentPlayer && selectionTracker[0] === currentPlayer){
            alert(`${currentPlayer} wins! 012`)
            return true;
        }
        if( selectionTracker[5] === currentPlayer && selectionTracker[8] === currentPlayer) {
            alert(`${currentPlayer} wins on 258!`)
            return true;
        }
    } else if(selectionTracker[0] === currentPlayer){
        // if(selectionTracker[1] === currentPlayer && selectionTracker[2] === currentPlayer){
        //     // alert("player wins 048")
        //     // hasWinner = true
        //     alert(`${currentPlayer} wins!`)
        //     return true;
        // }
        if (selectionTracker[4] === currentPlayer &&  selectionTracker[8] === currentPlayer){
            // alert("player wins 012 ")
            hasWinner = true;
            alert(`${currentPlayer} wins! 048`)
            return true;
        }
        if (selectionTracker[3] === currentPlayer && selectionTracker[6] === currentPlayer){
            // alert("player wins 036")
            // hasWinner = true;
            alert(`${currentPlayer} wins! 036`)
            return true;
        }
    } else if(selectionTracker[1] === currentPlayer){
        if(selectionTracker[4] === currentPlayer && selectionTracker[7] === currentPlayer){
            // alert("player wins 246")
            // hasWinner = true;
            alert(`${currentPlayer} wins! 147`)
            return true;
        }
        // if(selectionTracker[5] === currentPlayer &&  selectionTracker[8]  === currentPlayer){
        //     // alert("player wins 258")
        //     // hasWinner = true;
        //     alert(`${currentPlayer} wins! 158`)
        //     return true;
        // } 
    } else if(selectionTracker[3] === currentPlayer){
        if(selectionTracker[4] === currentPlayer && selectionTracker[5] === currentPlayer){
            alert("player wins 345")
            // hasWinner = true;
            // alert(`${currentPlayer} wins!`)
            return true;
        } 
    } else if (selectionTracker[6] === currentPlayer){
        if(selectionTracker[7] === currentPlayer && selectionTracker[8] === currentPlayer){
            alert("player wins 678")
            // hasWinner = true;
            // alert(`${currentPlayer} wins!`)
            return true
        // } 
        // if(selectionTracker[4] === currentPlayer && selectionTracker[2] === currentPlayer){
        //     alert(`${currentPlayer}`)
        //     return true
        } 
    // } else if (selectionTracker[2] === currentPlayer){
    //     if(selectionTracker[4] === currentPlayer && selectionTracker[6] === currentPlayer){
    //         // alert("player wins  147")
    //         alert(`${currentPlayer} wins!`)
    //         return true
        // }
    } else {
        return false
    }
    // } else 
}

const reset = () => {
    location.reload()
}
const newGame = () => {
    location.reload()
}

resetBtn.addEventListener("click", reset)
newGameBtn.addEventListener("click", reset)
// const getWinner = () => {
//     if(selectionTracker[0] === currentPlayer){
//         if(selectionTracker[1] === currentPlayer && selectionTracker[2] === currentPlayer){
//             alert("player wins 012")
//             return true;
//         }
//         if (selectionTracker[4] === currentPlayer &&  selectionTracker[8]){
//             alert("player wins 048 ")
//             return true;
//         }
//         if (selectionTracker[3] === currentPlayer && selectionTracker[6]){
//             alert("player wins 036")
//             return true;
//         }
//     } else if(selectionTracker[2] === currentPlayer){
//         if(selectionTracker[4] === currentPlayer && selectionTracker[6] === currentPlayer){
//             alert("player wins 246")
//             return true;
//         }
//         if(selectionTracker[5] === currentPlayer &&  selectionTracker[8]){
//             alert("player wins 258")
//             return true;
//         }
//     } else if(selectionTracker[3] === currentPlayer){
//         if(selectionTracker[4] === currentPlayer && selectionTracker[5] === currentPlayer){
//             alert("player wins 345")
//             return true;
//         }
//     } else if (selectionTracker[6] === currentPlayer){
//         if(selectionTracker[7] === currentPlayer && selectionTracker[8] === currentPlayer){
//             alert("player wins 678")
//             return true
//         }
//     } else if (selectionTracker[1] === currentPlayer){
//         if(selectionTracker[4] === currentPlayer && selectionTracker[7] === currentPlayer){
//             alert("player wins  147")
//             return true
//         }
//     } else {
//         return false
//     }
//     // } else 

    
// }


// const getWinner = () => {
//     // if(clickSpaces[0] === currentPlayer){
//     //     if (clickSpace[1]=== currentPlayer  && clickSpace[2] === currentPlyayer ){
//         // console.log("winner winner chicken dinner")
//     // }
//     // }
//     // gameBoard()
//     if(selectionTracker[0] === selectionTracker[1] && selectionTracker[1] ===  selectionTracker[2]){
//         // console.log(`${currentPlayer} lost!`)
//         return true;
//     // }
//     } else if(selectionTracker[3] === selectionTracker[4] && selectionTracker[4] === selectionTracker[5]){
//         // console.log(`${currentPlayer} lost!`)
//         return true;
//     } else if(selectionTracker[6] === selectionTracker[7] && selectionTracker[7] === selectionTracker[8]){
//         // console.log(`${currentPlayer} lost!`)
//         return true;
//     } else if(selectionTracker[0] === selectionTracker[3] && selectionTracker[3] === selectionTracker[6]){
//         // console.log(`${currentPlayer} lost!`)
//         return true;
//     } else if(selectionTracker[1]=== selectionTracker[4] && selectionTracker[4] === selectionTracker[7]) {
//         // console.log(`${currentPlayer} lost!`)
//         return true;
//     } else if(selectionTracker[2]=== selectionTracker[5] && selectionTracker[5] === selectionTracker[8]){
//         // console.log(`${currentPlayer} lost!`)
//         return true;
//     } else if(selectionTracker[0]=== selectionTracker[4] && selectionTracker[4] === selectionTracker[8]){
//         // console.log(`${currentPlayer} wins!`)
//         return true;
//     } else if(selectionTracker[2]=== selectionTracker[4] && selectionTracker[4] === selectionTracker[6]){
//         // console.log(`${currentPlayer} wins!`)
//         return true;
//     } else {
//         console.log(`No one wins! Play again?`)
//     }
// }

// clickSpace.addEventListener("click", clickBtnHandler)

gameBoard()
console.log(hasWinner)
console.log(movesCounter)