let turn = true
let gameOver = false
let m = ['', '','','','','','','','','']

function play(element){
    id = element.id
    if(m[id] == '' && !gameOver){
        turn = !turn
        m[id] = turn? 'X':'O'
        element.innerHTML = m[id]
        if (checkWinner(m)){
            gameOver= true
            alert(turn? 'X' + ' ' + 'won!\nGame over': 'O' + ' ' + " won!\nGame over")
            // check with leter won and the send an alert to the players and stop gameplay   
        }
    }
}

function startOver(){
    turn = true;
    gameOver = false
    m = ['', '','','','','','','','','']
    for (let i = 0; i < 9; i++){
        document.getElementById(i).innerHTML = ''
        // loop to see if its the cats game
    }
}

function checkWinner(m){
    //  all possible soultions to TTT
    
    return( m[0] != '' && m[0] == m[1] && m[0] == m[2] ||
    m[3] != '' && m[3] == m[4] && m[3] == m[5] ||
    m[6] !='' && m[6] == m[7] && m[6] == m[8] ||
    m[0] !='' && m[0] == m[3] && m[0] == m[6] ||
    m[1] !='' && m[1] == m[4] && m[1] == m[7] ||
    m[2] !='' && m[2] == m[5] && m[2] == m[8] ||
    m[0] !='' && m[0] == m[4] && m[0] == m[8] ||
    m[2] !='' && m[2] == m[5] && m[2] == m[8] ||
    m[2] !='' && m[2] == m[4] && m[2] == m[6]
    //  if any of the lines is true between the || is true is stopes checking
    // check if its an inner string / if its not we could countinu checking.
    )
}


// innerHTML: I looked up the best way to replace the existing content of an element on MDN/ couldn't remember anyother way of doing it. I thought of using quarrySelector and I tried excuting it but I couldn't hget it to work  