
//photos
let soma1 = document.createElement("img")
let henri1 = document.createElement("img")

soma1.src = "SOMA_200x200.png"
henri1.src = "HENRI_200x200.png"

let soma2 = document.createElement("img")
let henri2 = document.createElement("img")

soma2.src = "SOMA_200x200.png"
henri2.src = "HENRI_200x200.png"

let soma3 = document.createElement("img")
let henri3 = document.createElement("img")

soma3.src = "SOMA_200x200.png"
henri3.src = "HENRI_200x200.png"

let soma4 = document.createElement("img")
let henri4 = document.createElement("img")

soma4.src = "SOMA_200x200.png"
henri4.src = "HENRI_200x200.png"

let soma5 = document.createElement("img")
let henri5 = document.createElement("img")

soma5.src = "SOMA_200x200.png"
henri5.src = "HENRI_200x200.png"

let soma6 = document.createElement("img")
let henri6 = document.createElement("img")

soma6.src = "SOMA_200x200.png"
henri6.src = "HENRI_200x200.png"

let soma7 = document.createElement("img")
let henri7 = document.createElement("img")

soma7.src = "SOMA_200x200.png"
henri7.src = "HENRI_200x200.png"

let soma8 = document.createElement("img")
let henri8 = document.createElement("img")

soma8.src = "SOMA_200x200.png"
henri8.src = "HENRI_200x200.png"

let soma9 = document.createElement("img")
let henri9 = document.createElement("img")

soma9.src = "SOMA_200x200.png"
henri9.src = "HENRI_200x200.png"

let soma10 = document.createElement("img")
let henri10 = document.createElement("img")

soma10.src = "SOMA_200x200.png"
henri10.src = "HENRI_200x200.png"

// CHOOSE YOUR CHARACTER --------------->

let chooseHenri = document.getElementById("henri");
let chooseSoma = document.getElementById("soma");
let henriPhoto = document.getElementById("henri")
let somaPhoto = document.getElementById("soma")
let i = ""
chooseHenri.addEventListener("click", function(){
    i = 1;
    document.getElementById("whosTurn").innerText = "Henri - the intellect"
    henriPhoto.style.transform = "scale(1.5)";
    somaPhoto.style.transform = "scale(1)"
})
chooseSoma.addEventListener("click", function(){
    i = 0;
    document.getElementById("whosTurn").innerText = "Soma - the cheeky"
    somaPhoto.style.transform = "scale(1.5)";
    henriPhoto.style.transform = "scale(1)"
})

//GAME TIME ----------------------->

let p1 = 0;
let pp1 = 0;
let p2 = 0;
let pp2 = 0;
let p3 = 0;
let pp3 = 0;
let p4 = 0;
let pp4 = 0;
let p5 = 0;
let pp5 = 0;
let p6 = 0;
let pp6 = 0;
let p7 = 0;
let pp7 = 0;
let p8 = 0;
let pp8 = 0;
let p9 = 0;
let pp9 = 0;
let winner = "";



let positionOne = document.getElementById("pos1").addEventListener("click", function(){
    if (p1 === 0 && pp1 === 0){  
        if (i%2 == 0){
            document.getElementById("whosTurn").innerText = "Your move Henri!";
            document.getElementById("text1").appendChild(soma1);
            i++
            p1++

        } else {
            document.getElementById("whosTurn").innerText = "Your move Soma!";
            document.getElementById("text1").appendChild(henri1);
            i++
            pp1++
        }
        tieGame();
    }

    if (p1 === 1 && p2 === 1 & p3 === 1 || p1 === 1 && p4 === 1 && p7 === 1 || p1 === 1 && p5 === 1 & p9 === 1){
        document.getElementById("whosTurn").innerText = "Soma Wins!"
        let btn = document.createElement("button")
        btn.innerText = "play again"
        container.appendChild(btn)
        btn.addEventListener("click", function(){
            console.log("hello")
            location.reload(true)
        })
        winner = "Soma"
        checkForSpinner();
        stopTheGame();

        }else if (pp1 === 1 && pp2 === 1 & pp3 === 1 || pp1 === 1 && pp4 === 1 && pp7 === 1 || pp1 === 1 && pp5 === 1 & pp9 === 1){
            document.getElementById("whosTurn").innerText = "Henri Wins!"
            let btn = document.createElement("button")
            btn.innerText = "play again"
            container.appendChild(btn)
            btn.addEventListener("click", function(){
                console.log("hello")
                location.reload(true)
            })    
            winner = "Henri"
            checkForSpinner();
            stopTheGame();
            
    }
})


