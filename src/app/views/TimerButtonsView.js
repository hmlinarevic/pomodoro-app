class TimerButtonsView {
	_parentElement = document.querySelector('.timer__buttons');

	addHandlers(handlers) {
		this._parentElement.addEventListener('click', e => {
			const btn = e.target.closest('.timer__button');
			if (!btn) return;

			this.callHandlerOnAction(handlers, btn.dataset.action);
		});
	}

	callHandlerOnAction(handlers, action) {
		const {
			controlFocusClick: focus,
			controlSettingsClick: settings,
			controlStopClick: stop,
		} = handlers;

		if (action === 'start-focus') focus();
		if (action === 'stop-focus') stop();
		if (action === 'open-settings') settings();
	}

	updatePrimaryBtn(newState) {
		const primaryBtn = this._parentElement.querySelector('#primary');
		primaryBtn.textContent = newState.text;
		primaryBtn.dataset.action = newState.action;
	}
}

export default new TimerButtonsView();
