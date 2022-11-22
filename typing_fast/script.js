const wordEl = document.getElementById('word');
const textEl = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const btnLevelEl = document.getElementById('level-btn');
const settingEl = document.getElementById('setting');
const levelFormEl = document.getElementById('level-form');
const levelEl = document.getElementById('level');
const gameoverEl = document.getElementById('gameover-container');

const words = ['static', 'void', 'main', 'string', 'let', 'public', 'set', 'get', 'length', 'width', 'height', 'padding', 'margin'];

let randomText;
let score = 0;
let time = 5; //easy=>15, medius=>10, hard=>5

let level = 'medium';

const saveMode = localStorage.getItem('mode') !== null ? localStorage.getItem('mode') : 'normal';

const timeInterval = setInterval(updateTime, 1000);

function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}


function displayWordToUI() {
    randomText = getRandomWord();
    wordEl.innerHTML = randomText;
    timeEl.innerHTML = time;
}

textEl.addEventListener('input', (e) => {
    const inputText = e.target.value;

    if (inputText === randomText) {
        if (saveMode == 'easy') {
            time += 5;
        } else if (saveMode == 'normal') {
            time += 3;
        } else {
            time += 2;
        }
        displayWordToUI();
        updateScore();
        e.target.value = '';
    }
});

function updateScore() {
    score += 10;
    scoreEl.innerHTML = score;
}

function updateTime() {
    time--;
    timeEl.innerHTML = time;
    if (time === 0) {
        clearInterval(timeInterval);
        gameOver();
    }
}

function gameOver() {
    gameoverEl.style.display = 'flex';
    gameoverEl.innerHTML = `
    <h1>Game Over</h1>
    <p>your score = ${score} score</p>
    <button onclick='location.reload()'>play again</button>
    `;

}

btnLevelEl.addEventListener('click', () => {
    settingEl.classList.toggle('hide');
});

levelEl.addEventListener('change', (e) => {
    level = e.target.value;
    localStorage.setItem('mode', level);

});

function startGame() {
    levelEl.value = saveMode;
    if (saveMode == 'easy') {
        time = 15;
    } else if (saveMode == 'normal') {
        time = 10;
    } else {
        time = 5;
    }
    displayWordToUI();
}
startGame();

displayWordToUI();
textEl.focus();