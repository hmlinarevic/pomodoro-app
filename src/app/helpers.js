import { FULL_DASHARRAY } from './config.js';

export const calcStrokeDasharray = (timeLeft, timeTotal) => {
	let rawTimeFraction = timeLeft / timeTotal;
	rawTimeFraction = rawTimeFraction - (1 / timeTotal) * (1 - rawTimeFraction);
	return `${(rawTimeFraction * FULL_DASHARRAY).toFixed(0)} ${FULL_DASHARRAY}`;
};

export const formatTime = time => {
	const minutes = Math.floor(time / 60);
	const seconds = time % 60;
	return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
};
