console.log('hello there');


let count = 0 
function counting() {
    count ++
    return count
}

const gameStatus = document.querySelector("#gameStatus")

function whosTurn(count){
    if (count % 2 === 0){
    gameStatus.innerText = "It's your move next player O!"
    return "X"
    }else{
    gameStatus.innerText = "It's your move next player X!"  
    return "O"
 }
}



const game = [
    '', '', '',
    '', '', '',
    '', '', ''
  ]


// 0,1,2  row 1
// 3,4,5  row 2
// 6,7,8  row 3

// 0,3,6  column 1
// 1,4,7  column 2
// 2,5,8  column 3

// 0,4,8  diag 1
// 2,4,6  diag 2

  
function winCheck(){ 
console.log(game)
    if (game[0] !== '') {
    if (game[0] === game[1] && game[1] === game[2]) {
        gameStatus.innerText = game[0] + " is a winner!"
        return
    }
  }
  if (game[3] !== '') {
    if (game[3] === game[4] && game[4] === game[5]) {
        gameStatus.innerText = game[1] + " is a winner!"
        return
    }
}
  if(game[6] !== "") {
  	if(game[6] === game[7] && game[7] === game[8]) {
        gameStatus.innerText = game[2] + " is a winner!"
        return
    }
  }
  if(game[0] !== "") {
    if(game[0] === game[3] && game[3] === game[6]) {
        gameStatus.innerText = game[3] + " is a winner!"
        return
  }
}
  if(game[1] !== "") {
    if(game[1] === game[4] && game[4] === game[7]) {
        gameStatus.innerText = game[4] + " is a winner!"
        return
  }
}
  if(game[2] !== "") {
    if(game[2] === game[5] && game[5] === game[8]) {
        gameStatus.innerText = game[5] + " is a winner!"
        return
  }
}

  if(game[0] !== "") {
    if(game[0] === game[4] && game[4] === game[8]) {
        gameStatus.innerText = game[6] + " is a winner!"
        return
  }
}
  if(game[2] !== "") {
    if(game[2] === game[4] && game[4] === game[6]) { 
        gameStatus.innerText = game[7] + " is a winner!"
        return
  }
 } 
}

    

document.querySelector("#user-input1").addEventListener("click", function(){
        const userInput1 = document.querySelector("#user-input1")
        console.dir(userInput1)
        console.log('the user typed in: ' + userInput1.value)
        counting()
        
        if(userInput1.innerText === "") {
            userInput1.innerText = whosTurn(count)
              game[0] = userInput1.innerText
              winCheck()
             
        }
        
    })
    document.querySelector("#user-input2").addEventListener("click", function(){
        const userInput2 = document.querySelector("#user-input2")
        console.dir(userInput2)
        console.log('the user typed in: ' + userInput2.value)
        counting()
        
        if(userInput2.innerText === "") {
            userInput2.innerText = whosTurn(count)
            game[1] = userInput2.innerText
            winCheck()
        }
        
    })

    document.querySelector("#user-input3").addEventListener("click", function(){
        const userInput3 = document.querySelector("#user-input3")
        console.dir(userInput3)
        console.log('the user typed in: ' + userInput3.value)
        counting()
        
        if(userInput3.innerText === "") {
            userInput3.innerText = whosTurn(count)
            game[2] = userInput3.innerText
            winCheck()
        }
    })

    document.querySelector("#user-input4").addEventListener("click", function(){
        const userInput4 = document.querySelector("#user-input4")
        console.dir(userInput4)
        console.log('the user typed in: ' + userInput4.value)
        counting()
        
        if(userInput4.innerText === "") {
            userInput4.innerText = whosTurn(count)
            game[3] = userInput4.innerText
            winCheck()
        }
    })

    document.querySelector("#user-input5").addEventListener("click", function(){
        const userInput5 = document.querySelector("#user-input5")
        console.dir(userInput5)
        console.log('the user typed in: ' + userInput5.value)
        counting()
        
        if(userInput5.innerText === "") {
            userInput5.innerText = whosTurn(count)
            game[4] = userInput5.innerText
            winCheck()
           
        }
       
    })

    document.querySelector("#user-input6").addEventListener("click", function(){
        const userInput6 = document.querySelector("#user-input6")
        console.dir(userInput6)
        console.log('the user typed in: ' + userInput6.value)
        counting()
       
        if(userInput6.innerText === "") {
            userInput6.innerText = whosTurn(count)
            game[5] = userInput6.innerText
            winCheck()
        }

    })

    document.querySelector("#user-input7").addEventListener("click", function(){
        const userInput7 = document.querySelector("#user-input7")
        console.dir(userInput7)
        console.log('the user typed in: ' + userInput7.value)
        counting()
        
        if(userInput7.innerText === "") {
           userInput7.innerText = whosTurn(count)
           game[6] = userInput7.innerText
           winCheck()
        }
    })

    document.querySelector("#user-input8").addEventListener("click", function(){
        const userInput8 = document.querySelector("#user-input8")
        console.dir(userInput8)
        console.log('the user typed in: ' + userInput8.value)
        counting()
        
        if(userInput8.innerText === "") {
            userInput8.innerText = whosTurn(count)
            game[7] = userInput8.innerText
            winCheck()
        }
        
    })

    document.querySelector("#user-input9").addEventListener("click", function(){
        const userInput9 = document.querySelector("#user-input9")
        console.dir(userInput9)
        console.log('the user typed in: ' + userInput9.value)
        counting()
        
        if(userInput9.innerText === "") {
            userInput9.innerText = whosTurn(count)
            game[8] = userInput9.innerText
            winCheck()
        }
    })

    

    

     document.querySelector("#restart").addEventListener("click", function(){
        console.log("hey")
        location.reload()
    })

    
    