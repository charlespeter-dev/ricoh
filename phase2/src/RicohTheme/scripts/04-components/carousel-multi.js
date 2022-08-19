jQuery(document).ready(function($) {

	var carouselMulti = function() {
		$('.jsCarouselMulti').each(function() {
			var $carouselMultiOptions = {
				arrowShape: 'M72.1 78.3L42.4 50l29.7-28.3-7.2-6.7-37 35 37 35 7.2-6.7z',
				autoPlay: false,
				cellAlign: 'left',
				cellSelector: '.carousel-multi__cell',
				wrapAround: true
			};

			var $carouselMulti = $(this).flickity($carouselMultiOptions);

			// adding class during drag
			$carouselMulti.on('dragStart.flickity', function() {
				$(this).addClass('is-dragging');
			});
			$carouselMulti.on('dragEnd.flickity', function() {
				$(this).removeClass('is-dragging');
			});

		});
	};

	if ($('.jsCarouselMulti').length) {
		carouselMulti();
	}

});

