// modal

const modal = document.querySelector('.modal')
const modalContent = document.querySelector('.modal__content');
const openModalBtn = document.querySelector('#modal__open');
// const closeModalBtn = document.querySelector('#modal__close');

const input = document.querySelectorAll('input[type="number"]');
const modalApply = document.querySelector('#modal__apply');



function toggleModal() {
    modalContent.classList.toggle('toggle');
}

function closeModal() {
    modalContent.style.visibility = 'hidden';
}

// function closeModalFromOutside(e) {
//     if (e.target == modalCtn) {
//         modal.style.display = 'none';
//     }
// }

function saveInputValue() {
    input.forEach(input => {
        const inputType = input.dataset.type;
        const inputValue = input.value;
        localStorage.setItem(inputType, inputValue);
        const savedValue = localStorage.getItem(inputType);
        // console.log(savedValue)
    })
}


function returnInputValue() {
    const intervalValue = localStorage.getItem('interval');
    const shortValue = localStorage.getItem('short');
    const longValue = localStorage.getItem('long');
    console.log(intervalValue, shortValue, longValue);



    input.forEach(input => {
        console.log(input.dataset.type)
    })

}

returnInputValue()


openModalBtn.addEventListener('click', toggleModal);
// closeModalBtn.addEventListener('click', closeModal);
modalApply.addEventListener('click', saveInputValue);

// timer

// const timerDisplay = document.querySelector('.display__time-left');
// const startButton = document.querySelector('.timer__button-start');
// const resetButton = document.querySelector('.timer__button-reset');

// let defaultInterval = parseInt(timerDisplay.textContent) * 60;
// let countdown;

// function timer(seconds) {
//     clearInterval(countdown);
//     displayTimeLeft(seconds);
//     const then = Date.now() + seconds * 1000;

//     countdown = setInterval(() => {
//         const secondsLeft = Math.round((then - Date.now()) / 1000);

//         // when counting is done
//         if (secondsLeft < 0) {
//             clearInterval(countdown);
//             return;
//         }

//         // display time
//         displayTimeLeft(secondsLeft);
//     }, 1000);
// }

// function displayTimeLeft(seconds) {
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = seconds % 60;
//     const display = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`
//     timerDisplay.textContent = display;
// }

// function resetTimer() {
//     clearInterval(countdown);
//     displayTimeLeft(defaultInterval)
//     console.log('interval cleared');
// }

// startButton.addEventListener('click', () => timer(defaultInterval));
// resetButton.addEventListener('click', () => resetTimer());