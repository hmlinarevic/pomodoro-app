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
			<form class="options">
				<label class="options__label" for="focus-interval">interval</label>
				<input class="options__input" type="number" id="focus-interval" name="focus-interval" min="5" max="100">
			</form>

			<div class="statistics">
				<p class="statistics__text">pomodoros</p>
				<span class="statistics__number"></span>
			</div>
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
