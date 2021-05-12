class OverlayView {
	_parentElement = document.querySelector('.overlay');

	addHandler(overlayClick) {
		this._parentElement.addEventListener('click', e => {
			overlayClick();
		});
	}

	on() {
		this._parentElement.style.visibility = 'visible';
		this._parentElement.style.opacity = '1';
	}

	off() {
		this._parentElement.style.visibility = 'hidden';
		this._parentElement.style.opacity = '0';
	}
}

export default new OverlayView();
