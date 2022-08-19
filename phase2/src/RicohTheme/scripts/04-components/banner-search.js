jQuery(document).ready(function($) {

	// put the object into local storage for rak
	if ($('#categories').length) {
		localStorage.setItem('ricohApp/categories', $('#categories').html());
	}
	// put the object into local storage for mvp
	if ($('#containerFolderData').length) {
		localStorage.setItem('ricohApp/containerFolderData', $('#containerFolderData').html());
	}

	function setCategory(categoryName) {
		$('#category').attr('value', categoryName);
	}

	function setContainerFolder(containerfolder) {
		$('#containerFolder').attr('value', containerfolder);
	}

	// mvp
	function populateMetatagFacet(containerFolder) {
		// retrieve the object from storage
		var retrievedObject = localStorage.getItem('ricohApp/containerFolderData');
		if (retrievedObject != null) {
			var groupHtml = '';
			var containerFolderData = JSON.parse(retrievedObject);
			var result = getObjects(containerFolderData, 'name', containerFolder);

			// groupHtml = groupHtml + '<div class="advanced-options__group">';
			groupHtml = groupHtml + '<ul class="filter-graphic jsFilterTags" data-container-name="' + containerFolder + '">';
			$.each(result[0].metaTags, function(i, v) {
				groupHtml = groupHtml + '<li class="filter-graphic__item">';
				groupHtml = groupHtml + '<label class="filter-graphic__label" title="' + v.name + '">';
				groupHtml = groupHtml + '<input class="filter-graphic__checkbox" type="checkbox" id="filter_ContentMetaTags" value="' + v.name + '"/>';
				groupHtml = groupHtml + '<span class="filter-graphic__graphic">';
				groupHtml = groupHtml + '<i class="filter-graphic__icon ricon ' + v.cssClass + '" title="' + v.name + '" aria-hidden="true"></i>';
				groupHtml = groupHtml + '</span>';
				groupHtml = groupHtml + '</label>';
				groupHtml = groupHtml + '</li>';
			});
			groupHtml = groupHtml + '</ul>';
			// groupHtml = groupHtml + '</div>';

			groupHtml = groupHtml + '<div class="advanced-options__row"><a class="btn btn-ghost jsPostFacets" role="button">' + $.i18n("apply filters") + '</a></div>';
			$('#advancedOptionsContainer').append(groupHtml);
		}
	}

	// rak
	function populateFacet(categoryName) {
		// retrieve the object from storage
		var retrievedObject = localStorage.getItem('ricohApp/categories');
		if (retrievedObject != null) {
			var categories = JSON.parse(retrievedObject);
			var result = getObjects(categories, 'Category', categoryName);
			var groupHtml = '';
			var colIndex = 0;
			var facetItemCount = Object.keys(result[0].FacetCollection).length;
			var facetItem = 1;
			$.each(result[0].FacetCollection, function(i, v) {
				// #dev: remove this condition when slider and boolean checkbox are ready
				if (v.ControlType != 'Boolean Checkbox' && v.ControlType != 'Slider' && v.ControlType != 'Numeric Checkbox') {
					groupHtml = groupHtml + '<div class="advanced-options__group">';
					if (v.ControlType != 'Boolean Checkbox') {
						groupHtml = groupHtml + '<button type="button" class="advanced-options__filter-title jsAdvancedOptionsFilterTitle">' + i + '<i class="advanced-options__icon ricon ricon-arrow-down" aria-hidden="true"></i></button>';
					}
					groupHtml = groupHtml + getMarkup(v.ControlType, i, v);
					groupHtml = groupHtml + '</div>';
					colIndex++;
				}
				facetItem++;
			});
			if (facetItemCount > 0) {
				groupHtml = groupHtml + '<div class="advanced-options__row"><a class="btn btn-ghost jsPostFacets" role="button">' + $.i18n("apply filters") + '</a></div>';
			}
			// console.log('grouphtml = ' + groupHtml);
			$('#advancedOptionsContainer').append(groupHtml);
			if ($('#advancedOptionsContainer .jsFilterSlider').length) {
				initRangeSliders($('#advancedOptionsContainer'));
			}
			if ($('#advancedOptionsContainer .filter-dropdown').length) {
				initDropdowns($('#advancedOptionsContainer .filter-dropdown'));
			}
		}
	}

	function getMarkup(controlType, key, facet) {
		switch (controlType) {
			case 'Checkbox': {
				return generateCheckboxFacet(facet);
				break;
			}
			case 'Dropdown': {
				return generateDropdownFacet(facet);
				break;
			}
			// case 'Boolean Checkbox':
			//  return generateBooleanFacet(key, facet);
			//  break;
			// case 'Slider':
			//  return generateSliderFacet(facet);
			//  break;
		}
	}

	function generateCheckboxFacet(facet) {
		var controlHtml = '<div class="advanced-options__filter-container"><ul class="filter-checkbox jsSidenavItemList jsShowMoreList">';
		$.each(facet.Filters, function(i, v) {
			controlHtml = controlHtml + '<li class="filter-checkbox__item"><label class="filter-checkbox__label"><input class="filter-checkbox__checkbox" type="checkbox" id="filter_' + facet.FieldName + '" value="' + v.Value + '">';
			controlHtml = controlHtml + '<span class="filter-checkbox__label-title">' + v.Value + '</span><span class="filter-checkbox__checkbox-faux"></span><span class="filter-checkbox__count">' + v.Count + '</span></label></li>';
		});
		controlHtml = controlHtml + '</ul></div>';
		return controlHtml;
	}

	function generateDropdownFacet(facet) {
		var controlHtml = '<div class="advanced-options__filter-container">';
		controlHtml = controlHtml + '<select class="filter-dropdown" id="filter_' + facet.FieldName + '"><option selected disabled>' + $.i18n("all") + '</option>';
		$.each(facet.Filters, function(i, v) {
			controlHtml = controlHtml + '<option value="' + v.Value + '" >' + v.Value + '</option>';
		});
		controlHtml = controlHtml + '</select></div>';
		return controlHtml;
	}

	function generateBooleanFacet(filterlabel, facet) {
		var controlHtml = '<div class="advanced-options__filter-container"><div class="filter-boolean jsSidenavItemList">';
		$.each(facet.Filters, function(i, v) {
			controlHtml = controlHtml + '<label class="filter-boolean__label"><input class="filter-boolean__checkbox" type="checkbox" id="filter_' + facet.FieldName + '" value="' + facet.TrueConditionValue + '">';
			controlHtml = controlHtml + '<span class="filter-boolean__label-title">' + filterlabel + '</span><span class="filter-boolean__faux-border"></span><span class="filter-boolean__faux-switch"></span>';
			controlHtml = controlHtml + '<span class="filter-boolean__count">' + v.Count + '</span>';
		});
		controlHtml = controlHtml + '</label></div>';
		return controlHtml;
	}

	function generateSliderFacet(facet) {
		var fieldName = facet.FieldName;
		var minValue = getMin(facet.Filters, 'Value').Value;
		var maxValue = getMax(facet.Filters, 'Value').Value;
		var controlHtml = '<div class="filter-slider jsFilterSlider" id="filterContainer_' + fieldName + '" data-min="' + minValue + '" data-max="' + maxValue + '">';
		controlHtml = controlHtml + '<div class="jsSlider"></div>';
		controlHtml = controlHtml + '<input type="number" disabled class="filter-slider__input filter-slider__input--min jsInputMin" id="filter_' + fieldName + '_minValue" value="' + minValue + '" />';
		controlHtml = controlHtml + '<input type="number" disabled class="filter-slider__input filter-slider__input--max jsInputMax" id="filter_' + fieldName + '_maxValue" value="' + maxValue + '" />';
		controlHtml = controlHtml + '</div>';
		// #DEV: These two hidden fields aren't required for front-end, not sure whether they were before. If so, feel free to remove.
		controlHtml = controlHtml + '<input type="hidden" id="filterDefault_' + fieldName + '_minValue" value="' + minValue + '"/>';
		controlHtml = controlHtml + '<input type="hidden" id="filterDefault_' + fieldName + '_maxValue" value="' + maxValue + '"/>';
		return controlHtml;
	}

	// #dev: new; requires integration
	function generateGraphicFacet(facet) {
		var controlHtml = '<div class="advanced-options__filter-container"><ul class="filter-graphic">';
		$.each(facet.Filters, function(i, v) {
			controlHtml = controlHtml + '<label class="filter-graphic__label"><input class="filter-graphic__checkbox" type="checkbox" /><span class="filter-graphic__graphic">';
			// #DEV: This facet can use either an icon (using the <i>) or an image (using the <img>)--but not both
			// icon graphic:
			controlHtml = controlHtml + '<i class="filter-graphic__icon ricon ricon-wireless"></i>';
			// img graphic:
			controlHtml = controlHtml + '<img class="filter-graphic__image" src="http://satyr.io/80x64/2" />';
			controlHtml = controlHtml + '</span></label>';
		});
		controlHtml = controlHtml + '</ul></div>';
		return controlHtml;
	}

	// #dev: new; requires integration
	function generateGridFacet(facet) {
		var controlHtml = '<div class="advanced-options__filter-container"><ul class="filter-grid">';
		$.each(facet.Filters, function(i, v) {
			controlHtml = controlHtml + '<li class="filter-grid__item"><label class="filter-grid__label"><input class="filter-grid__checkbox" type="checkbox" /><span class="filter-grid__label-title">' + v.Value + '</span></label></li>';
		});
		controlHtml = controlHtml + '</ul></div>';
		return controlHtml;
	}

	function getMax(arr, prop) {
		var max;
		for (var i = 0; i < arr.length; i++) {
			if (!max || parseInt(arr[i][prop]) > parseInt(max[prop])) {
				max = arr[i];
			}
		}
		return max;
	}

	function getMin(arr, prop) {
		var min;
		for (var i = 0; i < arr.length; i++) {
			if (!min || parseInt(arr[i][prop]) < parseInt(min[prop])) {
				min = arr[i];
			}
		}
		return min;
	}

	function getObjects(obj, key, val) {
		var objects = [];
		for (var i in obj) {
			if (!obj.hasOwnProperty(i)) {
				continue;
			}
			if (typeof obj[i] == 'object') {
				objects = objects.concat(getObjects(obj[i], key, val));
			} else if (i == key && obj[key] == val) {
				objects.push(obj);
			}
		}
		return objects;
	}

	function clearAppliedFilters() {
		$('.jsAppliedFiltersList').empty();
	}

	function clearFilters() {
		$('#advancedOptionsContainer').empty();
		$('.advanced-options .jsAdvancedOptionsTrigger').addClass('hidden');
		$('.advanced-options .advanced-options__message').show();
		$('.advanced-options .advanced-options__row .btn').addClass('hidden');
	}

	(function bannerSearch() {
		if ($('.jsBannerSearch').length) {

			var duration = 0.4;

			var toggleSubmitEnabledness = function(array) {
				var $submit = $('.jsBannerSearchSubmit');
				var $tooltip = $('.jsBannerSearchTooltip');
				if ($submit.hasClass('btn--disabled') && array.length > 0) {
					$submit.removeClass('btn--disabled');
					$tooltip.addClass('hidden');
				} else if (!$submit.hasClass('btn--disabled') && array.length <= 0) {
					$submit.addClass('btn--disabled');
					$tooltip.removeClass('hidden');
				}
			};

			var toggleMvpSubmitEnabledness = function(array) {
				var $submit = $('.jsBannerSearchSubmitMvp');
				var $tooltip = $('.jsBannerSearchTooltip');
				if ($submit.hasClass('btn--disabled') && array.length > 0) {
					$submit.removeClass('btn--disabled');
					$tooltip.addClass('hidden');
				} else if (!$submit.hasClass('btn--disabled') && array.length <= 0) {
					$submit.addClass('btn--disabled');
					$tooltip.removeClass('hidden');
				}
			};

			var openDropdown = function(dropdown, dropdownInner) {
				TweenMax.to(dropdown, duration, {
					display: 'block',
					opacity: '1'
				});
				TweenMax.to(dropdownInner, duration, {
					rotationX: '0deg'
				});
			};

			var closeDropdown = function(dropdown, dropdownInner) {
				var $activeWrapper = $('.banner-search__trigger--active').parent();
				$activeWrapper.find('.jsBannerSearchDropdownTrigger').removeClass('banner-search__trigger--active');
				$activeWrapper.find('.jsBannerSearchDropdown').removeClass('banner-search__dropdown--active');
				TweenMax.to(dropdown, duration, {
					display: 'none',
					opacity: '0'
				});
				TweenMax.to(dropdownInner, duration, {
					rotationX: '-3deg'
				});
			};

			var enableDropdown = function(dropdown) {
				dropdown.removeClass('banner-search__wrapper--disabled');
				dropdown.prev().removeClass('banner-search__title--disabled');
			};

			var disableDropdown = function(dropdown) {
				dropdown.addClass('banner-search__wrapper--disabled');
				dropdown.prev().addClass('banner-search__title--disabled');
			};

			var resetDropdown = function(dropdown) {
				dropdown.find('.jsBannerSearchList').removeAttr('style');
				dropdown.find('.jsBannerSearchField').removeClass('banner-search__field--active').text('...');
				dropdown.find('.jsBannerSearchCheckbox').prop('checked', false);
				disableDropdown(dropdown);
			};

			var showNextDropdownList = function(checkbox) {
				if (checkbox.attr('data-id')) {
					var id = checkbox.attr('data-id');
					var $childOptions = checkbox.parents('.jsBannerSearchRow').next('.jsBannerSearchRow').find('[data-parent="' + id + '"]');

					// if data row 1, reset 2 and 3; if data row 2, reset 3
					var $row2Dropdown = $('input[data-row="2"]').parents('.jsBannerSearchWrapper');
					var $row3Dropdown = $('input[data-row="3"]').parents('.jsBannerSearchWrapper');
					if (checkbox.attr('data-row') === '1') {
						resetDropdown($row2Dropdown);
						resetDropdown($row3Dropdown);
					} else if (checkbox.attr('data-row') === '2') {
						resetDropdown($row3Dropdown);
					}

					$('.jsBannerSearchSubmit, .jsBannerSearchSubmitMvp').addClass('btn--disabled');

					// show next list
					if ($childOptions.hasClass('banner-search__list--two-col')) {
						$childOptions.css('display', 'flex');
					} else {
						$childOptions.show();
					}
				}
			};

			var selectedResponses = [];
			var getSelectedResponses = function() {
				selectedResponses.length = 0;
				$('input:checked').each(function() {
					selectedResponses.push($(this).val());
				});
			};

			var valuesArray = [];
			var displaySelectedResponses = function(checkbox) {
				var row = checkbox.data('row');

				valuesArray = $('.jsBannerSearchCheckbox[data-row="' + row + '"]:checked').map(function() {
					return this.value;
				}).get().join(', ');

				var $activeField = checkbox.parents('.jsBannerSearchDropdown').prev('.jsBannerSearchDropdownTrigger').find('.jsBannerSearchField');

				if (!valuesArray.length) {
					$activeField.html('...').removeClass('banner-search__field--active');
				} else {
					$activeField.html(valuesArray).addClass('banner-search__field--active');
				}
			};

			var animatePlaceholderResponses = function() {
				$('.jsBannerSearchWrapper').each(function(index) {
					var delay = 400 * index; // for staggering the fade in/out
					var $this = $(this);
					var $searchField = $this.find('.jsBannerSearchField');

					var $responses = [];
					$this.find('.jsBannerSearchCheckbox').each(function() {
						$responses.push($(this).next('span').text());
					});

					// if a response is selected or the dropdown is open, stop the animation
					if ($('.banner-search__field--active').length || $('.banner-search__trigger--active').length || $('.jsBannerSearchCheckbox:checked').length) {
						$searchField.stop(true).css('opacity', '1');

						// change placeholder text of non-responded-to fields
						if (!$this.find('input:checked').length) {
							$searchField.fadeOut(200, function() {
								$searchField.text('...').fadeIn(200);
							});
						}
					} else {
						$searchField.text($responses[0]);

						setTimeout(function() {
							(function changeText(i) {
								$searchField.text($responses[i]).fadeIn(400).delay(2500).fadeOut(400, function() {
									changeText((i + 1) % $responses.length);
								});
							})(0);
						}, delay);
					}
				});
			};

			animatePlaceholderResponses();

			// open dropdown
			$('.jsBannerSearchDropdownTrigger').click(function() {
				$(this).toggleClass('banner-search__trigger--active');

				var $dropdown = $(this).next('.jsBannerSearchDropdown');
				var $dropdownInner = $dropdown.children('.jsBannerSearchDropdownInner');

				if (!$(this).next('.jsBannerSearchDropdown').is(':visible')) {
					openDropdown($dropdown, $dropdownInner);
				} else {
					closeDropdown($dropdown, $dropdownInner);
				}

				animatePlaceholderResponses();
			});

			// add selection to response field on click - rak
			$('.jsBannerSearchCheckbox').click(function() {
				displaySelectedResponses($(this));

				// show the next dropdown list
				showNextDropdownList($(this));
				if ($(this).hasClass('jsPopulateFacets')) {
					toggleSubmitEnabledness(valuesArray);
				}
				// enable or disable next dropdown
				var $nextDropdown = $(this).parents('.jsBannerSearchRow').next('.jsBannerSearchRow').find('.jsBannerSearchWrapper');
				if ($(this).is(':checked')) {
					enableDropdown($nextDropdown);
				} else {
					disableDropdown($nextDropdown);
				}

				// get selected responses for url generation
				getSelectedResponses();

				// close dropdown
				var $activeDropdown = $('.jsBannerSearchDropdown:visible');
				var $activeDropdownInner = $('.jsBannerSearchDropdown:visible').children('.jsBannerSearchDropdownInner');
				closeDropdown($activeDropdown, $activeDropdownInner);
			});

			// add selection to response field on click - mvp
			$('.jsBannerSearchCheckboxMvp').click(function() {
				displaySelectedResponses($(this));
				toggleMvpSubmitEnabledness(valuesArray);

				// show the next dropdown list
				showNextDropdownList($(this));

				// enable or disable next dropdown
				var $nextDropdown = $(this).parents('.jsBannerSearchRow').next('.jsBannerSearchRow').find('.jsBannerSearchWrapper');
				if ($(this).is(':checked')) {
					enableDropdown($nextDropdown);
				} else {
					disableDropdown($nextDropdown);
				}

				// get selected responses for url generation
				getSelectedResponses();

				// close dropdown
				var $activeDropdown = $('.jsBannerSearchDropdown:visible');
				var $activeDropdownInner = $('.jsBannerSearchDropdown:visible').children('.jsBannerSearchDropdownInner');
				closeDropdown($activeDropdown, $activeDropdownInner);
			});

			// add selection to response field on page load (if selection were already made after postback)
			if ($('.jsBannerSearchCheckbox:checked').length) {
				$('.jsBannerSearchCheckbox:checked').each(function() {
					displaySelectedResponses($(this));
					toggleSubmitEnabledness(valuesArray);
					toggleMvpSubmitEnabledness(valuesArray);

					// block or flex depending if two/single column
					if ($(this).parents().hasClass('banner-search__list--two-col')) {
						$(this).parents('.jsBannerSearchList').css('display', 'flex');
					} else {
						$(this).parents('.jsBannerSearchList').css('display', 'block');
					}

					// enable next dropdown
					var $nextDropdown = $(this).parents('.jsBannerSearchRow').next('.jsBannerSearchRow').find('.jsBannerSearchWrapper');
					enableDropdown($nextDropdown);
				});
			}

			// close dropdown on esc
			$(document).on('keyup', $.throttle(250, function(e) {
					if (e.keyCode === 27) {
						var $activeDropdown = $('.jsBannerSearchDropdown:visible');
						var $activeDropdownInner = $('.jsBannerSearchDropdown:visible').children('.jsBannerSearchDropdownInner');
						closeDropdown($activeDropdown, $activeDropdownInner);
					}
				})
			);

			// close dropdown when clicked outside of trigger
			var flag = false;
			$(document).bind('mouseup touchend', function(e) {
				// prevent from firing twice on devices that accept mouseup and touchend
				if (!flag) {
					flag = true;
					setTimeout(function() {
						flag = false;
					}, 100);
					// check if there's an open dropdown
					if ($('.jsBannerSearchDropdown').is(':visible')) {
						var $container = $('.banner-search__trigger--active').parent();
						// if the target of the click isn't the container or its descendent...
						if (!$container.is(e.target) && $container.has(e.target).length === 0) {
							var $activeDropdown = $('.jsBannerSearchDropdown:visible');
							var $activeDropdownInner = $('.jsBannerSearchDropdown:visible').children('.jsBannerSearchDropdownInner');
							closeDropdown($activeDropdown, $activeDropdownInner);
						}
					}
				}
			});

			// clear facets when changing dropdown
			$('.jsBannerSearchCheckbox').on('change', function() {
				if ($(this).is(':checked')) {
					clearFilters();
				}
			});

			// populate facets in advanced search after selecting final dropdown - rak
			$('.jsPopulateFacets').on('change', function() {
				if ($(this).is(':checked')) {
					var category = $(this).data('category');
					var collection = $(this).data('collection');
					clearAppliedFilters();
					setCategory(category);
					// populateFacet(collection);
				}
			});

			// populate metatag facets in advanced search after selecting final dropdown - mvp
			$('.jsPopulateMetatagFacets').on('change', function() {
				if ($(this).is(':checked')) {
					var metacontainerfolder = $(this).data('metacontainer');
					clearAppliedFilters();
					setContainerFolder(metacontainerfolder);
					// populateMetatagFacet(metacontainerfolder);
				}
			});

		}
	})();
});
