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
const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
const box5 = document.getElementById("box5");
const box6 = document.getElementById("box6");
const box7 = document.getElementById("box7");
const box8 = document.getElementById("box8");
const box9 = document.getElementById("box9");

// game options
function gameSelector() {
    if (document.getElementById("human").checked && document.getElementById("StartO").checked) {
        gamePlay1();
    }
    else if (document.getElementById("human").checked && document.getElementById("StartX").checked) {
        let gameActive = true;
        let currentPlayer = "X";
        gamePlay2();
    }
    else {
        messageOut.innerHTML = "Going First or Second?"
    }
};


// Vs human, start O

function gamePlay1() {
    let boxes = cells, insideText = 0;
    for (let i = 0; i < cells.length; i++) {
        cells[i].onclick = function() {
            if(this.innerHTML !== "X" && this.innerHTML !== "O" && this.innerHTML !== " ") {
                if(insideText%2 === 0) {
                    this.innerHTML = "O";
                    this.style.backgroundImage = "url('./img/button2.png')"
                    messageOut.innerHTML = "turn for X"
                    insideText += 1;
                }
                else {
                    this.innerHTML = "X";
                    this.style.backgroundImage = "url('./img/button3.png')"
                    messageOut.innerHTML = "turn for O"
                    insideText += 1;
                }
            };
            checkWin();
        }
    }
};
function gamePlay2() {
    let boxes = cells, insideText = 0;
    for (let i = 0; i < cells.length; i++) {
        cells[i].onclick = function() {
            if(this.innerHTML !== "X" && this.innerHTML !== "O" && this.innerHTML !== " ") {
                if(insideText%2 === 0) {
                    this.innerHTML = "X";
                    this.style.backgroundImage = "url('./img/button3.png')"
                    messageOut.innerHTML = "turn for O"
                    insideText += 1;
                }
                else {
                    this.innerHTML = "O";
                    this.style.backgroundImage = "url('./img/button2.png')"
                    messageOut.innerHTML = "turn for X"
                    insideText += 1;
                }
            };
            checkWin();
        }
    }
};


function checkWin() {
    if(box1.innerHTML === "X" && box2.innerHTML === "X" && box3.innerHTML === "X" ||
        box4.innerHTML === "X" && box5.innerHTML === "X" && box6.innerHTML === "X" ||
        box7.innerHTML === "X" && box8.innerHTML === "X" && box9.innerHTML === "X" ||
        box1.innerHTML === "X" && box4.innerHTML === "X" && box7.innerHTML === "X" ||
        box2.innerHTML === "X" && box5.innerHTML === "X" && box8.innerHTML === "X" ||
        box3.innerHTML === "X" && box6.innerHTML === "X" && box9.innerHTML === "X" ||
        box3.innerHTML === "X" && box5.innerHTML === "X" && box7.innerHTML === "X" ||
        box1.innerHTML === "X" && box5.innerHTML === "X" && box9.innerHTML === "X") {
            messageOut.innerHTML = "Winner is X"
            disableGame();
        }
    else if(
        box1.innerHTML === "O" && box2.innerHTML === "O" && box3.innerHTML === "O" ||
        box4.innerHTML === "O" && box5.innerHTML === "O" && box6.innerHTML === "O" ||
        box7.innerHTML === "O" && box8.innerHTML === "O" && box9.innerHTML === "O" ||
        box1.innerHTML === "O" && box4.innerHTML === "O" && box7.innerHTML === "O" ||
        box2.innerHTML === "O" && box5.innerHTML === "O" && box8.innerHTML === "O" ||
        box3.innerHTML === "O" && box6.innerHTML === "O" && box9.innerHTML === "O" ||
        box3.innerHTML === "O" && box5.innerHTML === "O" && box7.innerHTML === "O" ||
        box1.innerHTML === "O" && box5.innerHTML === "O" && box9.innerHTML === "O") {
            messageOut.innerHTML = "Winner is O"
            disableGame();
        }
    else if(
        box1.innerText != "" && box2.innerText != "" && box3.innerText != "" &&
        box4.innerText != "" && box5.innerText != "" && box6.innerText != "" &&
        box7.innerText != "" && box8.innerText != "" && box9.innerText != "") {
            messageOut.innerHTML = "Draw Game"
        }
}



function disableGame() {
    for (let i = 0; i < cells.length; i++) {
        cells[i].onclick = function() {
            return false;
        }
    }
}


document.getElementById("clickA").addEventListener("click", (event) => {
    event.preventDefault();
    gameSelector();
});