let positionTwo = document.getElementById("pos2").addEventListener("click", function(){
 
    if (p2 === 0 && pp2 === 0){
        if (i%2 == 0){
            i++
            p2++
            document.getElementById("whosTurn").innerText = "Your move Henri!";
            document.getElementById("text2").appendChild(soma2);

        } else {
            i++
            pp2++
            document.getElementById("whosTurn").innerText = "Your move Soma!";
            document.getElementById("text2").appendChild(henri2);

        } 
    }
    if (p2 === 1 && p1 === 1 & p3 === 1 || p2 === 1 && p5 === 1 && p8 === 1){
        document.getElementById("whosTurn").innerText = "Soma Wins!"
        let btn = document.createElement("button")
        btn.innerText = "play again"
        container.appendChild(btn)
        btn.addEventListener("click", function(){
            console.log("hello")
            location.reload(true)
        })
        winner = "Soma"
        checkForSpinner();
        stopTheGame();

        }else if (pp2 === 1 && pp1 === 1 & pp3 === 1 || pp2 === 1 && pp5 === 1 && pp8 === 1){
            document.getElementById("whosTurn").innerText = "Henri Wins!"
            let btn = document.createElement("button")
            btn.innerText = "play again"
            container.appendChild(btn)
            btn.addEventListener("click", function(){
                console.log("hello")
                location.reload(true)
            })    
            winner = "Henri"
            checkForSpinner();
            stopTheGame();
            
    }
    tieGame();
})

let positionThree = document.getElementById("pos3").addEventListener("click", function(){
    
    if (p3 === 0 && pp3 === 0){
        if (i%2 == 0){
            document.getElementById("whosTurn").innerText = "Your move Henri!";
            document.getElementById("text3").appendChild(soma3);
            i++
            p3++
        } else {
            document.getElementById("whosTurn").innerText = "Your move Soma!";
            document.getElementById("text3").appendChild(henri3)
            i++
            pp3++
        } 
    }
    if (p3 === 1 && p1 === 1 & p2 === 1 || p3 === 1 && p6 === 1 && p9 === 1 || p3 === 1 && p5 === 1 && p7 === 1){
        document.getElementById("whosTurn").innerText = "Soma Wins!"
        let btn = document.createElement("button")
        btn.innerText = "PLAY AGAIN"
        container.appendChild(btn)
        btn.addEventListener("click", function(){
            console.log("hello")
            location.reload(true)
        })
        winner = "Soma"
        checkForSpinner();
        stopTheGame();

        }else if (pp3 === 1 && pp1 === 1 & pp2 === 1 || pp3 === 1 && pp6 === 1 && pp9 === 1 || pp3 === 1 && pp5 === 1 && pp7 === 1){
            document.getElementById("whosTurn").innerText = "Henri Wins!"
            let btn = document.createElement("button")
            btn.innerText = "PLAY AGAIN"
            container.appendChild(btn)
            btn.addEventListener("click", function(){
                console.log("hello")
                location.reload(true)
            })    
            winner = "Henri"
            checkForSpinner();
            stopTheGame();
    }
    tieGame();
})

let positionFour = document.getElementById("pos4").addEventListener("click", function(){
    
    if (p4 === 0 && pp4 === 0){
        if (i%2 == 0){
            document.getElementById("whosTurn").innerText = "Your move Henri!";
            document.getElementById("text4").appendChild(soma4);
            i++
            p4++
        } else {
            document.getElementById("whosTurn").innerText = "Your move Soma!";
            document.getElementById("text4").appendChild(henri4)
            i++
            pp4++
        } 
    }
    if (p4 === 1 && p1 === 1 & p7 === 1 || p4 === 1 && p5 === 1 && p6 === 1){
        document.getElementById("whosTurn").innerText = "Soma Wins!"
        let btn = document.createElement("button")
        btn.innerText = "play again"
        container.appendChild(btn)
        btn.addEventListener("click", function(){
            console.log("hello")
            location.reload(true)
        })
        winner = "Soma"
        checkForSpinner();
        stopTheGame();

        }else if (pp4 === 1 && pp1 === 1 & pp7 === 1 || pp4 === 1 && pp5 === 1 && pp6 === 1){
            document.getElementById("whosTurn").innerText = "Henri Wins!"
            let btn = document.createElement("button")
            btn.innerText = "PLAY AGAIN"
            container.appendChild(btn)
            btn.addEventListener("click", function(){
                console.log("hello")
                location.reload(true)
            })    
            winner = "Henri"
            checkForSpinner();
            stopTheGame();
    }
    tieGame();
})

