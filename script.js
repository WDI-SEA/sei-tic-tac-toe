const boxes = document.querySelectorAll(".boxes")
let player = "X"

let click = true

let box1 = document.getElementById("box1")
let box2 = document.getElementById("box2")
let box3 = document.getElementById("box3")
let box4 = document.getElementById("box4")
let box5 = document.getElementById("box5")
let box6 = document.getElementById("box6")
let box7 = document.getElementById("box7")
let box8 = document.getElementById("box8")
let box9 = document.getElementById("box9")

let moves=0

const winningCombos = [{a:box1, b:box2, c:box3},{a:box4, b:box5, c:box6},{a:box7, b:box8, c:box9},{a:box1, b:box5, c:box9},{a:box3, b:box5, c:box7},{a:box2, b:box5, c:box8},{a:box1, b:box4, c:box7},{a:box3, b:box6, c:box9}]

const checkWin = () => {
  for(i = 0; i < winningCombos.length; i++) {
    let win = checkBoxes(winningCombos[i])
    if(win) {
      click = false 
      console.log("You Won!")
      return win 
    } else if (!win && moves===9) {
      console.log("It's A Draw!")
    click = false} 
  }
}

function checkBoxes (obj) {
  if(obj.a.innerText===obj.b.innerText && obj.a.innerText===obj.c.innerText){
    return obj.a.innerText
  } else {
    return false 
  } 
}

boxes.forEach(box=>{
  box.addEventListener("click", function () {
   if(click){ box.innerText = player
    moves++
    if (player === "X") {
      checkWin ()
      player = "O"
    } else {
      player = "X"
    }}
  },{once: true})
}) 


