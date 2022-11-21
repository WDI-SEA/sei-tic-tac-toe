
let moveNumber = 1

function rowColOneOne() {
    if(moveNumber % 2 !== 0) {
        document.getElementById('one').innerText = "X"
        document.getElementById('oneBox').style.zIndex = "12"
        document.getElementById('whoMove').innerText = "O has the move"
        moveNumber++
    } else {
        document.getElementById('one').innerText = "O"
        document.getElementById('oneBox').style.zIndex = "13"
        document.getElementById('whoMove').innerText = "X has the move"
        moveNumber++
    }
    if(document.getElementById('one').innerText === document.getElementById('two').innerText && document.getElementById('two').innerText === document.getElementById('three').innerText) {
        if(document.getElementById('oneBox').style.zIndex === 12){
            document.getElementById('whoMove').innerText = "X has won!"
        } else {
            document.getElementById('whoMove').innerText = "O has won!"
        }
        document.getElementById('buttonOne').style.zIndex = "14"
        document.getElementById('buttonOne').style.backgroundColor = "green"
        document.getElementById('buttonOne').style.opacity = ".5"

        document.getElementById('buttonTwo').style.zIndex = "14"
        document.getElementById('buttonTwo').style.backgroundColor = "green"
        document.getElementById('buttonTwo').style.opacity = ".5"

        document.getElementById('buttonThree').style.zIndex = "14"
        document.getElementById('buttonThree').style.backgroundColor = "green"
        document.getElementById('buttonThree').style.opacity = ".5"
   } else if(document.getElementById('one').innerText === document.getElementById('five').innerText && document.getElementById('five').innerText === document.getElementById('nine').innerText){
        if(document.getElementById('oneBox').style.zIndex === 12){
            document.getElementById('whoMove').innerText = "X has won!"
        } else {
            document.getElementById('whoMove').innerText = "O has won!"
        }
        if (document.getElementById('one').innerText !== "X" || document.getElementById('one').innerText !== "O") {
            document.getElementById('oneBox').style.zIndex = "15"
            document.getElementById('buttonOne').style.backgroundColor = "grey"
            document.getElementById('buttonOne').style.opacity = ".5"
        }
        if (document.getElementById('two').innerText !== "X" || document.getElementById('two').innerText !== "O") {
            document.getElementById('twoBox').style.zIndex = "15"
            document.getElementById('buttonTwo').style.backgroundColor = "grey"
            document.getElementById('buttonTwo').style.opacity = ".5"
        }
        if (document.getElementById('three').innerText !== "X" || document.getElementById('three').innerText !== "O") {
            document.getElementById('threeBox').style.zIndex = "15"
            document.getElementById('buttonThree').style.backgroundColor = "grey"
            document.getElementById('buttonThree').style.opacity = ".5"
        }
        if (document.getElementById('four').innerText !== "X" || document.getElementById('four').innerText !== "O") {
            document.getElementById('fourBox').style.zIndex = "15"
            document.getElementById('buttonFour').style.backgroundColor = "grey"
            document.getElementById('buttonFour').style.opacity = ".5"
        }
        if (document.getElementById('five').innerText !== "X" || document.getElementById('five').innerText !== "O") {
            document.getElementById('fiveBox').style.zIndex = "15"
            document.getElementById('buttonFive').style.backgroundColor = "grey"
            document.getElementById('buttonFive').style.opacity = ".5"
        }
        if (document.getElementById('six').innerText !== "X" || document.getElementById('six').innerText !== "O") {
            document.getElementById('sixBox').style.zIndex = "15"
            document.getElementById('buttonSix').style.backgroundColor = "grey"
            document.getElementById('buttonSix').style.opacity = ".5"
        }
        if (document.getElementById('seven').innerText !== "X" || document.getElementById('seven').innerText !== "O") {
            document.getElementById('sevenBox').style.zIndex = "15"
            document.getElementById('buttonSeven').style.backgroundColor = "grey"
            document.getElementById('buttonSeven').style.opacity = ".5"
        }
        if (document.getElementById('eight').innerText !== "X" || document.getElementById('eight').innerText !== "O") {
            document.getElementById('eightBox').style.zIndex = "15"
            document.getElementById('buttonEight').style.backgroundColor = "grey"
            document.getElementById('buttonEight').style.opacity = ".5"
        }
        if (document.getElementById('nine').innerText !== "X" || document.getElementById('nine').innerText !== "O") {
            document.getElementById('nineBox').style.zIndex = "15"
            document.getElementById('buttonNine').style.backgroundColor = "grey"
            document.getElementById('buttonNine').style.opacity = ".5"
        }
        document.getElementById('buttonOne').style.zIndex = "14"
        document.getElementById('buttonOne').style.backgroundColor = "green"
        document.getElementById('buttonOne').style.opacity = ".5"

        document.getElementById('buttonFive').style.zIndex = "14"
        document.getElementById('buttonFive').style.backgroundColor = "green"
        document.getElementById('buttonFive').style.opacity = ".5"

        document.getElementById('buttonNine').style.zIndex = "14"
        document.getElementById('buttonNine').style.backgroundColor = "green"
        document.getElementById('buttonNine').style.opacity = ".5"



   } else if(document.getElementById('one').innerText === document.getElementById('four').innerText && document.getElementById('four').innerText === document.getElementById('seven').innerText){
        if(document.getElementById('oneBox').style.zIndex === 12){
            document.getElementById('whoMove').innerText = "X has won!"
        } else {
            document.getElementById('whoMove').innerText = "O has won!"
        }

        if (document.getElementById('one').innerText !== "X" || document.getElementById('one').innerText !== "O") {
            document.getElementById('oneBox').style.zIndex = "15"
            document.getElementById('buttonOne').style.backgroundColor = "grey"
            document.getElementById('buttonOne').style.opacity = ".5"
        }
        if (document.getElementById('two').innerText !== "X" || document.getElementById('two').innerText !== "O") {
            document.getElementById('twoBox').style.zIndex = "15"
            document.getElementById('buttonTwo').style.backgroundColor = "grey"
            document.getElementById('buttonTwo').style.opacity = ".5"
        }
        if (document.getElementById('three').innerText !== "X" || document.getElementById('three').innerText !== "O") {
            document.getElementById('threeBox').style.zIndex = "15"
            document.getElementById('buttonThree').style.backgroundColor = "grey"
            document.getElementById('buttonThree').style.opacity = ".5"
        }
        if (document.getElementById('four').innerText !== "X" || document.getElementById('four').innerText !== "O") {
            document.getElementById('fourBox').style.zIndex = "15"
            document.getElementById('buttonFour').style.backgroundColor = "grey"
            document.getElementById('buttonFour').style.opacity = ".5"
        }
        if (document.getElementById('five').innerText !== "X" || document.getElementById('five').innerText !== "O") {
            document.getElementById('fiveBox').style.zIndex = "15"
            document.getElementById('buttonFive').style.backgroundColor = "grey"
            document.getElementById('buttonFive').style.opacity = ".5"
        }
        if (document.getElementById('six').innerText !== "X" || document.getElementById('six').innerText !== "O") {
            document.getElementById('sixBox').style.zIndex = "15"
            document.getElementById('buttonSix').style.backgroundColor = "grey"
            document.getElementById('buttonSix').style.opacity = ".5"
        }
        if (document.getElementById('seven').innerText !== "X" || document.getElementById('seven').innerText !== "O") {
            document.getElementById('sevenBox').style.zIndex = "15"
            document.getElementById('buttonSeven').style.backgroundColor = "grey"
            document.getElementById('buttonSeven').style.opacity = ".5"
        }
        if (document.getElementById('eight').innerText !== "X" || document.getElementById('eight').innerText !== "O") {
            document.getElementById('eightBox').style.zIndex = "15"
            document.getElementById('buttonEight').style.backgroundColor = "grey"
            document.getElementById('buttonEight').style.opacity = ".5"
        }
        if (document.getElementById('nine').innerText !== "X" || document.getElementById('nine').innerText !== "O") {
            document.getElementById('nineBox').style.zIndex = "15"
            document.getElementById('buttonNine').style.backgroundColor = "grey"
            document.getElementById('buttonNine').style.opacity = ".5"
        }

        document.getElementById('buttonOne').style.zIndex = "14"
        document.getElementById('buttonOne').style.backgroundColor = "green"
        document.getElementById('buttonOne').style.opacity = ".5"

        document.getElementById('buttonFour').style.zIndex = "14"
        document.getElementById('buttonFour').style.backgroundColor = "green"
        document.getElementById('buttonFour').style.opacity = ".5"

        document.getElementById('buttonSeven').style.zIndex = "14"
        document.getElementById('buttonSeven').style.backgroundColor = "green"
        document.getElementById('buttonSeven').style.opacity = ".5"
   } else if(document.getElementById('two').innerText === document.getElementById('five').innerText && document.getElementById('five').innerText === document.getElementById('eight').innerText){
        if(document.getElementById('twoBox').style.zIndex === 12){
            document.getElementById('whoMove').innerText = "X has won!"
        } else {
            document.getElementById('whoMove').innerText = "O has won!"
        }

        if (document.getElementById('one').innerText !== "X" || document.getElementById('one').innerText !== "O") {
            document.getElementById('oneBox').style.zIndex = "15"
            document.getElementById('buttonOne').style.backgroundColor = "grey"
            document.getElementById('buttonOne').style.opacity = ".5"
        }
        if (document.getElementById('two').innerText !== "X" || document.getElementById('two').innerText !== "O") {
            document.getElementById('twoBox').style.zIndex = "15"
            document.getElementById('buttonTwo').style.backgroundColor = "grey"
            document.getElementById('buttonTwo').style.opacity = ".5"
        }
        if (document.getElementById('three').innerText !== "X" || document.getElementById('three').innerText !== "O") {
            document.getElementById('threeBox').style.zIndex = "15"
            document.getElementById('buttonThree').style.backgroundColor = "grey"
            document.getElementById('buttonThree').style.opacity = ".5"
        }
        if (document.getElementById('four').innerText !== "X" || document.getElementById('four').innerText !== "O") {
            document.getElementById('fourBox').style.zIndex = "15"
            document.getElementById('buttonFour').style.backgroundColor = "grey"
            document.getElementById('buttonFour').style.opacity = ".5"
        }
        if (document.getElementById('five').innerText !== "X" || document.getElementById('five').innerText !== "O") {
            document.getElementById('fiveBox').style.zIndex = "15"
            document.getElementById('buttonFive').style.backgroundColor = "grey"
            document.getElementById('buttonFive').style.opacity = ".5"
        }
        if (document.getElementById('six').innerText !== "X" || document.getElementById('six').innerText !== "O") {
            document.getElementById('sixBox').style.zIndex = "15"
            document.getElementById('buttonSix').style.backgroundColor = "grey"
            document.getElementById('buttonSix').style.opacity = ".5"
        }
        if (document.getElementById('seven').innerText !== "X" || document.getElementById('seven').innerText !== "O") {
            document.getElementById('sevenBox').style.zIndex = "15"
            document.getElementById('buttonSeven').style.backgroundColor = "grey"
            document.getElementById('buttonSeven').style.opacity = ".5"
        }
        if (document.getElementById('eight').innerText !== "X" || document.getElementById('eight').innerText !== "O") {
            document.getElementById('eightBox').style.zIndex = "15"
            document.getElementById('buttonEight').style.backgroundColor = "grey"
            document.getElementById('buttonEight').style.opacity = ".5"
        }
        if (document.getElementById('nine').innerText !== "X" || document.getElementById('nine').innerText !== "O") {
            document.getElementById('nineBox').style.zIndex = "15"
            document.getElementById('buttonNine').style.backgroundColor = "grey"
            document.getElementById('buttonNine').style.opacity = ".5"
        }

        document.getElementById('buttonTwo').style.zIndex = "14"
        document.getElementById('buttonTwo').style.backgroundColor = "green"
        document.getElementById('buttonTwo').style.opacity = ".5"

        document.getElementById('buttonFive').style.zIndex = "14"
        document.getElementById('buttonFive').style.backgroundColor = "green"
        document.getElementById('buttonFive').style.opacity = ".5"

        document.getElementById('buttonEight').style.zIndex = "14"
        document.getElementById('buttonEight').style.backgroundColor = "green"
        document.getElementById('buttonEight').style.opacity = ".5"
   } else if(document.getElementById('three').innerText === document.getElementById('six').innerText && document.getElementById('six').innerText === document.getElementById('nine').innerText) {
        if(document.getElementById('twoBox').style.zIndex === 12){
            document.getElementById('whoMove').innerText = "X has won!"
        } else {
            document.getElementById('whoMove').innerText = "O has won!"
        }

        if (document.getElementById('one').innerText !== "X" || document.getElementById('one').innerText !== "O") {
            document.getElementById('oneBox').style.zIndex = "15"
            document.getElementById('buttonOne').style.backgroundColor = "grey"
            document.getElementById('buttonOne').style.opacity = ".5"
        }
        if (document.getElementById('two').innerText !== "X" || document.getElementById('two').innerText !== "O") {
            document.getElementById('twoBox').style.zIndex = "15"
            document.getElementById('buttonTwo').style.backgroundColor = "grey"
            document.getElementById('buttonTwo').style.opacity = ".5"
        }
        if (document.getElementById('three').innerText !== "X" || document.getElementById('three').innerText !== "O") {
            document.getElementById('threeBox').style.zIndex = "15"
            document.getElementById('buttonThree').style.backgroundColor = "grey"
            document.getElementById('buttonThree').style.opacity = ".5"
        }
        if (document.getElementById('four').innerText !== "X" || document.getElementById('four').innerText !== "O") {
            document.getElementById('fourBox').style.zIndex = "15"
            document.getElementById('buttonFour').style.backgroundColor = "grey"
            document.getElementById('buttonFour').style.opacity = ".5"
        }
        if (document.getElementById('five').innerText !== "X" || document.getElementById('five').innerText !== "O") {
            document.getElementById('fiveBox').style.zIndex = "15"
            document.getElementById('buttonFive').style.backgroundColor = "grey"
            document.getElementById('buttonFive').style.opacity = ".5"
        }
        if (document.getElementById('six').innerText !== "X" || document.getElementById('six').innerText !== "O") {
            document.getElementById('sixBox').style.zIndex = "15"
            document.getElementById('buttonSix').style.backgroundColor = "grey"
            document.getElementById('buttonSix').style.opacity = ".5"
        }
        if (document.getElementById('seven').innerText !== "X" || document.getElementById('seven').innerText !== "O") {
            document.getElementById('sevenBox').style.zIndex = "15"
            document.getElementById('buttonSeven').style.backgroundColor = "grey"
            document.getElementById('buttonSeven').style.opacity = ".5"
        }
        if (document.getElementById('eight').innerText !== "X" || document.getElementById('eight').innerText !== "O") {
            document.getElementById('eightBox').style.zIndex = "15"
            document.getElementById('buttonEight').style.backgroundColor = "grey"
            document.getElementById('buttonEight').style.opacity = ".5"
        }
        if (document.getElementById('nine').innerText !== "X" || document.getElementById('nine').innerText !== "O") {
            document.getElementById('nineBox').style.zIndex = "15"
            document.getElementById('buttonNine').style.backgroundColor = "grey"
            document.getElementById('buttonNine').style.opacity = ".5"
        }

        document.getElementById('buttonThree').style.zIndex = "14"
        document.getElementById('buttonThree').style.backgroundColor = "green"
        document.getElementById('buttonThree').style.opacity = ".5"

        document.getElementById('buttonSix').style.zIndex = "14"
        document.getElementById('buttonSix').style.backgroundColor = "green"
        document.getElementById('buttonSix').style.opacity = ".5"

        document.getElementById('buttonNine').style.zIndex = "14"
        document.getElementById('buttonNine').style.backgroundColor = "green"
        document.getElementById('buttonNine').style.opacity = ".5"
   } else if(document.getElementById('three').innerText === document.getElementById('five').innerText && document.getElementById('five').innerText === document.getElementById('seven').innerText){
        if(document.getElementById('threeBox').style.zIndex === 12){
            document.getElementById('whoMove').innerText = "X has won!"
        } else {
            document.getElementById('whoMove').innerText = "O has won!"
        }

        if (document.getElementById('one').innerText !== "X" || document.getElementById('one').innerText !== "O") {
            document.getElementById('oneBox').style.zIndex = "15"
            document.getElementById('buttonOne').style.backgroundColor = "grey"
            document.getElementById('buttonOne').style.opacity = ".5"
        }
        if (document.getElementById('two').innerText !== "X" || document.getElementById('two').innerText !== "O") {
            document.getElementById('twoBox').style.zIndex = "15"
            document.getElementById('buttonTwo').style.backgroundColor = "grey"
            document.getElementById('buttonTwo').style.opacity = ".5"
        }
        if (document.getElementById('three').innerText !== "X" || document.getElementById('three').innerText !== "O") {
            document.getElementById('threeBox').style.zIndex = "15"
            document.getElementById('buttonThree').style.backgroundColor = "grey"
            document.getElementById('buttonThree').style.opacity = ".5"
        }
        if (document.getElementById('four').innerText !== "X" || document.getElementById('four').innerText !== "O") {
            document.getElementById('fourBox').style.zIndex = "15"
            document.getElementById('buttonFour').style.backgroundColor = "grey"
            document.getElementById('buttonFour').style.opacity = ".5"
        }
        if (document.getElementById('five').innerText !== "X" || document.getElementById('five').innerText !== "O") {
            document.getElementById('fiveBox').style.zIndex = "15"
            document.getElementById('buttonFive').style.backgroundColor = "grey"
            document.getElementById('buttonFive').style.opacity = ".5"
        }
        if (document.getElementById('six').innerText !== "X" || document.getElementById('six').innerText !== "O") {
            document.getElementById('sixBox').style.zIndex = "15"
            document.getElementById('buttonSix').style.backgroundColor = "grey"
            document.getElementById('buttonSix').style.opacity = ".5"
        }
        if (document.getElementById('seven').innerText !== "X" || document.getElementById('seven').innerText !== "O") {
            document.getElementById('sevenBox').style.zIndex = "15"
            document.getElementById('buttonSeven').style.backgroundColor = "grey"
            document.getElementById('buttonSeven').style.opacity = ".5"
        }
        if (document.getElementById('eight').innerText !== "X" || document.getElementById('eight').innerText !== "O") {
            document.getElementById('eightBox').style.zIndex = "15"
            document.getElementById('buttonEight').style.backgroundColor = "grey"
            document.getElementById('buttonEight').style.opacity = ".5"
        }
        if (document.getElementById('nine').innerText !== "X" || document.getElementById('nine').innerText !== "O") {
            document.getElementById('nineBox').style.zIndex = "15"
            document.getElementById('buttonNine').style.backgroundColor = "grey"
            document.getElementById('buttonNine').style.opacity = ".5"
        }

        document.getElementById('buttonThree').style.zIndex = "14"
        document.getElementById('buttonThree').style.backgroundColor = "green"
        document.getElementById('buttonThree').style.opacity = ".5"

        document.getElementById('buttonFive').style.zIndex = "14"
        document.getElementById('buttonFive').style.backgroundColor = "green"
        document.getElementById('buttonFive').style.opacity = ".5"

        document.getElementById('buttonSeven').style.zIndex = "14"
        document.getElementById('buttonSeven').style.backgroundColor = "green"
        document.getElementById('buttonSeven').style.opacity = ".5"
   } else if(document.getElementById('four').innerText === document.getElementById('five').innerText && document.getElementById('five').innerText === document.getElementById('six').innerText) {
        if(document.getElementById('fourBox').style.zIndex === 12){
            document.getElementById('whoMove').innerText = "X has won!"
        } else {
            document.getElementById('whoMove').innerText = "O has won!"
        }

        if (document.getElementById('one').innerText !== "X" || document.getElementById('one').innerText !== "O") {
            document.getElementById('oneBox').style.zIndex = "15"
            document.getElementById('buttonOne').style.backgroundColor = "grey"
            document.getElementById('buttonOne').style.opacity = ".5"
        }
        if (document.getElementById('two').innerText !== "X" || document.getElementById('two').innerText !== "O") {
            document.getElementById('twoBox').style.zIndex = "15"
            document.getElementById('buttonTwo').style.backgroundColor = "grey"
            document.getElementById('buttonTwo').style.opacity = ".5"
        }
        if (document.getElementById('three').innerText !== "X" || document.getElementById('three').innerText !== "O") {
            document.getElementById('threeBox').style.zIndex = "15"
            document.getElementById('buttonThree').style.backgroundColor = "grey"
            document.getElementById('buttonThree').style.opacity = ".5"
        }
        if (document.getElementById('four').innerText !== "X" || document.getElementById('four').innerText !== "O") {
            document.getElementById('fourBox').style.zIndex = "15"
            document.getElementById('buttonFour').style.backgroundColor = "grey"
            document.getElementById('buttonFour').style.opacity = ".5"
        }
        if (document.getElementById('five').innerText !== "X" || document.getElementById('five').innerText !== "O") {
            document.getElementById('fiveBox').style.zIndex = "15"
            document.getElementById('buttonFive').style.backgroundColor = "grey"
            document.getElementById('buttonFive').style.opacity = ".5"
        }
        if (document.getElementById('six').innerText !== "X" || document.getElementById('six').innerText !== "O") {
            document.getElementById('sixBox').style.zIndex = "15"
            document.getElementById('buttonSix').style.backgroundColor = "grey"
            document.getElementById('buttonSix').style.opacity = ".5"
        }
        if (document.getElementById('seven').innerText !== "X" || document.getElementById('seven').innerText !== "O") {
            document.getElementById('sevenBox').style.zIndex = "15"
            document.getElementById('buttonSeven').style.backgroundColor = "grey"
            document.getElementById('buttonSeven').style.opacity = ".5"
        }
        if (document.getElementById('eight').innerText !== "X" || document.getElementById('eight').innerText !== "O") {
            document.getElementById('eightBox').style.zIndex = "15"
            document.getElementById('buttonEight').style.backgroundColor = "grey"
            document.getElementById('buttonEight').style.opacity = ".5"
        }
        if (document.getElementById('nine').innerText !== "X" || document.getElementById('nine').innerText !== "O") {
            document.getElementById('nineBox').style.zIndex = "15"
            document.getElementById('buttonNine').style.backgroundColor = "grey"
            document.getElementById('buttonNine').style.opacity = ".5"
        }

        document.getElementById('buttonFour').style.zIndex = "14"
        document.getElementById('buttonFour').style.backgroundColor = "green"
        document.getElementById('buttonFour').style.opacity = ".5"

        document.getElementById('buttonFive').style.zIndex = "14"
        document.getElementById('buttonFive').style.backgroundColor = "green"
        document.getElementById('buttonFive').style.opacity = ".5"

        document.getElementById('buttonSix').style.zIndex = "14"
        document.getElementById('buttonSix').style.backgroundColor = "green"
        document.getElementById('buttonSix').style.opacity = ".5"
   } else if(document.getElementById('seven').innerText === document.getElementById('eight').innerText && document.getElementById('eight').innerText === document.getElementById('nine').innerText) {
        if(document.getElementById('sevenBox').style.zIndex === 12){
            document.getElementById('whoMove').innerText = "X has won!"
        } else {
            document.getElementById('whoMove').innerText = "O has won!"
        }

        if (document.getElementById('one').innerText !== "X" || document.getElementById('one').innerText !== "O") {
            document.getElementById('oneBox').style.zIndex = "15"
            document.getElementById('buttonOne').style.backgroundColor = "grey"
            document.getElementById('buttonOne').style.opacity = ".5"
        }
        if (document.getElementById('two').innerText !== "X" || document.getElementById('two').innerText !== "O") {
            document.getElementById('twoBox').style.zIndex = "15"
            document.getElementById('buttonTwo').style.backgroundColor = "grey"
            document.getElementById('buttonTwo').style.opacity = ".5"
        }
        if (document.getElementById('three').innerText !== "X" || document.getElementById('three').innerText !== "O") {
            document.getElementById('threeBox').style.zIndex = "15"
            document.getElementById('buttonThree').style.backgroundColor = "grey"
            document.getElementById('buttonThree').style.opacity = ".5"
        }
        if (document.getElementById('four').innerText !== "X" || document.getElementById('four').innerText !== "O") {
            document.getElementById('fourBox').style.zIndex = "15"
            document.getElementById('buttonFour').style.backgroundColor = "grey"
            document.getElementById('buttonFour').style.opacity = ".5"
        }
        if (document.getElementById('five').innerText !== "X" || document.getElementById('five').innerText !== "O") {
            document.getElementById('fiveBox').style.zIndex = "15"
            document.getElementById('buttonFive').style.backgroundColor = "grey"
            document.getElementById('buttonFive').style.opacity = ".5"
        }
        if (document.getElementById('six').innerText !== "X" || document.getElementById('six').innerText !== "O") {
            document.getElementById('sixBox').style.zIndex = "15"
            document.getElementById('buttonSix').style.backgroundColor = "grey"
            document.getElementById('buttonSix').style.opacity = ".5"
        }
        if (document.getElementById('seven').innerText !== "X" || document.getElementById('seven').innerText !== "O") {
            document.getElementById('sevenBox').style.zIndex = "15"
            document.getElementById('buttonSeven').style.backgroundColor = "grey"
            document.getElementById('buttonSeven').style.opacity = ".5"
        }
        if (document.getElementById('eight').innerText !== "X" || document.getElementById('eight').innerText !== "O") {
            document.getElementById('eightBox').style.zIndex = "15"
            document.getElementById('buttonEight').style.backgroundColor = "grey"
            document.getElementById('buttonEight').style.opacity = ".5"
        }
        if (document.getElementById('nine').innerText !== "X" || document.getElementById('nine').innerText !== "O") {
            document.getElementById('nineBox').style.zIndex = "15"
            document.getElementById('buttonNine').style.backgroundColor = "grey"
            document.getElementById('buttonNine').style.opacity = ".5"
        } 

        document.getElementById('buttonSeven').style.zIndex = "14"
        document.getElementById('buttonSeven').style.backgroundColor = "green"
        document.getElementById('buttonSeven').style.opacity = ".5"

        document.getElementById('buttonEight').style.zIndex = "14"
        document.getElementById('buttonEight').style.backgroundColor = "green"
        document.getElementById('buttonEight').style.opacity = ".5"

        document.getElementById('buttonNine').style.zIndex = "14"
        document.getElementById('buttonNine').style.backgroundColor = "green"
        document.getElementById('buttonNine').style.opacity = ".5"
    }else if(moveNumber === 10) { //TIE//
        document.getElementById('whoMove').innerText = "Tie"
        document.getElementById('buttonOne').style.zIndex = "14"
        document.getElementById('buttonOne').style.backgroundColor = "pink"
        document.getElementById('buttonOne').style.opacity = ".5"

        document.getElementById('buttonThree').style.zIndex = "14"
        document.getElementById('buttonThree').style.backgroundColor = "pink"
        document.getElementById('buttonThree').style.opacity = ".5"

        document.getElementById('buttonFive').style.zIndex = "14"
        document.getElementById('buttonFive').style.backgroundColor = "pink"
        document.getElementById('buttonFive').style.opacity = ".5"

        document.getElementById('buttonNine').style.zIndex = "14"
        document.getElementById('buttonNine').style.backgroundColor = "pink"
        document.getElementById('buttonNine').style.opacity = ".5"

        document.getElementById('buttonSeven').style.zIndex = "14"
        document.getElementById('buttonSeven').style.backgroundColor = "pink"
        document.getElementById('buttonSeven').style.opacity = ".5"
   }
   

    console.log(moveNumber)
}




