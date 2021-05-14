class TimerButtonsView {
	_parentElement = document.querySelector('.timer__buttons');

	addHandler(handleFocus, handleStop, handleOptions) {
		this._parentElement.addEventListener('click', e => {
			const btn = e.target.closest('.timer__button');
			if (!btn) return;

			if (btn.dataset.action === 'start-focus') handleFocus();
			else if (btn.dataset.action === 'stop-focus') handleStop();
			else if (btn.dataset.action === 'options') handleOptions();
		});
	}

	updateActionBtn(newState) {
		const actionBtn = this._parentElement.querySelector('[data-action]');
		actionBtn.textContent = newState.text;
		actionBtn.dataset.action = newState.action;
	}
}

export default new TimerButtonsView();
