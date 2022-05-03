console.log('you bootstrappped this project')

let gameboard = ['', '', '', '', '', '', '', '', '']
let playerTurn = 1
const switchPlayer = function(playerTurn){
    if (playerTurn === 1){
        return 2
    } else {
        return 1
    }
}


winTagger = function (){
    document.getElementById('winner').innerText= switchPlayer(playerTurn)
}

document.getElementById('play-turn').innerText = playerTurn

const disable = function(){
    document.getElementById('r1c1-btn').disabled = true
    document.getElementById('r1c2-btn').disabled = true
    document.getElementById('r1c3-btn').disabled = true
    document.getElementById('r2c1-btn').disabled = true
    document.getElementById('r2c2-btn').disabled = true
    document.getElementById('r2c3-btn').disabled = true
    document.getElementById('r3c1-btn').disabled = true
    document.getElementById('r3c2-btn').disabled = true
    document.getElementById('r3c3-btn').disabled = true
}
let count = 0

document.addEventListener("DOMContentLoaded",  () => {
    const checking = function(){ // 8 winning combos
        if (gameboard[0] != '' && gameboard[0]===gameboard[1] && gameboard[1]===gameboard[2]){
            console.log('we have a winner')
            winTagger()
            disable()
        } else if (gameboard[3] != '' && gameboard[3]===gameboard[4] && gameboard[4]===gameboard[5]){
            console.log('we have a winner')
            winTagger()
            disable()
        } else if (gameboard[6] != '' && gameboard[6]===gameboard[7] && gameboard[7]===gameboard[8]){
            console.log('we have a winner')
            winTagger()
            disable()
        } else if (gameboard[0] != '' && gameboard[0]===gameboard[3] && gameboard[3]===gameboard[6]){
            console.log('we have a winner')
            winTagger()
            disable()
        } else if (gameboard[1] != '' && gameboard[1]===gameboard[4] && gameboard[4]===gameboard[7]){
            console.log('we have a winner')
            winTagger()
            disable()
        } else if (gameboard[2] != '' && gameboard[2]===gameboard[5] && gameboard[5]===gameboard[8]){
            console.log('we have a winner')
            winTagger()
            disable()
        } else if (gameboard[0] != '' && gameboard[0]===gameboard[4] && gameboard[4]===gameboard[8]){
            console.log('we have a winner')
            winTagger()
            disable()
        } else if (gameboard[2] != '' && gameboard[2]===gameboard[4] && gameboard[4]===gameboard[6]){
            console.log('we have a winner')
            winTagger()
            disable()
        
        } else if (gameboard[8] != '' && count === 9) // add turn count on each click, reset on reset
            document.getElementById('winner').innerHTML = 'NOBODY ! ITS A TIE'
        }
    

    //starting at r1c1, need 9 of these????????
    document.getElementById('r1c1-btn').addEventListener('click', () => {
        if (document.getElementById('r1c1-text').innerText == ''){
        if (playerTurn === 1){
            document.getElementById('r1c1-text').innerHTML = 'X'
            gameboard.splice(0,1, 'x')
            playerTurn= switchPlayer(playerTurn)
        } else if (playerTurn === 2){
            document.getElementById('r1c1-text').innerHTML = 'O'
            gameboard.splice(0,1, 'o')
            playerTurn= switchPlayer(playerTurn)
        }}
        document.getElementById('play-turn').innerText = playerTurn
        count++
        checking()
        document.getElementById('r1c1-btn').disabled = true
    })

    document.getElementById('r1c2-btn').addEventListener('click', () => {
        if (document.getElementById('r1c2-text').innerText == ''){
        if (playerTurn === 1){
            document.getElementById('r1c2-text').innerHTML = 'X'
            gameboard.splice(1,1, 'x')
            playerTurn= switchPlayer(playerTurn)
        } else if (playerTurn === 2){
            document.getElementById('r1c2-text').innerHTML = 'O'
            gameboard.splice(1,1, 'o')
            playerTurn= switchPlayer(playerTurn)
        }}
        document.getElementById('play-turn').innerText = playerTurn
        count++
        checking()
        document.getElementById('r1c2-btn').disabled = true
        

    })

    document.getElementById('r1c3-btn').addEventListener('click', () => {
        if (document.getElementById('r1c3-text').innerText == ''){
        if (playerTurn === 1){
            document.getElementById('r1c3-text').innerHTML = 'X'
            gameboard.splice(2,1, 'x')
            playerTurn= switchPlayer(playerTurn)
        } else if (playerTurn === 2){
            document.getElementById('r1c3-text').innerHTML = 'O'
            gameboard.splice(2,1, 'o')
            playerTurn= switchPlayer(playerTurn)
        }}
        document.getElementById('play-turn').innerText = playerTurn
        count++
        checking()
        document.getElementById('r1c3-btn').disabled = true
        

    })

    document.getElementById('r2c1-btn').addEventListener('click', () => {
        if (document.getElementById('r2c1-text').innerText == ''){
        if (playerTurn === 1){
            document.getElementById('r2c1-text').innerHTML = 'X'
            gameboard.splice(3,1, 'x')
            playerTurn= switchPlayer(playerTurn)
        } else if (playerTurn === 2){
            document.getElementById('r2c1-text').innerHTML = 'O'
            gameboard.splice(3,1, 'o')
            playerTurn= switchPlayer(playerTurn)
        }}
        document.getElementById('play-turn').innerText = playerTurn
        count++
        checking()
        document.getElementById('r2c1-btn').disabled = true
        
    })

    document.getElementById('r2c2-btn').addEventListener('click', () => {
        if (document.getElementById('r2c2-text').innerText == ''){
        if (playerTurn === 1){
            document.getElementById('r2c2-text').innerHTML = 'X'
            gameboard.splice(4,1, 'x')
            playerTurn= switchPlayer(playerTurn)
        } else if (playerTurn === 2){
            document.getElementById('r2c2-text').innerHTML = 'O'
            gameboard.splice(4,1, 'o')
            playerTurn= switchPlayer(playerTurn)
        }}
        document.getElementById('play-turn').innerText = playerTurn
        count++
        checking()
        document.getElementById('r2c2-btn').disabled = true
        
    })

    document.getElementById('r2c3-btn').addEventListener('click', () => {
        if (document.getElementById('r2c3-text').innerText == ''){
        if (playerTurn === 1){
            document.getElementById('r2c3-text').innerHTML = 'X'
            gameboard.splice(5,1, 'x')
            playerTurn= switchPlayer(playerTurn)
        } else if (playerTurn === 2){
            document.getElementById('r2c3-text').innerHTML = 'O'
            gameboard.splice(5,1, 'o')
            playerTurn= switchPlayer(playerTurn)
        }}
        document.getElementById('play-turn').innerText = playerTurn
        count++
        checking()
        document.getElementById('r2c3-btn').disabled = true
        
    })

    document.getElementById('r3c1-btn').addEventListener('click', () => {
        if (document.getElementById('r3c1-text').innerText == ''){
        if (playerTurn === 1){
            document.getElementById('r3c1-text').innerHTML = 'X'
            gameboard.splice(6,1, 'x')
            playerTurn= switchPlayer(playerTurn)
        } else if (playerTurn === 2){
            document.getElementById('r3c1-text').innerHTML = 'O'
            gameboard.splice(6,1, 'o')
            playerTurn= switchPlayer(playerTurn)
        }}
        document.getElementById('play-turn').innerText = playerTurn
        count++
        checking()
        document.getElementById('r3c1-btn').disabled = true

    })

    document.getElementById('r3c2-btn').addEventListener('click', () => {
        if (document.getElementById('r3c2-text').innerText == ''){
        if (playerTurn === 1){
            document.getElementById('r3c2-text').innerHTML = 'X'
            gameboard.splice(7,1, 'x')
            playerTurn= switchPlayer(playerTurn)
        } else if (playerTurn === 2){
            document.getElementById('r3c2-text').innerHTML = 'O'
            gameboard.splice(7,1, 'o')
            playerTurn= switchPlayer(playerTurn)
        }}
        document.getElementById('play-turn').innerText = playerTurn
        count++
        checking()
        document.getElementById('r3c2-btn').disabled = true
        
    })

    document.getElementById('r3c3-btn').addEventListener('click', () => {
        if (document.getElementById('r3c3-text').innerText == ''){
        if (playerTurn === 1){
            document.getElementById('r3c3-text').innerHTML = 'X'
            gameboard.splice(8,1, 'x')
            playerTurn= switchPlayer(playerTurn)
        } else if (playerTurn === 2){
            document.getElementById('r3c3-text').innerHTML = 'O'
            gameboard.splice(8,1, 'o')
            playerTurn= switchPlayer(playerTurn)
        }}
        document.getElementById('play-turn').innerText = playerTurn
        count++
        checking()
        document.getElementById('r3c3-btn').disabled = true
        
    })

    document.getElementById('reset-btn').addEventListener('click', function(){
        document.getElementById('r1c1-text').innerHTML = ''
        document.getElementById('r1c2-text').innerHTML = ''
        document.getElementById('r1c3-text').innerHTML = ''
        document.getElementById('r2c1-text').innerHTML = ''
        document.getElementById('r2c2-text').innerHTML = ''
        document.getElementById('r2c3-text').innerHTML = ''
        document.getElementById('r3c1-text').innerHTML = ''
        document.getElementById('r3c2-text').innerHTML = ''
        document.getElementById('r3c3-text').innerHTML = ''
        document.getElementById('r1c1-btn').disabled = false
        document.getElementById('r1c2-btn').disabled = false
        document.getElementById('r1c3-btn').disabled = false
        document.getElementById('r2c1-btn').disabled = false
        document.getElementById('r2c2-btn').disabled = false
        document.getElementById('r2c3-btn').disabled = false
        document.getElementById('r3c1-btn').disabled = false
        document.getElementById('r3c2-btn').disabled = false
        document.getElementById('r3c3-btn').disabled = false
        document.getElementById('winner').innerHTML= ''
        gameboard = ['', '', '', '', '', '', '', '', '']
        console.log(gameboard)
        count = 0
    })




})



    



