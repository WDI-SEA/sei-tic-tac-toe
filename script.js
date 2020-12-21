var gridContainer = document.getElementById("gridContainer")

gridContainer.addEventListener("click", click)

var oMarker = "https://toppng.com/free-image/wooden-capital-letter-o-PNG-free-PNG-Images_119275" 

var xMarker = "https://www.nicepng.com/png/full/205-2057069_letter-x-with-a-transparent-background.png"



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