document.addEventListener('DOMContentLoaded', function () {

        let playerChoice = 'x'
        document.querySelector('h2').innerText = playerChoice + ' your turn'
        let switchPlayer = function () {
            if (playerChoice === 'x') {
                playerChoice = 'o'
            }
            else {
                playerChoice = 'x'
            }
            document.querySelector('h2').innerText = playerChoice + ' your turn'
        }
        let game = ['','','','','','','','','']





        const upperLeft = document.querySelector('#ul p')
        document.querySelector('#ul').addEventListener('click', function () {
            if (game[0] === '') {
            console.log('hi')
            upperLeft.innerText = playerChoice
            game[0] = playerChoice
            console.log(game, playerChoice)
            switchPlayer()
            }

        })

        const upperMiddle = document.querySelector('#um p')
        document.querySelector('#um').addEventListener('click', function () {
            if (game[1] === '') {
                console.log('hi')
                upperMiddle.innerText = playerChoice
                game[1] = playerChoice
                console.log(game, playerChoice)
                switchPlayer()
                }
        })

        const upperRight = document.querySelector('#ur p')
        document.querySelector('#ur').addEventListener('click', function () {
            if (game[2] === '') {
            console.log('hi')
            upperRight.innerText = playerChoice
            game[2] = playerChoice
            console.log(game, playerChoice)
            switchPlayer()
            }

        })

        const middleLeft = document.querySelector('#ml p')
        document.querySelector('#ml').addEventListener('click', function () {
            if (game[3] === '') {
            console.log('hi')
            middleLeft.innerText = playerChoice
            game[3] = playerChoice
            console.log(game, playerChoice)
            switchPlayer()
            }

        })

        const middleMiddle = document.querySelector('#mm p')
        document.querySelector('#mm').addEventListener('click', function () {
            if (game[4] === '') {
            console.log('hi')
            middleMiddle.innerText = playerChoice
            game[4] = playerChoice
            console.log(game, playerChoice)
            switchPlayer()
            }

        })

        const middleRight = document.querySelector('#mr p')
        document.querySelector('#mr').addEventListener('click', function () {
            if (game[5] === '') {
            console.log('hi')
            middleRight.innerText = playerChoice
            game[5] = playerChoice
            console.log(game, playerChoice)
            switchPlayer()
            }

        })

        const bottomLeft = document.querySelector('#bl p')
        document.querySelector('#bl').addEventListener('click', function () {
            if (game[6] === '') {
            console.log('hi')
            bottomLeft.innerText = playerChoice
            game[6] = playerChoice
            console.log(game, playerChoice)
            switchPlayer()
            }

        })



        const bottomMiddle = document.querySelector('#bm p')
        document.querySelector('#bm').addEventListener('click', function () {
            if (game[7] === '') {
            console.log('hi')
            bottomMiddle.innerText = playerChoice
            game[7] = playerChoice
            console.log(game, playerChoice)
            switchPlayer()
            }

        })

        const bottomRight = document.querySelector('#br p')
        document.querySelector('#br').addEventListener('click', function () {
            if (game[8] === '') {
            console.log('hi')
            bottomRight.innerText = playerChoice
            game[8] = playerChoice
            console.log(game, playerChoice)
            switchPlayer()
            }

        })

        document.querySelector('.board button').addEventListener('click', function() {
            playerChoice = 'x'
            document.querySelector('h1').innerText = 'Welcome to Tic Tac Toe'
            document.querySelector('h2').innerText = playerChoice + ' your turn'
            game = ['','','','','','','','','']
            upperLeft.innerText = '-'
            upperMiddle.innerText ='-'
            upperRight.innerText = '-'
            middleLeft.innerText = '-'
            middleMiddle.innerText = '-'
            middleRight.innerText = '-'
            bottomLeft.innerText = '-'
            bottomMiddle.innerText = '-'
            bottomRight.innerText = '-'

        })



        setInterval(function () {


            if (game[0] == 'x' && game[1] == 'x' && game[2] == 'x') {
                document.querySelector('h1').innerText = 'X Wins!'
                document.querySelector('h2').innerText = 'press clear to play again'
                game = ['p','p','p','p','p','p','p','p','p']
            }
            if (game[3] == 'x' && game[4] == 'x' && game[5] == 'x') {
                document.querySelector('h1').innerText = 'X Wins!'
                document.querySelector('h2').innerText = 'press clear to play again'
                game = ['p','p','p','p','p','p','p','p','p']
            }
            if (game[6] == 'x' && game[7] == 'x' && game[8] == 'x') {
                document.querySelector('h1').innerText = 'X Wins!'
                document.querySelector('h2').innerText = 'press clear to play again'
                game = ['p','p','p','p','p','p','p','p','p']
            }
            if (game[0] == 'x' && game[3] == 'x' && game[6] == 'x') {
                document.querySelector('h1').innerText = 'X Wins!'
                document.querySelector('h2').innerText = 'press clear to play again'
                game = ['p','p','p','p','p','p','p','p','p']
            }
            if (game[1] == 'x' && game[4] == 'x' && game[7] == 'x') {
                document.querySelector('h1').innerText = 'X Wins!'
                document.querySelector('h2').innerText = 'press clear to play again'
                game = ['p','p','p','p','p','p','p','p','p']
            }
            if (game[2] == 'x' && game[5] == 'x' && game[8] == 'x') {
                document.querySelector('h1').innerText = 'X Wins!'
                document.querySelector('h2').innerText = 'press clear to play again'
                game = ['p','p','p','p','p','p','p','p','p']
            }
            if (game[0] == 'x' && game[4] == 'x' && game[8] == 'x') {
                document.querySelector('h1').innerText = 'X Wins!'
                document.querySelector('h2').innerText = 'press clear to play again'
                game = ['p','p','p','p','p','p','p','p','p']
            }
            if (game[2] == 'x' && game[4] == 'x' && game[6] == 'x') {
                document.querySelector('h1').innerText = 'X Wins!'
                document.querySelector('h2').innerText = 'press clear to play again'
                game = ['p','p','p','p','p','p','p','p','p']
            }

            if (game[0] == 'o' && game[1] == 'o' && game[2] == 'o') {
                document.querySelector('h1').innerText = 'O Wins!'
                document.querySelector('h2').innerText = 'press clear to play again'
                game = ['p','p','p','p','p','p','p','p','p']
            }
            if (game[3] == 'o' && game[4] == 'o' && game[5] == 'o') {
                document.querySelector('h1').innerText = 'O Wins!'
                document.querySelector('h2').innerText = 'press clear to play again'
                game = ['p','p','p','p','p','p','p','p','p']
            }
            if (game[6] == 'o' && game[7] == 'o' && game[8] == 'o') {
                document.querySelector('h1').innerText = 'O Wins!'
                document.querySelector('h2').innerText = 'press clear to play again'
                game = ['p','p','p','p','p','p','p','p','p']
            }
            if (game[0] == 'o' && game[3] == 'o' && game[6] == 'o') {
                document.querySelector('h1').innerText = 'O Wins!'
                document.querySelector('h2').innerText = 'press clear to play again'
                game = ['p','p','p','p','p','p','p','p','p']
            }
            if (game[1] == 'o' && game[4] == 'o' && game[7] == 'o') {
                document.querySelector('h1').innerText = 'O Wins!'
                document.querySelector('h2').innerText = 'press clear to play again'
                game = ['p','p','p','p','p','p','p','p','p']
            }
            if (game[2] == 'o' && game[5] == 'o' && game[8] == 'o') {
                document.querySelector('h1').innerText = 'O Wins!'
                document.querySelector('h2').innerText = 'press clear to play again'
                game = ['p','p','p','p','p','p','p','p','p']
            }
            if (game[0] == 'o' && game[4] == 'o' && game[8] == 'o') {
                document.querySelector('h1').innerText = 'O Wins!'
                document.querySelector('h2').innerText = 'press clear to play again'
                game = ['p','p','p','p','p','p','p','p','p']
            }
            if (game[2] == 'o' && game[4] == 'o' && game[6] == 'o') {
                document.querySelector('h1').innerText = 'O Wins!'
                document.querySelector('h2').innerText = 'press clear to play again'
                game = ['p','p','p','p','p','p','p','p','p']
            }
            if (game[0] !== 'p' && game[1] !== 'p' && game[2] !== 'p' && game[3] !== 'p' && game[4] !== 'p' &&game[5] !== 'p' && game[6] !== 'p' && game[7] !== 'p'  && game[8] !== 'p'&&  game[0] !== '' && game[1] !== '' && game[2] !== '' && game[3] !== '' && game[4] !== '' &&game[5] !== '' && game[6] !== '' && game[7] !== ''  && game[8] !== ''  ){
                document.querySelector('h1').innerText = 'Tie!'
                document.querySelector('h2').innerText = 'keep playing?'
            }
        }, 1100)

})









