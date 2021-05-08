console.log('hi');

export const load = () => {
	const loader = document.querySelector('.loader');
	const loadText = loader.querySelector('.load-text');

	loader.addEventListener('transitionend', e => {
		console.log(e.propertyName);
		const isTransitionDone = e.propertyName === 'opacity';
		if (isTransitionDone) {
			loader.style.display = 'none';
		}
	});

	setTimeout(() => {
		loadText.innerHTML = 'app loading...';
	}, 250);

	setTimeout(() => {
		loadText.innerHTML = 'app loaded';
	}, 1250);

	setTimeout(() => {
		// loadText.innerHTML = 'have fun!';
		loader.classList.add('hidden');
	}, 2500);
};