function rowColOneTwo() {
    if(moveNumber % 2 !== 0) {
        document.getElementById('two').innerText = "X"
        document.getElementById('twoBox').style.zIndex = "12"
        document.getElementById('whoMove').innerText = "O has the move"
        moveNumber++
    } else {
        document.getElementById('two').innerText = "O"
        document.getElementById('twoBox').style.zIndex = "13"
        document.getElementById('whoMove').innerText = "X has the move"
        moveNumber++
    }

    if(document.getElementById('one').innerText === document.getElementById('two').innerText && document.getElementById('two').innerText === document.getElementById('three').innerText) {
        if(document.getElementById('oneBox').style.zIndex === 12){
            document.getElementById('whoMove').innerText = "X has won!"
        } else {
            document.getElementById('whoMove').innerText = "O has won!"
        }
        document.getElementById('buttonOne').style.zIndex = "14"
        document.getElementById('buttonOne').style.backgroundColor = "green"
        document.getElementById('buttonOne').style.opacity = ".5"

        document.getElementById('buttonTwo').style.zIndex = "14"
        document.getElementById('buttonTwo').style.backgroundColor = "green"
        document.getElementById('buttonTwo').style.opacity = ".5"

        document.getElementById('buttonThree').style.zIndex = "14"
        document.getElementById('buttonThree').style.backgroundColor = "green"
        document.getElementById('buttonThree').style.opacity = ".5"
   } else if(document.getElementById('one').innerText === document.getElementById('five').innerText && document.getElementById('five').innerText === document.getElementById('nine').innerText){
        if(document.getElementById('oneBox').style.zIndex === 12){
            document.getElementById('whoMove').innerText = "X has won!"
        } else {
            document.getElementById('whoMove').innerText = "O has won!"
        }
        if (document.getElementById('one').innerText !== "X" || document.getElementById('one').innerText !== "O") {
            document.getElementById('oneBox').style.zIndex = "15"
            document.getElementById('buttonOne').style.backgroundColor = "grey"
            document.getElementById('buttonOne').style.opacity = ".5"
        }
        if (document.getElementById('two').innerText !== "X" || document.getElementById('two').innerText !== "O") {
            document.getElementById('twoBox').style.zIndex = "15"
            document.getElementById('buttonTwo').style.backgroundColor = "grey"
            document.getElementById('buttonTwo').style.opacity = ".5"
        }
        if (document.getElementById('three').innerText !== "X" || document.getElementById('three').innerText !== "O") {
            document.getElementById('threeBox').style.zIndex = "15"
            document.getElementById('buttonThree').style.backgroundColor = "grey"
            document.getElementById('buttonThree').style.opacity = ".5"
        }
        if (document.getElementById('four').innerText !== "X" || document.getElementById('four').innerText !== "O") {
            document.getElementById('fourBox').style.zIndex = "15"
            document.getElementById('buttonFour').style.backgroundColor = "grey"
            document.getElementById('buttonFour').style.opacity = ".5"
        }
        if (document.getElementById('five').innerText !== "X" || document.getElementById('five').innerText !== "O") {
            document.getElementById('fiveBox').style.zIndex = "15"
            document.getElementById('buttonFive').style.backgroundColor = "grey"
            document.getElementById('buttonFive').style.opacity = ".5"
        }
        if (document.getElementById('six').innerText !== "X" || document.getElementById('six').innerText !== "O") {
            document.getElementById('sixBox').style.zIndex = "15"
            document.getElementById('buttonSix').style.backgroundColor = "grey"
            document.getElementById('buttonSix').style.opacity = ".5"
        }
        if (document.getElementById('seven').innerText !== "X" || document.getElementById('seven').innerText !== "O") {
            document.getElementById('sevenBox').style.zIndex = "15"
            document.getElementById('buttonSeven').style.backgroundColor = "grey"
            document.getElementById('buttonSeven').style.opacity = ".5"
        }
        if (document.getElementById('eight').innerText !== "X" || document.getElementById('eight').innerText !== "O") {
            document.getElementById('eightBox').style.zIndex = "15"
            document.getElementById('buttonEight').style.backgroundColor = "grey"
            document.getElementById('buttonEight').style.opacity = ".5"
        }
        if (document.getElementById('nine').innerText !== "X" || document.getElementById('nine').innerText !== "O") {
            document.getElementById('nineBox').style.zIndex = "15"
            document.getElementById('buttonNine').style.backgroundColor = "grey"
            document.getElementById('buttonNine').style.opacity = ".5"
        }
        document.getElementById('buttonOne').style.zIndex = "14"
        document.getElementById('buttonOne').style.backgroundColor = "green"
        document.getElementById('buttonOne').style.opacity = ".5"

        document.getElementById('buttonFive').style.zIndex = "14"
        document.getElementById('buttonFive').style.backgroundColor = "green"
        document.getElementById('buttonFive').style.opacity = ".5"

        document.getElementById('buttonNine').style.zIndex = "14"
        document.getElementById('buttonNine').style.backgroundColor = "green"
        document.getElementById('buttonNine').style.opacity = ".5"



   } else if(document.getElementById('one').innerText === document.getElementById('four').innerText && document.getElementById('four').innerText === document.getElementById('seven').innerText){
        if(document.getElementById('oneBox').style.zIndex === 12){
            document.getElementById('whoMove').innerText = "X has won!"
        } else {
            document.getElementById('whoMove').innerText = "O has won!"
        }

        if (document.getElementById('one').innerText !== "X" || document.getElementById('one').innerText !== "O") {
            document.getElementById('oneBox').style.zIndex = "15"
            document.getElementById('buttonOne').style.backgroundColor = "grey"
            document.getElementById('buttonOne').style.opacity = ".5"
        }
        if (document.getElementById('two').innerText !== "X" || document.getElementById('two').innerText !== "O") {
            document.getElementById('twoBox').style.zIndex = "15"
            document.getElementById('buttonTwo').style.backgroundColor = "grey"
            document.getElementById('buttonTwo').style.opacity = ".5"
        }
        if (document.getElementById('three').innerText !== "X" || document.getElementById('three').innerText !== "O") {
            document.getElementById('threeBox').style.zIndex = "15"
            document.getElementById('buttonThree').style.backgroundColor = "grey"
            document.getElementById('buttonThree').style.opacity = ".5"
        }
        if (document.getElementById('four').innerText !== "X" || document.getElementById('four').innerText !== "O") {
            document.getElementById('fourBox').style.zIndex = "15"
            document.getElementById('buttonFour').style.backgroundColor = "grey"
            document.getElementById('buttonFour').style.opacity = ".5"
        }
        if (document.getElementById('five').innerText !== "X" || document.getElementById('five').innerText !== "O") {
            document.getElementById('fiveBox').style.zIndex = "15"
            document.getElementById('buttonFive').style.backgroundColor = "grey"
            document.getElementById('buttonFive').style.opacity = ".5"
        }
        if (document.getElementById('six').innerText !== "X" || document.getElementById('six').innerText !== "O") {
            document.getElementById('sixBox').style.zIndex = "15"
            document.getElementById('buttonSix').style.backgroundColor = "grey"
            document.getElementById('buttonSix').style.opacity = ".5"
        }
        if (document.getElementById('seven').innerText !== "X" || document.getElementById('seven').innerText !== "O") {
            document.getElementById('sevenBox').style.zIndex = "15"
            document.getElementById('buttonSeven').style.backgroundColor = "grey"
            document.getElementById('buttonSeven').style.opacity = ".5"
        }
        if (document.getElementById('eight').innerText !== "X" || document.getElementById('eight').innerText !== "O") {
            document.getElementById('eightBox').style.zIndex = "15"
            document.getElementById('buttonEight').style.backgroundColor = "grey"
            document.getElementById('buttonEight').style.opacity = ".5"
        }
        if (document.getElementById('nine').innerText !== "X" || document.getElementById('nine').innerText !== "O") {
            document.getElementById('nineBox').style.zIndex = "15"
            document.getElementById('buttonNine').style.backgroundColor = "grey"
            document.getElementById('buttonNine').style.opacity = ".5"
        }

        document.getElementById('buttonOne').style.zIndex = "14"
        document.getElementById('buttonOne').style.backgroundColor = "green"
        document.getElementById('buttonOne').style.opacity = ".5"

        document.getElementById('buttonFour').style.zIndex = "14"
        document.getElementById('buttonFour').style.backgroundColor = "green"
        document.getElementById('buttonFour').style.opacity = ".5"

        document.getElementById('buttonSeven').style.zIndex = "14"
        document.getElementById('buttonSeven').style.backgroundColor = "green"
        document.getElementById('buttonSeven').style.opacity = ".5"
   } else if(document.getElementById('two').innerText === document.getElementById('five').innerText && document.getElementById('five').innerText === document.getElementById('eight').innerText){
        if(document.getElementById('twoBox').style.zIndex === 12){
            document.getElementById('whoMove').innerText = "X has won!"
        } else {
            document.getElementById('whoMove').innerText = "O has won!"
        }

        if (document.getElementById('one').innerText !== "X" || document.getElementById('one').innerText !== "O") {
            document.getElementById('oneBox').style.zIndex = "15"
            document.getElementById('buttonOne').style.backgroundColor = "grey"
            document.getElementById('buttonOne').style.opacity = ".5"
        }
        if (document.getElementById('two').innerText !== "X" || document.getElementById('two').innerText !== "O") {
            document.getElementById('twoBox').style.zIndex = "15"
            document.getElementById('buttonTwo').style.backgroundColor = "grey"
            document.getElementById('buttonTwo').style.opacity = ".5"
        }
        if (document.getElementById('three').innerText !== "X" || document.getElementById('three').innerText !== "O") {
            document.getElementById('threeBox').style.zIndex = "15"
            document.getElementById('buttonThree').style.backgroundColor = "grey"
            document.getElementById('buttonThree').style.opacity = ".5"
        }
        if (document.getElementById('four').innerText !== "X" || document.getElementById('four').innerText !== "O") {
            document.getElementById('fourBox').style.zIndex = "15"
            document.getElementById('buttonFour').style.backgroundColor = "grey"
            document.getElementById('buttonFour').style.opacity = ".5"
        }
        if (document.getElementById('five').innerText !== "X" || document.getElementById('five').innerText !== "O") {
            document.getElementById('fiveBox').style.zIndex = "15"
            document.getElementById('buttonFive').style.backgroundColor = "grey"
            document.getElementById('buttonFive').style.opacity = ".5"
        }
        if (document.getElementById('six').innerText !== "X" || document.getElementById('six').innerText !== "O") {
            document.getElementById('sixBox').style.zIndex = "15"
            document.getElementById('buttonSix').style.backgroundColor = "grey"
            document.getElementById('buttonSix').style.opacity = ".5"
        }
        if (document.getElementById('seven').innerText !== "X" || document.getElementById('seven').innerText !== "O") {
            document.getElementById('sevenBox').style.zIndex = "15"
            document.getElementById('buttonSeven').style.backgroundColor = "grey"
            document.getElementById('buttonSeven').style.opacity = ".5"
        }
        if (document.getElementById('eight').innerText !== "X" || document.getElementById('eight').innerText !== "O") {
            document.getElementById('eightBox').style.zIndex = "15"
            document.getElementById('buttonEight').style.backgroundColor = "grey"
            document.getElementById('buttonEight').style.opacity = ".5"
        }
        if (document.getElementById('nine').innerText !== "X" || document.getElementById('nine').innerText !== "O") {
            document.getElementById('nineBox').style.zIndex = "15"
            document.getElementById('buttonNine').style.backgroundColor = "grey"
            document.getElementById('buttonNine').style.opacity = ".5"
        }

        document.getElementById('buttonTwo').style.zIndex = "14"
        document.getElementById('buttonTwo').style.backgroundColor = "green"
        document.getElementById('buttonTwo').style.opacity = ".5"

        document.getElementById('buttonFive').style.zIndex = "14"
        document.getElementById('buttonFive').style.backgroundColor = "green"
        document.getElementById('buttonFive').style.opacity = ".5"

        document.getElementById('buttonEight').style.zIndex = "14"
        document.getElementById('buttonEight').style.backgroundColor = "green"
        document.getElementById('buttonEight').style.opacity = ".5"
   } else if(document.getElementById('three').innerText === document.getElementById('six').innerText && document.getElementById('six').innerText === document.getElementById('nine').innerText) {
        if(document.getElementById('twoBox').style.zIndex === 12){
            document.getElementById('whoMove').innerText = "X has won!"
        } else {
            document.getElementById('whoMove').innerText = "O has won!"
        }

        if (document.getElementById('one').innerText !== "X" || document.getElementById('one').innerText !== "O") {
            document.getElementById('oneBox').style.zIndex = "15"
            document.getElementById('buttonOne').style.backgroundColor = "grey"
            document.getElementById('buttonOne').style.opacity = ".5"
        }
        if (document.getElementById('two').innerText !== "X" || document.getElementById('two').innerText !== "O") {
            document.getElementById('twoBox').style.zIndex = "15"
            document.getElementById('buttonTwo').style.backgroundColor = "grey"
            document.getElementById('buttonTwo').style.opacity = ".5"
        }
        if (document.getElementById('three').innerText !== "X" || document.getElementById('three').innerText !== "O") {
            document.getElementById('threeBox').style.zIndex = "15"
            document.getElementById('buttonThree').style.backgroundColor = "grey"
            document.getElementById('buttonThree').style.opacity = ".5"
        }
        if (document.getElementById('four').innerText !== "X" || document.getElementById('four').innerText !== "O") {
            document.getElementById('fourBox').style.zIndex = "15"
            document.getElementById('buttonFour').style.backgroundColor = "grey"
            document.getElementById('buttonFour').style.opacity = ".5"
        }
        if (document.getElementById('five').innerText !== "X" || document.getElementById('five').innerText !== "O") {
            document.getElementById('fiveBox').style.zIndex = "15"
            document.getElementById('buttonFive').style.backgroundColor = "grey"
            document.getElementById('buttonFive').style.opacity = ".5"
        }
        if (document.getElementById('six').innerText !== "X" || document.getElementById('six').innerText !== "O") {
            document.getElementById('sixBox').style.zIndex = "15"
            document.getElementById('buttonSix').style.backgroundColor = "grey"
            document.getElementById('buttonSix').style.opacity = ".5"
        }
        if (document.getElementById('seven').innerText !== "X" || document.getElementById('seven').innerText !== "O") {
            document.getElementById('sevenBox').style.zIndex = "15"
            document.getElementById('buttonSeven').style.backgroundColor = "grey"
            document.getElementById('buttonSeven').style.opacity = ".5"
        }
        if (document.getElementById('eight').innerText !== "X" || document.getElementById('eight').innerText !== "O") {
            document.getElementById('eightBox').style.zIndex = "15"
            document.getElementById('buttonEight').style.backgroundColor = "grey"
            document.getElementById('buttonEight').style.opacity = ".5"
        }
        if (document.getElementById('nine').innerText !== "X" || document.getElementById('nine').innerText !== "O") {
            document.getElementById('nineBox').style.zIndex = "15"
            document.getElementById('buttonNine').style.backgroundColor = "grey"
            document.getElementById('buttonNine').style.opacity = ".5"
        }

        document.getElementById('buttonThree').style.zIndex = "14"
        document.getElementById('buttonThree').style.backgroundColor = "green"
        document.getElementById('buttonThree').style.opacity = ".5"

        document.getElementById('buttonSix').style.zIndex = "14"
        document.getElementById('buttonSix').style.backgroundColor = "green"
        document.getElementById('buttonSix').style.opacity = ".5"

        document.getElementById('buttonNine').style.zIndex = "14"
        document.getElementById('buttonNine').style.backgroundColor = "green"
        document.getElementById('buttonNine').style.opacity = ".5"
   } else if(document.getElementById('three').innerText === document.getElementById('five').innerText && document.getElementById('five').innerText === document.getElementById('seven').innerText){
        if(document.getElementById('threeBox').style.zIndex === 12){
            document.getElementById('whoMove').innerText = "X has won!"
        } else {
            document.getElementById('whoMove').innerText = "O has won!"
        }

        if (document.getElementById('one').innerText !== "X" || document.getElementById('one').innerText !== "O") {
            document.getElementById('oneBox').style.zIndex = "15"
            document.getElementById('buttonOne').style.backgroundColor = "grey"
            document.getElementById('buttonOne').style.opacity = ".5"
        }
        if (document.getElementById('two').innerText !== "X" || document.getElementById('two').innerText !== "O") {
            document.getElementById('twoBox').style.zIndex = "15"
            document.getElementById('buttonTwo').style.backgroundColor = "grey"
            document.getElementById('buttonTwo').style.opacity = ".5"
        }
        if (document.getElementById('three').innerText !== "X" || document.getElementById('three').innerText !== "O") {
            document.getElementById('threeBox').style.zIndex = "15"
            document.getElementById('buttonThree').style.backgroundColor = "grey"
            document.getElementById('buttonThree').style.opacity = ".5"
        }
        if (document.getElementById('four').innerText !== "X" || document.getElementById('four').innerText !== "O") {
            document.getElementById('fourBox').style.zIndex = "15"
            document.getElementById('buttonFour').style.backgroundColor = "grey"
            document.getElementById('buttonFour').style.opacity = ".5"
        }
        if (document.getElementById('five').innerText !== "X" || document.getElementById('five').innerText !== "O") {
            document.getElementById('fiveBox').style.zIndex = "15"
            document.getElementById('buttonFive').style.backgroundColor = "grey"
            document.getElementById('buttonFive').style.opacity = ".5"
        }
        if (document.getElementById('six').innerText !== "X" || document.getElementById('six').innerText !== "O") {
            document.getElementById('sixBox').style.zIndex = "15"
            document.getElementById('buttonSix').style.backgroundColor = "grey"
            document.getElementById('buttonSix').style.opacity = ".5"
        }
        if (document.getElementById('seven').innerText !== "X" || document.getElementById('seven').innerText !== "O") {
            document.getElementById('sevenBox').style.zIndex = "15"
            document.getElementById('buttonSeven').style.backgroundColor = "grey"
            document.getElementById('buttonSeven').style.opacity = ".5"
        }
        if (document.getElementById('eight').innerText !== "X" || document.getElementById('eight').innerText !== "O") {
            document.getElementById('eightBox').style.zIndex = "15"
            document.getElementById('buttonEight').style.backgroundColor = "grey"
            document.getElementById('buttonEight').style.opacity = ".5"
        }
        if (document.getElementById('nine').innerText !== "X" || document.getElementById('nine').innerText !== "O") {
            document.getElementById('nineBox').style.zIndex = "15"
            document.getElementById('buttonNine').style.backgroundColor = "grey"
            document.getElementById('buttonNine').style.opacity = ".5"
        }

        document.getElementById('buttonThree').style.zIndex = "14"
        document.getElementById('buttonThree').style.backgroundColor = "green"
        document.getElementById('buttonThree').style.opacity = ".5"

        document.getElementById('buttonFive').style.zIndex = "14"
        document.getElementById('buttonFive').style.backgroundColor = "green"
        document.getElementById('buttonFive').style.opacity = ".5"

        document.getElementById('buttonSeven').style.zIndex = "14"
        document.getElementById('buttonSeven').style.backgroundColor = "green"
        document.getElementById('buttonSeven').style.opacity = ".5"
   } else if(document.getElementById('four').innerText === document.getElementById('five').innerText && document.getElementById('five').innerText === document.getElementById('six').innerText) {
        if(document.getElementById('fourBox').style.zIndex === 12){
            document.getElementById('whoMove').innerText = "X has won!"
        } else {
            document.getElementById('whoMove').innerText = "O has won!"
        }

        if (document.getElementById('one').innerText !== "X" || document.getElementById('one').innerText !== "O") {
            document.getElementById('oneBox').style.zIndex = "15"
            document.getElementById('buttonOne').style.backgroundColor = "grey"
            document.getElementById('buttonOne').style.opacity = ".5"
        }
        if (document.getElementById('two').innerText !== "X" || document.getElementById('two').innerText !== "O") {
            document.getElementById('twoBox').style.zIndex = "15"
            document.getElementById('buttonTwo').style.backgroundColor = "grey"
            document.getElementById('buttonTwo').style.opacity = ".5"
        }
        if (document.getElementById('three').innerText !== "X" || document.getElementById('three').innerText !== "O") {
            document.getElementById('threeBox').style.zIndex = "15"
            document.getElementById('buttonThree').style.backgroundColor = "grey"
            document.getElementById('buttonThree').style.opacity = ".5"
        }
        if (document.getElementById('four').innerText !== "X" || document.getElementById('four').innerText !== "O") {
            document.getElementById('fourBox').style.zIndex = "15"
            document.getElementById('buttonFour').style.backgroundColor = "grey"
            document.getElementById('buttonFour').style.opacity = ".5"
        }
        if (document.getElementById('five').innerText !== "X" || document.getElementById('five').innerText !== "O") {
            document.getElementById('fiveBox').style.zIndex = "15"
            document.getElementById('buttonFive').style.backgroundColor = "grey"
            document.getElementById('buttonFive').style.opacity = ".5"
        }
        if (document.getElementById('six').innerText !== "X" || document.getElementById('six').innerText !== "O") {
            document.getElementById('sixBox').style.zIndex = "15"
            document.getElementById('buttonSix').style.backgroundColor = "grey"
            document.getElementById('buttonSix').style.opacity = ".5"
        }
        if (document.getElementById('seven').innerText !== "X" || document.getElementById('seven').innerText !== "O") {
            document.getElementById('sevenBox').style.zIndex = "15"
            document.getElementById('buttonSeven').style.backgroundColor = "grey"
            document.getElementById('buttonSeven').style.opacity = ".5"
        }
        if (document.getElementById('eight').innerText !== "X" || document.getElementById('eight').innerText !== "O") {
            document.getElementById('eightBox').style.zIndex = "15"
            document.getElementById('buttonEight').style.backgroundColor = "grey"
            document.getElementById('buttonEight').style.opacity = ".5"
        }
        if (document.getElementById('nine').innerText !== "X" || document.getElementById('nine').innerText !== "O") {
            document.getElementById('nineBox').style.zIndex = "15"
            document.getElementById('buttonNine').style.backgroundColor = "grey"
            document.getElementById('buttonNine').style.opacity = ".5"
        }

        document.getElementById('buttonFour').style.zIndex = "14"
        document.getElementById('buttonFour').style.backgroundColor = "green"
        document.getElementById('buttonFour').style.opacity = ".5"

        document.getElementById('buttonFive').style.zIndex = "14"
        document.getElementById('buttonFive').style.backgroundColor = "green"
        document.getElementById('buttonFive').style.opacity = ".5"

        document.getElementById('buttonSix').style.zIndex = "14"
        document.getElementById('buttonSix').style.backgroundColor = "green"
        document.getElementById('buttonSix').style.opacity = ".5"
   } else if(document.getElementById('seven').innerText === document.getElementById('eight').innerText && document.getElementById('eight').innerText === document.getElementById('nine').innerText) {
        if(document.getElementById('sevenBox').style.zIndex === 12){
            document.getElementById('whoMove').innerText = "X has won!"
        } else {
            document.getElementById('whoMove').innerText = "O has won!"
        }

        if (document.getElementById('one').innerText !== "X" || document.getElementById('one').innerText !== "O") {
            document.getElementById('oneBox').style.zIndex = "15"
            document.getElementById('buttonOne').style.backgroundColor = "grey"
            document.getElementById('buttonOne').style.opacity = ".5"
        }
        if (document.getElementById('two').innerText !== "X" || document.getElementById('two').innerText !== "O") {
            document.getElementById('twoBox').style.zIndex = "15"
            document.getElementById('buttonTwo').style.backgroundColor = "grey"
            document.getElementById('buttonTwo').style.opacity = ".5"
        }
        if (document.getElementById('three').innerText !== "X" || document.getElementById('three').innerText !== "O") {
            document.getElementById('threeBox').style.zIndex = "15"
            document.getElementById('buttonThree').style.backgroundColor = "grey"
            document.getElementById('buttonThree').style.opacity = ".5"
        }
        if (document.getElementById('four').innerText !== "X" || document.getElementById('four').innerText !== "O") {
            document.getElementById('fourBox').style.zIndex = "15"
            document.getElementById('buttonFour').style.backgroundColor = "grey"
            document.getElementById('buttonFour').style.opacity = ".5"
        }
        if (document.getElementById('five').innerText !== "X" || document.getElementById('five').innerText !== "O") {
            document.getElementById('fiveBox').style.zIndex = "15"
            document.getElementById('buttonFive').style.backgroundColor = "grey"
            document.getElementById('buttonFive').style.opacity = ".5"
        }
        if (document.getElementById('six').innerText !== "X" || document.getElementById('six').innerText !== "O") {
            document.getElementById('sixBox').style.zIndex = "15"
            document.getElementById('buttonSix').style.backgroundColor = "grey"
            document.getElementById('buttonSix').style.opacity = ".5"
        }
        if (document.getElementById('seven').innerText !== "X" || document.getElementById('seven').innerText !== "O") {
            document.getElementById('sevenBox').style.zIndex = "15"
            document.getElementById('buttonSeven').style.backgroundColor = "grey"
            document.getElementById('buttonSeven').style.opacity = ".5"
        }
        if (document.getElementById('eight').innerText !== "X" || document.getElementById('eight').innerText !== "O") {
            document.getElementById('eightBox').style.zIndex = "15"
            document.getElementById('buttonEight').style.backgroundColor = "grey"
            document.getElementById('buttonEight').style.opacity = ".5"
        }
        if (document.getElementById('nine').innerText !== "X" || document.getElementById('nine').innerText !== "O") {
            document.getElementById('nineBox').style.zIndex = "15"
            document.getElementById('buttonNine').style.backgroundColor = "grey"
            document.getElementById('buttonNine').style.opacity = ".5"
        } 

        document.getElementById('buttonSeven').style.zIndex = "14"
        document.getElementById('buttonSeven').style.backgroundColor = "green"
        document.getElementById('buttonSeven').style.opacity = ".5"

        document.getElementById('buttonEight').style.zIndex = "14"
        document.getElementById('buttonEight').style.backgroundColor = "green"
        document.getElementById('buttonEight').style.opacity = ".5"

        document.getElementById('buttonNine').style.zIndex = "14"
        document.getElementById('buttonNine').style.backgroundColor = "green"
        document.getElementById('buttonNine').style.opacity = ".5"
    }else if(moveNumber === 10) { //TIE//
        document.getElementById('whoMove').innerText = "Tie"
        document.getElementById('buttonOne').style.zIndex = "14"
        document.getElementById('buttonOne').style.backgroundColor = "pink"
        document.getElementById('buttonOne').style.opacity = ".5"

        document.getElementById('buttonThree').style.zIndex = "14"
        document.getElementById('buttonThree').style.backgroundColor = "pink"
        document.getElementById('buttonThree').style.opacity = ".5"

        document.getElementById('buttonFive').style.zIndex = "14"
        document.getElementById('buttonFive').style.backgroundColor = "pink"
        document.getElementById('buttonFive').style.opacity = ".5"

        document.getElementById('buttonNine').style.zIndex = "14"
        document.getElementById('buttonNine').style.backgroundColor = "pink"
        document.getElementById('buttonNine').style.opacity = ".5"

        document.getElementById('buttonSeven').style.zIndex = "14"
        document.getElementById('buttonSeven').style.backgroundColor = "pink"
        document.getElementById('buttonSeven').style.opacity = ".5"
   }
   
    console.log(moveNumber)
}

