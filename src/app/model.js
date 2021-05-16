import { USER_INTERVAL_IN_SECONDS, FULL_DASHARRAY } from '../config.js';
import { calcStrokeDasharray, formatTime } from '../helpers.js';

export const state = {
	timerIsOn: false,
	secondsTotal: USER_INTERVAL_IN_SECONDS,
	secondsLeft: USER_INTERVAL_IN_SECONDS,
	// formatedInterval: formatTime(DEFAULT_INTERVAL),

	dasharrayTotal: FULL_DASHARRAY,
	dasharrayLeft: FULL_DASHARRAY,

	btn: {
		start: {
			text: 'focus',
			action: 'start-focus',
		},
		stop: {
			text: 'stop',
			action: 'stop-focus',
		},
	},
};

const setStateSecondsLeft = () => {
	let { secondsTotal, secondsPassed = 0, secondsLeft = 0 } = state;
	++secondsPassed;
	secondsLeft = secondsTotal - secondsPassed;
	state.secondsLeft = secondsLeft;
};

const setStateTimerIsOn = () => (state.timerIsOn = !state.timerIsOn);

export const startTimer = handleData => {
	if (state.isTimerOn) return;
	setStateTimerIsOn();

	handleData({
		timeLeft: state.secondsLeft,
		strokeDasharray: calcStrokeDasharray(secondsInterval, secondsInterval),
	});

	state.interval = setInterval(() => {
		setStateSecondsLeft();
		// setStateFormatTimeLeft();

		handleData({
			timeLeft: formatTime(secondsLeft),
			strokeDasharray: calcStrokeDasharray(secondsLeft, secondsInterval),
		});

		if (!secondsLeft) {
			clearInterval(interval);
			state.updateToInactive();
		}
	}, 1000);
};

export const stopTimer = handleData => {
	console.log('timer stopped');
	clearInterval(state.interval);
	state.updateToInactive();
	handleData({
		timeLeft: formatTime(DEFAULT_INTERVAL),
		strokeDasharray: 283,
	});
};

console.log(timer);
// timer.start();
