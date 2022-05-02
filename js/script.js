console.log("TTT");

// APP STATE (variables)
const gameButtons = [...document.querySelectorAll('.gamebutton')]
let isGameOver = false
let count = 0

//game board using function
function counting() {
    count ++
    return count 
}

function whoTurn(count){
    if (count % 2 === 0) {
    return 'X'
} else {
    return 'O'
 } 
}
//who is winning ? a function that checking who is winner.
function checkWinHorizontal() {
    for(let i = 0; i < 3; i+= 3) {
        if (gameButtons[i] === "") {
            continue
        }
        if(gameButtons[i].innerText === gameButtons[i+1].innerText && gameButtons[i].innerText === gameButtons[i+2].innerText){
            
            return true
        }

    }
 return false
}


function checkWinVertical() {
    for(let i = 0; i < 3; i++) {
        if (gameButtons[i] === "") {
            continue
        }
        if(gameButtons[i].innerText === gameButtons[i+3].innerText && gameButtons[i].innerText === gameButtons[i+6].innerText){
        
            return true
        }

    }
    return false
} 

function checkWinDiagonal() {
   if( gameButtons[0] !== "" && gameButtons[0].innerText === gameButtons[5].innerText && gameButtons[0].innerText === gameButtons[8].innerText) {
    
    return true   
   }
    if(gameButtons[2] !== "" && gameButtons[2].innerText === gameButtons[5].innerText && gameButtons[2].innerText === gameButtons[6].innerText) {
        
        return true
    }
    return false
}

//handlePlayerClick to handle user clicks 

function handlePlayerClick(event) {
    const box = event.currentTarget 
    counting()
    if(box.innerText === "") {
        box.innerText = whoTurn(count)
    }
    if (checkWinHorizontal() || checkWinVertical() || checkWinDiagonal()) {
        isGameOver = true
        console.log(isGameOver)
    } 
    
}

// DOM content loaded ----- event listener
document.addEventListener('DOMContentLoaded', function(){


 const box0 = document.getElementById('box0')
 box0.addEventListener('click', handlePlayerClick)

 const box1 = document.getElementById('box1')
 box1.addEventListener('click', handlePlayerClick)

 const box2 = document.getElementById('box2')
 box2.addEventListener('click',handlePlayerClick)

 const box3 = document.getElementById('box3')
 box3.addEventListener('click', handlePlayerClick)

 const box4 = document.getElementById('box4')
 box4.addEventListener('click', handlePlayerClick)

 const box5 = document.getElementById('box5')
 box5.addEventListener('click', handlePlayerClick)

 const box6 = document.getElementById('box6')
 box6.addEventListener('click', handlePlayerClick)

 const box7 = document.getElementById('box7')
 box7.addEventListener('click',handlePlayerClick)

 const box8 = document.getElementById('box8')
 box8.addEventListener('click',handlePlayerClick)

 document.getElementById('reset-button').addEventListener('click', function(){

    for(let i = 0; i < gameButtons.length; i++) {
        const button = gameButtons[i]
        button.innerText = ""
        console.log(gameButtons) 
    }

 })

})
