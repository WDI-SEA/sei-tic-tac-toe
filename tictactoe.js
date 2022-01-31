/* ~~~~~~~~~~app state vars~~~~~~~~~~ */

//arrays to keep track of who played which space
const xMoves = []
let xWinCount = 0
const oMoves = []
let oWinCount = 0;

let markerOptions = []

//toggle to determine whos turn it is
let xTurn = true;

//winning combos
/* each index represents a winning combination of spaces */
const winningArray = [[1,2,3],[4,5,6],[7,8,9],[1,5,9],[3,5,7],[1,4,7],[2,5,8],[3,6,9]]

//winning boolean to control flow of game
let gameOver = false;

//counter to keep track of how many moves have happened
let moveCount = 0;

/* ~~~~~~~~DOM STUFF~~~~~~~~~~ */
//display to show current status (whos turn, game over?)
const turnIdentifier = document.getElementById("turnIdentifier")
//rest button
const resetButton = document.getElementById("reset")
//image holders

//create array of all divs with class of "space".
const spaces = Array.from(document.querySelectorAll(".space"))

//iterate over the array, applying an event listener to each element with a foreach loop
spaces.forEach(element =>{
    //why can't i put makeMove(this) into the event listener, instead it has to be in the function body??
    element.addEventListener('click',function(){
        //"this" keyword is referring to the element that received the event.  in this case it will be the div with class of "space" being iterated over.
        //call the makeMove method on whichever div is clicked.
        makeMove(this)
    })
})

//reset everything back to original.
resetButton.addEventListener('click',function(){
    //iterate over spaces to clear them all - setting the text to blank.
    spaces.forEach(element=>{
        changeText(element,"")
    })
    //reset movecount to 0
    moveCount = 0;
    //notify users that game has been reset, notify users of whose turn it is
    changeText(turnIdentifier, "Game reset!  X's turn!")
    //reset xTurn to make it user x's turn
    xTurn = true;
    //change color of notification box to default colors
    changeColor(turnIdentifier,"black","white")
    //clear out array of x's moves by iterating over array and popping everything out
    for(let i = 0; i < xMoves.length; i++){
        xMoves.pop()
    }
    //clear out array of o's moves by iterating over array and popping everything out
    for(let i = 0; i < oMoves.length+1; i++){
        oMoves.pop()
        oMoves.pop()
    }
    //reset gameover state in case game was over when reset was hit
    gameOver = false;
})


/* program logic*/

/* a couple functions to simply change html/css */
//changes the text of a passed-in element to a passed-in string.
const changeText = (element,newString) =>{
    element.innerText = newString
}


const changeColor = (element,color,bgcolor) =>{
    element.style.color = color
    element.style.backgroundColor = bgcolor
}

//function found online - insertAfter does not exist in js - seems to be a hacky workaround
function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

//maybe make a function to change put img in div
//incomplete function - commented out where it is used
const changeImage = (element,imageSource) => {
    //create new img element to hold new image
    const newImage = document.createElement("img")
    //set the images source to the passed in source (held locally)
    newImage.src = imageSource
    //add new img element to the current space
    insertAfter(newImage,element)
    //add image as child of passed in element (space)
    newImage.appendChild(element)
}






//function to make a move - read line-by-line notes for explanation
const makeMove = (space) =>{
    if(gameOver === false){
        let randomNum = () =>{
            return (Math.floor(Math.random() *1000))
        }
        //check if space is blank by checking its innertext
        if(!space.innerText){
            //check if its x's turn. if so, place marker in space and make it o's turn
            if(xTurn){
                //changeImage(space, "https://placedog.net/500")
                changeText(space, "x")
                //send the id (number value in HTML) to the xmoves array to keep track AS INT
                xMoves.push(parseInt(space.id))
                console.log(`just added ${space.id} to xMoves array`)
                moveCount++
                if(checkWinner(xMoves) === "win"){
                    xWinCount++
                    changeText(turnIdentifier,"X WINS!!!!")
                    changeColor(turnIdentifier, "black", "green")
                    gameOver = true
                }else{
                    xTurn = false
                    changeText(turnIdentifier,"O's turn!")
                    changeColor(turnIdentifier, "black", "white")
                }
            }else{
                //check if o's turn. if so, place marker in space and make it x's turn
                changeText(space,"o")
                //send the id (number value in HTML) to the xmoves array to keep track AS INT
                oMoves.push(parseInt(space.id))
                console.log(`just added ${space.id} to oMoves array`)
                moveCount++
                if(checkWinner(oMoves) === "win"){
                    changeText(turnIdentifier,"O WINS!!!!")
                    changeColor(turnIdentifier, "black", "green")
                    gameOver = true;
                }else{
                    xTurn = true;
                    changeText(turnIdentifier, "X's turn!")
                    changeColor(turnIdentifier, "black", "white")
                }
            }
        }else{
            //space is full
            changeText(turnIdentifier, "space is full - try another!")
            changeColor(turnIdentifier, "black","red")
        }
    }
}

//create array to hold the winners
let actualWinningSquares = []

const colorWinners = (winnerArray) => {
    for(let i = 0; i < winnerArray.length; i++){
        firstWinner = document.getElementById(i)
        changeColor(firstWinner,"black","green")
    }
}

//check to see if there's a winner.  take in an array to compare
let checkWinner = (arr1) =>{
    //iterate over possible winning combinations
    for(let i = 0; i < winningArray.length; i++){
        //check each nested index against the received array - if it includes ALL THREE pieces of any winning index, return win to signify a winner - otherwise continue on with program.
        if(arr1.includes(winningArray[i][0]) && arr1.includes(winningArray[i][1]) && arr1.includes(winningArray[i][2])){
            //push the winners into an array to isolate the 3 winning squares
            actualWinningSquares.push(winningArray[i][0], winningArray[i][1], winningArray[i][2])
            return "win"
        }
    }
}