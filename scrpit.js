//use an array ['','x','','','','','','','o'] 1D array approach, will need to be followed by a loop? pop

// for (let i = 0; <= gameSquare.length; i++) {
  

let currentPlayer = "X";
 
 if (currentPlayer === "X") {
   console.log("Lets go Player X!");
  } else {
   console.log("lets go Player O)!")
  }
// const gameSquares = document.querySelectorAll(".square");
//    gameSquares.forEach(function(square){
// console.log(square)
// square.addEventListener('click', function(event){
//    if (isDisabled){
//     return;
//    }
//     event.target.innerText = currentPlayer;
//  if (currentPlayer === "X") {
//     currentPlayer = "O";
//   } else { 
//     currentPlayer = "X"
//   }
//   isDisabled = true; 
// });
// });
   
  /* code that Devin and I came up with that I then per a suggestion on a discord channel tried to render the cell disabled tried to add the disable function. I only got it to render once. Can't figure out why as I thought it would apply to ALL squares*/

// The working code
const gameSquares = document.querySelectorAll(".square");
   gameSquares.forEach(function(square){
console.log(square)
square.addEventListener('click', function(event){
    event.target.innerText = currentPlayer;
 if (currentPlayer === "X") {
    currentPlayer = "O";
  } else { 
    currentPlayer = "X"
}
// function removeListener(event) {
//     square.removeEventListener('click', function());
});
   });
   //Also tried removeEventListener, which worked but not the way I wanted it. Also spent a fair amount of time looking up stopPropagation. 
  
// **WARNING**
//   alert("Try again sucka!")


//    const checkClick = document.querySelectorAll(".square");
//    gameSquares.forEach(function(square){
//     square.removeEventListener('click', function(event){
//         event.target.innerText =""
//     })
//    }) 
   
  //prevent repeat clicks- check innerText, set move into gameboard array 

 
 //variable is game running? boolean true /false
 //bonus- number of wins. 
//let = score
 
 
 //think of all the ways to win the game 
        // XXO		XXX		OXX 

		// XOO		XOX		OOX 

		// XXO		OOO		OXX 
        // for each row, google formula 3*3*3*3*3*3*3*3*3 = 3^9 = 19,683
 //think of all conditions to win the game and check for all of them
 //check for draw
   //if q square is x or o and no one has won
 //check if there is a winner. else if statement or every() method? every method cant execute empty elements
   /*
   if a winner, end game and update message for who has won 
   (`${} WINS!`)*/
   
   // if no one, let game play continue

   //    const resetButton = document.querySelector("#reset-button");
// console.log(resetButton)
// resetButton.addEventListener("click", function(){
//     console.log("")
//       box-container.innerText = "";
// });