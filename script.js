const words = ['apple', 'banana', 'cherry', 'date', 'elephant', 'fox', 'grape'];
const wordDisplay = document.getElementById('word');
const inputBox = document.getElementById('input-box');
const scoreDisplay = document.getElementById('score');
const timeDisplay = document.getElementById('time');

let score = 0;
let time = 10;
let currentWord = '';

function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function displayNewWord() {
  currentWord = getRandomWord();
  wordDisplay.textContent = currentWord;
}

function updateScore() {
  score++;
  scoreDisplay.textContent = `Score: ${score}`;
}

function decreaseTime() {
  time--;
  timeDisplay.textContent = `Time left: ${time}`;
  if (time === 0) {
    clearInterval(timeInterval);
    alert(`Game over! Your score is ${score}`);
    resetGame();
  }
}

function resetGame() {
  score = 0;
  time = 10;
  scoreDisplay.textContent = `Score: 0`;
  timeDisplay.textContent = `Time left: 10`;
  displayNewWord();
}

inputBox.addEventListener('input', () => {
  if (inputBox.value === currentWord) {
    updateScore();
    displayNewWord();
    inputBox.value = '';
    time = 10; // Reset time
  }
});

const timeInterval = setInterval(decreaseTime, 1000);

// Initialize the game
displayNewWord();
