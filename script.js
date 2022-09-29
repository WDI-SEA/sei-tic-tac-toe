function colorChange(e) {
  e.target.style.backgroundColor = '#eee6e6';
}

function mainColor(e) {
  e.target.style.backgroundColor = '#fee8e9';
}



function counterReset() {
  reset()
  counterPlayer = 0
  counterComp = 0
  compResult.innerText = 0
  playerResult.innerText = 0
}

function reset() {
  let event = document.querySelectorAll('.pieces')
  for (let i = 0; i < 9; i++) {
    event[i].innerText = null
  }
  turn = 1
  for (let i = 0; i < 9; i++) {
    event[i].addEventListener('click', action, true)
  }
}

function wining() {
  let box = document.querySelectorAll('.pieces')
  if (box[0].innerText === 'o' && box[1].innerText === 'o' && box[2].innerText === 'o') {
    counterPlayer += 1
    window.alert("Well, you have won! I have to acknowledge that you are the kings of the earth.");
    playerResult.innerText = counterPlayer
    reset()
  }
  if (box[0].innerText === 'o' && box[3].innerText === 'o' && box[6].innerText === 'o') {
    counterPlayer += 1
    window.alert("Well, you have won! I have to acknowledge that you are the kings of the earth.");
    playerResult.innerText = counterPlayer
    reset()
  }
  if (box[0].innerText === 'o' && box[4].innerText === 'o' && box[8].innerText === 'o') {
    counterPlayer += 1
    window.alert("Well, you have won! I have to acknowledge that you are the kings of the earth.");
    playerResult.innerText = counterPlayer
    reset()
  }
  if (box[1].innerText === 'o' && box[4].innerText === 'o' && box[7].innerText === 'o') {
    counterPlayer += 1
    window.alert("Well, you have won! I have to acknowledge that you are the kings of the earth.");
    playerResult.innerText = counterPlayer
    reset()
  }
  if (box[2].innerText === 'o' && box[5].innerText === 'o' && box[8].innerText === 'o') {
    counterPlayer += 1
    window.alert("Well, you have won! I have to acknowledge that you are the kings of the earth.");
    playerResult.innerText = counterPlayer
    reset()
  }
  if (box[2].innerText === 'o' && box[4].innerText === 'o' && box[6].innerText === 'o') {
    counterPlayer += 1
    window.alert("Well, you have won! I have to acknowledge that you are the kings of the earth.");
    playerResult.innerText = counterPlayer
    reset()
  }
  if (box[3].innerText === 'o' && box[4].innerText === 'o' && box[5].innerText === 'o') {
    counterPlayer += 1
    window.alert("Well, you have won! I have to acknowledge that you are the kings of the earth.");
    playerResult.innerText = counterPlayer
    reset()
  }
  if (box[6].innerText === 'o' && box[7].innerText === 'o' && box[8].innerText === 'o') {
    counterPlayer += 1
    window.alert("Well, you have won! I have to acknowledge that you are the kings of the earth.");
    playerResult.innerText = counterPlayer
    reset()
  }
  //The following cases are the cases where the AI program win.
  if (box[0].innerText === 'x' && box[1].innerText === 'x' && box[2].innerText === 'x') {
    counterComp += 1
    window.alert("I have won! I guess humans have become useless...HAHAHAHAHA!");
    compResult.innerText = counterComp
    reset()
  }
  if (box[0].innerText === 'x' && box[3].innerText === 'x' && box[6].innerText === 'x') {
    counterComp += 1
    window.alert("I have won! I guess humans have become useless...HAHAHAHAHA!");
    compResult.innerText = counterComp
    reset()
  }
  if (box[0].innerText === 'x' && box[4].innerText === 'x' && box[8].innerText === 'x') {
    counterComp += 1
    window.alert("I have won! I guess humans have become useless...HAHAHAHAHA!");
    compResult.innerText = counterComp
    reset()
  }
  if (box[1].innerText === 'x' && box[4].innerText === 'x' && box[7].innerText === 'x') {
    counterComp += 1
    window.alert("I have won! I guess humans have become useless...HAHAHAHAHA!");
    compResult.innerText = counterComp
    reset()
  }
  if (box[2].innerText === 'x' && box[5].innerText === 'x' && box[8].innerText === 'x') {
    counterComp += 1
    window.alert("I have won! I guess humans have become useless...HAHAHAHAHA!");
    compResult.innerText = counterComp
    reset()
  }
  if (box[2].innerText === 'x' && box[4].innerText === 'x' && box[6].innerText === 'x') {
    counterComp += 1
    window.alert("I have won! I guess humans have become useless...HAHAHAHAHA!");
    compResult.innerText = counterComp
    reset()
  }
  if (box[3].innerText === 'x' && box[4].innerText === 'x' && box[5].innerText === 'x') {
    counterComp += 1
    window.alert("I have won! I guess humans have become useless...HAHAHAHAHA!");
    compResult.innerText = counterComp
    reset()
  }
  if (box[6].innerText === 'x' && box[7].innerText === 'x' && box[8].innerText === 'x') {
    counterComp += 1
    window.alert("I have won! I guess humans have become useless...HAHAHAHAHA!");
    compResult.innerText = counterComp
    reset()
  }
}


