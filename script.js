// logic
let turn = 0
let turnButton = document.getElementById('turnButton')
let clearButton = document.getElementById('clearButton')
let numSpan = document.getElementById('turnNumSpan')

turnButton.addEventListener('click', function() {
    console.log('hello')
    turn++
    numSpan.innerText = turn
    if(turn === 8) [
        turnButton.innerText = "End Game"
    ]
    if(turn > 9) {
        alert('game over')
    }
})




// if clicked
let divs = document.querySelectorAll(".grid-item")
const plotClick = e => {
    // e.currentTarget.classList.toggle('clicked')
    if (turn % 2 === 0) {
        e.currentTarget.innerText = "X"
    } else {
        e.currentTarget.innerText = "O"
    }

}
divs.forEach(div => {
    div.addEventListener('click', plotClick)
})

// if win
// let win = true
// function winScreen() {
//     if(win === true) {
//         document.getElementById('a1').toggle('winner')
//     }
// }


// winScreen()