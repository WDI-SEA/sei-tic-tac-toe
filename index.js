let playerMove = 0;
let playerOne = "narwhal";
let playerTwo = "unicorn";
let b2 = document.getElementById("b2").classList;
let b4 = document.getElementById("b4").classList;
let b6 = document.getElementById("b6").classList;
let d2 = document.getElementById("d2").classList;
let d4 = document.getElementById("d4").classList;
let d6 = document.getElementById("d6").classList;
let f2 = document.getElementById("f2").classList;
let f4 = document.getElementById("f4").classList;
let f6 = document.getElementById("f6").classList;

function determineWin(){
    //123 - row 1
    let p1Win1 = b2.contains(playerOne) && b4.contains(playerOne) && b6.contains(playerOne);
    let p2Win1 = b2.contains(playerTwo) && b4.contains(playerTwo) && b6.contains(playerTwo);
    //456 - row 2
    let p1Win2 = d2.contains(playerOne) && d4.contains(playerOne) && d6.contains(playerOne);
    let p2Win2 = d2.contains(playerTwo) && d4.contains(playerTwo) && d6.contains(playerTwo);
    //789 - row 3
    let p1Win3 = f2.contains(playerOne) && f4.contains(playerOne) && f6.contains(playerOne);
    let p2Win3 = f2.contains(playerTwo) && f4.contains(playerTwo) && f6.contains(playerTwo);
    //159 - diagonal (top left -> bottom right)
    let p1Win4 = b2.contains(playerOne) && d4.contains(playerOne) && f6.contains(playerOne);
    let p2Win4 = b2.contains(playerTwo) && d4.contains(playerTwo) && f6.contains(playerTwo);
    //357 - diagonal (top right -> bottom left)
    let p1Win5 = b6.contains(playerOne) && d4.contains(playerOne) && f2.contains(playerOne);
    let p2Win5 = b6.contains(playerTwo) && d4.contains(playerTwo) && f2.contains(playerTwo);
    //147 - column 1
    let p1Win6 = b2.contains(playerOne) && d2.contains(playerOne) && f2.contains(playerOne);
    let p2Win6 = b2.contains(playerTwo) && d2.contains(playerTwo) && f2.contains(playerTwo);
    //258 - column 2
    let p1Win7 = b4.contains(playerOne) && d4.contains(playerOne) && f4.contains(playerOne);
    let p2Win7 = b4.contains(playerTwo) && d4.contains(playerTwo) && f4.contains(playerTwo);
    //369 - column 3
    let p1Win8 = b6.contains(playerOne) && d6.contains(playerOne) && f6.contains(playerOne);
    let p2Win8 = b6.contains(playerTwo) && d6.contains(playerTwo) && f6.contains(playerTwo); 

    if(p1Win1 || p1Win2 || p1Win3 || p1Win4 || p1Win5 || p1Win6 ||p1Win7 || p1Win8 ){
        console.log("player one wins!")
    } else if (p2Win1 || p2Win2 || p2Win3 || p2Win4 || p2Win5 || p2Win6 ||p2Win7 || p2Win8){
        console.log("player two wins!")
    } else if (playerMove === 9){
        console.log("it's a tie!")
    }
}




function determineWhichPlayer() {
    if (playerMove % 2 === 0){
        return playerOne;
    } else{
        return playerTwo;
    }
}

function addingEventListeners(){
    let cells = document.getElementsByTagName("div");
    let length = cells.length;
    for(let i = 0; i < length; i++){
        if(cells[i].id != ""){
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
