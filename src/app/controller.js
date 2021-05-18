import * as model from './model.js';
import overlayView from './views/overlayView.js';
import modalView from './views/modalView.js';
import timerView from './views/timerView.js';
import timerDisplayView from './views/timerDisplayView.js';
import timerButtonsView from './views/timerButtonsView.js';

const controlTimerData = data => {
	timerDisplayView.render(data);
};

const controlFocusClick = () => {
	model.timer.receiveDataHandler(controlTimerData);
	model.timer.start();
	timerButtonsView.updatePrimaryBtn(model.state.btn.stop);
};

const controlStopClick = () => {
	model.timer.stop();
	timerButtonsView.updatePrimaryBtn(model.state.btn.start);
};

const controlSettingsClick = () => {
	overlayView.on();
	modalView.renderSettings();
	timerView.hideTimer();
};

const controlOverlayClick = () => {
	overlayView.off();
	modalView.hideModal();
	timerView.showTimer();
};

const controlIntervalInput = inputValue => {
	model.updateUserInterval(inputValue);
	modalView.hideModal();
	timerView.showTimer();
	overlayView.off();
	timerDisplayView.render(model.getInitialValues());
};

export const init = () => {
	overlayView.addHandler(controlOverlayClick);
	modalView.preventBubbling();
	modalView.addHandler(controlIntervalInput);
	timerDisplayView.render(model.getInitialValues());
	timerButtonsView.addHandlers({
		controlFocusClick,
		controlStopClick,
		controlSettingsClick,
	});
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
