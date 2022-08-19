jQuery(document).ready(function($) {

	var reviewsCarousel = function() {
		$('.jsReviewsCarousel').each(function() {
			var $reviewsCarouselOptions = {
				autoPlay: false,
				cellAlign: 'left',
				cellSelector: '.reviews__carousel-cell',
				wrapAround: true,
				prevNextButtons: false
			};

			var $reviewsCarousel = $(this).flickity($reviewsCarouselOptions);

			// adding class during drag
			$reviewsCarousel.on('dragStart.flickity', function() {
				$(this).addClass('is-dragging');
			});
			$reviewsCarousel.on('dragEnd.flickity', function() {
				$(this).removeClass('is-dragging');
			});
		});
	};

	if ($('.jsReviewsCarousel').length) {
		reviewsCarousel();
	}

});
