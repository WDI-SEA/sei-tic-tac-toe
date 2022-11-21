let one = document.getElementById("one")
let two = document.getElementById("two")
let three = document.getElementById("three")
let four = document.getElementById("four")
let five = document.getElementById("five")
let six = document.getElementById("six")
let result= document.getElementById("result")
let turnInd= document.getElementById("turnInd")
let btn= document.querySelector(".reset")

let gb = ["","","","","","","","",""]
let isRunning= true;
let turn = 0

btn.addEventListener('click',function(){
    isRunning = true
    turnInd.innerText= "Turn: Player 1"
    result.innerText = null
    one.innerText = null
    two.innerText = null
    three.innerText = null
    four.innerText = null
    five.innerText = null
    six.innerText = null
    seven.innerText = null
    eight.innerText = null
    nine.innerText = null
    gb = ["","","","","","","","",""]
    turn = 0
})

clicked(one)
clicked(two)
clicked(three)
clicked(four)
clicked(five)
clicked(six)
clicked(seven)
clicked(eight)
clicked(nine)

  


function clicked(squareNumber){
    squareNumber.addEventListener('click', function(){
        let index= squareNumber.getAttribute('data-value') - 1
            if(squareNumber.childNodes.length === 0 && isRunning===true){
                if(turn % 2 === 0){
                    turnInd.innerText= "Turn: Player 2"
                    squareNumber.innerText = "X"
                    gb[index] = "X"
                    checkWin()
                    turn++
                } else {
                    turnInd.innerText= "Turn: Player 1"
                    squareNumber.innerText = "O"
                    gb[index] = "O"
                    checkWin()
                    turn++
                }
    
            }
     })
    }


function checkWin(){
    if (turn===8){

        result.innerText = "Cats game"
        isRunning=false
        turnInd.innerText= "Turn: "

    } else if((gb[0]==='X' && gb[0]===gb[1] && gb[0]===gb[2]) || (gb[2]==='X' && gb[2]===gb[5] && gb[2]===gb[8]) || (gb[6]==="X" && gb[6]===gb[7] && gb[6]===gb[8]) || (gb[0]==="X" && gb[0]===gb[3] && gb[0]===gb[6]) || (gb[3]==="X" && gb[3]===gb[4] && gb[3]===gb[5]) || (gb[1]==="X" && gb[1]===gb[4] && gb[1]===gb[7]) || (gb[0]==="X" && gb[0]===gb[4] && gb[0]===gb[8]) || (gb[2]==="X" && gb[2]===gb[4] && gb[2]===gb[6])){

        result.innerText = "Player 1 has Won"
        isRunning=false
        turnInd.innerText= "Turn: "

    } else if((gb[0]==='O' && gb[0]===gb[1] && gb[0]===gb[2]) || (gb[2]==='O' && gb[2]===gb[5] && gb[2]===gb[8]) || (gb[6]==="O" && gb[6]===gb[7] && gb[6]===gb[8]) || (gb[0]==="O" && gb[0]===gb[3] && gb[0]===gb[6]) || (gb[3]==="O" && gb[3]===gb[4] && gb[3]===gb[5]) || (gb[1]==="O" && gb[1]===gb[4] && gb[1]===gb[7]) || (gb[0]==="O" && gb[0]===gb[4] && gb[0]===gb[8]) || (gb[2]==="O" && gb[2]===gb[4] && gb[2]===gb[6])){

        result.innerText = "Player 2 has Won"
        isRunning=false
        turnInd.innerText= "Turn: "
    } 
}