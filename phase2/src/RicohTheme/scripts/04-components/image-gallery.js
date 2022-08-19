jQuery(document).ready(function($) {

	var imageGallery = function() {

		// close image info function
		var closeOpenImageInfo = function(trigger) {
			var $info = trigger.next('.jsImageGalleryInfo');
			trigger.removeClass('image-gallery__expand-btn--active');
			$info.removeClass('image-gallery__info--active');
			TweenMax.to($info, 0.2, {
				display: 'none',
				height: 0,
				'min-height': 0,
				left: '100%',
				right: '12px',
				top: '12px'
			});
		};

		// toggle image info on button click
		$('.jsImageGalleryExpandBtn').on('click', function() {

			var $this = $(this);
			var $thisInfo = $this.next('.jsImageGalleryInfo');

			// close any other open image info
			closeOpenImageInfo($('.jsImageGalleryExpandBtn.image-gallery__expand-btn--active').not(this));

			// open/close the clicked image info
			if (!$this.hasClass('image-gallery__expand-btn--active')) {
				$this.addClass('image-gallery__expand-btn--active');
				$thisInfo.removeAttr('style')
					.css('background-image', $this.parent('.image-gallery__item').css('background-image'))
					.addClass('image-gallery__info--active');
				TweenMax.from($thisInfo, 0.2, {
					display: 'none',
					height: 0,
					'min-height': 0,
					left: '100%',
					right: '12px',
					top: '12px'
				});
			} else {
				$this.removeClass('image-gallery__expand-btn--active');
				$thisInfo.removeClass('image-gallery__info--active');
				TweenMax.to($thisInfo, 0.2, {
					display: 'none',
					height: 0,
					'min-height': 0,
					left: '100%',
					right: '12px',
					top: '12px'
				});
			}
		});

		// close an open image info on click outside of gallery
		var flag = false;
		$(document).bind('mouseup touchend', function(e) {
			if (!flag) { // prevent from firing twice on devices that accept mouseup and touchend
				flag = true;
				setTimeout(function() {
					flag = false;
				}, 100);
				if ($('.jsImageGalleryExpandBtn').hasClass('image-gallery__expand-btn--active')) {
					var container = $('.jsImageGalleryList');
					if (!container.is(e.target) && container.has(e.target).length === 0) {
						closeOpenImageInfo($('.jsImageGalleryExpandBtn.image-gallery__expand-btn--active'));
					}
				}
			}
		});

		// remove image info's inline styles on resize
		$(window).on('resize', $.throttle(250, function() {
			$('.jsImageGalleryInfo.image-gallery__info--active').css({
				height: '',
				'min-height': '',
				left: '',
				right: '',
				top: ''
			});
		}));

	};

	if ($('.image-gallery').length) {
		imageGallery();
	}

});