// document.addEventListener('DOMContentLoaded', function () {

//     let playerChoice = 'x'
//     document.querySelector('h2').innerText = playerChoice + ' your turn'
//     let switchPlayer = function () {
//         if (playerChoice === 'x') {
//             playerChoice = 'o'
//             computerChoice()
//         }
//         else {
//             playerChoice = 'x'
//         }
//         document.querySelector('h2').innerText = playerChoice + ' your turn'
//     }


//     let game = ['','','','','','','','','']

//     function computerChoice () {
//         let randomNumber = Math.floor(Math.random() * 9);
//         //playerChoice = randomNumber

//         if (game[randomNumber] === '') {
//             game[randomNumber] = playerChoice
//             if (game[0] === 'o'){
//                 document.querySelector('#ul p').innerText = playerChoice
//             }
//             if (game[1] === 'o'){
//                 document.querySelector('#um p').innerText = playerChoice
//             }
//             if (game[2] === 'o'){
//                 document.querySelector('#ur p').innerText = playerChoice
//             }
//             if (game[3] === 'o'){
//                 document.querySelector('#ml p').innerText = playerChoice
//             }
//             if (game[4] === 'o'){
//                 document.querySelector('#mm p').innerText = playerChoice
//             }
//             if (game[5] === 'o'){
//                 document.querySelector('#mr p').innerText = playerChoice
//             }
//             if (game[6] === 'o'){
//                 document.querySelector('#bl p').innerText = playerChoice
//             }
//             if (game[7] === 'o'){
//                 document.querySelector('#bm p').innerText = playerChoice
//             }
//             if (game[8] === 'o'){
//                 document.querySelector('#br p').innerText = playerChoice
//             }
//         }
//         else {
//             computerChoice()
//         }
//         switchPlayer()
//         console.log(randomNumber)
//     }




