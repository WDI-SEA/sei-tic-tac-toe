document.addEventListener('DOMContentLoaded',()=>{
    let round=0
    let currentPlayer=""
    let playerWin=0
    let computerWin=0
    currentPlayer=firstRound()
    let idArrey=["box11","box12","box13","box21","box22","box23","box31","box32","box33"]
    let resetButton=document.getElementById("submit");
    let playerBol=false
    let computerBol=false
    let letters=["x","o"]
    let randomletter=Math.floor(Math.random()*letters.length)
    let playerLetter=letters[randomletter]
    let computerLetter=''
    if (randomletter==0){
        computerLetter=letters[1]
    }
    else{
        computerLetter=letters[0]
    }
    let myDiv=document.getElementById("container")
    if(currentPlayer=="player"){
        playerBol=true
    }
    else{
       computerTurn(computerLetter,round)
       round++
        currentPlayer="player"
        playerBol=true
    }
    resetButton.addEventListener('click',()=>{
        freshPage()
        round=0
    })
    myDiv.addEventListener('click',(e)=>{
        console.log("round"+round)
        let idDiv=e.target.id
        if(playerBol==true){
            if(idArrey.includes(idDiv)){
                if(checkBox(idDiv)){
                    addClass(idDiv,"player")
                    updateDiv(idDiv,playerLetter)                    
                    computerTurn(computerLetter,round)
                    round++
                    if(round>2){
                        let win=findWin()
                        if(win!="none"){
                            playerBol=false
                            if(win=="player"){
                                playerWin++
                                updateWin(win,playerWin)
                            }
                            else{
                                computerWin++
                                updateWin(win,computerWin)
                            }
                        }
                    }
                }              
        }
        if(round>=3){
            let reasultWin=findWin()
            if(reasultWin=="player"){
                playerWin++
                
            }
            else if(reasultWin=="computer"){ 
                computerWin++
            }
        }
      
    }

        
    })//end evenlistener
})
//end DOMCOntenload

let computerTurn=(computerLetter,round)=>{
    let test=document.getElementsByClassName('player')
    let newArray=[]
    for(let i=0;i<test.length;i++){
       newArray[i]=test[i].id   
    }
    let testObj=newArray.map(tetst)
    let testCom=document.getElementsByClassName('computer')
                let newArrayCom=[]
                for(let i=0;i<testCom.length;i++){
                    newArrayCom[i]=testCom[i].id
                    console.log(newArrayCom[i])
                    
                }
    let testObjCom=newArrayCom.map(tetst)
    let firstColumn=0
    let secondColumn=0
    let firstRow=0
    let idDiv=0
    let secondRow=0
    if(testObj.length>1){
    for(let i=0;i<testObj.length;i++){      
        firstColumn=parseInt(testObj[i]['column'])
        firstRow=parseInt(testObj[i]['row'])
        for(let j=i+1;j<testObj.length;j++){             
                secondColumn=parseInt(testObj[j]['column'])
                secondRow=parseInt(testObj[j]['row'])
                if(firstColumn==secondColumn){
                    if(testObj[j]['row']!=3){
                         idDiv="box"+3+""+firstColumn
                        }
                        else if (testObj[i]['row']!=1){
                            console.log("==3")
                            idDiv="box"+1+""+firstColumn
                        }
                        else{
                            idDiv="box"+2+""+firstColumn                            
                        }
                    }
                    else if(firstRow==secondRow){
                        if(testObj[j]['column']!=3){
                            idDiv="box"+firstRow+""+3
                        }
                        else if (testObj[i]['column']!=1){
                            console.log("==3")
                            idDiv="box"+firstRow+""+1                            
                        }
                        else{
                            console.log("firstrow+2")
                            idDiv="box"+firstRow+""+2                        
                    }
                }
                
                else if(secondRow==secondColumn){
                    if(firstRow==firstColumn){
                        if(testObj[j]['column']!=3){
                             idDiv="box"+3+""+3
                        }
                        else if(testObj[i]['column']!=1){
                            console.log("==3")
                             idDiv="box"+1+""+1
                        }
                        else{
                             idDiv="box"+2+""+2
                        }
                        
                    }
                    if((secondRow==2&&secondColumn==2)){
                        if(((firstRow==1&&firstColumn==3))){
                            idDiv="box31"
                        }
                    }

                    
                }
                else if(secondColumn==1&&secondRow==3){
                            if(firstRow==2&&firstColumn==2){
                                 idDiv="box13"
                            }
                            else{
                                idDiv="box22"
                            }
                        }
            else{
                   idDiv=findRandomCell()
                }
            }
        }//big(first) for
        
    }//end if(round >1)  
    else if(round==0){
        console.log("round in else if(round==0): "+round)
        let idArrey=["box11","box12","box13","box21","box22","box23","box31","box32","box33"]

        let checkBoxEmpty=true
        let firstComputerChoice=0
        do{
          
        firstComputerChoice=Math.floor(Math.random()*idArrey.length)
        checkBoxEmpty= checkBox(idArrey[firstComputerChoice])
          
        }while(!checkBoxEmpty)
        addClass(idArrey[firstComputerChoice],"computer")
        idDiv=idArrey[firstComputerChoice]
        playerBol=true
   
    }
    else{
        idDiv=findRandomCell()
    }
    updateDiv(idDiv,computerLetter)
    addClass(idDiv,"computer")
}
let findRandomCell=()=>{
    let testCom=document.getElementsByClassName('computer')
    let newArrayCom=[]
    for(let i=0;i<testCom.length;i++){
        newArrayCom[i]=testCom[i].id        
    }
let testObjCom=newArrayCom.map(tetst)
    let idDiv=0
        let newCellCom=[]
        let secondRoundRow=testObjCom[0]["row"]
        let secondRoundColumn=testObjCom[0]["column"]
        let chakeCom=true
        do{
            if(secondRoundColumn==secondRoundRow){
                if(secondRoundRow==2){
                    newCellCom.push({"row":3,"column":"3"})
                    newCellCom.push({"row":1,"column":"1"})
                }else if(secondRoundRow==3){
                    newCellCom.push({"row":2,"column":"2"})
                    newCellCom.push({"row":1,"column":"1"})
                }
                else{
                    newCellCom.push({"row":2,"column":"2"})
                    newCellCom.push({"row":3,"column":"3"})
                }
            }

            if(secondRoundRow==1){
                newCellCom.push({"row":2,"column":secondRoundColumn})
                newCellCom.push({"row":3,"column":secondRoundColumn})
            }else if(secondRoundRow==2){
                newCellCom.push({"row":1,"column":secondRoundColumn})
                newCellCom.push({"row":3,"column":secondRoundColumn})
                
            }else{
                newCellCom.push({"row":1,"column":secondRoundColumn})
                newCellCom.push({"row":2,"column":secondRoundColumn})
    
            }
            if(secondRoundColumn==1){
                newCellCom.push({"row":secondRoundRow,"column":"2"})
                newCellCom.push({"row":secondRoundRow,"column":"3"})
            }
            else if(secondRoundColumn==2){
                
                newArrayCom.push({"row":secondRoundRow,"column":"1"})
                newArrayCom.push({"row":secondRoundRow,"column":"3"})
            }else{
                newArrayCom.push({"row":secondRoundRow,"column":"1"})
                newArrayCom.push({"row":secondRoundRow,"column":"2"})
    
            }
            if(secondRoundColumn==2&&secondRoundRow==2){
                newCellCom.push({"row":1,"column":"3"})
                newCellCom.push({"row":3,"column":"1"})
            }
            let randomSecondRond=Math.floor(Math.random()*newCellCom.length)
            idDiv="box"+newCellCom[randomSecondRond]['row']+""+newCellCom[randomSecondRond]['column']
            chakeCom=checkBox(idDiv)
        }while(!chakeCom)
        return idDiv
}
let firstRound=()=>{
    let players=["player","computer"]
    let randomPlayer=Math.floor(Math.random()*players.length)
    firstPlayer=players[randomPlayer]
    return firstPlayer
}
let checkBox=(divId)=>{
    let divClass=document.getElementById(divId).classList
    if(divClass==""){
    return true
    }
    return false
}

