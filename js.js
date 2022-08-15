// grab that buttons (squares) from the html
// make it so the user can click on a square
/* if the user clicks on the square 
create a css " X " or "O" depending on which they choose 
*/

/*
            starter Ideas -- not best ideas just first glance thoughts
a switch set to true that that activates when 3 x / o's are lined up

function and if statement such as if(x || o is in grid) prevent user from reusing square else(let user use x || o)

literally use the letter X or O to fill squares.

use Id / class tags and number them to know which square was clicked 


*/

const gameBoard = document.getElementsByClassName("gameBoard")

const buttons = document.getElementsByClassName("buttons")
const btnOne = document.getElementById("btnOne")
const btnTwo = document.getElementById("btnTwo")
const btnThree = document.getElementById("btnThree")
const btnFour = document.getElementById("btnFour")
const btnFive = document.getElementById("btnFive")
const btnSix = document.getElementById("btnSix")
const btnSeven = document.getElementById("btnSeven")
const btnEight = document.getElementById("btnEight")
const btnNine = document.getElementById("btnNine")


let numberOfMoves2 = 0
let player2 = 0

if(numberOfMoves2 === 0 && player2 === 0){
    const onePushed = document.getElementById("theX")
    btnOne.addEventListener("click", function(push){
        onePushed.style.display = "";
        onePushed.style.color = "blue";
        player2++
        console.log(numberOfMoves2 +" P1")
        console.log(player2 + " P2")
    })
    const twoPushed = document.getElementById("x2")
    btnTwo.addEventListener("click", function(push){
    twoPushed.style.display = "";
    twoPushed.style.color = "blue";
    player2++
    console.log(numberOfMoves2 +" P1")
    console.log(player2 + " P2")
    })
    const threePushed = document.getElementById("x3")
    btnThree.addEventListener("click", function(push){
    threePushed.style.display = "";
    threePushed.style.color = "blue";
    player2++
    console.log(numberOfMoves2 +" P1")
    console.log(player2 + " P2")
    })
    const fourPushed = document.getElementById("x4")
    btnFour.addEventListener("click", function(push){
    fourPushed.style.display = "";
    fourPushed.style.color = "blue";
    player2++
    console.log(numberOfMoves2 +" P1")
    console.log(player2 + " P2")
    })
    const fivePushed = document.getElementById("x5")
    btnFive.addEventListener("click", function(push){
        fivePushed.style.display = "";
        fivePushed.style.color = "blue";
        player2++
        console.log(numberOfMoves2 +" P1")
        console.log(player2 + " P2")
    })
    const sixPushed = document.getElementById("x6")
    btnSix.addEventListener("click", function(push){
        sixPushed.style.display = "";
        sixPushed.style.color = "blue";
        player2++
        console.log(numberOfMoves2 +" P1")
        console.log(player2 + " P2")
    })
    const sevenPushed = document.getElementById("x7")
    btnSeven.addEventListener("click", function(push){
        sevenPushed.style.display = "";
        sevenPushed.style.color = "blue";
        player2++
        console.log(numberOfMoves2 +" P1")
        console.log(player2 + " P2")
    })
    const eightPushed = document.getElementById("x8")
    btnEight.addEventListener("click", function(push){
        eightPushed.style.display = "";
        eightPushed.style.color = "blue";
        player2++
        console.log(numberOfMoves2 +" P1")
        console.log(player2 + " P2")
    })
    const ninePushed = document.getElementById("x9")
    btnNine.addEventListener("click", function(push){
        ninePushed.style.display = "";
        ninePushed.style.color = "blue";
        player2++
        console.log(numberOfMoves2 +" P1")
        console.log(player2 + " P2")
    })

}else if(player2 === 1 && numberOfMoves2 === 0){
     const onePushed = document.getElementById("theX")
     btnOne.addEventListener("click", function(push){
         onePushed.style.display = "";
        onePushed.style.color = "red";
         player2--
        console.log(player2 + "P2")
        console.log(numberOfMoves2 + "P1")
    })
    const twoPushed = document.getElementById("x2")
    btnTwo.addEventListener("click", function(push){
    twoPushed.style.display = "";
    twoPushed.style.color = "red";
    player2--
    console.log(player2 + "P2")
    console.log(numberOfMoves2 + "P1")
    })
    const threePushed = document.getElementById("x3")
    btnThree.addEventListener("click", function(push){
    threePushed.style.display = "";
    threePushed.style.color = "red";
    player2--
        console.log(player2 + "P2")
        console.log(numberOfMoves2 + "P1")
    })
    const fourPushed = document.getElementById("x4")
    btnFour.addEventListener("click", function(push){
    fourPushed.style.display = "";
    fourPushed.style.color = "red";
    player2--
        console.log(player2 + "P2")
        console.log(numberOfMoves2 + "P1")
    })
    const fivePushed = document.getElementById("x5")
    btnFive.addEventListener("click", function(push){
        fivePushed.style.display = "";
        fivePushed.style.color = "red";
        player2--
       console.log(player2 + "P2")
       console.log(numberOfMoves2 + "P1")
    })
    const sixPushed = document.getElementById("x6")
    btnSix.addEventListener("click", function(push){
        sixPushed.style.display = "";
        sixPushed.style.color = "red";
        player2--
       console.log(player2 + "P2")
       console.log(numberOfMoves2 + "P1")
    })
    const sevenPushed = document.getElementById("x7")
    btnSeven.addEventListener("click", function(push){
        sevenPushed.style.display = "";
        sevenPushed.style.color = "red";
        player2--
       console.log(player2 + "P2")
       console.log(numberOfMoves2 + "P1")
    })
    const eightPushed = document.getElementById("x8")
    btnEight.addEventListener("click", function(push){
        eightPushed.style.display = "";
        eightPushed.style.color = "red";
        player2--
       console.log(player2 + "P2")
       console.log(numberOfMoves2 + "P1")
    })
    const ninePushed = document.getElementById("x9")
    btnNine.addEventListener("click", function(push){
        ninePushed.style.display = "";
        ninePushed.style.color = "red";
        player2--
       console.log(player2 + "P2")
       console.log(numberOfMoves2 + "P1")
    })
}
// so many problems I need to revisit this code.
// I have already started working on another version of this code

// // function help(callback) {

//     var tag = document.createElement("p"); // <p></p>
//     var text = document.createTextNode("X"); 
//     tag.appendChild(text); // <p>TEST TEXT</p>
//     var element = document.getElementsByTagName("body")[0];
//     element.appendChild(tag); // <body> <p>TEST TEXT</p> </body>
//     tag.setAttribute("class", "pOne")
//     tag.setAttribute("id", "missing")
//     let missing = document.getElementById("missing")
//     missing.style.display = "none"

// function btn2(){
//     btnTwo.addEventListener("click",function help(){
//         tag.setAttribute("id", "numTwo");
//         let moveText = document.getElementById("numTwo")
//         moveText.style.display = ""
//         moveText.style.left = 37 + "%";
//         })
//     }
//     btnThree.addEventListener("click", function btnPress3(){
//         tag.setAttribute("id", "test");
//         let moveText = document.getElementById("test")
//         moveText.style.display = ""
//         moveText.style.left = 49 + "%";
//         moveText.style.top = -14 + "%";
//     })


