import { DEFAULT_INTERVAL } from './config.js';
import { calcStrokeDasharray, formatTime } from './helpers.js';

export const state = {
	timer: {
		isOn: false,
		secondsInterval: DEFAULT_INTERVAL,
		formatedInterval: formatTime(DEFAULT_INTERVAL),
		finishedCycles: 0,
		switch() {
			this.isOn = !this.isOn;
		},
		addCycle() {
			++this.finishedCycles;
		},
		buttons: {
			start: {
				id: 'start',
				text: 'start focus',
			},
			stop: {
				id: 'stop',
				text: 'stop',
			},
		},
	},
};

let interval;

export const startTimer = handleData => {
	if (state.timer.isOn) return;
	state.timer.switch();

	let { secondsInterval, secondsPassed = 0, secondsLeft = 0 } = state.timer;

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
			state.timer.switch();
			state.timer.addCycle();
		}
	}, 1000);
};

export const stopTimer = handleData => {
	clearInterval(interval);
	state.timer.switch();
	handleData({
		timeLeft: formatTime(DEFAULT_INTERVAL),
		strokeDasharray: calcStrokeDasharray(DEFAULT_INTERVAL, DEFAULT_INTERVAL),
	});
};