//     const upperLeft = document.querySelector('#ul p')
//     document.querySelector('#ul').addEventListener('click', function () {
//         if (game[0] === '') {
//         console.log('hi')
//         upperLeft.innerText = playerChoice
//         game[0] = playerChoice
//         console.log(game, playerChoice)
//         switchPlayer()
//         }

//     })

//     const upperMiddle = document.querySelector('#um p')
//     document.querySelector('#um').addEventListener('click', function () {
//         if (game[1] === '') {
//             console.log('hi')
//             upperMiddle.innerText = playerChoice
//             game[1] = playerChoice
//             console.log(game, playerChoice)
//             switchPlayer()
//             }
//     })

//     const upperRight = document.querySelector('#ur p')
//     document.querySelector('#ur').addEventListener('click', function () {
//         if (game[2] === '') {
//         console.log('hi')
//         upperRight.innerText = playerChoice
//         game[2] = playerChoice
//         console.log(game, playerChoice)
//         switchPlayer()
//         }

//     })

//     const middleLeft = document.querySelector('#ml p')
//     document.querySelector('#ml').addEventListener('click', function () {
//         if (game[3] === '') {
//         console.log('hi')
//         middleLeft.innerText = playerChoice
//         game[3] = playerChoice
//         console.log(game, playerChoice)
//         switchPlayer()
//         }

//     })

//     const middleMiddle = document.querySelector('#mm p')
//     document.querySelector('#mm').addEventListener('click', function () {
//         if (game[4] === '') {
//         console.log('hi')
//         middleMiddle.innerText = playerChoice
//         game[4] = playerChoice
//         console.log(game, playerChoice)
//         switchPlayer()
//         }

//     })

//     const middleRight = document.querySelector('#mr p')
//     document.querySelector('#mr').addEventListener('click', function () {
//         if (game[5] === '') {
//         console.log('hi')
//         middleRight.innerText = playerChoice
//         game[5] = playerChoice
//         console.log(game, playerChoice)
//         switchPlayer()
//         }

//     })

//     const bottomLeft = document.querySelector('#bl p')
//     document.querySelector('#bl').addEventListener('click', function () {
//         if (game[6] === '') {
//         console.log('hi')
//         bottomLeft.innerText = playerChoice
//         game[6] = playerChoice
//         console.log(game, playerChoice)
//         switchPlayer()
//         }

//     })



//     const bottomMiddle = document.querySelector('#bm p')
//     document.querySelector('#bm').addEventListener('click', function () {
//         if (game[7] === '') {
//         console.log('hi')
//         bottomMiddle.innerText = playerChoice
//         game[7] = playerChoice
//         console.log(game, playerChoice)
//         switchPlayer()
//         }

//     })

//     const bottomRight = document.querySelector('#br p')
//     document.querySelector('#br').addEventListener('click', function () {
//         if (game[8] === '') {
//         console.log('hi')
//         bottomRight.innerText = playerChoice
//         game[8] = playerChoice
//         console.log(game, playerChoice)
//         switchPlayer()
//         }

//     })

