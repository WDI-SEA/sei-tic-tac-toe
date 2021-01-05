const squares = ['nw', 'n', 'ne', 'w', 'c', 'e', 'sw', 's', 'se'];
const victoryConditions = [
    ['nw', 'n', 'ne'],
    ['nw', 'c', 'se'],
    ['nw', 'w', 'sw'],
    ['n', 'c', 's'],
    ['ne', 'e', 'se'],
    ['ne', 'c', 'sw'],
    ['w', 'c', 'e'],
    ['sw', 's', 'se']
];
let playerOne;
let s1;
let s2;
let s3;
let s4;
let s5;
let s6;
let s7;
let s8;
let s9;
let click = 0;

function gameLoop() {

document.getElementById('nw').addEventListener('click', counting);
function counting() {
    click++
    console.log(click)
    playerOne = (click + 1) % 2
    console.log(playerOne)
    if(playerOne === 0) {
        document.getElementById('nw').innerHTML="<img src='https://i.imgur.com/BOaH87V.jpeg' />";
        s1 = true;
        
    } else {
        document.getElementById('nw').innerHTML="<img src='https://i.imgur.com/Bl3Rsnk.png' />";
        console.log('gator')
        s1 = false;
    } 
    document.getElementById('nw').removeEventListener('click', counting);
    console.log(s1)
    checkVictory()
}

document.getElementById('n').addEventListener('click', countingOne);
function countingOne() {
    click++
    console.log(click)
    playerOne = (click + 1) % 2
    console.log(playerOne)

    if(playerOne === 0) {
        document.getElementById('n').innerHTML="<img src='https://i.imgur.com/BOaH87V.jpeg' />";
        console.log('orca');
        s2 = true;
        console.log(s2)
    } else {
        document.getElementById('n').innerHTML="<img src='https://i.imgur.com/Bl3Rsnk.png' />";
        console.log('gator')
        s2 = false;
    } 
    document.getElementById('n').removeEventListener('click', countingOne);
    checkVictory()
}

document.getElementById('ne').addEventListener('click', countingTwo);
function countingTwo() {
    click++
    console.log(click)
    playerOne = (click + 1) % 2
    console.log(playerOne)

    if(playerOne === 0) {
        document.getElementById('ne').innerHTML="<img src='https://i.imgur.com/BOaH87V.jpeg' />";
        console.log('orca');
        s3 = true;
        console.log(s3)
    } else {
        document.getElementById('ne').innerHTML="<img src='https://i.imgur.com/Bl3Rsnk.png' />";
        console.log('gator')
        s3 = false;
    } 
    document.getElementById('ne').removeEventListener('click', countingTwo);
    checkVictory()
}

document.getElementById('w').addEventListener('click', countingThree);
function countingThree() {
    click++
    console.log(click)
    playerOne = (click + 1) % 2
    console.log(playerOne)

    if(playerOne === 0) {
        document.getElementById('w').innerHTML="<img src='https://i.imgur.com/BOaH87V.jpeg' />";
        console.log('orca');
        s4 = true;
        console.log(s4)
    } else {
        document.getElementById('w').innerHTML="<img src='https://i.imgur.com/Bl3Rsnk.png' />";
        console.log('gator')
        s4 = false;
    } 
    document.getElementById('w').removeEventListener('click', countingThree);
    checkVictory()
}

document.getElementById('c').addEventListener('click', countingFour);
function countingFour() {
    click++
    console.log(click)
    playerOne = (click + 1) % 2
    console.log(playerOne)

    if(playerOne === 0) {
        document.getElementById('c').innerHTML="<img src='https://i.imgur.com/BOaH87V.jpeg' />";
        console.log('orca');
        s5 = true;
        console.log(s5)
    } else {
        document.getElementById('c').innerHTML="<img src='https://i.imgur.com/Bl3Rsnk.png' />";
        console.log('gator')
        s5 = false
    } 
    document.getElementById('c').removeEventListener('click', countingFour);
    checkVictory()
}

document.getElementById('e').addEventListener('click', countingFive);
function countingFive() {
    click++
    console.log(click)
    playerOne = (click + 1) % 2
    console.log(playerOne)

    if(playerOne === 0) {
        document.getElementById('e').innerHTML="<img src='https://i.imgur.com/BOaH87V.jpeg' />";
        s6 = true;
        console.log(s6)
    } else {
        document.getElementById('e').innerHTML="<img src='https://i.imgur.com/Bl3Rsnk.png' />";
        console.log('gator')
        s6 = false;
    } 
    document.getElementById('e').removeEventListener('click', countingFive);
    checkVictory()
}

document.getElementById('sw').addEventListener('click', countingSix);
function countingSix() {
    click++
    console.log(click)
    playerOne = (click + 1) % 2
    console.log(playerOne)

    if(playerOne === 0) {
        document.getElementById('sw').innerHTML="<img src='https://i.imgur.com/BOaH87V.jpeg' />";
        console.log('orca');
        s7 = true;
    } else {
        document.getElementById('sw').innerHTML="<img src='https://i.imgur.com/Bl3Rsnk.png' />";
        console.log('gator')
        s7 = false;
    } 
    console.log(s7)
    document.getElementById('sw').removeEventListener('click', countingSix);
    checkVictory()
}

document.getElementById('s').addEventListener('click', countingSeven);
function countingSeven() {
    click++
    console.log(click)
    playerOne = (click + 1) % 2
    console.log(playerOne)
    if(playerOne === 0) {
        document.getElementById('s').innerHTML="<img src='https://i.imgur.com/BOaH87V.jpeg' />";
        console.log('orca');
        s8 = true;
    } else {
        document.getElementById('s').innerHTML="<img src='https://i.imgur.com/Bl3Rsnk.png' />";
        console.log('gator')
        s8 = false;
    } 
    console.log(s8)
    document.getElementById('s').removeEventListener('click', countingSeven);
    checkVictory()
}

document.getElementById('se').addEventListener('click', countingEight);

function countingEight() {
    click++
    console.log(click)
    playerOne = (click + 1) % 2
    console.log(playerOne)

    if(playerOne === 0) {
        document.getElementById('se').innerHTML="<img src='https://i.imgur.com/BOaH87V.jpeg' />";
        console.log('orca');
        s9 = true;
       
    } else {
        document.getElementById('se').innerHTML="<img src='https://i.imgur.com/Bl3Rsnk.png' />";
        console.log('gator')
    s9 = false;
    } 
    console.log(s9)
    document.getElementById('se').removeEventListener('click', countingEight);
    checkVictory()
}

//victory conditions
function checkVictory() {
if ((s1==true && s2==true && s3==true) || 
    (s1==true && s4==true && s7== true) ||
    (s1==true && s5==true && s9== true) ||
    (s2==true && s5==true && s8== true) ||
    (s3==true && s6==true && s9== true) ||
    (s4==true && s5==true && s6== true) ||
    (s3==true && s5==true && s7== true) ||
    (s7==true && s8==true && s9== true)) 
    {
        document.getElementById('owin').style.visibility = 'visible';
    } else if ((s1==false && s2==false && s3==false) ||
            (s1==false && s4==false && s7 == false) ||
            (s1==false && s5==false && s9 == false) ||
            (s2==false && s5==false && s8 == false) ||
            (s3==false && s6==false && s9 == false) ||
            (s4==false && s5==false && s6 == false) ||
            (s3==false && s5==false && s7==false) ||
            (s7==false && s8==false && s9==false)) {
                document.getElementById('awin').style.visibility = 'visible';
             } else if (click === 9) {
                 document.getElementById('tie').style.visibility = 'visible';
             }

    }
}
