//restart button
const restart = document.querySelector('.play-again');
restart.addEventListener('click', () => {
    window.location.replace('quiz.html');
    currentQuestion = 0;
    score = 0;
    wrongScore = 0;
});

// Get final score
const finalScore = document.querySelector('.final-score')
finalScore.textContent = `You answered ${score} out of ${questions.length}`;