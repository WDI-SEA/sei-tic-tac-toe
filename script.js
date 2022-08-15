/* PSEUDOCODE (WEB FUNCTIONS):
STEP 1: ALLOW PLAYER 1 TO GO FIRST (PLAYER ONE WILL ALWAYS BE Xs)
STEP 2: WHEN BOX IS CLICKED THE PLAYERS MOVE SHOULD APPEAR ON BOX
STEP 3: SWITH TO NEXT PLAYER AFTER MOVE HAS BEEN MADE
STEP 4: STOP ALLOWING MOVES ONCE PLAYER WINS OR THERES A DRAW

*/

//GLOBAL VARs
//makes element into array
let choices = document.querySelectorAll('.box');
Array.from(choices)
// console.log(choices);

let plyOne = "X";

let moves = 9;

let gameActive = true;

let winnerIf = [
  //Horriz
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  //Vert
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  //Diag
  [0, 4, 8],
  [2, 4, 6]
]

function winnerIs() {
  winnerIf.forEach(function(plays) {
    let check = plays.every(idx => choices[idx].innerText.trim() == plyOne)
    if(check) {
      gameActive = false
      alert(plyOne + ' has won')
    }
  })
}

function draw() {
  moves -= 1
  if(gameActive == true && moves == 0) {
    alert("IT'S A DRAW!")
  }
}


choices.forEach(function(box){
  box.addEventListener('click', function() {
    if(gameActive){
      if(box.innerText.trim() != "") return
      box.innerText = plyOne
      winnerIs()
      // //ternary op -- short "if ... else"
      // plyOne = plyOne == "X" ? "O" : "X";

      // another way 
      plyOne = plyOne == "X" ? (
        plyOne = "O"
      ) : (
        plyOne = "X"
      );
      // console.log(plyOne)
      // console.log(gameActive)
      draw()
    }
  })
})


// window.addEventListener('load', () => {
//     function 
// })


// choice.addEventListener("click", function() {
//    document.getElementsByClassName("box").innerHTML;
//  });

// gameBoard array to keep track of player moves ['x', '', 'o', 'x', '', 'o', 'x', '', '']
    // 2d array
    // [
    //     ['x', '', 'o'],
    //     ['x', 'o', ''],
    //     ['x', '', 'o']
    // ]




 //Condtion to ensure it runs until no more moves available
//  let plyMoves = 10;

//  if (i = 9; i < plyMoves; i--) {
//   console.log(i + " moves left")
//  } else (i == plyMoves) {
//    document.getElementsByTagName('section').style.pointerEvents = "none";
//    alert("Oops, it's a draw! No more moves left.")
//  };

//  // condition to add X's || O's for players
//  const playerOne = "X"
//  const playerTwo = "O"

//  while (playerOne) {

//  }

// Possible Choices

//Draw/ end of game 




