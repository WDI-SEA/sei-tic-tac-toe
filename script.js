const startBtn = document.querySelector('#startBtn')
const box1 = document.querySelector('#box1')
const box2 = document.querySelector('#box2')
const box3 = document.querySelector('#box3')
const box4 = document.querySelector('#box4')
const box5 = document.querySelector('#box5')
const box6 = document.querySelector('#box6')
const box7 = document.querySelector('#box7')
const box8 = document.querySelector('#box8')
const box9 = document.querySelector('#box9')
// const newDiv = document.querySelector('#tie')
const tieHolder = document.querySelector('#tieHolder')
const tie = document.querySelector('#tie')
const resetBtn = document.querySelector('#resetBtn')




// console.log(xo.innerText)


const xo = ['x', 'o', 'x', 'o', 'x', 'o', 'o', 'x', 'o']

startBtn.addEventListener('click', () => {
  console.log(xo)  

  box1.addEventListener('click', () => {
    tie.innerText ='Player 1'
    let ans = box1.innerText = xo[0]
    xo.shift()

    if (xo.length === 0) {
      const newDiv = document.createElement('div')
      newDiv.setAttribute('id', 'tie')
      tieHolder.appendChild(newDiv)
      const tie = document.createTextNode('Tie!!!!!')
      newDiv.appendChild(tie)
    
    }

    // return ans
  }, {once : true})
  box2.addEventListener('click', () => {
    box2.innerText = xo[0]
    
    if (xo.length % 2 === 0) {
      tie.innerText = 'Player 2'
    } else tie.innerText = 'Player 1'

    xo.shift()

    if (xo.length === 0) {
      const newDiv = document.createElement('div')
      newDiv.setAttribute('id', 'tie')
      tieHolder.appendChild(newDiv)
      const tie = document.createTextNode('Tie!!!!!')
      newDiv.appendChild(tie)
    
    }

  }, {once : true})
  box3.addEventListener('click', () => {
    box3.innerText = xo[0]

    if (xo.length % 2 === 0) {
      tie.innerText = 'Player 2'
    } else tie.innerText = 'Player 1'

    xo.shift()

    if (xo.length === 0) {
      const newDiv = document.createElement('div')
      newDiv.setAttribute('id', 'tie')
      tieHolder.appendChild(newDiv)
      const tie = document.createTextNode('Tie!!!!!')
      newDiv.appendChild(tie)
    
    }

  }, {once : true})
  box4.addEventListener('click', () => {
    box4.innerText = xo[0]
    xo.shift()
   
    if (xo.length === 0) {
      const newDiv = document.createElement('div')
      newDiv.setAttribute('id', 'tie')
      tieHolder.appendChild(newDiv)
      const tie = document.createTextNode('Tie!!!!!')
      newDiv.appendChild(tie)
    
    }

  }, {once : true})
  box5.addEventListener('click', () => {
    box5.innerText = xo[0]

        if (xo.length % 2 === 0) {
      tie.innerText = 'Player 2'
    } else tie.innerText = 'Player 1'

    xo.shift()

    if (xo.length === 0) {
      const newDiv = document.createElement('div')
      newDiv.setAttribute('id', 'tie')
      tieHolder.appendChild(newDiv)
      const tie = document.createTextNode('Tie!!!!!')
      newDiv.appendChild(tie)
    
    }

  }, {once : true})
  box6.addEventListener('click', () => {
    box6.innerText = xo[0]

        if (xo.length % 2 === 0) {
      tie.innerText = 'Player 2'
    } else tie.innerText = 'Player 1'

    xo.shift()

    if (xo.length === 0) {
      const newDiv = document.createElement('div')
      newDiv.setAttribute('id', 'tie')
      tieHolder.appendChild(newDiv)
      const tie = document.createTextNode('Tie!!!!!')
      newDiv.appendChild(tie)
    
    }

  }, {once : true})
  box7.addEventListener('click', () => {
    box7.innerText = xo[0]

        if (xo.length % 2 === 0) {
      tie.innerText = 'Player 2'
    } else tie.innerText = 'Player 1'

    xo.shift()

    if (xo.length === 0) {
      const newDiv = document.createElement('div')
      newDiv.setAttribute('id', 'tie')
      tieHolder.appendChild(newDiv)
      const tie = document.createTextNode('Tie!!!!!')
      newDiv.appendChild(tie)
    
    }

  }, {once : true})
  box8.addEventListener('click', () => {
    box8.innerText = xo[0]

        if (xo.length % 2 === 0) {
      tie.innerText = 'Player 2'
    } else tie.innerText = 'Player 1'

    xo.shift()

    if (xo.length === 0) {
      const newDiv = document.createElement('div')
      newDiv.setAttribute('id', 'tie')
      tieHolder.appendChild(newDiv)
      const tie = document.createTextNode('Tie!!!!!')
      newDiv.appendChild(tie)
    
    }

  }, {once : true})
  box9.addEventListener('click', () => {
    box9.innerText = xo[0]

        if (xo.length % 2 === 0) {
      tie.innerText = 'Player 2'
    } else tie.innerText = 'Player 1'

    xo.shift()
    console.log(xo.length)

    if (xo.length === 0) {
      const newDiv = document.createElement('div')
      newDiv.setAttribute('id', 'tie')
      tieHolder.appendChild(newDiv)
      const tie = document.createTextNode('Tie!!!!!')
      newDiv.appendChild(tie)
    
    }
    
  }, {once : true})
  
  
  
})