let positionFive = document.getElementById("pos5").addEventListener("click", function(){

    if (p5 === 0 && pp5 === 0){
        if (i%2 == 0){
            document.getElementById("whosTurn").innerText = "Your move Henri!";
            document.getElementById("text5").appendChild(soma5);
            i++
            p5++
        } else {
            document.getElementById("whosTurn").innerText = "Your move Soma!";
            document.getElementById("text5").appendChild(henri5)
            i++
            pp5++
        } 
    }
    if (p5 === 1 && p2 === 1 & p8 === 1 || p5 === 1 && p4 === 1 && p6 === 1 || p5 === 1 && p1 === 1 && p9 === 1 || p5 === 1 && p3 === 1 && p7 === 1 ){
        document.getElementById("whosTurn").innerText = "Soma Wins!"
        let btn = document.createElement("button")
        btn.innerText = "PLAY AGAIN"
        container.appendChild(btn)
        btn.addEventListener("click", function(){
            console.log("hello")
            location.reload(true)
        })
        winner = "Soma"
        checkForSpinner();
        stopTheGame();

        }else if (pp5 === 1 && pp2 === 1 & pp8 === 1 || pp5 === 1 && pp4 === 1 && pp6 === 1 || pp5 === 1 && pp1 === 1 && pp9 === 1 || pp5 === 1 && pp3 === 1 && pp7 === 1 ){
            document.getElementById("whosTurn").innerText = "Henri Wins!"
            let btn = document.createElement("button")
            btn.innerText = "PLAY AGAIN"
            container.appendChild(btn)
            btn.addEventListener("click", function(){
                console.log("hello")
                location.reload(true)
            })
            winner = "Henri"
            checkForSpinner();
            stopTheGame();
    }
    tieGame();
})

let positionSix = document.getElementById("pos6").addEventListener("click", function(){

    if (p6 === 0 && pp6 === 0){
        if (i%2 == 0){
            document.getElementById("whosTurn").innerText = "Your move Henri!";
            document.getElementById("text6").appendChild(soma6);
            i++
            p6++
        } else {
            document.getElementById("whosTurn").innerText = "Your move Soma!";
            document.getElementById("text6").appendChild(henri6)
            i++
            pp6++
        } 
    }
    if (p6 === 1 && p5 === 1 & p4 === 1 || p6 === 1 && p3 === 1 && p9 === 1){
        document.getElementById("whosTurn").innerText = "Soma Wins!"
        let btn = document.createElement("button")
        btn.innerText = "PLAY AGAIN"
        container.appendChild(btn)
        btn.addEventListener("click", function(){
            console.log("hello")
            location.reload(true)
        })
        winner = "Soma"
        checkForSpinner();
        stopTheGame();
        }else if (pp6 === 1 && pp5 === 1 & pp4 === 1 || pp6 === 1 && pp3 === 1 && pp9 === 1){
            document.getElementById("whosTurn").innerText = "Henri Wins!"
            let btn = document.createElement("button")
            btn.innerText = "PLAY AGAIN"
            container.appendChild(btn)
            btn.addEventListener("click", function(){
                console.log("hello")
                location.reload(true)
            })    
            winner = "Henri"
            checkForSpinner();
            stopTheGame();
    }
    tieGame();
})

let positionSeven = document.getElementById("pos7").addEventListener("click", function(){

    if (p7 === 0 && pp7 === 0){
        if (i%2 == 0){
            document.getElementById("whosTurn").innerText = "Your move Henri!";
            document.getElementById("text7").appendChild(soma7);
            i++
            p7++
        } else {
            document.getElementById("whosTurn").innerText = "Your move Soma!";
            document.getElementById("text7").appendChild(henri7)
            i++
            pp7++
        } 
    }
    if (p7 === 1 && p4 === 1 & p1 === 1 || p7 === 1 && p8 === 1 && p9 === 1 || p7 === 1 && p5 === 1 && p3 === 1){
        document.getElementById("whosTurn").innerText = "Soma Wins!"
        let btn = document.createElement("button")
        btn.innerText = "PLAY AGAIN"
        container.appendChild(btn)
        btn.addEventListener("click", function(){
            console.log("hello")
            location.reload(true)
        })
        winner = "Soma"
        checkForSpinner();
        stopTheGame();

        }else if (pp7 === 1 && pp4 === 1 & pp1 === 1 || pp7 === 1 && pp8 === 1 && pp9 === 1 || pp7 === 1 && pp5 === 1 && pp3 === 1){
            document.getElementById("whosTurn").innerText = "Henri Wins!"
            let btn = document.createElement("button")
            btn.innerText = "PLAY AGAIN"
            container.appendChild(btn)
            btn.addEventListener("click", function(){
                console.log("hello")
                location.reload(true)
            })  
            winner = "Henri"
            checkForSpinner();
            stopTheGame();
    }
    tieGame();
})

