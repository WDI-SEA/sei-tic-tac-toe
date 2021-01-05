console.log("hello")


// const squares = ['nw', 'n', 'ne', 'w', 'c', 'e', 'sw', 's', 'se'];
const victoryConditions = [
    ['nw', 'n', 'ne'],
    ['nw', 'c', 'se'],
    ['nw', 'w', 'sw'],
    ['n', 'c', 's'],
    ['ne', 'e', 'se'],
    ['ne', 'c', 'sw'],
    ['w', 'c', 'e'],
    ['sw', 's', 'se']
];

document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.gameboard')
    const playerDisplay = document.querySelector('#playerDisplay')

    let currentPlayer = 'Orcas'

    squares.forEach(square => {
        square.addEventListener('click', clickOutcome)
    })
    function clickOutcome(e) {
        const squareArray = Array.from(squares)
        const index = squareArray.indexOf(e.target)
        playerDisplay.innnerHTML = currentPlayer
        console.log(index)

        if(currentPlayer === 'Orcas') {
            squares[index].classList.add(Orcas)
            currentPlayer = 'Gators'
        } else {
            squares[index].classList.add('Gators')
            currentPlayer = 'Orcas'
        }
    }
})




































// document.getElementById("start").addEventListener("click", startGame());


// function startGame() {

//     for (let i = 0; i < squares.length ; i++) {
//         document.getElementById(squares[i]).addEventListener("click", (e) => {
//             clickSquare(e)
//         })
        
//     };
// }

// function clickSquare(e) {
//     // console.log(e.target.getAttribute('clickedG'))
//     clickedO = true; 
//     clickedG = true;
//     if (clickedO || clickedG) {
//         // visibility = visible;
//     }
// };
// console.log("hello")

// //i need a counter to track which turn it is
// counter = 1;

// //player 1 is always odd numbers

// //player 2 is always even numbers

// //on each turn, a click changes the hidden to visible by if/else statement because on every 
// //image the initial state is false, if clicked it returns true, and if true then visibility = visible

// //starting on turn five, check for win conditions

// //if no win conditions are achieved by turn nine, then tie is achieved

// //if win condition is achieved, then display winner tile and event listeners are removed

// //if tie condition is achieved, then display tie tile and event listeners are removed

// //if reset is clicked then the board resets