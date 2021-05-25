import { statsIcon, settingsIcon } from '../icons.js';

class TimerButtonsView {
	_parentElement = document.querySelector('.timer__buttons');

	addHandlers(handlers) {
		this._parentElement.addEventListener('click', e => {
			const btn = e.target.closest('.timer__button');
			if (!btn) return;

			this._callHandlerOnAction(handlers, btn.dataset.action);
		});
	}

	_callHandlerOnAction(handlers, action) {
		const {
			controlFocusClick: focus,
			controlStopClick: stop,
			controlStatisticsClick: statistics,
			controlSettingsClick: settings,
		} = handlers;

		if (action === 'start-focus') focus();
		if (action === 'stop-focus') stop();
		if (action === 'open-stats') statistics();
		if (action === 'open-settings') settings();
	}

	updatePrimaryBtn(newState) {
		const primaryBtn = this._parentElement.querySelector('#primary');
		primaryBtn.textContent = newState.text;
		primaryBtn.dataset.action = newState.action;
	}

	insertIcons() {
		this._parentElement.querySelector('#stats').innerHTML = statsIcon();
		this._parentElement.querySelector('#settings').innerHTML = settingsIcon();
	}
}

export default new TimerButtonsView();
