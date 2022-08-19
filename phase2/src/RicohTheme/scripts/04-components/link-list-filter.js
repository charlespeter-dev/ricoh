jQuery(document).ready(function($) {

	var linkListFilter = function() {
		$('.jsLinkListFilter').each(function() {
			var $linkListFilter = $(this);
			var $linkListFilterContainer = $linkListFilter.find('.jsLinkListFilterContainer');
			var $linkListFilterContent = $linkListFilter.find('.jsLinkListFilterContent');

			// add/remove gradient overlay if list overflows window
			var checkOverflow = function() {
				// $linkListFilterContent.innerWidth() isn't getting the right width, not sure what's up
				if ($linkListFilterContent.innerWidth() > $('body').innerWidth()) {
					$linkListFilter.addClass('link-list-filter--viewport-overflow');
				} else {
					$linkListFilter.removeClass('link-list-filter--viewport-overflow');
				}
			};

			checkOverflow();

			$(window).on('resize', $.throttle(250, function() {
				checkOverflow();
			}));

			// add/remove gradient overlay when the last item has been reached
			$linkListFilterContainer.scroll(function() {
				var $lastItem = $linkListFilterContent.find('li:last-child');
				var $lastItemOffsetRight = $lastItem.offset().left + $lastItem.innerWidth();

				if (Math.floor($lastItemOffsetRight) <= $('body').innerWidth()) {
					$linkListFilter.removeClass('link-list-filter--viewport-overflow');
				} else {
					$linkListFilter.addClass('link-list-filter--viewport-overflow');
				}
			});

		});
	};

	if ($('.jsLinkListFilter').length) {
		linkListFilter();
	}

});
