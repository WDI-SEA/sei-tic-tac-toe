let square = document.getElementById('square2')

// make the div become a button
for (let i = 0; i < 9; i++) {
    square.addEventListener('click', addChoices)
}

function addChoices () {
    if (square.innerText == false) {
        square.innerText = 'X'
    } else {
        square.innerText = 'O'
    }
}
