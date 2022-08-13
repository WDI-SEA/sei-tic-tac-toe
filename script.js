// win conditions

function winCheck(playerInput) {
    let plotA1 = document.getElementById('a1').innerText
    let plotA2 = document.getElementById('a2').innerText
    let plotA3 = document.getElementById('a3').innerText
    let plotB1 = document.getElementById('b1').innerText
    let plotB2 = document.getElementById('b2').innerText
    let plotB3 = document.getElementById('b3').innerText
    let plotC1 = document.getElementById('c1').innerText
    let plotC2 = document.getElementById('c2').innerText
    let plotC3 = document.getElementById('c3').innerText
    if(plotA1 === playerInput && plotA2 === playerInput && plotA3 === playerInput) {
        console.log('you win.')
    } else if (plotB1 === playerInput && plotB2 === playerInput && plotB3 === playerInput) {
        console.log('you win.')
    } else if (plotC1 === playerInput && plotC2 === playerInput && plotC3 === playerInput) {
        console.log('you win.')
    } else if (plotA1 === playerInput && plotB2 === playerInput && plotC3 === playerInput) {
        console.log('you win.')
    } else if (plotA3 === playerInput && plotB2 === playerInput && plotC1 === playerInput) {
        console.log('you win.')
    }

}



// logic





let turn = 0
// let turnButton = document.getElementById('turnButton')
let clearButton = document.getElementById('clearButton')
let numSpan = document.getElementById('turnNumSpan')


// if clicked
let divs = document.querySelectorAll(".grid-item")
const plotClick = e => {
    // e.currentTarget.classList.toggle('clicked')
    if (turn % 2 === 0) {
        let playerInput = 'X'
        e.currentTarget.innerText = "X"
        e.currentTarget.setAttribute('disabled','')
        winCheck(playerInput)
        turn++    
    } else {
        let playerInput = 'O'
        e.currentTarget.innerText = "O"
        e.currentTarget.setAttribute('disabled','')
        winCheck(playerInput)
        turn++
    }
    numSpan.innerText = turn
    
    // if(turn === 8) [
    //     turnButton.innerText = "End Game"
    // ]
    if(turn === 9) {
        setTimeout(function() {
            alert('game over')
        }, 1000)
        
    }
    
}
divs.forEach(div => {
    div.addEventListener('click', plotClick)
})

// clear button functionality
clearButton.addEventListener('click', function() {
    divs.forEach(div => {
        div.innerText = " "
        div.removeAttribute('disabled', '')
        turn = 0
        numSpan.innerText = turn
    })
})

// if win
// let win = true
// function winScreen() {
//     if(win === true) {
//         document.getElementById('a1').toggle('winner')
//     }
// }


// winScreen()