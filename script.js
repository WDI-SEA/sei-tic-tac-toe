document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.box')
    const playerDisplay = document.querySelector('#player')

    let currentPlayer = 'X'


    squares.forEach(square => {
        square.addEventListener('click', clickOutcome)
    })

    function clickOutcome(e) {
        const squareArray = Array.from(squares)
        const index = squareArray.indexOf(e.target)
        playerDisplay.innerText = currentPlayer

        if(currentPlayer === 'X') {
            squares[index].classList.add('X')
            console.log(index)
            currentPlayer = 'O'
        } else {
            squares[index].classList.add('O')
            currentPlayer = 'X'
        }
    }



})
