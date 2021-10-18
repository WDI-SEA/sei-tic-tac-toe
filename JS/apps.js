// eventListener that runs entire JS script once the website has loaded
// bulk of functions should be within eventlistener
document.addEventListener('DOMContentLoaded', () => {

    // variable storing all the tiles 
    let tile = Array.from(document.querySelectorAll("tile"));

    // 8 possible winning conditions
    const winningConditions = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,8]
    ]
    // variable containing reset button, add eventlistener click to run

    // variable storing the gameboard itself 
    
    // variable storing the current player playing

    // variable containing the announcer, let announcer text change depending on winner/player

    // array containing all possible win conditions for TTT

    // function to determine if valid move(ex. cant click an already clicked tile)

    // function that uses the winning conditions array to determine if there is a winner and also checks for cats game
    
    // function that keeps updating the gameboard
    // function to make all tiles clickable 
    tile.addEventListener()

    //

})
