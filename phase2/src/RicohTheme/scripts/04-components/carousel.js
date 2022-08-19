jQuery(document).ready(function($) {

	var carousel = function() {
		$('.jsCarousel').each(function() {
			var displayTime = parseInt($(this).attr('display-time'));
			
			if (isNaN(displayTime) || displayTime < 0) {
				displayTime = 0;
			}
			
			var $options = {
				arrowShape: 'M7.1 100h85.7c3.9 0 7.1-3.2 7.1-7.1V7.1c0-3.9-3.2-7.1-7.1-7.1H7.1C3.2 0 0 3.2 0 7.1v85.7c0 4 3.2 7.2 7.1 7.2zm50.4-72.3l3.7 3.4-19.9 19 19.9 19-3.7 3.4-23.6-22.4 23.6-22.4z',
				autoPlay: displayTime,
				cellAlign: 'left',
				cellSelector: '.carousel__cell',
				wrapAround: true,
				setGallerySize: false
			};

			var $carousel = $(this).flickity($options);

			// add class if only one slide
			var $flkty = $carousel.data('flickity');
			if ($flkty.cells.length < 2) {
				$flkty.unbindDrag();
				$carousel.addClass('carousel--single-slide');
			}

			var onLoadeddata = function(e) {
				var $cell = $carousel.flickity('getParentCell', e.target);
				$carousel.flickity('select.flickity', $cell && $cell.element);
			};

			// play video on first slide
			var $firstSlideVideo = $carousel.find('.carousel__cell:first .jsCarouselVideo');
			if ($firstSlideVideo.length) {
				$firstSlideVideo[0].play();
			}

			// play / pause videos when moving between slides
			$carousel.on('select.flickity', function() {
				$carousel.find('.jsCarouselVideo').each(function(i, video) {
					video.pause();
					$(video).on('loadeddata', onLoadeddata);
				});
				$carousel.find('.is-selected .jsCarouselVideo').each(function(i, video) {
					video.play();
					$(video).on('loadeddata', onLoadeddata);
				});
			});

			// adding class during drag
			$carousel.on('dragStart.flickity', function() {
				$(this).addClass('is-dragging');
			});
			$carousel.on('dragEnd.flickity', function() {
				$(this).removeClass('is-dragging');
			});

		});
		
		$('.carousel').each(function() {
			var video = $(this).find('.jsCarouselVideo');
			var playBtn = $(this).find('.play-btn');
			
			video.on('ended',function(){
				playBtn.toggleClass("pause");
			});
			
		// toggle button class on click
			playBtn.on('click', function() {
			  $(this).toggleClass("pause");
			  if (video[0].paused) {
				  video[0].play();
				} else {
				  video[0].pause();	
				}
			});
		});
	};
	
	if ($('.jsCarousel').length) {
		carousel();
	}

});
