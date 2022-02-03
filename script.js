function myFunc() {
    // add element that displays winner or cats game



    var uL, uM, uR, mL, mM, mR, bL, bM, bR;
    // we are setting DOM to all the boxes.
    uL = document.getElementById("uL").value;
    uM = document.getElementById("uM").value;
    uR = document.getElementById("uR").value;
    mL = document.getElementById("mL").value;
    mM = document.getElementById("mM").value;
    mR = document.getElementById("mR").value;
    bL = document.getElementById("bL").value;
    bM = document.getElementById("bM").value;
    bR = document.getElementById("bR").value;



        //checking if player X won. 


    if (uL == "X" && uM == "X" && uR == "X") {
        document.getElementById('winner').innerText = "Player X Won!!";
        document.getElementById("mL").disabled = true;
        document.getElementById("mM").disabled = true;
        document.getElementById("mR").disabled = true;
        document.getElementById("bL").disabled = true;
        document.getElementById("bM").disabled = true;
        document.getElementById("bR").disabled = true;
        return
        
    }else if (mL == "X" && mM == "X" && mR == "X") {
        document.getElementById('winner').innerText = "Player X won!!";
        document.getElementById("uL").disabled = true;
        document.getElementById("uM").disabled = true;
        document.getElementById("uR").disabled = true;
        document.getElementById("bL").disabled = true;
        document.getElementById("bM").disabled = true;
        document.getElementById("bR").disabled = true;
        return
        
    }else if (bL == "X" && bM == "X" && bR == "X") {
        document.getElementById('winner').innerText = "Player X won!!";
        document.getElementById("uL").disabled = true;
        document.getElementById("uM").disabled = true;
        document.getElementById("uR").disabled = true;
        document.getElementById("mL").disabled = true;
        document.getElementById("mM").disabled = true;
        document.getElementById("mR").disabled = true;
        return
        
    }else if (uL == "X" && mL == "X" && bL == "X")  {
        document.getElementById('winner').innerText = "Player X won!!";
        document.getElementById("uM").disabled = true;
        document.getElementById("uR").disabled = true;
        document.getElementById("mM").disabled = true;
        document.getElementById("mR").disabled = true;
        document.getElementById("bM").disabled = true;
        document.getElementById("bR").disabled = true;
        return
        
    }else if (uM == "X" && mM == "X" && bM == "X") {
        document.getElementById('winner').innerText = "Player X won!!";
        document.getElementById("uL").disabled = true;
        document.getElementById("uR").disabled = true;
        document.getElementById("mL").disabled = true;
        document.getElementById("mR").disabled = true;
        document.getElementById("bL").disabled = true;
        document.getElementById("bR").disabled = true;
        return
        
    }else if (uR == "X" && mR == "X" && bR == "X") {
        document.getElementById('winner').innerText = "Player X won!!";
        document.getElementById("uL").disabled = true;
        document.getElementById("uM").disabled = true;
        document.getElementById("mL").disabled = true;
        document.getElementById("mM").disabled = true;
        document.getElementById("bL").disabled = true;
        document.getElementById("bM").disabled = true;
        return
        
    }else if (uL == "X" && mM == "X" && bR == "X") {
        document.getElementById('winner').innerText = "Player X won!!";
        document.getElementById("uM").disabled = true;
        document.getElementById("uR").disabled = true;
        document.getElementById("mL").disabled = true;
        document.getElementById("mR").disabled = true;
        document.getElementById("bL").disabled = true;
        document.getElementById("bM").disabled = true;  
        return 
    }else if (bL == "X" && mM == "X" && uR =="X"){
        document.getElementById('winner').innerText = "Player X won!!";
        document.getElementById("uM").disabled = true;
        document.getElementById("uR").disabled = true;
        document.getElementById("mL").disabled = true;
        document.getElementById("mR").disabled = true;
        document.getElementById("bL").disabled = true;
        document.getElementById("bM").disabled = true;
        return
    }else if ((uL == 'X' || uL == 'O') && (uM == 'X' || uM == 'O') &&
    (uR == 'X' || uR == 'O') && (mL == 'X' || mL == 'O') && (mM == 'X' || mM == 'O') && 
    (mR == 'X' || mR == 'O') && (bL == 'X' || bL == 'O') && (bM == 'X' || bM == 'O') &&
    (bR == 'X' || bR =='O')) {
        document.getElementById('winner').innerText = 'Cats Game';
        
    }else{
        if (flag == 1) {
            document.getElementById('playerTurn').innerText = "Player X's turn";
        }else {
            document.getElementById('playerTurn').innerText = "Player O's turn";
        }
        
    }

    // checking if Player O won.


    if (uL == "O" && uM == "O" && uR == "O") {
        document.getElementById('winner').innerText = "Player O Won!!";
        document.getElementById("mL").disabled = true;
        document.getElementById("mM").disabled = true;
        document.getElementById("mR").disabled = true;
        document.getElementById("bL").disabled = true;
        document.getElementById("bM").disabled = true;
        document.getElementById("bR").disabled = true;
        return
        
    }else if (mL == "O" && mM == "O" && mR == "O") {
        document.getElementById('winner').innerText = "Player O won!!";
        document.getElementById("uL").disabled = true;
        document.getElementById("uM").disabled = true;
        document.getElementById("uR").disabled = true;
        document.getElementById("bL").disabled = true;
        document.getElementById("bM").disabled = true;
        document.getElementById("bR").disabled = true;
        return
        
    }else if (bL == "O" && bM == "O" && bR == "O") {
        document.getElementById('winner').innerText = "Player O won!!";
        document.getElementById("uL").disabled = true;
        document.getElementById("uM").disabled = true;
        document.getElementById("uR").disabled = true;
        document.getElementById("mL").disabled = true;
        document.getElementById("mM").disabled = true;
        document.getElementById("mR").disabled = true;
        return
        
    }else if (uL == "O" && mL == "O" && bL == "O")  {
        document.getElementById('winner').innerText = "Player O won!!";
        document.getElementById("uM").disabled = true;
        document.getElementById("uR").disabled = true;
        document.getElementById("mM").disabled = true;
        document.getElementById("mR").disabled = true;
        document.getElementById("bM").disabled = true;
        document.getElementById("bR").disabled = true;
        return
        
    }else if (uM == "O" && mM == "O" && bM == "O") {
        document.getElementById('winner').innerText = "Player O won!!";
        document.getElementById("uL").disabled = true;
        document.getElementById("uR").disabled = true;
        document.getElementById("mL").disabled = true;
        document.getElementById("mR").disabled = true;
        document.getElementById("bL").disabled = true;
        document.getElementById("bR").disabled = true;
        return
        
    }else if (uR == "O" && mR == "O" && bR == "O") {
        document.getElementById('winner').innerText = "Player O won!!";
        document.getElementById("uL").disabled = true;
        document.getElementById("uM").disabled = true;
        document.getElementById("mL").disabled = true;
        document.getElementById("mM").disabled = true;
        document.getElementById("bL").disabled = true;
        document.getElementById("bM").disabled = true;
        return
        
    }else if (uL == "O" && mM == "O" && bR == "O") {
        document.getElementById('winner').innerText = "Player O won!!";
        document.getElementById("uM").disabled = true;
        document.getElementById("uR").disabled = true;
        document.getElementById("mL").disabled = true;
        document.getElementById("mR").disabled = true;
        document.getElementById("bL").disabled = true;
        document.getElementById("bM").disabled = true;
        return

    }else if (bL == "O" && mM == "O" && uR =="O"){
        document.getElementById('winner').innerText = "Player O won!!";
        document.getElementById("uM").disabled = true;
        document.getElementById("uR").disabled = true;
        document.getElementById("mL").disabled = true;
        document.getElementById("mR").disabled = true;
        document.getElementById("bL").disabled = true;
        document.getElementById("bM").disabled = true;
        return

    }else if ((uL == 'X' || uL == 'O') && (uM == 'X' || uM == 'O') &&
    (uR == 'X' || uR == 'O') && (mL == 'X' || mL == 'O') && (mM == 'X' || mM == 'O') && 
    (mR == 'X' || mR == 'O') && (bL == 'X' || bL == 'O') && (bM == 'X' || bM == 'O') &&
    (bR == 'X' || bR =='O')) {
        document.getElementById('winner').innerText = 'Cats Game';
    }else{
        if (flag == 1) {
            document.getElementById('playerTurn').innerText = "Player X's turn";
        }else {
            document.getElementById('playerTurn').innerText = "Player O's turn";
        }

    }
        //checking for a tie. (THIS DISPLAYS BOTH WINNER AND TIE AT THE SAME TIME IF ALL
    // BOXES ARE FULL)


    }


    // this function is to reset the game.
    function resetButton() {
        location.reload();
        document.getElementById("uL").value = '';
        document.getElementById("uM").value = '';
        document.getElementById("uR").value = '';
        document.getElementById("mL").value = '';
        document.getElementById("mM").value = '';
        document.getElementById("mR").value = '';
        document.getElementById("bL").value = '';
        document.getElementById("bM").value = '';
        document.getElementById("bR").value = '';
    }


        // adding X/O to the boxes.
    let flag = 1;
    function myFunc1() {
        if (flag == 1) {
            document.getElementById("uL").value = "X";
            document.getElementById("uL").disabled = true;
            flag = 0;
        }else {
            document.getElementById("uL").value = "O";
            document.getElementById("uL").disabled = true;
            flag = 1;
        }
    }
    function myFunc2() {
        if (flag == 1) {
            document.getElementById("uM").value = "X";
            document.getElementById("uM").disabled = true;
            flag = 0;
        }else {
            document.getElementById("uM").value = "O";
            document.getElementById("uM").disabled = true;
            flag = 1;
        }
    }
    function myFunc3() {
        if (flag == 1) {
            document.getElementById("uR").value = "X";
            document.getElementById("uR").disabled = true;
            flag = 0;
        }else {
            document.getElementById("uR").value = "O";
            document.getElementById("uR").disabled = true;
            flag = 1;
        }
    }
    function myFunc4() {
        if (flag == 1) {
            document.getElementById("mL").value = "X";
            document.getElementById("mL").disabled = true;
            flag = 0;
        }else {
            document.getElementById("mL").value = "O";
            document.getElementById("mL").disabled = true;
            flag = 1;
        }
    }
    function myFunc5() {
        if (flag == 1) {
            document.getElementById("mM").value = "X";
            document.getElementById("mM").disabled = true;
            flag = 0;
        }else {
            document.getElementById("mM").value = "O";
            document.getElementById("mM").disabled = true;
            flag = 1;
        }
    }
    function myFunc6() {
        if (flag == 1) {
            document.getElementById("mR").value = "X";
            document.getElementById("mR").disabled = true;
            flag = 0;
        }else {
            document.getElementById("mR").value = "O";
            document.getElementById("mR").disabled = true;
            flag = 1;
        }
    }
    function myFunc7() {
        if (flag == 1) {
            document.getElementById("bL").value = "X";
            document.getElementById("bL").disabled = true;
            
            flag = 0;
        }else {
            document.getElementById("bL").value = "O";
            document.getElementById("bL").disabled = true;
            
            flag = 1;
        }
    }
    function myFunc8() {
        if (flag == 1) {
            document.getElementById("bM").value = "X";
            document.getElementById("bM").disabled = true;
            
            flag = 0;
        }else {
            document.getElementById("bM").value = "O";
            document.getElementById("bM").disabled = true;
            
            flag = 1;
        }
    }
    function myFunc9() {
        if (flag == 1) {
            document.getElementById("bR").value = "X";
            document.getElementById("bR").disabled = true;
            
            flag = 0;
        }else {
            document.getElementById("bR").value = "O";
            document.getElementById("bR").disabled = true;
            
            flag = 1;
        }
}





