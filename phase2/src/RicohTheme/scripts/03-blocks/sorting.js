jQuery(document).ready(function($) {

	var sortByFilter = function($el) {
		$el.selectric().on('change', function(event, element, selectric) {
			var sortOption = $(this).val();
			window.location = updateQueryStringParameter(window.location.href, 'sortFilter', sortOption);
		});
	};

	if ($('.jsSortByFilter').length) {
		sortByFilter($('.jsSortByFilter'));
	}

});
