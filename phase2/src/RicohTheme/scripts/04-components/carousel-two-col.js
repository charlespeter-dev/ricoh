jQuery(document).ready(function($) {

	var carouselTwoCol = function() {
		$('.jsCarouselTwoCol').each(function() {
			var $options = {
				arrowShape: 'M7.1 100h85.7c3.9 0 7.1-3.2 7.1-7.1V7.1c0-3.9-3.2-7.1-7.1-7.1H7.1C3.2 0 0 3.2 0 7.1v85.7c0 4 3.2 7.2 7.1 7.2zm50.4-72.3l3.7 3.4-19.9 19 19.9 19-3.7 3.4-23.6-22.4 23.6-22.4z',
				autoPlay: false,
				cellAlign: 'left',
				cellSelector: '.carousel-two-col__cell',
				wrapAround: true,
				adaptiveHeight: true
			};

			var $carousel = $(this).flickity($options);

			// add class if only one slide
			var $flkty = $carousel.data('flickity');
			if ($flkty.cells.length < 2) {
				$flkty.unbindDrag();
				$carousel.addClass('carousel-two-col--single-slide');
			}

			// adding class during drag
			$carousel.on('dragStart.flickity', function() {
				$(this).addClass('is-dragging');
			});
			$carousel.on('dragEnd.flickity', function() {
				$(this).removeClass('is-dragging');
			});
		});
	};

	if ($('.jsCarouselTwoCol').length) {
		carouselTwoCol();
	}

});
