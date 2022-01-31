let dog = document.createElement("img")
dog.src = "https://i.imgur.com/mhDHxZy.jpg"
let cat = document.createElement("img")
cat.src = "https://i.imgur.com/M2J3FvL.jpg"
let square = document.getElementsByClassName("square")
let dogWin = document.createTextNode("Player 1 is the winner!")
let catWin = document.createTextNode("Player 2 is the winner!")
let tie = document.createTextNode("It's a tie!")
let x = 1

function win1() {
    if (tL.children.length == 1 && tC.children.length == 1 && tR.children.length == 1) {
        if (tL.firstChild.src == tC.firstChild.src && tC.firstChild.src == tR.firstChild.src) {
            if (tL.firstChild.src == dog.src) {
                result.appendChild(dogWin)
                //result.style.backgroundColor = "black"
            } else {
                result.appendChild(catWin)
            }
        }
    } 
}

function win2() {
    if (cL.children.length == 1 && cC.children.length == 1 && cR.children.length == 1) {
        if (cL.firstChild.src == cC.firstChild.src && cC.firstChild.src == cR.firstChild.src) {
            if (cL.firstChild.src == dog.src) {
                result.appendChild(dogWin)
            } else {
                result.appendChild(catWin)
            }
        }
    } 
}

function win3() {
    if (bL.children.length == 1 && bC.children.length == 1 && bR.children.length == 1) {
        if (bL.firstChild.src == bC.firstChild.src && bC.firstChild.src == bR.firstChild.src) {
            if (bL.firstChild.src == dog.src) {
                result.appendChild(dogWin)
            } else {
                result.appendChild(catWin)
            }
        }
    }
 }
 
 function win4() {
     if (tL.children.length == 1 && cL.children.length == 1 && bL.children.length == 1) {
        if (tL.firstChild.src == cL.firstChild.src && cL.firstChild.src == bL.firstChild.src) {
            if (tL.firstChild.src == dog.src) {
                result.appendChild(dogWin)
            } else {
                result.appendChild(catWin)
            }
        }
    }
}

function win5() {
    if (tC.children.length == 1 && cC.children.length == 1 && bC.children.length == 1) {
        if (tC.firstChild.src == cC.firstChild.src && cC.firstChild.src == bC.firstChild.src) {
            if (tC.firstChild.src == dog.src) {
                result.appendChild(dogWin)
            } else {
                result.appendChild(catWin)
            }
        }
    }
 }
 
 function win6() {
     if (tR.children.length == 1 && cR.children.length == 1 && bR.children.length == 1) {
        if (tR.firstChild.src == cR.firstChild.src && cR.firstChild.src == bR.firstChild.src) {
            if (tR.firstChild.src == dog.src) {
                result.appendChild(dogWin)
            } else {
                result.appendChild(catWin)
            }
        }
    }
 }
 
 function win7() {
     if (tL.children.length == 1 && cC.children.length == 1 && bR.children.length == 1) {
        if (tL.firstChild.src == cC.firstChild.src && cC.firstChild.src == bR.firstChild.src) {
            if (tL.firstChild.src == dog.src) {
                result.appendChild(dogWin)
            } else {
                result.appendChild(catWin)
            }
        }
    } 
}

function win8() {
    if (tR.children.length == 1 && cC.children.length == 1 && bL.children.length == 1) {
        if (tR.firstChild.src == cC.firstChild.src && cC.firstChild.src == bL.firstChild.src) {
            if (tR.firstChild.src == dog.src) {
                result.appendChild(dogWin)
            } else {
                result.appendChild(catWin)
            }
        }
    }
}

function noWin() {
    if (x == 10 && result.childNodes.length == 0) {
        result.appendChild(tie)
    }
}

function playerTurn () {
    if (x % 2 == 1) {
        turn.innerText = 'Turn: Player 1'
    } else {
        turn.innerText = 'Turn: Player 2'
    }
}

for (let i = 0; i < square.length; i++) {
    function tictactoe() {   
        if (x < 3) {
            if (square[i].childNodes.length > 0) {
            } else if ((x % 2) === 1) {
                square[i].appendChild(dog)
                x++
                dogCln = square[i].lastChild.cloneNode(true)
                playerTurn()
            } else {
                square[i].appendChild(cat)
                x++
                catCln = square[i].lastChild.cloneNode(true)
                playerTurn()
            }
        } else {
            if (result.childNodes.length > 0) {
                document.removeEventListener('click', tictactoe)
            } else if (square[i].childNodes.length > 0) {
            } else if ((x % 2) === 1) {
                square[i].appendChild(dogCln)
                x++
                dogCln = square[i].lastChild.cloneNode(true)
                win1()
                win2()
                win3()
                win4()
                win5()
                win6()
                win7()
                win8()
                noWin()
                playerTurn()
            } else {
                square[i].appendChild(catCln)
                x++
                catCln = square[i].lastChild.cloneNode(true)
                win1()
                win2()
                win3()
                win4()
                win5()
                win6()
                win7()
                win8()     
                noWin()   
                playerTurn()   
            }
        }
    }
    square[i].addEventListener('click', tictactoe)
}

reset.addEventListener('click', function() {
    let images = document.querySelectorAll('img')
    for (const elem of images) {
        elem.remove()
    }
    if (result.childNodes.length > 0) {
        result.removeChild(result.childNodes[0])
    }
    x = 1
    playerTurn()
})