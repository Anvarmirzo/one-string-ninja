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

			// handle click on bullet
			// removing active state from previous slide
			const allBullets = bulletsWrapper.querySelectorAll('[data-control]');
			allBullets[currentSlide].classList.remove('active');
			imageSlides[currentSlide].classList.remove('active');
			textSlides[currentSlide].classList.remove('active');

			if (bullet.hasAttribute('data-control')) {
				// updating current slide
				currentSlide = +bullet.getAttribute('data-control');
			} else if (bullet.id === 'next-btn') {
				// handle click on next button
				if (currentSlide < 2) {
					currentSlide += 1;
				} else {
					currentSlide = 0;
				}
			}
			// setting active state for current slide
			allBullets[currentSlide].classList.add('active');
			imageSlides[currentSlide].classList.add('active');
			textSlides[currentSlide].classList.add('active');
		});
	})();
});