resetBtn.addEventListener('click', () => {
  tie.innerText ='reseted!'
  box1.innerText = 'x/o'
  box2.innerText = 'x/o'
  box3.innerText = 'x/o'
  box4.innerText = 'x/o'
  box5.innerText = 'x/o'
  box6.innerText = 'x/o'
  box7.innerText = 'x/o'
  box8.innerText = 'x/o'
  box9.innerText = 'x/o'
  
  if (xo.length === 0) xo.push('o', 'x', 'o', 'x', 'o', 'x', 'o', 'x', 'o')
  else if (xo.length === 1) xo.push('o', 'x', 'o', 'x', 'o', 'x', 'o', 'x')
  else if (xo.length === 2) xo.push('o', 'x', 'o', 'x', 'o', 'x', 'o')
  else if (xo.length === 3) xo.push('o', 'x', 'o', 'x', 'o', 'x')
  else if (xo.length === 4) xo.push('o', 'x', 'o', 'x', 'o')
  else if (xo.length === 5) xo.push('o', 'x', 'o', 'x')
  else if (xo.length === 6) xo.push('o', 'x', 'o')
  else if (xo.length === 7) xo.push('o', 'x')
  else if (xo.length === 8) {
    xo.push('o') 
    console.log(xo)
  } 
  console.log(xo)
})

// let arr = ['o', 'x', 'o', 'x', 'o', 'x', 'o', 'x', 'o']
// console.log(arr.length)
// console.log(arr.length % 2 === 0)
// arr.shift()
// console.log(arr.length)
// console.log(arr.length % 2 === 0)
// arr.shift()
// console.log(arr.length)
// console.log(arr.length % 2 === 0)
// arr.shift()
// console.log(arr.length)
// console.log(arr.length % 2 === 0)
// arr.shift()
// console.log(arr.length)
// console.log(arr.length % 2 === 0)
// arr.shift()
// console.log(arr.length)
// console.log(arr.length % 2 === 0)
// arr.shift()
// console.log(arr.length)
// console.log(arr.length % 2 === 0)
// arr.shift()
// console.log(arr.length)
// console.log(arr.length % 2 === 0)
// arr.shift()
// console.log(arr.length)
// console.log(arr.length % 2 === 0)
// arr.shift()