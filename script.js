let game_divs = document.querySelectorAll('.game-square')
let resetBtn = document.querySelector('.reset-btn')

let resultDiv =  document.querySelector('.result-div')
let result =  document.querySelector('.result-text')


let player_1_turn =  document.querySelector('#player-1-turn-text')
let player_2_turn =  document.querySelector('#player-2-turn-text')


// This represnts the game
let gameTable = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' '],
]



let stopGame = false
let turnsCount = 0
let currentPlayer = 'X'
let winner 



//will display the winner in the result div
const displayWinner = () => {

    if(winner === 'X'){
        result.innerHTML = `${winner} Won!`
    }else if (winner === 'O'){
        result.innerHTML = `${winner} Won!`
    }else{
        result.innerHTML = 'It is a tie!'
    }
    
    console.log(winner)
    resultDiv.classList.remove('hidden')

}


const getWinner = () => {

    if(currentPlayer === 'X'){
        winner = 'O'   
    }else{
        winner = 'X' 
    }
}


// check who is the winner
const checkTheWinner = (event) => {


    // To find the horizontal win position "-"
    for (let row = 0; row < 3; row++) {

        if (gameTable[row][0] != ' ' && gameTable[row][0] == gameTable[row][1] && gameTable[row][1] == gameTable[row][2]) {

            console.log('Horizontal Line')
            getWinner()
            displayWinner()

            //end game
            stopGame = true
            return
        }
    }//end loop


    // To find the vertical win position "|"
    for (let col = 0; col < 3; col++) {
        // check if table is not empty and that each values of column are the same
        if (gameTable[0][col] != ' ' && gameTable[0][col] == gameTable[1][col] && gameTable[1][col] == gameTable[2][col]) {

            console.log('Vertical Line')

            getWinner()
            displayWinner()
            //end game
            stopGame = true
            return
        }
    } //end loop


    // To find the Diagonal win position "\"
    if(gameTable[0][0] != ' ' &&  gameTable[0][0] === gameTable[1][1] &&  gameTable[1][1] === gameTable[2][2]){

        console.log('Diagonal Line')
        getWinner()
        displayWinner()

        //end game
        stopGame = true
        return

    // To find the Diagonal win position "/"
    } else if(gameTable[0][2] != ' ' &&  gameTable[0][2] === gameTable[1][1] &&  gameTable[1][1] === gameTable[2][0]){


        getWinner()
        displayWinner()

        //end game
        stopGame = true
        return
    }
    


    console.log(turnsCount)

    // Game Tie Logic
    if(turnsCount === 9 && stopGame===false){

        console.log('It is a tie')
        winner = ' '
        displayWinner()

        //end game
        stopGame = true
        return
    }
}


const playGame = (event) => {

    // Stop game if the it is true
    if (stopGame) {

        //Remove the click effect
        for (let i = 0; i < game_divs.length; i++) {
            game_divs[i].classList.add('disable')
        }
        return
    }

    // get id of the clicked element
    let clicked_div_id = event.target.id

    // grab the element by id
    let divID = document.getElementById(clicked_div_id)


    // check if the clicked element is a square element and not an image
    // image means that spot is taken
    if (clicked_div_id.includes("img")) {
        return
    }

    //Convert id to array position
    let div_arr = clicked_div_id.split('-')

    // -1 because the array indcies start from 0
    let row = parseInt(div_arr[1]) - 1
    let col = parseInt(div_arr[3]) - 1

    //Modify the game table array
    gameTable[row][col] = currentPlayer
    console.log(gameTable)

    //In case if div is clicked then unhide the image and add disable effect
    let div_img = divID.children[0]
    div_img.classList.remove('hidden')
    div_img.classList.add('disable')


    //This will allow to alternate between players
    // X player
    if (currentPlayer == 'X') {

        //add an image
        div_img.src = "images/x.png"

        //modify the players turn css
        player_1_turn.classList.remove('current-player')
        player_1_turn.classList.add('other-player')
        player_2_turn.classList.remove('other-player')
        player_2_turn.classList.add('current-player')

        //this is the next player
        currentPlayer = 'O'

        // O player
    } else {
        //add an image
        div_img.src = "images/o.png"

        //modify the players turn css
        player_2_turn.classList.remove('current-player')
        player_2_turn.classList.add('other-player')
        player_1_turn.classList.remove('other-player')
        player_1_turn.classList.add('current-player')

        //this is the next player
        currentPlayer = 'X'
    }

    turnsCount++

    //See who wins
    checkTheWinner()
}

// Adding event listener to all the square
const setDivsClick = () => {

    for(let i=0; i<game_divs.length; i++){
        // add an image when clicked
        game_divs[i].addEventListener('click', playGame)
    }
}

// Function to reset the game
const resetGame = (event) => {

    turnsCount = 0
    stopGame = false


    //Reset current play
    currentPlayer = 'X'

    //Reset the game table
    gameTable = [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' '],
    ]

    //Get image of a div then hide it and remove the disable mouse hover
    for(let i=0; i<game_divs.length; i++){
        game_divs[i].children[0].classList.add('hidden')
        game_divs[i].classList.remove('disable')
    }

    //Add event listener click to the divs
    setDivsClick()

    //Hide the result div
    resultDiv.classList.add('hidden')

    //reset the turns div
    player_2_turn.classList.remove('current-player')
    player_2_turn.classList.add('other-player')
    player_1_turn.classList.remove('other-player')
    player_1_turn.classList.add('current-player')
}



document.addEventListener('DOMContentLoaded', () => {

    //Add Event listener to all divs
    setDivsClick()

    //clear all the divs using the reset button
    resetBtn.addEventListener('click', resetGame)
})