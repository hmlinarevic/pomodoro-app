const timerDisplay = document.querySelector('.display__time-left');
const startButton = document.querySelector('.timer__button');
const cycle = parseInt(timerDisplay.textContent) * 60;

let countdown;

function timer(seconds) {
    clearInterval(countdown);
    const then = Date.now() + seconds * 1000;
    displayTimeLeft(seconds);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        // when reaches zero
        if (secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }
        
        // display it
        displayTimeLeft(secondsLeft);
    }, 1000);

}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const display = `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`
    timerDisplay.textContent = display;
}

startButton.addEventListener('click', () => timer(cycle));