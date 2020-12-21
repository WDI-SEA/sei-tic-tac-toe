// list of variables
let pos1_1;
let pos1_2;
let pos1_3;
let pos2_1;
let pos2_2;
let pos2_3;
let pos3_1;
let pos3_2;
let pos3_3;
let pos1_1_event;
let pos1_2_event;
let pos1_3_event;
let pos2_1_event;
let pos2_2_event;
let pos2_3_event;
let pos3_1_event;
let pos3_2_event;
let pos3_3_event;
let resetBtn;
let player1Score = 0;
let player2Score = 0;
let display = [];
// The iterator will be used to define the player 1 (X) or player 2 (0) turn
let i = 1;


// set marker and indication of the next turn
function setMarker(index) {
    if (index % 2 === 0) {
        // return marker, player1 turn, clear button for player2, 
        return ["0",".player1",".player2", "Player1"];
    }else {
        // return marker, player2 turn, clear button for player1
        return ["X", ".player2", ".player1", "Player2"];
    } 
}

// set display
function setDisplay(display){
    document.querySelector(display[1]).innerHTML = display[3];
    document.querySelector(display[1]).style.border = "1px solid black";
    document.querySelector(display[2]).innerHTML ="";
    document.querySelector(display[2]).style.border = "";
}

// display result
function result(res){
    document.querySelector('p').innerHTML =res;
}


