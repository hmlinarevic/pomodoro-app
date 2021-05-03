import * as model from './model.js';
import modalView from './views/modalView.js';
import overlayView from './views/overlayView.js';
import timerDisplayView from './views/TimerDisplayView.js';
import timerButtonsView from './views/TimerButtonsView.js';

const controlSecondsLeft = secondsLeft => {
	timerDisplayView.render(secondsLeft);
};

const controlStartClick = () => {
	model.startTimer(controlSecondsLeft);
};

const controlOptionsClick = () => {
	overlayView.on();
	modalView.renderOptions();
};

const controlOverlayClick = () => {
	modalView.hideModal();
	overlayView.off();
};

overlayView.addHandler(controlOverlayClick);
timerButtonsView.addHandler(controlStartClick, controlOptionsClick);
