// Import jQuery module (npm i jquery)
import $ from 'jquery'
window.jQuery = $
window.$ = $
import "magnific-popup"

// // Import vendor jQuery plugin example (not module)
require('~/app/js/jquery.malihu.PageScroll2id.min.js')

document.addEventListener('DOMContentLoaded', () => {
	$("a[href*='#']").mPageScroll2id({
		offset: 100
	});
	// Custom JS
	// popup

	let popupDiv = $('.popup-with-move-anim')
	popupDiv.magnificPopup({
		type: 'inline',

		fixedContentPos: true,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,

		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});
	let popupCloseButton = document.querySelector('.signup .close-button')
	popupCloseButton.addEventListener('click', () => {
		popupDiv.close();
	})
	//marquee
	function animateMarquee(el, duration) {
		const innerEl = el.querySelector('.marquee__inner');
		const innerWidth = innerEl.offsetWidth;
		const cloneEl = innerEl.cloneNode(true);
		el.appendChild(cloneEl);

		let start = performance.now();
		let progress;
		let translateX;

		requestAnimationFrame(function step(now) {
			progress = (now - start) / duration;

			if (progress > 1) {
				progress %= 1;
				start = now;
			}

			translateX = innerWidth * progress;

			innerEl.style.transform = `translate3d(-${translateX}px, -40px , 0)`;
			cloneEl.style.transform = `translate3d(-${translateX}px, -40px , 0)`;
			requestAnimationFrame(step);
		});
	}

	const marquee1 = document.querySelector('#marquee1');

	animateMarquee(marquee1, 30000);

})
