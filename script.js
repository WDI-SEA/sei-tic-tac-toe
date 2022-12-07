const box1 = document.querySelector('#box1')
const box2 = document.querySelector('#box2')
const box3 = document.querySelector('#box3')
const box4 = document.querySelector('#box4')
const box5 = document.querySelector('#box5')
const box6 = document.querySelector('#box6')
const box7 = document.querySelector('#box7')
const box8 = document.querySelector('#box8')
const box9 = document.querySelector('#box9')
const allBox = document.querySelectorAll('.class')
// const newDiv = document.querySelector('#tie')
const tieHolder = document.querySelector('#tieHolder')
const tie = document.querySelector('#tie')
const resetBtn = document.querySelector('#resetBtn')

console.log(box1.innerText)

let turns = ['', '', '', '', '', '', '', '', '']
let eles = []


//allows you to pick x or o
const click = (e) => {
  e.addEventListener('click', () => {
    reducedArr()
    if (turns.length % 2 === 0) {
      let el = e.innerText = 'x'
      
      tie.innerText = 'Player 1'
    } else {
      let el2 = e.innerText = 'o'
      tie.innerText = 'Player 2'
    }

    winner()
    console.log(e.innerText)
  })
}

const winner = () => {
  if (box1.innertext === 'x' && box2.innertext === 'x' && box3.innertext === 'x') {
    tie.innerText = 'Player 1 wins!'
  } else if(turns.length === 0) {
    tie.innerText = 'Its a tie!'
  } 
  
}


const reducedArr = () => {
  let ans = turns.pop()
  return ans
}


click(box1)
click(box2)
click(box3)
click(box4)
click(box5)
click(box6)
click(box7)
click(box8)
click(box9)

console.log(reducedArr())

resetBtn.addEventListener('click', () => {
  box1.innerText = null
  box2.innerText = null
  box3.innerText = null
  box4.innerText = null
  box5.innerText = null
  box6.innerText = null
  box7.innerText = null
  box8.innerText = null
  box9.innerText = null
  tie.innerText = 'Play!'
  turns = ['', '', '', '', '', '', '', '', '']
})