const username = document.querySelector('#username')
const saveScoreBtn = document.querySelector('#saveScoreBtn')
const finalScore = document.querySelector('#final-score')
const mostRecentScore = JSON.parse(localStorage.getItem('mostRecentScore'))
const nameScore = document.querySelector('#nameScore')
const highScores = JSON.parse(localStorage.getItem('highScores')) || []

// const MAX_HIGH_SCORES = 5
console.log('here is score ', mostRecentScore)
finalScore.innerHTML = mostRecentScore


function captureScore() {
    event.preventDefault()
    console.log(mostRecentScore)
    const newPerson = {
        score: mostRecentScore,
        name: username.value
    }

    highScores.push(newPerson)
    localStorage.setItem('highScores', JSON.stringify (highScores))
    displayScore()
    // window.location.assign('/')
}

function displayScore() {
    var highScoresArray = JSON.parse(localStorage.getItem('highScores'))
    for (let index = 0; index < highScoresArray.length; index++) {
        var personScore = document.createElement('p')
        personScore.innerHTML = `${highScoresArray[index].name}: ${highScoresArray[index].score}`
        nameScore.appendChild(personScore)
    }
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
