// const winConditions = [
//     ['a1', 'a2', 'a3'],
//     ['b1', 'b2', 'b3'],
//     ['c1', 'c2', 'c3'],
//     ['a1', 'b1', 'c1'],
//     ['a2', 'b2', 'c2'],
//     ['a3', 'b3', 'c3'],
//     ['a1', 'b2', 'c3'],
//     ['a3', 'b2', 'c1']
// ]

let isCirclesTurn = false;
let isGameOver = false;
// defined all squares
const squares = document.querySelectorAll("#grid-child");
document.getElementById("current-player").innerHTML = "Circle's turn"
// console.log(squares);

const switchPlayer = () => {
    isCirclesTurn = !isCirclesTurn;
    document.getElementById("current-player").innerHTML
    if (isCirclesTurn) {
        document.getElementById("current-player").innerHTML = "X's turn"
    } else {
        document.getElementById("current-player").innerHTML = "Circle's turn"
    }
}


const cellClicked = (index) => {
    if (isGameOver) { 
        return;
    }

    

    if (squares[index].innerHTML === ""){
        switchPlayer()

    } else {
        alert("CLICK EMPTY SQUARE");
        return;
    }

    if (isCirclesTurn) {
        squares[index].innerHTML = "O";
    }
    if (!isCirclesTurn) {
        squares[index].innerHTML = "X";
    }

    checkForWin();

}

const checkForWin = () => {
    const possibleVictories = [
        [0, 1, 2], 
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [2, 4, 6],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8]
    ]
    for (let i = 0; i < possibleVictories.length; i++) {
        const validCharacters = ["X", "O"];
        let firstCharacter = squares[possibleVictories[i][0]].innerHTML;
        if (firstCharacter === squares[possibleVictories[i][1]].innerHTML 
            && 
            firstCharacter === squares[possibleVictories[i][2]].innerHTML
            &&
            validCharacters.includes(firstCharacter)) {
            //game won!
            isGameOver = true;
            console.log(isCirclesTurn ? 'Circle won' : 'x won')
             if (isCirclesTurn) {
                document.getElementById("winner").innerHTML =  'Circle Won'
            } 
            if (!isCirclesTurn) {
                document.getElementById("winner").innerHTML =  'X Won'
            }
            // isCirclesTurn ? 'Circle won' : 'x won'
        } 
    }
    if (isBoardFull() && !isGameOver) {
         isGameOver = true;
         document.getElementById("winner").innerHTML =  'Its a tie!'
    } 
   
            

}

const isBoardFull = () => {
    for(let i=0; i<squares.length; i++) {
        console.log(squares[i].innerHTML)
        if (squares[i].innerHTML === "") {
            return false;
        }
    }
    return true;
}

//click
for(let i=0; i<squares.length; i++){
    squares[i].addEventListener("click", () => {
        cellClicked(i)
    })
}

document.getElementById("clear-button").addEventListener("click", () => {
    document.getElementById("winner").innerHTML = "";
    document.getElementById("current-player").innerHTML = "O's turn";
    isGameOver = false;
    isCirclesTurn = false;
    for (let i=0; i<squares.length; i++) {
        squares[i].innerHTML = "";
    }
})

