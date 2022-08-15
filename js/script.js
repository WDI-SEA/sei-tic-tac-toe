// initialization
// initializes all box div's inside an boxArray

let boxArray =[]
for(let i =1;i<=9;i++){
    boxArray.push(document.getElementById("box"+i))
}

const startButton = document.getElementById('startButton')
const textBox = document.getElementById('textBox')
const resetButton=document.getElementById('resetButton')

// To store the availablity of box
let boxAvailable =[true,true,true,true,true,true,true,true,true]

let gameBoardValue = [[0,0,0],[0,0,0],[0,0,0]]
let saveXChoice = []
let saveOChoice =[]

let xWins = 0
let oWins = 0

// To keep track of whose turn it is play 
// if xTurn is on true, play belongs to "X"
// else play belongs to "O"
let xTurn = true

const playerTurn = function(){
    if(xTurn == true ){
    xTurn = false
    xPlays ++
    return "X"
    }
    else{
        xTurn =true
        oPlays ++
        return "O"
    }
}

// keeps track of how many moves each player has been made
let xPlays =0
let oPlays=0

let whoPlays ="X"
// while boxes are not full and no body has won perform code
// for players to be able to make choices
// try to make this a for looop

// add EventsListner to start button
startButton.addEventListener('click', function(){
// add EventsListner to all div boxes
    for(let i=0;i<boxArray.length;i++){
        boxArray[i].addEventListener('click',function(){
            stillPlay(i)
        })
    }

// add EventsListner to reset button
    resetButton.addEventListener('click',function(){
        boxAvailable =[true,true,true,true,true,true,true,true,true]
        gameBoardValue = [[0,0,0],[0,0,0],[0,0,0]]
        saveXChoice = []
        saveOChoice =[]
        xPlays =0
        oPlays =0

// reset boxes
        for(let i=0;i<9;i++){
            document.getElementById("space"+i).innerHTML= "."
        }
        
// To adjust the renaming bug LOL
        console.log(whoPlays)
        if(whoPlays == 'X')
        {
            textBox.innerHTML ="You clicked on Reset, it's Player O's Turn"
        }
        else if(whoPlays =='O'){
            textBox.innerHTML ="You clicked on Reset, it's Player X's Turn"            
        }
        else textBox.innerHTML =`You clicked on Reset, it's Player ${whoPlays}'s Turn`
    })

    textBox.innerHTML ="Great, it's Player X's Turn"
},{once:true})

// to check if play is possible
function stillPlay(box){
    boxAction(box)
}


function boxAction(boxNum){
    // stops the user from clicking on the same element twice
    if(boxAvailable[boxNum] == false){
        console.log(boxAvailable[boxNum])
        return 
    }
    // controls the flow of the game
    //gets the players turn
    // input players result to display on DOM
    const player =playerTurn()
    whoPlays = player
    console.log(document.getElementById("space"+boxNum))
    document.getElementById("space"+boxNum).innerHTML= player
    boxAvailable[boxNum] = false
    if(player == 'X'){
        textBox.innerHTML = "it's Player O's Turn"
    }else textBox.innerHTML = "it's Player X's Turn"
    

    
    
    switch(true){
            // store in array[0][0]
            case(boxNum == 0):{
                gameBoardValue[0][0] = player
                if(player == "X")
                saveXChoice.push(0);
                else
                saveOChoice.push(0);
                console.log(gameBoardValue[0][0])
            }
            break
            // store in array[0][1]
            case(boxNum == 1):{
                gameBoardValue[0][1] = player
                if(player == "X")
                saveXChoice.push(1)
                else
                saveOChoice.push(1)
                console.log(gameBoardValue[0][1])
            }
            break
            // store in array[0][2]
            case(boxNum == 2):{
                gameBoardValue[0][2] = player
                if(player == "X")
                saveXChoice.push(2)
                else
                saveOChoice.push(2)
                console.log(gameBoardValue[0][2])
            }
            break
            // store in array[1][0]
            case(boxNum == 3):{
                gameBoardValue[1][0] = player
                if(player == "X")
                saveXChoice.push(3)
                else
                saveOChoice.push(3)
                console.log(gameBoardValue[1][0])
            }
            break
            // store in array[1][1]
            case(boxNum == 4):{
                gameBoardValue[1][1] = player
                if(player == "X")
                saveXChoice.push(4)
                else
                saveOChoice.push(4)
                console.log(gameBoardValue[1][1])
            }
            break
            // store in array[1][2]
            case(boxNum == 5):{
                gameBoardValue[1][2] = player
                if(player == "X")
                saveXChoice.push(5)
                else
                saveOChoice.push(5)
                console.log(gameBoardValue[1][2])
            }
            break
            // store in array[2][0]
            case(boxNum == 6):{
                gameBoardValue[2][0] = player
                if(player == "X")
                saveXChoice.push(6)
                else
                saveOChoice.push(6)
                console.log(gameBoardValue[2][0])
            }
            break
            // store in array[2][1]
            case(boxNum == 7):{
                gameBoardValue[2][1] = player
                if(player == "X")
                saveXChoice.push(7)
                else
                saveOChoice.push(7)
                console.log(gameBoardValue[2][1])
            }
            break
            // store in array[2][2]
            case(boxNum == 8):{
                gameBoardValue[2][2] = player
                if(player == "X")
                saveXChoice.push(8)
                else
                saveOChoice.push(8)
                console.log(gameBoardValue[2][2])
            }
            break
    
            default:{}
            
        }

        // Hmmm...I think this is to trigger the search system of the game

        if(xPlays == 5 ||oPlays ==5)
        {
            console.log(xPlays)
            console.log(oPlays)
            if(player == "X"){
                if(hasWon(saveXChoice) == true){
                    console.log("gameEnd")
                    for(let i =0;i<boxAvailable.length;i++)
                    boxAvailable[i] = false
                    
                }else textBox.innerHTML ="That's a Draw!"
            } else textBox.innerHTML ="That's a Draw!"
                             
         }   
         else if(xPlays >= 2 && xPlays < 5){
             if(player == "X"){
                if(hasWon(saveXChoice) == true){
                    console.log("gameEnd")
                    for(let i =0;i<boxAvailable.length;i++)
                    boxAvailable[i] = false
                }
            }
            else{
                if(hasWon(saveOChoice) == true){
                    console.log("gameEnd")
                for(let i =0;i<boxAvailable.length;i++)
                    boxAvailable[i] = false
            }
            console.log(xPlays)
            console.log(oPlays)
            }
        }
    }

          
    


