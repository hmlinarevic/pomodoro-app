import { calcStrokeDasharray, formatTime } from '../helpers.js';

export const config = {
	DEFAULT_INTERVAL: 300,
	FULL_DASH_ARRAY: 283,
};

export const state = {
	isOn: false,
	secondsInterval: config.DEFAULT_INTERVAL,
	formatedInterval: formatTime(config.DEFAULT_INTERVAL),
	finishedCycles: 0,
	switch() {
		this.isOn = !this.isOn;
	},
	addCycle() {
		++this.finishedCycles;
	},
	startBtn: {
		id: 'start',
		idle: 'start focus',
		active: 'focus',
	},
};

export const startTimer = handleData => {
	if (state.isOn) return;
	state.switch();

	let { secondsInterval, secondsPassed = 0, secondsLeft = 0 } = state;

	handleData({
		timeLeft: formatTime(secondsInterval),
		strokeDasharray: calcStrokeDasharray(secondsInterval, secondsInterval),
	});

	const interval = setInterval(() => {
		++secondsPassed;
		secondsLeft = secondsInterval - secondsPassed;

		handleData({
			timeLeft: formatTime(secondsLeft),
			strokeDasharray: calcStrokeDasharray(secondsLeft, secondsInterval),
		});

		if (!secondsLeft) {
			clearInterval(interval);
			state.switch();
			state.addCycle();
		}
	}, 1000);
};
