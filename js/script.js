// APP STATE(VARIABLE)
const boxButtons = document.querySelectorAll('.buttons')
// const results = document.querySelector('#results')
// const game = ['','','','','','','','',''];
let resultGame = false
const button = boxButtons[i]
button.innerText = ""
// const empty = ""
// const options = ['empty', 'x', 'o']
// let newTurn = 'X'


// // Figure out whos turn it is

// const currentTurn = function (){
//     if (newTurn === "O" && turn < 10){
//         newTurn = "X"
//         results.innerText = "It's Player 1's Turn!"
//         return 'X'
//     }else if (newTurn === "X" && turn < 10){
//         newTurn = "O"
//         results.innerText = "It's Player 2's Turn!"
//         return 'O'
//     }
// }

// const tieGame = function() {
//     if (turn === 10){
//         results.innerText = "It's a Tie!"
//     }
// }




// // const myWin = () => {
// //     isItADraw()
// //     checkingAllWinConditions()
// //     if(currentPlayer === 'player1') {
// //         currentPlayer = 'player2'
// //     } else if (currentPlayer === 'player2'){
// //         currentPlayer = 'player1'
// //     }
// // }


// // const whoWon = () => {
// //     if (currentPlayer === 'player1') {
// //       console.log('player 1 wins!!!!!')
// //     } else {
// //       console.log('player 2 WINS!!!!!')
// //     }
// //   }
  
// //   const checkingAllWinConditions = () => {

// //     if (game[0] !== '') {
// //       if (game[0] === game[1] && game[1] === game[2]) {
// //         whoWon()
// //       }
// //     }
// // }
    
  
// //     if (game[3] !== '') {
// //       if (game[3] === game[4] && game[4] === game[5]) {
// //         whoWon()
// //       }
// //     }
    
// const winCon = function () {
//     if(oneBox.innerText != "" && oneBox.innerText === twoBox.innertext && twoBox.innertext === threeBox.innertext) {
//         results.innerText = (newTurn + " Wins!")
//         resultGame = true
//         newTurn = ""
//     }
// }



    const checkVert = function() {
        for(let i = 0; i < boxButtons.length; i++) {
            if(boxButtons[i] === boxButtons[1] && boxButtons[i] === boxButtons[2])
            break
        }
    }

    const checkHori = function(){
        for(let i = 0; i< boxButtons.length; i++) {
            if(boxButtons[i] === boxButtons[4] && boxButtons[i] === boxButtons[6])
            break
            
        }

    }

     const checkDiag = function (){
        for(let i = 0; i< boxButtons.length; i++) {
            if(boxButtons[i] === boxButtons[4] && boxButtons[i] === boxButtons[7])
            return true
        }
        return false    
    }
   


let count = 0
function counting () {
    count ++ 
    return count
}


function nextPlayer(count) {
    if (count % 2 === 0) {
        return 'X'
    }else{
        return 'O'
    }
}





    // const of all the box individually so they are able to click each box individually with the value 'X' or 'O'
 const oneBox = document.getElementById('one')
    oneBox.addEventListener('click', function(){
        counting()
        
        if(oneBox.innerText === "") {
            oneBox.innerText = nextPlayer(count)   
        }
    })
    console.log(oneBox)
 const twoBox = document.getElementById('two')
    twoBox.addEventListener('click', function(){
        counting()
        
        if(twoBox.innerText === "") {
            twoBox.innerText = nextPlayer(count)
           
        }
    })

 const threeBox = document.getElementById('three')
    threeBox.addEventListener('click', function(){
        console.log(threeBox);
        counting()
        
        if(threeBox.innerText === "") {
            threeBox.innerText = nextPlayer(count)
        }
    })

 const fourBox = document.getElementById('four')
    fourBox.addEventListener('click', function(){
        console.log(fourBox)
        counting()
       
        if(fourBox.innerText === "") {
            fourBox.innerText = nextPlayer(count)
        }
    })

   const fiveBox = document.getElementById('five')
    fiveBox.addEventListener('click', function(){
        console.log(fiveBox)
        counting()
       
        if(fiveBox.innerText === "") {
            fiveBox.innerText = nextPlayer(count)
        }
    })

    const sixBox = document.getElementById('six')
    sixBox.addEventListener('click', function(){
        console.log(sixBox)
        counting()
       
        if(sixBox.innerText === "") {
            sixBox.innerText = nextPlayer(count)
        }
    })

    const sevenBox = document.getElementById('seven')
    sevenBox.addEventListener('click', function(){
        console.log(sevenBox)
        counting()
        
        if(sevenBox.innerText === "") {
            sevenBox.innerText = nextPlayer(count)
        }
    })

    const eightBox = document.getElementById('eight')
    eightBox.addEventListener('click', function(){
        console.log(eightBox)
        counting()
        
        if(eightBox.innerText === "") {
            eightBox.innerText = nextPlayer(count)
        }
    })

    const nineBox = document.getElementById('nine')
    nineBox.addEventListener('click', function(){
        console.log(nineBox)
        counting()
        
        if(nineBox.innerText === "") {
            nineBox.innerText = nextPlayer(count)
        }
        // for(i = 0; i < boxButtons.length; i++){
        //     const buttons = boxButtons[i]
        //     buttons.innerText = ""
        // }

    })
    
    document.getElementById('clearBoard').addEventListener('click',function(){
        for(let i = 0; i < boxButtons.length; i++){
            boxButtons[i].innerText = ""
        }

    })