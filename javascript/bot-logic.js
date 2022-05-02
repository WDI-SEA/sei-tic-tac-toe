console.log('bot is linked')
// here we will add two selections for bot logic: 
//difficulty normal: bot chooses random square 
document.querySelector('#playerVsPlayer').addEventListener('click', function() {
    easyBot = false
    document.querySelector('#turn-var').innerHTML = 'Player(X) vs Player(O) mode. Player X plays first. '
})
document.querySelector('#playerVsComputer').addEventListener('click', function() {
    easyBot = true
    document.querySelector('#turn-var').innerHTML = 'Player(X) vs CPU(O) mode. Player X plays first. '
})

const easyBotLogic = function() {
    if (gameStatus){
        let botTurn = true
        const gridCheck = [
            squareOneTurn , squareTwoTurn, squareThreeTurn,       // 0 1 2 
            squareFourTurn, squareFiveTurn, squareSixTurn,        // 3 4 5 
            squareSevenTurn, squareEightTurn, squareNineTurn      // 6 7 8 
        ]

        while (botTurn) {
            let randomNum = (Math.random()*8)
            randomNum= Math.round(randomNum)
            console.log(randomNum)
            if (gridCheck[randomNum].innerHTML==='') {      // if this spot is not empty, the loop will repeat
                gridCheck[randomNum].innerHTML= whosTurn()
                checkWinCon()
                turn++
                if (gameStatus) {
                    document.querySelector('#turn-var').innerHTML = `${whosTurn()}'s TURN`    
                }
                botTurn=false
            }
        }
    }

}
    

//difficutly impossible: bot chooses mini-max approach 
//Work in progress
