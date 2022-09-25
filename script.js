let title = document.querySelector('.title')
let turn = 'x'
let squares = []
function end(n1,n2,n3){
    
    document.getElementById('num'+n1)
    document.getElementById('num'+n2)
    document.getElementById('num'+n3)
}

function winner(){
    for(i=1; i<10; i++){
        squares = document.getElementById('num'+i).innerHTML
    }
    if(squares[1] == squares[2] && squares[2] == squares[3] && squares[1] != ''){
        end(1,2,3)
     }
     else if(squares[4] == squares[5] && squares[5] == squares[6] && squares[6] != ''){
        end(4,5,6)
     }
     else if(squares[7] == squares[8] && squares[8] == squares[9] && squares[8] != ''){
        end(7,8,9)
     }
     else if(squares[1] == squares[4] && squares[4] == squares[7] && squares[7] != ''){
        end(1,4,7)
     }
     else if(squares[2] == squares[5] && squares[5] == squares[8] && squares[2] != ''){
        end(2,5,8)
     }
     else if(squares[3] == squares[6] && squares[6] == squares[9] && squares[3] != ''){
        end(3,6,9)
     }
     else if(squares[1] == squares[5] && squares[5] == squares[9] && squares[9] != ''){
        end(1,5,9)
     }
     else if(squares[3] == squares[5] && squares[5] == squares[7] && squares[5] != ''){
        end(3,5,7)
     }
}
function game(id){
    let element = document.getElementById(id)
    if(turn === 'x' && element.innerHTML == ''){
        element.innerHTML = 'x'
        turn = 'o'
        title.innerHTML = 'Your turn player o'
    }
    else if( turn === 'o' && element.innerHTML == ''){
        element.innerHTML = 'o'
        turn = 'x'
        title.innerHTML = 'Your turn player x'
    }
   winner()
}