function rowColOneThree() {
    if(moveNumber % 2 !== 0) {
        document.getElementById('three').innerText = "X"
        document.getElementById('threeBox').style.zIndex = "12"
        document.getElementById('whoMove').innerText = "O has the move"
        moveNumber++
    } else {
        document.getElementById('three').innerText = "O"
        document.getElementById('threeBox').style.zIndex = "13"
        document.getElementById('whoMove').innerText = "X has the move"
        moveNumber++
    }
    if(document.getElementById('one').innerText === document.getElementById('two').innerText && document.getElementById('two').innerText === document.getElementById('three').innerText) {
        if(document.getElementById('oneBox').style.zIndex === 12){
            document.getElementById('whoMove').innerText = "X has won!"
        } else {
            document.getElementById('whoMove').innerText = "O has won!"
        }
        document.getElementById('buttonOne').style.zIndex = "14"
        document.getElementById('buttonOne').style.backgroundColor = "green"
        document.getElementById('buttonOne').style.opacity = ".5"

        document.getElementById('buttonTwo').style.zIndex = "14"
        document.getElementById('buttonTwo').style.backgroundColor = "green"
        document.getElementById('buttonTwo').style.opacity = ".5"

        document.getElementById('buttonThree').style.zIndex = "14"
        document.getElementById('buttonThree').style.backgroundColor = "green"
        document.getElementById('buttonThree').style.opacity = ".5"
   } else if(document.getElementById('one').innerText === document.getElementById('five').innerText && document.getElementById('five').innerText === document.getElementById('nine').innerText){
        if(document.getElementById('oneBox').style.zIndex === 12){
            document.getElementById('whoMove').innerText = "X has won!"
        } else {
            document.getElementById('whoMove').innerText = "O has won!"
        }
        if (document.getElementById('one').innerText !== "X" || document.getElementById('one').innerText !== "O") {
            document.getElementById('oneBox').style.zIndex = "15"
            document.getElementById('buttonOne').style.backgroundColor = "grey"
            document.getElementById('buttonOne').style.opacity = ".5"
        }
        if (document.getElementById('two').innerText !== "X" || document.getElementById('two').innerText !== "O") {
            document.getElementById('twoBox').style.zIndex = "15"
            document.getElementById('buttonTwo').style.backgroundColor = "grey"
            document.getElementById('buttonTwo').style.opacity = ".5"
        }
        if (document.getElementById('three').innerText !== "X" || document.getElementById('three').innerText !== "O") {
            document.getElementById('threeBox').style.zIndex = "15"
            document.getElementById('buttonThree').style.backgroundColor = "grey"
            document.getElementById('buttonThree').style.opacity = ".5"
        }
        if (document.getElementById('four').innerText !== "X" || document.getElementById('four').innerText !== "O") {
            document.getElementById('fourBox').style.zIndex = "15"
            document.getElementById('buttonFour').style.backgroundColor = "grey"
            document.getElementById('buttonFour').style.opacity = ".5"
        }
        if (document.getElementById('five').innerText !== "X" || document.getElementById('five').innerText !== "O") {
            document.getElementById('fiveBox').style.zIndex = "15"
            document.getElementById('buttonFive').style.backgroundColor = "grey"
            document.getElementById('buttonFive').style.opacity = ".5"
        }
        if (document.getElementById('six').innerText !== "X" || document.getElementById('six').innerText !== "O") {
            document.getElementById('sixBox').style.zIndex = "15"
            document.getElementById('buttonSix').style.backgroundColor = "grey"
            document.getElementById('buttonSix').style.opacity = ".5"
        }
        if (document.getElementById('seven').innerText !== "X" || document.getElementById('seven').innerText !== "O") {
            document.getElementById('sevenBox').style.zIndex = "15"
            document.getElementById('buttonSeven').style.backgroundColor = "grey"
            document.getElementById('buttonSeven').style.opacity = ".5"
        }
        if (document.getElementById('eight').innerText !== "X" || document.getElementById('eight').innerText !== "O") {
            document.getElementById('eightBox').style.zIndex = "15"
            document.getElementById('buttonEight').style.backgroundColor = "grey"
            document.getElementById('buttonEight').style.opacity = ".5"
        }
        if (document.getElementById('nine').innerText !== "X" || document.getElementById('nine').innerText !== "O") {
            document.getElementById('nineBox').style.zIndex = "15"
            document.getElementById('buttonNine').style.backgroundColor = "grey"
            document.getElementById('buttonNine').style.opacity = ".5"
        }
        document.getElementById('buttonOne').style.zIndex = "14"
        document.getElementById('buttonOne').style.backgroundColor = "green"
        document.getElementById('buttonOne').style.opacity = ".5"

        document.getElementById('buttonFive').style.zIndex = "14"
        document.getElementById('buttonFive').style.backgroundColor = "green"
        document.getElementById('buttonFive').style.opacity = ".5"

        document.getElementById('buttonNine').style.zIndex = "14"
        document.getElementById('buttonNine').style.backgroundColor = "green"
        document.getElementById('buttonNine').style.opacity = ".5"



   } else if(document.getElementById('one').innerText === document.getElementById('four').innerText && document.getElementById('four').innerText === document.getElementById('seven').innerText){
        if(document.getElementById('oneBox').style.zIndex === 12){
            document.getElementById('whoMove').innerText = "X has won!"
        } else {
            document.getElementById('whoMove').innerText = "O has won!"
        }

        if (document.getElementById('one').innerText !== "X" || document.getElementById('one').innerText !== "O") {
            document.getElementById('oneBox').style.zIndex = "15"
            document.getElementById('buttonOne').style.backgroundColor = "grey"
            document.getElementById('buttonOne').style.opacity = ".5"
        }
        if (document.getElementById('two').innerText !== "X" || document.getElementById('two').innerText !== "O") {
            document.getElementById('twoBox').style.zIndex = "15"
            document.getElementById('buttonTwo').style.backgroundColor = "grey"
            document.getElementById('buttonTwo').style.opacity = ".5"
        }
        if (document.getElementById('three').innerText !== "X" || document.getElementById('three').innerText !== "O") {
            document.getElementById('threeBox').style.zIndex = "15"
            document.getElementById('buttonThree').style.backgroundColor = "grey"
            document.getElementById('buttonThree').style.opacity = ".5"
        }
        if (document.getElementById('four').innerText !== "X" || document.getElementById('four').innerText !== "O") {
            document.getElementById('fourBox').style.zIndex = "15"
            document.getElementById('buttonFour').style.backgroundColor = "grey"
            document.getElementById('buttonFour').style.opacity = ".5"
        }
        if (document.getElementById('five').innerText !== "X" || document.getElementById('five').innerText !== "O") {
            document.getElementById('fiveBox').style.zIndex = "15"
            document.getElementById('buttonFive').style.backgroundColor = "grey"
            document.getElementById('buttonFive').style.opacity = ".5"
        }
        if (document.getElementById('six').innerText !== "X" || document.getElementById('six').innerText !== "O") {
            document.getElementById('sixBox').style.zIndex = "15"
            document.getElementById('buttonSix').style.backgroundColor = "grey"
            document.getElementById('buttonSix').style.opacity = ".5"
        }
        if (document.getElementById('seven').innerText !== "X" || document.getElementById('seven').innerText !== "O") {
            document.getElementById('sevenBox').style.zIndex = "15"
            document.getElementById('buttonSeven').style.backgroundColor = "grey"
            document.getElementById('buttonSeven').style.opacity = ".5"
        }
        if (document.getElementById('eight').innerText !== "X" || document.getElementById('eight').innerText !== "O") {
            document.getElementById('eightBox').style.zIndex = "15"
            document.getElementById('buttonEight').style.backgroundColor = "grey"
            document.getElementById('buttonEight').style.opacity = ".5"
        }
        if (document.getElementById('nine').innerText !== "X" || document.getElementById('nine').innerText !== "O") {
            document.getElementById('nineBox').style.zIndex = "15"
            document.getElementById('buttonNine').style.backgroundColor = "grey"
            document.getElementById('buttonNine').style.opacity = ".5"
        }

        document.getElementById('buttonOne').style.zIndex = "14"
        document.getElementById('buttonOne').style.backgroundColor = "green"
        document.getElementById('buttonOne').style.opacity = ".5"

        document.getElementById('buttonFour').style.zIndex = "14"
        document.getElementById('buttonFour').style.backgroundColor = "green"
        document.getElementById('buttonFour').style.opacity = ".5"

        document.getElementById('buttonSeven').style.zIndex = "14"
        document.getElementById('buttonSeven').style.backgroundColor = "green"
        document.getElementById('buttonSeven').style.opacity = ".5"
   } else if(document.getElementById('two').innerText === document.getElementById('five').innerText && document.getElementById('five').innerText === document.getElementById('eight').innerText){
        if(document.getElementById('twoBox').style.zIndex === 12){
            document.getElementById('whoMove').innerText = "X has won!"
        } else {
            document.getElementById('whoMove').innerText = "O has won!"
        }

        if (document.getElementById('one').innerText !== "X" || document.getElementById('one').innerText !== "O") {
            document.getElementById('oneBox').style.zIndex = "15"
            document.getElementById('buttonOne').style.backgroundColor = "grey"
            document.getElementById('buttonOne').style.opacity = ".5"
        }
        if (document.getElementById('two').innerText !== "X" || document.getElementById('two').innerText !== "O") {
            document.getElementById('twoBox').style.zIndex = "15"
            document.getElementById('buttonTwo').style.backgroundColor = "grey"
            document.getElementById('buttonTwo').style.opacity = ".5"
        }
        if (document.getElementById('three').innerText !== "X" || document.getElementById('three').innerText !== "O") {
            document.getElementById('threeBox').style.zIndex = "15"
            document.getElementById('buttonThree').style.backgroundColor = "grey"
            document.getElementById('buttonThree').style.opacity = ".5"
        }
        if (document.getElementById('four').innerText !== "X" || document.getElementById('four').innerText !== "O") {
            document.getElementById('fourBox').style.zIndex = "15"
            document.getElementById('buttonFour').style.backgroundColor = "grey"
            document.getElementById('buttonFour').style.opacity = ".5"
        }
        if (document.getElementById('five').innerText !== "X" || document.getElementById('five').innerText !== "O") {
            document.getElementById('fiveBox').style.zIndex = "15"
            document.getElementById('buttonFive').style.backgroundColor = "grey"
            document.getElementById('buttonFive').style.opacity = ".5"
        }
        if (document.getElementById('six').innerText !== "X" || document.getElementById('six').innerText !== "O") {
            document.getElementById('sixBox').style.zIndex = "15"
            document.getElementById('buttonSix').style.backgroundColor = "grey"
            document.getElementById('buttonSix').style.opacity = ".5"
        }
        if (document.getElementById('seven').innerText !== "X" || document.getElementById('seven').innerText !== "O") {
            document.getElementById('sevenBox').style.zIndex = "15"
            document.getElementById('buttonSeven').style.backgroundColor = "grey"
            document.getElementById('buttonSeven').style.opacity = ".5"
        }
        if (document.getElementById('eight').innerText !== "X" || document.getElementById('eight').innerText !== "O") {
            document.getElementById('eightBox').style.zIndex = "15"
            document.getElementById('buttonEight').style.backgroundColor = "grey"
            document.getElementById('buttonEight').style.opacity = ".5"
        }
        if (document.getElementById('nine').innerText !== "X" || document.getElementById('nine').innerText !== "O") {
            document.getElementById('nineBox').style.zIndex = "15"
            document.getElementById('buttonNine').style.backgroundColor = "grey"
            document.getElementById('buttonNine').style.opacity = ".5"
        }

        document.getElementById('buttonTwo').style.zIndex = "14"
        document.getElementById('buttonTwo').style.backgroundColor = "green"
        document.getElementById('buttonTwo').style.opacity = ".5"

        document.getElementById('buttonFive').style.zIndex = "14"
        document.getElementById('buttonFive').style.backgroundColor = "green"
        document.getElementById('buttonFive').style.opacity = ".5"

        document.getElementById('buttonEight').style.zIndex = "14"
        document.getElementById('buttonEight').style.backgroundColor = "green"
        document.getElementById('buttonEight').style.opacity = ".5"
   } else if(document.getElementById('three').innerText === document.getElementById('six').innerText && document.getElementById('six').innerText === document.getElementById('nine').innerText) {
        if(document.getElementById('twoBox').style.zIndex === 12){
            document.getElementById('whoMove').innerText = "X has won!"
        } else {
            document.getElementById('whoMove').innerText = "O has won!"
        }

        if (document.getElementById('one').innerText !== "X" || document.getElementById('one').innerText !== "O") {
            document.getElementById('oneBox').style.zIndex = "15"
            document.getElementById('buttonOne').style.backgroundColor = "grey"
            document.getElementById('buttonOne').style.opacity = ".5"
        }
        if (document.getElementById('two').innerText !== "X" || document.getElementById('two').innerText !== "O") {
            document.getElementById('twoBox').style.zIndex = "15"
            document.getElementById('buttonTwo').style.backgroundColor = "grey"
            document.getElementById('buttonTwo').style.opacity = ".5"
        }
        if (document.getElementById('three').innerText !== "X" || document.getElementById('three').innerText !== "O") {
            document.getElementById('threeBox').style.zIndex = "15"
            document.getElementById('buttonThree').style.backgroundColor = "grey"
            document.getElementById('buttonThree').style.opacity = ".5"
        }
        if (document.getElementById('four').innerText !== "X" || document.getElementById('four').innerText !== "O") {
            document.getElementById('fourBox').style.zIndex = "15"
            document.getElementById('buttonFour').style.backgroundColor = "grey"
            document.getElementById('buttonFour').style.opacity = ".5"
        }
        if (document.getElementById('five').innerText !== "X" || document.getElementById('five').innerText !== "O") {
            document.getElementById('fiveBox').style.zIndex = "15"
            document.getElementById('buttonFive').style.backgroundColor = "grey"
            document.getElementById('buttonFive').style.opacity = ".5"
        }
        if (document.getElementById('six').innerText !== "X" || document.getElementById('six').innerText !== "O") {
            document.getElementById('sixBox').style.zIndex = "15"
            document.getElementById('buttonSix').style.backgroundColor = "grey"
            document.getElementById('buttonSix').style.opacity = ".5"
        }
        if (document.getElementById('seven').innerText !== "X" || document.getElementById('seven').innerText !== "O") {
            document.getElementById('sevenBox').style.zIndex = "15"
            document.getElementById('buttonSeven').style.backgroundColor = "grey"
            document.getElementById('buttonSeven').style.opacity = ".5"
        }
        if (document.getElementById('eight').innerText !== "X" || document.getElementById('eight').innerText !== "O") {
            document.getElementById('eightBox').style.zIndex = "15"
            document.getElementById('buttonEight').style.backgroundColor = "grey"
            document.getElementById('buttonEight').style.opacity = ".5"
        }
        if (document.getElementById('nine').innerText !== "X" || document.getElementById('nine').innerText !== "O") {
            document.getElementById('nineBox').style.zIndex = "15"
            document.getElementById('buttonNine').style.backgroundColor = "grey"
            document.getElementById('buttonNine').style.opacity = ".5"
        }

        document.getElementById('buttonThree').style.zIndex = "14"
        document.getElementById('buttonThree').style.backgroundColor = "green"
        document.getElementById('buttonThree').style.opacity = ".5"

        document.getElementById('buttonSix').style.zIndex = "14"
        document.getElementById('buttonSix').style.backgroundColor = "green"
        document.getElementById('buttonSix').style.opacity = ".5"

        document.getElementById('buttonNine').style.zIndex = "14"
        document.getElementById('buttonNine').style.backgroundColor = "green"
        document.getElementById('buttonNine').style.opacity = ".5"
   } else if(document.getElementById('three').innerText === document.getElementById('five').innerText && document.getElementById('five').innerText === document.getElementById('seven').innerText){
        if(document.getElementById('threeBox').style.zIndex === 12){
            document.getElementById('whoMove').innerText = "X has won!"
        } else {
            document.getElementById('whoMove').innerText = "O has won!"
        }

        if (document.getElementById('one').innerText !== "X" || document.getElementById('one').innerText !== "O") {
            document.getElementById('oneBox').style.zIndex = "15"
            document.getElementById('buttonOne').style.backgroundColor = "grey"
            document.getElementById('buttonOne').style.opacity = ".5"
        }
        if (document.getElementById('two').innerText !== "X" || document.getElementById('two').innerText !== "O") {
            document.getElementById('twoBox').style.zIndex = "15"
            document.getElementById('buttonTwo').style.backgroundColor = "grey"
            document.getElementById('buttonTwo').style.opacity = ".5"
        }
        if (document.getElementById('three').innerText !== "X" || document.getElementById('three').innerText !== "O") {
            document.getElementById('threeBox').style.zIndex = "15"
            document.getElementById('buttonThree').style.backgroundColor = "grey"
            document.getElementById('buttonThree').style.opacity = ".5"
        }
        if (document.getElementById('four').innerText !== "X" || document.getElementById('four').innerText !== "O") {
            document.getElementById('fourBox').style.zIndex = "15"
            document.getElementById('buttonFour').style.backgroundColor = "grey"
            document.getElementById('buttonFour').style.opacity = ".5"
        }
        if (document.getElementById('five').innerText !== "X" || document.getElementById('five').innerText !== "O") {
            document.getElementById('fiveBox').style.zIndex = "15"
            document.getElementById('buttonFive').style.backgroundColor = "grey"
            document.getElementById('buttonFive').style.opacity = ".5"
        }
        if (document.getElementById('six').innerText !== "X" || document.getElementById('six').innerText !== "O") {
            document.getElementById('sixBox').style.zIndex = "15"
            document.getElementById('buttonSix').style.backgroundColor = "grey"
            document.getElementById('buttonSix').style.opacity = ".5"
        }
        if (document.getElementById('seven').innerText !== "X" || document.getElementById('seven').innerText !== "O") {
            document.getElementById('sevenBox').style.zIndex = "15"
            document.getElementById('buttonSeven').style.backgroundColor = "grey"
            document.getElementById('buttonSeven').style.opacity = ".5"
        }
        if (document.getElementById('eight').innerText !== "X" || document.getElementById('eight').innerText !== "O") {
            document.getElementById('eightBox').style.zIndex = "15"
            document.getElementById('buttonEight').style.backgroundColor = "grey"
            document.getElementById('buttonEight').style.opacity = ".5"
        }
        if (document.getElementById('nine').innerText !== "X" || document.getElementById('nine').innerText !== "O") {
            document.getElementById('nineBox').style.zIndex = "15"
            document.getElementById('buttonNine').style.backgroundColor = "grey"
            document.getElementById('buttonNine').style.opacity = ".5"
        }

        document.getElementById('buttonThree').style.zIndex = "14"
        document.getElementById('buttonThree').style.backgroundColor = "green"
        document.getElementById('buttonThree').style.opacity = ".5"

        document.getElementById('buttonFive').style.zIndex = "14"
        document.getElementById('buttonFive').style.backgroundColor = "green"
        document.getElementById('buttonFive').style.opacity = ".5"

        document.getElementById('buttonSeven').style.zIndex = "14"
        document.getElementById('buttonSeven').style.backgroundColor = "green"
        document.getElementById('buttonSeven').style.opacity = ".5"
   } else if(document.getElementById('four').innerText === document.getElementById('five').innerText && document.getElementById('five').innerText === document.getElementById('six').innerText) {
        if(document.getElementById('fourBox').style.zIndex === 12){
            document.getElementById('whoMove').innerText = "X has won!"
        } else {
            document.getElementById('whoMove').innerText = "O has won!"
        }

        if (document.getElementById('one').innerText !== "X" || document.getElementById('one').innerText !== "O") {
            document.getElementById('oneBox').style.zIndex = "15"
            document.getElementById('buttonOne').style.backgroundColor = "grey"
            document.getElementById('buttonOne').style.opacity = ".5"
        }
        if (document.getElementById('two').innerText !== "X" || document.getElementById('two').innerText !== "O") {
            document.getElementById('twoBox').style.zIndex = "15"
            document.getElementById('buttonTwo').style.backgroundColor = "grey"
            document.getElementById('buttonTwo').style.opacity = ".5"
        }
        if (document.getElementById('three').innerText !== "X" || document.getElementById('three').innerText !== "O") {
            document.getElementById('threeBox').style.zIndex = "15"
            document.getElementById('buttonThree').style.backgroundColor = "grey"
            document.getElementById('buttonThree').style.opacity = ".5"
        }
        if (document.getElementById('four').innerText !== "X" || document.getElementById('four').innerText !== "O") {
            document.getElementById('fourBox').style.zIndex = "15"
            document.getElementById('buttonFour').style.backgroundColor = "grey"
            document.getElementById('buttonFour').style.opacity = ".5"
        }
        if (document.getElementById('five').innerText !== "X" || document.getElementById('five').innerText !== "O") {
            document.getElementById('fiveBox').style.zIndex = "15"
            document.getElementById('buttonFive').style.backgroundColor = "grey"
            document.getElementById('buttonFive').style.opacity = ".5"
        }
        if (document.getElementById('six').innerText !== "X" || document.getElementById('six').innerText !== "O") {
            document.getElementById('sixBox').style.zIndex = "15"
            document.getElementById('buttonSix').style.backgroundColor = "grey"
            document.getElementById('buttonSix').style.opacity = ".5"
        }
        if (document.getElementById('seven').innerText !== "X" || document.getElementById('seven').innerText !== "O") {
            document.getElementById('sevenBox').style.zIndex = "15"
            document.getElementById('buttonSeven').style.backgroundColor = "grey"
            document.getElementById('buttonSeven').style.opacity = ".5"
        }
        if (document.getElementById('eight').innerText !== "X" || document.getElementById('eight').innerText !== "O") {
            document.getElementById('eightBox').style.zIndex = "15"
            document.getElementById('buttonEight').style.backgroundColor = "grey"
            document.getElementById('buttonEight').style.opacity = ".5"
        }
        if (document.getElementById('nine').innerText !== "X" || document.getElementById('nine').innerText !== "O") {
            document.getElementById('nineBox').style.zIndex = "15"
            document.getElementById('buttonNine').style.backgroundColor = "grey"
            document.getElementById('buttonNine').style.opacity = ".5"
        }

        document.getElementById('buttonFour').style.zIndex = "14"
        document.getElementById('buttonFour').style.backgroundColor = "green"
        document.getElementById('buttonFour').style.opacity = ".5"

        document.getElementById('buttonFive').style.zIndex = "14"
        document.getElementById('buttonFive').style.backgroundColor = "green"
        document.getElementById('buttonFive').style.opacity = ".5"

        document.getElementById('buttonSix').style.zIndex = "14"
        document.getElementById('buttonSix').style.backgroundColor = "green"
        document.getElementById('buttonSix').style.opacity = ".5"
   } else if(document.getElementById('seven').innerText === document.getElementById('eight').innerText && document.getElementById('eight').innerText === document.getElementById('nine').innerText) {
        if(document.getElementById('sevenBox').style.zIndex === 12){
            document.getElementById('whoMove').innerText = "X has won!"
        } else {
            document.getElementById('whoMove').innerText = "O has won!"
        }

        if (document.getElementById('one').innerText !== "X" || document.getElementById('one').innerText !== "O") {
            document.getElementById('oneBox').style.zIndex = "15"
            document.getElementById('buttonOne').style.backgroundColor = "grey"
            document.getElementById('buttonOne').style.opacity = ".5"
        }
        if (document.getElementById('two').innerText !== "X" || document.getElementById('two').innerText !== "O") {
            document.getElementById('twoBox').style.zIndex = "15"
            document.getElementById('buttonTwo').style.backgroundColor = "grey"
            document.getElementById('buttonTwo').style.opacity = ".5"
        }
        if (document.getElementById('three').innerText !== "X" || document.getElementById('three').innerText !== "O") {
            document.getElementById('threeBox').style.zIndex = "15"
            document.getElementById('buttonThree').style.backgroundColor = "grey"
            document.getElementById('buttonThree').style.opacity = ".5"
        }
        if (document.getElementById('four').innerText !== "X" || document.getElementById('four').innerText !== "O") {
            document.getElementById('fourBox').style.zIndex = "15"
            document.getElementById('buttonFour').style.backgroundColor = "grey"
            document.getElementById('buttonFour').style.opacity = ".5"
        }
        if (document.getElementById('five').innerText !== "X" || document.getElementById('five').innerText !== "O") {
            document.getElementById('fiveBox').style.zIndex = "15"
            document.getElementById('buttonFive').style.backgroundColor = "grey"
            document.getElementById('buttonFive').style.opacity = ".5"
        }
        if (document.getElementById('six').innerText !== "X" || document.getElementById('six').innerText !== "O") {
            document.getElementById('sixBox').style.zIndex = "15"
            document.getElementById('buttonSix').style.backgroundColor = "grey"
            document.getElementById('buttonSix').style.opacity = ".5"
        }
        if (document.getElementById('seven').innerText !== "X" || document.getElementById('seven').innerText !== "O") {
            document.getElementById('sevenBox').style.zIndex = "15"
            document.getElementById('buttonSeven').style.backgroundColor = "grey"
            document.getElementById('buttonSeven').style.opacity = ".5"
        }
        if (document.getElementById('eight').innerText !== "X" || document.getElementById('eight').innerText !== "O") {
            document.getElementById('eightBox').style.zIndex = "15"
            document.getElementById('buttonEight').style.backgroundColor = "grey"
            document.getElementById('buttonEight').style.opacity = ".5"
        }
        if (document.getElementById('nine').innerText !== "X" || document.getElementById('nine').innerText !== "O") {
            document.getElementById('nineBox').style.zIndex = "15"
            document.getElementById('buttonNine').style.backgroundColor = "grey"
            document.getElementById('buttonNine').style.opacity = ".5"
        } 

        document.getElementById('buttonSeven').style.zIndex = "14"
        document.getElementById('buttonSeven').style.backgroundColor = "green"
        document.getElementById('buttonSeven').style.opacity = ".5"

        document.getElementById('buttonEight').style.zIndex = "14"
        document.getElementById('buttonEight').style.backgroundColor = "green"
        document.getElementById('buttonEight').style.opacity = ".5"

        document.getElementById('buttonNine').style.zIndex = "14"
        document.getElementById('buttonNine').style.backgroundColor = "green"
        document.getElementById('buttonNine').style.opacity = ".5"
    }else if(moveNumber === 10) { //TIE//
        document.getElementById('whoMove').innerText = "Tie"
        document.getElementById('buttonOne').style.zIndex = "14"
        document.getElementById('buttonOne').style.backgroundColor = "pink"
        document.getElementById('buttonOne').style.opacity = ".5"

        document.getElementById('buttonThree').style.zIndex = "14"
        document.getElementById('buttonThree').style.backgroundColor = "pink"
        document.getElementById('buttonThree').style.opacity = ".5"

        document.getElementById('buttonFive').style.zIndex = "14"
        document.getElementById('buttonFive').style.backgroundColor = "pink"
        document.getElementById('buttonFive').style.opacity = ".5"

        document.getElementById('buttonNine').style.zIndex = "14"
        document.getElementById('buttonNine').style.backgroundColor = "pink"
        document.getElementById('buttonNine').style.opacity = ".5"

        document.getElementById('buttonSeven').style.zIndex = "14"
        document.getElementById('buttonSeven').style.backgroundColor = "pink"
        document.getElementById('buttonSeven').style.opacity = ".5"
   }
   
    console.log(moveNumber)
}
function rowColTwoOne() {
    if(moveNumber % 2 !== 0) {
        document.getElementById('four').innerText = "X"
        document.getElementById('fourBox').style.zIndex = "12"
        document.getElementById('whoMove').innerText = "O has the move"
        moveNumber++
    } else {
        document.getElementById('four').innerText = "O"
        document.getElementById('fourBox').style.zIndex = "13"
        document.getElementById('whoMove').innerText = "X has the move"
        moveNumber++
    }
    if(document.getElementById('one').innerText === document.getElementById('two').innerText && document.getElementById('two').innerText === document.getElementById('three').innerText) {
        if(document.getElementById('oneBox').style.zIndex === 12){
            document.getElementById('whoMove').innerText = "X has won!"
        } else {
            document.getElementById('whoMove').innerText = "O has won!"
        }
        document.getElementById('buttonOne').style.zIndex = "14"
        document.getElementById('buttonOne').style.backgroundColor = "green"
        document.getElementById('buttonOne').style.opacity = ".5"

        document.getElementById('buttonTwo').style.zIndex = "14"
        document.getElementById('buttonTwo').style.backgroundColor = "green"
        document.getElementById('buttonTwo').style.opacity = ".5"

        document.getElementById('buttonThree').style.zIndex = "14"
        document.getElementById('buttonThree').style.backgroundColor = "green"
        document.getElementById('buttonThree').style.opacity = ".5"
   } else if(document.getElementById('one').innerText === document.getElementById('five').innerText && document.getElementById('five').innerText === document.getElementById('nine').innerText){
        if(document.getElementById('oneBox').style.zIndex === 12){
            document.getElementById('whoMove').innerText = "X has won!"
        } else {
            document.getElementById('whoMove').innerText = "O has won!"
        }
        if (document.getElementById('one').innerText !== "X" || document.getElementById('one').innerText !== "O") {
            document.getElementById('oneBox').style.zIndex = "15"
            document.getElementById('buttonOne').style.backgroundColor = "grey"
            document.getElementById('buttonOne').style.opacity = ".5"
        }
        if (document.getElementById('two').innerText !== "X" || document.getElementById('two').innerText !== "O") {
            document.getElementById('twoBox').style.zIndex = "15"
            document.getElementById('buttonTwo').style.backgroundColor = "grey"
            document.getElementById('buttonTwo').style.opacity = ".5"
        }
        if (document.getElementById('three').innerText !== "X" || document.getElementById('three').innerText !== "O") {
            document.getElementById('threeBox').style.zIndex = "15"
            document.getElementById('buttonThree').style.backgroundColor = "grey"
            document.getElementById('buttonThree').style.opacity = ".5"
        }
        if (document.getElementById('four').innerText !== "X" || document.getElementById('four').innerText !== "O") {
            document.getElementById('fourBox').style.zIndex = "15"
            document.getElementById('buttonFour').style.backgroundColor = "grey"
            document.getElementById('buttonFour').style.opacity = ".5"
        }
        if (document.getElementById('five').innerText !== "X" || document.getElementById('five').innerText !== "O") {
            document.getElementById('fiveBox').style.zIndex = "15"
            document.getElementById('buttonFive').style.backgroundColor = "grey"
            document.getElementById('buttonFive').style.opacity = ".5"
        }
        if (document.getElementById('six').innerText !== "X" || document.getElementById('six').innerText !== "O") {
            document.getElementById('sixBox').style.zIndex = "15"
            document.getElementById('buttonSix').style.backgroundColor = "grey"
            document.getElementById('buttonSix').style.opacity = ".5"
        }
        if (document.getElementById('seven').innerText !== "X" || document.getElementById('seven').innerText !== "O") {
            document.getElementById('sevenBox').style.zIndex = "15"
            document.getElementById('buttonSeven').style.backgroundColor = "grey"
            document.getElementById('buttonSeven').style.opacity = ".5"
        }
        if (document.getElementById('eight').innerText !== "X" || document.getElementById('eight').innerText !== "O") {
            document.getElementById('eightBox').style.zIndex = "15"
            document.getElementById('buttonEight').style.backgroundColor = "grey"
            document.getElementById('buttonEight').style.opacity = ".5"
        }
        if (document.getElementById('nine').innerText !== "X" || document.getElementById('nine').innerText !== "O") {
            document.getElementById('nineBox').style.zIndex = "15"
            document.getElementById('buttonNine').style.backgroundColor = "grey"
            document.getElementById('buttonNine').style.opacity = ".5"
        }
        document.getElementById('buttonOne').style.zIndex = "14"
        document.getElementById('buttonOne').style.backgroundColor = "green"
        document.getElementById('buttonOne').style.opacity = ".5"

        document.getElementById('buttonFive').style.zIndex = "14"
        document.getElementById('buttonFive').style.backgroundColor = "green"
        document.getElementById('buttonFive').style.opacity = ".5"

        document.getElementById('buttonNine').style.zIndex = "14"
        document.getElementById('buttonNine').style.backgroundColor = "green"
        document.getElementById('buttonNine').style.opacity = ".5"



   } else if(document.getElementById('one').innerText === document.getElementById('four').innerText && document.getElementById('four').innerText === document.getElementById('seven').innerText){
        if(document.getElementById('oneBox').style.zIndex === 12){
            document.getElementById('whoMove').innerText = "X has won!"
        } else {
            document.getElementById('whoMove').innerText = "O has won!"
        }

        if (document.getElementById('one').innerText !== "X" || document.getElementById('one').innerText !== "O") {
            document.getElementById('oneBox').style.zIndex = "15"
            document.getElementById('buttonOne').style.backgroundColor = "grey"
            document.getElementById('buttonOne').style.opacity = ".5"
        }
        if (document.getElementById('two').innerText !== "X" || document.getElementById('two').innerText !== "O") {
            document.getElementById('twoBox').style.zIndex = "15"
            document.getElementById('buttonTwo').style.backgroundColor = "grey"
            document.getElementById('buttonTwo').style.opacity = ".5"
        }
        if (document.getElementById('three').innerText !== "X" || document.getElementById('three').innerText !== "O") {
            document.getElementById('threeBox').style.zIndex = "15"
            document.getElementById('buttonThree').style.backgroundColor = "grey"
            document.getElementById('buttonThree').style.opacity = ".5"
        }
        if (document.getElementById('four').innerText !== "X" || document.getElementById('four').innerText !== "O") {
            document.getElementById('fourBox').style.zIndex = "15"
            document.getElementById('buttonFour').style.backgroundColor = "grey"
            document.getElementById('buttonFour').style.opacity = ".5"
        }
        if (document.getElementById('five').innerText !== "X" || document.getElementById('five').innerText !== "O") {
            document.getElementById('fiveBox').style.zIndex = "15"
            document.getElementById('buttonFive').style.backgroundColor = "grey"
            document.getElementById('buttonFive').style.opacity = ".5"
        }
        if (document.getElementById('six').innerText !== "X" || document.getElementById('six').innerText !== "O") {
            document.getElementById('sixBox').style.zIndex = "15"
            document.getElementById('buttonSix').style.backgroundColor = "grey"
            document.getElementById('buttonSix').style.opacity = ".5"
        }
        if (document.getElementById('seven').innerText !== "X" || document.getElementById('seven').innerText !== "O") {
            document.getElementById('sevenBox').style.zIndex = "15"
            document.getElementById('buttonSeven').style.backgroundColor = "grey"
            document.getElementById('buttonSeven').style.opacity = ".5"
        }
        if (document.getElementById('eight').innerText !== "X" || document.getElementById('eight').innerText !== "O") {
            document.getElementById('eightBox').style.zIndex = "15"
            document.getElementById('buttonEight').style.backgroundColor = "grey"
            document.getElementById('buttonEight').style.opacity = ".5"
        }
        if (document.getElementById('nine').innerText !== "X" || document.getElementById('nine').innerText !== "O") {
            document.getElementById('nineBox').style.zIndex = "15"
            document.getElementById('buttonNine').style.backgroundColor = "grey"
            document.getElementById('buttonNine').style.opacity = ".5"
        }

        document.getElementById('buttonOne').style.zIndex = "14"
        document.getElementById('buttonOne').style.backgroundColor = "green"
        document.getElementById('buttonOne').style.opacity = ".5"

        document.getElementById('buttonFour').style.zIndex = "14"
        document.getElementById('buttonFour').style.backgroundColor = "green"
        document.getElementById('buttonFour').style.opacity = ".5"

        document.getElementById('buttonSeven').style.zIndex = "14"
        document.getElementById('buttonSeven').style.backgroundColor = "green"
        document.getElementById('buttonSeven').style.opacity = ".5"
   } else if(document.getElementById('two').innerText === document.getElementById('five').innerText && document.getElementById('five').innerText === document.getElementById('eight').innerText){
        if(document.getElementById('twoBox').style.zIndex === 12){
            document.getElementById('whoMove').innerText = "X has won!"
        } else {
            document.getElementById('whoMove').innerText = "O has won!"
        }

        if (document.getElementById('one').innerText !== "X" || document.getElementById('one').innerText !== "O") {
            document.getElementById('oneBox').style.zIndex = "15"
            document.getElementById('buttonOne').style.backgroundColor = "grey"
            document.getElementById('buttonOne').style.opacity = ".5"
        }
        if (document.getElementById('two').innerText !== "X" || document.getElementById('two').innerText !== "O") {
            document.getElementById('twoBox').style.zIndex = "15"
            document.getElementById('buttonTwo').style.backgroundColor = "grey"
            document.getElementById('buttonTwo').style.opacity = ".5"
        }
        if (document.getElementById('three').innerText !== "X" || document.getElementById('three').innerText !== "O") {
            document.getElementById('threeBox').style.zIndex = "15"
            document.getElementById('buttonThree').style.backgroundColor = "grey"
            document.getElementById('buttonThree').style.opacity = ".5"
        }
        if (document.getElementById('four').innerText !== "X" || document.getElementById('four').innerText !== "O") {
            document.getElementById('fourBox').style.zIndex = "15"
            document.getElementById('buttonFour').style.backgroundColor = "grey"
            document.getElementById('buttonFour').style.opacity = ".5"
        }
        if (document.getElementById('five').innerText !== "X" || document.getElementById('five').innerText !== "O") {
            document.getElementById('fiveBox').style.zIndex = "15"
            document.getElementById('buttonFive').style.backgroundColor = "grey"
            document.getElementById('buttonFive').style.opacity = ".5"
        }
        if (document.getElementById('six').innerText !== "X" || document.getElementById('six').innerText !== "O") {
            document.getElementById('sixBox').style.zIndex = "15"
            document.getElementById('buttonSix').style.backgroundColor = "grey"
            document.getElementById('buttonSix').style.opacity = ".5"
        }
        if (document.getElementById('seven').innerText !== "X" || document.getElementById('seven').innerText !== "O") {
            document.getElementById('sevenBox').style.zIndex = "15"
            document.getElementById('buttonSeven').style.backgroundColor = "grey"
            document.getElementById('buttonSeven').style.opacity = ".5"
        }
        if (document.getElementById('eight').innerText !== "X" || document.getElementById('eight').innerText !== "O") {
            document.getElementById('eightBox').style.zIndex = "15"
            document.getElementById('buttonEight').style.backgroundColor = "grey"
            document.getElementById('buttonEight').style.opacity = ".5"
        }
        if (document.getElementById('nine').innerText !== "X" || document.getElementById('nine').innerText !== "O") {
            document.getElementById('nineBox').style.zIndex = "15"
            document.getElementById('buttonNine').style.backgroundColor = "grey"
            document.getElementById('buttonNine').style.opacity = ".5"
        }

        document.getElementById('buttonTwo').style.zIndex = "14"
        document.getElementById('buttonTwo').style.backgroundColor = "green"
        document.getElementById('buttonTwo').style.opacity = ".5"

        document.getElementById('buttonFive').style.zIndex = "14"
        document.getElementById('buttonFive').style.backgroundColor = "green"
        document.getElementById('buttonFive').style.opacity = ".5"

        document.getElementById('buttonEight').style.zIndex = "14"
        document.getElementById('buttonEight').style.backgroundColor = "green"
        document.getElementById('buttonEight').style.opacity = ".5"
   } else if(document.getElementById('three').innerText === document.getElementById('six').innerText && document.getElementById('six').innerText === document.getElementById('nine').innerText) {
        if(document.getElementById('twoBox').style.zIndex === 12){
            document.getElementById('whoMove').innerText = "X has won!"
        } else {
            document.getElementById('whoMove').innerText = "O has won!"
        }

        if (document.getElementById('one').innerText !== "X" || document.getElementById('one').innerText !== "O") {
            document.getElementById('oneBox').style.zIndex = "15"
            document.getElementById('buttonOne').style.backgroundColor = "grey"
            document.getElementById('buttonOne').style.opacity = ".5"
        }
        if (document.getElementById('two').innerText !== "X" || document.getElementById('two').innerText !== "O") {
            document.getElementById('twoBox').style.zIndex = "15"
            document.getElementById('buttonTwo').style.backgroundColor = "grey"
            document.getElementById('buttonTwo').style.opacity = ".5"
        }
        if (document.getElementById('three').innerText !== "X" || document.getElementById('three').innerText !== "O") {
            document.getElementById('threeBox').style.zIndex = "15"
            document.getElementById('buttonThree').style.backgroundColor = "grey"
            document.getElementById('buttonThree').style.opacity = ".5"
        }
        if (document.getElementById('four').innerText !== "X" || document.getElementById('four').innerText !== "O") {
            document.getElementById('fourBox').style.zIndex = "15"
            document.getElementById('buttonFour').style.backgroundColor = "grey"
            document.getElementById('buttonFour').style.opacity = ".5"
        }
        if (document.getElementById('five').innerText !== "X" || document.getElementById('five').innerText !== "O") {
            document.getElementById('fiveBox').style.zIndex = "15"
            document.getElementById('buttonFive').style.backgroundColor = "grey"
            document.getElementById('buttonFive').style.opacity = ".5"
        }
        if (document.getElementById('six').innerText !== "X" || document.getElementById('six').innerText !== "O") {
            document.getElementById('sixBox').style.zIndex = "15"
            document.getElementById('buttonSix').style.backgroundColor = "grey"
            document.getElementById('buttonSix').style.opacity = ".5"
        }
        if (document.getElementById('seven').innerText !== "X" || document.getElementById('seven').innerText !== "O") {
            document.getElementById('sevenBox').style.zIndex = "15"
            document.getElementById('buttonSeven').style.backgroundColor = "grey"
            document.getElementById('buttonSeven').style.opacity = ".5"
        }
        if (document.getElementById('eight').innerText !== "X" || document.getElementById('eight').innerText !== "O") {
            document.getElementById('eightBox').style.zIndex = "15"
            document.getElementById('buttonEight').style.backgroundColor = "grey"
            document.getElementById('buttonEight').style.opacity = ".5"
        }
        if (document.getElementById('nine').innerText !== "X" || document.getElementById('nine').innerText !== "O") {
            document.getElementById('nineBox').style.zIndex = "15"
            document.getElementById('buttonNine').style.backgroundColor = "grey"
            document.getElementById('buttonNine').style.opacity = ".5"
        }

        document.getElementById('buttonThree').style.zIndex = "14"
        document.getElementById('buttonThree').style.backgroundColor = "green"
        document.getElementById('buttonThree').style.opacity = ".5"

        document.getElementById('buttonSix').style.zIndex = "14"
        document.getElementById('buttonSix').style.backgroundColor = "green"
        document.getElementById('buttonSix').style.opacity = ".5"

        document.getElementById('buttonNine').style.zIndex = "14"
        document.getElementById('buttonNine').style.backgroundColor = "green"
        document.getElementById('buttonNine').style.opacity = ".5"
   } else if(document.getElementById('three').innerText === document.getElementById('five').innerText && document.getElementById('five').innerText === document.getElementById('seven').innerText){
        if(document.getElementById('threeBox').style.zIndex === 12){
            document.getElementById('whoMove').innerText = "X has won!"
        } else {
            document.getElementById('whoMove').innerText = "O has won!"
        }

        if (document.getElementById('one').innerText !== "X" || document.getElementById('one').innerText !== "O") {
            document.getElementById('oneBox').style.zIndex = "15"
            document.getElementById('buttonOne').style.backgroundColor = "grey"
            document.getElementById('buttonOne').style.opacity = ".5"
        }
        if (document.getElementById('two').innerText !== "X" || document.getElementById('two').innerText !== "O") {
            document.getElementById('twoBox').style.zIndex = "15"
            document.getElementById('buttonTwo').style.backgroundColor = "grey"
            document.getElementById('buttonTwo').style.opacity = ".5"
        }
        if (document.getElementById('three').innerText !== "X" || document.getElementById('three').innerText !== "O") {
            document.getElementById('threeBox').style.zIndex = "15"
            document.getElementById('buttonThree').style.backgroundColor = "grey"
            document.getElementById('buttonThree').style.opacity = ".5"
        }
        if (document.getElementById('four').innerText !== "X" || document.getElementById('four').innerText !== "O") {
            document.getElementById('fourBox').style.zIndex = "15"
            document.getElementById('buttonFour').style.backgroundColor = "grey"
            document.getElementById('buttonFour').style.opacity = ".5"
        }
        if (document.getElementById('five').innerText !== "X" || document.getElementById('five').innerText !== "O") {
            document.getElementById('fiveBox').style.zIndex = "15"
            document.getElementById('buttonFive').style.backgroundColor = "grey"
            document.getElementById('buttonFive').style.opacity = ".5"
        }
        if (document.getElementById('six').innerText !== "X" || document.getElementById('six').innerText !== "O") {
            document.getElementById('sixBox').style.zIndex = "15"
            document.getElementById('buttonSix').style.backgroundColor = "grey"
            document.getElementById('buttonSix').style.opacity = ".5"
        }
        if (document.getElementById('seven').innerText !== "X" || document.getElementById('seven').innerText !== "O") {
            document.getElementById('sevenBox').style.zIndex = "15"
            document.getElementById('buttonSeven').style.backgroundColor = "grey"
            document.getElementById('buttonSeven').style.opacity = ".5"
        }
        if (document.getElementById('eight').innerText !== "X" || document.getElementById('eight').innerText !== "O") {
            document.getElementById('eightBox').style.zIndex = "15"
            document.getElementById('buttonEight').style.backgroundColor = "grey"
            document.getElementById('buttonEight').style.opacity = ".5"
        }
        if (document.getElementById('nine').innerText !== "X" || document.getElementById('nine').innerText !== "O") {
            document.getElementById('nineBox').style.zIndex = "15"
            document.getElementById('buttonNine').style.backgroundColor = "grey"
            document.getElementById('buttonNine').style.opacity = ".5"
        }

        document.getElementById('buttonThree').style.zIndex = "14"
        document.getElementById('buttonThree').style.backgroundColor = "green"
        document.getElementById('buttonThree').style.opacity = ".5"

        document.getElementById('buttonFive').style.zIndex = "14"
        document.getElementById('buttonFive').style.backgroundColor = "green"
        document.getElementById('buttonFive').style.opacity = ".5"

        document.getElementById('buttonSeven').style.zIndex = "14"
        document.getElementById('buttonSeven').style.backgroundColor = "green"
        document.getElementById('buttonSeven').style.opacity = ".5"
   } else if(document.getElementById('four').innerText === document.getElementById('five').innerText && document.getElementById('five').innerText === document.getElementById('six').innerText) {
        if(document.getElementById('fourBox').style.zIndex === 12){
            document.getElementById('whoMove').innerText = "X has won!"
        } else {
            document.getElementById('whoMove').innerText = "O has won!"
        }

        if (document.getElementById('one').innerText !== "X" || document.getElementById('one').innerText !== "O") {
            document.getElementById('oneBox').style.zIndex = "15"
            document.getElementById('buttonOne').style.backgroundColor = "grey"
            document.getElementById('buttonOne').style.opacity = ".5"
        }
        if (document.getElementById('two').innerText !== "X" || document.getElementById('two').innerText !== "O") {
            document.getElementById('twoBox').style.zIndex = "15"
            document.getElementById('buttonTwo').style.backgroundColor = "grey"
            document.getElementById('buttonTwo').style.opacity = ".5"
        }
        if (document.getElementById('three').innerText !== "X" || document.getElementById('three').innerText !== "O") {
            document.getElementById('threeBox').style.zIndex = "15"
            document.getElementById('buttonThree').style.backgroundColor = "grey"
            document.getElementById('buttonThree').style.opacity = ".5"
        }
        if (document.getElementById('four').innerText !== "X" || document.getElementById('four').innerText !== "O") {
            document.getElementById('fourBox').style.zIndex = "15"
            document.getElementById('buttonFour').style.backgroundColor = "grey"
            document.getElementById('buttonFour').style.opacity = ".5"
        }
        if (document.getElementById('five').innerText !== "X" || document.getElementById('five').innerText !== "O") {
            document.getElementById('fiveBox').style.zIndex = "15"
            document.getElementById('buttonFive').style.backgroundColor = "grey"
            document.getElementById('buttonFive').style.opacity = ".5"
        }
        if (document.getElementById('six').innerText !== "X" || document.getElementById('six').innerText !== "O") {
            document.getElementById('sixBox').style.zIndex = "15"
            document.getElementById('buttonSix').style.backgroundColor = "grey"
            document.getElementById('buttonSix').style.opacity = ".5"
        }
        if (document.getElementById('seven').innerText !== "X" || document.getElementById('seven').innerText !== "O") {
            document.getElementById('sevenBox').style.zIndex = "15"
            document.getElementById('buttonSeven').style.backgroundColor = "grey"
            document.getElementById('buttonSeven').style.opacity = ".5"
        }
        if (document.getElementById('eight').innerText !== "X" || document.getElementById('eight').innerText !== "O") {
            document.getElementById('eightBox').style.zIndex = "15"
            document.getElementById('buttonEight').style.backgroundColor = "grey"
            document.getElementById('buttonEight').style.opacity = ".5"
        }
        if (document.getElementById('nine').innerText !== "X" || document.getElementById('nine').innerText !== "O") {
            document.getElementById('nineBox').style.zIndex = "15"
            document.getElementById('buttonNine').style.backgroundColor = "grey"
            document.getElementById('buttonNine').style.opacity = ".5"
        }

        document.getElementById('buttonFour').style.zIndex = "14"
        document.getElementById('buttonFour').style.backgroundColor = "green"
        document.getElementById('buttonFour').style.opacity = ".5"

        document.getElementById('buttonFive').style.zIndex = "14"
        document.getElementById('buttonFive').style.backgroundColor = "green"
        document.getElementById('buttonFive').style.opacity = ".5"

        document.getElementById('buttonSix').style.zIndex = "14"
        document.getElementById('buttonSix').style.backgroundColor = "green"
        document.getElementById('buttonSix').style.opacity = ".5"
   } else if(document.getElementById('seven').innerText === document.getElementById('eight').innerText && document.getElementById('eight').innerText === document.getElementById('nine').innerText) {
        if(document.getElementById('sevenBox').style.zIndex === 12){
            document.getElementById('whoMove').innerText = "X has won!"
        } else {
            document.getElementById('whoMove').innerText = "O has won!"
        }

        if (document.getElementById('one').innerText !== "X" || document.getElementById('one').innerText !== "O") {
            document.getElementById('oneBox').style.zIndex = "15"
            document.getElementById('buttonOne').style.backgroundColor = "grey"
            document.getElementById('buttonOne').style.opacity = ".5"
        }
        if (document.getElementById('two').innerText !== "X" || document.getElementById('two').innerText !== "O") {
            document.getElementById('twoBox').style.zIndex = "15"
            document.getElementById('buttonTwo').style.backgroundColor = "grey"
            document.getElementById('buttonTwo').style.opacity = ".5"
        }
        if (document.getElementById('three').innerText !== "X" || document.getElementById('three').innerText !== "O") {
            document.getElementById('threeBox').style.zIndex = "15"
            document.getElementById('buttonThree').style.backgroundColor = "grey"
            document.getElementById('buttonThree').style.opacity = ".5"
        }
        if (document.getElementById('four').innerText !== "X" || document.getElementById('four').innerText !== "O") {
            document.getElementById('fourBox').style.zIndex = "15"
            document.getElementById('buttonFour').style.backgroundColor = "grey"
            document.getElementById('buttonFour').style.opacity = ".5"
        }
        if (document.getElementById('five').innerText !== "X" || document.getElementById('five').innerText !== "O") {
            document.getElementById('fiveBox').style.zIndex = "15"
            document.getElementById('buttonFive').style.backgroundColor = "grey"
            document.getElementById('buttonFive').style.opacity = ".5"
        }
        if (document.getElementById('six').innerText !== "X" || document.getElementById('six').innerText !== "O") {
            document.getElementById('sixBox').style.zIndex = "15"
            document.getElementById('buttonSix').style.backgroundColor = "grey"
            document.getElementById('buttonSix').style.opacity = ".5"
        }
        if (document.getElementById('seven').innerText !== "X" || document.getElementById('seven').innerText !== "O") {
            document.getElementById('sevenBox').style.zIndex = "15"
            document.getElementById('buttonSeven').style.backgroundColor = "grey"
            document.getElementById('buttonSeven').style.opacity = ".5"
        }
        if (document.getElementById('eight').innerText !== "X" || document.getElementById('eight').innerText !== "O") {
            document.getElementById('eightBox').style.zIndex = "15"
            document.getElementById('buttonEight').style.backgroundColor = "grey"
            document.getElementById('buttonEight').style.opacity = ".5"
        }
        if (document.getElementById('nine').innerText !== "X" || document.getElementById('nine').innerText !== "O") {
            document.getElementById('nineBox').style.zIndex = "15"
            document.getElementById('buttonNine').style.backgroundColor = "grey"
            document.getElementById('buttonNine').style.opacity = ".5"
        } 

        document.getElementById('buttonSeven').style.zIndex = "14"
        document.getElementById('buttonSeven').style.backgroundColor = "green"
        document.getElementById('buttonSeven').style.opacity = ".5"

        document.getElementById('buttonEight').style.zIndex = "14"
        document.getElementById('buttonEight').style.backgroundColor = "green"
        document.getElementById('buttonEight').style.opacity = ".5"

        document.getElementById('buttonNine').style.zIndex = "14"
        document.getElementById('buttonNine').style.backgroundColor = "green"
        document.getElementById('buttonNine').style.opacity = ".5"
    }else if(moveNumber === 10) { //TIE//
        document.getElementById('whoMove').innerText = "Tie"
        document.getElementById('buttonOne').style.zIndex = "14"
        document.getElementById('buttonOne').style.backgroundColor = "pink"
        document.getElementById('buttonOne').style.opacity = ".5"

        document.getElementById('buttonThree').style.zIndex = "14"
        document.getElementById('buttonThree').style.backgroundColor = "pink"
        document.getElementById('buttonThree').style.opacity = ".5"

        document.getElementById('buttonFive').style.zIndex = "14"
        document.getElementById('buttonFive').style.backgroundColor = "pink"
        document.getElementById('buttonFive').style.opacity = ".5"

        document.getElementById('buttonNine').style.zIndex = "14"
        document.getElementById('buttonNine').style.backgroundColor = "pink"
        document.getElementById('buttonNine').style.opacity = ".5"

        document.getElementById('buttonSeven').style.zIndex = "14"
        document.getElementById('buttonSeven').style.backgroundColor = "pink"
        document.getElementById('buttonSeven').style.opacity = ".5"
   }
   
    console.log(moveNumber)
}
function rowColTwoTwo() {
    if(moveNumber % 2 !== 0) {
        document.getElementById('five').innerText = "X"
        document.getElementById('fiveBox').style.zIndex = "12"
        document.getElementById('whoMove').innerText = "O has the move"
        moveNumber++
    } else {
        document.getElementById('five').innerText = "O"
        document.getElementById('fiveBox').style.zIndex = "13"
        document.getElementById('whoMove').innerText = "X has the move"
        moveNumber++
    }
    if(document.getElementById('one').innerText === document.getElementById('two').innerText && document.getElementById('two').innerText === document.getElementById('three').innerText) {
        if(document.getElementById('oneBox').style.zIndex === 12){
            document.getElementById('whoMove').innerText = "X has won!"
        } else {
            document.getElementById('whoMove').innerText = "O has won!"
        }
        document.getElementById('buttonOne').style.zIndex = "14"
        document.getElementById('buttonOne').style.backgroundColor = "green"
        document.getElementById('buttonOne').style.opacity = ".5"

        document.getElementById('buttonTwo').style.zIndex = "14"
        document.getElementById('buttonTwo').style.backgroundColor = "green"
        document.getElementById('buttonTwo').style.opacity = ".5"

        document.getElementById('buttonThree').style.zIndex = "14"
        document.getElementById('buttonThree').style.backgroundColor = "green"
        document.getElementById('buttonThree').style.opacity = ".5"
   } else if(document.getElementById('one').innerText === document.getElementById('five').innerText && document.getElementById('five').innerText === document.getElementById('nine').innerText){
        if(document.getElementById('oneBox').style.zIndex === 12){
            document.getElementById('whoMove').innerText = "X has won!"
        } else {
            document.getElementById('whoMove').innerText = "O has won!"
        }
        if (document.getElementById('one').innerText !== "X" || document.getElementById('one').innerText !== "O") {
            document.getElementById('oneBox').style.zIndex = "15"
            document.getElementById('buttonOne').style.backgroundColor = "grey"
            document.getElementById('buttonOne').style.opacity = ".5"
        }
        if (document.getElementById('two').innerText !== "X" || document.getElementById('two').innerText !== "O") {
            document.getElementById('twoBox').style.zIndex = "15"
            document.getElementById('buttonTwo').style.backgroundColor = "grey"
            document.getElementById('buttonTwo').style.opacity = ".5"
        }
        if (document.getElementById('three').innerText !== "X" || document.getElementById('three').innerText !== "O") {
            document.getElementById('threeBox').style.zIndex = "15"
            document.getElementById('buttonThree').style.backgroundColor = "grey"
            document.getElementById('buttonThree').style.opacity = ".5"
        }
        if (document.getElementById('four').innerText !== "X" || document.getElementById('four').innerText !== "O") {
            document.getElementById('fourBox').style.zIndex = "15"
            document.getElementById('buttonFour').style.backgroundColor = "grey"
            document.getElementById('buttonFour').style.opacity = ".5"
        }
        if (document.getElementById('five').innerText !== "X" || document.getElementById('five').innerText !== "O") {
            document.getElementById('fiveBox').style.zIndex = "15"
            document.getElementById('buttonFive').style.backgroundColor = "grey"
            document.getElementById('buttonFive').style.opacity = ".5"
        }
        if (document.getElementById('six').innerText !== "X" || document.getElementById('six').innerText !== "O") {
            document.getElementById('sixBox').style.zIndex = "15"
            document.getElementById('buttonSix').style.backgroundColor = "grey"
            document.getElementById('buttonSix').style.opacity = ".5"
        }
        if (document.getElementById('seven').innerText !== "X" || document.getElementById('seven').innerText !== "O") {
            document.getElementById('sevenBox').style.zIndex = "15"
            document.getElementById('buttonSeven').style.backgroundColor = "grey"
            document.getElementById('buttonSeven').style.opacity = ".5"
        }
        if (document.getElementById('eight').innerText !== "X" || document.getElementById('eight').innerText !== "O") {
            document.getElementById('eightBox').style.zIndex = "15"
            document.getElementById('buttonEight').style.backgroundColor = "grey"
            document.getElementById('buttonEight').style.opacity = ".5"
        }
        if (document.getElementById('nine').innerText !== "X" || document.getElementById('nine').innerText !== "O") {
            document.getElementById('nineBox').style.zIndex = "15"
            document.getElementById('buttonNine').style.backgroundColor = "grey"
            document.getElementById('buttonNine').style.opacity = ".5"
        }
        document.getElementById('buttonOne').style.zIndex = "14"
        document.getElementById('buttonOne').style.backgroundColor = "green"
        document.getElementById('buttonOne').style.opacity = ".5"

        document.getElementById('buttonFive').style.zIndex = "14"
        document.getElementById('buttonFive').style.backgroundColor = "green"
        document.getElementById('buttonFive').style.opacity = ".5"

        document.getElementById('buttonNine').style.zIndex = "14"
        document.getElementById('buttonNine').style.backgroundColor = "green"
        document.getElementById('buttonNine').style.opacity = ".5"



   } else if(document.getElementById('one').innerText === document.getElementById('four').innerText && document.getElementById('four').innerText === document.getElementById('seven').innerText){
        if(document.getElementById('oneBox').style.zIndex === 12){
            document.getElementById('whoMove').innerText = "X has won!"
        } else {
            document.getElementById('whoMove').innerText = "O has won!"
        }

        if (document.getElementById('one').innerText !== "X" || document.getElementById('one').innerText !== "O") {
            document.getElementById('oneBox').style.zIndex = "15"
            document.getElementById('buttonOne').style.backgroundColor = "grey"
            document.getElementById('buttonOne').style.opacity = ".5"
        }
        if (document.getElementById('two').innerText !== "X" || document.getElementById('two').innerText !== "O") {
            document.getElementById('twoBox').style.zIndex = "15"
            document.getElementById('buttonTwo').style.backgroundColor = "grey"
            document.getElementById('buttonTwo').style.opacity = ".5"
        }
        if (document.getElementById('three').innerText !== "X" || document.getElementById('three').innerText !== "O") {
            document.getElementById('threeBox').style.zIndex = "15"
            document.getElementById('buttonThree').style.backgroundColor = "grey"
            document.getElementById('buttonThree').style.opacity = ".5"
        }
        if (document.getElementById('four').innerText !== "X" || document.getElementById('four').innerText !== "O") {
            document.getElementById('fourBox').style.zIndex = "15"
            document.getElementById('buttonFour').style.backgroundColor = "grey"
            document.getElementById('buttonFour').style.opacity = ".5"
        }
        if (document.getElementById('five').innerText !== "X" || document.getElementById('five').innerText !== "O") {
            document.getElementById('fiveBox').style.zIndex = "15"
            document.getElementById('buttonFive').style.backgroundColor = "grey"
            document.getElementById('buttonFive').style.opacity = ".5"
        }
        if (document.getElementById('six').innerText !== "X" || document.getElementById('six').innerText !== "O") {
            document.getElementById('sixBox').style.zIndex = "15"
            document.getElementById('buttonSix').style.backgroundColor = "grey"
            document.getElementById('buttonSix').style.opacity = ".5"
        }
        if (document.getElementById('seven').innerText !== "X" || document.getElementById('seven').innerText !== "O") {
            document.getElementById('sevenBox').style.zIndex = "15"
            document.getElementById('buttonSeven').style.backgroundColor = "grey"
            document.getElementById('buttonSeven').style.opacity = ".5"
        }
        if (document.getElementById('eight').innerText !== "X" || document.getElementById('eight').innerText !== "O") {
            document.getElementById('eightBox').style.zIndex = "15"
            document.getElementById('buttonEight').style.backgroundColor = "grey"
            document.getElementById('buttonEight').style.opacity = ".5"
        }
        if (document.getElementById('nine').innerText !== "X" || document.getElementById('nine').innerText !== "O") {
            document.getElementById('nineBox').style.zIndex = "15"
            document.getElementById('buttonNine').style.backgroundColor = "grey"
            document.getElementById('buttonNine').style.opacity = ".5"
        }

        document.getElementById('buttonOne').style.zIndex = "14"
        document.getElementById('buttonOne').style.backgroundColor = "green"
        document.getElementById('buttonOne').style.opacity = ".5"

        document.getElementById('buttonFour').style.zIndex = "14"
        document.getElementById('buttonFour').style.backgroundColor = "green"
        document.getElementById('buttonFour').style.opacity = ".5"

        document.getElementById('buttonSeven').style.zIndex = "14"
        document.getElementById('buttonSeven').style.backgroundColor = "green"
        document.getElementById('buttonSeven').style.opacity = ".5"
   } else if(document.getElementById('two').innerText === document.getElementById('five').innerText && document.getElementById('five').innerText === document.getElementById('eight').innerText){
        if(document.getElementById('twoBox').style.zIndex === 12){
            document.getElementById('whoMove').innerText = "X has won!"
        } else {
            document.getElementById('whoMove').innerText = "O has won!"
        }

        if (document.getElementById('one').innerText !== "X" || document.getElementById('one').innerText !== "O") {
            document.getElementById('oneBox').style.zIndex = "15"
            document.getElementById('buttonOne').style.backgroundColor = "grey"
            document.getElementById('buttonOne').style.opacity = ".5"
        }
        if (document.getElementById('two').innerText !== "X" || document.getElementById('two').innerText !== "O") {
            document.getElementById('twoBox').style.zIndex = "15"
            document.getElementById('buttonTwo').style.backgroundColor = "grey"
            document.getElementById('buttonTwo').style.opacity = ".5"
        }
        if (document.getElementById('three').innerText !== "X" || document.getElementById('three').innerText !== "O") {
            document.getElementById('threeBox').style.zIndex = "15"
            document.getElementById('buttonThree').style.backgroundColor = "grey"
            document.getElementById('buttonThree').style.opacity = ".5"
        }
        if (document.getElementById('four').innerText !== "X" || document.getElementById('four').innerText !== "O") {
            document.getElementById('fourBox').style.zIndex = "15"
            document.getElementById('buttonFour').style.backgroundColor = "grey"
            document.getElementById('buttonFour').style.opacity = ".5"
        }
        if (document.getElementById('five').innerText !== "X" || document.getElementById('five').innerText !== "O") {
            document.getElementById('fiveBox').style.zIndex = "15"
            document.getElementById('buttonFive').style.backgroundColor = "grey"
            document.getElementById('buttonFive').style.opacity = ".5"
        }
        if (document.getElementById('six').innerText !== "X" || document.getElementById('six').innerText !== "O") {
            document.getElementById('sixBox').style.zIndex = "15"
            document.getElementById('buttonSix').style.backgroundColor = "grey"
            document.getElementById('buttonSix').style.opacity = ".5"
        }
        if (document.getElementById('seven').innerText !== "X" || document.getElementById('seven').innerText !== "O") {
            document.getElementById('sevenBox').style.zIndex = "15"
            document.getElementById('buttonSeven').style.backgroundColor = "grey"
            document.getElementById('buttonSeven').style.opacity = ".5"
        }
        if (document.getElementById('eight').innerText !== "X" || document.getElementById('eight').innerText !== "O") {
            document.getElementById('eightBox').style.zIndex = "15"
            document.getElementById('buttonEight').style.backgroundColor = "grey"
            document.getElementById('buttonEight').style.opacity = ".5"
        }
        if (document.getElementById('nine').innerText !== "X" || document.getElementById('nine').innerText !== "O") {
            document.getElementById('nineBox').style.zIndex = "15"
            document.getElementById('buttonNine').style.backgroundColor = "grey"
            document.getElementById('buttonNine').style.opacity = ".5"
        }

        document.getElementById('buttonTwo').style.zIndex = "14"
        document.getElementById('buttonTwo').style.backgroundColor = "green"
        document.getElementById('buttonTwo').style.opacity = ".5"

        document.getElementById('buttonFive').style.zIndex = "14"
        document.getElementById('buttonFive').style.backgroundColor = "green"
        document.getElementById('buttonFive').style.opacity = ".5"

        document.getElementById('buttonEight').style.zIndex = "14"
        document.getElementById('buttonEight').style.backgroundColor = "green"
        document.getElementById('buttonEight').style.opacity = ".5"
   } else if(document.getElementById('three').innerText === document.getElementById('six').innerText && document.getElementById('six').innerText === document.getElementById('nine').innerText) {
        if(document.getElementById('twoBox').style.zIndex === 12){
            document.getElementById('whoMove').innerText = "X has won!"
        } else {
            document.getElementById('whoMove').innerText = "O has won!"
        }

        if (document.getElementById('one').innerText !== "X" || document.getElementById('one').innerText !== "O") {
            document.getElementById('oneBox').style.zIndex = "15"
            document.getElementById('buttonOne').style.backgroundColor = "grey"
            document.getElementById('buttonOne').style.opacity = ".5"
        }
        if (document.getElementById('two').innerText !== "X" || document.getElementById('two').innerText !== "O") {
            document.getElementById('twoBox').style.zIndex = "15"
            document.getElementById('buttonTwo').style.backgroundColor = "grey"
            document.getElementById('buttonTwo').style.opacity = ".5"
        }
        if (document.getElementById('three').innerText !== "X" || document.getElementById('three').innerText !== "O") {
            document.getElementById('threeBox').style.zIndex = "15"
            document.getElementById('buttonThree').style.backgroundColor = "grey"
            document.getElementById('buttonThree').style.opacity = ".5"
        }
        if (document.getElementById('four').innerText !== "X" || document.getElementById('four').innerText !== "O") {
            document.getElementById('fourBox').style.zIndex = "15"
            document.getElementById('buttonFour').style.backgroundColor = "grey"
            document.getElementById('buttonFour').style.opacity = ".5"
        }
        if (document.getElementById('five').innerText !== "X" || document.getElementById('five').innerText !== "O") {
            document.getElementById('fiveBox').style.zIndex = "15"
            document.getElementById('buttonFive').style.backgroundColor = "grey"
            document.getElementById('buttonFive').style.opacity = ".5"
        }
        if (document.getElementById('six').innerText !== "X" || document.getElementById('six').innerText !== "O") {
            document.getElementById('sixBox').style.zIndex = "15"
            document.getElementById('buttonSix').style.backgroundColor = "grey"
            document.getElementById('buttonSix').style.opacity = ".5"
        }
        if (document.getElementById('seven').innerText !== "X" || document.getElementById('seven').innerText !== "O") {
            document.getElementById('sevenBox').style.zIndex = "15"
            document.getElementById('buttonSeven').style.backgroundColor = "grey"
            document.getElementById('buttonSeven').style.opacity = ".5"
        }
        if (document.getElementById('eight').innerText !== "X" || document.getElementById('eight').innerText !== "O") {
            document.getElementById('eightBox').style.zIndex = "15"
            document.getElementById('buttonEight').style.backgroundColor = "grey"
            document.getElementById('buttonEight').style.opacity = ".5"
        }
        if (document.getElementById('nine').innerText !== "X" || document.getElementById('nine').innerText !== "O") {
            document.getElementById('nineBox').style.zIndex = "15"
            document.getElementById('buttonNine').style.backgroundColor = "grey"
            document.getElementById('buttonNine').style.opacity = ".5"
        }

        document.getElementById('buttonThree').style.zIndex = "14"
        document.getElementById('buttonThree').style.backgroundColor = "green"
        document.getElementById('buttonThree').style.opacity = ".5"

        document.getElementById('buttonSix').style.zIndex = "14"
        document.getElementById('buttonSix').style.backgroundColor = "green"
        document.getElementById('buttonSix').style.opacity = ".5"

        document.getElementById('buttonNine').style.zIndex = "14"
        document.getElementById('buttonNine').style.backgroundColor = "green"
        document.getElementById('buttonNine').style.opacity = ".5"
   } else if(document.getElementById('three').innerText === document.getElementById('five').innerText && document.getElementById('five').innerText === document.getElementById('seven').innerText){
        if(document.getElementById('threeBox').style.zIndex === 12){
            document.getElementById('whoMove').innerText = "X has won!"
        } else {
            document.getElementById('whoMove').innerText = "O has won!"
        }

        if (document.getElementById('one').innerText !== "X" || document.getElementById('one').innerText !== "O") {
            document.getElementById('oneBox').style.zIndex = "15"
            document.getElementById('buttonOne').style.backgroundColor = "grey"
            document.getElementById('buttonOne').style.opacity = ".5"
        }
        if (document.getElementById('two').innerText !== "X" || document.getElementById('two').innerText !== "O") {
            document.getElementById('twoBox').style.zIndex = "15"
            document.getElementById('buttonTwo').style.backgroundColor = "grey"
            document.getElementById('buttonTwo').style.opacity = ".5"
        }
        if (document.getElementById('three').innerText !== "X" || document.getElementById('three').innerText !== "O") {
            document.getElementById('threeBox').style.zIndex = "15"
            document.getElementById('buttonThree').style.backgroundColor = "grey"
            document.getElementById('buttonThree').style.opacity = ".5"
        }
        if (document.getElementById('four').innerText !== "X" || document.getElementById('four').innerText !== "O") {
            document.getElementById('fourBox').style.zIndex = "15"
            document.getElementById('buttonFour').style.backgroundColor = "grey"
            document.getElementById('buttonFour').style.opacity = ".5"
        }
        if (document.getElementById('five').innerText !== "X" || document.getElementById('five').innerText !== "O") {
            document.getElementById('fiveBox').style.zIndex = "15"
            document.getElementById('buttonFive').style.backgroundColor = "grey"
            document.getElementById('buttonFive').style.opacity = ".5"
        }
        if (document.getElementById('six').innerText !== "X" || document.getElementById('six').innerText !== "O") {
            document.getElementById('sixBox').style.zIndex = "15"
            document.getElementById('buttonSix').style.backgroundColor = "grey"
            document.getElementById('buttonSix').style.opacity = ".5"
        }
        if (document.getElementById('seven').innerText !== "X" || document.getElementById('seven').innerText !== "O") {
            document.getElementById('sevenBox').style.zIndex = "15"
            document.getElementById('buttonSeven').style.backgroundColor = "grey"
            document.getElementById('buttonSeven').style.opacity = ".5"
        }
        if (document.getElementById('eight').innerText !== "X" || document.getElementById('eight').innerText !== "O") {
            document.getElementById('eightBox').style.zIndex = "15"
            document.getElementById('buttonEight').style.backgroundColor = "grey"
            document.getElementById('buttonEight').style.opacity = ".5"
        }
        if (document.getElementById('nine').innerText !== "X" || document.getElementById('nine').innerText !== "O") {
            document.getElementById('nineBox').style.zIndex = "15"
            document.getElementById('buttonNine').style.backgroundColor = "grey"
            document.getElementById('buttonNine').style.opacity = ".5"
        }

        document.getElementById('buttonThree').style.zIndex = "14"
        document.getElementById('buttonThree').style.backgroundColor = "green"
        document.getElementById('buttonThree').style.opacity = ".5"

        document.getElementById('buttonFive').style.zIndex = "14"
        document.getElementById('buttonFive').style.backgroundColor = "green"
        document.getElementById('buttonFive').style.opacity = ".5"

        document.getElementById('buttonSeven').style.zIndex = "14"
        document.getElementById('buttonSeven').style.backgroundColor = "green"
        document.getElementById('buttonSeven').style.opacity = ".5"
   } else if(document.getElementById('four').innerText === document.getElementById('five').innerText && document.getElementById('five').innerText === document.getElementById('six').innerText) {
        if(document.getElementById('fourBox').style.zIndex === 12){
            document.getElementById('whoMove').innerText = "X has won!"
        } else {
            document.getElementById('whoMove').innerText = "O has won!"
        }

        if (document.getElementById('one').innerText !== "X" || document.getElementById('one').innerText !== "O") {
            document.getElementById('oneBox').style.zIndex = "15"
            document.getElementById('buttonOne').style.backgroundColor = "grey"
            document.getElementById('buttonOne').style.opacity = ".5"
        }
        if (document.getElementById('two').innerText !== "X" || document.getElementById('two').innerText !== "O") {
            document.getElementById('twoBox').style.zIndex = "15"
            document.getElementById('buttonTwo').style.backgroundColor = "grey"
            document.getElementById('buttonTwo').style.opacity = ".5"
        }
        if (document.getElementById('three').innerText !== "X" || document.getElementById('three').innerText !== "O") {
            document.getElementById('threeBox').style.zIndex = "15"
            document.getElementById('buttonThree').style.backgroundColor = "grey"
            document.getElementById('buttonThree').style.opacity = ".5"
        }
        if (document.getElementById('four').innerText !== "X" || document.getElementById('four').innerText !== "O") {
            document.getElementById('fourBox').style.zIndex = "15"
            document.getElementById('buttonFour').style.backgroundColor = "grey"
            document.getElementById('buttonFour').style.opacity = ".5"
        }
        if (document.getElementById('five').innerText !== "X" || document.getElementById('five').innerText !== "O") {
            document.getElementById('fiveBox').style.zIndex = "15"
            document.getElementById('buttonFive').style.backgroundColor = "grey"
            document.getElementById('buttonFive').style.opacity = ".5"
        }
        if (document.getElementById('six').innerText !== "X" || document.getElementById('six').innerText !== "O") {
            document.getElementById('sixBox').style.zIndex = "15"
            document.getElementById('buttonSix').style.backgroundColor = "grey"
            document.getElementById('buttonSix').style.opacity = ".5"
        }
        if (document.getElementById('seven').innerText !== "X" || document.getElementById('seven').innerText !== "O") {
            document.getElementById('sevenBox').style.zIndex = "15"
            document.getElementById('buttonSeven').style.backgroundColor = "grey"
            document.getElementById('buttonSeven').style.opacity = ".5"
        }
        if (document.getElementById('eight').innerText !== "X" || document.getElementById('eight').innerText !== "O") {
            document.getElementById('eightBox').style.zIndex = "15"
            document.getElementById('buttonEight').style.backgroundColor = "grey"
            document.getElementById('buttonEight').style.opacity = ".5"
        }
        if (document.getElementById('nine').innerText !== "X" || document.getElementById('nine').innerText !== "O") {
            document.getElementById('nineBox').style.zIndex = "15"
            document.getElementById('buttonNine').style.backgroundColor = "grey"
            document.getElementById('buttonNine').style.opacity = ".5"
        }

        document.getElementById('buttonFour').style.zIndex = "14"
        document.getElementById('buttonFour').style.backgroundColor = "green"
        document.getElementById('buttonFour').style.opacity = ".5"

        document.getElementById('buttonFive').style.zIndex = "14"
        document.getElementById('buttonFive').style.backgroundColor = "green"
        document.getElementById('buttonFive').style.opacity = ".5"

        document.getElementById('buttonSix').style.zIndex = "14"
        document.getElementById('buttonSix').style.backgroundColor = "green"
        document.getElementById('buttonSix').style.opacity = ".5"
   } else if(document.getElementById('seven').innerText === document.getElementById('eight').innerText && document.getElementById('eight').innerText === document.getElementById('nine').innerText) {
        if(document.getElementById('sevenBox').style.zIndex === 12){
            document.getElementById('whoMove').innerText = "X has won!"
        } else {
            document.getElementById('whoMove').innerText = "O has won!"
        }

        if (document.getElementById('one').innerText !== "X" || document.getElementById('one').innerText !== "O") {
            document.getElementById('oneBox').style.zIndex = "15"
            document.getElementById('buttonOne').style.backgroundColor = "grey"
            document.getElementById('buttonOne').style.opacity = ".5"
        }
        if (document.getElementById('two').innerText !== "X" || document.getElementById('two').innerText !== "O") {
            document.getElementById('twoBox').style.zIndex = "15"
            document.getElementById('buttonTwo').style.backgroundColor = "grey"
            document.getElementById('buttonTwo').style.opacity = ".5"
        }
        if (document.getElementById('three').innerText !== "X" || document.getElementById('three').innerText !== "O") {
            document.getElementById('threeBox').style.zIndex = "15"
            document.getElementById('buttonThree').style.backgroundColor = "grey"
            document.getElementById('buttonThree').style.opacity = ".5"
        }
        if (document.getElementById('four').innerText !== "X" || document.getElementById('four').innerText !== "O") {
            document.getElementById('fourBox').style.zIndex = "15"
            document.getElementById('buttonFour').style.backgroundColor = "grey"
            document.getElementById('buttonFour').style.opacity = ".5"
        }
        if (document.getElementById('five').innerText !== "X" || document.getElementById('five').innerText !== "O") {
            document.getElementById('fiveBox').style.zIndex = "15"
            document.getElementById('buttonFive').style.backgroundColor = "grey"
            document.getElementById('buttonFive').style.opacity = ".5"
        }
        if (document.getElementById('six').innerText !== "X" || document.getElementById('six').innerText !== "O") {
            document.getElementById('sixBox').style.zIndex = "15"
            document.getElementById('buttonSix').style.backgroundColor = "grey"
            document.getElementById('buttonSix').style.opacity = ".5"
        }
        if (document.getElementById('seven').innerText !== "X" || document.getElementById('seven').innerText !== "O") {
            document.getElementById('sevenBox').style.zIndex = "15"
            document.getElementById('buttonSeven').style.backgroundColor = "grey"
            document.getElementById('buttonSeven').style.opacity = ".5"
        }
        if (document.getElementById('eight').innerText !== "X" || document.getElementById('eight').innerText !== "O") {
            document.getElementById('eightBox').style.zIndex = "15"
            document.getElementById('buttonEight').style.backgroundColor = "grey"
            document.getElementById('buttonEight').style.opacity = ".5"
        }
        if (document.getElementById('nine').innerText !== "X" || document.getElementById('nine').innerText !== "O") {
            document.getElementById('nineBox').style.zIndex = "15"
            document.getElementById('buttonNine').style.backgroundColor = "grey"
            document.getElementById('buttonNine').style.opacity = ".5"
        } 

        document.getElementById('buttonSeven').style.zIndex = "14"
        document.getElementById('buttonSeven').style.backgroundColor = "green"
        document.getElementById('buttonSeven').style.opacity = ".5"

        document.getElementById('buttonEight').style.zIndex = "14"
        document.getElementById('buttonEight').style.backgroundColor = "green"
        document.getElementById('buttonEight').style.opacity = ".5"

        document.getElementById('buttonNine').style.zIndex = "14"
        document.getElementById('buttonNine').style.backgroundColor = "green"
        document.getElementById('buttonNine').style.opacity = ".5"
    }else if(moveNumber === 10) { //TIE//
        document.getElementById('whoMove').innerText = "Tie"
        document.getElementById('buttonOne').style.zIndex = "14"
        document.getElementById('buttonOne').style.backgroundColor = "pink"
        document.getElementById('buttonOne').style.opacity = ".5"

        document.getElementById('buttonThree').style.zIndex = "14"
        document.getElementById('buttonThree').style.backgroundColor = "pink"
        document.getElementById('buttonThree').style.opacity = ".5"

        document.getElementById('buttonFive').style.zIndex = "14"
        document.getElementById('buttonFive').style.backgroundColor = "pink"
        document.getElementById('buttonFive').style.opacity = ".5"

        document.getElementById('buttonNine').style.zIndex = "14"
        document.getElementById('buttonNine').style.backgroundColor = "pink"
        document.getElementById('buttonNine').style.opacity = ".5"

        document.getElementById('buttonSeven').style.zIndex = "14"
        document.getElementById('buttonSeven').style.backgroundColor = "pink"
        document.getElementById('buttonSeven').style.opacity = ".5"
   }
   
    console.log(moveNumber)
}
function rowColTwoThree() {
    if(moveNumber % 2 !== 0) {
        document.getElementById('six').innerText = "X"
        document.getElementById('sixBox').style.zIndex = "12"
        document.getElementById('whoMove').innerText = "O has the move"
        moveNumber++
    } else {
        document.getElementById('six').innerText = "O"
        document.getElementById('sixBox').style.zIndex = "13"
        document.getElementById('whoMove').innerText = "X has the move"
        moveNumber++
    }
    if(document.getElementById('one').innerText === document.getElementById('two').innerText && document.getElementById('two').innerText === document.getElementById('three').innerText) {
        if(document.getElementById('oneBox').style.zIndex === 12){
            document.getElementById('whoMove').innerText = "X has won!"
        } else {
            document.getElementById('whoMove').innerText = "O has won!"
        }
        document.getElementById('buttonOne').style.zIndex = "14"
        document.getElementById('buttonOne').style.backgroundColor = "green"
        document.getElementById('buttonOne').style.opacity = ".5"

        document.getElementById('buttonTwo').style.zIndex = "14"
        document.getElementById('buttonTwo').style.backgroundColor = "green"
        document.getElementById('buttonTwo').style.opacity = ".5"

        document.getElementById('buttonThree').style.zIndex = "14"
        document.getElementById('buttonThree').style.backgroundColor = "green"
        document.getElementById('buttonThree').style.opacity = ".5"
   } else if(document.getElementById('one').innerText === document.getElementById('five').innerText && document.getElementById('five').innerText === document.getElementById('nine').innerText){
        if(document.getElementById('oneBox').style.zIndex === 12){
            document.getElementById('whoMove').innerText = "X has won!"
        } else {
            document.getElementById('whoMove').innerText = "O has won!"
        }
        if (document.getElementById('one').innerText !== "X" || document.getElementById('one').innerText !== "O") {
            document.getElementById('oneBox').style.zIndex = "15"
            document.getElementById('buttonOne').style.backgroundColor = "grey"
            document.getElementById('buttonOne').style.opacity = ".5"
        }
        if (document.getElementById('two').innerText !== "X" || document.getElementById('two').innerText !== "O") {
            document.getElementById('twoBox').style.zIndex = "15"
            document.getElementById('buttonTwo').style.backgroundColor = "grey"
            document.getElementById('buttonTwo').style.opacity = ".5"
        }
        if (document.getElementById('three').innerText !== "X" || document.getElementById('three').innerText !== "O") {
            document.getElementById('threeBox').style.zIndex = "15"
            document.getElementById('buttonThree').style.backgroundColor = "grey"
            document.getElementById('buttonThree').style.opacity = ".5"
        }
        if (document.getElementById('four').innerText !== "X" || document.getElementById('four').innerText !== "O") {
            document.getElementById('fourBox').style.zIndex = "15"
            document.getElementById('buttonFour').style.backgroundColor = "grey"
            document.getElementById('buttonFour').style.opacity = ".5"
        }
        if (document.getElementById('five').innerText !== "X" || document.getElementById('five').innerText !== "O") {
            document.getElementById('fiveBox').style.zIndex = "15"
            document.getElementById('buttonFive').style.backgroundColor = "grey"
            document.getElementById('buttonFive').style.opacity = ".5"
        }
        if (document.getElementById('six').innerText !== "X" || document.getElementById('six').innerText !== "O") {
            document.getElementById('sixBox').style.zIndex = "15"
            document.getElementById('buttonSix').style.backgroundColor = "grey"
            document.getElementById('buttonSix').style.opacity = ".5"
        }
        if (document.getElementById('seven').innerText !== "X" || document.getElementById('seven').innerText !== "O") {
            document.getElementById('sevenBox').style.zIndex = "15"
            document.getElementById('buttonSeven').style.backgroundColor = "grey"
            document.getElementById('buttonSeven').style.opacity = ".5"
        }
        if (document.getElementById('eight').innerText !== "X" || document.getElementById('eight').innerText !== "O") {
            document.getElementById('eightBox').style.zIndex = "15"
            document.getElementById('buttonEight').style.backgroundColor = "grey"
            document.getElementById('buttonEight').style.opacity = ".5"
        }
        if (document.getElementById('nine').innerText !== "X" || document.getElementById('nine').innerText !== "O") {
            document.getElementById('nineBox').style.zIndex = "15"
            document.getElementById('buttonNine').style.backgroundColor = "grey"
            document.getElementById('buttonNine').style.opacity = ".5"
        }
        document.getElementById('buttonOne').style.zIndex = "14"
        document.getElementById('buttonOne').style.backgroundColor = "green"
        document.getElementById('buttonOne').style.opacity = ".5"

        document.getElementById('buttonFive').style.zIndex = "14"
        document.getElementById('buttonFive').style.backgroundColor = "green"
        document.getElementById('buttonFive').style.opacity = ".5"

        document.getElementById('buttonNine').style.zIndex = "14"
        document.getElementById('buttonNine').style.backgroundColor = "green"
        document.getElementById('buttonNine').style.opacity = ".5"



   } else if(document.getElementById('one').innerText === document.getElementById('four').innerText && document.getElementById('four').innerText === document.getElementById('seven').innerText){
        if(document.getElementById('oneBox').style.zIndex === 12){
            document.getElementById('whoMove').innerText = "X has won!"
        } else {
            document.getElementById('whoMove').innerText = "O has won!"
        }

        if (document.getElementById('one').innerText !== "X" || document.getElementById('one').innerText !== "O") {
            document.getElementById('oneBox').style.zIndex = "15"
            document.getElementById('buttonOne').style.backgroundColor = "grey"
            document.getElementById('buttonOne').style.opacity = ".5"
        }
        if (document.getElementById('two').innerText !== "X" || document.getElementById('two').innerText !== "O") {
            document.getElementById('twoBox').style.zIndex = "15"
            document.getElementById('buttonTwo').style.backgroundColor = "grey"
            document.getElementById('buttonTwo').style.opacity = ".5"
        }
        if (document.getElementById('three').innerText !== "X" || document.getElementById('three').innerText !== "O") {
            document.getElementById('threeBox').style.zIndex = "15"
            document.getElementById('buttonThree').style.backgroundColor = "grey"
            document.getElementById('buttonThree').style.opacity = ".5"
        }
        if (document.getElementById('four').innerText !== "X" || document.getElementById('four').innerText !== "O") {
            document.getElementById('fourBox').style.zIndex = "15"
            document.getElementById('buttonFour').style.backgroundColor = "grey"
            document.getElementById('buttonFour').style.opacity = ".5"
        }
        if (document.getElementById('five').innerText !== "X" || document.getElementById('five').innerText !== "O") {
            document.getElementById('fiveBox').style.zIndex = "15"
            document.getElementById('buttonFive').style.backgroundColor = "grey"
            document.getElementById('buttonFive').style.opacity = ".5"
        }
        if (document.getElementById('six').innerText !== "X" || document.getElementById('six').innerText !== "O") {
            document.getElementById('sixBox').style.zIndex = "15"
            document.getElementById('buttonSix').style.backgroundColor = "grey"
            document.getElementById('buttonSix').style.opacity = ".5"
        }
        if (document.getElementById('seven').innerText !== "X" || document.getElementById('seven').innerText !== "O") {
            document.getElementById('sevenBox').style.zIndex = "15"
            document.getElementById('buttonSeven').style.backgroundColor = "grey"
            document.getElementById('buttonSeven').style.opacity = ".5"
        }
        if (document.getElementById('eight').innerText !== "X" || document.getElementById('eight').innerText !== "O") {
            document.getElementById('eightBox').style.zIndex = "15"
            document.getElementById('buttonEight').style.backgroundColor = "grey"
            document.getElementById('buttonEight').style.opacity = ".5"
        }
        if (document.getElementById('nine').innerText !== "X" || document.getElementById('nine').innerText !== "O") {
            document.getElementById('nineBox').style.zIndex = "15"
            document.getElementById('buttonNine').style.backgroundColor = "grey"
            document.getElementById('buttonNine').style.opacity = ".5"
        }

        document.getElementById('buttonOne').style.zIndex = "14"
        document.getElementById('buttonOne').style.backgroundColor = "green"
        document.getElementById('buttonOne').style.opacity = ".5"

        document.getElementById('buttonFour').style.zIndex = "14"
        document.getElementById('buttonFour').style.backgroundColor = "green"
        document.getElementById('buttonFour').style.opacity = ".5"

        document.getElementById('buttonSeven').style.zIndex = "14"
        document.getElementById('buttonSeven').style.backgroundColor = "green"
        document.getElementById('buttonSeven').style.opacity = ".5"
   } else if(document.getElementById('two').innerText === document.getElementById('five').innerText && document.getElementById('five').innerText === document.getElementById('eight').innerText){
        if(document.getElementById('twoBox').style.zIndex === 12){
            document.getElementById('whoMove').innerText = "X has won!"
        } else {
            document.getElementById('whoMove').innerText = "O has won!"
        }

        if (document.getElementById('one').innerText !== "X" || document.getElementById('one').innerText !== "O") {
            document.getElementById('oneBox').style.zIndex = "15"
            document.getElementById('buttonOne').style.backgroundColor = "grey"
            document.getElementById('buttonOne').style.opacity = ".5"
        }
        if (document.getElementById('two').innerText !== "X" || document.getElementById('two').innerText !== "O") {
            document.getElementById('twoBox').style.zIndex = "15"
            document.getElementById('buttonTwo').style.backgroundColor = "grey"
            document.getElementById('buttonTwo').style.opacity = ".5"
        }
        if (document.getElementById('three').innerText !== "X" || document.getElementById('three').innerText !== "O") {
            document.getElementById('threeBox').style.zIndex = "15"
            document.getElementById('buttonThree').style.backgroundColor = "grey"
            document.getElementById('buttonThree').style.opacity = ".5"
        }
        if (document.getElementById('four').innerText !== "X" || document.getElementById('four').innerText !== "O") {
            document.getElementById('fourBox').style.zIndex = "15"
            document.getElementById('buttonFour').style.backgroundColor = "grey"
            document.getElementById('buttonFour').style.opacity = ".5"
        }
        if (document.getElementById('five').innerText !== "X" || document.getElementById('five').innerText !== "O") {
            document.getElementById('fiveBox').style.zIndex = "15"
            document.getElementById('buttonFive').style.backgroundColor = "grey"
            document.getElementById('buttonFive').style.opacity = ".5"
        }
        if (document.getElementById('six').innerText !== "X" || document.getElementById('six').innerText !== "O") {
            document.getElementById('sixBox').style.zIndex = "15"
            document.getElementById('buttonSix').style.backgroundColor = "grey"
            document.getElementById('buttonSix').style.opacity = ".5"
        }
        if (document.getElementById('seven').innerText !== "X" || document.getElementById('seven').innerText !== "O") {
            document.getElementById('sevenBox').style.zIndex = "15"
            document.getElementById('buttonSeven').style.backgroundColor = "grey"
            document.getElementById('buttonSeven').style.opacity = ".5"
        }
        if (document.getElementById('eight').innerText !== "X" || document.getElementById('eight').innerText !== "O") {
            document.getElementById('eightBox').style.zIndex = "15"
            document.getElementById('buttonEight').style.backgroundColor = "grey"
            document.getElementById('buttonEight').style.opacity = ".5"
        }
        if (document.getElementById('nine').innerText !== "X" || document.getElementById('nine').innerText !== "O") {
            document.getElementById('nineBox').style.zIndex = "15"
            document.getElementById('buttonNine').style.backgroundColor = "grey"
            document.getElementById('buttonNine').style.opacity = ".5"
        }

        document.getElementById('buttonTwo').style.zIndex = "14"
        document.getElementById('buttonTwo').style.backgroundColor = "green"
        document.getElementById('buttonTwo').style.opacity = ".5"

        document.getElementById('buttonFive').style.zIndex = "14"
        document.getElementById('buttonFive').style.backgroundColor = "green"
        document.getElementById('buttonFive').style.opacity = ".5"

        document.getElementById('buttonEight').style.zIndex = "14"
        document.getElementById('buttonEight').style.backgroundColor = "green"
        document.getElementById('buttonEight').style.opacity = ".5"
   } else if(document.getElementById('three').innerText === document.getElementById('six').innerText && document.getElementById('six').innerText === document.getElementById('nine').innerText) {
        if(document.getElementById('twoBox').style.zIndex === 12){
            document.getElementById('whoMove').innerText = "X has won!"
        } else {
            document.getElementById('whoMove').innerText = "O has won!"
        }

        if (document.getElementById('one').innerText !== "X" || document.getElementById('one').innerText !== "O") {
            document.getElementById('oneBox').style.zIndex = "15"
            document.getElementById('buttonOne').style.backgroundColor = "grey"
            document.getElementById('buttonOne').style.opacity = ".5"
        }
        if (document.getElementById('two').innerText !== "X" || document.getElementById('two').innerText !== "O") {
            document.getElementById('twoBox').style.zIndex = "15"
            document.getElementById('buttonTwo').style.backgroundColor = "grey"
            document.getElementById('buttonTwo').style.opacity = ".5"
        }
        if (document.getElementById('three').innerText !== "X" || document.getElementById('three').innerText !== "O") {
            document.getElementById('threeBox').style.zIndex = "15"
            document.getElementById('buttonThree').style.backgroundColor = "grey"
            document.getElementById('buttonThree').style.opacity = ".5"
        }
        if (document.getElementById('four').innerText !== "X" || document.getElementById('four').innerText !== "O") {
            document.getElementById('fourBox').style.zIndex = "15"
            document.getElementById('buttonFour').style.backgroundColor = "grey"
            document.getElementById('buttonFour').style.opacity = ".5"
        }
        if (document.getElementById('five').innerText !== "X" || document.getElementById('five').innerText !== "O") {
            document.getElementById('fiveBox').style.zIndex = "15"
            document.getElementById('buttonFive').style.backgroundColor = "grey"
            document.getElementById('buttonFive').style.opacity = ".5"
        }
        if (document.getElementById('six').innerText !== "X" || document.getElementById('six').innerText !== "O") {
            document.getElementById('sixBox').style.zIndex = "15"
            document.getElementById('buttonSix').style.backgroundColor = "grey"
            document.getElementById('buttonSix').style.opacity = ".5"
        }
        if (document.getElementById('seven').innerText !== "X" || document.getElementById('seven').innerText !== "O") {
            document.getElementById('sevenBox').style.zIndex = "15"
            document.getElementById('buttonSeven').style.backgroundColor = "grey"
            document.getElementById('buttonSeven').style.opacity = ".5"
        }
        if (document.getElementById('eight').innerText !== "X" || document.getElementById('eight').innerText !== "O") {
            document.getElementById('eightBox').style.zIndex = "15"
            document.getElementById('buttonEight').style.backgroundColor = "grey"
            document.getElementById('buttonEight').style.opacity = ".5"
        }
        if (document.getElementById('nine').innerText !== "X" || document.getElementById('nine').innerText !== "O") {
            document.getElementById('nineBox').style.zIndex = "15"
            document.getElementById('buttonNine').style.backgroundColor = "grey"
            document.getElementById('buttonNine').style.opacity = ".5"
        }

        document.getElementById('buttonThree').style.zIndex = "14"
        document.getElementById('buttonThree').style.backgroundColor = "green"
        document.getElementById('buttonThree').style.opacity = ".5"

        document.getElementById('buttonSix').style.zIndex = "14"
        document.getElementById('buttonSix').style.backgroundColor = "green"
        document.getElementById('buttonSix').style.opacity = ".5"

        document.getElementById('buttonNine').style.zIndex = "14"
        document.getElementById('buttonNine').style.backgroundColor = "green"
        document.getElementById('buttonNine').style.opacity = ".5"
   } else if(document.getElementById('three').innerText === document.getElementById('five').innerText && document.getElementById('five').innerText === document.getElementById('seven').innerText){
        if(document.getElementById('threeBox').style.zIndex === 12){
            document.getElementById('whoMove').innerText = "X has won!"
        } else {
            document.getElementById('whoMove').innerText = "O has won!"
        }

        if (document.getElementById('one').innerText !== "X" || document.getElementById('one').innerText !== "O") {
            document.getElementById('oneBox').style.zIndex = "15"
            document.getElementById('buttonOne').style.backgroundColor = "grey"
            document.getElementById('buttonOne').style.opacity = ".5"
        }
        if (document.getElementById('two').innerText !== "X" || document.getElementById('two').innerText !== "O") {
            document.getElementById('twoBox').style.zIndex = "15"
            document.getElementById('buttonTwo').style.backgroundColor = "grey"
            document.getElementById('buttonTwo').style.opacity = ".5"
        }
        if (document.getElementById('three').innerText !== "X" || document.getElementById('three').innerText !== "O") {
            document.getElementById('threeBox').style.zIndex = "15"
            document.getElementById('buttonThree').style.backgroundColor = "grey"
            document.getElementById('buttonThree').style.opacity = ".5"
        }
        if (document.getElementById('four').innerText !== "X" || document.getElementById('four').innerText !== "O") {
            document.getElementById('fourBox').style.zIndex = "15"
            document.getElementById('buttonFour').style.backgroundColor = "grey"
            document.getElementById('buttonFour').style.opacity = ".5"
        }
        if (document.getElementById('five').innerText !== "X" || document.getElementById('five').innerText !== "O") {
            document.getElementById('fiveBox').style.zIndex = "15"
            document.getElementById('buttonFive').style.backgroundColor = "grey"
            document.getElementById('buttonFive').style.opacity = ".5"
        }
        if (document.getElementById('six').innerText !== "X" || document.getElementById('six').innerText !== "O") {
            document.getElementById('sixBox').style.zIndex = "15"
            document.getElementById('buttonSix').style.backgroundColor = "grey"
            document.getElementById('buttonSix').style.opacity = ".5"
        }
        if (document.getElementById('seven').innerText !== "X" || document.getElementById('seven').innerText !== "O") {
            document.getElementById('sevenBox').style.zIndex = "15"
            document.getElementById('buttonSeven').style.backgroundColor = "grey"
            document.getElementById('buttonSeven').style.opacity = ".5"
        }
        if (document.getElementById('eight').innerText !== "X" || document.getElementById('eight').innerText !== "O") {
            document.getElementById('eightBox').style.zIndex = "15"
            document.getElementById('buttonEight').style.backgroundColor = "grey"
            document.getElementById('buttonEight').style.opacity = ".5"
        }
        if (document.getElementById('nine').innerText !== "X" || document.getElementById('nine').innerText !== "O") {
            document.getElementById('nineBox').style.zIndex = "15"
            document.getElementById('buttonNine').style.backgroundColor = "grey"
            document.getElementById('buttonNine').style.opacity = ".5"
        }

        document.getElementById('buttonThree').style.zIndex = "14"
        document.getElementById('buttonThree').style.backgroundColor = "green"
        document.getElementById('buttonThree').style.opacity = ".5"

        document.getElementById('buttonFive').style.zIndex = "14"
        document.getElementById('buttonFive').style.backgroundColor = "green"
        document.getElementById('buttonFive').style.opacity = ".5"

        document.getElementById('buttonSeven').style.zIndex = "14"
        document.getElementById('buttonSeven').style.backgroundColor = "green"
        document.getElementById('buttonSeven').style.opacity = ".5"
   } else if(document.getElementById('four').innerText === document.getElementById('five').innerText && document.getElementById('five').innerText === document.getElementById('six').innerText) {
        if(document.getElementById('fourBox').style.zIndex === 12){
            document.getElementById('whoMove').innerText = "X has won!"
        } else {
            document.getElementById('whoMove').innerText = "O has won!"
        }

        if (document.getElementById('one').innerText !== "X" || document.getElementById('one').innerText !== "O") {
            document.getElementById('oneBox').style.zIndex = "15"
            document.getElementById('buttonOne').style.backgroundColor = "grey"
            document.getElementById('buttonOne').style.opacity = ".5"
        }
        if (document.getElementById('two').innerText !== "X" || document.getElementById('two').innerText !== "O") {
            document.getElementById('twoBox').style.zIndex = "15"
            document.getElementById('buttonTwo').style.backgroundColor = "grey"
            document.getElementById('buttonTwo').style.opacity = ".5"
        }
        if (document.getElementById('three').innerText !== "X" || document.getElementById('three').innerText !== "O") {
            document.getElementById('threeBox').style.zIndex = "15"
            document.getElementById('buttonThree').style.backgroundColor = "grey"
            document.getElementById('buttonThree').style.opacity = ".5"
        }
        if (document.getElementById('four').innerText !== "X" || document.getElementById('four').innerText !== "O") {
            document.getElementById('fourBox').style.zIndex = "15"
            document.getElementById('buttonFour').style.backgroundColor = "grey"
            document.getElementById('buttonFour').style.opacity = ".5"
        }
        if (document.getElementById('five').innerText !== "X" || document.getElementById('five').innerText !== "O") {
            document.getElementById('fiveBox').style.zIndex = "15"
            document.getElementById('buttonFive').style.backgroundColor = "grey"
            document.getElementById('buttonFive').style.opacity = ".5"
        }
        if (document.getElementById('six').innerText !== "X" || document.getElementById('six').innerText !== "O") {
            document.getElementById('sixBox').style.zIndex = "15"
            document.getElementById('buttonSix').style.backgroundColor = "grey"
            document.getElementById('buttonSix').style.opacity = ".5"
        }
        if (document.getElementById('seven').innerText !== "X" || document.getElementById('seven').innerText !== "O") {
            document.getElementById('sevenBox').style.zIndex = "15"
            document.getElementById('buttonSeven').style.backgroundColor = "grey"
            document.getElementById('buttonSeven').style.opacity = ".5"
        }
        if (document.getElementById('eight').innerText !== "X" || document.getElementById('eight').innerText !== "O") {
            document.getElementById('eightBox').style.zIndex = "15"
            document.getElementById('buttonEight').style.backgroundColor = "grey"
            document.getElementById('buttonEight').style.opacity = ".5"
        }
        if (document.getElementById('nine').innerText !== "X" || document.getElementById('nine').innerText !== "O") {
            document.getElementById('nineBox').style.zIndex = "15"
            document.getElementById('buttonNine').style.backgroundColor = "grey"
            document.getElementById('buttonNine').style.opacity = ".5"
        }

        document.getElementById('buttonFour').style.zIndex = "14"
        document.getElementById('buttonFour').style.backgroundColor = "green"
        document.getElementById('buttonFour').style.opacity = ".5"

        document.getElementById('buttonFive').style.zIndex = "14"
        document.getElementById('buttonFive').style.backgroundColor = "green"
        document.getElementById('buttonFive').style.opacity = ".5"

        document.getElementById('buttonSix').style.zIndex = "14"
        document.getElementById('buttonSix').style.backgroundColor = "green"
        document.getElementById('buttonSix').style.opacity = ".5"
   } else if(document.getElementById('seven').innerText === document.getElementById('eight').innerText && document.getElementById('eight').innerText === document.getElementById('nine').innerText) {
        if(document.getElementById('sevenBox').style.zIndex === 12){
            document.getElementById('whoMove').innerText = "X has won!"
        } else {
            document.getElementById('whoMove').innerText = "O has won!"
        }

        if (document.getElementById('one').innerText !== "X" || document.getElementById('one').innerText !== "O") {
            document.getElementById('oneBox').style.zIndex = "15"
            document.getElementById('buttonOne').style.backgroundColor = "grey"
            document.getElementById('buttonOne').style.opacity = ".5"
        }
        if (document.getElementById('two').innerText !== "X" || document.getElementById('two').innerText !== "O") {
            document.getElementById('twoBox').style.zIndex = "15"
            document.getElementById('buttonTwo').style.backgroundColor = "grey"
            document.getElementById('buttonTwo').style.opacity = ".5"
        }
        if (document.getElementById('three').innerText !== "X" || document.getElementById('three').innerText !== "O") {
            document.getElementById('threeBox').style.zIndex = "15"
            document.getElementById('buttonThree').style.backgroundColor = "grey"
            document.getElementById('buttonThree').style.opacity = ".5"
        }
        if (document.getElementById('four').innerText !== "X" || document.getElementById('four').innerText !== "O") {
            document.getElementById('fourBox').style.zIndex = "15"
            document.getElementById('buttonFour').style.backgroundColor = "grey"
            document.getElementById('buttonFour').style.opacity = ".5"
        }
        if (document.getElementById('five').innerText !== "X" || document.getElementById('five').innerText !== "O") {
            document.getElementById('fiveBox').style.zIndex = "15"
            document.getElementById('buttonFive').style.backgroundColor = "grey"
            document.getElementById('buttonFive').style.opacity = ".5"
        }
        if (document.getElementById('six').innerText !== "X" || document.getElementById('six').innerText !== "O") {
            document.getElementById('sixBox').style.zIndex = "15"
            document.getElementById('buttonSix').style.backgroundColor = "grey"
            document.getElementById('buttonSix').style.opacity = ".5"
        }
        if (document.getElementById('seven').innerText !== "X" || document.getElementById('seven').innerText !== "O") {
            document.getElementById('sevenBox').style.zIndex = "15"
            document.getElementById('buttonSeven').style.backgroundColor = "grey"
            document.getElementById('buttonSeven').style.opacity = ".5"
        }
        if (document.getElementById('eight').innerText !== "X" || document.getElementById('eight').innerText !== "O") {
            document.getElementById('eightBox').style.zIndex = "15"
            document.getElementById('buttonEight').style.backgroundColor = "grey"
            document.getElementById('buttonEight').style.opacity = ".5"
        }
        if (document.getElementById('nine').innerText !== "X" || document.getElementById('nine').innerText !== "O") {
            document.getElementById('nineBox').style.zIndex = "15"
            document.getElementById('buttonNine').style.backgroundColor = "grey"
            document.getElementById('buttonNine').style.opacity = ".5"
        } 

        document.getElementById('buttonSeven').style.zIndex = "14"
        document.getElementById('buttonSeven').style.backgroundColor = "green"
        document.getElementById('buttonSeven').style.opacity = ".5"

        document.getElementById('buttonEight').style.zIndex = "14"
        document.getElementById('buttonEight').style.backgroundColor = "green"
        document.getElementById('buttonEight').style.opacity = ".5"

        document.getElementById('buttonNine').style.zIndex = "14"
        document.getElementById('buttonNine').style.backgroundColor = "green"
        document.getElementById('buttonNine').style.opacity = ".5"
    }else if(moveNumber === 10) { //TIE//
        document.getElementById('whoMove').innerText = "Tie"
        document.getElementById('buttonOne').style.zIndex = "14"
        document.getElementById('buttonOne').style.backgroundColor = "pink"
        document.getElementById('buttonOne').style.opacity = ".5"

        document.getElementById('buttonThree').style.zIndex = "14"
        document.getElementById('buttonThree').style.backgroundColor = "pink"
        document.getElementById('buttonThree').style.opacity = ".5"

        document.getElementById('buttonFive').style.zIndex = "14"
        document.getElementById('buttonFive').style.backgroundColor = "pink"
        document.getElementById('buttonFive').style.opacity = ".5"

        document.getElementById('buttonNine').style.zIndex = "14"
        document.getElementById('buttonNine').style.backgroundColor = "pink"
        document.getElementById('buttonNine').style.opacity = ".5"

        document.getElementById('buttonSeven').style.zIndex = "14"
        document.getElementById('buttonSeven').style.backgroundColor = "pink"
        document.getElementById('buttonSeven').style.opacity = ".5"
   }
   
    console.log(moveNumber)
}
function rowColThreeOne() {
    if(moveNumber % 2 !== 0) {
        document.getElementById('seven').innerText = "X"
        document.getElementById('sevenBox').style.zIndex = "12"
        document.getElementById('whoMove').innerText = "O has the move"
        moveNumber++
    } else {
        document.getElementById('seven').innerText = "O"
        document.getElementById('sevenBox').style.zIndex = "13"
        document.getElementById('whoMove').innerText = "X has the move"
        moveNumber++
    }
    if(document.getElementById('one').innerText === document.getElementById('two').innerText && document.getElementById('two').innerText === document.getElementById('three').innerText) {
        if(document.getElementById('oneBox').style.zIndex === 12){
            document.getElementById('whoMove').innerText = "X has won!"
        } else {
            document.getElementById('whoMove').innerText = "O has won!"
        }
        document.getElementById('buttonOne').style.zIndex = "14"
        document.getElementById('buttonOne').style.backgroundColor = "green"
        document.getElementById('buttonOne').style.opacity = ".5"

        document.getElementById('buttonTwo').style.zIndex = "14"
        document.getElementById('buttonTwo').style.backgroundColor = "green"
        document.getElementById('buttonTwo').style.opacity = ".5"

        document.getElementById('buttonThree').style.zIndex = "14"
        document.getElementById('buttonThree').style.backgroundColor = "green"
        document.getElementById('buttonThree').style.opacity = ".5"
   } else if(document.getElementById('one').innerText === document.getElementById('five').innerText && document.getElementById('five').innerText === document.getElementById('nine').innerText){
        if(document.getElementById('oneBox').style.zIndex === 12){
            document.getElementById('whoMove').innerText = "X has won!"
        } else {
            document.getElementById('whoMove').innerText = "O has won!"
        }
        if (document.getElementById('one').innerText !== "X" || document.getElementById('one').innerText !== "O") {
            document.getElementById('oneBox').style.zIndex = "15"
            document.getElementById('buttonOne').style.backgroundColor = "grey"
            document.getElementById('buttonOne').style.opacity = ".5"
        }
        if (document.getElementById('two').innerText !== "X" || document.getElementById('two').innerText !== "O") {
            document.getElementById('twoBox').style.zIndex = "15"
            document.getElementById('buttonTwo').style.backgroundColor = "grey"
            document.getElementById('buttonTwo').style.opacity = ".5"
        }
        if (document.getElementById('three').innerText !== "X" || document.getElementById('three').innerText !== "O") {
            document.getElementById('threeBox').style.zIndex = "15"
            document.getElementById('buttonThree').style.backgroundColor = "grey"
            document.getElementById('buttonThree').style.opacity = ".5"
        }
        if (document.getElementById('four').innerText !== "X" || document.getElementById('four').innerText !== "O") {
            document.getElementById('fourBox').style.zIndex = "15"
            document.getElementById('buttonFour').style.backgroundColor = "grey"
            document.getElementById('buttonFour').style.opacity = ".5"
        }
        if (document.getElementById('five').innerText !== "X" || document.getElementById('five').innerText !== "O") {
            document.getElementById('fiveBox').style.zIndex = "15"
            document.getElementById('buttonFive').style.backgroundColor = "grey"
            document.getElementById('buttonFive').style.opacity = ".5"
        }
        if (document.getElementById('six').innerText !== "X" || document.getElementById('six').innerText !== "O") {
            document.getElementById('sixBox').style.zIndex = "15"
            document.getElementById('buttonSix').style.backgroundColor = "grey"
            document.getElementById('buttonSix').style.opacity = ".5"
        }
        if (document.getElementById('seven').innerText !== "X" || document.getElementById('seven').innerText !== "O") {
            document.getElementById('sevenBox').style.zIndex = "15"
            document.getElementById('buttonSeven').style.backgroundColor = "grey"
            document.getElementById('buttonSeven').style.opacity = ".5"
        }
        if (document.getElementById('eight').innerText !== "X" || document.getElementById('eight').innerText !== "O") {
            document.getElementById('eightBox').style.zIndex = "15"
            document.getElementById('buttonEight').style.backgroundColor = "grey"
            document.getElementById('buttonEight').style.opacity = ".5"
        }
        if (document.getElementById('nine').innerText !== "X" || document.getElementById('nine').innerText !== "O") {
            document.getElementById('nineBox').style.zIndex = "15"
            document.getElementById('buttonNine').style.backgroundColor = "grey"
            document.getElementById('buttonNine').style.opacity = ".5"
        }
        document.getElementById('buttonOne').style.zIndex = "14"
        document.getElementById('buttonOne').style.backgroundColor = "green"
        document.getElementById('buttonOne').style.opacity = ".5"

        document.getElementById('buttonFive').style.zIndex = "14"
        document.getElementById('buttonFive').style.backgroundColor = "green"
        document.getElementById('buttonFive').style.opacity = ".5"

        document.getElementById('buttonNine').style.zIndex = "14"
        document.getElementById('buttonNine').style.backgroundColor = "green"
        document.getElementById('buttonNine').style.opacity = ".5"



   } else if(document.getElementById('one').innerText === document.getElementById('four').innerText && document.getElementById('four').innerText === document.getElementById('seven').innerText){
        if(document.getElementById('oneBox').style.zIndex === 12){
            document.getElementById('whoMove').innerText = "X has won!"
        } else {
            document.getElementById('whoMove').innerText = "O has won!"
        }

        if (document.getElementById('one').innerText !== "X" || document.getElementById('one').innerText !== "O") {
            document.getElementById('oneBox').style.zIndex = "15"
            document.getElementById('buttonOne').style.backgroundColor = "grey"
            document.getElementById('buttonOne').style.opacity = ".5"
        }
        if (document.getElementById('two').innerText !== "X" || document.getElementById('two').innerText !== "O") {
            document.getElementById('twoBox').style.zIndex = "15"
            document.getElementById('buttonTwo').style.backgroundColor = "grey"
            document.getElementById('buttonTwo').style.opacity = ".5"
        }
        if (document.getElementById('three').innerText !== "X" || document.getElementById('three').innerText !== "O") {
            document.getElementById('threeBox').style.zIndex = "15"
            document.getElementById('buttonThree').style.backgroundColor = "grey"
            document.getElementById('buttonThree').style.opacity = ".5"
        }
        if (document.getElementById('four').innerText !== "X" || document.getElementById('four').innerText !== "O") {
            document.getElementById('fourBox').style.zIndex = "15"
            document.getElementById('buttonFour').style.backgroundColor = "grey"
            document.getElementById('buttonFour').style.opacity = ".5"
        }
        if (document.getElementById('five').innerText !== "X" || document.getElementById('five').innerText !== "O") {
            document.getElementById('fiveBox').style.zIndex = "15"
            document.getElementById('buttonFive').style.backgroundColor = "grey"
            document.getElementById('buttonFive').style.opacity = ".5"
        }
        if (document.getElementById('six').innerText !== "X" || document.getElementById('six').innerText !== "O") {
            document.getElementById('sixBox').style.zIndex = "15"
            document.getElementById('buttonSix').style.backgroundColor = "grey"
            document.getElementById('buttonSix').style.opacity = ".5"
        }
        if (document.getElementById('seven').innerText !== "X" || document.getElementById('seven').innerText !== "O") {
            document.getElementById('sevenBox').style.zIndex = "15"
            document.getElementById('buttonSeven').style.backgroundColor = "grey"
            document.getElementById('buttonSeven').style.opacity = ".5"
        }
        if (document.getElementById('eight').innerText !== "X" || document.getElementById('eight').innerText !== "O") {
            document.getElementById('eightBox').style.zIndex = "15"
            document.getElementById('buttonEight').style.backgroundColor = "grey"
            document.getElementById('buttonEight').style.opacity = ".5"
        }
        if (document.getElementById('nine').innerText !== "X" || document.getElementById('nine').innerText !== "O") {
            document.getElementById('nineBox').style.zIndex = "15"
            document.getElementById('buttonNine').style.backgroundColor = "grey"
            document.getElementById('buttonNine').style.opacity = ".5"
        }

        document.getElementById('buttonOne').style.zIndex = "14"
        document.getElementById('buttonOne').style.backgroundColor = "green"
        document.getElementById('buttonOne').style.opacity = ".5"

        document.getElementById('buttonFour').style.zIndex = "14"
        document.getElementById('buttonFour').style.backgroundColor = "green"
        document.getElementById('buttonFour').style.opacity = ".5"

        document.getElementById('buttonSeven').style.zIndex = "14"
        document.getElementById('buttonSeven').style.backgroundColor = "green"
        document.getElementById('buttonSeven').style.opacity = ".5"
   } else if(document.getElementById('two').innerText === document.getElementById('five').innerText && document.getElementById('five').innerText === document.getElementById('eight').innerText){
        if(document.getElementById('twoBox').style.zIndex === 12){
            document.getElementById('whoMove').innerText = "X has won!"
        } else {
            document.getElementById('whoMove').innerText = "O has won!"
        }

        if (document.getElementById('one').innerText !== "X" || document.getElementById('one').innerText !== "O") {
            document.getElementById('oneBox').style.zIndex = "15"
            document.getElementById('buttonOne').style.backgroundColor = "grey"
            document.getElementById('buttonOne').style.opacity = ".5"
        }
        if (document.getElementById('two').innerText !== "X" || document.getElementById('two').innerText !== "O") {
            document.getElementById('twoBox').style.zIndex = "15"
            document.getElementById('buttonTwo').style.backgroundColor = "grey"
            document.getElementById('buttonTwo').style.opacity = ".5"
        }
        if (document.getElementById('three').innerText !== "X" || document.getElementById('three').innerText !== "O") {
            document.getElementById('threeBox').style.zIndex = "15"
            document.getElementById('buttonThree').style.backgroundColor = "grey"
            document.getElementById('buttonThree').style.opacity = ".5"
        }
        if (document.getElementById('four').innerText !== "X" || document.getElementById('four').innerText !== "O") {
            document.getElementById('fourBox').style.zIndex = "15"
            document.getElementById('buttonFour').style.backgroundColor = "grey"
            document.getElementById('buttonFour').style.opacity = ".5"
        }
        if (document.getElementById('five').innerText !== "X" || document.getElementById('five').innerText !== "O") {
            document.getElementById('fiveBox').style.zIndex = "15"
            document.getElementById('buttonFive').style.backgroundColor = "grey"
            document.getElementById('buttonFive').style.opacity = ".5"
        }
        if (document.getElementById('six').innerText !== "X" || document.getElementById('six').innerText !== "O") {
            document.getElementById('sixBox').style.zIndex = "15"
            document.getElementById('buttonSix').style.backgroundColor = "grey"
            document.getElementById('buttonSix').style.opacity = ".5"
        }
        if (document.getElementById('seven').innerText !== "X" || document.getElementById('seven').innerText !== "O") {
            document.getElementById('sevenBox').style.zIndex = "15"
            document.getElementById('buttonSeven').style.backgroundColor = "grey"
            document.getElementById('buttonSeven').style.opacity = ".5"
        }
        if (document.getElementById('eight').innerText !== "X" || document.getElementById('eight').innerText !== "O") {
            document.getElementById('eightBox').style.zIndex = "15"
            document.getElementById('buttonEight').style.backgroundColor = "grey"
            document.getElementById('buttonEight').style.opacity = ".5"
        }
        if (document.getElementById('nine').innerText !== "X" || document.getElementById('nine').innerText !== "O") {
            document.getElementById('nineBox').style.zIndex = "15"
            document.getElementById('buttonNine').style.backgroundColor = "grey"
            document.getElementById('buttonNine').style.opacity = ".5"
        }

        document.getElementById('buttonTwo').style.zIndex = "14"
        document.getElementById('buttonTwo').style.backgroundColor = "green"
        document.getElementById('buttonTwo').style.opacity = ".5"

        document.getElementById('buttonFive').style.zIndex = "14"
        document.getElementById('buttonFive').style.backgroundColor = "green"
        document.getElementById('buttonFive').style.opacity = ".5"

        document.getElementById('buttonEight').style.zIndex = "14"
        document.getElementById('buttonEight').style.backgroundColor = "green"
        document.getElementById('buttonEight').style.opacity = ".5"
   } else if(document.getElementById('three').innerText === document.getElementById('six').innerText && document.getElementById('six').innerText === document.getElementById('nine').innerText) {
        if(document.getElementById('twoBox').style.zIndex === 12){
            document.getElementById('whoMove').innerText = "X has won!"
        } else {
            document.getElementById('whoMove').innerText = "O has won!"
        }

        if (document.getElementById('one').innerText !== "X" || document.getElementById('one').innerText !== "O") {
            document.getElementById('oneBox').style.zIndex = "15"
            document.getElementById('buttonOne').style.backgroundColor = "grey"
            document.getElementById('buttonOne').style.opacity = ".5"
        }
        if (document.getElementById('two').innerText !== "X" || document.getElementById('two').innerText !== "O") {
            document.getElementById('twoBox').style.zIndex = "15"
            document.getElementById('buttonTwo').style.backgroundColor = "grey"
            document.getElementById('buttonTwo').style.opacity = ".5"
        }
        if (document.getElementById('three').innerText !== "X" || document.getElementById('three').innerText !== "O") {
            document.getElementById('threeBox').style.zIndex = "15"
            document.getElementById('buttonThree').style.backgroundColor = "grey"
            document.getElementById('buttonThree').style.opacity = ".5"
        }
        if (document.getElementById('four').innerText !== "X" || document.getElementById('four').innerText !== "O") {
            document.getElementById('fourBox').style.zIndex = "15"
            document.getElementById('buttonFour').style.backgroundColor = "grey"
            document.getElementById('buttonFour').style.opacity = ".5"
        }
        if (document.getElementById('five').innerText !== "X" || document.getElementById('five').innerText !== "O") {
            document.getElementById('fiveBox').style.zIndex = "15"
            document.getElementById('buttonFive').style.backgroundColor = "grey"
            document.getElementById('buttonFive').style.opacity = ".5"
        }
        if (document.getElementById('six').innerText !== "X" || document.getElementById('six').innerText !== "O") {
            document.getElementById('sixBox').style.zIndex = "15"
            document.getElementById('buttonSix').style.backgroundColor = "grey"
            document.getElementById('buttonSix').style.opacity = ".5"
        }
        if (document.getElementById('seven').innerText !== "X" || document.getElementById('seven').innerText !== "O") {
            document.getElementById('sevenBox').style.zIndex = "15"
            document.getElementById('buttonSeven').style.backgroundColor = "grey"
            document.getElementById('buttonSeven').style.opacity = ".5"
        }
        if (document.getElementById('eight').innerText !== "X" || document.getElementById('eight').innerText !== "O") {
            document.getElementById('eightBox').style.zIndex = "15"
            document.getElementById('buttonEight').style.backgroundColor = "grey"
            document.getElementById('buttonEight').style.opacity = ".5"
        }
        if (document.getElementById('nine').innerText !== "X" || document.getElementById('nine').innerText !== "O") {
            document.getElementById('nineBox').style.zIndex = "15"
            document.getElementById('buttonNine').style.backgroundColor = "grey"
            document.getElementById('buttonNine').style.opacity = ".5"
        }

        document.getElementById('buttonThree').style.zIndex = "14"
        document.getElementById('buttonThree').style.backgroundColor = "green"
        document.getElementById('buttonThree').style.opacity = ".5"

        document.getElementById('buttonSix').style.zIndex = "14"
        document.getElementById('buttonSix').style.backgroundColor = "green"
        document.getElementById('buttonSix').style.opacity = ".5"

        document.getElementById('buttonNine').style.zIndex = "14"
        document.getElementById('buttonNine').style.backgroundColor = "green"
        document.getElementById('buttonNine').style.opacity = ".5"
   } else if(document.getElementById('three').innerText === document.getElementById('five').innerText && document.getElementById('five').innerText === document.getElementById('seven').innerText){
        if(document.getElementById('threeBox').style.zIndex === 12){
            document.getElementById('whoMove').innerText = "X has won!"
        } else {
            document.getElementById('whoMove').innerText = "O has won!"
        }

        if (document.getElementById('one').innerText !== "X" || document.getElementById('one').innerText !== "O") {
            document.getElementById('oneBox').style.zIndex = "15"
            document.getElementById('buttonOne').style.backgroundColor = "grey"
            document.getElementById('buttonOne').style.opacity = ".5"
        }
        if (document.getElementById('two').innerText !== "X" || document.getElementById('two').innerText !== "O") {
            document.getElementById('twoBox').style.zIndex = "15"
            document.getElementById('buttonTwo').style.backgroundColor = "grey"
            document.getElementById('buttonTwo').style.opacity = ".5"
        }
        if (document.getElementById('three').innerText !== "X" || document.getElementById('three').innerText !== "O") {
            document.getElementById('threeBox').style.zIndex = "15"
            document.getElementById('buttonThree').style.backgroundColor = "grey"
            document.getElementById('buttonThree').style.opacity = ".5"
        }
        if (document.getElementById('four').innerText !== "X" || document.getElementById('four').innerText !== "O") {
            document.getElementById('fourBox').style.zIndex = "15"
            document.getElementById('buttonFour').style.backgroundColor = "grey"
            document.getElementById('buttonFour').style.opacity = ".5"
        }
        if (document.getElementById('five').innerText !== "X" || document.getElementById('five').innerText !== "O") {
            document.getElementById('fiveBox').style.zIndex = "15"
            document.getElementById('buttonFive').style.backgroundColor = "grey"
            document.getElementById('buttonFive').style.opacity = ".5"
        }
        if (document.getElementById('six').innerText !== "X" || document.getElementById('six').innerText !== "O") {
            document.getElementById('sixBox').style.zIndex = "15"
            document.getElementById('buttonSix').style.backgroundColor = "grey"
            document.getElementById('buttonSix').style.opacity = ".5"
        }
        if (document.getElementById('seven').innerText !== "X" || document.getElementById('seven').innerText !== "O") {
            document.getElementById('sevenBox').style.zIndex = "15"
            document.getElementById('buttonSeven').style.backgroundColor = "grey"
            document.getElementById('buttonSeven').style.opacity = ".5"
        }
        if (document.getElementById('eight').innerText !== "X" || document.getElementById('eight').innerText !== "O") {
            document.getElementById('eightBox').style.zIndex = "15"
            document.getElementById('buttonEight').style.backgroundColor = "grey"
            document.getElementById('buttonEight').style.opacity = ".5"
        }
        if (document.getElementById('nine').innerText !== "X" || document.getElementById('nine').innerText !== "O") {
            document.getElementById('nineBox').style.zIndex = "15"
            document.getElementById('buttonNine').style.backgroundColor = "grey"
            document.getElementById('buttonNine').style.opacity = ".5"
        }

        document.getElementById('buttonThree').style.zIndex = "14"
        document.getElementById('buttonThree').style.backgroundColor = "green"
        document.getElementById('buttonThree').style.opacity = ".5"

        document.getElementById('buttonFive').style.zIndex = "14"
        document.getElementById('buttonFive').style.backgroundColor = "green"
        document.getElementById('buttonFive').style.opacity = ".5"

        document.getElementById('buttonSeven').style.zIndex = "14"
        document.getElementById('buttonSeven').style.backgroundColor = "green"
        document.getElementById('buttonSeven').style.opacity = ".5"
   } else if(document.getElementById('four').innerText === document.getElementById('five').innerText && document.getElementById('five').innerText === document.getElementById('six').innerText) {
        if(document.getElementById('fourBox').style.zIndex === 12){
            document.getElementById('whoMove').innerText = "X has won!"
        } else {
            document.getElementById('whoMove').innerText = "O has won!"
        }

        if (document.getElementById('one').innerText !== "X" || document.getElementById('one').innerText !== "O") {
            document.getElementById('oneBox').style.zIndex = "15"
            document.getElementById('buttonOne').style.backgroundColor = "grey"
            document.getElementById('buttonOne').style.opacity = ".5"
        }
        if (document.getElementById('two').innerText !== "X" || document.getElementById('two').innerText !== "O") {
            document.getElementById('twoBox').style.zIndex = "15"
            document.getElementById('buttonTwo').style.backgroundColor = "grey"
            document.getElementById('buttonTwo').style.opacity = ".5"
        }
        if (document.getElementById('three').innerText !== "X" || document.getElementById('three').innerText !== "O") {
            document.getElementById('threeBox').style.zIndex = "15"
            document.getElementById('buttonThree').style.backgroundColor = "grey"
            document.getElementById('buttonThree').style.opacity = ".5"
        }
        if (document.getElementById('four').innerText !== "X" || document.getElementById('four').innerText !== "O") {
            document.getElementById('fourBox').style.zIndex = "15"
            document.getElementById('buttonFour').style.backgroundColor = "grey"
            document.getElementById('buttonFour').style.opacity = ".5"
        }
        if (document.getElementById('five').innerText !== "X" || document.getElementById('five').innerText !== "O") {
            document.getElementById('fiveBox').style.zIndex = "15"
            document.getElementById('buttonFive').style.backgroundColor = "grey"
            document.getElementById('buttonFive').style.opacity = ".5"
        }
        if (document.getElementById('six').innerText !== "X" || document.getElementById('six').innerText !== "O") {
            document.getElementById('sixBox').style.zIndex = "15"
            document.getElementById('buttonSix').style.backgroundColor = "grey"
            document.getElementById('buttonSix').style.opacity = ".5"
        }
        if (document.getElementById('seven').innerText !== "X" || document.getElementById('seven').innerText !== "O") {
            document.getElementById('sevenBox').style.zIndex = "15"
            document.getElementById('buttonSeven').style.backgroundColor = "grey"
            document.getElementById('buttonSeven').style.opacity = ".5"
        }
        if (document.getElementById('eight').innerText !== "X" || document.getElementById('eight').innerText !== "O") {
            document.getElementById('eightBox').style.zIndex = "15"
            document.getElementById('buttonEight').style.backgroundColor = "grey"
            document.getElementById('buttonEight').style.opacity = ".5"
        }
        if (document.getElementById('nine').innerText !== "X" || document.getElementById('nine').innerText !== "O") {
            document.getElementById('nineBox').style.zIndex = "15"
            document.getElementById('buttonNine').style.backgroundColor = "grey"
            document.getElementById('buttonNine').style.opacity = ".5"
        }

        document.getElementById('buttonFour').style.zIndex = "14"
        document.getElementById('buttonFour').style.backgroundColor = "green"
        document.getElementById('buttonFour').style.opacity = ".5"

        document.getElementById('buttonFive').style.zIndex = "14"
        document.getElementById('buttonFive').style.backgroundColor = "green"
        document.getElementById('buttonFive').style.opacity = ".5"

        document.getElementById('buttonSix').style.zIndex = "14"
        document.getElementById('buttonSix').style.backgroundColor = "green"
        document.getElementById('buttonSix').style.opacity = ".5"
   } else if(document.getElementById('seven').innerText === document.getElementById('eight').innerText && document.getElementById('eight').innerText === document.getElementById('nine').innerText) {
        if(document.getElementById('sevenBox').style.zIndex === 12){
            document.getElementById('whoMove').innerText = "X has won!"
        } else {
            document.getElementById('whoMove').innerText = "O has won!"
        }

        if (document.getElementById('one').innerText !== "X" || document.getElementById('one').innerText !== "O") {
            document.getElementById('oneBox').style.zIndex = "15"
            document.getElementById('buttonOne').style.backgroundColor = "grey"
            document.getElementById('buttonOne').style.opacity = ".5"
        }
        if (document.getElementById('two').innerText !== "X" || document.getElementById('two').innerText !== "O") {
            document.getElementById('twoBox').style.zIndex = "15"
            document.getElementById('buttonTwo').style.backgroundColor = "grey"
            document.getElementById('buttonTwo').style.opacity = ".5"
        }
        if (document.getElementById('three').innerText !== "X" || document.getElementById('three').innerText !== "O") {
            document.getElementById('threeBox').style.zIndex = "15"
            document.getElementById('buttonThree').style.backgroundColor = "grey"
            document.getElementById('buttonThree').style.opacity = ".5"
        }
        if (document.getElementById('four').innerText !== "X" || document.getElementById('four').innerText !== "O") {
            document.getElementById('fourBox').style.zIndex = "15"
            document.getElementById('buttonFour').style.backgroundColor = "grey"
            document.getElementById('buttonFour').style.opacity = ".5"
        }
        if (document.getElementById('five').innerText !== "X" || document.getElementById('five').innerText !== "O") {
            document.getElementById('fiveBox').style.zIndex = "15"
            document.getElementById('buttonFive').style.backgroundColor = "grey"
            document.getElementById('buttonFive').style.opacity = ".5"
        }
        if (document.getElementById('six').innerText !== "X" || document.getElementById('six').innerText !== "O") {
            document.getElementById('sixBox').style.zIndex = "15"
            document.getElementById('buttonSix').style.backgroundColor = "grey"
            document.getElementById('buttonSix').style.opacity = ".5"
        }
        if (document.getElementById('seven').innerText !== "X" || document.getElementById('seven').innerText !== "O") {
            document.getElementById('sevenBox').style.zIndex = "15"
            document.getElementById('buttonSeven').style.backgroundColor = "grey"
            document.getElementById('buttonSeven').style.opacity = ".5"
        }
        if (document.getElementById('eight').innerText !== "X" || document.getElementById('eight').innerText !== "O") {
            document.getElementById('eightBox').style.zIndex = "15"
            document.getElementById('buttonEight').style.backgroundColor = "grey"
            document.getElementById('buttonEight').style.opacity = ".5"
        }
        if (document.getElementById('nine').innerText !== "X" || document.getElementById('nine').innerText !== "O") {
            document.getElementById('nineBox').style.zIndex = "15"
            document.getElementById('buttonNine').style.backgroundColor = "grey"
            document.getElementById('buttonNine').style.opacity = ".5"
        } 

        document.getElementById('buttonSeven').style.zIndex = "14"
        document.getElementById('buttonSeven').style.backgroundColor = "green"
        document.getElementById('buttonSeven').style.opacity = ".5"

        document.getElementById('buttonEight').style.zIndex = "14"
        document.getElementById('buttonEight').style.backgroundColor = "green"
        document.getElementById('buttonEight').style.opacity = ".5"

        document.getElementById('buttonNine').style.zIndex = "14"
        document.getElementById('buttonNine').style.backgroundColor = "green"
        document.getElementById('buttonNine').style.opacity = ".5"
    }else if(moveNumber === 10) { //TIE//
        document.getElementById('whoMove').innerText = "Tie"
        document.getElementById('buttonOne').style.zIndex = "14"
        document.getElementById('buttonOne').style.backgroundColor = "pink"
        document.getElementById('buttonOne').style.opacity = ".5"

        document.getElementById('buttonThree').style.zIndex = "14"
        document.getElementById('buttonThree').style.backgroundColor = "pink"
        document.getElementById('buttonThree').style.opacity = ".5"

        document.getElementById('buttonFive').style.zIndex = "14"
        document.getElementById('buttonFive').style.backgroundColor = "pink"
        document.getElementById('buttonFive').style.opacity = ".5"

        document.getElementById('buttonNine').style.zIndex = "14"
        document.getElementById('buttonNine').style.backgroundColor = "pink"
        document.getElementById('buttonNine').style.opacity = ".5"

        document.getElementById('buttonSeven').style.zIndex = "14"
        document.getElementById('buttonSeven').style.backgroundColor = "pink"
        document.getElementById('buttonSeven').style.opacity = ".5"
   }
   
    console.log(moveNumber)
}
function rowColThreeTwo() {
    if(moveNumber % 2 !== 0) {
        document.getElementById('eight').innerText = "X"
        document.getElementById('eightBox').style.zIndex = "12"
        document.getElementById('whoMove').innerText = "X has the move"
        moveNumber++
    } else {
        document.getElementById('eight').innerText = "O"
        document.getElementById('eightBox').style.zIndex = "13"
        document.getElementById('whoMove').innerText = "X has the move"
        moveNumber++
    }
    if(document.getElementById('one').innerText === document.getElementById('two').innerText && document.getElementById('two').innerText === document.getElementById('three').innerText) {
        if(document.getElementById('oneBox').style.zIndex === 12){
            document.getElementById('whoMove').innerText = "X has won!"
        } else {
            document.getElementById('whoMove').innerText = "O has won!"
        }
        document.getElementById('buttonOne').style.zIndex = "14"
        document.getElementById('buttonOne').style.backgroundColor = "green"
        document.getElementById('buttonOne').style.opacity = ".5"

        document.getElementById('buttonTwo').style.zIndex = "14"
        document.getElementById('buttonTwo').style.backgroundColor = "green"
        document.getElementById('buttonTwo').style.opacity = ".5"

        document.getElementById('buttonThree').style.zIndex = "14"
        document.getElementById('buttonThree').style.backgroundColor = "green"
        document.getElementById('buttonThree').style.opacity = ".5"
   } else if(document.getElementById('one').innerText === document.getElementById('five').innerText && document.getElementById('five').innerText === document.getElementById('nine').innerText){
        if(document.getElementById('oneBox').style.zIndex === 12){
            document.getElementById('whoMove').innerText = "X has won!"
        } else {
            document.getElementById('whoMove').innerText = "O has won!"
        }
        if (document.getElementById('one').innerText !== "X" || document.getElementById('one').innerText !== "O") {
            document.getElementById('oneBox').style.zIndex = "15"
            document.getElementById('buttonOne').style.backgroundColor = "grey"
            document.getElementById('buttonOne').style.opacity = ".5"
        }
        if (document.getElementById('two').innerText !== "X" || document.getElementById('two').innerText !== "O") {
            document.getElementById('twoBox').style.zIndex = "15"
            document.getElementById('buttonTwo').style.backgroundColor = "grey"
            document.getElementById('buttonTwo').style.opacity = ".5"
        }
        if (document.getElementById('three').innerText !== "X" || document.getElementById('three').innerText !== "O") {
            document.getElementById('threeBox').style.zIndex = "15"
            document.getElementById('buttonThree').style.backgroundColor = "grey"
            document.getElementById('buttonThree').style.opacity = ".5"
        }
        if (document.getElementById('four').innerText !== "X" || document.getElementById('four').innerText !== "O") {
            document.getElementById('fourBox').style.zIndex = "15"
            document.getElementById('buttonFour').style.backgroundColor = "grey"
            document.getElementById('buttonFour').style.opacity = ".5"
        }
        if (document.getElementById('five').innerText !== "X" || document.getElementById('five').innerText !== "O") {
            document.getElementById('fiveBox').style.zIndex = "15"
            document.getElementById('buttonFive').style.backgroundColor = "grey"
            document.getElementById('buttonFive').style.opacity = ".5"
        }
        if (document.getElementById('six').innerText !== "X" || document.getElementById('six').innerText !== "O") {
            document.getElementById('sixBox').style.zIndex = "15"
            document.getElementById('buttonSix').style.backgroundColor = "grey"
            document.getElementById('buttonSix').style.opacity = ".5"
        }
        if (document.getElementById('seven').innerText !== "X" || document.getElementById('seven').innerText !== "O") {
            document.getElementById('sevenBox').style.zIndex = "15"
            document.getElementById('buttonSeven').style.backgroundColor = "grey"
            document.getElementById('buttonSeven').style.opacity = ".5"
        }
        if (document.getElementById('eight').innerText !== "X" || document.getElementById('eight').innerText !== "O") {
            document.getElementById('eightBox').style.zIndex = "15"
            document.getElementById('buttonEight').style.backgroundColor = "grey"
            document.getElementById('buttonEight').style.opacity = ".5"
        }
        if (document.getElementById('nine').innerText !== "X" || document.getElementById('nine').innerText !== "O") {
            document.getElementById('nineBox').style.zIndex = "15"
            document.getElementById('buttonNine').style.backgroundColor = "grey"
            document.getElementById('buttonNine').style.opacity = ".5"
        }
        document.getElementById('buttonOne').style.zIndex = "14"
        document.getElementById('buttonOne').style.backgroundColor = "green"
        document.getElementById('buttonOne').style.opacity = ".5"

        document.getElementById('buttonFive').style.zIndex = "14"
        document.getElementById('buttonFive').style.backgroundColor = "green"
        document.getElementById('buttonFive').style.opacity = ".5"

        document.getElementById('buttonNine').style.zIndex = "14"
        document.getElementById('buttonNine').style.backgroundColor = "green"
        document.getElementById('buttonNine').style.opacity = ".5"



   } else if(document.getElementById('one').innerText === document.getElementById('four').innerText && document.getElementById('four').innerText === document.getElementById('seven').innerText){
        if(document.getElementById('oneBox').style.zIndex === 12){
            document.getElementById('whoMove').innerText = "X has won!"
        } else {
            document.getElementById('whoMove').innerText = "O has won!"
        }

        if (document.getElementById('one').innerText !== "X" || document.getElementById('one').innerText !== "O") {
            document.getElementById('oneBox').style.zIndex = "15"
            document.getElementById('buttonOne').style.backgroundColor = "grey"
            document.getElementById('buttonOne').style.opacity = ".5"
        }
        if (document.getElementById('two').innerText !== "X" || document.getElementById('two').innerText !== "O") {
            document.getElementById('twoBox').style.zIndex = "15"
            document.getElementById('buttonTwo').style.backgroundColor = "grey"
            document.getElementById('buttonTwo').style.opacity = ".5"
        }
        if (document.getElementById('three').innerText !== "X" || document.getElementById('three').innerText !== "O") {
            document.getElementById('threeBox').style.zIndex = "15"
            document.getElementById('buttonThree').style.backgroundColor = "grey"
            document.getElementById('buttonThree').style.opacity = ".5"
        }
        if (document.getElementById('four').innerText !== "X" || document.getElementById('four').innerText !== "O") {
            document.getElementById('fourBox').style.zIndex = "15"
            document.getElementById('buttonFour').style.backgroundColor = "grey"
            document.getElementById('buttonFour').style.opacity = ".5"
        }
        if (document.getElementById('five').innerText !== "X" || document.getElementById('five').innerText !== "O") {
            document.getElementById('fiveBox').style.zIndex = "15"
            document.getElementById('buttonFive').style.backgroundColor = "grey"
            document.getElementById('buttonFive').style.opacity = ".5"
        }
        if (document.getElementById('six').innerText !== "X" || document.getElementById('six').innerText !== "O") {
            document.getElementById('sixBox').style.zIndex = "15"
            document.getElementById('buttonSix').style.backgroundColor = "grey"
            document.getElementById('buttonSix').style.opacity = ".5"
        }
        if (document.getElementById('seven').innerText !== "X" || document.getElementById('seven').innerText !== "O") {
            document.getElementById('sevenBox').style.zIndex = "15"
            document.getElementById('buttonSeven').style.backgroundColor = "grey"
            document.getElementById('buttonSeven').style.opacity = ".5"
        }
        if (document.getElementById('eight').innerText !== "X" || document.getElementById('eight').innerText !== "O") {
            document.getElementById('eightBox').style.zIndex = "15"
            document.getElementById('buttonEight').style.backgroundColor = "grey"
            document.getElementById('buttonEight').style.opacity = ".5"
        }
        if (document.getElementById('nine').innerText !== "X" || document.getElementById('nine').innerText !== "O") {
            document.getElementById('nineBox').style.zIndex = "15"
            document.getElementById('buttonNine').style.backgroundColor = "grey"
            document.getElementById('buttonNine').style.opacity = ".5"
        }

        document.getElementById('buttonOne').style.zIndex = "14"
        document.getElementById('buttonOne').style.backgroundColor = "green"
        document.getElementById('buttonOne').style.opacity = ".5"

        document.getElementById('buttonFour').style.zIndex = "14"
        document.getElementById('buttonFour').style.backgroundColor = "green"
        document.getElementById('buttonFour').style.opacity = ".5"

        document.getElementById('buttonSeven').style.zIndex = "14"
        document.getElementById('buttonSeven').style.backgroundColor = "green"
        document.getElementById('buttonSeven').style.opacity = ".5"
   } else if(document.getElementById('two').innerText === document.getElementById('five').innerText && document.getElementById('five').innerText === document.getElementById('eight').innerText){
        if(document.getElementById('twoBox').style.zIndex === 12){
            document.getElementById('whoMove').innerText = "X has won!"
        } else {
            document.getElementById('whoMove').innerText = "O has won!"
        }

        if (document.getElementById('one').innerText !== "X" || document.getElementById('one').innerText !== "O") {
            document.getElementById('oneBox').style.zIndex = "15"
            document.getElementById('buttonOne').style.backgroundColor = "grey"
            document.getElementById('buttonOne').style.opacity = ".5"
        }
        if (document.getElementById('two').innerText !== "X" || document.getElementById('two').innerText !== "O") {
            document.getElementById('twoBox').style.zIndex = "15"
            document.getElementById('buttonTwo').style.backgroundColor = "grey"
            document.getElementById('buttonTwo').style.opacity = ".5"
        }
        if (document.getElementById('three').innerText !== "X" || document.getElementById('three').innerText !== "O") {
            document.getElementById('threeBox').style.zIndex = "15"
            document.getElementById('buttonThree').style.backgroundColor = "grey"
            document.getElementById('buttonThree').style.opacity = ".5"
        }
        if (document.getElementById('four').innerText !== "X" || document.getElementById('four').innerText !== "O") {
            document.getElementById('fourBox').style.zIndex = "15"
            document.getElementById('buttonFour').style.backgroundColor = "grey"
            document.getElementById('buttonFour').style.opacity = ".5"
        }
        if (document.getElementById('five').innerText !== "X" || document.getElementById('five').innerText !== "O") {
            document.getElementById('fiveBox').style.zIndex = "15"
            document.getElementById('buttonFive').style.backgroundColor = "grey"
            document.getElementById('buttonFive').style.opacity = ".5"
        }
        if (document.getElementById('six').innerText !== "X" || document.getElementById('six').innerText !== "O") {
            document.getElementById('sixBox').style.zIndex = "15"
            document.getElementById('buttonSix').style.backgroundColor = "grey"
            document.getElementById('buttonSix').style.opacity = ".5"
        }
        if (document.getElementById('seven').innerText !== "X" || document.getElementById('seven').innerText !== "O") {
            document.getElementById('sevenBox').style.zIndex = "15"
            document.getElementById('buttonSeven').style.backgroundColor = "grey"
            document.getElementById('buttonSeven').style.opacity = ".5"
        }
        if (document.getElementById('eight').innerText !== "X" || document.getElementById('eight').innerText !== "O") {
            document.getElementById('eightBox').style.zIndex = "15"
            document.getElementById('buttonEight').style.backgroundColor = "grey"
            document.getElementById('buttonEight').style.opacity = ".5"
        }
        if (document.getElementById('nine').innerText !== "X" || document.getElementById('nine').innerText !== "O") {
            document.getElementById('nineBox').style.zIndex = "15"
            document.getElementById('buttonNine').style.backgroundColor = "grey"
            document.getElementById('buttonNine').style.opacity = ".5"
        }

        document.getElementById('buttonTwo').style.zIndex = "14"
        document.getElementById('buttonTwo').style.backgroundColor = "green"
        document.getElementById('buttonTwo').style.opacity = ".5"

        document.getElementById('buttonFive').style.zIndex = "14"
        document.getElementById('buttonFive').style.backgroundColor = "green"
        document.getElementById('buttonFive').style.opacity = ".5"

        document.getElementById('buttonEight').style.zIndex = "14"
        document.getElementById('buttonEight').style.backgroundColor = "green"
        document.getElementById('buttonEight').style.opacity = ".5"
   } else if(document.getElementById('three').innerText === document.getElementById('six').innerText && document.getElementById('six').innerText === document.getElementById('nine').innerText) {
        if(document.getElementById('twoBox').style.zIndex === 12){
            document.getElementById('whoMove').innerText = "X has won!"
        } else {
            document.getElementById('whoMove').innerText = "O has won!"
        }

        if (document.getElementById('one').innerText !== "X" || document.getElementById('one').innerText !== "O") {
            document.getElementById('oneBox').style.zIndex = "15"
            document.getElementById('buttonOne').style.backgroundColor = "grey"
            document.getElementById('buttonOne').style.opacity = ".5"
        }
        if (document.getElementById('two').innerText !== "X" || document.getElementById('two').innerText !== "O") {
            document.getElementById('twoBox').style.zIndex = "15"
            document.getElementById('buttonTwo').style.backgroundColor = "grey"
            document.getElementById('buttonTwo').style.opacity = ".5"
        }
        if (document.getElementById('three').innerText !== "X" || document.getElementById('three').innerText !== "O") {
            document.getElementById('threeBox').style.zIndex = "15"
            document.getElementById('buttonThree').style.backgroundColor = "grey"
            document.getElementById('buttonThree').style.opacity = ".5"
        }
        if (document.getElementById('four').innerText !== "X" || document.getElementById('four').innerText !== "O") {
            document.getElementById('fourBox').style.zIndex = "15"
            document.getElementById('buttonFour').style.backgroundColor = "grey"
            document.getElementById('buttonFour').style.opacity = ".5"
        }
        if (document.getElementById('five').innerText !== "X" || document.getElementById('five').innerText !== "O") {
            document.getElementById('fiveBox').style.zIndex = "15"
            document.getElementById('buttonFive').style.backgroundColor = "grey"
            document.getElementById('buttonFive').style.opacity = ".5"
        }
        if (document.getElementById('six').innerText !== "X" || document.getElementById('six').innerText !== "O") {
            document.getElementById('sixBox').style.zIndex = "15"
            document.getElementById('buttonSix').style.backgroundColor = "grey"
            document.getElementById('buttonSix').style.opacity = ".5"
        }
        if (document.getElementById('seven').innerText !== "X" || document.getElementById('seven').innerText !== "O") {
            document.getElementById('sevenBox').style.zIndex = "15"
            document.getElementById('buttonSeven').style.backgroundColor = "grey"
            document.getElementById('buttonSeven').style.opacity = ".5"
        }
        if (document.getElementById('eight').innerText !== "X" || document.getElementById('eight').innerText !== "O") {
            document.getElementById('eightBox').style.zIndex = "15"
            document.getElementById('buttonEight').style.backgroundColor = "grey"
            document.getElementById('buttonEight').style.opacity = ".5"
        }
        if (document.getElementById('nine').innerText !== "X" || document.getElementById('nine').innerText !== "O") {
            document.getElementById('nineBox').style.zIndex = "15"
            document.getElementById('buttonNine').style.backgroundColor = "grey"
            document.getElementById('buttonNine').style.opacity = ".5"
        }

        document.getElementById('buttonThree').style.zIndex = "14"
        document.getElementById('buttonThree').style.backgroundColor = "green"
        document.getElementById('buttonThree').style.opacity = ".5"

        document.getElementById('buttonSix').style.zIndex = "14"
        document.getElementById('buttonSix').style.backgroundColor = "green"
        document.getElementById('buttonSix').style.opacity = ".5"

        document.getElementById('buttonNine').style.zIndex = "14"
        document.getElementById('buttonNine').style.backgroundColor = "green"
        document.getElementById('buttonNine').style.opacity = ".5"
   } else if(document.getElementById('three').innerText === document.getElementById('five').innerText && document.getElementById('five').innerText === document.getElementById('seven').innerText){
        if(document.getElementById('threeBox').style.zIndex === 12){
            document.getElementById('whoMove').innerText = "X has won!"
        } else {
            document.getElementById('whoMove').innerText = "O has won!"
        }

        if (document.getElementById('one').innerText !== "X" || document.getElementById('one').innerText !== "O") {
            document.getElementById('oneBox').style.zIndex = "15"
            document.getElementById('buttonOne').style.backgroundColor = "grey"
            document.getElementById('buttonOne').style.opacity = ".5"
        }
        if (document.getElementById('two').innerText !== "X" || document.getElementById('two').innerText !== "O") {
            document.getElementById('twoBox').style.zIndex = "15"
            document.getElementById('buttonTwo').style.backgroundColor = "grey"
            document.getElementById('buttonTwo').style.opacity = ".5"
        }
        if (document.getElementById('three').innerText !== "X" || document.getElementById('three').innerText !== "O") {
            document.getElementById('threeBox').style.zIndex = "15"
            document.getElementById('buttonThree').style.backgroundColor = "grey"
            document.getElementById('buttonThree').style.opacity = ".5"
        }
        if (document.getElementById('four').innerText !== "X" || document.getElementById('four').innerText !== "O") {
            document.getElementById('fourBox').style.zIndex = "15"
            document.getElementById('buttonFour').style.backgroundColor = "grey"
            document.getElementById('buttonFour').style.opacity = ".5"
        }
        if (document.getElementById('five').innerText !== "X" || document.getElementById('five').innerText !== "O") {
            document.getElementById('fiveBox').style.zIndex = "15"
            document.getElementById('buttonFive').style.backgroundColor = "grey"
            document.getElementById('buttonFive').style.opacity = ".5"
        }
        if (document.getElementById('six').innerText !== "X" || document.getElementById('six').innerText !== "O") {
            document.getElementById('sixBox').style.zIndex = "15"
            document.getElementById('buttonSix').style.backgroundColor = "grey"
            document.getElementById('buttonSix').style.opacity = ".5"
        }
        if (document.getElementById('seven').innerText !== "X" || document.getElementById('seven').innerText !== "O") {
            document.getElementById('sevenBox').style.zIndex = "15"
            document.getElementById('buttonSeven').style.backgroundColor = "grey"
            document.getElementById('buttonSeven').style.opacity = ".5"
        }
        if (document.getElementById('eight').innerText !== "X" || document.getElementById('eight').innerText !== "O") {
            document.getElementById('eightBox').style.zIndex = "15"
            document.getElementById('buttonEight').style.backgroundColor = "grey"
            document.getElementById('buttonEight').style.opacity = ".5"
        }
        if (document.getElementById('nine').innerText !== "X" || document.getElementById('nine').innerText !== "O") {
            document.getElementById('nineBox').style.zIndex = "15"
            document.getElementById('buttonNine').style.backgroundColor = "grey"
            document.getElementById('buttonNine').style.opacity = ".5"
        }

        document.getElementById('buttonThree').style.zIndex = "14"
        document.getElementById('buttonThree').style.backgroundColor = "green"
        document.getElementById('buttonThree').style.opacity = ".5"

        document.getElementById('buttonFive').style.zIndex = "14"
        document.getElementById('buttonFive').style.backgroundColor = "green"
        document.getElementById('buttonFive').style.opacity = ".5"

        document.getElementById('buttonSeven').style.zIndex = "14"
        document.getElementById('buttonSeven').style.backgroundColor = "green"
        document.getElementById('buttonSeven').style.opacity = ".5"
   } else if(document.getElementById('four').innerText === document.getElementById('five').innerText && document.getElementById('five').innerText === document.getElementById('six').innerText) {
        if(document.getElementById('fourBox').style.zIndex === 12){
            document.getElementById('whoMove').innerText = "X has won!"
        } else {
            document.getElementById('whoMove').innerText = "O has won!"
        }

        if (document.getElementById('one').innerText !== "X" || document.getElementById('one').innerText !== "O") {
            document.getElementById('oneBox').style.zIndex = "15"
            document.getElementById('buttonOne').style.backgroundColor = "grey"
            document.getElementById('buttonOne').style.opacity = ".5"
        }
        if (document.getElementById('two').innerText !== "X" || document.getElementById('two').innerText !== "O") {
            document.getElementById('twoBox').style.zIndex = "15"
            document.getElementById('buttonTwo').style.backgroundColor = "grey"
            document.getElementById('buttonTwo').style.opacity = ".5"
        }
        if (document.getElementById('three').innerText !== "X" || document.getElementById('three').innerText !== "O") {
            document.getElementById('threeBox').style.zIndex = "15"
            document.getElementById('buttonThree').style.backgroundColor = "grey"
            document.getElementById('buttonThree').style.opacity = ".5"
        }
        if (document.getElementById('four').innerText !== "X" || document.getElementById('four').innerText !== "O") {
            document.getElementById('fourBox').style.zIndex = "15"
            document.getElementById('buttonFour').style.backgroundColor = "grey"
            document.getElementById('buttonFour').style.opacity = ".5"
        }
        if (document.getElementById('five').innerText !== "X" || document.getElementById('five').innerText !== "O") {
            document.getElementById('fiveBox').style.zIndex = "15"
            document.getElementById('buttonFive').style.backgroundColor = "grey"
            document.getElementById('buttonFive').style.opacity = ".5"
        }
        if (document.getElementById('six').innerText !== "X" || document.getElementById('six').innerText !== "O") {
            document.getElementById('sixBox').style.zIndex = "15"
            document.getElementById('buttonSix').style.backgroundColor = "grey"
            document.getElementById('buttonSix').style.opacity = ".5"
        }
        if (document.getElementById('seven').innerText !== "X" || document.getElementById('seven').innerText !== "O") {
            document.getElementById('sevenBox').style.zIndex = "15"
            document.getElementById('buttonSeven').style.backgroundColor = "grey"
            document.getElementById('buttonSeven').style.opacity = ".5"
        }
        if (document.getElementById('eight').innerText !== "X" || document.getElementById('eight').innerText !== "O") {
            document.getElementById('eightBox').style.zIndex = "15"
            document.getElementById('buttonEight').style.backgroundColor = "grey"
            document.getElementById('buttonEight').style.opacity = ".5"
        }
        if (document.getElementById('nine').innerText !== "X" || document.getElementById('nine').innerText !== "O") {
            document.getElementById('nineBox').style.zIndex = "15"
            document.getElementById('buttonNine').style.backgroundColor = "grey"
            document.getElementById('buttonNine').style.opacity = ".5"
        }

        document.getElementById('buttonFour').style.zIndex = "14"
        document.getElementById('buttonFour').style.backgroundColor = "green"
        document.getElementById('buttonFour').style.opacity = ".5"

        document.getElementById('buttonFive').style.zIndex = "14"
        document.getElementById('buttonFive').style.backgroundColor = "green"
        document.getElementById('buttonFive').style.opacity = ".5"

        document.getElementById('buttonSix').style.zIndex = "14"
        document.getElementById('buttonSix').style.backgroundColor = "green"
        document.getElementById('buttonSix').style.opacity = ".5"
   } else if(document.getElementById('seven').innerText === document.getElementById('eight').innerText && document.getElementById('eight').innerText === document.getElementById('nine').innerText) {
        if(document.getElementById('sevenBox').style.zIndex === 12){
            document.getElementById('whoMove').innerText = "X has won!"
        } else {
            document.getElementById('whoMove').innerText = "O has won!"
        }

        if (document.getElementById('one').innerText !== "X" || document.getElementById('one').innerText !== "O") {
            document.getElementById('oneBox').style.zIndex = "15"
            document.getElementById('buttonOne').style.backgroundColor = "grey"
            document.getElementById('buttonOne').style.opacity = ".5"
        }
        if (document.getElementById('two').innerText !== "X" || document.getElementById('two').innerText !== "O") {
            document.getElementById('twoBox').style.zIndex = "15"
            document.getElementById('buttonTwo').style.backgroundColor = "grey"
            document.getElementById('buttonTwo').style.opacity = ".5"
        }
        if (document.getElementById('three').innerText !== "X" || document.getElementById('three').innerText !== "O") {
            document.getElementById('threeBox').style.zIndex = "15"
            document.getElementById('buttonThree').style.backgroundColor = "grey"
            document.getElementById('buttonThree').style.opacity = ".5"
        }
        if (document.getElementById('four').innerText !== "X" || document.getElementById('four').innerText !== "O") {
            document.getElementById('fourBox').style.zIndex = "15"
            document.getElementById('buttonFour').style.backgroundColor = "grey"
            document.getElementById('buttonFour').style.opacity = ".5"
        }
        if (document.getElementById('five').innerText !== "X" || document.getElementById('five').innerText !== "O") {
            document.getElementById('fiveBox').style.zIndex = "15"
            document.getElementById('buttonFive').style.backgroundColor = "grey"
            document.getElementById('buttonFive').style.opacity = ".5"
        }
        if (document.getElementById('six').innerText !== "X" || document.getElementById('six').innerText !== "O") {
            document.getElementById('sixBox').style.zIndex = "15"
            document.getElementById('buttonSix').style.backgroundColor = "grey"
            document.getElementById('buttonSix').style.opacity = ".5"
        }
        if (document.getElementById('seven').innerText !== "X" || document.getElementById('seven').innerText !== "O") {
            document.getElementById('sevenBox').style.zIndex = "15"
            document.getElementById('buttonSeven').style.backgroundColor = "grey"
            document.getElementById('buttonSeven').style.opacity = ".5"
        }
        if (document.getElementById('eight').innerText !== "X" || document.getElementById('eight').innerText !== "O") {
            document.getElementById('eightBox').style.zIndex = "15"
            document.getElementById('buttonEight').style.backgroundColor = "grey"
            document.getElementById('buttonEight').style.opacity = ".5"
        }
        if (document.getElementById('nine').innerText !== "X" || document.getElementById('nine').innerText !== "O") {
            document.getElementById('nineBox').style.zIndex = "15"
            document.getElementById('buttonNine').style.backgroundColor = "grey"
            document.getElementById('buttonNine').style.opacity = ".5"
        } 

        document.getElementById('buttonSeven').style.zIndex = "14"
        document.getElementById('buttonSeven').style.backgroundColor = "green"
        document.getElementById('buttonSeven').style.opacity = ".5"

        document.getElementById('buttonEight').style.zIndex = "14"
        document.getElementById('buttonEight').style.backgroundColor = "green"
        document.getElementById('buttonEight').style.opacity = ".5"

        document.getElementById('buttonNine').style.zIndex = "14"
        document.getElementById('buttonNine').style.backgroundColor = "green"
        document.getElementById('buttonNine').style.opacity = ".5"
    }else if(moveNumber === 10) { //TIE//
        document.getElementById('whoMove').innerText = "Tie"
        document.getElementById('buttonOne').style.zIndex = "14"
        document.getElementById('buttonOne').style.backgroundColor = "pink"
        document.getElementById('buttonOne').style.opacity = ".5"

        document.getElementById('buttonThree').style.zIndex = "14"
        document.getElementById('buttonThree').style.backgroundColor = "pink"
        document.getElementById('buttonThree').style.opacity = ".5"

        document.getElementById('buttonFive').style.zIndex = "14"
        document.getElementById('buttonFive').style.backgroundColor = "pink"
        document.getElementById('buttonFive').style.opacity = ".5"

        document.getElementById('buttonNine').style.zIndex = "14"
        document.getElementById('buttonNine').style.backgroundColor = "pink"
        document.getElementById('buttonNine').style.opacity = ".5"

        document.getElementById('buttonSeven').style.zIndex = "14"
        document.getElementById('buttonSeven').style.backgroundColor = "pink"
        document.getElementById('buttonSeven').style.opacity = ".5"
   }
   
    console.log(moveNumber)
}
function rowColThreeThree() {
    if(moveNumber % 2 !== 0) {
        document.getElementById('nine').innerText = "X"
        document.getElementById('nineBox').style.zIndex = "12"
        document.getElementById('whoMove').innerText = "O has the move"
        moveNumber++
    } else {
        document.getElementById('nine').innerText = "O"
        document.getElementById('nineBox').style.zIndex = "13"
        document.getElementById('whoMove').innerText = "X has the move"
        moveNumber++
    }
    if(document.getElementById('one').innerText === document.getElementById('two').innerText && document.getElementById('two').innerText === document.getElementById('three').innerText) {
        if(document.getElementById('oneBox').style.zIndex === 12){
            document.getElementById('whoMove').innerText = "X has won!"
        } else {
            document.getElementById('whoMove').innerText = "O has won!"
        }
        document.getElementById('buttonOne').style.zIndex = "14"
        document.getElementById('buttonOne').style.backgroundColor = "green"
        document.getElementById('buttonOne').style.opacity = ".5"

        document.getElementById('buttonTwo').style.zIndex = "14"
        document.getElementById('buttonTwo').style.backgroundColor = "green"
        document.getElementById('buttonTwo').style.opacity = ".5"

        document.getElementById('buttonThree').style.zIndex = "14"
        document.getElementById('buttonThree').style.backgroundColor = "green"
        document.getElementById('buttonThree').style.opacity = ".5"
   } else if(document.getElementById('one').innerText === document.getElementById('five').innerText && document.getElementById('five').innerText === document.getElementById('nine').innerText){
        if(document.getElementById('oneBox').style.zIndex === 12){
            document.getElementById('whoMove').innerText = "X has won!"
        } else {
            document.getElementById('whoMove').innerText = "O has won!"
        }
        if (document.getElementById('one').innerText !== "X" || document.getElementById('one').innerText !== "O") {
            document.getElementById('oneBox').style.zIndex = "15"
            document.getElementById('buttonOne').style.backgroundColor = "grey"
            document.getElementById('buttonOne').style.opacity = ".5"
        }
        if (document.getElementById('two').innerText !== "X" || document.getElementById('two').innerText !== "O") {
            document.getElementById('twoBox').style.zIndex = "15"
            document.getElementById('buttonTwo').style.backgroundColor = "grey"
            document.getElementById('buttonTwo').style.opacity = ".5"
        }
        if (document.getElementById('three').innerText !== "X" || document.getElementById('three').innerText !== "O") {
            document.getElementById('threeBox').style.zIndex = "15"
            document.getElementById('buttonThree').style.backgroundColor = "grey"
            document.getElementById('buttonThree').style.opacity = ".5"
        }
        if (document.getElementById('four').innerText !== "X" || document.getElementById('four').innerText !== "O") {
            document.getElementById('fourBox').style.zIndex = "15"
            document.getElementById('buttonFour').style.backgroundColor = "grey"
            document.getElementById('buttonFour').style.opacity = ".5"
        }
        if (document.getElementById('five').innerText !== "X" || document.getElementById('five').innerText !== "O") {
            document.getElementById('fiveBox').style.zIndex = "15"
            document.getElementById('buttonFive').style.backgroundColor = "grey"
            document.getElementById('buttonFive').style.opacity = ".5"
        }
        if (document.getElementById('six').innerText !== "X" || document.getElementById('six').innerText !== "O") {
            document.getElementById('sixBox').style.zIndex = "15"
            document.getElementById('buttonSix').style.backgroundColor = "grey"
            document.getElementById('buttonSix').style.opacity = ".5"
        }
        if (document.getElementById('seven').innerText !== "X" || document.getElementById('seven').innerText !== "O") {
            document.getElementById('sevenBox').style.zIndex = "15"
            document.getElementById('buttonSeven').style.backgroundColor = "grey"
            document.getElementById('buttonSeven').style.opacity = ".5"
        }
        if (document.getElementById('eight').innerText !== "X" || document.getElementById('eight').innerText !== "O") {
            document.getElementById('eightBox').style.zIndex = "15"
            document.getElementById('buttonEight').style.backgroundColor = "grey"
            document.getElementById('buttonEight').style.opacity = ".5"
        }
        if (document.getElementById('nine').innerText !== "X" || document.getElementById('nine').innerText !== "O") {
            document.getElementById('nineBox').style.zIndex = "15"
            document.getElementById('buttonNine').style.backgroundColor = "grey"
            document.getElementById('buttonNine').style.opacity = ".5"
        }
        document.getElementById('buttonOne').style.zIndex = "14"
        document.getElementById('buttonOne').style.backgroundColor = "green"
        document.getElementById('buttonOne').style.opacity = ".5"

        document.getElementById('buttonFive').style.zIndex = "14"
        document.getElementById('buttonFive').style.backgroundColor = "green"
        document.getElementById('buttonFive').style.opacity = ".5"

        document.getElementById('buttonNine').style.zIndex = "14"
        document.getElementById('buttonNine').style.backgroundColor = "green"
        document.getElementById('buttonNine').style.opacity = ".5"



   } else if(document.getElementById('one').innerText === document.getElementById('four').innerText && document.getElementById('four').innerText === document.getElementById('seven').innerText){
        if(document.getElementById('oneBox').style.zIndex === 12){
            document.getElementById('whoMove').innerText = "X has won!"
        } else {
            document.getElementById('whoMove').innerText = "O has won!"
        }

        if (document.getElementById('one').innerText !== "X" || document.getElementById('one').innerText !== "O") {
            document.getElementById('oneBox').style.zIndex = "15"
            document.getElementById('buttonOne').style.backgroundColor = "grey"
            document.getElementById('buttonOne').style.opacity = ".5"
        }
        if (document.getElementById('two').innerText !== "X" || document.getElementById('two').innerText !== "O") {
            document.getElementById('twoBox').style.zIndex = "15"
            document.getElementById('buttonTwo').style.backgroundColor = "grey"
            document.getElementById('buttonTwo').style.opacity = ".5"
        }
        if (document.getElementById('three').innerText !== "X" || document.getElementById('three').innerText !== "O") {
            document.getElementById('threeBox').style.zIndex = "15"
            document.getElementById('buttonThree').style.backgroundColor = "grey"
            document.getElementById('buttonThree').style.opacity = ".5"
        }
        if (document.getElementById('four').innerText !== "X" || document.getElementById('four').innerText !== "O") {
            document.getElementById('fourBox').style.zIndex = "15"
            document.getElementById('buttonFour').style.backgroundColor = "grey"
            document.getElementById('buttonFour').style.opacity = ".5"
        }
        if (document.getElementById('five').innerText !== "X" || document.getElementById('five').innerText !== "O") {
            document.getElementById('fiveBox').style.zIndex = "15"
            document.getElementById('buttonFive').style.backgroundColor = "grey"
            document.getElementById('buttonFive').style.opacity = ".5"
        }
        if (document.getElementById('six').innerText !== "X" || document.getElementById('six').innerText !== "O") {
            document.getElementById('sixBox').style.zIndex = "15"
            document.getElementById('buttonSix').style.backgroundColor = "grey"
            document.getElementById('buttonSix').style.opacity = ".5"
        }
        if (document.getElementById('seven').innerText !== "X" || document.getElementById('seven').innerText !== "O") {
            document.getElementById('sevenBox').style.zIndex = "15"
            document.getElementById('buttonSeven').style.backgroundColor = "grey"
            document.getElementById('buttonSeven').style.opacity = ".5"
        }
        if (document.getElementById('eight').innerText !== "X" || document.getElementById('eight').innerText !== "O") {
            document.getElementById('eightBox').style.zIndex = "15"
            document.getElementById('buttonEight').style.backgroundColor = "grey"
            document.getElementById('buttonEight').style.opacity = ".5"
        }
        if (document.getElementById('nine').innerText !== "X" || document.getElementById('nine').innerText !== "O") {
            document.getElementById('nineBox').style.zIndex = "15"
            document.getElementById('buttonNine').style.backgroundColor = "grey"
            document.getElementById('buttonNine').style.opacity = ".5"
        }

        document.getElementById('buttonOne').style.zIndex = "14"
        document.getElementById('buttonOne').style.backgroundColor = "green"
        document.getElementById('buttonOne').style.opacity = ".5"

        document.getElementById('buttonFour').style.zIndex = "14"
        document.getElementById('buttonFour').style.backgroundColor = "green"
        document.getElementById('buttonFour').style.opacity = ".5"

        document.getElementById('buttonSeven').style.zIndex = "14"
        document.getElementById('buttonSeven').style.backgroundColor = "green"
        document.getElementById('buttonSeven').style.opacity = ".5"
   } else if(document.getElementById('two').innerText === document.getElementById('five').innerText && document.getElementById('five').innerText === document.getElementById('eight').innerText){
        if(document.getElementById('twoBox').style.zIndex === 12){
            document.getElementById('whoMove').innerText = "X has won!"
        } else {
            document.getElementById('whoMove').innerText = "O has won!"
        }

        if (document.getElementById('one').innerText !== "X" || document.getElementById('one').innerText !== "O") {
            document.getElementById('oneBox').style.zIndex = "15"
            document.getElementById('buttonOne').style.backgroundColor = "grey"
            document.getElementById('buttonOne').style.opacity = ".5"
        }
        if (document.getElementById('two').innerText !== "X" || document.getElementById('two').innerText !== "O") {
            document.getElementById('twoBox').style.zIndex = "15"
            document.getElementById('buttonTwo').style.backgroundColor = "grey"
            document.getElementById('buttonTwo').style.opacity = ".5"
        }
        if (document.getElementById('three').innerText !== "X" || document.getElementById('three').innerText !== "O") {
            document.getElementById('threeBox').style.zIndex = "15"
            document.getElementById('buttonThree').style.backgroundColor = "grey"
            document.getElementById('buttonThree').style.opacity = ".5"
        }
        if (document.getElementById('four').innerText !== "X" || document.getElementById('four').innerText !== "O") {
            document.getElementById('fourBox').style.zIndex = "15"
            document.getElementById('buttonFour').style.backgroundColor = "grey"
            document.getElementById('buttonFour').style.opacity = ".5"
        }
        if (document.getElementById('five').innerText !== "X" || document.getElementById('five').innerText !== "O") {
            document.getElementById('fiveBox').style.zIndex = "15"
            document.getElementById('buttonFive').style.backgroundColor = "grey"
            document.getElementById('buttonFive').style.opacity = ".5"
        }
        if (document.getElementById('six').innerText !== "X" || document.getElementById('six').innerText !== "O") {
            document.getElementById('sixBox').style.zIndex = "15"
            document.getElementById('buttonSix').style.backgroundColor = "grey"
            document.getElementById('buttonSix').style.opacity = ".5"
        }
        if (document.getElementById('seven').innerText !== "X" || document.getElementById('seven').innerText !== "O") {
            document.getElementById('sevenBox').style.zIndex = "15"
            document.getElementById('buttonSeven').style.backgroundColor = "grey"
            document.getElementById('buttonSeven').style.opacity = ".5"
        }
        if (document.getElementById('eight').innerText !== "X" || document.getElementById('eight').innerText !== "O") {
            document.getElementById('eightBox').style.zIndex = "15"
            document.getElementById('buttonEight').style.backgroundColor = "grey"
            document.getElementById('buttonEight').style.opacity = ".5"
        }
        if (document.getElementById('nine').innerText !== "X" || document.getElementById('nine').innerText !== "O") {
            document.getElementById('nineBox').style.zIndex = "15"
            document.getElementById('buttonNine').style.backgroundColor = "grey"
            document.getElementById('buttonNine').style.opacity = ".5"
        }

        document.getElementById('buttonTwo').style.zIndex = "14"
        document.getElementById('buttonTwo').style.backgroundColor = "green"
        document.getElementById('buttonTwo').style.opacity = ".5"

        document.getElementById('buttonFive').style.zIndex = "14"
        document.getElementById('buttonFive').style.backgroundColor = "green"
        document.getElementById('buttonFive').style.opacity = ".5"

        document.getElementById('buttonEight').style.zIndex = "14"
        document.getElementById('buttonEight').style.backgroundColor = "green"
        document.getElementById('buttonEight').style.opacity = ".5"
   } else if(document.getElementById('three').innerText === document.getElementById('six').innerText && document.getElementById('six').innerText === document.getElementById('nine').innerText) {
        if(document.getElementById('twoBox').style.zIndex === 12){
            document.getElementById('whoMove').innerText = "X has won!"
        } else {
            document.getElementById('whoMove').innerText = "O has won!"
        }

        if (document.getElementById('one').innerText !== "X" || document.getElementById('one').innerText !== "O") {
            document.getElementById('oneBox').style.zIndex = "15"
            document.getElementById('buttonOne').style.backgroundColor = "grey"
            document.getElementById('buttonOne').style.opacity = ".5"
        }
        if (document.getElementById('two').innerText !== "X" || document.getElementById('two').innerText !== "O") {
            document.getElementById('twoBox').style.zIndex = "15"
            document.getElementById('buttonTwo').style.backgroundColor = "grey"
            document.getElementById('buttonTwo').style.opacity = ".5"
        }
        if (document.getElementById('three').innerText !== "X" || document.getElementById('three').innerText !== "O") {
            document.getElementById('threeBox').style.zIndex = "15"
            document.getElementById('buttonThree').style.backgroundColor = "grey"
            document.getElementById('buttonThree').style.opacity = ".5"
        }
        if (document.getElementById('four').innerText !== "X" || document.getElementById('four').innerText !== "O") {
            document.getElementById('fourBox').style.zIndex = "15"
            document.getElementById('buttonFour').style.backgroundColor = "grey"
            document.getElementById('buttonFour').style.opacity = ".5"
        }
        if (document.getElementById('five').innerText !== "X" || document.getElementById('five').innerText !== "O") {
            document.getElementById('fiveBox').style.zIndex = "15"
            document.getElementById('buttonFive').style.backgroundColor = "grey"
            document.getElementById('buttonFive').style.opacity = ".5"
        }
        if (document.getElementById('six').innerText !== "X" || document.getElementById('six').innerText !== "O") {
            document.getElementById('sixBox').style.zIndex = "15"
            document.getElementById('buttonSix').style.backgroundColor = "grey"
            document.getElementById('buttonSix').style.opacity = ".5"
        }
        if (document.getElementById('seven').innerText !== "X" || document.getElementById('seven').innerText !== "O") {
            document.getElementById('sevenBox').style.zIndex = "15"
            document.getElementById('buttonSeven').style.backgroundColor = "grey"
            document.getElementById('buttonSeven').style.opacity = ".5"
        }
        if (document.getElementById('eight').innerText !== "X" || document.getElementById('eight').innerText !== "O") {
            document.getElementById('eightBox').style.zIndex = "15"
            document.getElementById('buttonEight').style.backgroundColor = "grey"
            document.getElementById('buttonEight').style.opacity = ".5"
        }
        if (document.getElementById('nine').innerText !== "X" || document.getElementById('nine').innerText !== "O") {
            document.getElementById('nineBox').style.zIndex = "15"
            document.getElementById('buttonNine').style.backgroundColor = "grey"
            document.getElementById('buttonNine').style.opacity = ".5"
        }

        document.getElementById('buttonThree').style.zIndex = "14"
        document.getElementById('buttonThree').style.backgroundColor = "green"
        document.getElementById('buttonThree').style.opacity = ".5"

        document.getElementById('buttonSix').style.zIndex = "14"
        document.getElementById('buttonSix').style.backgroundColor = "green"
        document.getElementById('buttonSix').style.opacity = ".5"

        document.getElementById('buttonNine').style.zIndex = "14"
        document.getElementById('buttonNine').style.backgroundColor = "green"
        document.getElementById('buttonNine').style.opacity = ".5"
   } else if(document.getElementById('three').innerText === document.getElementById('five').innerText && document.getElementById('five').innerText === document.getElementById('seven').innerText){
        if(document.getElementById('threeBox').style.zIndex === 12){
            document.getElementById('whoMove').innerText = "X has won!"
        } else {
            document.getElementById('whoMove').innerText = "O has won!"
        }

        if (document.getElementById('one').innerText !== "X" || document.getElementById('one').innerText !== "O") {
            document.getElementById('oneBox').style.zIndex = "15"
            document.getElementById('buttonOne').style.backgroundColor = "grey"
            document.getElementById('buttonOne').style.opacity = ".5"
        }
        if (document.getElementById('two').innerText !== "X" || document.getElementById('two').innerText !== "O") {
            document.getElementById('twoBox').style.zIndex = "15"
            document.getElementById('buttonTwo').style.backgroundColor = "grey"
            document.getElementById('buttonTwo').style.opacity = ".5"
        }
        if (document.getElementById('three').innerText !== "X" || document.getElementById('three').innerText !== "O") {
            document.getElementById('threeBox').style.zIndex = "15"
            document.getElementById('buttonThree').style.backgroundColor = "grey"
            document.getElementById('buttonThree').style.opacity = ".5"
        }
        if (document.getElementById('four').innerText !== "X" || document.getElementById('four').innerText !== "O") {
            document.getElementById('fourBox').style.zIndex = "15"
            document.getElementById('buttonFour').style.backgroundColor = "grey"
            document.getElementById('buttonFour').style.opacity = ".5"
        }
        if (document.getElementById('five').innerText !== "X" || document.getElementById('five').innerText !== "O") {
            document.getElementById('fiveBox').style.zIndex = "15"
            document.getElementById('buttonFive').style.backgroundColor = "grey"
            document.getElementById('buttonFive').style.opacity = ".5"
        }
        if (document.getElementById('six').innerText !== "X" || document.getElementById('six').innerText !== "O") {
            document.getElementById('sixBox').style.zIndex = "15"
            document.getElementById('buttonSix').style.backgroundColor = "grey"
            document.getElementById('buttonSix').style.opacity = ".5"
        }
        if (document.getElementById('seven').innerText !== "X" || document.getElementById('seven').innerText !== "O") {
            document.getElementById('sevenBox').style.zIndex = "15"
            document.getElementById('buttonSeven').style.backgroundColor = "grey"
            document.getElementById('buttonSeven').style.opacity = ".5"
        }
        if (document.getElementById('eight').innerText !== "X" || document.getElementById('eight').innerText !== "O") {
            document.getElementById('eightBox').style.zIndex = "15"
            document.getElementById('buttonEight').style.backgroundColor = "grey"
            document.getElementById('buttonEight').style.opacity = ".5"
        }
        if (document.getElementById('nine').innerText !== "X" || document.getElementById('nine').innerText !== "O") {
            document.getElementById('nineBox').style.zIndex = "15"
            document.getElementById('buttonNine').style.backgroundColor = "grey"
            document.getElementById('buttonNine').style.opacity = ".5"
        }

        document.getElementById('buttonThree').style.zIndex = "14"
        document.getElementById('buttonThree').style.backgroundColor = "green"
        document.getElementById('buttonThree').style.opacity = ".5"

        document.getElementById('buttonFive').style.zIndex = "14"
        document.getElementById('buttonFive').style.backgroundColor = "green"
        document.getElementById('buttonFive').style.opacity = ".5"

        document.getElementById('buttonSeven').style.zIndex = "14"
        document.getElementById('buttonSeven').style.backgroundColor = "green"
        document.getElementById('buttonSeven').style.opacity = ".5"
   } else if(document.getElementById('four').innerText === document.getElementById('five').innerText && document.getElementById('five').innerText === document.getElementById('six').innerText) {
        if(document.getElementById('fourBox').style.zIndex === 12){
            document.getElementById('whoMove').innerText = "X has won!"
        } else {
            document.getElementById('whoMove').innerText = "O has won!"
        }

        if (document.getElementById('one').innerText !== "X" || document.getElementById('one').innerText !== "O") {
            document.getElementById('oneBox').style.zIndex = "15"
            document.getElementById('buttonOne').style.backgroundColor = "grey"
            document.getElementById('buttonOne').style.opacity = ".5"
        }
        if (document.getElementById('two').innerText !== "X" || document.getElementById('two').innerText !== "O") {
            document.getElementById('twoBox').style.zIndex = "15"
            document.getElementById('buttonTwo').style.backgroundColor = "grey"
            document.getElementById('buttonTwo').style.opacity = ".5"
        }
        if (document.getElementById('three').innerText !== "X" || document.getElementById('three').innerText !== "O") {
            document.getElementById('threeBox').style.zIndex = "15"
            document.getElementById('buttonThree').style.backgroundColor = "grey"
            document.getElementById('buttonThree').style.opacity = ".5"
        }
        if (document.getElementById('four').innerText !== "X" || document.getElementById('four').innerText !== "O") {
            document.getElementById('fourBox').style.zIndex = "15"
            document.getElementById('buttonFour').style.backgroundColor = "grey"
            document.getElementById('buttonFour').style.opacity = ".5"
        }
        if (document.getElementById('five').innerText !== "X" || document.getElementById('five').innerText !== "O") {
            document.getElementById('fiveBox').style.zIndex = "15"
            document.getElementById('buttonFive').style.backgroundColor = "grey"
            document.getElementById('buttonFive').style.opacity = ".5"
        }
        if (document.getElementById('six').innerText !== "X" || document.getElementById('six').innerText !== "O") {
            document.getElementById('sixBox').style.zIndex = "15"
            document.getElementById('buttonSix').style.backgroundColor = "grey"
            document.getElementById('buttonSix').style.opacity = ".5"
        }
        if (document.getElementById('seven').innerText !== "X" || document.getElementById('seven').innerText !== "O") {
            document.getElementById('sevenBox').style.zIndex = "15"
            document.getElementById('buttonSeven').style.backgroundColor = "grey"
            document.getElementById('buttonSeven').style.opacity = ".5"
        }
        if (document.getElementById('eight').innerText !== "X" || document.getElementById('eight').innerText !== "O") {
            document.getElementById('eightBox').style.zIndex = "15"
            document.getElementById('buttonEight').style.backgroundColor = "grey"
            document.getElementById('buttonEight').style.opacity = ".5"
        }
        if (document.getElementById('nine').innerText !== "X" || document.getElementById('nine').innerText !== "O") {
            document.getElementById('nineBox').style.zIndex = "15"
            document.getElementById('buttonNine').style.backgroundColor = "grey"
            document.getElementById('buttonNine').style.opacity = ".5"
        }

        document.getElementById('buttonFour').style.zIndex = "14"
        document.getElementById('buttonFour').style.backgroundColor = "green"
        document.getElementById('buttonFour').style.opacity = ".5"

        document.getElementById('buttonFive').style.zIndex = "14"
        document.getElementById('buttonFive').style.backgroundColor = "green"
        document.getElementById('buttonFive').style.opacity = ".5"

        document.getElementById('buttonSix').style.zIndex = "14"
        document.getElementById('buttonSix').style.backgroundColor = "green"
        document.getElementById('buttonSix').style.opacity = ".5"
   } else if(document.getElementById('seven').innerText === document.getElementById('eight').innerText && document.getElementById('eight').innerText === document.getElementById('nine').innerText) {
        if(document.getElementById('sevenBox').style.zIndex === 12){
            document.getElementById('whoMove').innerText = "X has won!"
        } else {
            document.getElementById('whoMove').innerText = "O has won!"
        }

        if (document.getElementById('one').innerText !== "X" || document.getElementById('one').innerText !== "O") {
            document.getElementById('oneBox').style.zIndex = "15"
            document.getElementById('buttonOne').style.backgroundColor = "grey"
            document.getElementById('buttonOne').style.opacity = ".5"
        }
        if (document.getElementById('two').innerText !== "X" || document.getElementById('two').innerText !== "O") {
            document.getElementById('twoBox').style.zIndex = "15"
            document.getElementById('buttonTwo').style.backgroundColor = "grey"
            document.getElementById('buttonTwo').style.opacity = ".5"
        }
        if (document.getElementById('three').innerText !== "X" || document.getElementById('three').innerText !== "O") {
            document.getElementById('threeBox').style.zIndex = "15"
            document.getElementById('buttonThree').style.backgroundColor = "grey"
            document.getElementById('buttonThree').style.opacity = ".5"
        }
        if (document.getElementById('four').innerText !== "X" || document.getElementById('four').innerText !== "O") {
            document.getElementById('fourBox').style.zIndex = "15"
            document.getElementById('buttonFour').style.backgroundColor = "grey"
            document.getElementById('buttonFour').style.opacity = ".5"
        }
        if (document.getElementById('five').innerText !== "X" || document.getElementById('five').innerText !== "O") {
            document.getElementById('fiveBox').style.zIndex = "15"
            document.getElementById('buttonFive').style.backgroundColor = "grey"
            document.getElementById('buttonFive').style.opacity = ".5"
        }
        if (document.getElementById('six').innerText !== "X" || document.getElementById('six').innerText !== "O") {
            document.getElementById('sixBox').style.zIndex = "15"
            document.getElementById('buttonSix').style.backgroundColor = "grey"
            document.getElementById('buttonSix').style.opacity = ".5"
        }
        if (document.getElementById('seven').innerText !== "X" || document.getElementById('seven').innerText !== "O") {
            document.getElementById('sevenBox').style.zIndex = "15"
            document.getElementById('buttonSeven').style.backgroundColor = "grey"
            document.getElementById('buttonSeven').style.opacity = ".5"
        }
        if (document.getElementById('eight').innerText !== "X" || document.getElementById('eight').innerText !== "O") {
            document.getElementById('eightBox').style.zIndex = "15"
            document.getElementById('buttonEight').style.backgroundColor = "grey"
            document.getElementById('buttonEight').style.opacity = ".5"
        }
        if (document.getElementById('nine').innerText !== "X" || document.getElementById('nine').innerText !== "O") {
            document.getElementById('nineBox').style.zIndex = "15"
            document.getElementById('buttonNine').style.backgroundColor = "grey"
            document.getElementById('buttonNine').style.opacity = ".5"
        } 

        document.getElementById('buttonSeven').style.zIndex = "14"
        document.getElementById('buttonSeven').style.backgroundColor = "green"
        document.getElementById('buttonSeven').style.opacity = ".5"

        document.getElementById('buttonEight').style.zIndex = "14"
        document.getElementById('buttonEight').style.backgroundColor = "green"
        document.getElementById('buttonEight').style.opacity = ".5"

        document.getElementById('buttonNine').style.zIndex = "14"
        document.getElementById('buttonNine').style.backgroundColor = "green"
        document.getElementById('buttonNine').style.opacity = ".5"
    }else if(moveNumber === 10) { //TIE//
        document.getElementById('whoMove').innerText = "Tie"
        document.getElementById('buttonOne').style.zIndex = "14"
        document.getElementById('buttonOne').style.backgroundColor = "pink"
        document.getElementById('buttonOne').style.opacity = ".5"

        document.getElementById('buttonThree').style.zIndex = "14"
        document.getElementById('buttonThree').style.backgroundColor = "pink"
        document.getElementById('buttonThree').style.opacity = ".5"

        document.getElementById('buttonFive').style.zIndex = "14"
        document.getElementById('buttonFive').style.backgroundColor = "pink"
        document.getElementById('buttonFive').style.opacity = ".5"

        document.getElementById('buttonNine').style.zIndex = "14"
        document.getElementById('buttonNine').style.backgroundColor = "pink"
        document.getElementById('buttonNine').style.opacity = ".5"

        document.getElementById('buttonSeven').style.zIndex = "14"
        document.getElementById('buttonSeven').style.backgroundColor = "pink"
        document.getElementById('buttonSeven').style.opacity = ".5"
   }
   
    console.log(moveNumber)
}



