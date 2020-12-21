
// Create boilerplate
// Create Divs and text in html
// create board in Css
// get fresh load state of board looking correct
// 	(including player ones turn)
// 	create js functions to change square div according to turn 
// 	create js ways to define player turn 

// 	create function to check for win/tie condition after each click and apply to div 
// create reset button function

let winWindow
let reset
let playStatus 
let count = 0
let playerX = []
let playerO = []
const tie  ="/home/jj/Desktop/general_assembly/unit_one/homeworks/tictacoldtownroad/sei-tic-tac-toe/sei-tic-tac-toe/images/tie.gif";
const oImg ="/home/jj/Desktop/general_assembly/unit_one/homeworks/tictacoldtownroad/sei-tic-tac-toe/sei-tic-tac-toe/images/sheriff.jpeg";
const xImg ="/home/jj/Desktop/general_assembly/unit_one/homeworks/tictacoldtownroad/sei-tic-tac-toe/sei-tic-tac-toe/images/lilx.gif";
const oWin ="/home/jj/Desktop/general_assembly/unit_one/homeworks/tictacoldtownroad/sei-tic-tac-toe/sei-tic-tac-toe/images/xwins.jpg";
const xWin ="/home/jj/Desktop/general_assembly/unit_one/homeworks/tictacoldtownroad/sei-tic-tac-toe/sei-tic-tac-toe/images/owins.jpg";
const playerTurnX ="/home/jj/Desktop/general_assembly/unit_one/homeworks/tictacoldtownroad/sei-tic-tac-toe/sei-tic-tac-toe/images/xhead.jpg";
const playerTurnRock ="/home/jj/Desktop/general_assembly/unit_one/homeworks/tictacoldtownroad/sei-tic-tac-toe/sei-tic-tac-toe/images/smallchead.jpg";
let playerPic = document.querySelector(".whoTurn")
function takeTurn (target) {
    count++
    if (count % 2 == 0 ) {
        // if even x's turn if odd = o's turn
        playerX.push (target.id)
        target.classList.add("xMove")
        console.log(playerX)
        checkWin (playerX)
        
        playerPic.src = playerTurnX; 

               

       
    } else {
        console.log("odd");
        playerO.push (target.id)
        target.classList.add("oMove")
        console.log(playerO)
        checkWin (playerO)
        playerPic.src = playerTurnRock;

    } 



    function whosturn() {
        let playerRock = document.querySelector(".whoTurn")
        playerRock.src = playerTurnRock
    }
}
function checkWin () {
    if (playerX.includes("a1") && playerX.includes("a2") && playerX.includes("a3")){
        console.log("wino");
            let winnerx = document.querySelector(".winner");
            winnerx.src = oWin;
        
        }   else if (playerX.includes("c7") && playerX.includes("c8") && playerX.includes("c9")){
        console.log("wino");
        let winnerx = document.querySelector(".winner");
        winnerx.src = oWin;
        }   else if (playerX.includes("a1") && playerX.includes("b4") && playerX.includes("c7")){
        console.log("wino");
        let winnerx = document.querySelector(".winner");
        winnerx.src = oWin;
        }   else if (playerX.includes("a2") && playerX.includes("b5") && playerX.includes("c8")){
        console.log("wino");
        let winnerx = document.querySelector(".winner");
        winnerx.src = oWin;
        }   else if (playerX.includes("a3") && playerX.includes("b6") && playerX.includes("c9")){
                console.log("wino");
                let winnerx = document.querySelector(".winner");
                winnerx.src = oWin;
        }    else if (playerX.includes("c9") && playerX.includes("a1") && playerX.includes("b5")){
                    console.log("wino");
                    let winnerx = document.querySelector(".winner");
                    winnerx.src = oWin;
        }   else if (playerX.includes("b4") && playerX.includes("b5") && playerX.includes("b6")){
                    console.log("wino");
                    let winnerx = document.querySelector(".winner");
                    winnerx.src = oWin;
        }   else if (playerX.includes("a3") && playerX.includes("b5") && playerX.includes("c7")){
                    console.log("wino");
                    let winnerx = document.querySelector(".winner");
                    winnerx.src = oWin;
        }   else if (playerO.includes("a1") && playerO.includes("a2") && playerO.includes("a3")){
                    console.log("winx");
                    let winnerx = document.querySelector(".winner");
                    winnerx.src = xWin;
        }    else if (playerO.includes("b4") && playerO.includes("b5") && playerO.includes("b6")){
                    console.log("WINx");
                    let winnerx = document.querySelector(".winner");
                    winnerx.src = xWin;
        }   else if (playerO.includes("c7") && playerO.includes("c8") && playerO.includes("c9")){
                    console.log("WINCx");
                    let winnerx = document.querySelector(".winner");
                    winnerx.src = xWin;
        }   else if (playerO.includes("a1") && playerO.includes("b4") && playerO.includes("c7")){
                    console.log("WINCx");
                    let winnerx = document.querySelector(".winner");
                    winnerx.src = xWin;
        }   else if (playerO.includes("a2") && playerO.includes("b5") && playerO.includes("c8")){
                    console.log("WINC1x");
                    let winnerx = document.querySelector(".winner");
                    winnerx.src = xWin;
        }   else if (playerO.includes("a3") && playerO.includes("b6") && playerO.includes("c9")){
                    console.log("WINC1x");
                    let winnerx = document.querySelector(".winner");
                    winnerx.src = xWin;
        }    else if (playerO.includes("c9") && playerO.includes("a1") && playerO.includes("b5")){
                        console.log("WINOOx");
                        let winnerx = document.querySelector(".winner");
                    winnerx.src = xWin;
        }   else if (playerO.includes("c9") && playerO.includes("a1") && playerO.includes("b5")){
                        console.log("WINx");
                        let winnerx = document.querySelector(".winner");
                    winnerx.src = xWin;
    }   else if (playerO.includes("a3") && playerO.includes("b5") && playerO.includes("c7")){
                        console.log("WINx");
                        let winnerx = document.querySelector(".winner");
                    winnerx.src = xWin;
    }   else if (count == 9) {
        console.log("tie");
        let nowin = document.querySelector(".winner");
            nowin.src = tie;
    
    } 
}
                                              

    
    // function checkWin (playerO) {
    //     if (playerO.includes("a1") && playerO.includes("a2") && playerO.includes("a3")){
    //         console.log("win");
    //         //find way to chain
    //         }    else if (playerO.includes("b4") && playerO.includes("b5") && playerO.includes("b6")){
    //             console.log("WINOOO");
    //         }   else if (playerO.includes("c7") && playerO.includes("c8") && playerO.includes("c9")){
    //         console.log("WINCOOO");
    //         }   else if (playerO.includes("a1") && playerO.includes("b4") && playerO.includes("c7")){
    //         console.log("WINC1OOO");
    //         }   else if (playerO.includes("a2") && playerO.includes("b5") && playerO.includes("c8")){
    //         console.log("WINC11OOO");
    //         }   else if (playerO.includes("a3") && playerO.includes("b6") && playerO.includes("c9")){
    //         console.log("WINC12OOOO");
    //         }    else if (playerO.includes("c9") && playerO.includes("a1") && playerO.includes("b5")){
    //             console.log("WINCcross1OOOO");
    //         }   else if (playerO.includes("c9") && playerO.includes("a1") && playerO.includes("b5")){
    //             console.log("WINCcross1OOO");
    //         }   else if (playerO.includes("a3") && playerO.includes("b5") && playerO.includes("c7")){
    //             console.log("WINCcross2OOO");
    //         }                
    
    //     }
    


