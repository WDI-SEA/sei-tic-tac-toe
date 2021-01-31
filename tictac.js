let player = null;

function myFunction() {
// Setting DOM to squares
let sq1, sq2, sq3, sq4, sq5, sq6, sq7, sq8, sq9;
sq1 = document.querySelector("#sqOne").nodeValue;
sq2 = document.querySelector("#sqTwo").nodeValue;
sq3 = document.querySelector("#sqThree").nodeValue;
sq4 = document.querySelector("#sqFour").nodeValue;
sq5 = document.querySelector("#sqFive").nodeValue;
sq6 = document.querySelector("#sqSix").nodeValue;
sq7 = document.querySelector("#sqSeven").nodeValue;
sq8 = document.querySelector("#sqEight").nodeValue;
sq9 = document.querySelector("#sqNine").nodeValue;
// Checking if X wins or not. Then stopping anymore game play.
//Horizontal X Wins
if ((sq1 == "x"|| sq1 == "X") && (sq2 == "x" || sq2 == "X") && (sq3 == "x" || sq3 == "X")) {
    document.querySelector("#winner").innerText = "Player X wins!";
    document.querySelector("#sqFour").disabled = true;
    document.querySelector("#sqFive").disabled = true;
    document.querySelector("#sqSix").disabled = true;
    document.querySelector("#sqSeven").disabled = true;
    document.querySelector("#sqEight").disabled = true;
    document.querySelector("#sqNine").disabled = true;
    console.log("Player X wins!");
} 
else if ((sq4 == "x"|| sq4 == "X") && (sq5 == "x" || sq5 == "X") && (sq6 == "x" || sq6 == "X")) {
    document.querySelector("#winner").innerText = "Player X wins!";
    document.querySelector("#sqOne").disabled = true;
    document.querySelector("#sqTwo").disabled = true;
    document.querySelector("#sqThree").disabled = true;
    document.querySelector("#sqSeven").disabled = true;
    document.querySelector("#sqEight").disabled = true;
    document.querySelector("#sqNine").disabled = true;
    console.log("Player X wins!");
}
else if ((sq7 == "x"|| sq7 == "X") && (sq8 == "x" || sq8 == "X") && (sq9 == "x" || sq9 == "X")) {
    document.querySelector("#winner").innerText = "Player X wins!";
    document.querySelector("#sqOne").disabled = true;
    document.querySelector("#sqTwo").disabled = true;
    document.querySelector("#sqThree").disabled = true;
    document.querySelector("#sqFour").disabled = true;
    document.querySelector("#sqFive").disabled = true;
    document.querySelector("#sqSix").disabled = true;
    console.log("Player X wins!");
}
//Vertical X Wins
else if ((sq1 == "x"|| sq1 == "X") && (sq4 == "x" || sq4 == "X") && (sq7 == "x" || sq7 == "X")) {
    document.querySelector("#winner").innerText = "Player X wins!";
    document.querySelector("#sqTwo").disabled = true;
    document.querySelector("#sqThree").disabled = true;
    document.querySelector("#sqFive").disabled = true;
    document.querySelector("#sqSix").disabled = true;
    document.querySelector("#sqEight").disabled = true;
    document.querySelector("#sqNine").disabled = true;
    console.log("Player X wins!");
}
else if ((sq2 == "x"|| sq2 == "X") && (sq5 == "x" || sq5 == "X") && (sq8 == "x" || sq8 == "X")) {
    document.querySelector("#winner").innerText = "Player X wins!";
    document.querySelector("#sqOne").disabled = true;
    document.querySelector("#sqThree").disabled = true;
    document.querySelector("#sqFour").disabled = true;
    document.querySelector("#sqSix").disabled = true;
    document.querySelector("#sqSeven").disabled = true;
    document.querySelector("#sqNine").disabled = true;
    console.log("Player X wins!");
}
else if ((sq3 == "x"|| sq3 == "X") && (sq6 == "x" || sq6 == "X") && (sq9 == "x" || sq9 == "X")) {
    document.querySelector("#winner").innerText = "Player X wins!";
    document.querySelector("#sqOne").disabled = true;
    document.querySelector("#sqTwo").disabled = true;
    document.querySelector("#sqFour").disabled = true;
    document.querySelector("#sqFive").disabled = true;
    document.querySelector("#sqSeven").disabled = true;
    document.querySelector("#sqEight").disabled = true;
    console.log("Player X wins!");
}
//Diagonal X Wins
else if ((sq1 == "x"|| sq1 == "X") && (sq5 == "x" || sq5 == "X") && (sq9 == "x" || sq9 == "X")) {
    document.querySelector("#winner").innerText = "Player X wins!";
    document.querySelector("#sqTwo").disabled = true;
    document.querySelector("#sqThree").disabled = true;
    document.querySelector("#sqFour").disabled = true;
    document.querySelector("#sqSix").disabled = true;
    document.querySelector("#sqSeven").disabled = true;
    document.querySelector("#sqEight").disabled = true;
    console.log("Player X wins!");
}
else if ((sq3 == "x"|| sq3 == "X") && (sq5 == "x" || sq5 == "X") && (sq7 == "x" || sq7 == "X")) {
    document.querySelector("#winner").innerText = "Player X wins!";
    document.querySelector("#sqOne").disabled = true;
    document.querySelector("#sqTwo").disabled = true;
    document.querySelector("#sqFour").disabled = true;
    document.querySelector("#sqSix").disabled = true;
    document.querySelector("#sqEight").disabled = true;
    document.querySelector("#sqNine").disabled = true;
    console.log("Player X wins!");
}
// Checking if O wins or not. Then stopping anymore game play.
////Horizontal O Wins
if ((sq1 == "o"|| sq1 == "O") && (sq2 == "o" || sq2 == "O") && (sq3 == "o" || sq3 == "O")) {
    document.querySelector("#winner").innerText = "Player O wins!";
    document.querySelector("#sqFour").disabled = true;
    document.querySelector("#sqFive").disabled = true;
    document.querySelector("#sqSix").disabled = true;
    document.querySelector("#sqSeven").disabled = true;
    document.querySelector("#sqEight").disabled = true;
    document.querySelector("#sqNine").disabled = true;
    console.log("Player O wins!");
} 
else if ((sq4 == "o"|| sq4 == "O") && (sq5 == "o" || sq5 == "O") && (sq6 == "o" || sq6 == "O")) {
    document.querySelector("#winner").innerText = "Player O wins!";
    document.querySelector("#sqOne").disabled = true;
    document.querySelector("#sqTwo").disabled = true;
    document.querySelector("#sqThree").disabled = true;
    document.querySelector("#sqSeven").disabled = true;
    document.querySelector("#sqEight").disabled = true;
    document.querySelector("#sqNine").disabled = true;
    console.log("Player O wins!");
}
else if ((sq7 == "o"|| sq7 == "O") && (sq8 == "o" || sq8 == "O") && (sq9 == "o" || sq9 == "O")) {
    document.querySelector("#winner").innerText = "Player O wins!";
    document.querySelector("#sqOne").disabled = true;
    document.querySelector("#sqTwo").disabled = true;
    document.querySelector("#sqThree").disabled = true;
    document.querySelector("#sqFour").disabled = true;
    document.querySelector("#sqFive").disabled = true;
    document.querySelector("#sqSix").disabled = true;
    console.log("Player O wins!");
}
//Vertical O Wins
else if ((sq1 == "o"|| sq1 == "O") && (sq4 == "o" || sq4 == "O") && (sq7 == "o" || sq7 == "O")) {
    document.querySelector("#winner").innerText = "Player O wins!";
    document.querySelector("#sqTwo").disabled = true;
    document.querySelector("#sqThree").disabled = true;
    document.querySelector("#sqFive").disabled = true;
    document.querySelector("#sqSix").disabled = true;
    document.querySelector("#sqEight").disabled = true;
    document.querySelector("#sqNine").disabled = true;
    console.log("Player O wins!");
}
else if ((sq2 == "o"|| sq2 == "O") && (sq5 == "o" || sq5 == "O") && (sq8 == "o" || sq8 == "O")) {
    document.querySelector("#winner").innerText = "Player O wins!";
    document.querySelector("#sqOne").disabled = true;
    document.querySelector("#sqThree").disabled = true;
    document.querySelector("#sqFour").disabled = true;
    document.querySelector("#sqSix").disabled = true;
    document.querySelector("#sqSeven").disabled = true;
    document.querySelector("#sqNine").disabled = true;
    console.log("Player O wins!");
}
else if ((sq3 == "o"|| sq3 == "O") && (sq6 == "o" || sq6 == "O") && (sq9 == "o" || sq9 == "O")) {
    document.querySelector("#winner").innerText = "Player O wins!";
    document.querySelector("#sqOne").disabled = true;
    document.querySelector("#sqTwo").disabled = true;
    document.querySelector("#sqFour").disabled = true;
    document.querySelector("#sqFive").disabled = true;
    document.querySelector("#sqSeven").disabled = true;
    document.querySelector("#sqEight").disabled = true;
}
//Diagonal O wins
else if ((sq1 == "o"|| sq1 == "O") && (sq5 == "o" || sq5 == "O") && (sq9 == "o" || sq9 == "O")) {
    document.querySelector("#winner").innerText = "Player O wins!";
    document.querySelector("#sqTwo").disabled = true;
    document.querySelector("#sqThree").disabled = true;
    document.querySelector("#sqFour").disabled = true;
    document.querySelector("#sqSix").disabled = true;
    document.querySelector("#sqSeven").disabled = true;
    document.querySelector("#sqEight").disabled = true;
    console.log("Player O wins!");
}
else if ((sq3 == "o"|| sq3 == "O") && (sq5 == "o" || sq5 == "O") && (sq7 == "o" || sq7 == "O")) {
    document.querySelector("#winner").innerText = "Player O wins!";
    document.querySelector("#sqOne").disabled = true;
    document.querySelector("#sqTwo").disabled = true;
    document.querySelector("#sqFour").disabled = true;
    document.querySelector("#sqSix").disabled = true;
    document.querySelector("#sqEight").disabled = true;
    document.querySelector("#sqNine").disabled = true;
    console.log("Player O wins!");
} 
// Checking to see if it is a Tie.
else if ((sq1 == 'X' || sq1 == 'O') && (sq2 == 'X' 
        || sq2 == 'O') && (sq3 == 'X' || sq3 == 'O') &&  
        (sq4 == 'X' || sq4 == 'O') && (sq5 == 'X' ||  
        sq5 == 'O') && (sq6 == 'O' || sq6 == 'O') &&  
        (sq7 == 'X' || sq7 == 'O') && (sq8 == 'X' ||  
        b8 == 'O') && (sq9 == 'X' || sq9 == 'O')) { 
            document.getElementById('#winner').innerHTML = "It's a wash."; 
            console.log("It's a wash."); 
    } 
else {
    if (flag === 1) {
        document.querySelector("#winner").innerText = "Player X's turn.";
    } else {
        document.querySelector("#winner").innerText = "Player 0's turn.";
        }
    }
}
//Function to reset Game
function myFunction_2() {
    location.reload();
    document.querySelector("#sq1").value = "";
    document.querySelector("#sq2").value = "";
    document.querySelector("#sq3").value = "";
    document.querySelector("#sq4").value = "";
    document.querySelector("#sq5").value = "";
    document.querySelector("#sq6").value = "";
    document.querySelector("#sq7").value = "";
    document.querySelector("#sq8").value = "";
    document.querySelector("#sq9").value = "";
}
flag = 1; 
function myFunction_3() { 
    if (flag === 1) { 
        document.getElementById("sq1").value = "X"; 
        document.getElementById("sq1").disabled = true; 
        flag = 0; 
    } else { 
        document.getElementById("sq1").value = "0"; 
        document.getElementById("sq1").disabled = true; 
        flag = 1; 
    } 
}