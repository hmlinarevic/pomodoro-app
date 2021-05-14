import { DEFAULT_INTERVAL } from './config.js';
import { calcStrokeDasharray, formatTime } from './helpers.js';

export const state = {
	secondsInterval: DEFAULT_INTERVAL,
	formatedInterval: formatTime(DEFAULT_INTERVAL),

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

let interval;

export const startTimer = handleData => {
	if (state.isActive) return;
	state.updateToActive();

	let { secondsInterval, secondsPassed = 0, secondsLeft = 0 } = state;

	handleData({
		timeLeft: formatTime(secondsInterval),
		strokeDasharray: calcStrokeDasharray(secondsInterval, secondsInterval),
	});

	interval = setInterval(() => {
		++secondsPassed;
		secondsLeft = secondsInterval - secondsPassed;

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
	clearInterval(interval);
	state.updateToInactive();
	handleData({
		timeLeft: formatTime(DEFAULT_INTERVAL),
		strokeDasharray: 283,
	});
};
