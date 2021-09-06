// Import jQuery module (npm i jquery)
import $ from 'jquery'
window.jQuery = $
window.$ = $
import "magnific-popup"

// // Import vendor jQuery plugin example (not module)
require('~/app/js/jquery.malihu.PageScroll2id.min.js')
require('~/app/js/jquery.marquee.min.js')
document.addEventListener('DOMContentLoaded', () => {
	$("a[href*='#signup']").mPageScroll2id({
		offset: 100
	});
	// Custom JS
	// popup
	let openedPopup = false

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
		callbacks: {
			open: () => {
				openedPopup = true
			},
			close: () => {
				openedPopup = false
			}
		},
		mainClass: 'my-mfp-slide-bottom'
	});
	let popupCloseButton = document.querySelectorAll("a[href*='#signup']")

	for(let i=0; i<popupCloseButton.length; i++) {
		popupCloseButton[i].addEventListener('click', () => {

			if(openedPopup) {
				$.magnificPopup.close();
			}
		})
	}
	
	//margquee
	$('.marquee').marquee({
		duration: 30000,
		gap: 0,
		duplicated: true,
		startVisible: true,
		direction: 'right',
	})
	let emailInput = document.querySelector('#submit_form input')
	$("#submit_form").submit(function (event) { // Устанавливаем событие отправки для формы с id=form
		event.preventDefault();
			var form_data = $(this).serialize(); // Собираем все данные из формы
			$.ajax({
					type: "POST", // Метод отправки
					url: "send.php", // Путь до php файла отправителя
					data: form_data,
					success: function (data) {
						emailInput.value = ''
						$(".form-answer").html('success');
						$('.form-answer').addClass('active')
						
								setTimeout(() => {
									$('.form-answer').removeClass('active')
								}, 3000);
					}, 
					error: function (data) {
						$(".form-answer").html('error');
						$('.form-answer').addClass('active')
								setTimeout(() => {
									$('.form-answer').removeClass('active')
								}, 3000);
					}
			});
	 });
})

	
