var gridContainer = document.getElementById("gridContainer")

gridContainer.addEventListener("click", click)

var oMarker = "https://cdn.pixabay.com/photo/2017/02/09/11/25/alphabet-2051685_960_720.png"

var xMarker = "https://cdn.pixabay.com/photo/2017/02/09/11/09/alphabet-2051646_960_720.png"



var gameBoard = ["unclicked" , "unclicked" , "unclicked" , "unclicked" , "unclicked" , "unclicked" , "unclicked" , "unclicked" , "unclicked"]

var whosTurn = "X"

function changeSize() {
    var backgroundImage = document.getElementById();
    backgroundImage.style.height = "50px";
    backgroundImage.style.width = "50px";
}





function click(event) {
    if (whosTurn === "X") {
        var clickedOn = document.getElementById(event.target.id)
        var divNumber = parseInt(event.target.id[4]) - 1
        if (gameBoard[divNumber] === "unclicked") {
            gameBoard[divNumber] = "xClicked"
            console.log(gameBoard)
            clickedOn.style.backgroundImage = "url('" + xMarker + "')"
            console.log(event.target.id[4]) 
            whosTurn = "O"
            checkWin()
        }
    } else if (whosTurn === "O") {
        var clickedOn = document.getElementById(event.target.id)
        var divNumber = parseInt(event.target.id[4]) - 1
        if (gameBoard[divNumber] === "unclicked") {
            gameBoard[divNumber] = "oClicked"
            console.log(gameBoard)
            clickedOn.style.backgroundImage = "url('" + oMarker + "')"
            console.log(event.target.id[4]) 
            whosTurn = "X"
            checkWin()
        }
    }  
}

function checkWin() {
    if (gameBoard[0] === "xClicked" && gameBoard[1] === "xClicked" && gameBoard[2] === "xClicked" ||
    gameBoard[3] === "xClicked" && gameBoard[4] === "xClicked" && gameBoard[5] === "xClicked" ||
    gameBoard[6] === "xClicked" && gameBoard[7] === "xClicked" && gameBoard[8] === "xClicked" ||
    gameBoard[0] === "xClicked" && gameBoard[3] === "xClicked" && gameBoard[6] === "xClicked" ||
    gameBoard[1] === "xClicked" && gameBoard[4] === "xClicked" && gameBoard[7] === "xClicked" ||
    gameBoard[2] === "xClicked" && gameBoard[5] === "xClicked" && gameBoard[8] === "xClicked" ||
    gameBoard[0] === "xClicked" && gameBoard[4] === "xClicked" && gameBoard[8] === "xClicked" ||
    gameBoard[2] === "xClicked" && gameBoard[4] === "xClicked" && gameBoard[6] === "xClicked" 
    ) {
// add o
//add cats 
        DataView.innerText = "X WINS!"
        console.log("X Wins!")

    } else if (gameBoard[0] === "oClicked" && gameBoard[1] === "oClicked" && gameBoard[2] === "oClicked" ||
    gameBoard[3] === "oClicked" && gameBoard[4] === "oClicked" && gameBoard[5] === "oClicked" ||
    gameBoard[6] === "oClicked" && gameBoard[7] === "oClicked" && gameBoard[8] === "oClicked" ||
    gameBoard[0] === "oClicked" && gameBoard[3] === "oClicked" && gameBoard[6] === "oClicked" ||
    gameBoard[1] === "oClicked" && gameBoard[4] === "oClicked" && gameBoard[7] === "oClicked" ||
    gameBoard[2] === "oClicked" && gameBoard[5] === "oClicked" && gameBoard[8] === "oClicked" ||
    gameBoard[0] === "oClicked" && gameBoard[4] === "oClicked" && gameBoard[8] === "oClicked" ||
    gameBoard[2] === "oClicked" && gameBoard[4] === "oClicked" && gameBoard[6] === "oClicked" 
    ) {
        console.log("O Wins!")
    } else if (gameboard[0, 1, 2, 3, 4, 5, 6, 7, 8] === clickedOn ) {
        console.log("Cat's Game!")
    }
}






    // I need to check horizontal rows for a win
    // I need to check diagonal rows for a win
    // I need to check vertical rows for a win
    // I need to check for a draw
    // update dom for who wins


/*var words = ["sheep" , "cow" , "pig" , "horse"]
if (words[0] === "sheep" && words[2] === "pig") {
    console.log("true")
} 
for (let i = 0; i < words.length; i++) {
    console.log(words[i])
}*/