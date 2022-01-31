
// style a bit more with fonts and colors etc
// get results box to not be so huge




let playerTurn = 1
let playerOneArray = []
let playerTwoArray = []
let catsGame = []


const playerTurnDisplay = document.getElementById('turn')
const clearGameButton = document.getElementById('clearGameButton').addEventListener('click', clearGame)


let selectionBox = document.querySelectorAll('.box').forEach(selectionBox =>  // added event listener to all boxes
     {selectionBox.addEventListener('click', (event)=>{

    let boxNumber = event.target.id

    if (playerTurnDisplay.innerText === "X WINS!" || playerTurnDisplay.innerText === "O WINS!") {}

    else if (playerTurn === 1){   
        if (selectionBox.innerText !== ""){
            playerTurnDisplay.innerText = "Please select an empty space"
            playerTurnDisplay.style.color ='white'
            playerTurnDisplay.style.backgroundColor = '#e63c3c'
        } else {                                             //recording whos turn it is
        selectionBox.innerText = 'X'
        selectionBox.style.color = 'white'
        playerTurnDisplay.innerText = "Turn: O"
        playerTurnDisplay.style.color ='white'
        playerTurnDisplay.style.backgroundColor = 'black'
        playerOneArray.push(boxNumber)
        catsGame.push(boxNumber)
        playerTurn ++
        } 

    } else if (playerTurn === 2) {
        if (selectionBox.innerText !== ""){
            playerTurnDisplay.innerText = "Please select an empty space"
            playerTurnDisplay.style.color ='white'
            playerTurnDisplay.style.backgroundColor = '#e63c3c'
        } else {
        selectionBox.innerText = 'O'
        selectionBox.style.color = 'black'
        playerTurnDisplay.innerText = "Turn: X"
        playerTurnDisplay.style.color = 'black'
        playerTurnDisplay.style.backgroundColor = 'white'
        playerTwoArray.push(boxNumber)
        catsGame.push(boxNumber)
        playerTurn --
        }
    } else {
        
    }
    
    getResults()
    })
})

function clearGame() {    
    document.querySelectorAll('.box').forEach(selectionBox =>  
        {selectionBox.innerText = "" 
    })                                            
    playerOneArray = []
    playerTwoArray = []
    catsGame = []
    playerTurn = 1
    playerTurnDisplay.style.color ='white'
    playerTurnDisplay.style.backgroundColor = ''
    playerTurnDisplay.style.animationDelay = "1s"
    playerTurnDisplay.style.padding = "10px 100px"
    playerTurnDisplay.style.fontSize = "25px"
    playerTurnDisplay.innerText = "Play again?"
}


