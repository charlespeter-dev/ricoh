jQuery(document).ready(function($) {

	var linkList = function() {
		$('.jsLinkList').each(function() {
			var $linkList = $(this);
			var $linkListContainer = $linkList.find('.jsLinkListContainer');
			var $linkListContentContainer = $linkList.find('.jsLinkListContent');
			var $linkListTitleWidth = $linkListContentContainer.find('.link-list__title').outerWidth();
			var $linkListListWidth = $linkListContentContainer.find('.link-list__list').outerWidth();
			var $linkListContentWidth = $linkListTitleWidth + $linkListListWidth;

			// add/remove gradient overlay if list overflows window
			var checkOverflow = function() {
				if ($linkListContentWidth > $('body').innerWidth()) {
					$linkList.addClass('link-list--viewport-overflow');
				} else {
					$linkList.removeClass('link-list--viewport-overflow');
				}
			};

			checkOverflow();

			$(window).on('resize', $.throttle(250, function() {
				checkOverflow();
			}));

			// add/remove gradient overlay when the last item has been reached
			$linkListContainer.scroll(function() {
				var $lastItem = $linkListContent.find('li:last-child');
				var $lastItemOffsetRight = $lastItem.offset().left + $lastItem.innerWidth();

				if (Math.floor($lastItemOffsetRight) <= $('body').innerWidth()) {
					$linkList.removeClass('link-list--viewport-overflow');
				} else {
					$linkList.addClass('link-list--viewport-overflow');
				}
			});

		});
	};

	if ($('.jsLinkList').length) {
		linkList();
	}

});
