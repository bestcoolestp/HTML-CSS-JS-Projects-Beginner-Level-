const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);

const formEl = document.getElementById('form');
const inputEl = document.getElementById('input');
const scoreEl = document.getElementById('score');

const questionEl = document.getElementById('question');
questionEl.innerText = `What is ${num1} multiply by ${num2} ?`;

let score = JSON.parse(localStorage.getItem("score"));

scoreEl.innerText = `Score: ${score}`;

const correctAnswer = num1 * num2;

if (!score) {
    score = 0;
}



formEl.addEventListener('submit', () => {

    const userAnswer = +inputEl.value;
    if (userAnswer == correctAnswer) {
        score++;
        updateScore();
    } else {
        score--;
        updateScore();
    }
});

function updateScore() {
    localStorage.setItem('score', JSON.stringify(score));
}       