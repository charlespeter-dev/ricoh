jQuery(document).ready(function($) {

	var $overlay = $('.jsOverlay');
	var $toolbarSlider = $('.jsFixedToolbarSlider');
	var $toolbarList = $('.jsFixedToolbarList');
	var duration = 0.4;

	var openToolbar = function() {
		$toolbarSlider.addClass('jsFixedToolbarSlider--opened');
		TweenMax.to($overlay, duration, {
			display: 'block',
			opacity: '1'
		});
		TweenMax.from($toolbarList, 0.5, {
			height: 4,
			'margin-left': '600px'
		});
		TweenMax.to($toolbarList, 1, {
			height: 90,
			'margin-left': '0'
		});
	};

	// accessed by menu in master.js
	window.closeToolbar = function() {
		$toolbarSlider.removeClass('jsFixedToolbarSlider--opened');
		TweenMax.to($overlay, duration, {
			display: 'none',
			opacity: '0'
		});
		TweenMax.to($toolbarList, 0.2, {
			height: 4
		});
	};

	var fixedToolbar = function() {
		$toolbarSlider.on('click', function() {
			var $this = $(this);
			// open/close the toolbar
			if (!$this.hasClass('jsFixedToolbarSlider--opened')) {
				window.closeMenus(); // master.js
				openToolbar();
			} else {
				closeToolbar();
			}
		});
	};

	$overlay.on('click', function() {
		closeToolbar();
	});

	if ($('.jsFixedToolbar').length) {
		fixedToolbar();

		// close the mobile toolbar when resizing to 768+
		$(window).on('resize', $.throttle(250, function() {
			if ($(window).width() > 768) {
				closeToolbar();
			}
		}));
	}

});
