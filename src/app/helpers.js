import { FULL_DASH_ARRAY } from './config.js';

export const calcStrokeDasharray = (timeLeft, timeInterval) => {
	let rawTimeFraction = timeLeft / timeInterval;
	rawTimeFraction =
		rawTimeFraction - (1 / timeInterval) * (1 - rawTimeFraction);
	return `${(rawTimeFraction * FULL_DASH_ARRAY).toFixed(0)} ${FULL_DASH_ARRAY}`;
};

export const formatTime = time => {
	const minutes = Math.floor(time / 60);
	const seconds = time % 60;
	return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
};
