class LoadingScreen {
	_loadingScreen = document.querySelector('.loading-screen');
	_loadingScreenAvatar = document.querySelector('.loading-screen__avatar');

	on() {
		this._loadingScreenAvatar.classList.add('visible');

		setTimeout(() => {
			this._loadingScreenAvatar.classList.remove('visible');
			this._loadingScreenAvatar.classList.add('hidden');
		}, 2000);

		setTimeout(() => {
			this._loadingScreen.classList.add('hidden');
		}, 2500);

		setTimeout(() => {
			this._loadingScreen.style.display = 'none';
			document.body.style.overflow = 'unset';
		}, 2750);
	}
}

export default new LoadingScreen();
