class TimerButtonsView {
	_parentElement = document.querySelector('.timer__buttons');

	addHandler(handleStart, handleOptions) {
		this._parentElement.addEventListener('click', function (e) {
			const btn = e.target.closest('.timer__button');
			if (!btn) return;

			const btnType = btn.dataset.btnType;

			if (btnType === 'start focus') handleStart();
			if (btnType === 'options') handleOptions();
		});
	}
}

export default new TimerButtonsView();
