jQuery(document).ready(function($) {

	if ($('.jsBreadcrumbList').length) {

		var $breadcrumbList = $('.jsBreadcrumbList');
		var breakpoint = 768;

		// scroll into view on mobile on x-axis
		var scrollIn = function() {
			if ($(window).outerWidth() < breakpoint) {
				TweenMax.to($breadcrumbList, 1, {
					'margin-left': 0
				});
			}
		};

		scrollIn();

		$(window).on('resize', $.throttle(250, function() {
			var newWindowWidth = $(window).outerWidth();
			// if desktop, remove inline styles
			if (newWindowWidth >= breakpoint) {
				$breadcrumbList.removeAttr('style');
			}
			// else mobile, scroll in
			else {
				scrollIn();
			}
		}));

	}

});
