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
        selectAllBoxes[i].style.backgroundColor = 'goldenrod'
    }
    document.getElementById('firstTurnIsX').textContent = "First turn: Player X, choose your poison."
    location.reload();
})

//Winning Conditions using an array to check against //need to create an array that stores each player's move and then compares it to the win con array.
    let box1 = document.getElementById('box-1')
    let box2 = document.getElementById('box-2')
    let box3 = document.getElementById('box-3')
    let box4 = document.getElementById('box-4')
    let box5 = document.getElementById('box-5')
    let box6 = document.getElementById('box-6')
    let box7 = document.getElementById('box-7')
    let box8 = document.getElementById('box-8')
    let box9 = document.getElementById('box-9')

    let newArray = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

    function tieGameFunc() {
        return newArray.every((box) => {
        return box.classList.contains('X') || box.classList.contains('O');
        });
        }

const checkWin = () => {    
    if (box1.innerText === box2.innerText && box1.innerText === box3.innerText) {
        document.getElementById('firstTurnIsX').textContent = `Player ${box1} Wins!`
    } else if (box4.innerText === box5.innerText && box4.innerText === box6.innerText) {
        document.getElementById('firstTurnIsX').textContent = `Player ${box4} Wins!`
    } else if (box7.innerText === box8.innerText && box7.innerText === box9.innerText) {
        document.getElementById('firstTurnIsX').textContent = `Player ${box7} Wins!`
    } else if (box1.innerText === box5.innerText && box1.innerText === box9.innerText) {
        document.getElementById('firstTurnIsX').textContent = `Player ${box1} Wins!`
    } else if (box3.innerText === box5.innerText && box3.innerText === box7.innerText) {
        document.getElementById('firstTurnIsX').textContent = `Player ${box3} Wins!`
    } else if (box1.innerText === box4.innerText && box1.innerText === box7.innerText) {
        document.getElementById('firstTurnIsX').textContent = `Player ${box1} Wins!`
    } else if (box2.innerText === box5.innerText && box2.innerText === box8.innerText) {
        document.getElementById('firstTurnIsX').textContent = `Player ${box2} Wins!`
    } else if (box3.innerText === box6.innerText && box3.innerText === box9.innerText) {
        document.getElementById('firstTurnIsX').textContent = `Player ${box3} Wins!`
    } else if (tieGameFunc()) {
        document.getElementById('firstTurnIsX').textContent = "It's a tie game!"
    }
    
    // if (document.getElementById('firstTurnIsX').textContent === `Player X Wins!` || document.getElementById('firstTurnIsX').textContent === `Player O Wins!`) {
    //     for (let i = 1; i < 10; i++) {
    //         if (document.getElementById(`box-${i}`).innerText === '') {
    //             document.getElementById(`box-${i}`).innerText === ' '
    //         }
    //     }
    // }
}



//Create variables to track current player move
const xTurn = 'X';
const oTurn = 'O';
let currentTurn = xTurn;

//add an event target for each individual box
for (let i = 0; i < selectAllBoxes.length; i++) {
        selectAllBoxes[i].addEventListener('click', () => {
            if (currentTurn === xTurn) {
                
                currentTurn = oTurn
                selectAllBoxes[i].textContent = xTurn;
                // console.log("This is first x box clicked: ", selectAllBoxes[i].id, selectAllBoxes[i].textContent)
            
                selectAllBoxes[i].style.backgroundColor = 'lightblue'
                selectAllBoxes[i].classList.add('X')
                document.getElementById('firstTurnIsX').textContent = "Player O, you're up!"
                //Creates an array that pushes the id of the box clicked to an array to be checked against the win condition array (winArray line 27)
                checkWin()
            } else {
                
                currentTurn = xTurn;
                selectAllBoxes[i].textContent = oTurn;
                selectAllBoxes[i].style.backgroundColor = 'red'
                selectAllBoxes[i].classList.add('O')
                document.getElementById('firstTurnIsX').textContent = "Player X, choose your poison!"
                checkWin()
            }
            
        }, {once: true})
}


