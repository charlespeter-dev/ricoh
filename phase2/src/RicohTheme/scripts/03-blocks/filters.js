jQuery(document).ready(function ($) {

	function postfacet(url) {
		var filterSelections = [];
		if (url == null) {
			currenturl = window.location.href;
		} else {
			currenturl = url;
		}
		currenturl = updateQueryStringParameter(currenturl, 'f', ''); // clear the current selection
		if ($('.jsPostFacetsHelp').length) {
			var filterSelection = 'ContentMetaTags=';
			$('.jsFilterTags').each(function () {
				var $hasTags = $(this).find('input[type="checkbox"]:checked');
				if ($hasTags.length) {
					var tagLength = $(this).find('input[type="checkbox"]:checked').length;
					filterSelection += $(this).data('container-name') + ':';
					$(this).find('input[type="checkbox"]:checked').each(function (i) {
						if (i === (tagLength - 1)) {
							filterSelection += $(this).attr('value') + '&';
						} else {
							filterSelection += $(this).attr('value') + '|';
						}
					});
				}
			});
			filterSelections.push(filterSelection);
		} else {
			$('input[type="checkbox"][id^="filter_"]:checked').each(function () {
				var filterKey = $(this).attr('id').replace('filter_', '');
				var filterValue = $(this).attr('value');
				var filterFieldType = $(this).attr('filter-field-type');
				filterSelections.push(generateFilterSelection(filterFieldType, filterKey, filterValue));
			});
		}
		$('select[id^="filter_"]').each(function () {
			if ($(this).val() != '' && $(this).val() != null) {
				var filterKey = $(this).attr('id').replace('filter_', '');
				var filterValue = this.value;
				var filterFieldType = $(this).attr('filter-field-type');
				filterSelections.push(generateFilterSelection(filterFieldType, filterKey, filterValue));
			}
		});
		$('input[type="text"][id^="filter_"]').each(function () {
			var filterKey = $(this).attr('id').replace('filter_', '');
			var filterValue = $(this).attr('value');
			var filterFieldType = $(this).attr('filter-field-type');
			filterSelections.push(generateFilterSelection(filterFieldType, filterKey, filterValue));
		});
		$('input[id^="filter_"][id$="_minValue"]').each(function () {
			var containerId = '#' + $(this).attr('id').replace('filter_', 'filterContainer_').replace('_minValue', '');
			var minValueDefault = $(containerId).data('min');
			var maxValueDefault = $(containerId).data('max');
			var minValueSelection = $(this).val();
			var maxValueSelection = $('#' + $(this).attr('id').replace('minValue', 'maxValue')).val();
			var maxValueId = '#' + $(this).attr('id').replace('minValue', 'maxValue');
			if (parseInt(minValueDefault) != parseInt(minValueSelection) || parseInt(maxValueDefault) != parseInt(maxValueSelection)) {
				var filterFieldType = $(this).attr('filter-field-type');
				var filterMinKey = $(this).attr('id').replace('filter_', '');
				var filterMinValue = parseInt(minValueSelection);
				filterSelections.push(generateFilterSelection(filterFieldType, filterMinKey, filterMinValue));
				var filterMaxKey = $(maxValueId).attr('id').replace('filter_', '');
				var filterMaxValue = parseInt(maxValueSelection);
				filterSelections.push(generateFilterSelection(filterFieldType, filterMaxKey, filterMaxValue));
			}
		});
		if (filterSelections.length) {
			var newUrl = updateQueryStringParameter(currenturl, 'page', '0'); // reset page to index 0
			window.location = updateQueryStringParameter(newUrl, 'f', encodeURIComponent(filterSelections.join('&')));
		} else {
			window.location = currenturl.replace('#', '');
		}
	}

	function generateFilterSelection(type, key, value) {
		if (type == 'rt') {
			value = btoa(encodeURIComponent(value));
		}
		return key+'__'+type+'='+value;
	}

	function removeFilter(filternameValue) {
		if (filternameValue.split('__').length == 2) {
			var filterName = filternameValue.split('__')[0];
			var filterValue = filternameValue.split('__')[1];
			filterValue = filterValue.replaceAll("\"", "\\\"");
			if(document.getElementById(filterName) != null ){
			var nodeType = document.getElementById(filterName).nodeName;
			if (nodeType == 'INPUT') {
				$('input[type="checkbox"][id="' + filterName + '"][value="' + filterValue + '"]').attr('checked', false);
			} else if (nodeType == 'SELECT') {
				$('select[id="' + filterName + '"]').prop('selectedIndex', null);
			}
			}
			postfacet();
		}
	}

	function removeSliderFilter(filtername) {
		var containerId = 'filterContainer_' + filtername.replace('filter_', '');
		var minValue = $('#' + containerId).data('min');
		var maxValue = $('#' + containerId).data('max');

		// resetting values to original min and max
		$('input[id^=' + filtername + ']').each(function () {
			if ($(this).attr('id').includes('_minValue')) {
				$(this).val(minValue);
			} else if ($(this).attr('id').includes('_maxValue')) {
				$(this).val(maxValue);
			}
		});
		postfacet();
	}

	// remove applied filters [category-tag] component
	$('.jsRemoveFilter').on('click', function () {
		var facet = $(this).data('facet');
		removeFilter(facet);
	});

	// remove applied slider filter [category-tag] component
	$('.jsRemoveSliderFilter').on('click', function () {
		var facet = $(this).data('facet');
		removeSliderFilter(facet);
	});

	// post facets rak
	$(document).on('click', '.jsPostFacets', function (e) {
		if ($(this).hasClass('btn--disabled')) {
			// do nothing when disabled
			e.preventDefault();
		} else if ($('#category').length && !$(this).hasClass('btn--disabled')) {
			// parse categories through on help me choose page
			var newUrl = updateQueryStringParameter(window.location.href, 'category', encodeURIComponent($('#category').val()));
			postfacet(newUrl);
		} else {
			postfacet();
		}
	});

	// post facets mvp
	$(document).on('click', '.jsPostFacetsMvp', function (e) {
		if ($(this).hasClass('btn--disabled')) {
			// do nothing when disabled
			e.preventDefault();
		} else if ($('#containerFolder').length && !$(this).hasClass('btn--disabled')) {
			// parse categories through on help me choose page
			var newUrl = updateQueryStringParameter(window.location.origin + window.location.pathname, 'container', encodeURIComponent($('#containerFolder').val()));
			window.location = newUrl;
		} else {
			postfacet();
		}
	});

	$('.jsArticleFilter').on('click', function () {
		var facet = $(this).data('filter');
		var newUrl = updateQueryStringParameter(window.location.href, 'f', encodeURIComponent(facet));
		var newUrl = updateQueryStringParameter(newUrl, 'page', '0');
		window.location = newUrl;
	});

});
