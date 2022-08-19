jQuery(document).ready(function($) {

	var customerStoriesIsotope = function() {
		var $grid = $('.jsCustomerStoriesListing').isotope({
			itemSelector: '.customer-stories__item',
			layoutMode: 'masonry',
			sortAscending: false,
			cellsByRow: {
				columnWidth: 200,
				rowHeight: 150
			}
		});

		$grid.imagesLoaded().progress(function() {
			$grid.isotope('layout');
		});

		// counting the amount of articles in each category and append the count number on filter bar
		$('.jsCustomerStoriesButtonGroup button').each(function(index) {
			var filterValue = $(this).attr('data-filter-text');
			var filterCount = $(this).find('.jsCount');
			var count = 0;

			$('.jsCustomerStoriesListing .jsCustomerStoriesItem').each(function(index) {
				if ($(this).hasClass(filterValue)) {
					count++;
					filterCount.text(count);
				}
			});
		});

		// bind filter button click
		$('.jsCustomerStoriesButtonGroup').on('click', 'button', function() {
			var filterValue = $(this).attr('data-filter');
			// use filterFn if matches value
			$grid.isotope({ filter: filterValue });
		});

		// bind filter select dropdown
		$('.jsCustomerStoriesSort').change(function() {
			var filterSelected = $(this).find(':selected').attr('data-filter');

			// use filterFn if matches value
			if (filterSelected == 'asc') {
				$grid.isotope({
					getSortData: {
						order: '[data-order]'
					},
					sortBy: 'order',
					sortAscending: true
				});
			}
			if (filterSelected == 'desc') {
				$grid.isotope({
					getSortData: {
						order: '[data-order]'
					},
					sortBy: 'order',
					sortAscending: false
				});
			}
		});

		// change is-checked class on buttons
		$('.jsCustomerStoriesButtonGroup').each(function(i, buttonGroup) {
			var $buttonGroup = $(buttonGroup);
			$buttonGroup.on('click', 'button', function() {
				$buttonGroup.find('.is-checked').removeClass('is-checked');
				$(this).addClass('is-checked');
			});
		});
	};

	if ($('.jsCustomerStoriesListing').length) {
		customerStoriesIsotope();
	}

});
