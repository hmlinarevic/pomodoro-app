import * as model from './model.js';
import modalView from './views/modalView.js';
import overlayView from './views/overlayView.js';
import timerView from './views/TimerView.js';
import timerDisplayView from './views/TimerDisplayView.js';
import timerButtonsView from './views/TimerButtonsView.js';

const controlTimerData = data => {
	timerDisplayView.render(data);
};

const controlFocusClick = () => {
	// model.startTimer(controlTimerData);
	timerButtonsView.updateActionBtn(model.state.btn.stop);
};

const controlStopClick = () => {
	// model.stopTimer(controlTimerData);
	timerButtonsView.updateActionBtn(model.state.btn.start);
};

export const controlOptionsClick = () => {
	overlayView.on();
	modalView.renderSettings();
	timerView.hideTimer();
};

const controlOverlayClick = () => {
	overlayView.off();
	modalView.hideModal();
	timerView.showTimer();
};

export const init = () => {
	timerDisplayView.render(undefined, model.state.formatedInterval);
	overlayView.addHandler(controlOverlayClick);
	timerButtonsView.addHandler(
		controlFocusClick,
		controlStopClick,
		controlOptionsClick
	);
};

// initial page load
// TO DO
// extract this to loadingView
export const loadScreen = () => {
	const loadingScreen = document.querySelector('.loading-screen');
	const loadingScreenAvatar = document.querySelector('.loading-screen__avatar');

	loadingScreenAvatar.classList.add('visible');

	setTimeout(() => {
		loadingScreenAvatar.classList.remove('visible');
		loadingScreenAvatar.classList.add('hidden');
	}, 2000);

	setTimeout(() => {
		loadingScreen.classList.add('hidden');
	}, 2500);

	setTimeout(() => {
		loadingScreen.style.display = 'none';
		document.body.style.overflow = 'unset';
	}, 2750);
};