function getResults () {
    if (playerOneArray.includes('1') && playerOneArray.includes('2') && playerOneArray.includes('3')){   
        playerTurnDisplay.innerText = "X WINS!"
        playerTurnDisplay.style.backgroundColor = '#91c750'
        playerTurnDisplay.style.color ='white'
        playerTurnDisplay.style.transform = "all 1s ease"
        playerTurnDisplay.style.padding = "50px 100px"
        playerTurnDisplay.style.fontSize = "100px"
    } else if (playerTwoArray.includes('1') && playerTwoArray.includes('2') && playerTwoArray.includes('3')){   
        playerTurnDisplay.innerText = "O WINS!"
        playerTurnDisplay.style.backgroundColor = '#91c750'
        playerTurnDisplay.style.color ='black'
        playerTurnDisplay.style.transform = "all 1s ease"
        playerTurnDisplay.style.padding = "50px 100px"
        playerTurnDisplay.style.fontSize = "100px"
    } else if (playerOneArray.includes('4') && playerOneArray.includes('5') && playerOneArray.includes('6')){   
        playerTurnDisplay.innerText = "X WINS!"
        playerTurnDisplay.style.backgroundColor = '#91c750'
        playerTurnDisplay.style.color ='white'
        playerTurnDisplay.style.transform = "all 1s ease"
        playerTurnDisplay.style.padding = "50px 100px"
        playerTurnDisplay.style.fontSize = "100px"
    } else if (playerTwoArray.includes('4') && playerTwoArray.includes('5') && playerTwoArray.includes('6')){   
        playerTurnDisplay.innerText = "O WINS!"
        playerTurnDisplay.style.backgroundColor = '#91c750'
        playerTurnDisplay.style.color ='black'
        playerTurnDisplay.style.transform = "all 1s ease"
        playerTurnDisplay.style.padding = "50px 100px"
        playerTurnDisplay.style.fontSize = "100px"
    } else if (playerOneArray.includes('7') && playerOneArray.includes('8') && playerOneArray.includes('9')){   
        playerTurnDisplay.innerText = "X WINS!"
        playerTurnDisplay.style.backgroundColor = '#91c750'
        playerTurnDisplay.style.color ='white'
        playerTurnDisplay.style.transform = "all 1s ease"
        playerTurnDisplay.style.padding = "50px 100px"
        playerTurnDisplay.style.fontSize = "100px"
    } else if (playerTwoArray.includes('7') && playerTwoArray.includes('8') && playerTwoArray.includes('9')){   
        playerTurnDisplay.innerText = "O WINS!"
        playerTurnDisplay.style.backgroundColor = '#91c750'
        playerTurnDisplay.style.color ='black'
        playerTurnDisplay.style.transform = "all 1s ease"
        playerTurnDisplay.style.padding = "50px 100px"
        playerTurnDisplay.style.fontSize = "100px"
    } else if (playerOneArray.includes('1') && playerOneArray.includes('4') && playerOneArray.includes('7')){   
        playerTurnDisplay.innerText = "X WINS!"
        playerTurnDisplay.style.backgroundColor = '#91c750'
        playerTurnDisplay.style.color ='white'
        playerTurnDisplay.style.transform = "all 1s ease"
        playerTurnDisplay.style.padding = "50px 100px"
        playerTurnDisplay.style.fontSize = "100px"
    } else if (playerTwoArray.includes('1') && playerTwoArray.includes('4') && playerTwoArray.includes('7')){   
        playerTurnDisplay.innerText = "O WINS!"
        playerTurnDisplay.style.backgroundColor = '#91c750'
        playerTurnDisplay.style.color ='black'
        playerTurnDisplay.style.transform = "all 1s ease"
        playerTurnDisplay.style.padding = "50px 100px"
        playerTurnDisplay.style.fontSize = "100px"
    } else if (playerOneArray.includes('2') && playerOneArray.includes('5') && playerOneArray.includes('8')){   
        playerTurnDisplay.innerText = "X WINS!"
        playerTurnDisplay.style.backgroundColor = '#91c750'
        playerTurnDisplay.style.color ='white'
        playerTurnDisplay.style.transform = "all 1s ease"
        playerTurnDisplay.style.padding = "50px 100px"
        playerTurnDisplay.style.fontSize = "100px"
    } else if (playerTwoArray.includes('2') && playerTwoArray.includes('5') && playerTwoArray.includes('8')){   
        playerTurnDisplay.innerText = "O WINS!"
        playerTurnDisplay.style.backgroundColor = '#91c750'
        playerTurnDisplay.style.color ='black'
        playerTurnDisplay.style.transform = "all 1s ease"
        playerTurnDisplay.style.padding = "50px 100px"
        playerTurnDisplay.style.fontSize = "100px"
    } else if (playerOneArray.includes('3') && playerOneArray.includes('6') && playerOneArray.includes('9')){   
        playerTurnDisplay.innerText = "X WINS!"
        playerTurnDisplay.style.backgroundColor = '#91c750'
        playerTurnDisplay.style.color ='white'
        playerTurnDisplay.style.transform = "all 1s ease"
        playerTurnDisplay.style.padding = "50px 100px"
        playerTurnDisplay.style.fontSize = "100px"
    } else if (playerTwoArray.includes('3') && playerTwoArray.includes('6') && playerTwoArray.includes('9')){   
        playerTurnDisplay.innerText = "O WINS!"
        playerTurnDisplay.style.backgroundColor = '#91c750'
        playerTurnDisplay.style.color ='black'
        playerTurnDisplay.style.transform = "all 1s ease"
        playerTurnDisplay.style.padding = "50px 100px"
        playerTurnDisplay.style.fontSize = "100px"
    } else if (playerOneArray.includes('1') && playerOneArray.includes('5') && playerOneArray.includes('9')){   
        playerTurnDisplay.innerText = "X WINS!"
        playerTurnDisplay.style.backgroundColor = '#91c750'
        playerTurnDisplay.style.color ='white'
        playerTurnDisplay.style.transform = "all 1s ease"
        playerTurnDisplay.style.padding = "50px 100px"
        playerTurnDisplay.style.fontSize = "100px"
    } else if (playerTwoArray.includes('1') && playerTwoArray.includes('5') && playerTwoArray.includes('9')){   
        playerTurnDisplay.innerText = "O WINS!"
        playerTurnDisplay.style.backgroundColor = '#91c750'
        playerTurnDisplay.style.color ='black'
        playerTurnDisplay.style.transform = "all 1s ease"
        playerTurnDisplay.style.padding = "50px 100px"
        playerTurnDisplay.style.fontSize = "100px"
    } else if (playerOneArray.includes('3') && playerOneArray.includes('5') && playerOneArray.includes('7')){   
        playerTurnDisplay.innerText = "X WINS!"
        playerTurnDisplay.style.backgroundColor = '#91c750'
        playerTurnDisplay.style.color ='white'
        playerTurnDisplay.style.transform = "all 1s ease"
        playerTurnDisplay.style.padding = "50px 100px"
        playerTurnDisplay.style.fontSize = "100px"
    } else if (playerTwoArray.includes('3') && playerTwoArray.includes('5') && playerTwoArray.includes('7')){   
        playerTurnDisplay.innerText = "O WINS!"
        playerTurnDisplay.style.backgroundColor = '#91c750'
        playerTurnDisplay.style.color ='black'
        playerTurnDisplay.style.transform = "all 1s ease"
        playerTurnDisplay.style.padding = "50px 100px"
        playerTurnDisplay.style.fontSize = "100px"
    } else if (catsGame.includes('1') && catsGame.includes('2') && catsGame.includes('3') && catsGame.includes('4') && catsGame.includes('5') 
    && catsGame.includes('6') && catsGame.includes('7') && catsGame.includes('8') && catsGame.includes('9')){
        playerTurnDisplay.innerText = "Cats Game!"
        playerTurnDisplay.style.backgroundColor = '#e63c3c'
        playerTurnDisplay.style.transform = "all 1s ease"
        playerTurnDisplay.style.padding = "50px 100px"
        playerTurnDisplay.style.fontSize = "100px"
    }
}    

