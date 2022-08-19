jQuery(document).ready(function($) {

	var carouselProduct = function() {
		$('.jsCarouselProduct').each(function() {
			var $carouselProductOptions = {
				arrowShape: 'M72.1 78.3L42.4 50l29.7-28.3-7.2-6.7-37 35 37 35 7.2-6.7z',
				autoPlay: false,
				cellAlign: 'center',
				pageDots: true,
				cellSelector: '.carousel-product__cell',
				contain: true
			};

			var $carouselProduct = $(this).flickity($carouselProductOptions);

			// add class to carousel after flickity initialised
			$('.jsCarouselProduct').addClass('initialised');

			// adding class during drag
			$carouselProduct.on('dragStart.flickity', function() {
				$(this).addClass('is-dragging');
			});
			$carouselProduct.on('dragEnd.flickity', function() {
				$(this).removeClass('is-dragging');
			});
		});
	};

	if ($('.jsCarouselProduct').length) {
		carouselProduct();
	}

});

