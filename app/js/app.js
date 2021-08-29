// Import jQuery module (npm i jquery)
import $ from 'jquery'
window.jQuery = $
window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

document.addEventListener('DOMContentLoaded', () => {
	
	// Custom JS
// popup
function pop() {
		$('.popup-with-form').magnificPopup({
			type: 'inline',
			preloader: false,
			focus: '#name',
	
			// When elemened is focused, some mobile browsers in some cases zoom in
			// It looks not nice, so we disable it:
			callbacks: {
				beforeOpen: function() {
					if($(window).width() < 700) {
						this.st.focus = false;
					} else {
						this.st.focus = '#name';
					}
				}
			}
		});
	};
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
const marquee2 = document.querySelector('#marquee2');

animateMarquee(marquee1, 30000);
animateMarquee(marquee2, 30000);

})
