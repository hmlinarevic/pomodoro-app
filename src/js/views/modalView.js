class ModalView {
	_parentElement = document.querySelector('.modal');

	// addHandler(handleOverlayClick) {
	// 	this._overlay.addEventListener('click', () => handleOverlayClick());
	// }

	showModal() {
		this._parentElement.style.visibility = 'visible';
	}

	hideModal() {
		this._parentElement.style.visibility = 'hidden';
	}

	_clear() {
		this._parentElement.innerHTML = '';
	}

	renderAbout() {
		this._clear();
		this.showModal();
		const markup = `
			<h2>About</h2>
			<p>
				Improve your daily focus by using pomodoro timer in your everyday tasks
			</p>
		`;
		this._parentElement.insertAdjacentHTML('afterbegin', markup);
	}

	renderOptions() {
		return `<h2>this are options</h2>`;
	}
}

export default new ModalView();
