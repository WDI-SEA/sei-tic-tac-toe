let divsContainer = document.querySelector(".container")
let xPlayer = document.querySelector(".x-player")
let oPlayer = document.querySelector(".o-player")
let message = document.querySelector(".message")
let resetBtn = document.querySelector("#reset-button")
let clickCount = 0
let xoArray = []
let disable = 0

const generateDivs = () => {
    for(let i=0; i<9; i++) {
        const xoInput = document.createElement("div")
        xoInput.classList.add("xo-inputs")
        xoInput.innerText = " "
        xoInput.addEventListener("click", addXorO)
        divsContainer.appendChild(xoInput)
    }
    xPlayer.style.color = "#F18a85"
}

const addXorO = (event) => {
    if (event.target.innerText == "X" || event.target.innerText == "O") {
        return
    }

    clickCount++
    if (disable == 0) {
        if (clickCount%2 != 0) {
            event.target.innerText = "X";
            xPlayer.style.color = "#69403e"
            oPlayer.style.color = "#F18a85"
        } else {
            event.target.innerText = "O";
            oPlayer.style.color = "#69403e"
            xPlayer.style.color = "#F18a85"
        }
        WinTieMessage()
    }
}

const WinTieMessage = () => {
    let xoElements = divsContainer.getElementsByTagName("div")
    for (let i=0; i<xoElements.length; i++) {
        xoArray[i] = xoElements[i].innerText
    }

    if (xoArray[0]=="X" && xoArray[1]=="X" && xoArray[2]=="X" || xoArray[3]=="X" && xoArray[4]=="X" && xoArray[5]=="X" || xoArray[6]=="X" && xoArray[7]=="X" && xoArray[8]=="X" || xoArray[0]=="X" && xoArray[3]=="X" && xoArray[6]=="X" || xoArray[1]=="X" && xoArray[4]=="X" && xoArray[7]=="X" || xoArray[2]=="X" && xoArray[5]=="X" && xoArray[8]=="X" || xoArray[2]=="X" && xoArray[4]=="X" && xoArray[6]=="X" || xoArray[0]=="X" && xoArray[4]=="X" && xoArray[8]=="X") {
        message.innerText = "X is the winner"
        message.style.backgroundColor = "#f18a85"
        xPlayer.style.color = "#69403e"
        oPlayer.style.color = "#69403e"
        disable = 1
    } else if (xoArray[0]=="O" && xoArray[1]=="O" && xoArray[2]=="O" || xoArray[3]=="O" && xoArray[4]=="O" && xoArray[5]=="O" || xoArray[6]=="O" && xoArray[7]=="O" && xoArray[8]=="O" || xoArray[0]=="O" && xoArray[3]=="O" && xoArray[6]=="O" || xoArray[1]=="O" && xoArray[4]=="O" && xoArray[7]=="O" || xoArray[2]=="O" && xoArray[5]=="O" && xoArray[8]=="O" || xoArray[2]=="O" && xoArray[4]=="O" && xoArray[6]=="O" || xoArray[0]=="O" && xoArray[4]=="O" && xoArray[8]=="O") {
        message.innerText = "O is the winner"
        message.style.backgroundColor = "#f18a85"
        xPlayer.style.color = "#69403e"
        oPlayer.style.color = "#69403e"
        disable = 1
    }
    else if (clickCount == 9) {
        message.innerText = "It's a tie"
        message.style.backgroundColor = "#24788f"
        xPlayer.style.color = "#F18a85"
        oPlayer.style.color = "#F18a85"
        disable = 1
    }
}

document.addEventListener("DOMContentLoaded", ()=> {
    generateDivs()
    resetBtn.addEventListener("click", ()=>{
        const inputDiv = document.querySelectorAll(".xo-inputs")
        for(let i=0; i<9; i++) {
            inputDiv[i].innerText = " "
        }
        message.innerText = " "
        message.style.backgroundColor = "#282130"
        oPlayer.style.color = "#69403e"
        xPlayer.style.color = "#F18a85"
        disable = 0
        xoArray = []
        clickCount = 0
    })
})