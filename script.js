
document.addEventListener('DOMContentLoaded', function () {
    let items = document.querySelectorAll('.item');
    let player1 = document.getElementById('player1');
    let player2 = document.getElementById('player2');
    let counter1Div = document.getElementById('counter-1');
    let counter2Div = document.getElementById('counter-2');
    let winnerBanner = document.querySelector('.winner-banner');
    let reset = document.querySelector('.reset');
    let playerTurn = 0;
    let playBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    let clickedIndexes = [];
    win = false;
    let counter1 = 0;
    let counter2 = 0;

    
    player1.classList.add('current-player');


 
    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener('click', function () { 
            if (win === false) {

                if (playerTurn === 0) {
                    checkPlayerTurn(0, i);
                    playBoard[i] = 0;
                    clickedIndexes.push(i);
                    if (clickedIndexes.length >= 5){
                        if (winning(0)) {
                            counter1++;
                            counter1Div.innerText = `${counter1}`;
                            winnerBanner.innerHTML= "<h2 class='player1-x'> player 1 is the winner!</h2>";
                        }
                    }
                    
                } else {
                    checkPlayerTurn(1, i);
                    playBoard[i] = 1;
                    clickedIndexes.push(i);
                    if (clickedIndexes.length >= 5) {
                        if (winning(1)) {
                            counter2++;
                            counter2Div.innerText = `${counter2}`;
                            winnerBanner.innerHTML= "<h2 class='player2-o'> player 2 is the winner!</h2>";
                        }
                    }
                  
                }
            }
             
        })

        
    }

    function checkPlayerTurn(player, i) {
        if (player === 1) {
            player1.classList.add('current-player');
            player2.classList.remove('current-player');
            items[i].innerHTML = '<i class="fa-sharp fa-solid fa-o player2-o"></i>'; 
            playerTurn = 0; 
        } else {
            player2.classList.add('current-player');
            player1.classList.remove('current-player');
            items[i].innerHTML = '<i class="fa-sharp fa-solid fa-xmark player1-x"></i>';
            playerTurn = 1;
            
        }
       
    }

    reset.addEventListener('click',function restartGame() {
        playBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        clickedIndexes = [];
        playerTurn = 0;
        player2.classList.remove('current-player');
        player1.classList.add('current-player');
        winnerBanner.innerHTML= "";
        win = false;
        for (let i = 0; i < items.length; i++) {
            items[i].innerHTML = '';
        }
    })


    function winning(player) {
        if (
        (playBoard[0] == player && playBoard[1] == player && playBoard[2] == player) ||
        (playBoard[3] == player && playBoard[4] == player && playBoard[5] == player) ||
        (playBoard[6] == player && playBoard[7] == player && playBoard[8] == player) ||
        (playBoard[0] == player && playBoard[3] == player && playBoard[6] == player) ||
        (playBoard[1] == player && playBoard[4] == player && playBoard[7] == player) ||
        (playBoard[2] == player && playBoard[5] == player && playBoard[8] == player) ||
        (playBoard[0] == player && playBoard[4] == player && playBoard[8] == player) ||
        (playBoard[2] == player && playBoard[4] == player && playBoard[6] == player)
        ) {
            // alert(`Player ${player + 1} Wins`);
            win = true;
            return true;
        } else if (clickedIndexes.length === 9) {
            winnerBanner.innerHTML= "<h2>It's a draw, play again!</h2>";
            return false;
        } else {
            return false;
            
        }
}



});