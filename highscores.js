const highScoresList = document.querySelector('#highScoresList')
const highScores = JSON.parse(localStorage.getItem('highScores')) || []

highScoresList.innerHTML = highScores.map(newPerson => {
    return`<li class="high-score">${newPerson.name} - ${newPerson.score}</li>`
}).join('')