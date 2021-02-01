
//const user = 'X'
//const computer = 'O'



let currentPlayer = 'X'
const winningMessageTextElement = document.querySelector('[data-winning-message-text]')
const winningMessageElement = document.getElementById('winningMessage')
const restartButton = document.getElementById('restartButton')
//winningMessageElement.classList.remove('show')
const gameBoard = ['','','','','','','','','']
let winnerCombo = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]]
    
    const gridElements = document.querySelectorAll('[Data-cell]')
    gridElements.forEach((cell, index)=> {
        cell.setAttribute('value', index)
        cell.addEventListener('click', handleClick, {once: true})
        index.value = gameBoard[index]
    })
    // if statment current player is user, e.target.innerHTML = "x"
    //else e.target.innerHTML = 'o'
    //restartButton.addEventListener('click', handleClick ())
    function handleClick (e){
        let square = e.target
        if (square.innerHTML === ''){
            const gameBoardArr = parseInt(square.id)
            square.innerHTML = currentPlayer
            gameBoard[gameBoardArr] = currentPlayer
            winCombo()
            if (currentPlayer === 'X') {
                //e.target.innerHTML = 'X'
                currentPlayer = 'O'
              
            }
            else {
               // e.target.innerHTML = 'O'
                currentPlayer = 'X'
            }

        }

       //gameBoard[e.target.value] = currentPlayer
        //console.log(e.target.value)
    }
    function winCombo(){
       
        for(let i = 0; i < winnerCombo.length; i++){
            let winOptions = winnerCombo[i]
            const zero = winOptions[0]
            const one = winOptions[1]
            const two = winOptions[2]
            // if zero = one and zero is = two and they are not '' and current player = 'x'
            // then will declare a winner.
            if(gameBoard[zero] === '' || gameBoard[one] === '' || gameBoard[two] === '') {
                continue
            }
            
            // seprate if for player o
            if(gameBoard[zero] === gameBoard[one] && gameBoard[zero] === gameBoard[two] && 'X' === gameBoard[zero]) {
              //  wonGame()
                console.log('x won')
                wonGame()
            }
            
            if(gameBoard[zero] === gameBoard[one] && gameBoard[zero] === gameBoard[two] && 'O' === gameBoard[zero]) {
              //  wonGame()
              console.log('o won')
              wonGame()
            }
            
            
        }
    }
    function wonGame (draw){
        if (draw) {
            winningMessageTextElement.innerText = 'Draw!'
           } else {
            winningMessageTextElement.innerText = `Game Over ${currentPlayer} Won the Game`
          }
          winningMessageElement.classList.add('show')
        
        console.log(`Game Over ${currentPlayer} Won the Game`)
    }
winCombo()
function checkTie(){

}
console.log(currentPlayer)
 // instantiate gamebord in js (array)
 //diclare the win combo
 //create function chekes win combo againest player.innerHTML
 // create function to check for tie


 // button on click sets data cell to an ""