let positionEight = document.getElementById("pos8").addEventListener("click", function(){
   
    if (p8 === 0 && pp8 === 0){
        if (i%2 == 0){
            document.getElementById("whosTurn").innerText = "Your move Henri!";
            document.getElementById("text8").appendChild(soma8);
            i++
            p8++
        } else {
            document.getElementById("whosTurn").innerText = "Your move Soma!";
            document.getElementById("text8").appendChild(henri8)
            i++
            pp8++
        } 
    }
    if (p8 === 1 && p7 === 1 & p9 === 1 || p8 === 1 && p5 === 1 && p2 === 1){
        document.getElementById("whosTurn").innerText = "Soma Wins!"
        let btn = document.createElement("button")
        btn.innerText = "PLAY AGAIN"
        container.appendChild(btn)
        btn.addEventListener("click", function(){
            console.log("hello")
            location.reload(true)
        })
        winner = "Soma"
        checkForSpinner();
        stopTheGame();


        }else if (pp8 === 1 && pp7 === 1 & pp9 === 1 || pp8 === 1 && pp5 === 1 && pp2 === 1){
            document.getElementById("whosTurn").innerText = "Henri Wins!"
            let btn = document.createElement("button")
            btn.innerText = "PLAY AGAIN"
            container.appendChild(btn)
            btn.addEventListener("click", function(){
                console.log("hello")
                location.reload(true)
            })    
            winner = "Henri"
            checkForSpinner();
            stopTheGame();
    }
    tieGame();
})

let positionNine = document.getElementById("pos9").addEventListener("click", function(){
    
    if (p9 === 0 && pp9 === 0){
        if (i%2 == 0){
            document.getElementById("whosTurn").innerText = "Your move Henri!";
            document.getElementById("text9").appendChild(soma9);
            i++
            p9++
        } else {
            document.getElementById("whosTurn").innerText = "Your move Soma!";
            document.getElementById("text9").appendChild(henri9)
            i++
            pp9++
        } 
    }
    if (p9 === 1 && p8 === 1 & p7 === 1 || p9 === 1 && p6 === 1 && p3 === 1 || p9 === 1 && p5 === 1 && p1 === 1){
        document.getElementById("whosTurn").innerText = "Soma Wins!"
        let btn = document.createElement("button")
        btn.innerText = "PLAY AGAIN"
        container.appendChild(btn)
        btn.addEventListener("click", function(){
            console.log("hello")
            location.reload(true)
        })
        winner = "Soma"
        checkForSpinner();
        stopTheGame();



        }else if (pp9 === 1 && pp8 === 1 & pp7 === 1 || pp9 === 1 && pp6 === 1 && pp3 === 1 || pp9 === 1 && pp5 === 1 && pp1 === 1){
            document.getElementById("whosTurn").innerText = "Henri Wins!"
            let btn = document.createElement("button")
            btn.innerText = "PLAY AGAIN"
            container.appendChild(btn)
            btn.addEventListener("click", function(){
                console.log("hello")
                location.reload(true)
            })    
            winner = "Henri"
            checkForSpinner();
            stopTheGame();
    }
    tieGame();
})

//get a spinner going

let keepGoing = 4

let checkForSpinner = ()=>{
if (winner.length === 4){


    let goTime = ()=>{
        
        if (keepGoing > 720){
            clearInterval(goTimnesetInterval)
        }
    
        somaPhoto.style.transform = "scale(1.5) rotate(" + keepGoing + "deg)"
    
        keepGoing += 4
    
    }
    let goTimnesetInterval = setInterval(goTime, 10)

} else if (winner.length === 5){

    let goTime = ()=>{
        
        if (keepGoing > 720){
            clearInterval(goTimnesetInterval)
        }
    
        henriPhoto.style.transform = "scale(1.5) rotate(" + keepGoing + "deg)"
    
        keepGoing += 4
    
    }
    let goTimnesetInterval = setInterval(goTime, 10)

}
}


