console.log('Hello World')

let row1_col1_div = document.querySelector('#row-1-col-1-div')
let row1_col2_div = document.querySelector('#row-1-col-2-div')
let row1_col3_div = document.querySelector('#row-1-col-3-div')

let row2_col1_div = document.querySelector('#row-2-col-1-div')
let row2_col2_div = document.querySelector('#row-2-col-2-div')
let row2_col3_div = document.querySelector('#row-2-col-3-div')

let row3_col1_div = document.querySelector('#row-3-col-1-div')
let row3_col2_div = document.querySelector('#row-3-col-2-div')
let row3_col3_div = document.querySelector('#row-3-col-3-div')




let game_divs = document.querySelectorAll('.game-square')

let resetBtn = document.querySelector('.reset-btn')



let player_1_turn =  document.querySelector('.player-1-turn')
let player_2_turn =  document.querySelector('.player-2-turn')




// This represnts the game
// let gameTable = [
//     [' ', ' ', ' '],
//     [' ', ' ', ' '],
//     [' ', ' ', ' '],
// ]



let gameTable

let stopGame = false




currentPlayer = 'X'


//Then i will add if conditions to represent the winning conditions
const checkTheWinner = (event) => {

    //Horizontal
    // let gameTable = [
    //     ['X', 'X', 'X'],
    //     ['O', 'O', 'X'],
    //     ['X', 'X', 'X'],
    // ]


    for(let row=0; row<3; row++){


        //Horizonal Line
        if(gameTable[row][0] != ' ' && gameTable[row][0] == gameTable[row][1] && gameTable[row][1] == gameTable[row][2]){

            console.log('Horizontal Line')


            // Add style to that line


            //end game
            stopGame = True
            return

        }
    }

            //Vertical Line
            // let gameTable = [
            //     ['X', 'O', 'X'],
            //     ['X', 'O', 'X'],
            //     ['X', 'O', 'X'],
            // ]

    for(let col=0; col<3; col++){
            
        if (gameTable[0][col] != ' ' &&  gameTable[0][col] == gameTable[1][col] && gameTable[1][col] == gameTable[2][col]) {

            console.log('Vertical Line')

            // Add style to that line


            //end game
            stopGame = True
            return


        }
    }








    //Diagonal
    // let gameTable = [
    //     ['O', 'O', 'X'],
    //     ['O', 'X', 'O'],
    //     ['X', 'O', 'O'],
    // ]


    //And
    // let gameTable = [
    //     ['X', 'O', 'O'],
    //     ['O', 'X', 'O'],
    //     ['O', 'O', 'X'],
    // ]





}





const playGame  = (event) => {



    if(stopGame) {

        return
    }

    let clicked_div_id = event.target.id

    let divID = document.getElementById(clicked_div_id)


    // console.log(clicked_div_id)
    console.log(clicked_div_id)

    let div_arr = clicked_div_id.split('-')


    console.log(div_arr)


    // -1 because the array indcies start from 0
    let row = parseInt(div_arr[1]) - 1
    let col = parseInt(div_arr[3]) - 1


    console.log(row)
    console.log(col)

    console.log('Before Spot')

    //Spot is taken
    if(gameTable[row][col] != ' '){
        console.log('Spot taken')
        return
    }


    console.log('After Spot')

    //Modify the game table array
    gameTable[row][col] = currentPlayer


    console.log(gameTable)



    //get the div's image
    let div_img = divID.children[0]

    div_img.classList.remove('hidden')



    //This will allow to alternate between players

    // X player
    if(currentPlayer == 'X'){

        //add an image
        div_img.src = "images/x.png"

        //this is the next player
        currentPlayer = 'O'


    // O player
    } else {
        //add an image
        div_img.src = "images/o.png"

        currentPlayer = 'X'
    }

    //Remove the hidden tag
    // div_img.classList.remove('hidden')




    // //make if else to change between the images and the div of game turns

    // div_img.src = "images/x.png"
    // // console.log(div_img)


    
    //See who wins

    checkTheWinner()
}




// Adding event listener to all the square

const setDivsClick = () => {


    gameTable = [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' '],
    ]


    for(let i=0; i<game_divs.length; i++){
    
        let current_div = game_divs[i]
    
        // add an image when clicked
        current_div.addEventListener('click', playGame)
    
    }



}





const resetGame = (event) => {

    for(let i=0; i<game_divs.length; i++){
        let current_div = game_divs[i].children[0]
        current_div.classList.add('hidden')

    }

}



document.addEventListener('DOMContentLoaded', () => {



    //All the DOM Manipulation here






    //clear all the divs using the reset button
    resetBtn.addEventListener('click', resetGame)



    //Add Event listener to div
    setDivsClick()





})