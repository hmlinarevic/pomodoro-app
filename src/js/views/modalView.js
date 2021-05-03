class ModalView {
	_parentElement = document.querySelector('.modal');

	showModal() {
		this._parentElement.style.visibility = 'visible';
		this._parentElement.style.opacity = '1';
	}

	hideModal() {
		this._parentElement.style.visibility = 'hidden';
		this._parentElement.style.opacity = '0';
	}

	_clear() {
		this._parentElement.innerHTML = '';
	}

	_generateOptionsMarkup() {
		return `
			<form class="timer__options">
			<label for="focus interval">focus interval:</label>
			<input type="number" id="focus interval" name="focus interval" min="5" max="100">
		`;
	}

	renderOptions() {
		console.log('hi');
		this._clear();
		this.showModal();
		const markup = this._generateOptionsMarkup();
		this._parentElement.insertAdjacentHTML('afterbegin', markup);
	}
}

export default new ModalView();
