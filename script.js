const boxes = document.querySelectorAll(".boxes")
let player = "X"

boxes.forEach(box=>{
  box.addEventListener("click", function () {
    box.innerText = player
    if (player === "X") {
      player = "O"
    } else {
      player = "X"
    }
  })
}) 

