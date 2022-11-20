// array to store user selection

const boardTracker = [
    ['','',''],
    ['','',''],
    ['','',''],

]


//function to clear the game
function clearGame(){
    window.location.reload();
}


//function to change user message

function changeMessage(msg_head,msg){
    const header = document.getElementById("id_msg_header");
    header.innerHTML = msg_head;
    const message = document.getElementById("id_msg");
    message.innerHTML = msg ;

}
//game user messages
let game_msg = "Rules of the Game"
let game_msg_header = 'This game assumes two players are playing side by side. </br> Player X starts by selecting a square on the board, then Player O will take a turn. </br> The players alternate turns until there is a winner (a player has 3 in a row) or a tie (all squares have been played and neither player has 3 in a row). </br> </br> <strong> Player X, click a square to begin the game!'

changeMessage(game_msg, game_msg_header)
//variable for current player

const current_player = ['X']
let game_status = ''
let games_played = 0;

function setCurrentPlayer(){
//gets the current player x or o and changes value to the opposite o or x and save sto current_player array
if (current_player[0] == 'X'){
    current_player[0] = 'O'
  } else current_player[0] = 'X'
}

// checks if player has won or if it's a tie
// if it's a win or a tie, returns message to screen and sets the game status
function checkWinner(){
    if (boardTracker[0][0] !== '' && (boardTracker[0][0] == boardTracker[0][1] && boardTracker[0][1] == boardTracker[0][2])){
        changeMessage(`Player ${boardTracker[0][0]} Won! Congratulations!`,'');
        game_status = 'done';
    } else if (boardTracker[1][0] !== '' && (boardTracker[1][0] ==  boardTracker[1][1] &&  boardTracker[1][1] == boardTracker[1][2])){
        changeMessage(`Player ${boardTracker[1][0]} Won! Congratulations!`,'');
        game_status = 'done';
    }else if (boardTracker[2][0] !== '' && (boardTracker[2][0] ==  boardTracker[2][1] &&  boardTracker[2][1] == boardTracker[2][2])){
        changeMessage(`Player ${boardTracker[2][0]} Won! Congratulations!`,'');
        game_status = 'done';
    }else if (boardTracker[0][0] !== '' && (boardTracker[0][0] ==  boardTracker[1][0] &&  boardTracker[1][0] == boardTracker[2][0])){
        changeMessage(`Player ${boardTracker[0][0]} Won! Congratulations!`,'');
        game_status = 'done';
    }else if (boardTracker[0][1] !== '' && (boardTracker[0][1] ==  boardTracker[1][1] &&  boardTracker[1][1] == boardTracker[2][1])){
        changeMessage(`Player ${boardTracker[0][1]} Won! Congratulations!`,'');
        game_status = 'done';
    }else if (boardTracker[0][2] !== '' && (boardTracker[0][2] ==  boardTracker[1][2] &&  boardTracker[1][2] == boardTracker[2][2])){
        changeMessage(`Player ${boardTracker[0][2]} Won! Congratulations!`,'');
        game_status = 'done';
    }else if (boardTracker[0][0] !== '' && (boardTracker[0][0] ==  boardTracker[1][1] &&  boardTracker[1][1] == boardTracker[2][2])){
        changeMessage(`Player ${boardTracker[0][0]} Won! Congratulations!`,'');
        game_status = 'done';
    }else if (boardTracker[0][2] !== '' && (boardTracker[0][2] ==  boardTracker[1][1] &&  boardTracker[1][1] == boardTracker[2][0])){
        changeMessage(`Player ${boardTracker[0][2]} Won! Congratulations!`,'');
        game_status = 'done';
    }else if (games_played == 9) {
        changeMessage(`It's a Tie! End of Game.`,'')
    }else changeMessage(`It's your turn Player ${current_player[0]}.`,'')
    }


// evaluates users clicks on game board and sets values accordingly
// displays the correct value x or o on the board when the user clicks the square
// saves the correct value (x or o) to the array for the board entries
// changes player from x to o , or o to x


