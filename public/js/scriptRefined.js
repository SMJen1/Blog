(function ($) {
	"use strict";



		/*==========  Tooltip  ==========*/
		$('.tool-tip').tooltip();
	
		/*==========  Responsive Navigation  ==========*/
		$('.main-nav').children().clone().appendTo('.responsive-nav');
		$('.responsive-menu-open').on('click', function(event) {
			event.preventDefault();
			$('body').addClass('no-scroll');
			$('.responsive-menu').addClass('open');
		});
		$('.responsive-menu-close').on('click', function(event) {
			event.preventDefault();
			$('body').removeClass('no-scroll');
			$('.responsive-menu').removeClass('open');
		});

		/*==========  Slide Out  ==========*/
		$('.header-action-button').on('click', function(event) {
			event.preventDefault();
			$('.slide-out-overlay').fadeIn(250);
			$('.slide-out').addClass('open');
		});
		$('.slide-out-close').on('click', function(event) {
			event.preventDefault();
			$('.slide-out-overlay').fadeOut(250);
			$('.slide-out').removeClass('open');
		});
		$('.slide-out-overlay').on('click', function(event) {
			event.preventDefault();
			$('.slide-out-overlay').fadeOut(250);
			$('.slide-out').removeClass('open');
		});

		/*==========  Blog  ==========*/
		var $blogContainer = $('#blog-masonry').imagesLoaded(function() {
			$blogContainer.isotope({
				itemSelector: '.blog-post',
				layoutMode: 'masonry',
				masonry: {
					columnWidth: $blogContainer.find('.blog-grid-sizer')[0]
				}
			});
			horizontalSections();
		});

		/*==========  Horizontal Scroll  ==========*/
		var hash = window.location.hash;
		var url = 1;
		var count = $('.sections-wrapper section').length;
		if (location.hash) {
			setTimeout(function() {
				window.scrollTo(0, 0);
			}, 1);
			slide('link');
		}
		function horizontalSections() {
			var vWidth = $(window).width();
			var vheight = $(window).height();
			$('.sections-wrapper > section').css('width', vWidth);
			$('.sections-wrapper').css('width', vWidth * count).css('height', $('.sections-wrapper section.active').outerHeight());
		}

		horizontalSections();
		$(window).on('resize', function() {
			horizontalSections();
		});
		$('.section-nav a.forward').on('click', function() {
			slide('forward', $(this));
		});
		$('.section-nav a.backward').on('click', function() {
			slide('backward', $(this));
		});
		$('.main-nav a').on('click', function() {
			slide('mainNav', $(this));
		});
		$('.responsive-nav a').on('click', function() {
			slide('mainNav', $(this));
			$('body').removeClass('no-scroll');
			$('.responsive-menu').removeClass('open');
		});
		$('.available').on('click', function() {
			slide('mainNav', $(this));
		});

	

})(jQuery);