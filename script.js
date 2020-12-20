let playerTurn = 0;
document.getElementById("player").innerText = "Player One's Turn"

function choosePlayer() {
  if(playerTurn === 0) {
    document.getElementById("player").innerText = "Player Two's Turn"
    playerTurn = 1
  } else {
    document.getElementById("player").innerText = "Player One's Turn"
    playerTurn = 0
  }
}
// const gameSquare = document.getElementsByClassName(".gameSquare")

function markSquare(){
  console.log("working?")
    if(playerTurn === 0){
      document.querySelector(".gameSquare").innerText = "X";
      console.log("Blue")
    } else{
      document.querySelector(".gameSquare").innerText = "O";
      console.log("Red")
    }
    choosePlayer()
}
console.log(playerTurn)
choosePlayer()
console.log(playerTurn)

document.getElementsByClassName("gameSquare").addEventListener("click", markSquare)

// function winCheck(value) {
//   if(typeof value === "X") {
//     document.getElementById
//   }
// }