function setMove(element_num){
    if (document.getElementById("1") == element_num && boardTracker[0][0] == '' && game_status !== 'done') {
        boardTracker[0][0] = current_player[0];
        document.getElementById("1").innerHTML = current_player[0];
        console.log(boardTracker); 
        setCurrentPlayer();
        games_played++;
        checkWinner();
    } else if (document.getElementById("2") == element_num && boardTracker[0][1] == '' && game_status !== 'done') {
        boardTracker[0][1] = current_player[0];
        document.getElementById("2").innerHTML = current_player[0];
        console.log(boardTracker);
        setCurrentPlayer();
        games_played++;
        checkWinner();    
    } else if (document.getElementById("3") == element_num && boardTracker[0][2] == '' && game_status !== 'done') {
        boardTracker[0][2] = current_player[0];
        document.getElementById("3").innerHTML = current_player[0];
        console.log(boardTracker) ;   
        setCurrentPlayer();
        games_played++;
        checkWinner();
    } else if (document.getElementById("4") == element_num && boardTracker[1][0] == '' && game_status !== 'done') {
        boardTracker[1][0] = current_player[0];
        document.getElementById("4").innerHTML = current_player[0];
        console.log(boardTracker);
        setCurrentPlayer();
        games_played++;
        checkWinner();    
    } else if (document.getElementById("5") == element_num && boardTracker[1][1] == '' && game_status !== 'done') {
        boardTracker[1][1] = current_player[0];
        document.getElementById("5").innerHTML = current_player[0];
        console.log(boardTracker);
        setCurrentPlayer();
        games_played++;
        checkWinner();    
    } else if (document.getElementById("6") == element_num && boardTracker[1][2] == '' && game_status !== 'done') {
        boardTracker[1][2] = current_player[0];
        document.getElementById("6").innerHTML = current_player[0];
        console.log(boardTracker);
        setCurrentPlayer();
        games_played++;
        checkWinner();   
    } else if (document.getElementById("7") == element_num && boardTracker[2][0] == '' && game_status !== 'done') {
        boardTracker[2][0] = current_player[0];
        document.getElementById("7").innerHTML = current_player[0];
        console.log(boardTracker) ;
        setCurrentPlayer();
        games_played++;
        checkWinner();   
    } else if (document.getElementById("8") == element_num && boardTracker[2][1] == '' && game_status !== 'done') {
        boardTracker[2][1] = current_player[0];
        document.getElementById("8").innerHTML = current_player[0];
        console.log(boardTracker);
        setCurrentPlayer();
        games_played++;
        checkWinner();    
    } else if (document.getElementById("9") == element_num && boardTracker[2][2] == '' && game_status !== 'done') {
        boardTracker[2][2] = current_player[0];
        document.getElementById("9").innerHTML = current_player[0];
        console.log(boardTracker);
        setCurrentPlayer();
        games_played++;
        checkWinner();    
    } else {
        console.log("error")
    }
    
}

// event listeners for user's clicking squares on board

document.getElementById("1").addEventListener("click",function(){setMove(document.getElementById("1"))}, false);
document.getElementById("2").addEventListener("click",function(){setMove(document.getElementById("2"))}, false);
document.getElementById("3").addEventListener("click",function(){setMove(document.getElementById("3"))}, false);
document.getElementById("4").addEventListener("click",function(){setMove(document.getElementById("4"))}, false);
document.getElementById("5").addEventListener("click",function(){setMove(document.getElementById("5"))}, false);
document.getElementById("6").addEventListener("click",function(){setMove(document.getElementById("6"))}, false);
document.getElementById("7").addEventListener("click",function(){setMove(document.getElementById("7"))}, false);
document.getElementById("8").addEventListener("click",function(){setMove(document.getElementById("8"))}, false);
document.getElementById("9").addEventListener("click",function(){setMove(document.getElementById("9"))}, false);

document.querySelector("button").addEventListener("click",function(){clearGame()},false);






