console.log("ahhhhhhh!")
let xMoves =[]
// let oMovesChoices=[0,1,2,3,4,5,6,7,8]
let oMoves =[]
let winningMoves = [[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,7]]
let buttons = document.getElementsByTagName('button');

let gameOver = false;
// checks oMoves and xMoves to see if it matches winningMoves

// function add_img() {
//   let img = document.createElement('img');
//   img.src = '/img/poe.png'
//   document.getElementById("body").appendChild(img)
// }

let winCheck = (moves) => {
  for (let i = 0; i < winningMoves.length; i++) {
    let winningNums = winningMoves[i]
    if (moves.includes(winningNums[0]) && moves.includes(winningNums[1]) && moves.includes(winningNums[2])){
      return true
    }
  }
  return false
}

for (let button of buttons) {
  button.addEventListener("click", function(input) {
    const pick = (parseInt(input.target.id))

    if (gameOver){
      return;
    }

    if (xMoves.includes(pick) || oMoves.includes(pick)) {
      // document.getElementById("poewon").src="/img/poe.png"
      document.getElementById("notes").innerText = (`Already Taken`)
      return 
    }
    
    if (xMoves.length > oMoves.length) {
      input.target.innerText = "o";
      oMoves.push(pick)
      document.getElementById("notes").innerText = (`x move!`)

    } else if (xMoves.length === oMoves.length) {
      document.getElementById("notes").innerText = (`o move!`)
      input.target.innerText = "x";
      xMoves.push(pick)
    }

    console.log(`xmoves: ${xMoves}`)
    console.log(`ommoves: ${oMoves}`)
    console.log(pick)

    if (winCheck(xMoves) === true) {
      gameOver = true;
      // button.replaceWith(button.cloneNode(true));
      document.getElementById("notes").innerText = ("x Won!")
      return
        
    }
//image element add src 

    if (winCheck(oMoves)) {
      gameOver = true;
      // let poe =document.createElement("img");
      // poe.setAttribute("src", "/img/poe.png")
      // document.getElementById("poetie").appendChild("poe");
      document.getElementById("notes").innerText = ("o Won!")
      return
    }

    if ((oMoves.length + xMoves.length == 9) && (winCheck(xMoves)=== false) && (winCheck(oMoves) === false)) {
      gameOver = true;
      document.getElementById("notes").innerText = ("It's a Tie!")
      return
    }

  })
    

}

