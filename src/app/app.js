import * as controller from './controller.js';

class App {
	startLoadScreen() {
		controller.loadScreen();
	}

	startController() {
		controller.init();
	}
}

export default new App();