let first = null
let second = null
let third = null
let forth = null

let turn = 1
function action(e) {
  e.target.innerHTML = "o"
  turn = turn + 1
  let event = document.querySelectorAll('.pieces')
  for (let i = 0; i < 9; i++) {
    event[i].removeEventListener('click', action, true)
  }
  wining()
  setTimeout(function() { evilAiProgram(turn) }, 1000)
}


function evilAiProgram(compTurn) {
  let box = document.querySelectorAll('.pieces')
  if (compTurn === 2) {
    first = firstTurn()
    wining()
    for (let i = 0; i < 9; i++) {
      if (i !== first) {
        box[i].addEventListener('click', action, true)
      }
    }
  }
  else if (compTurn === 3) {
    second = secondTurn()
    wining()
    for (let i = 0; i < 9; i++) {
      if (i !== second && i !== first&& box[i].innerText !== "o") {
        box[i].addEventListener('click', action, true)
      }
    }
  }
  else if (compTurn === 4) {
    third = thirdTurn()
    wining()
    for (let i = 0; i < 9; i++) {
      if (i !== second && i !== first && i !== third && box[i].innerText !== "o") {
        box[i].addEventListener('click', action, true)
      }
    }
  }
  else if (compTurn === 5) {
    forth = forthTurn()
    wining()
    for (let i = 0; i < 9; i++) {
      if (i !== second && i !== first && i !== third && i !== forth && box[i].innerText !== "o") {
        box[i].addEventListener('click', action, true)
      }
    }
  }

}


function firstTurn() {
  let box = document.querySelectorAll('.pieces')
  if (box[4].innerText === "o") {
    box[0].innerText = "x"
    return 0
  }
  else {
    box[4].innerText = "x"
    return 4
  }

}

