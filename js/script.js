
// check for winner, check for tie, cant replay a box//

// const clickSquare = () => {
//     const xOrO = () => {
//         const xOrO = document.createElement("X" || "O")
//         document.querySelector('.button').appendChild(xOrO)
//     }
// }
// document.addEventListener('click', ()=> {
// const squares = document.getElementById("gameGrid")

const cellElements = document.querySelectorAll("div.square")

function changePlayer () {
     currentPlayer = currentPlayer === "X" ? "O" : "X";
    //  statusDisplay.innerHTML = currentPlayerTurn();
 }

cellElements.forEach(cell => {
    cell.addEventListener("click", handleClick, {once: true})
    // .innerText = "X"
 })

 function handleClick(e){
     console.log(e.target)
     e.target.innerText = currentPlayer
     changePlayer ()
 }




let currentPlayer = "X";
const changePlayerTurn = () => `It's ${currentPlayer} 's turn`;

 
 
//place mark 
//alternate X and O 
//check for win
//check for tie