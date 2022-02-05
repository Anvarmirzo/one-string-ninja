document.addEventListener('DOMContentLoaded', function (e) {
	// Welcome page slider
	(() => {
		let currentSlide = 0;
		const bulletsWrapper = document.getElementById('welcome-slider__contorls'),
			imageSlides = document.getElementById('welcome-slider__images').children,
			textSlides = document.getElementById('welcome-slider__text').children;

		bulletsWrapper.addEventListener('click', (event) => {
			const bullet = event.target.closest('button');

			if (!bullet || !bulletsWrapper.contains(bullet)) return;

			if (bullet.hasAttribute('data-control')) {
				// removing active state from previous slide
				const allBullets = bulletsWrapper.querySelectorAll('[data-control]');
				allBullets[currentSlide].classList.remove('active');
				imageSlides[currentSlide].classList.remove('active');
				textSlides[currentSlide].classList.remove('active');

				// updating current slide
				currentSlide = +bullet.getAttribute('data-control');

				// setting active state for current slide
				bullet.classList.add('active');
				imageSlides[currentSlide].classList.add('active');
				textSlides[currentSlide].classList.add('active');
			}
		});

		// table.onclick = function (event) {
		// 	let td = event.target.closest('td'); // (1)

		// 	if (!td) return; // (2)

		// 	if (!table.contains(td)) return; // (3)

		// 	highlight(td); // (4)
		// };
	})();
});