//     document.querySelector('.board button').addEventListener('click', function() {
//         playerChoice = 'x'
//         document.querySelector('h1').innerText = 'Welcome to Tic Tac Toe'
//         document.querySelector('h2').innerText = playerChoice + ' your turn'
//         game = ['','','','','','','','','']
//         upperLeft.innerText = '-'
//         upperMiddle.innerText ='-'
//         upperRight.innerText = '-'
//         middleLeft.innerText = '-'
//         middleMiddle.innerText = '-'
//         middleRight.innerText = '-'
//         bottomLeft.innerText = '-'
//         bottomMiddle.innerText = '-'
//         bottomRight.innerText = '-'

//     })





















































































//     setInterval(function () {


//         if (game[0] == 'x' && game[1] == 'x' && game[2] == 'x') {
//             document.querySelector('h1').innerText = 'X Wins!'
//             document.querySelector('h2').innerText = 'press clear to play again'
//             game = ['p','p','p','p','p','p','p','p','p']
//         }
//         if (game[3] == 'x' && game[4] == 'x' && game[5] == 'x') {
//             document.querySelector('h1').innerText = 'X Wins!'
//             document.querySelector('h2').innerText = 'press clear to play again'
//             game = ['p','p','p','p','p','p','p','p','p']
//         }
//         if (game[6] == 'x' && game[7] == 'x' && game[8] == 'x') {
//             document.querySelector('h1').innerText = 'X Wins!'
//             document.querySelector('h2').innerText = 'press clear to play again'
//             game = ['p','p','p','p','p','p','p','p','p']
//         }
//         if (game[0] == 'x' && game[3] == 'x' && game[6] == 'x') {
//             document.querySelector('h1').innerText = 'X Wins!'
//             document.querySelector('h2').innerText = 'press clear to play again'
//             game = ['p','p','p','p','p','p','p','p','p']
//         }
//         if (game[1] == 'x' && game[4] == 'x' && game[7] == 'x') {
//             document.querySelector('h1').innerText = 'X Wins!'
//             document.querySelector('h2').innerText = 'press clear to play again'
//             game = ['p','p','p','p','p','p','p','p','p']
//         }
//         if (game[2] == 'x' && game[5] == 'x' && game[8] == 'x') {
//             document.querySelector('h1').innerText = 'X Wins!'
//             document.querySelector('h2').innerText = 'press clear to play again'
//             game = ['p','p','p','p','p','p','p','p','p']
//         }
//         if (game[0] == 'x' && game[4] == 'x' && game[8] == 'x') {
//             document.querySelector('h1').innerText = 'X Wins!'
//             document.querySelector('h2').innerText = 'press clear to play again'
//             game = ['p','p','p','p','p','p','p','p','p']
//         }
//         if (game[2] == 'x' && game[4] == 'x' && game[6] == 'x') {
//             document.querySelector('h1').innerText = 'X Wins!'
//             document.querySelector('h2').innerText = 'press clear to play again'
//             game = ['p','p','p','p','p','p','p','p','p']
//         }

//         if (game[0] == 'o' && game[1] == 'o' && game[2] == 'o') {
//             document.querySelector('h1').innerText = 'O Wins!'
//             document.querySelector('h2').innerText = 'press clear to play again'
//             game = ['p','p','p','p','p','p','p','p','p']
//         }
//         if (game[3] == 'o' && game[4] == 'o' && game[5] == 'o') {
//             document.querySelector('h1').innerText = 'O Wins!'
//             document.querySelector('h2').innerText = 'press clear to play again'
//             game = ['p','p','p','p','p','p','p','p','p']
//         }
//         if (game[6] == 'o' && game[7] == 'o' && game[8] == 'o') {
//             document.querySelector('h1').innerText = 'O Wins!'
//             document.querySelector('h2').innerText = 'press clear to play again'
//             game = ['p','p','p','p','p','p','p','p','p']
//         }
//         if (game[0] == 'o' && game[3] == 'o' && game[6] == 'o') {
//             document.querySelector('h1').innerText = 'O Wins!'
//             document.querySelector('h2').innerText = 'press clear to play again'
//             game = ['p','p','p','p','p','p','p','p','p']
//         }
//         if (game[1] == 'o' && game[4] == 'o' && game[7] == 'o') {
//             document.querySelector('h1').innerText = 'O Wins!'
//             document.querySelector('h2').innerText = 'press clear to play again'
//             game = ['p','p','p','p','p','p','p','p','p']
//         }
//         if (game[2] == 'y' && game[5] == 'y' && game[8] == 'y') {
//             document.querySelector('h1').innerText = 'Y Wins!'
//             document.querySelector('h2').innerText = 'press clear to play again'
//             game = ['p','p','p','p','p','p','p','p','p']
//         }
//         if (game[0] == 'o' && game[4] == 'o' && game[8] == 'o') {
//             document.querySelector('h1').innerText = 'O Wins!'
//             document.querySelector('h2').innerText = 'press clear to play again'
//             game = ['p','p','p','p','p','p','p','p','p']
//         }
//         if (game[2] == 'o' && game[4] == 'o' && game[6] == 'o') {
//             document.querySelector('h1').innerText = 'O Wins!'
//             document.querySelector('h2').innerText = 'press clear to play again'
//             game = ['p','p','p','p','p','p','p','p','p']
//         }
//         if (game[0] !== 'p' && game[1] !== 'p' && game[2] !== 'p' && game[3] !== 'p' && game[4] !== 'p' &&game[5] !== 'p' && game[6] !== 'p' && game[7] !== 'p'  && game[8] !== 'p'&&  game[0] !== '' && game[1] !== '' && game[2] !== '' && game[3] !== '' && game[4] !== '' &&game[5] !== '' && game[6] !== '' && game[7] !== ''  && game[8] !== ''  ){
//             document.querySelector('h1').innerText = 'u'
//         }
//     }, 1100)

