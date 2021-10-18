//first I have to click a square
//the squares must be connected to the divs
//then the game begins
//the first click can either be x or o
//use javascript tp add an x or o to each cell it must appear
// a box should not be able to be clicked more than once so add a stop event listener but not remove
//when clicked display player 1 or player two another loop
//also detect draw conditionst 

// if player 1 who is x or player 2 who is 0 clicks box 1 box 2 box 3 winner
// if player 1 who is x or player 2 who is 0 clicks box 1 box 5 box 9 winner are clicked 
// if player 1 who is x or player 2 who is 0 clicks box 3 box 5 box 7 winner are clicked  
// if player 1 who is x or player 2 who is 0 clicks box 7 box 8 box 9 winner are clicked 
// if player 1 who is x or player 2 who is 0 clicks box 1 box 4 box 7 winner are clicked 
// if player 1 who is x or player 2 who is 0 clicks box 3 box 6 box 9 winner are clicked 
// 
//  
let currentPlayer = "X"


// let winnerMessage = () => 'Player ' + currentPlayer + ' is the winner'
// let drawMessage = () => 'The game is a tie'
// let playerTurn = () => 'It is ' + currentPlayer + ' turn'

//possible winning solutions
let winningChoiceA = ["div1", "div2", "div3"]
// console.log (winningChoiceA)
let winningChoiceB = ["div1", "div5", "div9"]
let  winningChoiceC = ["div3", "div5", "div7"]
let  winningChoiceD = ["div7", "div8", "div9"]
let  winningChoiceE = ["div1", "div4", "div7"]
let  winningChoiceF = ["div3", "div6", "div9"]

//function to run winning choices

const calculateWinner = () => {
if (winningChoiceA.innerText === "X" || "O") {
    alert ("Winner")
} else if (winningChoiceB.innerText === "X" || "O") {
    alert ("Winner")
} else if (winningChoiceC.innerText === "X" || "O") {
    alert ("Winner")
} else if (winningChoiceD.innerText === "X" || "O") {
    alert ("Winner")
} else if (winningChoiceE.innerText === "X" || "O") {
    alert ("Winner")
} else if (winningChoiceF.innerText === "X" || "O") {
    alert ("Winner")
}else{
    alert ("Your Turn")
}
}
calculateWinner ()


//alternate between X and O
let playerChange = () => {
    currentPlayer = playerClick === "X" ? "X" : "O";
    playerChange();
}

document.querySelectorAll('.choice').forEach(playerClick => {
    playerClick.addEventListener('click', event => {
        playerClick.innerText = "X"
      //click
    })
  })

  document.querySelectorAll('.choice').forEach(playerClick => {
    playerClick.addEventListener('click', event => {
        playerClick.innerText = "O"
    })
  })



// const currentPlayer = 'X'




















// function startGame() {
// for (i = 0; i < playerClick.length; i++)
// }

// const playerClick = () => {
//     if (squareOne = const twoChoices [0];
//     } else { squareOne = const twoChoice [1];
//     }
// }

        


//   }



//   
//     const twoChoices = ['x', 'o']
//     const firstChoice = 'x'
    // const secondChoice = 'o'