// Page loads
document.addEventListener("DOMContentLoaded", (e) => {
    
    pos1_1 = document.querySelector(".pos1_1");
    pos1_2 = document.querySelector(".pos1_2");
    pos1_3 = document.querySelector(".pos1_3");
    pos2_1 = document.querySelector(".pos2_1");
    pos2_2 = document.querySelector(".pos2_2");
    pos2_3 = document.querySelector(".pos2_3");
    pos3_1 = document.querySelector(".pos3_1");
    pos3_2 = document.querySelector(".pos3_2");
    pos3_3 = document.querySelector(".pos3_3");
    resetBtn = document.querySelector(".reset");
    document.querySelector('.player1').style.border = "1px solid black";
    document.querySelector(".player1Score").innerHTML =`Player1 Score: ${player1Score}`;
    document.querySelector(".player2Score").innerHTML =`Player2 Score: ${player2Score}`;


    // Support the blockPos function
    pos1_1_event = function (e) {
        // set the marker
        display = setMarker(i);
        pos1_1.textContent = display[0];
        setDisplay(display);
        i++;
        checkForWinner();      
    }

    pos1_2_event = function (e) {
        // set the marker
        display = setMarker(i);
        pos1_2.textContent = display[0];
        setDisplay(display);
        i++;
        console.log(i);
        checkForWinner();      
    }

    pos1_3_event = function (e) {
        // set the marker
        display = setMarker(i);
        pos1_3.textContent = display[0];
        setDisplay(display);
        i++;
        checkForWinner();      
    }

    pos2_1_event = function (e) {
        // set the marker
        display = setMarker(i);
        pos2_1.textContent = display[0];
        setDisplay(display);
        i++;
        checkForWinner();      
    }

    pos2_2_event = function (e) {
        // set the marker
        display = setMarker(i);
        pos2_2.textContent = display[0];
        setDisplay(display);
        i++;
        checkForWinner();      
    }

    pos2_3_event = function (e) {
        // set the marker
        display = setMarker(i);
        pos2_3.textContent = display[0];
        setDisplay(display);
        i++;
        checkForWinner();      
    }

    pos3_1_event = function (e) {
        // set the marker
        display = setMarker(i);
        pos3_1.textContent = display[0];
        setDisplay(display);
        i++;
        checkForWinner();      
    }

    pos3_2_event = function (e) {
        // set the marker
        display = setMarker(i);
        pos3_2.textContent = display[0];
        setDisplay(display);
        i++;
        checkForWinner();      
    }

    pos3_3_event = function (e) {
        // set the marker
        display = setMarker(i);
        pos3_3.textContent = display[0];
        setDisplay(display);
        i++;
        checkForWinner();      
    }

    pos1_1.addEventListener("click", pos1_1_event);

    pos1_2.addEventListener("click", pos1_2_event);

    pos1_3.addEventListener("click", pos1_3_event);
    
    pos2_1.addEventListener("click", pos2_1_event);

    pos2_2.addEventListener("click", pos2_2_event);

    pos2_3.addEventListener("click", pos2_3_event);

    pos3_1.addEventListener("click", pos3_1_event);

    pos3_2.addEventListener("click", pos3_2_event);

    pos3_3.addEventListener("click", pos3_3_event);


    // Block new selection
    function blockPos(){
        if((pos1_1.innerHTML === "") || (pos1_2.innerHTML === "") || (pos1_3.innerHTML === "") || (pos2_1.innerHTML === "") || (pos2_2.innerHTML === "") || (pos2_3.innerHTML === "") || (pos3_1.innerHTML !== "") || (pos3_2.innerHTML !== "") || (pos3_3.innerHTML === "")){
            pos1_1.removeEventListener("click",pos1_1_event);
            pos1_2.removeEventListener("click",pos1_2_event);
            pos1_3.removeEventListener("click",pos1_3_event);
            pos2_1.removeEventListener("click",pos2_1_event);
            pos2_2.removeEventListener("click",pos2_2_event);
            pos2_3.removeEventListener("click",pos2_3_event);
            pos3_1.removeEventListener("click",pos3_1_event);
            pos3_2.removeEventListener("click",pos3_2_event);
            pos3_3.removeEventListener("click",pos3_3_event);
        }  
    }

    // check for winner
    function checkForWinner(){
        if ((pos1_1.innerHTML === "X" && pos1_2.innerHTML === "X" && pos1_3.innerHTML === "X") || (pos2_1.innerHTML === "X" && pos2_2.innerHTML === "X" && pos2_3.innerHTML === "X") || (pos3_1.innerHTML === "X" && pos3_2.innerHTML === "X" && pos3_3.innerHTML === "X") ||
            (pos1_1.innerHTML === "X" && pos2_1.innerHTML === "X" && pos3_1.innerHTML === "X") || (pos1_2.innerHTML === "X" && pos2_2.innerHTML === "X" && pos3_2.innerHTML === "X") || (pos1_3.innerHTML === "X" && pos2_3.innerHTML=== "X" && pos3_3.innerHTML === "X") ||
            (pos1_1.innerHTML === "X" && pos2_2.innerHTML === "X" && pos3_3.innerHTML === "X") || (pos1_3.innerHTML === "X" && pos2_2.innerHTML === "X" && pos3_1.innerHTML === "X")){
                // player 1 win
                result("Player 1 is the winner!")
                player1Score++
                document.querySelector(".player1Score").innerHTML =`Player1 Score: ${player1Score}`;
                blockPos();

            }else if((pos1_1.innerHTML === "0" && pos1_2.innerHTML === "0" && pos1_3.innerHTML === "0") || (pos2_1.innerHTML === "0" && pos2_2.innerHTML === "0" && pos2_3.innerHTML === "0") || (pos3_1.innerHTML === "0" && pos3_2.innerHTML === "0" &&pos3_3.innerHTML === "0") ||
            (pos1_1.innerHTML === "0" && pos2_1.innerHTML === "0" && pos3_1.innerHTML === "0") || (pos1_2.innerHTML === "0" && pos2_2.innerHTML === "0" && pos3_2.innerHTML === "0") || (pos1_3.innerHTML === "0" && pos2_3.innerHTML=== "0" && pos3_3.innerHTML === "0") ||
            (pos1_1.innerHTML === "0" && pos2_2.innerHTML === "0" && pos3_3.innerHTML === "0") || (pos1_3.innerHTML === "0" && pos2_2.innerHTML === "0" && pos3_1.innerHTML === "0")){
                // player 2 win
                result("Player 2 is the winner!")
                player2Score++
                document.querySelector(".player2Score").innerHTML =`Player2 Score: ${player2Score}`;
                blockPos();
            }else if((pos1_1.innerHTML !== "") && (pos1_2.innerHTML !== "") && (pos1_3.innerHTML !== "") && (pos2_1.innerHTML !== "") && (pos2_2.innerHTML !== "") && (pos2_3.innerHTML !== "") && (pos3_1.innerHTML !== "") && (pos3_2.innerHTML !== "") && (pos3_3.innerHTML !== "")){        
                // no winner
                console.log("There is a tie!");
                result("There is a tie!")
            }else {
                // game on
            }
    }
    
    // reset the game
    function reset(){
        i = 1;
        pos1_1.innerHTML = "";
        pos1_2.innerHTML = "";
        pos1_3.innerHTML = "";
        pos2_1.innerHTML = "";
        pos2_2.innerHTML = "";
        pos2_3.innerHTML = "";
        pos3_1.innerHTML = "";
        pos3_2.innerHTML= "";
        pos3_3.innerHTML = "";
        pos1_1 = document.querySelector(".pos1_1");
        pos1_2 = document.querySelector(".pos1_2");
        pos1_3 = document.querySelector(".pos1_3");
        pos2_1 = document.querySelector(".pos2_1");
        pos2_2 = document.querySelector(".pos2_2");
        pos2_3 = document.querySelector(".pos2_3");
        pos3_1 = document.querySelector(".pos3_1");
        pos3_2 = document.querySelector(".pos3_2");
        pos3_3 = document.querySelector(".pos3_3");
        pos1_1.addEventListener("click", pos1_1_event);
        pos1_2.addEventListener("click", pos1_2_event);
        pos1_3.addEventListener("click", pos1_3_event);
        pos2_1.addEventListener("click", pos2_1_event);
        pos2_2.addEventListener("click", pos2_2_event);
        pos2_3.addEventListener("click", pos2_3_event);
        pos3_1.addEventListener("click", pos3_1_event);
        pos3_2.addEventListener("click", pos3_2_event);
        pos3_3.addEventListener("click", pos3_3_event);
        document.querySelector('.player1').innerHTML = "Player1";
        document.querySelector('.player1').style.border = "1px solid black";
        document.querySelector('.player2').innerHTML = "";
        document.querySelector('.player2').style.border = "";
        document.querySelector('p').innerHTML ="Have fun!";

    }
    
    resetBtn.addEventListener("click", (e) => {
        // clear all position
        reset();
    })
})