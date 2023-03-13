//Players Choices
const gameBoard = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X']
let playerOne = "X"
let playerTwo = "O"
//whose turn is it?
let mark = function() {
    if (playerOne === "X") {
       let div= document.getElementsByClassName('board')
       div.addEventListener('click', )
    }
}
let turnOne = function() {
    if(playerOne === gameBoard[0]) {
        gameBoard.pop();
            console.log(gameBoard[i])
            
        }
}
    // } else if (playerTwo === gameBoard[1]) {
    //     console.log("go something")
//     }
// let turnTwo= function() {
//     if (playerTwo === gameBoard[1]){
//         console.log("what?")
//     }
// }


// let changePlayers = function() {
//    // let mark = function() {
//         //document.getElementById("b1").innerText= "X";
//    // }
//     return document.addEventListener('click', changePlayers(playerOne) || changePlayers(playerTwo) ) 
// }
//changePlayers(playerOne)


//******boolean value to tell if game is running********

let gameRun = function() {
    for(i=0; i<9; i++) {
        console.log(gameBoard[i])
}
}

// const Players = {
//     playerOne:"X",
//     playerTwo:"O",
//     pickBox: function() {
//         if (playerOne === document.addEventListener('click', anyBox)) {
//             return document.getElementById("message").innerText= "player 2 go"
//         } else if (playerTwo === document.addEventListener('click', anyBox))
//     }
// }

// // let turns = function playersTurns(turn1, turn2) {
// // if (playerOne === turn1) {
// // let choiceOne = document.
// // }
// // };

// // let playerOne = 'firstChoice' 
// // firstChoice = playerOne

// // let playerTwo = 'secondChoice'
// // secondChoice = playerTwo


// function changePlayer(p1, p2) {
//     if (playerOne === gameBoard[0]) {
//         playerTwo === gameBoard[1]
//     }
//    document.getElementById('board').innerText= gameBoard[0] || gameBoard[1];

// }
// // let boxTwo = document.getElementById('b2');

// // let answer = function choices(option1, option2) {
// //     if (playerOne === choices(option1)) {
// // console.log("ayye")
// //     }else{
// //         console.log("noo")
// //     }
// // }

// function box01 () {
//     if (firstChoice && boxOne) {
//           boxOne = document.getElementById("b1").innerText= "X";
//         } else if (secoondChoice && boxOne) {
//             boxOne = document.getElementById("b1").innerText= "O"
//         }
//     }
// function box01 () {
//     if (firstChoice && boxOne) {
//           boxOne = document.getElementById("b1").innerText= "X";
//         } else if (firstChoice && boxTwo) {
//             boxTwo = document.getElementById("b2").innerText= "X"
//         }
//     }
        //else if (firstChoice === boxTwo) {
          //  return document.getElementById("b2").innerText= "X"
           // return document.getElementById("b2").innerText= "X"
        //}
    
        // boxOne.classList.toggle("answer");
        // return (`${choiceOne}`);
    // } else if () {
    //    boxTwo = document.getElementById("b2").innerHTML= "X",
    // }

// function box02 () {
//     if (playerOne === firstChoice) {
//             return document.getElementById("b2").innerText= "X"
//         }
        // boxOne.classList.toggle("answer");
        // return (`${choiceOne}`);
    // } else if () {
    //    boxTwo = document.getElementById("b2").innerHTML= "X",
    // }














//*********** OLD METHOD */
// console.log("hello, World!")

// // document.getElementById("message").innerHTML = "This is the message box" 

// // const Choices = [" ", " ", " ", " ", " ", " ", " ", " ", " ",]
// // console.log(Choices.length)

// const playerOne = "X"
// const playerTwo = "O"

// const b1 = document.getElementsById('b1');

// b1.addEventListener('click', function() {
//     b1.innerText = "X"
// })

// function playersChoices(choiceOne, choiceTwo) {
//     if (playerOne === choiceOne) {
//     console.log(`Player One Chooses: ${choiceOne}! Player Two's Turn`);
// } else if (playerTwo === choiceTwo) {
//     console.log(`Player 2 chooses: ""! Player One's turn`);
// }
// }
// playersChoices("X", "O")


// function pTwoChoice(choiceTwo) {
//     console.log(`Choice: ${choiceTwo}`)