function secondTurn() {
  let box = document.querySelectorAll('.pieces')
  console.log(first)
  if (first === 0) {
    if (box[1].innerText === "o" && box[4].innerText === "o") {
      box[7].innerText = "x"
      return 7
    }
    else if (box[2].innerText === "o" && box[4].innerText === "o") {
      box[6].innerText = "x"
      return 6
    }
    else if (box[3].innerText === "o" && box[4].innerText === "o") {
      box[5].innerText = "x"
      return 5
    }
    else if (box[5].innerText === "o" && box[4].innerText === "o") {
      box[3].innerText = "x"
      return 3
    }
    else if (box[6].innerText === "o" && box[4].innerText === "o") {
      box[2].innerText = "x"
      return 2
    }
    else if (box[7].innerText === "o" && box[4].innerText === "o") {
      box[1].innerText = "x"
      return 1
    }
    else if (box[8].innerText === "o" && box[4].innerText === "o") {
      box[6].innerText = "x"
      return 6
    }
  }

  else if (first === 4) {
    if (box[0].innerText === "o") {
      if (box[1].innerText === "o") {
        box[2].innerText = "x"
        return 2
      }
      else if (box[2].innerText === "o") {
        box[1].innerText = "x"
        return 1
      }
      else if (box[3].innerText === "o") {
        box[6].innerText = "x"
        return 6
      }
      else if (box[5].innerText === "o") {
        box[1].innerText = "x"
        return 1
      }
      else if (box[6].innerText === "o") {
        box[3].innerText = "x"
        return 3
      }
      else if (box[7].innerText === "o") {
        box[3].innerText = "x"
        return 3
      }
      else if (box[8].innerText === "o") {
        box[7].innerText = "x"
        return 7
      }
    }

    if (box[1].innerText === "o") {
      if (box[0].innerText === "o") {
        box[2].innerText = "x"
        return 2
      }
      else if (box[2].innerText === "o") {
        box[0].innerText = "x"
        return 0
      }
      else if (box[3].innerText === "o") {
        box[0].innerText = "x"
        return 0
      }
      else if (box[5].innerText === "o") {
        box[2].innerText = "x"
        return 2
      }
      else if (box[6].innerText === "o") {
        box[3].innerText = "x"
        return 3
      }
      else if (box[7].innerText === "o") {
        box[6].innerText = "x"
        return 6
      }
      else if (box[8].innerText === "o") {
        box[2].innerText = "x"
        return 2
      }
    }

    if (box[2].innerText === "o") {
      if (box[0].innerText === "o") {
        box[1].innerText = "x"
        return 1
      }
      else if (box[1].innerText === "o") {
        box[0].innerText = "x"
        return 0
      }
      else if (box[3].innerText === "o") {
        box[0].innerText = "x"
        return 0
      }
      else if (box[5].innerText === "o") {
        box[8].innerText = "x"
        return 8
      }
      else if (box[6].innerText === "o") {
        box[7].innerText = "x"
        return 7
      }
      else if (box[7].innerText === "o") {
        box[8].innerText = "x"
        return 8
      }
      else if (box[8].innerText === "o") {
        box[5].innerText = "x"
        return 5
      }
    }
    if (box[3].innerText === "o") {
      if (box[0].innerText === "o") {
        box[6].innerText = "x"
        return 6
      }
      else if (box[1].innerText === "o") {
        box[0].innerText = "x"
        return 0
      }
      else if (box[2].innerText === "o") {
        box[0].innerText = "x"
        return 0
      }
      else if (box[5].innerText === "o") {
        box[2].innerText = "x"
        return 2
      }
      else if (box[6].innerText === "o") {
        box[0].innerText = "x"
        return 0
      }
      else if (box[7].innerText === "o") {
        box[6].innerText = "x"
        return 6
      }
      else if (box[8].innerText === "o") {
        box[6].innerText = "x"
        return 6
      }
    }

    if (box[5].innerText === "o") {
      if (box[0].innerText === "o") {
        box[2].innerText = "x"
        return 2
      }
      else if (box[1].innerText === "o") {
        box[2].innerText = "x"
        return 2
      }
      else if (box[2].innerText === "o") {
        box[8].innerText = "x"
        return 8
      }
      else if (box[3].innerText === "o") {
        box[1].innerText = "x"
        return 1
      }
      else if (box[6].innerText === "o") {
        box[8].innerText = "x"
        return 8
      }
      else if (box[7].innerText === "o") {
        box[8].innerText = "x"
        return 8
      }
      else if (box[8].innerText === "o") {
        box[2].innerText = "x"
        return 2
      }
    }

    if (box[6].innerText === "o") {
      if (box[0].innerText === "o") {
        box[3].innerText = "x"
        return 3
      }
      else if (box[1].innerText === "o") {
        box[0].innerText = "x"
        return 0
      }
      else if (box[2].innerText === "o") {
        box[3].innerText = "x"
        return 3
      }
      else if (box[3].innerText === "o") {
        box[0].innerText = "x"
        return 0
      }
      else if (box[5].innerText === "o") {
        box[8].innerText = "x"
        return 8
      }
      else if (box[7].innerText === "o") {
        box[8].innerText = "x"
        return 8
      }
      else if (box[8].innerText === "o") {
        box[7].innerText = "x"
        return 7
      }
    }

    if (box[7].innerText === "o") {
      if (box[0].innerText === "o") {
        box[6].innerText = "x"
        return 6
      }
      else if (box[1].innerText === "o") {
        box[5].innerText = "x"
        return 5
      }
      else if (box[2].innerText === "o") {
        box[8].innerText = "x"
        return 8
      }
      else if (box[3].innerText === "o") {
        box[6].innerText = "x"
        return 6
      }
      else if (box[5].innerText === "o") {
        box[8].innerText = "x"
        return 8
      }
      else if (box[6].innerText === "o") {
        box[8].innerText = "x"
        return 8
      }
      else if (box[8].innerText === "o") {
        box[6].innerText = "x"
        return 6
      }
    }

    if (box[8].innerText === "o") {
      if (box[0].innerText === "o") {
        box[5].innerText = "x"
        return 5
      }
      else if (box[1].innerText === "o") {
        box[2].innerText = "x"
        return 2
      }
      else if (box[2].innerText === "o") {
        box[5].innerText = "x"
        return 5
      }
      else if (box[3].innerText === "o") {
        box[6].innerText = "x"
        return 6
      }
      else if (box[5].innerText === "o") {
        box[2].innerText = "x"
        return 2
      }
      else if (box[6].innerText === "o") {
        box[7].innerText = "x"
        return 7
      }
      else if (box[8].innerText === "o") {
        box[6].innerText = "x"
        return 6
      }
    }

  }
}

