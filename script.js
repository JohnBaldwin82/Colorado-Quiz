const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressBarText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

var timeLeft = 45;
var elem = document.getElementById('Timer')

var timerId = setInterval(countdown, 1000);

function countdown() {
    if(timeLeft ==0) {
        clearTimeout(TimerId);
        doSomething();
    } else {
        elem.innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;
    }
}
 
let questions = [
    {
        question: "What is the oldest restaurant in Colorado?",
        choice1: "Casa Bonita",
        choice2: "Buckhorn Exchange",
        choice3: "The Fort",
        choice4: "Buds Burgers",
        answer: 2,
    },
    {
        question: "What is the state bird of Colorado?",
        choice1: "Swamp Sparrow",
        choice2: "Lark Sparrow",
        choice3: "Lark Bunting",
        choice4: "Brewers Sparrow",
        answer: 3,
    },
    {
        question: "What is the capital of Colorado?",
        choice1: "Fort Collins",
        choice2: "Colorado Springs",
        choice3: "Aspen",
        choice4: "Denver",
        answer: 4,
    },
    {
        question: "What year was Denver University Founded?",
        choice1: "1864",
        choice2: "1908",
        choice3: "1865",
        choice4: "1900",
        answer: 1,
    }
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 4

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }
    questionCounter++
    progressText.textContent = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    
    let test =  `${(questionCounter/MAX_QUESTIONS) * 100}%`
    console.log(test)
    //progressBarFull.style.width = test;
    progressBarFull.setAttribute("style",`width: ${test}`)

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset.number
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.getAttribute('data-number')

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'
        // removes 10 seconds for wrong answer
        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        } else {
            timeLeft = timeLeft - 10
        }

        

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score

}

startGame()
    
   