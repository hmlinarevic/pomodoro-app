import navView from './views/navView.js';
import modalView from './views/modalView.js';
import overlayView from './views/overlayView.js';

const controlNavButtons = function (btn) {
	if (btn === 'options') {
		overlayView.on();
		modalView.renderOptions();
	}

	if (btn === 'about') {
		overlayView.on();
		modalView.renderAbout();
	}
};

const controlOverlayClick = function () {
	modalView.hideModal();
	overlayView.off();
};

navView.addHandler(controlNavButtons);
overlayView.addHandler(controlOverlayClick);
