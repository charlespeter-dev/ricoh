// local forage config
jQuery(document).ready(function($) {

	// when landing on product listings, add them to localstorage
	if ($('.jsProductListing').length) {
		localforage.ready(function() {
			$('.jsProductListing > .jsProductListingItem[data-item-id]').each(function(index) {
				var $productId = $(this).data('item-id').toString();
				var $compData = $(this).data();
				// set component state if persistent between pageload
				setCompState($productId, function() {
					var $compState = [];
					var $compKey;
					var $compValues;
					$compState = [{
						checked: 'false',
						timestamp: Math.floor(Date.now() / 1000),
						type: 'product',
						description: '',
						quote: 'false',
						quoteQuantity: '1'
					}];
					if ($compData) {
						$.each($compData, function(key, value) {
							$compState[0][key] = value.toString();
						});
					}
					$compKey = $compState[0].itemId;
					$compValues = $compState[0];
					storeKeyValue({ key: $compKey, value: $compValues });
				});
			});
			// setTimeout(function() {
			// 	prodCompareCheck();
			// }, 10);
		});
	}

	// if on prod compare page ensure checked is true
	// var prodCompareCheck = function() {
	// 	$('.jsProductCompareItem').each(function(index) {
	// 		var $productListingParentId = $(this).data('item-id').toString();
	// 		getValue({ key: $productListingParentId, value: 'checked' }, function(value) {
	// 			value.checked = 'true';
	// 			storeKeyValue({ key: $productListingParentId, value: value });
	// 		});
	// 	});
	// };

	// populate products toolbar from local storage
	localforage.ready(function() {
		populateProductsFromLocalStorage();
	});

	// add products from local storage to toolbar
	var populateProductsFromLocalStorage = function() {
		var listItem = [];
		localforage.iterate(function(value, key, iterationNumber) {
			if (value.checked == 'true') {
				listItem.push(value);
			};
			if(value.checked == 'false' && value.compareOrder !== undefined){
				delete value.compareOrder;
				storeKeyValue({ key: value.itemId, value: value });
			}
		}).then(function(){
			
			listItem.sort(function(a,b){
				return parseFloat(a.compareOrder) - parseFloat(b.compareOrder);
			});
			listItem.forEach(function(value,index){
				if ($('.jsProductListing').length && value.checked == 'true' && $('.jsProductListingItem[data-item-id=' + value.itemId + ']').length) {
					removeFromCompare($('.jsProductListingItem[data-item-id=' + value.itemId + ']').find('.jsAddToCompareTrigger'));
					addToCompare($('.jsProductListingItem[data-item-id=' + value.itemId + ']'));
					// $('.jsProductListingItem[data-item-id=' + value.itemId + '] .jsAddToCompareTrigger input').trigger('click');
					$('.jsProductListingItem[data-item-id=' + value.itemId + '] .jsAddToCompareTrigger input').prop('checked', true);
				} else if (value.checked == 'true') {
					// adds product to toolbar but not with click method if doesnt exist on the dom or different page / pagination of listing
					$('.jsCompareListing').append(
						'<li class="compare-toolbar__item" data-item-id="' + value.itemId + '" data-item-category="' + value.itemCategory + '">' +
							'<a href="' + value.href + '" title="' + value.itemName + ' - ' + value.itemCategory + '" class="compare-toolbar__label">' +
								value.itemName +
								'<span>' + value.itemCategory  + '</span>' +
							'</a>' +
							'<button class="compare-toolbar__remove-btn jsCompareDelete" title="' + $.i18n("remove from comparison") + '"><i class="ricon ricon-cross"></i></button>' +
						'</li>'
					);
				};
			});
			// check if need to display compare toolbar
			toggleCompareToolbar();
			// hide or show message limit items in the compare toolbar
			toggleDisabledMessage();
			// enable or disable button if only one product
			toggleButtonEnabledness();
		}).catch(function(err) {
			
		});
	};

	// generate compare button based on items in localstorage
	var goToComparisonPage = function($trigger) {
		var listItem = [];
		var comparisonShortlist = [];
		if ($trigger.hasClass('jsProductCompareTrigger')) {
			localforage.iterate(function(value, key, iterationNumber) {
				if (value.checked == 'true') {
					//comparisonShortlist += value.itemId + ',';
					listItem.push(value);
				}
			}).then(function() {
				listItem.sort(function(a,b){
					return parseFloat(a.compareOrder) - parseFloat(b.compareOrder)
				});
				listItem.forEach(function(value){
					comparisonShortlist += value.itemId + ',';
				});
				var url = window.location.origin;
				var urlPath = $('.jsProductCompareTrigger').data('base-url');
				var urlProducts = comparisonShortlist.slice(0, -1);
				url = url + urlPath + '?edpCodes=' + urlProducts;
				window.location.href = url;
			}).catch(function(err) {
				// console.log(err);
			});
		}
	};

	// show / hide toolbar
	var toggleCompareToolbar = function() {
		// hidden by default - and only show when something has been added to compare shortlist
		var $compareToolbar = $('.jsCompareToolbar');
		var $compareToolbarCat;
		// if there is not 5 items make sure every single disable message is off
		if ($('.jsCompareListing li').length == 0) {
			$compareToolbar.fadeOut().attr('data-item-category', '');
			$('.jsProductListing > .jsProductListingItem .jsAddToCompareTrigger').each(function() {
				$(this).removeClass('add-to-compare--disabled').next('.add-to-compare__categories').hide();
			});
		} else {
			// data-item category is undefined
			$compareToolbarCat = $($compareToolbar).find('.jsCompareListing li:first-of-type').data('item-category');
			$compareToolbar.fadeIn().attr('data-item-category', $compareToolbarCat);
			$('.jsProductListing > .jsProductListingItem:not([data-item-category="' + $compareToolbarCat + '"]) .jsAddToCompareTrigger').each(function() {
				$(this).addClass('add-to-compare--disabled').next('.add-to-compare__categories').show();
			});
		}
	};

	// clear toolbar on category sidebar click
	$('.jsSidenavItemContent .category-listing__link-title').on('click', function() {
		if ($('.jsCompareListing li').length > 0) {
			$('.jsCompareListing .jsCompareDelete').click();
		}
	});

	// clear localstorage everytime category is changed, clears the whole toolbar and local storage
	$('.jsSidenavItemContent .subcategory-listing__item a, .jsSidenavItemContent .category-listing__item a').on('click', function() {
		if ($('.jsCompareListing li').length > 0) {
			localforage.iterate(function(value, key, iterationNumber) {
				if (value.checked == 'true') {			
					getValue({ key: value.itemId, value: 'checked' }, function(value) {
						value.checked = 'false';
						storeKeyValue({ key: value.itemId, value: value });
					});
				}
			});
		}
	});

	// show / hide disabled message on products when 5 items are already being compared
	var toggleDisabledMessage = function() {
		var $productItem = $('.jsProductListingItem:not(.jsIsCompared)');
		// if there are not 5 items make sure every single disable message is off
		if ($('.jsCompareListing li').length < 5) {
			$productItem.removeClass('product-listing__item--max product-solution-listing__item--max');
			$productItem.find('.jsAddToCompareTrigger').removeClass('add-to-compare--disabled');
			toggleCompareToolbar();
		} else {
			// if there are 5 items in the compare toolbar, we add an error message so no items can be added to the bar
			// unless space is made and items are cleared
			$productItem.addClass('product-listing__item--max product-solution-listing__item--max');
			$productItem.find('.jsAddToCompareTrigger').addClass('add-to-compare--disabled');
			toggleCompareToolbar();
		}
	};

	// disable/enable compare button based on # of items
	var toggleButtonEnabledness = function() {
		// check if products are in the same category
		var categoryKeys = [];
		$('.jsCompareListing li').each(function(index) {
			if ($(this).attr('data-item-category') != null) {
				categoryKeys.push($(this).attr('data-item-category'));
			}
		});
		var isSameCategory = function() {
			for (var i = 1; i < categoryKeys.length; i++) {
				if (categoryKeys[i] !== categoryKeys[0]) {
					return false;
				}
			}
			return true;
		};
		// disable or enable
		var $compareButton = $('.jsProductCompareTrigger');
		var $tooltipCategory = $('.jsCompareTooltipTextCategory');
		var $tooltipQuantity = $('.jsCompareTooltipTextQuantity');
		if ($('.jsCompareListing li').length < 2 || isSameCategory() === false) {
			$compareButton.addClass('btn--disabled');
			// show the correct tooltip text
			if (isSameCategory() === false) {
				$tooltipCategory.show();
				$tooltipQuantity.hide();
			} else {
				$tooltipCategory.hide();
				$tooltipQuantity.show();
			}
		} else {
			$compareButton.removeClass('btn--disabled');
			$tooltipCategory.hide();
			$tooltipQuantity.hide();
		}
	};

	var addToCompare = function($product) {
		var $productId = $product.data('item-id').toString();
		var $productName = $product.data('item-name');
		var $productCategory = $product.data('item-category');
		var $productComparedList = $('.jsCompareListing');
		var $href = $product.data('href');
		// adding class to the item that has been added to the list
		if ($product.hasClass('jsIsCompared')) {
			// modify storage state
			getValue({ key: $productId, value: 'checked' }, function(value) {
				value.checked = 'false';
				delete value.compareOrder;
				storeKeyValue({ key: $productId, value: value });
			});
			// remove item from compared list
			$productComparedList.find('[data-item-id=' + $productId + ']').remove();
			$product.removeClass('jsIsCompared');

			// check if we need to add the disabled messages because the compare is full
			toggleDisabledMessage();
		} else {
			// adding product to the compared list
			// if more than 5 items already show error message
			if ($productComparedList.find('li').length <= 4) {
				// modify storage state
				var nextCompareOrder = 0;
				localforage.iterate(function(value, key, iterationNumber) {
					if (value.checked == 'true') {
						nextCompareOrder = (nextCompareOrder < value.compareOrder) ? value.compareOrder : nextCompareOrder
					}
				}).then(function(){
					getValue({ key: $productId, value: 'checked' }, function(value) {
						value.checked = 'true';
						if(value.compareOrder === undefined){			
							value.compareOrder = nextCompareOrder+1;
						};
						storeKeyValue({ key: $productId, value: value });
					});
				});
				// add product
				$product.addClass('jsIsCompared');
				$productComparedList.append(
					'<li class="compare-toolbar__item compare-toolbar__item--real" data-item-id="' + $productId + '" data-item-category="' + $productCategory + '">' +
						'<a href="' + $href + '" title="' + $productName + ' - ' + $productCategory + '" class="compare-toolbar__label">' +
							$productName +
							'<span>' + $productCategory + '</span>' +
						'</a>' +
						'<button class="compare-toolbar__remove-btn jsCompareDelete" title="' + $.i18n("remove from comparison") + '"><i class="ricon ricon-cross"></i></button>' +
					'</li>'
				);
				var $lastItem = $productComparedList.find('.compare-toolbar__item--real:last-child');
				TweenMax.to($lastItem, 0.4, {
					top: 0,
					opacity: 1
				});

				toggleDisabledMessage();
			} else {
				// disable any clicking
				$product.find('.jsAddToCompareTrigger').click(function(event) {
					return false;
				});
				// check if we need to add the disabled messages because the compare is full
				toggleDisabledMessage();
			}
		}
		// enable or disable button if only one product
		toggleButtonEnabledness();
	};

	// animate the product offscreen (mobile only)
	var animateAddingItem = function($product) {
		$('body').append('<div class="compare-toolbar__floater jsCompareFloater">' + $product.get(0).outerHTML + '</div>');

		var $floater = $('.jsCompareFloater');
		var startingPointX = $product.offset().left;
		var startingPointY = $product.offset().top;
		var endingPointY = $(window).scrollTop() - $product.outerHeight();

		$floater.css({
			width: $product.outerWidth(),
			left: startingPointX,
			top: startingPointY
		});

		// show
		TweenMax.to($floater, 0.8, {
			display: 'block',
			opacity: 1
		});

		// move
		TweenMax.to($floater, 0.8, {
			delay: 0.3,
			ease: Power1.easeIn,
			scale: 0.5,
			top: endingPointY
		});

		// fade out & remove
		TweenMax.to($floater, 0.2, {
			delay: 0.9,
			opacity: 0,
			onComplete: function() { $floater.remove(); }
		});
	};

	// remove from comparison
	var removeFromCompare = function($trigger) {
		var $productListingParentId;
		if ($trigger.hasClass('jsCompareDelete')) { // compare toolbar
			// remove elements from the products compared listing
			$productListingParentId = $trigger.parent().data('item-id').toString();
			var $productListing = $('.jsProductListing');			
			
			// modify storage state
			getValue({ key: $productListingParentId, value: 'checked' }, function(value) {
				value.checked = 'false';
				delete value.compareOrder;
				storeKeyValue({ key: $productListingParentId, value: value });
			});
			// deselect the item from the main listing
			var $product = $productListing.find('[data-item-id=' + $productListingParentId + ']');
			$product.find('input').prop('checked', false);
			$product.removeClass('jsIsCompared');
			// remove the item from the compared list
			$trigger.parent().remove();

			// check if we need to add the disabled messages because the compare is full
			toggleDisabledMessage();
			// enable or disable button if only one product
			toggleButtonEnabledness();

			return false;

		} else if ($trigger.hasClass('jsCompareDeleteOnCompare')) { // compare page
			// different function because backend will reload the page so original functionalities are not necessary, see above
			// remove elements from the products compared listing from the compared page
			$productListingParentId = $trigger.parents('.jsProductListingItem').data('item-id').toString();
			
			// modify storage state
			getValue({ key: $productListingParentId, value: 'checked' }, function(value) {
				value.checked = 'false';
				delete value.compareOrder;
				storeKeyValue({ key: $productListingParentId, value: value });
			});

			return false;
		}
	};

	var checkCompareList = function(urlPath) {
		var comparisonShortlist = [];
		localforage.iterate(function(value, key, iterationNumber) {
			if (value.checked == 'true') {
				comparisonShortlist += value.itemId + ',';
			}
		}).then(function() {
			var urlProducts = comparisonShortlist.slice(0, -1);
			var url = urlPath + '?edpCodes=' + urlProducts;
			window.location.href = url;
		}).catch(function(err) {
			// console.log(err);
		});
	};

	// add product on click
	$('.jsAddToCompareTrigger').on('mouseup', function(e) {
		var $product = $(this).parents('.jsProductListingItem');
		if ($(this).hasClass('add-to-compare--disabled')) {
			$(this).find('input').prop('disabled', true);
		} else {
			$(this).find('input').prop('disabled', false);
			addToCompare($product);
		}
	});

	// animate the product offscreen
	$('.jsAddToCompareTrigger input').on('click', function() {
		if ($(window).outerWidth() < 768 && $(this).is(':checked')) {
			var $product = $(this).parents('.jsProductListingItem');
			animateAddingItem($product);
		}
	});

	// remove products when clicking button on compare toolbar
	$(document).on('click', '.jsCompareDelete', function() {
		removeFromCompare($(this));
	});

	// go through to comparison page when ready
	$('.jsProductCompareTrigger').on('click', function(e) {
		e.preventDefault();
		goToComparisonPage($(this));
	});

	// remove products when clicking button on product comparison page
	$('.jsCompareDeleteOnCompare').on('click', function(e) {
		e.preventDefault();
		var id = $(this).parent().parent('li').data('item-id').toString();
		var urlPath = $(this).data('base-url');
		deleteKey(id);
		setTimeout(function() {
			checkCompareList(urlPath);
		}, 10);
	});

	(function compareToolbarScrollPosition() {
		var $compareToolbar = $('.jsCompareToolbar');

		var checkCompareToolbarScrollPosition = function() {
			var $footerHeight = $('.footer-copyright-container').outerHeight();
			if ($(window).scrollTop() + $(window).height() > $(document).height() - $footerHeight - 100) {
				$compareToolbar.addClass('compare-toolbar--off-canvas');
			} else {
				$compareToolbar.removeClass('compare-toolbar--off-canvas');
			}
		};

		$(window).on('resize', $.throttle(250, function() {
			if ($(window).width() > 767) {
				$(window).on('scroll', $.throttle(250, function() {
					checkCompareToolbarScrollPosition();
				}));
			}
		}));
	}());

});
