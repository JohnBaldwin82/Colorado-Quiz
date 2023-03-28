const username = document.querySelector('#username')
const saveScoreBtn = document.querySelector('#saveScoreBtn')
const finalScore = document.querySelector('#finalScore')
const mostRecentScore = JSON.parse(localStorage.getItem('mostRecentScore'))

const highScores = JSON.parse(localStorage.getItem('highscores')) || []

// const MAX_HIGH_SCORES = 5

//finalScore.textContent = 


function captureScore() {
    console.log(mostRecentScore)
    const newPerson = {
        score: mostRecentScore,
        name: username.value
    }

    highScores.push(newPerson)
    localStorage.setItem('highscores', JSON.stringify (highScores))
    window.location.assign('/')
}
saveScoreBtn.addEventListener('click', captureScore)
// username.addEventListener('keyup', () => {
//     saveScoreBtn.disabled = !username.value
// })

// saveHighScore = e => {
//     e.preventDefault()

//     const score = {
//         score: mostRecentScore,
//         name: username.value
//     }

//     highScores.push(score)

//     highScores.sort((a,b) =>{
//     return b.score - a.score
//     })
// }

// highScores.splice[5]

// localStorage.setItem('highScores', JSON.stringify(highScores))
// window.location.assign('/')
