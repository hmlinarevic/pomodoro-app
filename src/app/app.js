import * as controller from './controller.js';

class App {
	_loadingScreen = document.querySelector('.loading-screen');
	_loadingScreenAvatar = document.querySelector('.loading-screen__avatar');

	loadScreen() {
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
		}, 3000);
	}

	initController() {
		controller.init();
	}
}

export default new App();