// STOP THE GAME -------------->



let stopTheGame = ()=>{

    if (p1 === 0 && pp1 === 0){

        let random = document.getElementById("text1")
        random.remove()
        let removeText = document.getElementById("whosTurn")
        removeText.remove()

        let newText = document.createElement("p")
        newText.style.fontSize= "50px"
        newText.style.color= "green"
        newText.innerText = winner + " wins!"
        document.getElementById("text-container").appendChild(newText)

    }
    if (p2 === 0 && pp2 === 0){

        let random = document.getElementById("text2")
        random.remove()
        let removeText = document.getElementById("whosTurn")
        removeText.remove()

        let newText = document.createElement("p")
        newText.style.fontSize= "50px"
        newText.style.color = "green"
        newText.innerText = winner + " wins!"
        document.getElementById("text-container").appendChild(newText)
    }
    if (p3 === 0 && pp3 === 0){

        let random = document.getElementById("text3")
        random.remove()
        let removeText = document.getElementById("whosTurn")
        removeText.remove()

        let newText = document.createElement("p")
        newText.style.fontSize= "50px"
        newText.style.color = "green"
        newText.innerText = winner + " wins!"
        document.getElementById("text-container").appendChild(newText)
    }
    if (p4 === 0 && pp4 === 0){

        let random = document.getElementById("text4")
        random.remove()
        let removeText = document.getElementById("whosTurn")
        removeText.remove()

        let newText = document.createElement("p")
        newText.style.fontSize= "50px"
        newText.style.color = "green"
        newText.innerText = winner + " wins!"
        document.getElementById("text-container").appendChild(newText)
    }
    if (p5 === 0 && pp5 === 0){

        let random = document.getElementById("text5")
        random.remove()
        let removeText = document.getElementById("whosTurn")
        removeText.remove()

        let newText = document.createElement("p")
        newText.style.fontSize= "50px"
        newText.style.color = "green"
        newText.innerText = winner + " wins!"
        document.getElementById("text-container").appendChild(newText)
    }
    if (p6 === 0 && pp6 === 0){

        let random = document.getElementById("text6")
        random.remove()
        let removeText = document.getElementById("whosTurn")
        removeText.remove()

        let newText = document.createElement("p")
        newText.style.fontSize= "50px"
        newText.style.color = "green"
        newText.innerText = winner + " wins!"
        document.getElementById("text-container").appendChild(newText)
        newText.style.fontSize= "50px"
    }
    if (p7 === 0 && pp7 === 0){

        let random = document.getElementById("text7")
        random.remove()
        let removeText = document.getElementById("whosTurn")
        removeText.remove()

        let newText = document.createElement("p")
        newText.style.fontSize= "50px"
        newText.style.color = "green"
        newText.innerText = winner + " wins!"
        document.getElementById("text-container").appendChild(newText)
    }
    if (p8 === 0 && pp8 === 0){

        let random = document.getElementById("text8")
        random.remove()
        let removeText = document.getElementById("whosTurn")
        removeText.remove()

        let newText = document.createElement("p")
        newText.style.fontSize= "50px"
        newText.style.color = "green"
        newText.innerText = winner + " wins!"
        document.getElementById("text-container").appendChild(newText)
    }
    if (p9 === 0 && pp9 === 0){

        let random = document.getElementById("text")
        random.remove()
        let removeText = document.getElementById("whosTurn")
        removeText.remove()

        let newText = document.createElement("p")
        newText.style.fontSize= "50px"
        newText.style.color = "green"
        newText.innerText = winner + " wins!"
        document.getElementById("text-container").appendChild(newText)
    }

    

}

// CATS GAME --------------------------------------------------->
let tieGame = () => {


    if (p1 === 1 || pp1 === 1){
        if (p2 === 1 || pp2 === 1){
            if (p3 === 1 || pp3 === 1){
                if (p4 === 1 || pp4 === 1){
                    if (p5 ===1 || pp5 ===1){
                        if (p6 === 1 || pp6 ===1){
                            if (p7 === 1 || pp7 ===1){
                                if (p8 === 1 || pp8 === 1){
                                    if (p9 === 1 || pp9 === 1){
                                        document.getElementById("whosTurn").innerText = "it's a tie!"
                                        let btn = document.createElement("button")
                                            btn.innerText = "PLAY AGAIN"
                                            container.appendChild(btn)
                                            btn.addEventListener("click", function(){
                                                console.log("hello")
                                                location.reload(true)
                                            })    

                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}