// })





















// document.addEventListener('DOMContentLoaded', function () {

//     let playerChoice = 'x'
//     document.querySelector('h2').innerText = playerChoice + ' your turn'
//     let switchPlayer = function () {
//         if (playerChoice === 'x') {
//             playerChoice = 'y'
//         }
//         else {
//             playerChoice = 'x'
//         }
//         document.querySelector('h2').innerText = playerChoice + ' your turn'
//     }
//     let game = ['','','','','','','','','']






//     const upperLeft = document.querySelector('#ul p')
//     document.querySelector('#ul').addEventListener('click', function () {
//         if (game[0] === '') {
//         console.log('hi')
//         upperLeft.innerText = playerChoice
//         game[0] = playerChoice
//         console.log(game, playerChoice)
//         switchPlayer()
//         }

//     })

//     const upperMiddle = document.querySelector('#um p')
//     document.querySelector('#um').addEventListener('click', function () {
//         if (game[1] === '') {
//             console.log('hi')
//             upperMiddle.innerText = playerChoice
//             game[1] = playerChoice
//             console.log(game, playerChoice)
//             switchPlayer()
//             }
//     })

//     const upperRight = document.querySelector('#ur p')
//     document.querySelector('#ur').addEventListener('click', function () {
//         if (game[2] === '') {
//         console.log('hi')
//         upperRight.innerText = playerChoice
//         game[2] = playerChoice
//         console.log(game, playerChoice)
//         switchPlayer()
//         }

//     })

//     const middleLeft = document.querySelector('#ml p')
//     document.querySelector('#ml').addEventListener('click', function () {
//         if (game[3] === '') {
//         console.log('hi')
//         middleLeft.innerText = playerChoice
//         game[3] = playerChoice
//         console.log(game, playerChoice)
//         switchPlayer()
//         }

//     })

//     const middleMiddle = document.querySelector('#mm p')
//     document.querySelector('#mm').addEventListener('click', function () {
//         if (game[4] === '') {
//         console.log('hi')
//         middleMiddle.innerText = playerChoice
//         game[4] = playerChoice
//         console.log(game, playerChoice)
//         switchPlayer()
//         }

//     })

//     const middleRight = document.querySelector('#mr p')
//     document.querySelector('#mr').addEventListener('click', function () {
//         if (game[5] === '') {
//         console.log('hi')
//         middleRight.innerText = playerChoice
//         game[5] = playerChoice
//         console.log(game, playerChoice)
//         switchPlayer()
//         }

//     })

//     const bottomLeft = document.querySelector('#bl p')
//     document.querySelector('#bl').addEventListener('click', function () {
//         if (game[6] === '') {
//         console.log('hi')
//         bottomLeft.innerText = playerChoice
//         game[6] = playerChoice
//         console.log(game, playerChoice)
//         switchPlayer()
//         }

//     })



//     const bottomMiddle = document.querySelector('#bm p')
//     document.querySelector('#bm').addEventListener('click', function () {
//         if (game[7] === '') {
//         console.log('hi')
//         bottomMiddle.innerText = playerChoice
//         game[7] = playerChoice
//         console.log(game, playerChoice)
//         switchPlayer()
//         }

//     })

//     const bottomRight = document.querySelector('#br p')
//     document.querySelector('#br').addEventListener('click', function () {
//         if (game[8] === '') {
//         console.log('hi')
//         bottomRight.innerText = playerChoice
//         game[8] = playerChoice
//         console.log(game, playerChoice)
//         switchPlayer()
//         }

//     })

