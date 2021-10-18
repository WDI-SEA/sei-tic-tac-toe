//On document load, display the message, "First turn: Player X, choose your poison."
document.addEventListener('DOMContentLoaded', () => {
    const displayTurn = document.createElement('p')
    displayTurn.id = 'firstTurnIsX'
    document.body.appendChild(displayTurn);
    document.getElementById('firstTurnIsX').textContent = "First turn: Player X, choose your poison."
})
//Start Button will Clear the Board
//Get the Button
const startOverBtn = document.getElementById('startOver');
//Select all boxes
const selectAllBoxes = document.getElementsByClassName('div');
//Add an event listener to clear box contents - because there are multiple boxes, use a for loop the length of number of boxes in an anonymous function
startOverBtn.addEventListener('click', () => {
    for(let i = 0; i < selectAllBoxes.length; i++) {
        selectAllBoxes[i].innerHTML = '';
        selectAllBoxes[i].style.backgroundColor = 'goldenrod'
    }
    document.getElementById('firstTurnIsX').textContent = "First turn: Player X, choose your poison."
})
//In order to allow only 1 click per box, we need a condition. Only allow an X or O to be displayed there if there is no X or O already there.
//If box is already "checked" alert user to try an empty box, if box is not "checked", allow "check" with respective Character dependent on moveTracker
//Needs to happen when any one of the boxes is clicked

//Winning Conditions using an array to check against
//Create a variable to keep track of moves
const moveTracker = 'X';
console.log(selectAllBoxes)
//add an event target for each individual box
for (let i = 0; i < selectAllBoxes.length; i++) {
        selectAllBoxes[i].addEventListener('click', () => {
            if (selectAllBoxes[i].innerText === "X" || selectAllBoxes[i].innerText === "O") {
                alert('No can do! Choose an empty box!')
            } else {
            selectAllBoxes[i].innerHTML = 'X'
            selectAllBoxes[i].style.backgroundColor = 'lightblue'
            }
        }, {once: true})
}







