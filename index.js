var playerMove = 0,
    playerOne = "narwhal",
    playerTwo = "unicorn",
    b2 = document.getElementById("b2").classList,
    b4 = document.getElementById("b4").classList,
    b6 = document.getElementById("b6").classList,
    d2 = document.getElementById("d2").classList,
    d4 = document.getElementById("d4").classList,
    d6 = document.getElementById("d6").classList,
    f2 = document.getElementById("f2").classList,
    f4 = document.getElementById("f4").classList,
    f6 = document.getElementById("f6").classList,
    resetButton = document.querySelector("button"),
    cells = document.getElementsByTagName("div"),
    length = cells.length,
    gameBoard = document.querySelector(".grid-container"),
    p1Win1,
    p2Win1,
    p1Win2,
    p2Win2,
    p1Win3,
    p2Win3,
    p1Win4,
    p2Win4,
    p1Win5,
    p2Win5,
    p1Win6,
    p2Win6,
    p1Win7,
    p2Win7,
    p1Win8,
    p2Win8;


function addingEventListeners(){
    playerMove = 0;
    document.getElementsByClassName("winner")[0].style.display = "none";

    for(let i = 0; i < length; i++){
        if(cells[i].id != "" && cells[i].classList.contains(playerOne) || 
        cells[i].id != "" && cells[i].classList.contains(playerTwo)){
            cells[i].classList.remove(playerOne);
            cells[i].classList.remove(playerTwo);
        }
    }

    for(let i = 0; i < length; i++){
        if(cells[i].id != ""){
            cells[i].style.cursor = "pointer";
            cells[i].addEventListener("click", (e) =>{
                let picture = determineWhichPlayer();
                cells[i].classList.add(picture);
                cells[i].style.cursor = "auto";
                playerMove++;
                determineWin();
            }, {once: true});
        }
    }
}

addingEventListeners();

function determineWin(){
    //123 - row 1
    p1Win1 = b2.contains(playerOne) && b4.contains(playerOne) && b6.contains(playerOne);
    p2Win1 = b2.contains(playerTwo) && b4.contains(playerTwo) && b6.contains(playerTwo);
    //456 - row 2
    p1Win2 = d2.contains(playerOne) && d4.contains(playerOne) && d6.contains(playerOne);
    p2Win2 = d2.contains(playerTwo) && d4.contains(playerTwo) && d6.contains(playerTwo);
    //789 - row 3
    p1Win3 = f2.contains(playerOne) && f4.contains(playerOne) && f6.contains(playerOne);
    p2Win3 = f2.contains(playerTwo) && f4.contains(playerTwo) && f6.contains(playerTwo);
    //159 - diagonal (top left -> bottom right)
    p1Win4 = b2.contains(playerOne) && d4.contains(playerOne) && f6.contains(playerOne);
    p2Win4 = b2.contains(playerTwo) && d4.contains(playerTwo) && f6.contains(playerTwo);
    //357 - diagonal (top right -> bottom left)
    p1Win5 = b6.contains(playerOne) && d4.contains(playerOne) && f2.contains(playerOne);
    p2Win5 = b6.contains(playerTwo) && d4.contains(playerTwo) && f2.contains(playerTwo);
    //147 - column 1
    p1Win6 = b2.contains(playerOne) && d2.contains(playerOne) && f2.contains(playerOne);
    p2Win6 = b2.contains(playerTwo) && d2.contains(playerTwo) && f2.contains(playerTwo);
    //258 - column 2
    p1Win7 = b4.contains(playerOne) && d4.contains(playerOne) && f4.contains(playerOne);
    p2Win7 = b4.contains(playerTwo) && d4.contains(playerTwo) && f4.contains(playerTwo);
    //369 - column 3
    p1Win8 = b6.contains(playerOne) && d6.contains(playerOne) && f6.contains(playerOne);
    p2Win8 = b6.contains(playerTwo) && d6.contains(playerTwo) && f6.contains(playerTwo); 

    console.log(b2.contains(playerOne));
    if(p1Win1 || p1Win2 || p1Win3 || p1Win4 || p1Win5 || p1Win6 ||p1Win7 || p1Win8 ){
        document.getElementsByClassName("winner")[0].innerText = "Narwhal wins! #Evolution";
        document.getElementsByClassName("winner")[0].style.display = "block";
        gameOver();
    } else if (p2Win1 || p2Win2 || p2Win3 || p2Win4 || p2Win5 || p2Win6 ||p2Win7 || p2Win8){
        document.getElementsByClassName("winner")[0].innerText = "Unicorn wins! #Magical";
        document.getElementsByClassName("winner")[0].style.display = "block";
        gameOver();
    } else if (playerMove === 9){
        document.getElementsByClassName("winner")[0].innerText = "It's a tie!";
        document.getElementsByClassName("winner")[0].style.display = "block";
        gameOver();
    }
}

function determineWhichPlayer() {
    if (playerMove % 2 === 0){
        return playerOne;
    } else{
        return playerTwo;
    }
}


function gameOver(){
  for(let i = 0; i < length; i++){
    if(cells[i].id != ""){
        cells[i].style.cursor = "auto";
        cells[i].outerHTML = cells[i].outerHTML;
    }    
 }
}


/* Reset Button -- not the cleanest. I tried to do a reset without a page refresh and I had an issue where within "determineWin" it wouldn't register
the classList had been removed. Then it kept calling that the class list had been removed and 
therefore after the first play through the game would never determineWin because it couldn't tell that playerOne/playerTwo was attached to a square.
 */

resetButton.addEventListener("click", refresh);
    
function refresh(){
    window.location.href=window.location.href;
}