class TimerDisplayView {
	_parentElement = document.querySelector('.timer__display');

	render(secondsLeft) {
		this._parentElement.innerHTML = secondsLeft;
	}
}

export default new TimerDisplayView();
