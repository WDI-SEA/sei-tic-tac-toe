var isPlayerOnesTurn = true;
function turn(img){
    console.log("turn");
    console.log(document.getElementById(img));
    if (!document.getElementById(img).src) {
        if (isPlayerOnesTurn) {
            document.getElementById(img).src = "o.jpg";
            isPlayerOnesTurn = false; 
            document.getElementById("playerTurn").innerHTML = "Player 2's turn";
    
        } else {
            document.getElementById(img).src = "x.jpg";
            isPlayerOnesTurn = true;
            document.getElementById("playerTurn").innerHTML = "Player 1's turn";
        }
    }
}

function restart(){
    document.getElementById("box0").src = ' ';
    document.getElementById("box1").src = ' ';
    document.getElementById("box2").src = ' ';
    document.getElementById("box3").src = ' ';
    document.getElementById("box4").src = ' ';
    document.getElementById("box5").src = ' ';
    document.getElementById("box6").src = ' ';
    document.getElementById("box7").src = ' ';
    document.getElementById("box8").src = ' ';
}

