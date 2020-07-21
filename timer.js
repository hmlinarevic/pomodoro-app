// modal

const modal = document.querySelector('.modal')
const openBtn = document.querySelector('.open-modal-btn');
const closeBtn = document.querySelector('.close-modal-btn');

function openModal() {
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

function closeModalFromOutside(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', closeModalFromOutside);

// timer

const timerDisplay = document.querySelector('.display__time-left');
const startButton = document.querySelector('.timer__button-start');
const resetButton = document.querySelector('.timer__button-reset');

let defaultInterval = parseInt(timerDisplay.textContent) * 60;
let countdown;

function timer(seconds) {
    clearInterval(countdown);
    displayTimeLeft(seconds);
    const then = Date.now() + seconds * 1000;   
    
    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);

        // when counter reaches zero
        if (secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }

        // display time
        displayTimeLeft(secondsLeft);
    }, 1000);
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const display = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`
    timerDisplay.textContent = display;
}

function resetTimer() {
    clearInterval(countdown);
    displayTimeLeft(defaultInterval)
    console.log('interval cleared');
}

startButton.addEventListener('click', () => timer(defaultInterval));
resetButton.addEventListener('click', () => resetTimer());