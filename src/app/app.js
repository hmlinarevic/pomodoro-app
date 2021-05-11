import * as controller from './controller.js';

class App {
	startLoadScreen() {
		controller.loadScreen();
	}

	startController() {
		controller.init();
	}

	openOptions() {
		controller.controlOptionsClick();
	}
}

export default new App();
