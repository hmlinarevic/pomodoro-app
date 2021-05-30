import { USER_INTERVAL_IN_SECONDS, FULL_DASHARRAY } from './config.js';
import { calcStrokeDasharray } from './helpers.js';

export const getPomodoros = () => {
	return localStorage.getItem('pomodoros');
};

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
	finishedPomodoros: getPomodoros(),
	displayMessage: 'select interval',
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

			if (!secondsLeft) {
				this.stop();
				this.addPomodoro();
			}
		}, 1000);
	}
	stop() {
		clearInterval(this.interval);
		this.dataHandler(getInitialValues());
		this._switch();
	}

	addPomodoro() {
		++state.finishedPomodoros;
		localStorage.setItem('pomodoros', state.finishedPomodoros);
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
	console.log(newValue);
	if (!newValue) return;
	state.secondsTotal = newValue * 60;
};
