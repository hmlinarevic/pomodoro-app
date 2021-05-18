class ModalView {
	_parentElement = document.querySelector('.modal');

	preventBubbling() {
		this._parentElement.addEventListener('click', e => {
			e.stopPropagation();
		});
	}

	addHandler(handler) {
		this._submitHandler = handler;
	}

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

	_generateSettingsMarkup() {
		return `
			<form class="modal__settings">
				<label class="modal__input-label" for="focus-interval">interval</label>
				<input
					class="modal__input"
					type="number"
					id="focus-interval"
					name="focus-interval"
					min="5" max="100">
			</form>

		`;
	}

	_listenForSubmit() {
		this._parentElement
			.querySelector('.modal__settings')
			.addEventListener('submit', e => {
				this._onSubmitHandleValue(e);
			});
	}

	_onSubmitHandleValue(e) {
		e.preventDefault();
		const inputValue = e.target.querySelector('.modal__input').value;
		this._submitHandler(+inputValue);
	}

	renderSettings() {
		this._clear();
		this.showModal();
		const markup = this._generateSettingsMarkup();
		this._parentElement.insertAdjacentHTML('afterbegin', markup);
		this._listenForSubmit();
	}
}

export default new ModalView();