//     document.querySelector('.board button').addEventListener('click', function() {
//         playerChoice = 'x'
//         document.querySelector('h1').innerText = 'Welcome to Tic Tac Toe'
//         document.querySelector('h2').innerText = playerChoice + ' your turn'
//         game = ['','','','','','','','','']
//         upperLeft.innerText = '-'
//         upperMiddle.innerText ='-'
//         upperRight.innerText = '-'
//         middleLeft.innerText = '-'
//         middleMiddle.innerText = '-'
//         middleRight.innerText = '-'
//         bottomLeft.innerText = '-'
//         bottomMiddle.innerText = '-'
//         bottomRight.innerText = '-'

//     })






//     setInterval(function () {


//         if (game[0] == 'x' && game[1] == 'x' && game[2] == 'x') {
//             document.querySelector('h1').innerText = 'X Wins!'
//             document.querySelector('h2').innerText = 'press clear to play again'
//             game = ['p','p','p','p','p','p','p','p','p']
//         }
//         if (game[3] == 'x' && game[4] == 'x' && game[5] == 'x') {
//             document.querySelector('h1').innerText = 'X Wins!'
//             document.querySelector('h2').innerText = 'press clear to play again'
//             game = ['p','p','p','p','p','p','p','p','p']
//         }
//         if (game[6] == 'x' && game[7] == 'x' && game[8] == 'x') {
//             document.querySelector('h1').innerText = 'X Wins!'
//             document.querySelector('h2').innerText = 'press clear to play again'
//             game = ['p','p','p','p','p','p','p','p','p']
//         }
//         if (game[0] == 'x' && game[3] == 'x' && game[6] == 'x') {
//             document.querySelector('h1').innerText = 'X Wins!'
//             document.querySelector('h2').innerText = 'press clear to play again'
//             game = ['p','p','p','p','p','p','p','p','p']
//         }
//         if (game[1] == 'x' && game[4] == 'x' && game[7] == 'x') {
//             document.querySelector('h1').innerText = 'X Wins!'
//             document.querySelector('h2').innerText = 'press clear to play again'
//             game = ['p','p','p','p','p','p','p','p','p']
//         }
//         if (game[2] == 'x' && game[5] == 'x' && game[8] == 'x') {
//             document.querySelector('h1').innerText = 'X Wins!'
//             document.querySelector('h2').innerText = 'press clear to play again'
//             game = ['p','p','p','p','p','p','p','p','p']
//         }
//         if (game[0] == 'x' && game[4] == 'x' && game[8] == 'x') {
//             document.querySelector('h1').innerText = 'X Wins!'
//             document.querySelector('h2').innerText = 'press clear to play again'
//             game = ['p','p','p','p','p','p','p','p','p']
//         }
//         if (game[2] == 'x' && game[4] == 'x' && game[6] == 'x') {
//             document.querySelector('h1').innerText = 'X Wins!'
//             document.querySelector('h2').innerText = 'press clear to play again'
//             game = ['p','p','p','p','p','p','p','p','p']
//         }

//         if (game[0] == 'y' && game[1] == 'y' && game[2] == 'y') {
//             document.querySelector('h1').innerText = 'Y Wins!'
//             document.querySelector('h2').innerText = 'press clear to play again'
//             game = ['p','p','p','p','p','p','p','p','p']
//         }
//         if (game[3] == 'y' && game[4] == 'y' && game[5] == 'y') {
//             document.querySelector('h1').innerText = 'Y Wins!'
//             document.querySelector('h2').innerText = 'press clear to play again'
//             game = ['p','p','p','p','p','p','p','p','p']
//         }
//         if (game[6] == 'y' && game[7] == 'y' && game[8] == 'y') {
//             document.querySelector('h1').innerText = 'Y Wins!'
//             document.querySelector('h2').innerText = 'press clear to play again'
//             game = ['p','p','p','p','p','p','p','p','p']
//         }
//         if (game[0] == 'y' && game[3] == 'y' && game[6] == 'y') {
//             document.querySelector('h1').innerText = 'Y Wins!'
//             document.querySelector('h2').innerText = 'press clear to play again'
//             game = ['p','p','p','p','p','p','p','p','p']
//         }
//         if (game[1] == 'y' && game[4] == 'y' && game[7] == 'y') {
//             document.querySelector('h1').innerText = 'Y Wins!'
//             document.querySelector('h2').innerText = 'press clear to play again'
//             game = ['p','p','p','p','p','p','p','p','p']
//         }
//         if (game[2] == 'y' && game[5] == 'y' && game[8] == 'y') {
//             document.querySelector('h1').innerText = 'Y Wins!'
//             document.querySelector('h2').innerText = 'press clear to play again'
//             game = ['p','p','p','p','p','p','p','p','p']
//         }
//         if (game[0] == 'y' && game[4] == 'y' && game[8] == 'y') {
//             document.querySelector('h1').innerText = 'Y Wins!'
//             document.querySelector('h2').innerText = 'press clear to play again'
//             game = ['p','p','p','p','p','p','p','p','p']
//         }
//         if (game[2] == 'y' && game[4] == 'y' && game[6] == 'y') {
//             document.querySelector('h1').innerText = 'Y Wins!'
//             document.querySelector('h2').innerText = 'press clear to play again'
//             game = ['p','p','p','p','p','p','p','p','p']
//         }
//         if (game[0] !== 'p' && game[1] !== 'p' && game[2] !== 'p' && game[3] !== 'p' && game[4] !== 'p' &&game[5] !== 'p' && game[6] !== 'p' && game[7] !== 'p'  && game[8] !== 'p'&&  game[0] !== '' && game[1] !== '' && game[2] !== '' && game[3] !== '' && game[4] !== '' &&game[5] !== '' && game[6] !== '' && game[7] !== ''  && game[8] !== ''  ){
//             document.querySelector('h1').innerText = 'u'
//         }
//     }, 1100)

