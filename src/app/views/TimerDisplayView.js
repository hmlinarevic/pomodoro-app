import { formatTime } from '../helpers.js';

class TimerDisplayView {
	_parentElement = document.querySelector('.timer__display');

	_updateTimerPath(strokeDasharray) {
		this._parentElement
			.querySelector('.timer__path-remaining')
			.setAttribute('stroke-dasharray', `${strokeDasharray} `);
	}

	_updateTimerLabel(time) {
		this._parentElement.querySelector('.timer__time-left').innerHTML =
			formatTime(time);
	}

	render(data) {
		const { time, strokeDasharray } = data;
		this._updateTimerLabel(time);
		this._updateTimerPath(strokeDasharray);
	}
}

export default new TimerDisplayView();
