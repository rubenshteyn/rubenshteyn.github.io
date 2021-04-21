// $ (document).ready(function() {
//     $ ('.open-btn').click(function() {
//         $ ('.popup ').addClass('open')
//     })
//     $ ('.close').click(function() {
//         $ ('.popup').removeClass('open')
//     })

//     $ ('.burger').click(function() {
//         $ ('.list').toggleClass('open')
//     })

//     $ ('.burger').click(function() {
//         $ ('.burger').toggleClass('burger-active')
//     })
// })

// document.querySelector('.open-btn').click(function() {
//     document.querySelector('.popup').classList.toggle('open');
// });

var btn = document.querySelector('.open-btn');
btn.addEventListener('click', function() {
    document.querySelector('.popup').classList.toggle('open');
})

var close = document.querySelector('.close');
close.addEventListener('click', function() {
    document.querySelector('.popup').classList.remove('open');
})
   

burger = document.querySelector('.burger');
burger.addEventListener('click', function() {
    document.querySelector('.list').classList.toggle('open');
    burger.classList.toggle('burger-active')
})

//

const DATA = [
    {
        question: 'I will succeed?',
        answers: [
            {
                id: '1',
                value: 'No you are a loser',
                correct: false,
            },

            {
                id: '2',
                value: 'Go to the plant to work',
                correct: false,
            },

            {
                id: '3',
                value: 'Anything is possible if you want',
                correct: true,
            },
        ]
    },

    {
        question: 'Do peoples words mean something?',
        answers: [
            {
                id: '4',
                value: 'Partly',
                correct: false,
            },

            {
                id: '5',
                value: 'They are always right',
                correct: false,
            },

            {
                id: '6',
                value: 'You need to listen to your mind',
                correct: true,
            },
        ]
    },
]

let localResults = {};

const questions = document.getElementById('questions');
const indicator = document.getElementById('indicator');
const btnNext = document.getElementById('btn-next');
const results = document.getElementById('results');
const quiz = document.getElementById('quiz');
const btnRestart = document.getElementById('btn-restart');

const renderQuestions = (index) => {
    renderIndicator(index + 1);
    questions.dataset.currentStep = index;
    const renderAnswer = () => DATA[index].answers
        .map((answer) =>  `
            <li>
                <label>
                    <input class="answer-input" type="radio" name=${index} value=${answer.id}>
                    ${answer.value}
                </label>
            </li>
            `)
        .join('');

    questions.innerHTML = `
    <div class="quiz-questions-item">
        <div class="quiz-questions-item__question">${DATA[index].question}</div>
        <ul class="quiz-questions-answers__question">${renderAnswer()}</ul>
    </div>
    
    `;
};

const renderResults = () => {
    let content = '';

    const getClassname = (answer, questionIndex) => {
        let classname = '';

        if (!answer.correct && answer.id === localResults[questionIndex]) {
            classname = 'answer--invalid';
        } else if (answer.correct) {
            classname = 'answer--valid';
        }

        return classname;
    }

    const getAnswers = (questionIndex) =>  DATA[questionIndex].answers
        .map((answer) => `<li class=${getClassname(answer, questionIndex)}>${answer.value}</li>`)
        .join('');

    DATA.forEach((question, index) => {
        content += `
            <div class="quiz-results-item">
                <div class="quiz-results-item__question">${question.question}</div>
                <ul class="quiz-results-answers__question">${getAnswers(index)}</ul>
            </div>
        `;
    })

    results.innerHTML = content;
};

const renderIndicator = (currentStep) => {
    indicator.innerHTML = `${currentStep}/${DATA.length}`
};

quiz.addEventListener('change', (event) => {
    // логика ответа
    if (event.target.classList.contains('answer-input')) {
        localResults[event.target.name] = event.target.value;
        btnNext.disabled = false;
    }
})

quiz.addEventListener('click', (event) => {
    // вперед или сначала

    if (event.target.classList.contains('btn-next')) {
        const nextQuestionIndex = Number(questions.dataset.currentStep) + 1;

        if (DATA.length === nextQuestionIndex) {
            questions.classList.add('questions--hidden');
            indicator.classList.add('indicator--hidden');
            results.classList.add('results--visible');
            btnNext.classList.add('btn-next--hidden');
            btnRestart.classList.add('btn-restart--visible');
            renderResults()
            // переход к результатам
        } else {
            // переход к след вопросу
            renderQuestions(nextQuestionIndex);
        }
        btnNext.disabled = true;
    }

    if (event.target.classList.contains('btn-restart')) {
        localResults = {};
        results.innerHTML = '';

        questions.classList.remove('questions--hidden');
        indicator.classList.remove('indicator--hidden');
        results.classList.remove('results--visible');
        btnNext.classList.remove('btn-next--hidden');
        btnRestart.classList.remove('btn-restart--visible');

        renderQuestions(0);
    }
});

renderQuestions(0);