// win scenerios
function hasWon(arr){
    //sort array
    arr.sort(function(a,b){return a-b})

    for(let i=0;i<arr.length;i++)
    {
        for(let j=i+1;j<arr.length;j++)
        {
            for(let k=j+1;k<arr.length;k++)
            {
                if(arr[i]==0 && arr[j]==1 &&arr[k]==2){
                    textBox.innerHTML =`Congratulations Player ${whoPlays} wins!`
                    if(whoPlays == 'X')
                        xWins++
                    else
                        oWins++
                        document.getElementById('xWin').innerHTML=xWins
                        document.getElementById('oWin').innerHTML=oWins
                    return true
                }
                else if(arr[i]==3&&arr[j]==4&&arr[k]==5){
                    textBox.innerHTML =`Congratulations Player ${whoPlays} wins!`
                    if(whoPlays == 'X')
                    xWins++
                    else
                        oWins++
                        document.getElementById('xWin').innerHTML=xWins
                        document.getElementById('oWin').innerHTML=oWins
                    return true
                }
                else if(arr[i]==6&&arr[j]==7&&arr[k]==8){
                    textBox.innerHTML =`Congratulations Player ${whoPlays} wins!`
                    if(whoPlays == 'X')
                    xWins++
                    else
                        oWins++
                        document.getElementById('xWin').innerHTML=xWins
                        document.getElementById('oWin').innerHTML=oWins
                    return true
                }
                else if(arr[i]==0&&arr[j]==3&&arr[k]==6){
                    textBox.innerHTML =`Congratulations Player ${whoPlays} wins!`
                    if(whoPlays == 'X')
                        xWins++
                    else
                        oWins++
                        document.getElementById('xWin').innerHTML=xWins
                        document.getElementById('oWin').innerHTML=oWins
                    return true
                }
                else if(arr[i]==1&&arr[j]==4&&arr[k]==7){
                    textBox.innerHTML =`Congratulations Player ${whoPlays} wins!`
                    if(whoPlays == 'X')
                        xWins++
                    else
                        oWins++
                        document.getElementById('xWin').innerHTML=xWins
                        document.getElementById('oWin').innerHTML=oWins
                    return true
                }
                else if(arr[i]==2&&arr[j]==5&&arr[k]==8){
                    textBox.innerHTML =`Congratulations Player ${whoPlays} wins!`
                    if(whoPlays == 'X')
                        xWins++
                    else
                        oWins++
                        document.getElementById('xWin').innerHTML=xWins
                        document.getElementById('oWin').innerHTML=oWins
                    return true
                }
                else if(arr[i]==0&&arr[j]==4&&arr[k]==8){
                    textBox.innerHTML =`Congratulations Player ${whoPlays} wins!`
                    if(whoPlays == 'X')
                        xWins++
                    else
                        oWins++
                        document.getElementById('xWin').innerHTML=xWins
                        document.getElementById('oWin').innerHTML=oWins
                    return true
                }
                else if(arr[i]==2&&arr[j]==4&&arr[k]==6){
                    textBox.innerHTML =`Congratulations Player ${whoPlays} wins!`
                    if(whoPlays == 'X')
                        xWins++
                    else
                        oWins++
                        document.getElementById('xWin').innerHTML=xWins
                        document.getElementById('oWin').innerHTML=oWins
                    return true
                }
            }
        }
    }
    
}

console.log(xWins)


