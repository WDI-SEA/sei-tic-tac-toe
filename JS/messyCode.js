// if(checkCurrentPlayer == playerX){
            //     tile[index].innerHTML = "X"
            //     announcer.innerHTML = "Play X move"
            // } else {
            //     tile[index].innerHTML = "O"
            //     announcer.innerHTML = "Player O move"
            // }




            // let playerX = 'Player X'
        // let playerO = 'Player O'
        
        // let turnCount=0;
        // const changeTurn = (tile) => {
        //     turnCount++;
        //     let targetTile = tile[index];
        //     let tileTarget = targetTile.targe
        //     let tileTar = document.getElementById(tileTarget)
        // if(turnCount == 9){
        //     //Someone won or tie
        // }
        // if(turnCount % 2 == 0) {
        //     tileTar.innerText = playerO
        // }else {
        //     tileTar.innerText = playerX
        // }

         // const playerMove = (targetEvent) => {
        //     const clickedTile = targetEvent.target;

        //     console.log(`${clickedTile} has been clicked.`)
            
        //     tile[index].innerText = "X"
            // announcer.innerHTML = "Player O turn"
            // changeTurn();
            // tile[index].innerText = "O"
            // announcer.innerHTML = "Player X turn"
            


            // eventListener that runs entire JS script once the website has loaded
// bulk of functions should be within eventlistener

// getting player click to register on tiles
// Check to see if player move wins game
// Check for tie.
// switch from player X to player O 
// function startGame(){
    
    // variable for the announcer to change text when needed
    // let announcer = document.querySelector(".announcer");

    // variable containing reset button, add eventlistener click to run
    // let resetButton = document.querySelector("#reset");
    
    // variable storing the current player(X plays first)

    // let currentPlayer = "playerX"
    
    // entire board
    // let gameBoard = document.querySelector(".tileContainer")

    // 8 possible winning conditions

    // const winningConditions = [
    //     [0,1,2],
    //     [3,4,5],
    //     [6,7,8],
    //     [0,3,6],
    //     [1,4,7],
    //     [2,5,8],
    //     [0,4,8],
    //     [2,4,8]
    // ]

    // variable storing storing empty board 
    const tttBoard = ['','','','','','','','','']
    
    // variable containing the tiles
    let tile = document.querySelectorAll(".tile");
    let tileArray = Array.from(tile)

    //forEach loop to make all tiles clickable/eventlisteners
    // tile.forEach(tileTarget => {
    //     tileTarget.addEventListener('click', (event) => {

    //         const indexOfTile = tileArray.indexOf(event.target)
    //         tile[indexOfTile].classList.add('playerX')
    //     })
        
    

    // })
    
    
    
    // playerMove checks who the current player is and announces who turn it is next.
    

    
    
    // variable storing the current player playing


    // function to determine if valid move(ex. cant click an already clicked tile)
    // const isValid = () => {
        
    // }
    // function that uses the winning conditions array to determine if there is a winner and also checks for cats game

    
    // function to make all tiles clickable
    // variable storing all the tiles and making them clickable
    
    // for (let index = 0; index < tile.length; index++) {
    //     tile[index].addEventListener('click', () => {
    //         tttBoard[index] = 
    //         console.log(`Tile has been clicked`)
    //     })
    // }

    
}

// x = 0
// count = 0
// const compare = () => {
//     for (let i = 0; i < playerMoves.length; i++) {
        
//         for (let j = 0; j < winningCombos.length; j++) {
//             if(playerMoves[i] !== winningCombos[j][x]){
//                 x++
//             } else if(playerMoves[i] === winningCombos[j][x]){
//                 i++
//                 count ++
//                 if(count === 3){
//                     win
//                     break
//                 }
//             }
//             j++
//         }
        
//     }
// }