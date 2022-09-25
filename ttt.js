// this step just to check wether the script file is linked:
// console.log("lets kill the X!")



// 1st play(function) returns strings X and O, but initially 
// starts with X (it controls the players turn)
// i= button's ID.
// b= variable that will grep the button's ID.

var player='X';

function play(i) {
var b=document.getElementById(i);
if (b.innerHTML ==='') {
b.innerHTML= player;
if (player==='X') 
{
    player='O';
} else 
{
    player='X';
}
}
result()
}
// DRAFT
// let res = document.getElementById('rest-button');
// res.addEventListener('click', rest);
// Rest function 


// Function that clears the buttons when the game is over.
function rest () {

    document.getElementById('btn1').innerHTML=''
    document.getElementById('btn2').innerHTML=''
    document.getElementById('btn3').innerHTML=''
    document.getElementById('btn4').innerHTML=''
    document.getElementById('btn5').innerHTML=''
    document.getElementById('btn6').innerHTML=''
    document.getElementById('btn7').innerHTML=''
    document.getElementById('btn8').innerHTML=''
    document.getElementById('btn9').innerHTML=''
    document.getElementById('result').innerHTML=''



}


// DRAFT
//  var btnsList = document.getElementsByClassName('btns');  
// for (i=0; i< btnsList.length;i++){
//     btnsList[i].value='';
//     console.log(btnsList[i])


// last but not least the function: do the conditions of the TTT game.
function result() {
btn1=document.getElementById('btn1').innerHTML
btn2=document.getElementById('btn2').innerHTML
btn3=document.getElementById('btn3').innerHTML
btn4=document.getElementById('btn4').innerHTML
btn5=document.getElementById('btn5').innerHTML
btn6=document.getElementById('btn6').innerHTML
btn7=document.getElementById('btn7').innerHTML
btn8=document.getElementById('btn8').innerHTML
btn9=document.getElementById('btn9').innerHTML

if ( btn1 == btn2 && btn1 == btn3 && btn1!= ''){
    document.getElementById('result').innerHTML='Player ' + btn1 + ' WON!'
   
}
else if (btn1 == btn4 && btn1== btn7 && btn1 !='')
{
    document.getElementById('result').innerHTML='Player ' + btn1 + ' WON!'

}
else if (btn2 == btn5 && btn2 ==btn8 && btn2 !='') 
{
    document.getElementById('result').innerHTML= 'Player ' + btn2 + ' WON!'

}
else if (btn3 == btn6 && btn3==btn9 && btn3!='' ) 
{
    document.getElementById('result').innerHTML='Player ' + btn9 + ' WON!'

}
else if (btn4==btn6 && btn4==btn5 && btn4!='') 
{
    document.getElementById('result').innerHTML='Player ' + btn5 + ' WON!'

}
else if (btn7==btn8 && btn7==btn9 && btn7!='')
{
    document.getElementById('result').innerHTML= 'Player ' + btn9 + ' WON!'
    
}
else if (btn7==btn5 && btn7==btn3 && btn7 !='')
{
    document.getElementById('result').innerHTML= 'Player ' + btn3 + ' WON!'

}
else if (btn1==btn5 && btn1==btn9 && btn1!='')
{
    document.getElementById('result').innerHTML= 'Player ' + btn9 + ' WON!'

}
else if ( btn1!='' && btn2!=''&& btn3!=''&& btn4!=''&& btn5!=''&& btn6!=''&& btn7!=''&& btn8!=''&& btn9!='')
{
    document.getElementById('result').innerHTML= 'DRAW..'
    
}

}
