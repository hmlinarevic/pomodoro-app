import { USER_INTERVAL_IN_SECONDS, FULL_DASHARRAY } from './config.js';
import { calcStrokeDasharray } from './helpers.js';

export const state = {
	timerIsOn: false,
	secondsTotal: USER_INTERVAL_IN_SECONDS,
	secondsLeft: USER_INTERVAL_IN_SECONDS,
	strokeDasharray: FULL_DASHARRAY,
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

class Timer {
	_switch() {
		state.timerIsOn = !state.timerIsOn;
	}
	receiveDataHandler(handler) {
		this.dataHandler = handler;
	}
	start() {
		if (state.timerIsOn) return;
		this._switch();

		const { secondsTotal } = state;
		let { secondsPassed = 0, secondsLeft, strokeDasharray } = state;

		this.dataHandler({ time: secondsTotal, strokeDasharray });

		this.interval = setInterval(() => {
			++secondsPassed;
			secondsLeft = secondsTotal - secondsPassed;

			strokeDasharray = calcStrokeDasharray(secondsLeft, secondsTotal);

			this.dataHandler({ time: secondsLeft, strokeDasharray });

			if (!secondsLeft) this.stop();
		}, 1000);
	}
	stop() {
		clearInterval(this.interval);
		this.dataHandler(getInitialValues());
		this._switch();
	}
}

export const timer = new Timer();

export const getRemainingValues = () => {
	return {
		time: state.secondsLeft,
		strokeDasharray: state.strokeDasharray,
	};
};

export const getInitialValues = () => {
	return {
		time: state.secondsTotal,
		strokeDasharray: state.strokeDasharray,
	};
};

export const updateUserInterval = newValue => {
	state.secondsTotal = newValue * 60;
};
