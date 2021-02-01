//Generating player's turn randomly
let value = Math.floor(Math.random()*2)+1;
if(value === 1){
    document.getElementById('playerTurn').innerText = "Player 1 Starts"
}
else if(value === 2){
    document.getElementById('playerTurn').innerText = "Player 2 Starts"
}

let turn = "";
let gameOver = false;
function pickTurn (){
    if(value === 1){
        turn = "x";
        value = 2;
    }
    else if(value === 2){
        turn = "o";
        value = 1;
    }
}
const gamePiece1 = document.querySelector('.p1Piece');
console.log(gamePiece1);

const gamePiece2 = document.querySelector('.p2Piece');

//creates a node list
const empties = document.querySelectorAll('.empty');

let divARR = document.getElementsByClassName('empty');
for(let i =0; i<divARR.length; i++){
    divARR[i].addEventListener("click", myFunction);
}

let fill = false;
function myFunction(){
    window.onclick = e => {
        for(let i =0; i<divARR.length; i++){
            if(divARR[i].innerText.length > 0)
            {
                
                fill = true;
                
            } 
            else if(divARR[i].innerText.length === 0){
                fill = false;
                break;
            } 
        }
        if(fill === true)
        {
            alert("True");
            document.getElementById("displayWinner").innerText += "\nTIE!";
            gameOver = true;
            fill=false;
        }
        if(e.target.id.includes('box') && e.target.innerText.length === 0 && gameOver === false){
        pickTurn();
        document.getElementById(e.target.id).innerText = turn;
        } 
        if(gameOver!=true)
        {   //this is where we are creating the winning logic 
            //first index number will be what will go below 
            if(divARR[0].innerText === divARR[1].innerText && divARR[2].innerText === divARR[0].innerText)
            {
                if(divARR[0].innerText === "x"){
                    document.getElementById("displayWinner").innerText += "\nplayer 1 wins";
                    gameOver = true;
                } else if(divARR[0].innerText === "o"){
                    document.getElementById("displayWinner").innerText += "\nplayer 2 wins";
                    gameOver = true;
                }
            }
            else if(divARR[3].innerText === divARR[4].innerText && divARR[5].innerText === divARR[3].innerText)
            {
                if(divARR[3].innerText === "x"){
                    document.getElementById("displayWinner").innerText += "\nplayer 1 wins";
                    gameOver = true;
                } else if(divARR[3].innerText === "o"){
                    document.getElementById("displayWinner").innerText += "\nplayer 2 wins";
                    gameOver = true;
                }
            }
            else if(divARR[6].innerText === divARR[7].innerText && divARR[8].innerText === divARR[6].innerText)
            {
                if(divARR[6].innerText === "x"){
                    document.getElementById("displayWinner").innerText += "\nplayer 1 wins";
                    gameOver = true;
                } else if(divARR[6].innerText === "o"){
                    document.getElementById("displayWinner").innerText += "\nplayer 2 wins";
                    gameOver = true;
                }
            }
            else if(divARR[0].innerText === divARR[4].innerText && divARR[8].innerText === divARR[0].innerText)
            {
                if(divARR[0].innerText === "x"){
                    document.getElementById("displayWinner").innerText += "\nplayer 1 wins";
                    gameOver = true;
                } else if(divARR[0].innerText === "o"){
                    document.getElementById("displayWinner").innerText += "\nplayer 2 wins";
                    gameOver = true;
                }
            }
            else if(divARR[2].innerText === divARR[4].innerText && divARR[6].innerText === divARR[2].innerText)
            {
                if(divARR[2].innerText === "x"){
                    document.getElementById("displayWinner").innerText += "\nplayer 1 wins";
                    gameOver = true;
                } else if(divARR[2].innerText === "o"){
                    document.getElementById("displayWinner").innerText += "\nplayer 2 wins";
                    gameOver = true;
                }
            }
            else if(divARR[0].innerText === divARR[3].innerText && divARR[6].innerText === divARR[0].innerText)
            {
                if(divARR[0].innerText === "x"){
                    document.getElementById("displayWinner").innerText += "\nplayer 1 wins";
                    gameOver = true;
                } else if(divARR[0].innerText === "o"){
                    document.getElementById("displayWinner").innerText += "\nplayer 2 wins";
                    gameOver = true;
                }
            }
            else if(divARR[1].innerText === divARR[4].innerText && divARR[7].innerText === divARR[1].innerText)
            {
                if(divARR[1].innerText === "x"){
                    document.getElementById("displayWinner").innerText += "\nplayer 1 wins";
                    gameOver = true;
                } else if(divARR[1].innerText === "o"){
                    document.getElementById("displayWinner").innerText += "\nplayer 2 wins";
                    gameOver = true;
                }
            }
            else if(divARR[2].innerText === divARR[5].innerText && divARR[8].innerText === divARR[2].innerText)
            {
                if(divARR[2].innerText === "x"){
                    document.getElementById("displayWinner").innerText += "\nplayer 1 wins";
                    gameOver = true;
                } else if(divARR[2].innerText === "o"){
                    document.getElementById("displayWinner").innerText += "\nplayer 2 wins";
                    gameOver = true;
                }
            }
        }
        
    }
}

