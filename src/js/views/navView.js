class NavView {
	_parentElement = document.querySelector('.nav');

	addHandler(controlMenu) {
		this._parentElement.addEventListener('click', e => {
			e.preventDefault();
			const btn = e.target.closest('#options') || e.target.closest('#about');
			if (!btn) return;
			const btnType = btn.dataset.btnType;
			controlMenu(btnType);
		});
	}
}

export default new NavView();