let addClass=(divId,currentPlayer)=>{
    console.log("addclass: "+currentPlayer)
    document.getElementById(divId).classList.add(currentPlayer)

    console.log(document.getElementById(divId).classList)
    console.log("ocument.getElementById(divId).classList"+document.getElementById(divId).classList)
}
let updateDiv =(id,letter)=>{
    console.log("id:"+id+"letter: "+letter)
    document.getElementById(id).innerText=letter

}
let findWin=()=>{
    let test=document.getElementsByClassName('player')
    let newArray=[]
    for(let i=0;i<test.length;i++){
        newArray[i]=test[i].id
        console.log(newArray[i])
    }
    let testCom=document.getElementsByClassName('computer')
    let newArrayCom=[]
    for(let i=0;i<testCom.length;i++){
        newArrayCom[i]=testCom[i].id
    }
let testObjCom=newArrayCom.map(tetst)
    let count=1
    let testObj=newArray.map(tetst)
    //for(let i=0;i<testObj.length;i++){
        let i=0
        for(let j=i+1;j<testObj.length;j++){
            if(testObj[i]['column']==testObj[j]['column']){
                count++
            }
        }
        for(let j=i+1;j<testObj.length;j++){
            if(testObj[i]['row']==testObj[j]['row']){
                count++
            }
        }
        if(count>=3){
            return "player"
        }
        if(testObj[i]['column']==testObj[i]['row']){
            if(testObj[i+1]['column']==testObj[i+1]['row']){
                if(testObj[i+2]['column']==testObj[ji+2]['row']){
                    return "player"
                }
            }
        }
        count=1
        for(let j=i+1;j<testObjCom.length;j++){
            if(testObjCom[i]['column']==testObjCom[j]['column']){
                count++
            }
        }
        for(let j=i+1;j<testObjCom.length;j++){
            if(testObjCom[i]['row']==testObjCom[j]['row']){
                count++
            }
        }
        if(count>=3){
            return "computer"
        }
        if(testObjCom[i]['column']==testObjCom[i]['row']){
            console.log(testObj)
            if(testObjCom[i+1]['column']==testObjCom[i+1]['row']){
                if(testObjCom[j+2]['column']==testObjCom[j+2]['row']){
                    return "computer"
                }
            }
        }
        count=1
    
    return "none"
}




let tetst=(obj)=>{
    let newString=obj.split("x")
    return {
        row:newString[1].split('')[0],
        column:newString[1].split('')[1]
    }
}
let updateWin=(winner,number)=>{
    if(winner=="player"){

        let playerP=document.getElementById('PlayerNumber').innerText=number
    }
    else{
        let playerP=document.getElementById('cpmputerNumber').innerText=number

    }
}
let freshPage=()=>{
    console.log("fresh")
    let idDiv=""
    for(let i=1;i<=3;i++){
        for(let j=1;j<=3;j++){
            idDiv="box"+i+""+j
            document.getElementById(idDiv).classList.remove
            document.getElementById(idDiv).innerText=""
        }
        console.log(document.getElementById(idDiv).classList)
    }
}