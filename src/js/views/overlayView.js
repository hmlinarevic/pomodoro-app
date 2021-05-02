class OverlayView {
	_parentElement = document.querySelector('.overlay');

	addHandler(overlayClick) {
		this._parentElement.addEventListener('click', () => overlayClick());
	}

	on() {
		this._parentElement.style.visibility = 'visible';
	}

	off() {
		this._parentElement.style.visibility = 'hidden';
	}
}

export default new OverlayView();
