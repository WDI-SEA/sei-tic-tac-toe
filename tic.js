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


let player = 1

let displayX = "X"
let displayO = "O"

let playeronescore = 0
let playertwoscore = 0

let endgame = false



// function markX(e){
//     if (player === 0) {
//         e.target.innerText = "X"
//         player = 1
//         }
// }

// document.getElementById("grid").addEventListener("click", markX)

function markO(e){
    if (!e.target.innerText && !endgame) {
        if (player === 1) {
            console.log("test")
            e.target.innerText = "X" 
            determineWinner("X")
            player = 2
            }
        else {
        e.target.innerText = "O"
        determineWinner("O")
        player = 1
        }
    }
}
let grid = document.getElementById("grid")
grid.addEventListener("click", markO)

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

let determineWinner = (mark) => {
    if (
        (a1.innerText === mark && a2.innerText === mark && a3.innerText === mark) ||
         (b1.innerHTML === mark && b2.innerHTML === mark && b3.innerHTML === mark) || (c1.innerHTML === mark && c2.innerHTML === mark && c3.innerHTML === mark) || (a1.innerHTML === mark && b1.innerHTML === mark && c1.innerHTML === mark) || (a2.innerHTML === mark && b2.innerHTML === mark && c2.innerHTML === mark) || (a3.innerHTML === mark && b3.innerHTML === mark && c3.innerHTML === mark) || (a1.innerHTML === mark && b2.innerHTML === mark && c3.innerHTML === mark) || (a3.innerHTML === mark && b2.innerHTML === mark && c1.innerHTML === mark)
        ){
            document.getElementById('winner').innerText = `Player ${player} is the winner!`
            endgame = true
            if (player === 1) {
                playeronescore++
                document.getElementById('playerone').innerText = `Player 1 - ${playeronescore}`

            } else {
                playertwoscore++
                document.getElementById('playertwo').innerText = `Player 2 - ${playertwoscore}`
            }
        }
} 

let reset = document.getElementById('reset')
reset.addEventListener('click', resetGame)

function resetGame() {
    let children = Array.from(grid.children)
    console.log(children)
    children.forEach(element => {
        element.innerText = ''
    });
    document.getElementById('winner').innerText = ''
    player = 1
    endgame = false
}

document.getElementById('playerone').innerText = `Player 1 - ${playeronescore}`
document.getElementById('playertwo').innerText = `Player 2 - ${playertwoscore}`



// ["a1", "a2", "a3"],
//                 ["b1", "b2", "b3"],
//                 ["c1", "c2", "c3"],
//                 ["a1", "b1", "c1"],
//                 ["a2", "b2", "c2"],
//                 ["a3", "b3", "c3"],
//                 ["a1", "b2", "c3"],
//                 ["a3", "b2", "c1"]