// })

// document.addEventListener('DOMContentLoaded', function () {
//     let playerChoice = 'x'
//     document.querySelector('h2').innerText = playerChoice + ' your turn'
//     let switchPlayer = function () {
//         if (playerChoice === 'x') {
//             playerChoice = 'y'
//         }
//         else {
//             playerChoice = 'x'
//         }
//         document.querySelector('h2').innerText = playerChoice + ' your turn'
//     }
//     let game = ['','','','','','','','','']


//     const upperLeft = document.querySelector('#ul p')
//     document.querySelector('#ul').addEventListener('click', function () {
//         if (game[0] === '') {
//         console.log('hi')
//         upperLeft.innerText = playerChoice
//         game[0] = playerChoice
//         console.log(game, playerChoice)
//         switchPlayer()
//         }

//     })

//     const upperMiddle = document.querySelector('#um p')
//     document.querySelector('#um').addEventListener('click', function () {
//         if (game[1] === '') {
//             console.log('hi')
//             upperMiddle.innerText = playerChoice
//             game[1] = playerChoice
//             console.log(game, playerChoice)
//             switchPlayer()
//             }
//     })

//     const upperRight = document.querySelector('#ur p')
//     document.querySelector('#ur').addEventListener('click', function () {
//         if (game[2] === '') {
//         console.log('hi')
//         upperRight.innerText = playerChoice
//         game[2] = playerChoice
//         console.log(game, playerChoice)
//         switchPlayer()
//         }

//     })

//     const middleLeft = document.querySelector('#ml p')
//     document.querySelector('#ml').addEventListener('click', function () {
//         if (game[3] === '') {
//         console.log('hi')
//         middleLeft.innerText = playerChoice
//         game[3] = playerChoice
//         console.log(game, playerChoice)
//         switchPlayer()
//         }

//     })

//     const middleMiddle = document.querySelector('#mm p')
//     document.querySelector('#mm').addEventListener('click', function () {
//         if (game[4] === '') {
//         console.log('hi')
//         middleMiddle.innerText = playerChoice
//         game[4] = playerChoice
//         console.log(game, playerChoice)
//         switchPlayer()
//         }

//     })

//     const middleRight = document.querySelector('#mr p')
//     document.querySelector('#mr').addEventListener('click', function () {
//         if (game[5] === '') {
//         console.log('hi')
//         middleRight.innerText = playerChoice
//         game[5] = playerChoice
//         console.log(game, playerChoice)
//         switchPlayer()
//         }

//     })

//     const bottomLeft = document.querySelector('#bl p')
//     document.querySelector('#bl').addEventListener('click', function () {
//         if (game[6] === '') {
//         console.log('hi')
//         bottomLeft.innerText = playerChoice
//         game[6] = playerChoice
//         console.log(game, playerChoice)
//         switchPlayer()
//         }

//     })



//     const bottomMiddle = document.querySelector('#bm p')
//     document.querySelector('#bm').addEventListener('click', function () {
//         if (game[7] === '') {
//         console.log('hi')
//         bottomMiddle.innerText = playerChoice
//         game[7] = playerChoice
//         console.log(game, playerChoice)
//         switchPlayer()
//         }

//     })

//     const bottomRight = document.querySelector('#br p')
//     document.querySelector('#br').addEventListener('click', function () {
//         if (game[8] === '') {
//         console.log('hi')
//         bottomRight.innerText = playerChoice
//         game[8] = playerChoice
//         console.log(game, playerChoice)
//         switchPlayer()
//         }

//     })

