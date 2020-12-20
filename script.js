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

document.querySelectorAll(".gameSquare").addEventListener("click", function(e){
  console.log("working?")
  if(playerTurn === 0){
    e.target.innerText("X");
    console.log("Blue")
  } else{
    e.target.innerText("O");
    console.log("Red")
  }
  e.target.disabled = true;
  choosePlayer()
})

// function winCheck(value) {
//   if(typeof value === "X") {
//     document.getElementById
//   }
// }

