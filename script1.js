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
        "A password manager tells you to do your homework, whereas a Passwprd API generates memes for your facebook page"]
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
];

// Get DOM elements
const questionDiv = document.querySelector('.question');
const answerDiv = document.querySelector('.answers').children;

let answerDivArr = Array.from(answerDiv);

document.addEventListener('DOMContentLoaded', () => {
    loadNewQuestion();    
});

let currentQuestion = 0; 

// Load new question
function loadNewQuestion() {
    if (currentQuestion < questions.length) {
        questionDiv.textContent = `${currentQuestion + 1}: ${questions[currentQuestion].question}`;
        for (let answers of answerDiv) {
            answers.textContent = questions[currentQuestion].options[answerDivArr.indexOf(answers)];
        }
    } else { endQuiz(); }   
}    

let isCorrect = null;

// Add event listener to each answer
answerDivArr.forEach((answers) => {
    answers.addEventListener('click', (e) => {
        e.preventDefault();
        const selectedAnswer = e.target.textContent;
        
        if (selectedAnswer === questions[currentQuestion].answer) {
            answers.style.backgroundColor = 'green';
            isCorrect = true;
        } else if (selectedAnswer !== questions[currentQuestion].answer) {
            answers.style.backgroundColor = 'red';
            isCorrect = false;
        } else {
            isCorrect = null;
        }
        
        
    });
});

// Submit button
const submit = document.querySelector('.submit-button');
submit.addEventListener('click', () => {
    if (isCorrect) {
        incrementScore();
        currentQuestion++;
        for (let answers of answerDiv) {
            answers.style.backgroundColor = 'white';
        }
        loadNewQuestion();
    } else if (isCorrect === false) {
        incrementWrongScore();
        currentQuestion++;
        for (let answers of answerDiv) {
            answers.style.backgroundColor = 'white';
        }
        loadNewQuestion();
    } else {
        alert('Please select an answer');
        return;
    }
});

//restart button
const restart = document.querySelector('.play-again');
restart.addEventListener('click', () => {
    window.location.replace('quiz.html');
    currentQuestion = 0;
    score = 0;
    wrongScore = 0;
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

// Get final score
const finalScore = document.querySelector('.final-score')

// End Quiz 
function endQuiz() {
    goToEndPage();
    finalScore.textContent = `You answered ${score} out of ${questions.length}`;
}

function goToEndPage() {
    window.location.href = 'end.html'; 
}