/* OUTLINE

possible functions -
    button click to place X and O 
        push styling for text for X and O 
    change players -- switch between X and O for every click
        end of button click function can give value for next player function
    check for winning combination function
        use array to be filled and read with values from above
    if no winner, keep repeating until cats game combo
        tie game result 
        highlight all grids red
        no score update
    if winner
        highlight winning grids in green
        winner banner 
        amend score of the winner by one 
    reset button click
        reset all grids back to empty
        show last winner banner
        leave the score amended

*/
    
/*
  })
    document.querySelector('.r1c2-text').addEventListener('click', () => {
        console.log('clicked 2')
    })
    document.querySelector('.r1c3-text').addEventListener('click', () => {
        console.log('clicked 3')
    })
    document.querySelector('.r2c1-text').addEventListener('click', () => {
        console.log('clicked 4')
    })
    document.querySelector('.r2c2-text').addEventListener('click', () => {
        console.log('clicked 5')
    })
    document.querySelector('.r2c3-text').addEventListener('click', () => {
        console.log('clicked 6')
    })
    document.querySelector('.r3c1-text').addEventListener('click', () => {
        console.log('clicked 7')
    })
    document.querySelector('.r3c2-text').addEventListener('click', () => {
        console.log('clicked 8')
    })
    document.querySelector('.r3c3-text').addEventListener('click', () => {
        console.log('clicked 9')
    })

*/