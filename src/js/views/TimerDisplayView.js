class TimerDisplayView {
	_parentElement = document.querySelector('.timer__display');

	render(seconds) {
		this._parentElement.innerHTML = seconds;
	}
}

export default new TimerDisplayView();
