(function ($) {
	"use strict";

	// fixed menu js
	// $(window).on('scroll', function () {
	// 	var scroll = $(window).scrollTop();
	// 	if (scroll < 245) {
	// 		$("#sticky-header").removeClass("sticky-menu");
	// 		$("#header-fixed-height").removeClass("active-height");

	// 	} else {
	// 		$("#sticky-header").addClass("sticky-menu");
	// 		$("#header-fixed-height").addClass("active-height");
	// 	}
	// });

	// Fixed menu js start
	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 245) {
			$("#sticky-header").removeClass("sticky-menu");
			$("#header-fixed-height").removeClass("active-height");

		} else {
			$("#sticky-header").addClass("sticky-menu");
			$("#header-fixed-height").addClass("active-height");
		}
	});

	// country slider js
	$(".country_slider").slick({
		infinite: true,
		speed: 500,
		slidesToShow: 6,
		dots: false,
		autoplay: true,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: '<i class="fas left icon fa-chevron-left"></i>',
		nextArrow: '<i class="fas right icon fa-chevron-right"></i>',
		responsive: [{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 2,
				},
			},
		],
	});


	// Payment slider js
	$(".payment_method_slider").slick({
		infinite: true,
		autoplaySpeed: 0,
		speed: 2500,
		cssEase: "linear",
		slidesToShow: 6,
		dots: false,
		autoplay: true,
		slidesToScroll: 1,
		arrows: false,
		prevArrow: '<i class="fas left icon fa-chevron-left"></i>',
		nextArrow: '<i class="fas right icon fa-chevron-right"></i>',
		responsive: [{
				breakpoint: 992,
				settings: {
					slidesToShow: 4,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 2,
				},
			},
		],
	});

	// Testimonial slider js start
	$(".testimonial_area_slider").slick({
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		dots: false,
		autoplay: false,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: '<i class="fas left icon fa-arrow-left"></i>',
		nextArrow: '<i class="fas right icon fa-arrow-right"></i>',
		responsive: [{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	});

	/* Odometer Active js */
	$('.odometer').appear(function (e) {
		var odo = $(".odometer");
		odo.each(function () {
			var countNumber = $(this).attr("data-count");
			$(this).html(countNumber);
		});
	});

	// Mobile menu js start

	$(".mobile-topbar .bars i").on("click", function () {
		$(".mobile-menu-overlay,.mobile-menu-main").addClass("active");
		return false;
	});

	$(".close-mobile-menu,.mobile-menu-overlay").on("click", function () {
		$(".mobile-menu-overlay,.mobile-menu-main").removeClass("active");
	});

	$('.sub-mobile-menu ul').hide();
	$(".sub-mobile-menu a").on("click", function () {
		$(this).parent(".sub-mobile-menu").children("ul").slideToggle("100");
		$(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
	});

	// gallery popup js
	// $(".parent-container").magnificPopup({
	// 	delegate: "a",
	// 	type: "image",
	// 	gallery: {
	// 		enabled: true,
	// 	},
	// });

	// video popup js
	// $('.vidplay').magnificPopup({
	// 	type: 'iframe',
	// 	iframe: {
	// 		markup: '<div class="mfp-iframe-scaler">' +
	// 			'<div class="mfp-close"></div>' +
	// 			'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
	// 			'</div>',
	// 		patterns: {
	// 			youtube: {
	// 				index: 'youtube.com/',
	// 				id: 'v=',
	// 				src: 'https://www.youtube.com/embed/%id%?autoplay=1'
	// 			},
	// 		},
	// 		srcAction: 'iframe_src',
	// 	}
	// });


	// scroll to top js
	var btn = $(".scroll-to-top");

	$(window).scroll(function () {
		btn.toggleClass("show", $(window).scrollTop() > 300);
	});

	btn.click(function (e) {
		e.preventDefault();
		if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1) {
			$("html").animate({
					scrollTop: 0,
				},
				800
			);
		} else {
			$("html, body").animate({
					scrollTop: 0,
				},
				0
			);
		}
	});


	// mobilel menu js

	// $(".mobile_menu_bar i").on("click", function () {
	// 	var $icon = $(this);
	// 	$(".main_menu").toggleClass("active");

	// 	// Toggle between different icons using classes
	// 	if ($icon.hasClass("fa-bars")) {
	// 		$icon.removeClass("fa-bars").addClass("fa-times");
	// 	} else {
	// 		$icon.removeClass("fa-times").addClass("fa-bars");
	// 	}
	// });


	// $('.sub-mobile-menu ul').hide();
	// $(".sub-mobile-menu a").on("click", function () {
	// 	$(this).parent(".sub-mobile-menu").children("ul").slideToggle("100");
	// 	$(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
	// });

	// document.addEventListener('contextmenu', function (e) {
	// 	e.preventDefault();
	// });
	// document.addEventListener('keydown', function (e) {
	// 	if (e.ctrlKey && e.key === 'u') {
	// 		e.preventDefault();
	// 	}
	// });
})(jQuery);