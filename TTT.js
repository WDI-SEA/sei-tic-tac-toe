document.addEventListener('DOMContentLoaded', (e)=>{

  e.preventDefault()

  let alternator = true // Determines which player's turn it is

  let picNumber = null // referenced by the random pic generator

  let tally = [null, null, null, null, null, null, null, null, null] // the array that stores a running tally of which boxes have been clicked on, and by which player. Referenced to determine win conditions.

  function destroyButtons() {
  if (tally[0] ===0 && tally[1] === 0 && tally[2] === 0) {
    if (tally[0] === null) {
     document.getElementById('A1_button').remove()
    }
    if (tally[1] === null) {
     document.getElementById('A2_button').remove()
    }
    if (tally[2] === null) {
     document.getElementById('A3_button').remove()
    }
    if (tally[3] === null) {
     document.getElementById('B1_button').remove()
    }
    if (tally[4] === null) {
     document.getElementById('B2_button').remove()
    }
    if (tally[5] === null) {
     document.getElementById('B3_button').remove()
    }
    if (tally[6] === null) {
     document.getElementById('C1_button').remove()
    }
    if (tally[7] === null) {
     document.getElementById('C2_button').remove()
    }
    if (tally[8] === null) {
     document.getElementById('C3_button').remove()
    }
    document.getElementById('titleText').innerText = "Player 1 Wins!!!"
  }
  else if (tally[0] === 1 && tally[1] === 1 && tally[2] === 1) {
    if (tally[0] === null) {
      document.getElementById('A1_button').remove()
    }
    if (tally[1] === null) {
      document.getElementById('A2_button').remove()
    }
    if (tally[2] === null) {
      document.getElementById('A3_button').remove()
    }
    if (tally[3] === null) {
      document.getElementById('B1_button').remove()
    }
    if (tally[4] === null) {
      document.getElementById('B2_button').remove()
    }
    if (tally[5] === null) {
      document.getElementById('B3_button').remove()
    }
    if (tally[6] === null) {
      document.getElementById('C1_button').remove()
    }
    if (tally[7] === null) {
      document.getElementById('C2_button').remove()
    }
    if (tally[8] === null) {
      document.getElementById('C3_button').remove()
    }
    document.getElementById('titleText').innerText = "Player 2 Wins!!!"
  }
  else if (tally[0] === 0 && tally[3] === 0 && tally[6] === 0) {
    if (tally[0] === null) {
      document.getElementById('A1_button').remove()
    }
    if (tally[1] === null) {
      document.getElementById('A2_button').remove()
    }
    if (tally[2] === null) {
      document.getElementById('A3_button').remove()
    }
    if (tally[3] === null) {
      document.getElementById('B1_button').remove()
    }
    if (tally[4] === null) {
      document.getElementById('B2_button').remove()
    }
    if (tally[5] === null) {
      document.getElementById('B3_button').remove()
    }
    if (tally[6] === null) {
      document.getElementById('C1_button').remove()
    }
    if (tally[7] === null) {
      document.getElementById('C2_button').remove()
    }
    if (tally[8] === null) {
      document.getElementById('C3_button').remove()
    }
    document.getElementById('titleText').innerText = "Player 1 Wins!!!"
  }
  else if (tally[0] === 1 && tally[3] === 1 && tally[6] === 1) {
    if (tally[0] === null) {
      document.getElementById('A1_button').remove()
    }
    if (tally[1] === null) {
      document.getElementById('A2_button').remove()
    }
    if (tally[2] === null) {
      document.getElementById('A3_button').remove()
    }
    if (tally[3] === null) {
      document.getElementById('B1_button').remove()
    }
    if (tally[4] === null) {
      document.getElementById('B2_button').remove()
    }
    if (tally[5] === null) {
      document.getElementById('B3_button').remove()
    }
    if (tally[6] === null) {
      document.getElementById('C1_button').remove()
    }
    if (tally[7] === null) {
      document.getElementById('C2_button').remove()
    }
    if (tally[8] === null) {
      document.getElementById('C3_button').remove()
    }
    document.getElementById('titleText').innerText = "Player 2 Wins!!!"
  }
  else if (tally[1] === 0 && tally[4] === 0 && tally[7] === 0) {
    if (tally[0] === null) {
      document.getElementById('A1_button').remove()
    }
    if (tally[1] === null) {
      document.getElementById('A2_button').remove()
    }
    if (tally[2] === null) {
      document.getElementById('A3_button').remove()
    }
    if (tally[3] === null) {
      document.getElementById('B1_button').remove()
    }
    if (tally[4] === null) {
      document.getElementById('B2_button').remove()
    }
    if (tally[5] === null) {
      document.getElementById('B3_button').remove()
    }
    if (tally[6] === null) {
      document.getElementById('C1_button').remove()
    }
    if (tally[7] === null) {
      document.getElementById('C2_button').remove()
    }
    if (tally[8] === null) {
      document.getElementById('C3_button').remove()
    }
    document.getElementById('titleText').innerText = "Player 1 Wins!!!"
  }
  else if (tally[1] === 1 && tally[4] === 1 && tally[7] === 1) {
    if (tally[0] === null) {
      document.getElementById('A1_button').remove()
    }
    if (tally[1] === null) {
      document.getElementById('A2_button').remove()
    }
    if (tally[2] === null) {
      document.getElementById('A3_button').remove()
    }
    if (tally[3] === null) {
      document.getElementById('B1_button').remove()
    }
    if (tally[4] === null) {
      document.getElementById('B2_button').remove()
    }
    if (tally[5] === null) {
      document.getElementById('B3_button').remove()
    }
    if (tally[6] === null) {
      document.getElementById('C1_button').remove()
    }
    if (tally[7] === null) {
      document.getElementById('C2_button').remove()
    }
    if (tally[8] === null) {
      document.getElementById('C3_button').remove()
    }
    document.getElementById('titleText').innerText = "Player 2 Wins!!!"
  }
  else if (tally[2] === 0 && tally[5] === 0 && tally[8] === 0) {
    if (tally[0] === null) {
      document.getElementById('A1_button').remove()
    }
    if (tally[1] === null) {
      document.getElementById('A2_button').remove()
    }
    if (tally[2] === null) {
      document.getElementById('A3_button').remove()
    }
    if (tally[3] === null) {
      document.getElementById('B1_button').remove()
    }
    if (tally[4] === null) {
      document.getElementById('B2_button').remove()
    }
    if (tally[5] === null) {
      document.getElementById('B3_button').remove()
    }
    if (tally[6] === null) {
      document.getElementById('C1_button').remove()
    }
    if (tally[7] === null) {
      document.getElementById('C2_button').remove()
    }
    if (tally[8] === null) {
      document.getElementById('C3_button').remove()
    }
    document.getElementById('titleText').innerText = "Player 1 Wins!!!"
  }
  else if (tally[2] === 1 && tally[5] === 1 && tally[8] === 1) {
    if (tally[0] === null) {
      document.getElementById('A1_button').remove()
    }
    if (tally[1] === null) {
      document.getElementById('A2_button').remove()
    }
    if (tally[2] === null) {
      document.getElementById('A3_button').remove()
    }
    if (tally[3] === null) {
      document.getElementById('B1_button').remove()
    }
    if (tally[4] === null) {
      document.getElementById('B2_button').remove()
    }
    if (tally[5] === null) {
      document.getElementById('B3_button').remove()
    }
    if (tally[6] === null) {
      document.getElementById('C1_button').remove()
    }
    if (tally[7] === null) {
      document.getElementById('C2_button').remove()
    }
    if (tally[8] === null) {
      document.getElementById('C3_button').remove()
    }
    document.getElementById('titleText').innerText = "Player 2 Wins!!!"
  }
  else if (tally[3] === 0 && tally[4] === 0 && tally[5] === 0) {
    if (tally[0] === null) {
      document.getElementById('A1_button').remove()
    }
    if (tally[1] === null) {
      document.getElementById('A2_button').remove()
    }
    if (tally[2] === null) {
      document.getElementById('A3_button').remove()
    }
    if (tally[3] === null) {
      document.getElementById('B1_button').remove()
    }
    if (tally[4] === null) {
      document.getElementById('B2_button').remove()
    }
    if (tally[5] === null) {
      document.getElementById('B3_button').remove()
    }
    if (tally[6] === null) {
      document.getElementById('C1_button').remove()
    }
    if (tally[7] === null) {
      document.getElementById('C2_button').remove()
    }
    if (tally[8] === null) {
      document.getElementById('C3_button').remove()
    }
    document.getElementById('titleText').innerText = "Player 1 Wins!!!"
  }
  else if (tally[3] === 1 && tally[4] === 1 && tally[5] === 1) {
    if (tally[0] === null) {
      document.getElementById('A1_button').remove()
    }
    if (tally[1] === null) {
      document.getElementById('A2_button').remove()
    }
    if (tally[2] === null) {
      document.getElementById('A3_button').remove()
    }
    if (tally[3] === null) {
      document.getElementById('B1_button').remove()
    }
    if (tally[4] === null) {
      document.getElementById('B2_button').remove()
    }
    if (tally[5] === null) {
      document.getElementById('B3_button').remove()
    }
    if (tally[6] === null) {
      document.getElementById('C1_button').remove()
    }
    if (tally[7] === null) {
      document.getElementById('C2_button').remove()
    }
    if (tally[8] === null) {
      document.getElementById('C3_button').remove()
    }
    document.getElementById('titleText').innerText = "Player 2 Wins!!!"
  }
  else if (tally[6] === 0 && tally[7] === 0 && tally[8] === 0) {
    if (tally[0] === null) {
      document.getElementById('A1_button').remove()
    }
    if (tally[1] === null) {
      document.getElementById('A2_button').remove()
    }
    if (tally[2] === null) {
      document.getElementById('A3_button').remove()
    }
    if (tally[3] === null) {
      document.getElementById('B1_button').remove()
    }
    if (tally[4] === null) {
      document.getElementById('B2_button').remove()
    }
    if (tally[5] === null) {
      document.getElementById('B3_button').remove()
    }
    if (tally[6] === null) {
      document.getElementById('C1_button').remove()
    }
    if (tally[7] === null) {
      document.getElementById('C2_button').remove()
    }
    if (tally[8] === null) {
      document.getElementById('C3_button').remove()
    }
    document.getElementById('titleText').innerText = "Player 1 Wins!!!"
  }
  else if (tally[6] === 1 && tally[7] === 1 && tally[8] === 1) {
    if (tally[0] === null) {
      document.getElementById('A1_button').remove()
    }
    if (tally[1] === null) {
      document.getElementById('A2_button').remove()
    }
    if (tally[2] === null) {
      document.getElementById('A3_button').remove()
    }
    if (tally[3] === null) {
      document.getElementById('B1_button').remove()
    }
    if (tally[4] === null) {
      document.getElementById('B2_button').remove()
    }
    if (tally[5] === null) {
      document.getElementById('B3_button').remove()
    }
    if (tally[6] === null) {
      document.getElementById('C1_button').remove()
    }
    if (tally[7] === null) {
      document.getElementById('C2_button').remove()
    }
    if (tally[8] === null) {
      document.getElementById('C3_button').remove()
    }
    document.getElementById('titleText').innerText = "Player 2 Wins!!!"
  }
  else if (tally[0] === 0 && tally[4] === 0 && tally[8] === 0) {
    if (tally[0] === null) {
      document.getElementById('A1_button').remove()
    }
    if (tally[1] === null) {
      document.getElementById('A2_button').remove()
    }
    if (tally[2] === null) {
      document.getElementById('A3_button').remove()
    }
    if (tally[3] === null) {
      document.getElementById('B1_button').remove()
    }
    if (tally[4] === null) {
      document.getElementById('B2_button').remove()
    }
    if (tally[5] === null) {
      document.getElementById('B3_button').remove()
    }
    if (tally[6] === null) {
      document.getElementById('C1_button').remove()
    }
    if (tally[7] === null) {
      document.getElementById('C2_button').remove()
    }
    if (tally[8] === null) {
      document.getElementById('C3_button').remove()
    }
    document.getElementById('titleText').innerText = "Player 1 Wins!!!"
  }
  else if (tally[0] === 1 && tally[4] === 1 && tally[8] === 1) {
    if (tally[0] === null) {
      document.getElementById('A1_button').remove()
    }
    if (tally[1] === null) {
      document.getElementById('A2_button').remove()
    }
    if (tally[2] === null) {
      document.getElementById('A3_button').remove()
    }
    if (tally[3] === null) {
      document.getElementById('B1_button').remove()
    }
    if (tally[4] === null) {
      document.getElementById('B2_button').remove()
    }
    if (tally[5] === null) {
      document.getElementById('B3_button').remove()
    }
    if (tally[6] === null) {
      document.getElementById('C1_button').remove()
    }
    if (tally[7] === null) {
      document.getElementById('C2_button').remove()
    }
    if (tally[8] === null) {
      document.getElementById('C3_button').remove()
    }
    document.getElementById('titleText').innerText = "Player 2 Wins!!!"
  }
  else if (tally[2] === 0 && tally[4] === 0 && tally[6] === 0) {
    if (tally[0] === null) {
      document.getElementById('A1_button').remove()
    }
    if (tally[1] === null) {
      document.getElementById('A2_button').remove()
    }
    if (tally[2] === null) {
      document.getElementById('A3_button').remove()
    }
    if (tally[3] === null) {
      document.getElementById('B1_button').remove()
    }
    if (tally[4] === null) {
      document.getElementById('B2_button').remove()
    }
    if (tally[5] === null) {
      document.getElementById('B3_button').remove()
    }
    if (tally[6] === null) {
      document.getElementById('C1_button').remove()
    }
    if (tally[7] === null) {
      document.getElementById('C2_button').remove()
    }
    if (tally[8] === null) {
      document.getElementById('C3_button').remove()
    }
    document.getElementById('titleText').innerText = "Player 1 Wins!!!"
  }
  else if (tally[2] === 1 && tally[4] === 1 && tally[6] === 1) {
    if (tally[0] === null) {
      document.getElementById('A1_button').remove()
    }
    if (tally[1] === null) {
      document.getElementById('A2_button').remove()
    }
    if (tally[2] === null) {
      document.getElementById('A3_button').remove()
    }
    if (tally[3] === null) {
      document.getElementById('B1_button').remove()
    }
    if (tally[4] === null) {
      document.getElementById('B2_button').remove()
    }
    if (tally[5] === null) {
      document.getElementById('B3_button').remove()
    }
    if (tally[6] === null) {
      document.getElementById('C1_button').remove()
    }
    if (tally[7] === null) {
      document.getElementById('C2_button').remove()
    }
    if (tally[8] === null) {
      document.getElementById('C3_button').remove()
    }
    document.getElementById('titleText').innerText = "Player 2 Wins!!!"
  }
  } // Scans for win conditions, deactivates all non-selected game boxes, changes title text to display game result

  function generateNumber() {
  let randomNumber = Math.floor(Math.random() * 8)
  picNumber = randomNumber
  } // generates a random number and stores it in 'picNumber'

  function changePic() {
  if (picNumber <= 7 && picNumber > 6) {
    document.getElementById('picBox').style.backgroundImage = "url('JPG/Approval_1.jpg')"
    document.getElementById('leftBar').innerText = "Heeeeyyyyyyyy, nice choice!"
  } else if (picNumber <= 6 && picNumber > 5) {
    document.getElementById('picBox').style.backgroundImage = "url('JPG/Disapproval_2.jpg')"
    document.getElementById('leftBar').innerText = "Pfffffffffffffft"
  } else if (picNumber <= 5 && picNumber > 4) {
    document.getElementById('picBox').style.backgroundImage = "url('JPG/Confused_3.jpg')"
    document.getElementById('leftBar').innerText = "Hmmmmmmmmmmmmmmmmmm"
  } else if (picNumber <= 4 && picNumber > 3) {
    document.getElementById('picBox').style.backgroundImage = "url('JPG/Surprised_4.jpg')"
    document.getElementById('leftBar').innerText = "Wait, what?"
  } else if (picNumber <= 3 && picNumber > 2) {
    document.getElementById('picBox').style.backgroundImage = "url('JPG/Convinced_5.jpg')"
    document.getElementById('leftBar').innerText = "Okay, okay. This is getting...interesting."
  } else if (picNumber <= 2 && picNumber > 1) {
    document.getElementById('picBox').style.backgroundImage = "url('JPG/Happy_6.jpg')"
    document.getElementById('leftBar').innerText = "Nice."
  } else if (picNumber <= 1 && picNumber > 0) {
    document.getElementById('picBox').style.backgroundImage = "url('JPG/Laughing_7.jpg')"
    document.getElementById('leftBar').innerText = "No comment. Don't mind me."
  } else {
    document.getElementById('picBox').style.backgroundImage = "url('JPG/Wondering_8.jpg')"
    document.getElementById('leftBar').innerText = "You sure about that, bud?"
  }
  } // uses 'picNumber' to determine which pic of Jerry is displayed in #picBox; changes accompanying text.

  function changeTurnText() {
  if (alternator === true) {
    document.getElementById('turnText').innerText = "Player 1 Turn"
  } else if (alternator === false) {
    document.getElementById('turnText').innerText = "Player 2 Turn"
  }
  } // references 'alternator' to determine which player's turn is displayed in text 

  function scanForTie() {
  if (tally[0] !== null && tally[1] !== null && tally[2] !== null && tally[3] !== null && tally[4] !== null && tally[5] !== null && tally[6] !== null && tally[7] !== null && tally[8] !== null) {
    document.getElementById('titleText').innerText = "It's a Tie!!! You're Both Losers!!!"
  }
  } //scans for tie conditions, prints tie message if conditions met

/* Each event listener below corresponds to a specific button on the game grid,
one for each of the nine (9) buttons. When a [previously unclicked]
button is clicked, its respective listener does the following:

1. Changes the box's background image to X or O, depending on who clicked it
2. Changes player turn
3. Changes the box's value in the 'tally' array
4. Removes the button, so it cannot be clicked again
5. Calls 'scanForTie'
6. Calls 'destroyButtons'
7. Calls 'generateNumber'
8. Calls 'changePic'
9. Calls 'changeTurnText'
*/

  document.getElementById('A1_button').addEventListener('click', (e) => {
  
  e.preventDefault()
  
  let A1 = document.getElementById('A1')
  
  if (alternator === true) {
    A1.style.backgroundImage = "url('JPG/X.jpg')"
    alternator = false
    tally[0] = 0
  } else if (alternator === false) {
    A1.style.backgroundImage = "url('JPG/O.jpg')"
    alternator = true
    tally[0] = 1
  }
  
  document.getElementById('A1_button').remove()

  scanForTie()
  
  destroyButtons()

  generateNumber()

  changePic()

  changeTurnText()
  
  })

  document.getElementById('A2_button').addEventListener('click', (e) => {
  
  e.preventDefault()
  
  let A2 = document.getElementById('A2')
  
  if (alternator === true) {
    A2.style.backgroundImage = "url('JPG/X.jpg')"
    alternator = false
    tally[1] = 0
  } else if (alternator === false) {
    A2.style.backgroundImage = "url('JPG/O.jpg')"
    alternator = true
    tally[1] = 1
  }
  
  document.getElementById('A2_button').remove()

  scanForTie()
  
  destroyButtons()

  generateNumber()

  changePic()

  changeTurnText()
  
  })

  document.getElementById('A3_button').addEventListener('click', (e) => {
  
  e.preventDefault()
  
  let A3 = document.getElementById('A3')
  
  if (alternator === true) {
    A3.style.backgroundImage = "url('JPG/X.jpg')"
    alternator = false
    tally[2] = 0
  } else if (alternator === false) {
    A3.style.backgroundImage = "url('JPG/O.jpg')"
    alternator = true
    tally[2] = 1
  }
  
  document.getElementById('A3_button').remove()

  scanForTie()
  
  destroyButtons()

  generateNumber()

  changePic()

  changeTurnText()
  
  })

  document.getElementById('B1_button').addEventListener('click', (e) => {
  
  e.preventDefault()
  
  let B1 = document.getElementById('B1')
  
  if (alternator === true) {
    B1.style.backgroundImage = "url('JPG/X.jpg')"
    alternator = false
    tally[3] = 0
  } else if (alternator === false) {
    B1.style.backgroundImage = "url('JPG/O.jpg')"
    alternator = true
    tally[3] = 1
  }
  
  document.getElementById('B1_button').remove()

  scanForTie()
  
  destroyButtons()

  generateNumber()

  changePic()

  changeTurnText()
  
  })

  document.getElementById('B2_button').addEventListener('click', (e) => {
  
  e.preventDefault()
  
  let B2 = document.getElementById('B2')
  
  if (alternator === true) {
    B2.style.backgroundImage = "url('JPG/X.jpg')"
    alternator = false
    tally[4] = 0
  } else if (alternator === false) {
    B2.style.backgroundImage = "url('JPG/O.jpg')"
    alternator = true
    tally[4] = 1
  }
  
  document.getElementById('B2_button').remove()

  scanForTie()
  
  destroyButtons()

  generateNumber()

  changePic()

  changeTurnText()
  
  })

  document.getElementById('B3_button').addEventListener('click', (e) => {
  
  e.preventDefault()
  
  let B3 = document.getElementById('B3')
  
  if (alternator === true) {
    B3.style.backgroundImage = "url('JPG/X.jpg')"
    alternator = false
    tally[5] = 0
  } else if (alternator === false) {
    B3.style.backgroundImage = "url('JPG/O.jpg')"
    alternator = true
    tally[5] = 1
  }
  
  document.getElementById('B3_button').remove()

  scanForTie()
  
  destroyButtons()

  generateNumber()

  changePic()

  changeTurnText()
  
  })

  document.getElementById('C1_button').addEventListener('click', (e) => {
  
  e.preventDefault()
  
  let C1 = document.getElementById('C1')
  
  if (alternator === true) {
    C1.style.backgroundImage = "url('JPG/X.jpg')"
    alternator = false
    tally[6] = 0
  } else if (alternator === false) {
    C1.style.backgroundImage = "url('JPG/O.jpg')"
    alternator = true
    tally[6] = 1
  }
  
  document.getElementById('C1_button').remove()

  scanForTie()
  
  destroyButtons()

  generateNumber()

  changePic()

  changeTurnText()
  
  })

  document.getElementById('C2_button').addEventListener('click', (e) => {
  
  e.preventDefault()
  
  let C2 = document.getElementById('C2')
  
  if (alternator === true) {
    C2.style.backgroundImage = "url('JPG/X.jpg')"
    alternator = false
    tally[7] = 0
  } else if (alternator === false) {
    C2.style.backgroundImage = "url('JPG/O.jpg')"
    alternator = true
    tally[7] = 1
  }
  
  document.getElementById('C2_button').remove()

  scanForTie()
  
  destroyButtons()

  generateNumber()

  changePic()

  changeTurnText()
  
  })

  document.getElementById('C3_button').addEventListener('click', (e) => {
  
  e.preventDefault()
  
  let C3 = document.getElementById('C3')
  
  if (alternator === true) {
    C3.style.backgroundImage = "url('JPG/X.jpg')"
    alternator = false
    tally[8] = 0
  } else if (alternator === false) {
    C3.style.backgroundImage = "url('JPG/O.jpg')"
    alternator = true
    tally[8] = 1
  }
  
  document.getElementById('C3_button').remove()

  scanForTie()
  
  destroyButtons()

  generateNumber()

  changePic()

  changeTurnText()
  
  })

})