//     document.querySelector('.board button').addEventListener('click', function() {
//         playerChoice = 'x'
//         document.querySelector('h1').innerText = 'Welcome to Tic Tac Toe'
//         document.querySelector('h2').innerText = playerChoice + ' your turn'
//         game = ['','','','','','','','','']
//         upperLeft.innerText = '-'
//         upperMiddle.innerText ='-'
//         upperRight.innerText = '-'
//         middleLeft.innerText = '-'
//         middleMiddle.innerText = '-'
//         middleRight.innerText = '-'
//         bottomLeft.innerText = '-'
//         bottomMiddle.innerText = '-'
//         bottomRight.innerText = '-'

//     })




//     setInterval(function () {
//         if (game[0] == 'x' && game[1] == 'x' && game[2] == 'x') {
//             document.querySelector('h1').innerText = 'X Wins!'
//             document.querySelector('h2').innerText = 'press clear to play again'
//         }
//         if (game[3] == 'x' && game[4] == 'x' && game[5] == 'x') {
//             document.querySelector('h1').innerText = 'X Wins!'
//             document.querySelector('h2').innerText = 'press clear to play again'
//         }
//         if (game[6] == 'x' && game[7] == 'x' && game[8] == 'x') {
//             document.querySelector('h1').innerText = 'X Wins!'
//             document.querySelector('h2').innerText = 'press clear to play again'
//         }
//         if (game[0] == 'x' && game[3] == 'x' && game[6] == 'x') {
//             document.querySelector('h1').innerText = 'X Wins!'
//             document.querySelector('h2').innerText = 'press clear to play again'
//         }
//         if (game[1] == 'x' && game[4] == 'x' && game[7] == 'x') {
//             document.querySelector('h1').innerText = 'X Wins!'
//             document.querySelector('h2').innerText = 'press clear to play again'
//         }
//         if (game[2] == 'x' && game[5] == 'x' && game[8] == 'x') {
//             document.querySelector('h1').innerText = 'X Wins!'
//             document.querySelector('h2').innerText = 'press clear to play again'
//         }
//         if (game[0] == 'x' && game[4] == 'x' && game[8] == 'x') {
//             document.querySelector('h1').innerText = 'X Wins!'
//             document.querySelector('h2').innerText = 'press clear to play again'
//         }
//         if (game[2] == 'x' && game[4] == 'x' && game[6] == 'x') {
//             document.querySelector('h1').innerText = 'X Wins!'
//             document.querySelector('h2').innerText = 'press clear to play again'
//         }

//         if (game[0] == 'y' && game[1] == 'y' && game[2] == 'y') {
//             document.querySelector('h1').innerText = 'Y Wins!'
//             document.querySelector('h2').innerText = 'press clear to play again'
//         }
//         if (game[3] == 'y' && game[4] == 'y' && game[5] == 'y') {
//             document.querySelector('h1').innerText = 'Y Wins!'
//             document.querySelector('h2').innerText = 'press clear to play again'
//         }
//         if (game[6] == 'y' && game[7] == 'y' && game[8] == 'y') {
//             document.querySelector('h1').innerText = 'Y Wins!'
//             document.querySelector('h2').innerText = 'press clear to play again'
//         }
//         if (game[0] == 'y' && game[3] == 'y' && game[6] == 'y') {
//             document.querySelector('h1').innerText = 'Y Wins!'
//             document.querySelector('h2').innerText = 'press clear to play again'
//         }
//         if (game[1] == 'y' && game[4] == 'y' && game[7] == 'y') {
//             document.querySelector('h1').innerText = 'Y Wins!'
//             document.querySelector('h2').innerText = 'press clear to play again'
//         }
//         if (game[2] == 'y' && game[5] == 'y' && game[8] == 'y') {
//             document.querySelector('h1').innerText = 'Y Wins!'
//             document.querySelector('h2').innerText = 'press clear to play again'
//         }
//         if (game[0] == 'y' && game[4] == 'y' && game[8] == 'y') {
//             document.querySelector('h1').innerText = 'Y Wins!'
//             document.querySelector('h2').innerText = 'press clear to play again'
//         }
//         if (game[2] == 'y' && game[4] == 'y' && game[6] == 'y') {
//             document.querySelector('h1').innerText = 'Y Wins!'
//             document.querySelector('h2').innerText = 'press clear to play again'
//         }
//         if (game[0] !== '' && game[1] !== '' && game[2] !== '' && game[3] !== '' && game[4] !== '' &&game[5] !== '' && game[6] !== '' && game[7] !== ''  && game[8] !== ''  ){
//             document.querySelector('h1').innerText = 'u'
//         }
//     }, 1100)


// })
