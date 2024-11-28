// Questions and Answers

const questions = [ {
    question:   
}

// Get DOM elements
const questionDiv = document.querySelectorAll('.question');
const answerDiv = document.querySelectorAll('.answer');

// Add event listener to each answer

// Check Answer on button submit
const submitButton = document.querySelector('.submit');
const result = document.querySelector('.result');

submitButton.addEventListener('click', () => {
    let score = 0;
    answers.forEach((answer, index) => {
        if (answer.checked) {
            if (answer.value === 'correct') {
                score++;
            }
        }
    });
    result.textContent = `Your score is ${score}`;
}