
//const user = 'X'
//const computer = 'O'



let currentPlayer = 'X'

let gameBoard = ['','','','','','','','','']
let winnerCombo = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]]
    
    const gridElements = document.querySelectorAll('[Data-cell')
    gridElements.forEach(cell=> {
        cell.addEventListener('click', handleClick, {once: true})
    })
    // if statment current player is user, e.target.innerHTML = "x"
    //else e.target.innerHTML = 'o'
    
    function handleClick (e){
        if (currentPlayer === 'X') {
            e.target.innerHTML = 'X'
            currentPlayer = 'O'
            winCombo()
        }
        else {
            e.target.innerHTML = 'O'
            currentPlayer = 'X'
            winCombo()
        }
    }
    function winCombo(){
       
        for(let i = 0; i < winnerCombo.length; i++){
            let winOptions = winnerCombo[i]
            const zero = winOptions[0]
            const one = winOptions[1]
            const two = winOptions[2]
            // if zero = one and zero is = two and they are not '' and current player = 'x'
            // then will declare a winner.
            // seprate if for player o
            if(gameBoard[zero] === gameBoard[one] && gameBoard[zero] === gameBoard[two] && currentPlayer === 'X') {
                wonGame()
                
            }
            if(gameBoard[zero] === gameBoard[one] && gameBoard[zero] === gameBoard[two] && currentPlayer === 'O') {
                wonGame()
                
            }
            
        }
    }
    let wonGame = function(){
        console.log(`Game Over ${currentPlayer} Won the Game`)
    }
winCombo()
function checkTie(){

}
 // instantiate gamebord in js (array)
 //diclare the win combo
 //create function chekes win combo againest player.innerHTML
 // create function to check for tie






 // button on click sets data cell to an "".