document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    let boxs = document.querySelectorAll(".box")
    boxs.forEach(box=> {
        box.addEventListener("click", e=> {
            console.log(e.target.id)
            takeTurn(e.target)
           
        }, {once: true});
    }) 
})

// let resetb = document.querySelector(".reset")
// resetb.addEventListener("click", e=> {document.write(takeTurn);
//     nxt = undefined; // unset
//    delete(takeTurn); // this removes the variable completely
//    document.write(takeTurn); // the result will be undefined
//  })
// // function xWon() {
//     Let; xWon = document.querySelector(".winner")
// }
// combos that win game = aaa, bbb, ccc, 1,4,7, 2,5,8, 3,5,9
// a1 b5 c9,   a3, b5, c7


// a1 = document.querySelector(".a1");
// a2 = document.querySelector(".a2");
// a3 = document.querySelector(".a3");
// b4 = document.querySelector(".b4");
// b5 = document.querySelector(".b5");
// b6 = document.querySelector(".b6");
// c7 = document.querySelector(".c7");
// c8 = document.querySelector(".c8");
// c9 = document.querySelector(".c9");
// 

// pa1 = document.querySelector(".pa1");
// pa2 = document.querySelector(".pa2");
// pa3 = document.querySelector(".pa3");
// pb4 = document.querySelector(".pb4");
// pb5 = document.querySelector(".pb5");
// pb6 = document.querySelector(".pb6");
// pc7 = document.querySelector(".pc7");
// pc8 = document.querySelector(".pc8");
// pc9 = document.querySelector(".pc9");
//     pa1 = document.querySelector(".pa1");
//     a1.addEventListener.onclick, (e) => {
//     console.log("click");
//     pa1.src = xImg;
// }})


// a1.addEventListener("click", (e) => {

//     console.log("clickl"); 
//     pa1.src = xImg;
// })
// a2.addEventListener("click", (e) => {

//     console.log("clickl"); 
//     pa2.src = oImg;
// })
// a3.addEventListener("click", (e) => {

//     console.log("clickl"); 
//     pa3.src = xImg;
// })
// b4.addEventListener("click", (e) => {

//     console.log("clickl"); 
//     pb4.src = xImg;
// })
// b5.addEventListener("click", (e) => {

//     console.log("clickl"); 
//     pb5.src = xImg;
// })
// b6.addEventListener("click", (e) => {

//     console.log("clickl"); 
//     pb6.src = xImg;
// })
// c7.addEventListener("click", (e) => {

//     console.log("clickl"); 
//     pc7.src = xImg;
// })
// c8.addEventListener("click", (e) => {

//     console.log("clickl"); 
//     pc8.src = xImg;
// })
// c9.addEventListener("click", (e) => {

//     console.log("clickl"); 
//     pc9.src = xImg;
// })












// function xTurn() {
//     parseFloat.src = xImg;
// }





// // // const newLocal = document.getElementByClass("a1") function() {style.color = "blue"; 
// // }
// let a1c = document.querySelector("div").className;

// a1.style.backgroundColor= 'black';
// // .onclick = function () {
//     console.log("click");
//     // .a1
  
// // document.getElementsByClassName("a1").onclick.a1.innerHTML="X!!S";
// // ()=> {document.getElementByClass("a1").src = "http://placekitten.com/g/200/300"; 
//     // }}    

// // function ShowUndo() 
// // {
// //     document.getElementById("image").src = "http://www.userinterfaceicons.com/80x80/undo.png"; 
// // }   
//     // document.querySelector(".a1").style.transform.background-color = red;
    

//     //your code here
    

// // addEventListener("onClick", () =>  {
// //     console.log("clickmore")
// // });