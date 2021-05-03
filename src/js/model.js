export const state = {
	timer: {
		isOn: false,
		secondsInterval: 5,
	},
};

let { secondsInterval, sR } = state.timer;

export const startTimer = () => {
	if (state.timer.isOn) return;
	state.timer.isOn = true;

	const interval = setInterval(() => {
		sR = --secondsInterval;
		state.timer.secondsRemaining = sR;

		if (!sR) {
			clearInterval(interval);
			state.timer.isOn = false;
		}
		console.log(sR);
	}, 1000);
};
