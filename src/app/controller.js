import * as model from './model.js';
import loadingView from './views/loadingView.js';
import overlayView from './views/overlayView.js';
import modalView from './views/modalView.js';
import modalInputView from './views/modalInputView.js';
import timerView from './views/timerView.js';
import timerDisplayView from './views/timerDisplayView.js';
import timerButtonsView from './views/timerButtonsView.js';

const controlTimerData = data => {
	if (!data.time) {
		timerButtonsView.updatePrimaryBtn(model.state.btn.start);
	}
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

const controlStatisticsClick = () => {
	overlayView.on();
	modalView.renderStatistics(model.getPomodoros());
	timerView.hideTimer();
};

const controlSettingsClick = () => {
	overlayView.on();
	modalView.renderSettings();
	modalInputView.listenForSubmit();
	timerView.hideTimer();
};

const controlOverlayClick = () => {
	if (modalView.isSettingsOn) {
		console.log(modalView.isSettingsOn);

		modalInputView.checkInput();
		modalView.settingsOff();
	}
	console.log(modalView.isSettingsOn);

	modalView.hideModal();
	overlayView.off();
	timerView.showTimer();
};

const controlIntervalInput = inputValue => {
	model.updateUserInterval(inputValue);
	modalView.hideModal();
	timerView.showTimer();
	overlayView.off();
	timerDisplayView.render(model.getInitialValues());
};

export const start = () => {
	loadingView.on();
	overlayView.addHandler(controlOverlayClick);
	modalView.preventBubbling();
	modalInputView.addHandler(controlIntervalInput);
	timerButtonsView.insertIcons();
	timerButtonsView.addHandlers({
		controlFocusClick,
		controlStopClick,
		controlStatisticsClick,
		controlSettingsClick,
	});
};
