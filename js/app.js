            // creating shotcut 
const cells = document.querySelectorAll(".cell");
const cellTextAll = document.querySelectorAll(".celltext");
const player = {
        x: "X",
        o: "O"
};

const  cellTextContent = document.querySelectorAll(".celltext").textContent;
const messageOut = document.querySelector("#message");
const classNames = {
        cell: "cell",
        cellText: "celltext"
};

let cValues = ["", "", "", "", "", "", "", "", ""];
let nextTurn = true;
let turnsLeft = 9;
const winningPattern = [
        [0, 1, 2], // 0
        [3, 4, 5], // 1
        [6, 7, 8], // 2
        [0, 3, 6], // 3
        [1, 4, 7], // 4
        [2, 5, 8], // 5
        [0, 4, 8], // 6
        [2, 4, 6] // 7
];
const dependPattern = [
        [0, 1], //0, 2  // depend cell number and variable number
        [1, 2], //1, 0
        [3, 4], //2, 5
        [4, 5], //3, 3
        [6, 7], //4, 8
        [7, 8], //5, 9
        [0, 3], //6, 6
        [3, 6], //7, 0
        [1, 4], //8, 7
        [4, 7], //9, 1
        [2, 5], //10, 8
        [5, 8], //11, 2
        [0, 4], //12, 8
        [4, 8], //13, 0
        [2, 4], //14, 6
        [4, 6], //15, 2
        [0, 2], //16, 1
        [3, 5], //17, 4
        [6, 8], //18, 7
        [0, 6], //19, 3
        [1, 7], //20, 4
        [2, 8], //21, 5
        [0, 8], //22, 4
        [2, 6], //23, 4
];

// game options
function gameSelector() => {
    if (document.getElementById("human").checked && document.getElementById("StartO").checked) {
        let gameActive = true;
        let currentPlayer = "O";
    }
    else if (document.getElementById("human").checked && document.getElementById("StartX").checked) {
        let gameActive = true;
        let currentPlayer = "X";
        computerPlacement();
    }
    else if (document.getElementById("comput").checked && document.getElementById("StartO").checked) {
        let gameActive = true;
        let currentPlayer = "O";
    }
    else if (document.getElementById("comput").checked && document.getElementById("StartX").checked) {
        let gameActive = true;
        let currentPlayer = "X";
        computerPlacement();
    }
    else {
        messageOut.innerHTML = "Choose your game type"
    }
        
};


function humanPlacement () => {

};

//     // prevents refresh on buttons
//     document.querySelector(".startbtn").addEventListener("click", (e) => {
//         e.preventDefault();

//         // if condition1 game selectd
//         if (document.getElementById("human").checked && document.getElementById("StartO").checked) {
            
//             let gameActive = true;
//             var currentPlayer = "O";

//             // checks for win
//             const checkWin = (chosenIndex) => {
//                 const winningRanges = winningPattern[chosenIndex];
                
//                 for (let i = 0; i < winningRanges; i++) {
//                     const currentEntry = cValues[e.target.value];
//                     const winOption1 = cValues[winningPattern[i][0]];
//                     const winOption2 = cValues[winningPattern[i][1]];
//                     const winOption3 = cValues[winningPattern[i][2]];

//                     if (winOption1 === winOption2 && winOption2 === winOption3) {
//                        winningPlayer = currentEntry;
//                        return gameActive=false;
//                     };
//                 };

//                 if (turnsLeft === 0) {
//                     winningPlayer = "draw";
//                     return gameActive = false;
//                 }
                
//                 return true;
//             };
//             const winnerWrite = () => {
//                 if (winningPlayer === "draw") {
//                     messageOut.innerHTML = "Draw Game";
//                 } else {
//                     messageOut.innerHTML = `${winningPlayer} wins!`;
//                 };
//             };

//             cells.forEach((a, i) => {

//                 a.addEventListener("click", () => {
                    
//                     // puts different text each click
//                     if (!cValues[i]) {
//                         cValues[i] = nextTurn ? player.o : player.x;
//                         nextTurn = !nextTurn;
//                         turnsLeft--;

//                         if (winningPlayer) {
//                             winnerWrite();
//                         }
                        
//                         const fillIn = a.querySelector(`.${classNames.cellText}`);
//                         fillIn.innerHTML = cValues[i];
                        
//                     };
                    

//                 });
//             }); 

//             winnerWrite();
//         };
        
//     });

    
// });
    // list of functions
    // start game
    //     check game status 
    //     depend and fill
    //     win or draw (o, x)
    //     checking the box
    //     filling the box
    //     algorithms
    //         if vsHuman, -> humanO or humanX -> check for win -> if win or draw, reset
    //         else 
    //         compuO -> fill cell5 -> wait for event -> check depend -> fill -> if win or draw, reset  
    //         compuX -> wait for event -> check depend -> fill -> if win or draw, reset
    //     output text if win or draw
    //     reset

       // Game selections

    // condition1 = document.getElementById("human").checked && document.getElementById("StartO").checked;
    // condition2 = document.getElementById("human").checked && document.getElementById("StartX").checked;
    // condition3 = document.getElementById("ai").checked && document.getElementById("StartO").checked;
    // condition4 = document.getElementById("ai").checked && document.getElementById("StartX").checked;