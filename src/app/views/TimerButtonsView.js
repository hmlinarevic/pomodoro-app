class TimerButtonsView {
	_parentElement = document.querySelector('.timer__buttons');
	_startBtn = document.querySelector('#start');

	addHandler(handleStart, handleStop, handleOptions) {
		this._parentElement.addEventListener('click', function (e) {
			const btn = e.target.closest('.timer__button');
			if (!btn) return;

			if (btn.id === 'start') handleStart();
			if (btn.id === 'stop') handleStop();
			if (btn.id === 'options') handleOptions();
		});
	}

	_generateStartMarkup() {
		return `
			<button id="start" class="timer__button">start focus</button>
			<button id="options" class="timer__button">options</button>
		`;
	}

	_generateStopMarkup() {
		return `
			<button id="stop" class="timer__button">stop</button>
			<button id="options" class="timer__button">options</button>
		`;
	}

	updateMarkup(data) {
		if (!data) {
			this._parentElement.innerHTML = this._generateStartMarkup();
		} else {
			this._parentElement.innerHTML = this._generateStopMarkup();
		}
	}
}

export default new TimerButtonsView();
