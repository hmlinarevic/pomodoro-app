class ModalInputView {
	addHandler(handler) {
		this._submitHandler = handler;
	}

	listenForSubmit() {
		document.querySelector('.modal__settings').addEventListener('submit', e => {
			e.preventDefault();
			const inputValue = e.target.querySelector('.modal__input').value;
			if (!inputValue) return;
			this._submitHandler(+inputValue);
		});
	}

	checkInput() {
		const inputValue = document.querySelector('.modal__input').value;
		if (+inputValue >= 1 && +inputValue <= 120)
			this._submitHandler(+inputValue);
	}
}

export default new ModalInputView();