/*This function provides the best choice as to respond to the player choice
in the third trurn of the game*/
function thirdTurn() {
  let box = document.querySelectorAll('.pieces')
  console.log(second)
  if (first === 0) {
    //0-1-4-7
    if (box[1].innerText === "o" && box[4].innerText === "o" && box[7].innerText === "x") {
      if (box[2].innerText === "o") {
        box[6].innerText = "x"
        return 6
      }
      else if (box[3].innerText === "o") {
        box[5].innerText = "x"
        return 5
      }
      else if (box[5].innerText === "o") {
        box[3].innerText = "x"
        return 3
      }
      else if (box[6].innerText === "o") {
        box[2].innerText = "x"
        return 2
      }
      else if (box[8].innerText === "o") {
        box[5].innerText = "x"
        return 5
      }
    }
    else if (box[2].innerText === "o" && box[4].innerText === "o" && box[6].innerText === "x") {
      if (box[1].innerText === "o") {
        box[3].innerText = "x"
        return 3
      }
      else if (box[3].innerText === "o") {
        box[5].innerText = "x"
        return 5
      }
      else if (box[5].innerText === "o") {
        box[3].innerText = "x"
        return 3
      }
      else if (box[7].innerText === "o") {
        box[3].innerText = "x"
        return 3
      }
      else if (box[8].innerText === "o") {
        box[3].innerText = "x"
        return 3
      }
    }
    else if (box[3].innerText === "o" && box[4].innerText === "o" && box[5].innerText === "x") {
      if (box[1].innerText === "o") {
        box[7].innerText = "x"
        return 7
      }
      else if (box[2].innerText === "o") {
        box[6].innerText = "x"
        return 6
      }
      else if (box[6].innerText === "o") {
        box[2].innerText = "x"
        return 2
      }
      else if (box[7].innerText === "o") {
        box[1].innerText = "x"
        return 1
      }
      else if (box[8].innerText === "o") {
        box[7].innerText = "x"
        return 7
      }
    }
    else if (box[5].innerText === "o" && box[4].innerText === "o" && box[3].innerText === "x") {
      if (box[1].innerText === "o") {
        box[6].innerText = "x"
        return 6
      }
      else if (box[2].innerText === "o") {
        box[6].innerText = "x"
        return 6
      }
      else if (box[6].innerText === "o") {
        box[2].innerText = "x"
        return 2
      }
      else if (box[7].innerText === "o") {
        box[6].innerText = "x"
        return 6
      }
      else if (box[8].innerText === "o") {
        box[6].innerText = "x"
        return 6
      }
    }
    else if (box[6].innerText === "o" && box[4].innerText === "o" && box[2].innerText === "x") {
      if (box[1].innerText === "o") {
        box[7].innerText = "x"
        return 7
      }
      else if (box[3].innerText === "o") {
        box[1].innerText = "x"
        return 1
      }
      else if (box[5].innerText === "o") {
        box[1].innerText = "x"
        return 1
      }
      else if (box[7].innerText === "o") {
        box[1].innerText = "x"
        return 1
      }
      else if (box[8].innerText === "o") {
        box[1].innerText = "x"
        return 1
      }
    }
    else if (box[7].innerText === "o" && box[4].innerText === "o" && box[1].innerText === "x") {
      if (box[2].innerText === "o") {
        box[6].innerText = "x"
        return 6
      }
      else if (box[3].innerText === "o") {
        box[2].innerText = "x"
        return 2
      }
      else if (box[5].innerText === "o") {
        box[2].innerText = "x"
        return 2
      }
      else if (box[6].innerText === "o") {
        box[2].innerText = "x"
        return 2
      }
      else if (box[8].innerText === "o") {
        box[2].innerText = "x"
        return 2
      }
    }
    else if (box[8].innerText === "o" && box[4].innerText === "o" && box[6].innerText === "x") {
      if (box[1].innerText === "o") {
        box[3].innerText = "x"
        return 3
      }
      else if (box[2].innerText === "o") {
        box[3].innerText = "x"
        return 3
      }
      else if (box[3].innerText === "o") {
        box[5].innerText = "x"
        return 5
      }
      else if (box[5].innerText === "o") {
        box[3].innerText = "x"
        return 3
      }
      else if (box[7].innerText === "o") {
        box[3].innerText = "x"
        return 3
      }
    }
  }

  else if (first === 4) {
    if (second === 0) {
      if (box[8].innerText !== "o") {
        box[8].innerText = "x"
        return 8
      }

      else if (box[8].innerText === "o") {
        if (box[1].innerText === "o") {
          box[5].innerText = "x"
          return 5
        }
        else if (box[6].innerText === "o") {
          box[7].innerText = "x"
          return 7
        }
        else if (box[2].innerText === "o") {
          box[5].innerText = "x"
          return 5
        }
      }
    }
    if (second === 1) {
      if (box[7].innerText !== "o") {
        box[7].innerText = "x"
        return 7
      }

      else if (box[7].innerText === "o") {
        if (box[8].innerText === "o") {
          box[6].innerText = "x"
          return 6
        }
        else if (box[6].innerText === "o") {
          box[8].innerText = "x"
          return 8
        }
        else {
          box[8].innerText = "x"
          return 8
        }
      }
    }
    else if (second === 2) {
      if (box[6].innerText !== "o") {
        box[6].innerText = "x"
        return 6
      }

      else if (box[6].innerText === "o") {
        if (box[0].innerText === "o") {
          box[3].innerText = "x"
          return 3
        }
        else if (box[3].innerText === "o") {
          box[0].innerText = "x"
          return 0
        }
        else if (box[8].innerText === "o") {
          box[7].innerText = "x"
          return 7
        }
        else if (box[7].innerText === "o") {
          box[8].innerText = "x"
          return 8
        }
        else {
          box[8].innerText = "x"
          return 8
        }
      }

    }

    else if (second === 3) {
      if (box[5].innerText !== "o") {
        box[5].innerText = "x"
        return 5
      }
      else if (box[5].innerText === "o") {
        if (box[1].innerText === "o") {
          box[2].innerText = "x"
          return 2
        }
        else if (box[2].innerText === "o") {
          box[8].innerText = "x"
          return 8
        }
        else if (box[8].innerText === "o") {
          box[2].innerText = "x"
          return 2
        }
        else if (box[7].innerText === "o") {
          box[8].innerText = "x"
          return 8
        }
        else {
          box[8].innerText = "x"
          return 8
        }
      }

    }

    else if (second === 5) {
      if (box[3].innerText !== "o") {
        box[3].innerText = "x"
        return 3
      }
      else if (box[3].innerText === "o") {
        if (box[0].innerText !== "o") {
          box[0].innerText = "x"
          return 0
        }
        else {
          box[6].innerText = "x"
          return 6
        }
      }

    }

    else if (second === 6) {
      if (box[2].innerText !== "o") {
        box[2].innerText = "x"
        return 2
      }
      else if (box[2].innerText === "o") {
        if (box[0].innerText === "o") {
          box[1].innerText = "x"
          return 1
        }
        else if (box[1].innerText === "o") {
          box[0].innerText = "x"
          return 0
        }
        else if (box[8].innerText === "o") {
          box[5].innerText = "x"
          return 5
        }
        else if (box[5].innerText === "o") {
          box[8].innerText = "x"
          return 8
        }
        else {
          box[8].innerText = "x"
          return 8
        }
      }

    }

    else if (second === 7) {
      if (box[1].innerText !== "o") {
        box[1].innerText = "x"
        return 1
      }
      else if (box[1].innerText === "o") {
        if (box[0].innerText === "o") {
          box[2].innerText = "x"
          return 2
        }
        else if (box[2].innerText === "o") {
          box[0].innerText = "x"
          return 0
        }
        else if (box[3].innerText === "o") {
          box[0].innerText = "x"
          return 0
        }
        else if (box[5].innerText === "o") {
          box[2].innerText = "x"
          return 2
        }
        else if (box[6].innerText === "o") {
          box[0].innerText = "x"
          return 0
        }
        else {
          if (box[2].innerText !== "o") {
            box[2].innerText = "x"
            return 2
          }

        }
      }

    }

    else if (second === 8) {
      if (box[0].innerText !== "o") {
        box[0].innerText = "x"
        return 0
      }
      else if (box[0].innerText === "o") {
        if (box[1].innerText === "o") {
            box[2].innerText = "x"
            return 2
          }
        else if (box[2].innerText === "o") {
            box[1].innerText = "x"
            return 1
          }
        else if (box[3].innerText === "o") {
            box[6].innerText = "x"
            return 6
          }
        // else if (box[5].innerText === "o") {
        //     box[2].innerText = "x"
        //     return 2
        //   }
        else if (box[6].innerText === "o") {
            box[3].innerText = "x"
            return 3
          }
        }
      }
    }
  
}

