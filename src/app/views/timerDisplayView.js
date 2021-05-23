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

	renderMessage(message) {
		this._parentElement.querySelector(
			'.timer__time-left'
		).innerHTML = `<span class="timer__message--small">${message}</span>`;
	}

	render(data) {
		const { time, strokeDasharray } = data;
		this._updateTimerLabel(time);
		this._updateTimerPath(strokeDasharray);
	}
}

export default new TimerDisplayView();
