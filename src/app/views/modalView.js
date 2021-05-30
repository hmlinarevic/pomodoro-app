class ModalView {
	_parentElement = document.querySelector('.modal');

	preventBubbling() {
		this._parentElement.addEventListener('click', e => {
			e.stopPropagation();
		});
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
					min="1" max="120">
			</form>
		`;
	}

	_generateStatisticsMarkup(pomodoros) {
		return `
			<div class="modal__statistics">
				<p>total pomodoros: ${pomodoros}</p>
			</div>
		`;
	}

	renderSettings() {
		this._clear();
		this.showModal();
		const markup = this._generateSettingsMarkup();
		this._parentElement.insertAdjacentHTML('afterbegin', markup);
		this.isSettingsOn = true;
	}

	renderStatistics(pomodoros) {
		this._clear();
		this.showModal();
		const markup = this._generateStatisticsMarkup(pomodoros);
		this._parentElement.insertAdjacentHTML('afterbegin', markup);
	}
}

export default new ModalView();
