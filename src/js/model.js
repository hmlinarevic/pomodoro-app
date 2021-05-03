import { DEFAULT_SECONDS } from './config.js';

export const state = {
	timer: {
		isOn: false,
		secondsInterval: DEFAULT_SECONDS,
		switch() {
			this.isOn = !this.isOn;
		},
	},
};

export const startTimer = handleTimeLeft => {
	if (state.timer.isOn) return;
	state.timer.switch();

	let { secondsInterval, secondsLeft } = state.timer;
	secondsLeft = secondsInterval;
	handleTimeLeft(secondsLeft);

	const interval = setInterval(() => {
		--secondsLeft;
		handleTimeLeft(secondsLeft);

		if (!secondsLeft) {
			clearInterval(interval);
			state.timer.switch();
		}
	}, 1000);
};
