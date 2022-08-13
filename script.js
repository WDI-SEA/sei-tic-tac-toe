document.addEventListener('DOMContentLoaded', function(e) {
    
    // -- INITIALIZE NECCESSARY VARIABLES -- //

    // Turn variables
    let turns = 0
    const maxTurns = 9

    // variables for complete or ongoing game
    let gameRunning = true
    const endGame = false

    // Player objects for individual stats and results
    let playerOne = {
        box: [],
        match: 0,
        wins: 0,
        victory: 'Player One is the winner!'
    }
    let playerTwo = {
        box: [],
        match: 0,
        wins: 0,
        victory: 'Player Two is the winner!'
    }
    let cats = 0;

    // Webpage Text References
    const pOneWins = document.getElementById('results').querySelector('p')
    const catValue = document.getElementById('results').querySelector('p').nextElementSibling
    const pTwoWins = document.getElementById('results').lastElementChild
    
    // Each markable cell
    const topLBox = document.getElementById('top-left')
    const topCBox = document.getElementById('top-center')
    const topRBox = document.getElementById('top-right')
    const midLBox = document.getElementById('middle-left')
    const midCBox = document.getElementById('middle-center')
    const midRBox = document.getElementById('middle-right')
    const botLBox = document.getElementById('bottom-left')
    const botCBox = document.getElementById('bottom-center')
    const botRBox = document.getElementById('bottom-right')

    let boxes = [topLBox, topCBox, topRBox, midLBox, midCBox, 
                    midRBox, botLBox, botCBox, botRBox]

    // Each win condition
    const topRow = [topLBox, topCBox, topRBox]
    const midRow = [midLBox, midCBox, midRBox]
    const botRow = [botLBox, botCBox, botRBox]
    const leftCol = [topLBox, midLBox, botLBox] 
    const midCol = [topCBox, midCBox, botCBox]
    const rightCol = [topRBox, midRBox, botRBox]
    const lrDiag = [topLBox, midCBox, botRBox]
    const rlDiag = [topRBox, midCBox, botLBox]

    const winConditions = [topRow, midRow, botRow, leftCol, 
                           midCol, rightCol, lrDiag, rlDiag]

    // -- GAME FUNCTIONS -- //

    // Updates webpage with new win values
    function winTally() {
        pOneWins.innerText = 'Player 1 Wins: ' + playerOne.wins
        pTwoWins.innerText = 'Player 2 Wins: ' + playerTwo.wins
    }

    // Updates webpage with new cats value
    function catTally() {
        catValue.innerText = 'Cats (Draws): ' + cats
    }

    // Marks each box with player icon and incr turns
    function markBox() {
        if(this.innerText === '-') {
            if(turns%2 == 0){
                turns++;
                this.innerText = 'X'
                this.style.color = 'black'
                playerOne.box.push(this)
                winCheck(playerOne)
            }
            else {
                turns++;
                this.innerText = 'O'
                this.style.color = 'black'
                playerTwo.box.push(this)
                winCheck(playerTwo)
            }
        }
    }

    // Determines if there is a winner
    function winCheck(player) {
        let winner = false;
        winConditions.forEach((item) => {
            for(j = 0; j < 3; j++) {
                //console.log('winCondition: ', j)
                for(i =0; i < player.box.length; i++) {
                    //console.log('box: ', i)
                    if(player.box[i] === item[j]) {
                        player.match++;
                        //console.log('MATCH!', player.match)
                        //console.log(j + 1)
                        //console.log(player.match)
                    }
                }
            }
            if(player.match == 3) {
                winner = true
            }
            else {
                //console.log('i have reset my matches')
                player.match = 0;
            }
        })
        //console.log(turns)
        if(winner) {
            player.wins++
            //console.log(player.victory, player.wins)
            winTally()
            gameRunning = endGame
        }
        else if(turns == maxTurns) {
            cats++
            //console.log('The match is draw. Play again?', cats)
            catTally()
            gameRunning = endGame
        }
    }

    // Allows for player input until a winner is decided
    function verifyGame() {
        boxes.forEach((item) => {
            item.addEventListener('click', markBox)
            if(!gameRunning) {
                item.removeEventListener('click', markBox)
            }
        })
    }
    document.addEventListener('click', verifyGame)

    // Clears the gameboard and prior player marks
    function clear() {
        boxes.forEach((item) => {
            item.innerText = '-'
            item.style.color = '#f1f1f1'
        })
        turns = 0
        gameRunning = true
        playerOne.box = []
        playerTwo.box = []
    }
    document.querySelector('#clear').addEventListener('click', clear)

    // -- AI PSEUDOCODE -- //
    
    // 1. Ignore any filled spaces
    // 2. Complete winConditions        -->     myMatches
    // 3. Complete potential losses     -->     oppMatches
    // 4. Search for highest match      -->     highestMatch
    // 5. Fill corners opposite to 'O'  -->     oppCorner

    //function miniMaxAI() {}

})