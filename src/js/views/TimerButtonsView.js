class TimerButtonsView {
	_parentElement = document.querySelector('.timer__buttons');

	addHandler(controlsClick) {
		this._parentElement.addEventListener('click', function (e) {
			const btn = e.target.closest('.timer__button');
			if (!btn) return;
			controlsClick(btn.dataset.btnType);
		});
	}
}

export default new TimerButtonsView();
