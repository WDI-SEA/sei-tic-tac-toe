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




// console.log(xo.innerText)


const xo = ['o', 'x', 'o', 'x', 'o', 'x', 'o', 'x', 'o']

startBtn.addEventListener('click', () => {
  
  // for (let i = 0; i > xo.length; i++) {
  //   console.log(i)
  //   box1.addEventListener('click', () => {
  //     box1.innerText = xo[i]
  //   })

  //   box2.addEventListener('click', () => {
  //     box1.innerText = xo[i]
  //   })

  // }

  box1.addEventListener('click', () => {
    
    let ans = box1.innerText = xo[0]
    xo.shift()
    // return ans
  }, {once : true})
  box2.addEventListener('click', () => {
    box2.innerText = xo[0]
    xo.shift()
  }, {once : true})
  box3.addEventListener('click', () => {
    box3.innerText = xo[0]
    xo.shift()
  }, {once : true})
  box4.addEventListener('click', () => {
    box4.innerText = xo[0]
    xo.shift()
  }, {once : true})
  box5.addEventListener('click', () => {
    box5.innerText = xo[0]
    xo.shift()
  }, {once : true})
  box6.addEventListener('click', () => {
    box6.innerText = xo[0]
    xo.shift()
  }, {once : true})
  box7.addEventListener('click', () => {
    box7.innerText = xo[0]
    xo.shift()
  }, {once : true})
  box8.addEventListener('click', () => {
    box8.innerText = xo[0]
    xo.shift()
  }, {once : true})
  box9.addEventListener('click', () => {
    box9.innerText = xo[0]
    xo.shift()
    console.log(xo)
  }, {once : true})

  if (xo.length === 0) {
    const newDiv = document.createElement('div')
    newDiv.setAttribute('id', 'tie')
    const tie = document.textContent('Tie!!!!!')
    newDiv.appendChild(tie)
    tieHolder.appendChild(newDiv)

  }

})



