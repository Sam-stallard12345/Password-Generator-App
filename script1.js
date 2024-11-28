// Questions and Answers

const questions = [ 
    {
        question:   
        "Which of the following is not a function of a password API?", 
        answer: "Hacking into overseas military operations",
        options: ["Hacking into overseas military operations", 
            "Allows end users in your team to update their passwords", 
            "A tool to help users generate strong passwords", 
            "Can include paramaters such as length, uppercase letters, lowercase letters, numbers, and special symbols"]
    },
    {
        question:   
        "What is the difference between a password API and a password manager?",
        answer: "A password API is a tool that helps users generate strong passwords, while a password manager is a tool that helps users store and manage their passwords.",
        options: ["A password API is a tool that helps users generate strong passwords, while a password manager is a tool that helps users store and manage their passwords.",
            "A password API is a tool that helps users store and manage their passwords, while a password manager is a tool that helps users generate strong passwords.",
            "A password API can be used to generate passwords for multiple users, while a password manager is used to generate passwords for a single user.",
        ""]
    },
    {
        question: "Which of the following is not a disadvantage of using a password generator?",
        answer: "Passwords Are Harder to guess",
        options: ["Generated Passwords Can Be Difficult to Enter",
            "Passwords Are Harder to Memorize. Strong and complicated passwords improve your security, but they can be difficult to commit to memory.",
            "There Are Security Concerns. Password generators are only as secure as the systems that host them.",
            "Passwords Are Harder to guess"
        ]
    },
    {
        question: "Which algorithm is used for random password generators?",
        answer: "The main algorithm for password generation contains a FOR loop, whichgenerates a random number between 1 and 4 to choose the character set",
        options: ["The main algorithm for password generation contains a FOR loop, whichgenerates a random number between 1 and 4 to choose the character set",
            "Cryptography",
            "MD5",
            "SHA-256"
        ]
    }
]

// Get DOM elements
const questionDiv = document.querySelectorAll('.question');
const answerDiv = document.querySelectorAll('.answer');
const answers = document.querySelectorAll('.answer .button');


document.addEventListener('DOMContentLoaded', () => {
    runGame();    
});

// Run game function
function runGame() {
    // Set current question
    let currentQuestion = 0;    

    // Display question
    questionDiv.textContent = questions[currentQuestion].question;

    // Display options
    for (let answer of answers) {
        answer.textContent = questions[currentQuestion].options[answers.indexOf(answer)];
    }

    // End quiz
    if (currentQuestion === questions.length) {
        endQuiz();
    }
}

// Add event listener to each answer
answers.forEach((answer) => {
    answer.addEventListener('click', () => {
        if (this.value() === questions[currentQuestion].answer) {
            answer.style.backgroundColor = 'green';
            incrementScore();
        } else {
            answer.style.backgroundColor = 'red';
            incrementWrongScore();
        }
        // Increment current question
        currentQuestion++;
    });
});

// Set total questions
let totalQuestions = document.querySelector('.total-questions');
totalQuestions.textContent = questions.length;

//increment score
let score = 0;
const scoreDiv = document.querySelector('.correct');

function incrementScore() {
    score++;
    scoreDiv.textContent = `Correct Answers: ${score}`;
}   

//increment wrong score
let wrongScore = 0;
const wrongScoreDiv = document.querySelector('.incorrect');

function incrementWrongScore() {
    wrongScore++;
    wrongScoreDiv.textContent = `Incorrect Answers: ${wrongScore}`;
}

// click submit to generate a new question
const submit = document.querySelector('.submit-button');
submit.addEventListener('click', () => {
    ;
});

// End Quiz 
function endQuiz () {
    let endPage = document.querySelector('#end-page');
    let finalScore = document.querySelector('.final-score');
    let quizContainer = document.querySelector('#quiz');

    if (currentQuestion > questions.length) {
        quizContainer.classList.add('hidden');
        endPage.classList.remove('hidden');
        finalScore.textContent = `Your final score is ${score} out of ${questions.length}`;
    }

    // Restart quiz
    const restart = document.querySelector('.restart');
    restart.addEventListener('submit', () => {
        runGame();
    });
}