import loadIntervals from '../utils/loadIntervals.js';
import storeIntervals from '../utils/storeIntervals.js';
import { BTN_STATE_CONTROLS } from '../utils/btnState.js';

class Controls {
    constructor(onClickFn) {
        this.$button = document.querySelector('#start');

        this.onClickFn = onClickFn;
        this.registerEventListeners();
    }

    registerEventListeners() {
        this.$button.addEventListener('click', this.handleBtnClick);
    }

    handleBtnClick = () => {
        const nextBtnState = this.getNextBtnState()

        this.renderState(nextBtnState);
        this.onClickFn(nextBtnState);
    }

    getNextBtnState() {
        switch (this.getCurrentBtnState()) {
            case BTN_STATE_CONTROLS.start:
                return BTN_STATE_CONTROLS.stop;
            case BTN_STATE_CONTROLS.stop:
                return BTN_STATE_CONTROLS.start;
            default:
                return this.getCurrentBtnState();
        }
    }

    getCurrentBtnState = () => {
        return this.$button.getAttribute('data-state');
    }

    renderState(state) {
        this.$button.innerHTML = (state);
        this.$button.setAttribute('data-state', state);
    }
}

export default Controls;