function reset() {
    document.getElementById('one').innerText = "D"
    document.getElementById('oneBox').style.zIndex = "-10"
    document.getElementById('buttonOne').style.backgroundColor = null
    document.getElementById('buttonOne').style.opacity = "1"

    
    document.getElementById('two').innerText = "S"
    document.getElementById('twoBox').style.zIndex = "-10"
    document.getElementById('buttonTwo').style.backgroundColor = null
    document.getElementById('buttonTwo').style.opacity = "1"

    
    document.getElementById('three').innerText = "A"
    document.getElementById('threeBox').style.zIndex = "-10"
    document.getElementById('buttonThree').style.backgroundColor = null
    document.getElementById('buttonThree').style.opacity = "1"

    
    document.getElementById('four').innerText = "Z"
    document.getElementById('fourBox').style.zIndex = "-10"
    document.getElementById('buttonFour').style.backgroundColor = null
    document.getElementById('buttonFour').style.opacity = "1"

    
    document.getElementById('five').innerText = "C"
    document.getElementById('fiveBox').style.zIndex = "-10"
    document.getElementById('buttonFive').style.backgroundColor = null
    document.getElementById('buttonFive').style.opacity = "1"

    
    document.getElementById('six').innerText = "V"
    document.getElementById('sixBox').style.zIndex = "-10"
    document.getElementById('buttonSix').style.backgroundColor = null
    document.getElementById('buttonSix').style.opacity = "1"

    
    document.getElementById('seven').innerText = "B"
    document.getElementById('sevenBox').style.zIndex = "-10"
    document.getElementById('buttonSeven').style.backgroundColor = null
    document.getElementById('buttonSeven').style.opacity = "1"

    
    document.getElementById('eight').innerText = "N"
    document.getElementById('eightBox').style.zIndex = "-10"
    document.getElementById('buttonEight').style.backgroundColor = null
    document.getElementById('buttonEight').style.opacity = "1"

    
    document.getElementById('nine').innerText = " "
    document.getElementById('nineBox').style.zIndex = "-10"
    document.getElementById('buttonNine').style.backgroundColor = null
    document.getElementById('buttonNine').style.opacity = "1"

    document.getElementById('whoMove').innerText = "X has the move"

    moveNumber = 1
}


// 2 vegetable somosas 10
// aloo gobi  9
// palak paneer 11
// tadka dal 9
// naan garlic 2.5  naan 3