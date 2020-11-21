import timerDisplay from './timerDisplay.js';
import formatTime from './formatTime.js';

export default function renderTime(time) {
    timerDisplay.innerHTML = formatTime(time);
}
