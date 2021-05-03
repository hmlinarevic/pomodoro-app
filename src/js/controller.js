import * as model from './model.js';
import modalView from './views/modalView.js';
import overlayView from './views/overlayView.js';
import timerDisplayView from './views/TimerDisplayView.js';
import timerButtonsView from './views/timerButtonsView.js';

const controlTimerButtons = function (btnType) {
	if (btnType === 'start focus') {
		model.startTimer();
		setInterval(() => {
			if (model.state.timer.secondsRemaining) {
				timerDisplayView.render(model.state.timer.secondsRemaining);
			}
		}, 1000);
	}

	if (btnType === 'options') {
		overlayView.on();
		modalView.renderOptions();
	}
};

const controlOverlayClick = function () {
	modalView.hideModal();
	overlayView.off();
};

overlayView.addHandler(controlOverlayClick);
timerButtonsView.addHandler(controlTimerButtons);
