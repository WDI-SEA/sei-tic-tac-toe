const box1 = document.querySelector('#box1')
const box2 = document.querySelector('#box2')
const box3 = document.querySelector('#box3')
const box4 = document.querySelector('#box4')
const box5 = document.querySelector('#box5')
const box6 = document.querySelector('#box6')
const box7 = document.querySelector('#box7')
const box8 = document.querySelector('#box8')
const box9 = document.querySelector('#box9')
//replaces array, turns, eles with x & o
const num0 = document.querySelector('#box1').getAttribute('value')
const num1 = document.querySelector('#box2').getAttribute('value')
const num2 = document.querySelector('#box3').getAttribute('value')
const num3 = document.querySelector('#box4').getAttribute('value')
const num4 = document.querySelector('#box5').getAttribute('value')
const num5 = document.querySelector('#box6').getAttribute('value')
const num6 = document.querySelector('#box7').getAttribute('value')
const num7 = document.querySelector('#box8').getAttribute('value')
const num8 = document.querySelector('#box9').getAttribute('value')
const allBox = document.querySelectorAll('.class')
// const newDiv = document.querySelector('#tie')
const tieHolder = document.querySelector('#tieHolder')
const tie = document.querySelector('#tie')
const resetBtn = document.querySelector('#resetBtn')

console.log(num0)

let turns = ['', '', '', '', '', '', '', '', '']
let eles = []



//allows you to pick x or o
const click = (e) => {
  e.addEventListener('click', () => {
    reducedArr()
    if (turns.length % 2 === 0) {
      let el = e.innerText = 'x'
      turns[e.value] = el
      tie.innerText = 'Player 1'
    } else {
      let el2 = e.innerText = 'o'
      turns[e.value] = el2
      tie.innerText = 'Player 2'
    }

    winnerPlayer1()
    winnerPlayer2()
    // console.log(e.innerText)
    // console.log(turns)
  })
}

const winnerPlayer1 = () => {
  if (box1.innerText === 'x' && box1.innerText === box2.innerText && box1.innerText === box3.innerText) {
    tie.innerText = 'Player 1 wins!'
  } 
  else if (box1.innerText === 'x' && box1.innerText === box4.innerText && box1.innerText === box7.innerText) {
    tie.innerText = 'Player 1 wins!'
  } else if (box7.innerText === 'x' && box7.innerText === box8.innerText && box7.innerText === box9.innerText) {
    tie.innerText = 'Player 1 wins!'
  } else if (box3.innerText === 'x' && box3.innerText === box5.innerText && box3.innerText === box7.innerText) {
    tie.innerText = 'Player 1 wins!'
  } else if (box1.innerText === 'x' && box1.innerText === box5.innerText && box1.innerText === box9.innerText) {
    tie.innerText = 'Player 1 wins!'
  } else if (box3.innerText === 'x' && box3.innerText === box6.innerText && box3.innerText === box9.innerText) {
    tie.innerText = 'Player 1 wins!'
  } else if (box2.innerText === 'x' && box2.innerText === box5.innerText && box2.innerText === box8.innerText) {
    tie.innerText = 'Player 1 wins!'
  } else if (box4.innerText === 'x' && box4.innerText === box5.innerText && box4.innerText === box6.innerText) {
    tie.innerText = 'Player 1 wins!'
  } 
  else if(turns.length === 0) {
    tie.innerText = 'Its a tie!'
  } 
  
}

const winnerPlayer2 = () => {
  if (box1.innerText === 'o' && box1.innerText === box2.innerText && box1.innerText === box3.innerText) {
    tie.innerText = 'Player 2 wins!'
  } 
  else if (box1.innerText === 'o' && box1.innerText === box4.innerText && box1.innerText === box7.innerText) {
    tie.innerText = 'Player 2 wins!'
  } else if (box7.innerText === 'o' && box7.innerText === box8.innerText && box7.innerText === box9.innerText) {
    tie.innerText = 'Player 2 wins!'
  } else if (box3.innerText === 'o' && box3.innerText === box5.innerText && box3.innerText === box7.innerText) {
    tie.innerText = 'Player 2 wins!'
  } else if (box1.innerText === 'o' && box1.innerText === box5.innerText && box1.innerText === box9.innerText) {
    tie.innerText = 'Player 2 wins!'
  } else if (box3.innerText === 'o' && box3.innerText === box6.innerText && box3.innerText === box9.innerText) {
    tie.innerText = 'Player 2 wins!'
  } else if (box2.innerText === 'o' && box2.innerText === box5.innerText && box2.innerText === box8.innerText) {
    tie.innerText = 'Player 2 wins!'
  } else if (box4.innerText === 'o' && box4.innerText === box5.innerText && box4.innerText === box6.innerText) {
    tie.innerText = 'Player 2 wins!'
  } 
  else if(turns.length === 0) {
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
  click()
})