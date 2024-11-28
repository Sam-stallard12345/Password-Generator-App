// Questions and Answers

const questions = [ 
    {
        question:   
        "Which of the following is not a function of a password API?", 
        answer: "Hacking into overseas military operations",
        options: ["Hacking into overseas military operations", 
            "allows end users in your team to update their passwords", 
            "a tool to help users generate strong passwords", 
            "Can include paramaters such as length, uppercase letters, lowercase letters, numbers, and special symbols"]
    },
    {
        question:   
        "What is the difference between a password API and a password manager?",
        answer: "A password API is a tool that helps users generate strong passwords, while a password manager is a tool that helps users store and manage their passwords.",
        options: ["A password API is a tool that helps users generate strong passwords, while a password manager is a tool that helps users store and manage their passwords.",
            "A password API is a tool that helps users store and manage their passwords, while a password manager is a tool that helps users generate strong passwords.",
            "A password API is a tool that helps users generate strong passwords, while a password manager is a tool that helps users store and manage their passwords.",
            "A password API is a tool that helps users store and manage their passwords, while a password manager is a tool that helps users generate strong passwords."]
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

// Display questions and options in a responsive div
document.addEventListener('DOMContentLoaded', () => {
    questions.forEach((question, index) => {
        let randomQ = Math.floor(Math.random() * questions.length);
        questionDiv.textContent = questions.question[randomQ];
        answerDiv.textContent = questions.options[randomQ];
    });

    if ()
});
// Add event listener to each answer

// Check Answer on button submit
const submitButton = document.querySelector('.submit');
const result = document.querySelector('.result');

submitButton.addEventListener('click', () => {
    let score = 0;
    answers.forEach((answer, index) => {
        if (answer.checked) {
            if (option.value === answer) {
                score++;
            }
        }
    });
    result.textContent = `Your score is ${score}`;
});