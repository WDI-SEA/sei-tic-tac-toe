// const square = document.querySelector('div')
const divButtons = [
    document.querySelector('.div-1'),
    document.querySelector('.div-2'),
    document.querySelector('.div-3'),
    document.querySelector('.div-4'),
    document.querySelector('.div-5'),
    document.querySelector('.div-6'),
    document.querySelector('.div-7'),
    document.querySelector('.div-8'),
    document.querySelector('.div-9')
]

let arrayLength = divButtons.length;
for (let i = 0; i < arrayLength; i++) {
    console.log(divButtons[i])
}


// // make the div become a button
// for (let i = 0; i < 9; i++) {
//     square.addEventListener('click', addChoices)
// }

// function addChoices () {
//     square.innerHTML = 'X'
// }






//define the square
//listen for click on square
//identify which square was clicked
//check which player's turn it is
//check if square is available to click
    //warn player
    //reset turn
//place X or O depending on turn
//add square location to player's selected squares
//compare to winning combinations
//announce winner
//or
//toggle the turn
//update turn display