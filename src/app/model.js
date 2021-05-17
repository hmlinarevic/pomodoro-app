import { USER_INTERVAL_IN_SECONDS, FULL_DASHARRAY } from './config.js';
import { calcStrokeDasharray } from './helpers.js';

export const state = {
	timerIsOn: false,
	secondsTotal: USER_INTERVAL_IN_SECONDS,
	secondsLeft: USER_INTERVAL_IN_SECONDS,
	secondsPassed: 0,

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
		let { secondsPassed, secondsLeft, strokeDasharray } = state;

		this.dataHandler({ secondsLeft, strokeDasharray });

		this.interval = setInterval(() => {
			++secondsPassed;
			secondsLeft = secondsTotal - secondsPassed;
			strokeDasharray = calcStrokeDasharray(secondsLeft, secondsTotal);

			this.dataHandler({ secondsLeft, strokeDasharray });

			if (!secondsLeft) this.stop();
		}, 1000);
	}

	stop() {
		console.log('timer stopped');
		clearInterval(this.interval);
		this._switch();
	}
}

export const timer = new Timer();

export const initialRenderValues = () => {
	return {
		secondsLeft: state.secondsLeft,
		strokeDasharray: state.strokeDasharray,
	};
};
