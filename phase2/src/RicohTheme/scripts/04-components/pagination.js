jQuery(document).ready(function($) {

	var paginationDefault = function() {
		if ($(window).outerWidth() < 768) {
			$('.jsPaginationDefault').each(function() {
				var $active = $(this).find('.pagination__page--active');
				var $prev = $(this).find('.pagination__prev');
				var $next = $(this).find('.pagination__next');
				var $length = $('.pagination__item').length - 4;
				var $activeNew = $activeCurrent + ' of ' + $length;
				$active.children('.pagination__link--active').html($activeNew);
				$('.pagination__page').not($active).hide();
				$prev.removeClass('pagination__item--disabled');
				$next.removeClass('pagination__item--disabled');
			});
		} else {
			$('.jsPaginationDefault').each(function() {
				var $active = $(this).find('.pagination__page--active');
				var $first = $(this).find('.pagination__first');
				var $last = $(this).find('.pagination__last');
				var $prev = $(this).find('.pagination__prev');
				var $next = $(this).find('.pagination__next');
				var $more = $(this).find('.pagination__more');
				$active.children('.pagination__link--active').html($activeCurrent);
				// show items either side of active
				if ($('.pagination__page').hasClass('pagination__page--active')) {
					$active.prev('.pagination__page').show();
					$active.next('.pagination__page').show();
				}
				// hide more ellipsis if second or third from end
				if ($active.next().is('.pagination__more')) {
					$active.next().hide();
				} else if ($active.next().next().is('.pagination__more')) {
					$active.next().next().hide();
				}
				// hide more ellipsis if second or third fron start
				if ($active.prev().is('.pagination__more')) {
					$active.prev().hide();
				} else if ($active.prev().prev().is('.pagination__more')) {
					$active.prev().prev().hide();
				}
				// hide more ellipsis if too few items
				if ($('.pagination__item').length <= 8) {
					$more.hide();
				}
				// removing more ellipsis from tabindex
				$more.attr('tabindex', '-1');
				// first & last item conditions
				if ($first.hasClass('pagination__page--active')) {
					$active.next().next('.pagination__page').show();
					$active.next().next().next('.pagination__page').show();
					$prev.addClass('pagination__item--disabled');
				} else if ($last.hasClass('pagination__page--active')) {
					$active.prev().prev('.pagination__page').show();
					$active.prev().prev().prev('.pagination__page').show();
					$next.addClass('pagination__item--disabled');
				}
			});
		}
	};

	if ($('.jsPaginationDefault').length) {
		var $activeCurrent = $(this).find('.pagination__page--active').children('.pagination__link--active').html();
		paginationDefault();
		$(window).on('resize', $.throttle(250, function() {
			paginationDefault();
		}));
	}

});
