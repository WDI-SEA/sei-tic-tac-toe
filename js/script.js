document.addEventListener('DOMContentLoaded', () => {
    var squares = document.querySelectorAll('.box')
    var playerDisplay = document.querySelector('#player')

    let currentPlayer = 'playerX'

    squares.forEach(square => {
        square.addEventListener('click', clickOutcome)
    })

    function clickOutcome(e) {
        var squareArray = Array.from(squares)
        var index = squareArray.indexOf(e.target)
        playerDisplay.innerText = currentPlayer

        if(currentPlayer === 'playerX') {
            squares[index].classList.add('playerX')
            curentPlayer = 'playerO'
        } else {
            squares[index].classlist.add('playerO')
            currentPlayer = 'playerX'
        }
    }
})