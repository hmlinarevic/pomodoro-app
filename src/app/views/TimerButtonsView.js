class TimerButtonsView {
	_parentElement = document.querySelector('.timer__buttons');
	_mainButton = this._parentElement.firstElementChild;

	addHandler(handleFocus, handleStop, handleOptions) {
		this._parentElement.addEventListener('click', e => {
			const btn = e.target.closest('.timer__button');
			if (!btn) return;

			if (btn.dataset.action === 'focus') {
				handleFocus();
				return;
			}
			if (btn.dataset.action === 'stop') handleStop();
			if (btn.dataset.action === 'options') handleOptions();
		});
	}

	renderStopBtn(state) {
		this._mainButton.textContent = state.stop.text;
		this._mainButton.dataset.action = 'stop';
	}
	renderFocusBtn(state) {
		this._mainButton.textContent = state.focus.text;
		this._mainButton.dataset.action = 'focus';
	}
}

export default new TimerButtonsView();
