import * as model from './model.js';
import modalView from './views/modalView.js';
import overlayView from './views/overlayView.js';
import timerDisplayView from './views/TimerDisplayView.js';
import timerButtonsView from './views/TimerButtonsView.js';

const controlTimerData = data => {
	timerDisplayView.render(data);
};

const controlStartClick = () => {
	model.startTimer(controlTimerData);
};

const controlOptionsClick = () => {
	overlayView.on();
};

const controlOverlayClick = () => {
	overlayView.off();
	modalView.hideModal();
};

const init = () => {
	timerDisplayView.render(undefined, model.state.timer.formatedInterval);
	overlayView.addHandler(controlOverlayClick);
	timerButtonsView.addHandler(controlStartClick, controlOptionsClick);
};

init();