function clearBoard(){
    for(let i =0; i<divARR.length; i++){
        divARR[i].innerText = "";
        document.getElementById("displayWinner").innerText = "Who's going to win? "; 
        gameOver = false;
    }
}

























// //game piece listeners
// gamePiece1.addEventListener('dragstart', dragStart);
// gamePiece1.addEventListener('dragend', dragEndP1);

// gamePiece2.addEventListener('dragstart', dragStart);
// gamePiece2.addEventListener('dragend', dragEndP2);

// //Drag functions
// function dragStart () {
//     //appends element class name to add hold class
//     //hold class is used to differantiate when object is being dragged 
//     this.className += ' hold';
//     //this makes it so the original image being dragged disappears(css style sheet)
//     //once it is dragged - with a timer set to 0
//    setTimeout(() => this.className = 'invisible, 0');  
// }
// function dragEndP1 () {
//     this.className = 'p1Piece';
// }
// function dragEndP2 () {
//     this.className = 'p2Piece';
// }

// //Loop through empties and call drag events
// for(const empty of empties){
//     empty.addEventListener('dragover', dragOver);
//     empty.addEventListener('dragenter', dragEnter);
//     empty.addEventListener('dragleave', dragLeave);
//     empty.addEventListener('dragdrop', dragDrop);
//     //empty.addEventListener('dragdrop', dragDrop2);
// }

// function dragOver (e) {
//     //prevents the devault event
//     e.preventDefault();
//     console.log('over');
// }
// function dragEnter (e) {
//     console.log('enter');
//     e.preventDefault();
//     //appends class name of empty to add hovered 
//    this.className += ' hovered';


// }
// //replaces class name
// function dragLeave(e) {
//     e.className = 'empty';
//     console.log('empty');
    
//     //gets rid of the hovered class
//     //sets class name to empty
   
// }


// function dragDrop(event) {
//     console.log('drop');

//     var id = '';

//     event.preventDefault();

//     if($(this).children().length){return;}

//     id = event.originalEvent.dataTransfer.getData("id");

//     $(event.target).addClass('hasChild');

//     $(document).trigger('custom:dropEvent');

//     event.target.appendChild(document.getElementById(id));




//     // console.log('drop');
//     // this.className = 'empty';
    


//     // if(dragStart === gamePiece1){
//     //     this.append(gamePiece1);
//     // }else if (dragStart === gamePiece2){
//     //     this.append(gamePiece2);
//     // }
// }

// // function dragDrop2() {
// //     this.className = 'empty';
// //     this.append(gamePiece2);
// // }