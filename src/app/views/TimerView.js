class TimerView {
	_parentElement = document.querySelector('.timer');

	hideTimer() {
		this._parentElement.style.visibility = 'hidden';
		this._parentElement.style.opacity = '0';
	}

	showTimer() {
		this._parentElement.style.visibility = 'visible';
		this._parentElement.style.opacity = '1';
	}
}

export default new TimerView();
