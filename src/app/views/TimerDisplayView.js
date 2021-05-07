class TimerDisplayView {
	_parentElement = document.querySelector('.timer__display');

	_updateTimerPath(strokeDasharray) {
		this._parentElement
			.querySelector('.timer__path-remaining')
			.setAttribute('stroke-dasharray', `${strokeDasharray}`);
	}

	_updateTimerLabel(time) {
		this._parentElement.querySelector('.timer__label').innerHTML = time;
	}

	render({ timeLeft, strokeDasharray } = {}, initialValue) {
		this._updateTimerLabel(timeLeft || initialValue);
		this._updateTimerPath(strokeDasharray);
	}
}

export default new TimerDisplayView();
