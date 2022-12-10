$(window).on("load", function () {
	myLoading();
});
function myLoading() {
	setTimeout(() => {
		$("body > .overlay").addClass("loaded");
		AOS.init();
	}, 1234);
}
svgToInline(".inline-svg");

// PROJECT IMAGE CAROUSEL
const $projectImages = $("section.project .project__images");
// bind event listener first
$projectImages.on("ready.flickity", function () {
	console.log(" projectImages Flickity ready");
});
// initialize Flickity
$projectImages.flickity({
	cellSelector: ".cell",
	cellAlign: "left",
	wrapAround: true, //loop
	draggable: true,
	prevNextButtons: false,
	pageDots: true,
	autoPlay: false,
	selectedAttraction: 0.01, //Higher attraction makes the slider move faster
	friction: 0.2, //Higher friction makes the slider feel stickier and less bouncy
	setGallerySize: false, //Set size of cells by CSS
	on: {
		ready: function () {
			// let default_dots = $(".flickity-page-dots"),
			// 	my_dots = $(".slider__paging");
			// default_dots.addClass("slider__dots");
			// default_dots.appendTo(my_dots);
			// BIND CONTROL
			let $prevBtn = $projectImages.find(".control__btn.--prev"),
				$nextBtn = $projectImages.find(".control__btn.--next"),
				$fullScreenBtn = $("section.project .control__item.fullscreen"),
				$fullScreenBtn2nd = $projectImages.find(".mobile-fullscreen"),
				$exitFS = $projectImages.find(".exit-fullscreen");
			// previous
			$prevBtn.on("click", function () {
				$projectImages.flickity("previous");
			});
			// next
			$nextBtn.on("click", function () {
				$projectImages.flickity("next");
			});
			// fullscreen
			$fullScreenBtn.on("click", function () {
				$projectImages.flickity("viewFullscreen");
			});
			$fullScreenBtn2nd.on("click", function () {
				$projectImages.flickity("viewFullscreen");
			});
			//exit fullscreen
			$exitFS.on("click", function () {
				$projectImages.flickity("exitFullscreen");
			});
		},
		change: function (index) {
			// let number = $(".slider__number span");
			// number.text((index + 1).toString().padStart(2, 0));
		},
	},
});

// STUDIO IMAGE CAROUSEL
const $studioImages = $("section.studio__slider .studio__images");
// bind event listener first
$studioImages.on("ready.flickity", function () {
	console.log("studioImages Flickity ready");
});
// initialize Flickity
$studioImages.flickity({
	cellSelector: ".cell",
	cellAlign: "left",
	wrapAround: true, //loop
	draggable: true,
	prevNextButtons: true,
	pageDots: true,
	autoPlay: false,
	selectedAttraction: 0.01, //Higher attraction makes the slider move faster
	friction: 0.2, //Higher friction makes the slider feel stickier and less bouncy
	setGallerySize: false, //Set size of cells by CSS
	on: {
		ready: function () {
			// let default_dots = $(".flickity-page-dots"),
			// 	my_dots = $(".slider__paging");
			// default_dots.addClass("slider__dots");
			// default_dots.appendTo(my_dots);
			// BIND CONTROL
			let $prevBtn = $studioImages.parent().find(".control__item.--prev"),
				$nextBtn = $studioImages.parent().find(".control__item.--next"),
				$fullScreenBtn = $studioImages
					.parent()
					.find(".control__item.--fullscreen"),
				$fullScreenBtn2nd = $studioImages.find(".mobile-fullscreen"),
				$exitFS = $studioImages.find(".exit-fullscreen");
			// previous
			$prevBtn.on("click", function () {
				$studioImages.flickity("previous");
			});
			// next
			$nextBtn.on("click", function () {
				$studioImages.flickity("next");
			});
			// fullscreen
			$fullScreenBtn.on("click", function () {
				$studioImages.flickity("viewFullscreen");
			});
			$fullScreenBtn2nd.on("click", function () {
				$studioImages.flickity("viewFullscreen");
			});
			//exit fullscreen
			$exitFS.on("click", function () {
				$studioImages.flickity("exitFullscreen");
			});
		},
		change: function (index) {
			// let number = $(".slider__number span");
			// number.text((index + 1).toString().padStart(2, 0));
		},
	},
});

// CAFE IMAGE CAROUSEL
const $cafeImages = $("section.gallery .gallery__carousel");
// blind event listener first
$cafeImages.on("ready.flickity", function () {
	console.log("cafeImages Flickity ready");
});
// initialize Flickity
$cafeImages.flickity({
	cellSelector: ".cell",
	cellAlign: "left",
	wrapAround: true, //loop
	draggable: true,
	prevNextButtons: false,
	pageDots: false,
	autoPlay: false,
	selectedAttraction: 0.01, //Higher attraction makes the slider move faster
	friction: 0.2, //Higher friction makes the slider feel stickier and less bouncy
	setGallerySize: false, //Set size of cells by CSS
	on: {
		ready: function () {
			// let default_dots = $(".flickity-page-dots"),
			// 	my_dots = $(".slider__paging");
			// default_dots.addClass("slider__dots");
			// default_dots.appendTo(my_dots);
			// BIND CONTROL
			let $prevBtn = $cafeImages.parent().find(".control__item.--prev"),
				$nextBtn = $cafeImages.parent().find(".control__item.--next");
			//$fullScreenBtn = $("section.project .control__item.fullscreen"),
			//$exitFS = $projectImages.find(".exit-fullscreen");
			// previous
			$prevBtn.on("click", function () {
				$cafeImages.flickity("previous");
			});
			// next
			$nextBtn.on("click", function () {
				$cafeImages.flickity("next");
			});
			// // fullscreen
			// $fullScreenBtn.on("click", function () {
			// 	$projectImages.flickity("viewFullscreen");
			// });
			// //exit fullscreen
			// $exitFS.on("click", function () {
			// 	$projectImages.flickity("exitFullscreen");
			// });
		},
		change: function (index) {
			// let number = $(".slider__number span");
			// number.text((index + 1).toString().padStart(2, 0));
		},
	},
});

// SHOW / HIDE NAV BAR
const $burgerBtn = $("header .main-header .burger");
const $nav = $("nav");
$burgerBtn.on("click", function () {
	$nav.toggleClass("--active");
});

// BACK TO TOP
const $backToTop = $("footer .back-to-top");
$backToTop.on("click", function () {
	//1 second of animation time
	//html works for FFX but not Chrome
	//body works for Chrome but not FFX
	//This strange selector seems to work universally
	// THANKS TO "Explosion Pills"
	$("html, body").animate({ scrollTop: 0 }, 1000);
});

const $rentalForm = $(".rental main .form");
const $rentalSubmit = $rentalForm.find(".booking__btn");
$rentalSubmit.on("submit", function (event) {
	alert("Handler for .submit() called.");
	event.preventDefault();
});
$rentalSubmit.on("click", function () {
	$rentalForm.trigger("submit");
});