function forthTurn() {
  let box = document.querySelectorAll('.pieces')
  console.log(second)
  if (first === 0 && second === 1) {
    if (third === 6 && box[3].innerText !== "o") {
      box[3].innerText = "x"
      return 3
    }
    else {
      box[5].innerText = "x"
      return 5
    }
  }

  else if (first === 0 && second === 2) {
    if (third === 7 && box[3].innerText === "o") {
      box[5].innerText = "x"
      return 5
    }
    else if (third === 7 && box[5].innerText === "o") {
      box[3].innerText = "x"
      return 3
    }
    else {
      box[5].innerText = "x"
      return 5
    }
  }

  else if (first === 0 && second === 3) {
    if (third === 3 && box[1].innerText !== "o") {
      box[1].innerText = "x"
      return 1
    }
    else if (third === 3 && box[1].innerText === "o") {
      box[7].innerText = "x"
      return 7
    }
    else if (third === 2 && box[1].innerText !== "o") {
      box[1].innerText = "x"
      return 1
    }
    else if (third === 2 && box[1].innerText === "o") {
      box[7].innerText = "x"
      return 7
    }
    else {
      box[8].innerText = "x"
      return 8
    }
  }

  else if (first === 0 && second === 5) {
    if (third === 1 && box[2].innerText !== "o") {
      box[2].innerText = "x"
      return 2
    }
    else if (third === 2 && box[1].innerText !== "o") {
      box[1].innerText = "x"
      return 1
    }
    else if (third === 7 && box[2].innerText === "o") {
      box[6].innerText = "x"
      return 6
    }
    else if (third === 6 && box[1].innerText === "o") {
      box[7].innerText = "x"
      return 7
    }
    else if (third === 2 && box[1].innerText !== "o") {
      box[1].innerText = "x"
      return 1
    }
    else if (third === 1 && box[2].innerText === "o") {
      box[6].innerText = "x"
      return 6
    }
    else {
      if(box[8].innerText !== "o"){
        box[8].innerText = "x"
        return 8
      }
      else{
        box[2].innerText = "x" 
        return 2
      }
    }
  }

  else if (first === 0 && second === 6) {
    if (third === 5 && box[1].innerText === "o") {
      box[7].innerText = "x"
      return 7
    }
    else if (third === 5 && box[7].innerText === "o") {
      box[1].innerText = "x"
      return 1
    }
    else if (third === 7 && box[2].innerText === "o") {
      box[6].innerText = "x"
      return 6
    }
    else {
      box[7].innerText = "x"
      return 7
    }
  }

  else if (first === 0 && second === 7) {
    if (third === 6 && box[3].innerText !== "o") {
      box[3].innerText = "x"
      return 3
    }
    else if (third === 2 && box[3].innerText === "o") {
      box[5].innerText = "x"
      return 5
    }
    else if (third === 2 && box[5].innerText === "o") {
      box[3].innerText = "x"
      return 3
    }
    else if (third === 3 && box[6].innerText === "o") {
      box[2].innerText = "x"
      return 2
    }
    else if (third === 3 && box[6].innerText === "o") {
      box[2].innerText = "x"
      return 2
    }
    else if (third === 5 && box[6].innerText === "o") {
      box[2].innerText = "x"
      return 2
    }
    else {
      box[8].innerText = "x"
      return 8
    }
  }

//--------------------------------------------------------------------

  if (first === 4 && second === 0) {
    if (third === 5 && box[3].innerText !== "o") {
      box[3].innerText = "x"
      return 3
    }
    else if (third === 5 && box[8].innerText === "o"&& box[6].innerText === "o") {
      box[7].innerText = "x"
      return 7
    }
    else if (third === 7 && box[1].innerText !== "o") {
      box[1].innerText = "x"
      return 1
    }
    else if (third === 7 && box[1].innerText === "o") {
      box[2].innerText = "x"
      return 2
    }
    else {
      box[6].innerText = "x"
      return 6
    }
  }

  else if (first === 4 && second === 1) {
    if (third === 8 && box[6].innerText === "o") {
      box[3].innerText = "x"
      return 3
    }
    else if (third === 8 && box[3].innerText === "o") {
      box[6].innerText = "x"
      return 6
    }
    else if (third === 8 && box[5].innerText === "o") {
      box[6].innerText = "x"
      return 6
    }
    else {
      box[3].innerText = "x"
      return 3
    }
  }

  else if (first === 4 && second === 2) {
    if (third === 7 && box[1].innerText !== "o") {
      box[1].innerText = "x"
      return 1
    }
    else if (third === 7 && box[1].innerText === "o" && box[0].innerText !== "o" ) {
      box[0].innerText = "x"
      return 0
    }
    else if (third === 7 && box[1].innerText === "o" && box[0].innerText === "o" ) {
      box[3].innerText = "x"
      return 3
    }
    else if (third === 3 && box[5].innerText !== "o") {
      box[5].innerText = "x"
      return 5
    }
    else if (third === 3 && box[5].innerText === "o") {
      box[8].innerText = "x"
      return 8
    }
    else if (third === 0 && box[1].innerText !== "o") {
      box[1].innerText = "x"
      return 1
    }
    else if (third === 0 && box[8].innerText !== "o") {
      box[8].innerText = "x"
      return 8
    }
    else if (third === 8 && box[0].innerText !== "o") {
      box[0].innerText = "x"
      return 0
    }
    else if (third === 8 && box[0].innerText === "o") {
      box[3].innerText = "x"
      return 3
    }
    else {
      box[0].innerText = "x"
      return 0
    }
  }

  else if (first === 4 && second === 3) {
    if (third === 8 && box[1].innerText === "o") {
      box[2].innerText = "x"
      return 2
    }
    else if (third === 8 && box[2].innerText === "o") {
      box[1].innerText = "x"
      return 1
    }
    else if (third === 8 && box[7].innerText === "o") {
      box[2].innerText = "x"
      return 2
    }
  }

  else if (first === 4 && second === 5) {
    if (third === 5 && box[1].innerText === "o") {
      box[7].innerText = "x"
      return 7
    }
    else if (third === 5 && box[7].innerText === "o") {
      box[1].innerText = "x"
      return 1
    }
    else if (third === 7 && box[2].innerText === "o") {
      box[6].innerText = "x"
      return 6
    }
    else {
      box[7].innerText = "x"
      return 7
    }
  }

  else if (first === 4 && second === 6) {
    if (third === 1 && box[7].innerText !== "o") {
      box[7].innerText = "x"
      return 7
    }
    else if (third === 1 && box[7].innerText === "o") {
      box[8].innerText = "x"
      return 8
    }
    else if (third === 0 && box[8].innerText !== "o") {
      box[8].innerText = "x"
      return 8
    }
    else if (third === 0 && box[3].innerText !== "o") {
      box[3].innerText = "x"
      return 3
    }
    else if (third === 8 && box[0].innerText !== "o") {
      box[0].innerText = "x"
      return 0
    }
    else if (third === 8 && box[0].innerText === "o") {
      box[1].innerText = "x"
      return 1
    }
    else if (third === 8 && box[1].innerText === "o") {
      box[0].innerText = "x"
      return 0
    }
  }

  else if (first === 4 && second === 7) {
    if (third === 2 && box[6].innerText !== "o") {
      box[6].innerText = "x"
      return 6
    }
    else if (third === 2 && box[6].innerText === "o") {
      box[3].innerText = "x"
      return 3
    }
    else if (third === 0 && box[8].innerText !== "o") {
      box[8].innerText = "x"
      return 8
    }
    else if (third === 0 && box[8].innerText === "o") {
      box[5].innerText = "x"
      return 5
    }
  }

  else if (first === 4 && second === 8) {
    if (third === 1 && box[7].innerText !== "o") {
      box[7].innerText = "x"
      return 7
    }
    else if (third === 1 && box[7].innerText === "o") {
      box[6].innerText = "x"
      return 6
    }
    else if (third === 3 && box[5].innerText !== "o") {
      box[5].innerText = "x"
      return 5
    }
    else if (third === 3 && box[5].innerText === "o") {
      box[2].innerText = "x"
      return 2
    }
  }
}

let counterPlayer = 0
let counterComp = 0
let container = document.querySelector('#gamePlate')

for (let i = 0; i < 9; i++) {
  let piece = document.createElement('div')
  piece.className = 'pieces'
  container.appendChild(piece)
  piece.addEventListener('mouseover', colorChange)
  piece.addEventListener('mouseout', mainColor)
  piece.addEventListener('click', action, true)

}

let playerResult = document.querySelector('#counterPlayer')
playerResult.innerText = 0
let compResult = document.querySelector('#counterComp')
compResult.innerText = 0

let resetButton = document.querySelector('#reset')
resetButton.addEventListener('click', counterReset)
