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
	timerButtonsView.updateMarkup(model.state.timer.isOn);
};

const controlStopClick = () => {
	model.stopTimer(controlTimerData);
	timerButtonsView.updateMarkup(model.state.timer.isOn);
};

const controlOptionsClick = () => {
	overlayView.on();
};

const controlOverlayClick = () => {
	overlayView.off();
	modalView.hideModal();
};

export const init = () => {
	console.log('initialzing from controller');
	timerDisplayView.render(undefined, model.state.timer.formatedInterval);
	overlayView.addHandler(controlOverlayClick);
	timerButtonsView.addHandler(
		controlStartClick,
		controlStopClick,
		controlOptionsClick
	);
};
