let topLeftBtn;
let middleLeftBtn;
let bottomLeftBtn;
let topMiddleBtn;
let middleBtn;
let bottomMiddleBtn;
let topRightBtn;
let middleRightBtn;
let bottomRightBtn;
let player1;
let player2;

let turns = 0// every time someone takes a turn it gets icrimented
let xMoves = [];
let oMoves = [];
// every time a player moves we push e.target.id to the corridponding array this will be in the take
// turn funcion


const xImg = 'https://images.squarespace-cdn.com/content/v1/55ece940e4b048d1ed401c11/1450136257542-4DATU4KRB70MDENGJXJX/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwkCFOLgzJj4yIx-vIIEbyWWRd0QUGL6lY_wBICnBy59Ye9GKQq6_hlXZJyaybXpCc/X%3A++The+Unknown;'
const oImg = 'https://www.airfrance.us/US/common/common/img/tbaf/news/XXX/credits-photo-o/XXX-credits-photo-o-1_1-1024x1024.jpg;'
// take turn is going to call check win at the end of the function
function takeTurn() {
    return;
}

function checkWin() {
    player1.addEventListener('click', (e) => {
    })
    return;
}

function resetBoard() {
    return;
}

document.addEventListener("DOMContentLoaded", (e) => {
    let topLeftBtn = document.querySelector ('topLeftButton');
    let box2Btn = document.querySelector ('box2');
    let box3Btn = document.querySelector ('box3');
    let box4Btn = document.querySelector ('box4');
    let box5Btn = document.querySelector ('box5');
    let box6Btn = document.querySelector ('box6');
    let box7Btn = document.querySelector ('box7');
    let box8Btn = document.querySelector ('box8');
    let box9Btn = document.querySelector ('box9');
    let squares = document.querySelectorAll ('.square')
    
    
    squares.forEach (sq=> {
        sq.addEventListener ('click', (e)=> {
            console.log(e.target.id)
        }) 
        if (player1 === true) {
            player1.addEventListener('click', xMoves('x'));
            player1 = true;
        } else {
            player2 = false;
        }
        return('x');
    })
    
    //      box1Btn.addEventListener("click", (e) => {
        
//  })
})

// x and o that switch back and forth
// declare global variables
// how many turns have been taken
// 8 different win conditons
// win and lose outcome
