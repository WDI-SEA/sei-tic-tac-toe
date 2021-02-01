document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.box');

    squares.forEach(square => {
        square.addEventListener('click', clickOutcome);
    });

    function clickOutcome() {
        alert('clicked')
    }
})