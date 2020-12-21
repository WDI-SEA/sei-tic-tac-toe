// when you click on grid x or o pops up
// need to have something alternating between 1 or 2 to determine play (x or o)
// when 3 x's or o's are in a row determine winner (winning pattern, a1 a2 a3, a1 b1 c1, ect)
// cant be able to change grid with variable already in it (make it a different class when its full?)
// have tie game come in to play when all grids are selected
// within the markO function put in once these boxes are marked (object change to value if x or o clicked it)
// winningCombos = [
//                 ["a1", "a2", "a3"],
//                 ["b1", "b2", "b3"],
//                 ["c1", "c2", "c3"],
//                 ["a1", "b1", "c1"],
//                 ["a2", "b2", "c2"],
//                 ["a3", "b3", "c3"],
//                 ["a1", "b2", "c3"],
//                 ["a3", "b2", "c1"]
//             ];
// let gameBoard = [
//                 [0,0,0],
//                 [0,0,0],
//                 [0,0,0]
//                     ];

let a1;
let a2;
let a3;
let b1;
let b2;
let b3;
let c1;
let c2;
let c3;
let a1_event;
let a2_event;
let a3_event;
let b1_event;
let b2_event;
let b3_event;
let c1_event;
let c2_event;
let c3_event;
let player = 0

let displayX = "X"
let displayO = "O"

// function markX(e){
//     if (player === 0) {
//         e.target.innerText = "X"
//         player = 1
//         }
// }

// document.getElementById("grid").addEventListener("click", markX)

function markO(e){
    if (player === 0) {
        console.log("test")
        e.target.innerText = "X"
        player = 1
        }
    else {
    e.target.innerText = "O"
    player = 0
    }
}
document.getElementById("grid").addEventListener("click", markO)

// function displayWinner(e){
//     if (player1 === winningCombos) {
//         e.target.innerText = "Player 1 Wins"
//     }else if (player2 === winningCombos) {
//         e.target.innerText = "Player 2 Wins"
//     }
//     else if (player1 !== winningCombos) {
//         e.target.innerText = "Cats Game"
//     }
// }




// function gameOver() {
// for (let i = 0; i <winningCombos.length; i++) {
//     if(winningCombos[i][0] == winningCombos[i][i] && winningCombos[i][0] == winningCombos[i][2] && winningCombos[i][0]!=0){
//         alert(winningCombos[i][0] ("Wins"));
//         _win=1;
//         return;
//     }
// }
// for (let i = 0; i < winningCombos; i ) {
//     if(winningCombos[0][i] == grid[1][i] && winningCombos[1][i] == grid[2][i] && winningCombos[0][i]!=0) {
//         console.log(winningCombos[0][i] ("Wins"));
//         _win=1;
//         return;
//     }
//     if(winningCombos[0][0] == winningCombos[1][1] && winningCombos[0][0] == winningCombos[2][2] && winningCombos[0][0]!=0) {
//         alert(winningCombos[0][0] ("Wins"));
//         _win=1;
//         return;
//     }
//     if(winningCombos[0][2] == winningCombos[1][1] && winningCombos[0][2] == winningCombos[2][0] && winningCombos[2][0]!=0) {
//         alert(winningCombos[1][1] ("Wins"));
//         _win=1;
//         return;
//     }
// }
// }

function determineWinner(){
    if (
        (a1.innerHTML === "X" && a2.innerHTML === "X" && a3.innerHTML === "X") || (b1.innerHTML === "X" && b2.innerHTML === "X" && b3.innerHTML === "X") || (c1.innerHTML === "X" && c2.innerHTML === "X" && c3.innerHTML === "X") || (a1.innerHTML === "X" && b1.innerHTML === "X" && c1.innerHTML === "X") || (a2.innerHTML === "X" && b2.innerHTML === "X" && c2.innerHTML === "X") || (a3.innerHTML === "X" && b3.innerHTML === "X" && c3.innerHTML === "X") || (a1.innerHTML === "X" && b2.innerHTML === "X" && c3.innerHTML === "X") || (a3.innerHTML === "X" && b2.innerHTML === "X" && c1.innerHTML === "X")
        ){
            result("Player 1 is the winner!")
        }
}

// ["a1", "a2", "a3"],
//                 ["b1", "b2", "b3"],
//                 ["c1", "c2", "c3"],
//                 ["a1", "b1", "c1"],
//                 ["a2", "b2", "c2"],
//                 ["a3", "b3", "c3"],
//                 ["a1", "b2", "c3"],
//                 ["a3", "b2", "c1"]