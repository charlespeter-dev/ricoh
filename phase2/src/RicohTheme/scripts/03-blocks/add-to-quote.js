jQuery(document).ready(function($) {

	var quoteCount = 0;
	var $headerCart = $('.jsHeaderCart');
	var $headerCartCount = $('.jsHeaderCartCount');
	var $quoteCartMessage = $('#quoteCartMessage');
	var $quoteCartHeader = $('#quoteCartHeader');
	var $quoteCartListing = $('#quoteCartListing');
	var $quoteCartFooter = $('#quoteCartFooter');
	var $jsProductQuote = $('.jsProductQuote');
	var $jsQuoteList = $('.jsQuoteList');
	var $jsProductCount = $('.jsProductCount');
	var $jsUpdateQty = $('.jsUpdateQty');
	var $updateQtySuccessMessage = $('.jsUpdateQtySuccessMessage');

	// ---------------------------------------------------------------------
	// global
	// ---------------------------------------------------------------------

	// count the amount of items in cart from localstorage, then update counts and generate cart
	var countItemsInLocalStorage = function(showUpdateMessage) {
		// console.log('countItemsInLocalStorage: START');
		quoteCount = 0;
		localforage.iterate(function(value, key, iterationNumber) {
			if (value.quote == 'true') {
				quoteCount++;
			}
		})
		.then(function() {
			// console.log('countItemsInLocalStorage: final quotecount = ' + quoteCount);
			updateItemCount();
			if ($quoteCartMessage.length) {
				showHideEmptyCartMessage();
			}
			if ($jsQuoteList.length && quoteCount > 0) {
				generateQuoteList();
			}
			if (showUpdateMessage) {
				showUpdateCartSuccessMessage();
			}
			if ($jsProductQuote.length) {
				showRightContainer();
			}
			// console.log('countItemsInLocalStorage: END');
		});
	};

	// update counters when items get add/removed from cart
	var updateItemCount = function() {
		$headerCartCount.html(quoteCount);
		// update count on cart page
		if ($jsProductCount.length) {
			if (quoteCount == 1) {
				$jsProductCount.text(quoteCount + ' ' + $.i18n("item"));
			} else {
				$jsProductCount.text(quoteCount + ' ' + $.i18n("items"));
			}
		}
		// update count in header
		if ($headerCart.length) {
			if (quoteCount > 0) {
				$headerCart.removeClass('hidden');
				$headerCartCount.html(quoteCount);
			} else {
				$headerCart.addClass('hidden');
			}
		}
	};

	// ---------------------------------------------------------------------
	// product detail + product comparison pages
	// ---------------------------------------------------------------------

	// when landing on the page, add the product(s) to localstorage
	if ($jsProductQuote.length) {
		localforage.ready(function() {
			$('.jsProductQuote').each(function(index) {
				var $this = $(this);
				var $productId = $this.data('item-id').toString();
				var $compData = $this.data();
				var isChecked = false;
				if ($this.hasClass('jsProductCompareItem')) {
					// different settings on the product comparison page
					isChecked = true;
				}
				setCompState($productId, function() {
					var $compState = [];
					var $compKey;
					var $compValues;
					$compState = [
						{
							checked: isChecked,
							timestamp: Math.floor(Date.now() / 1000),
							type: 'product',
							quote: 'false',
							quoteQuantity: '1'
						}
					];
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
		});
	}

	// show or hide the container to add to quote, show different container when already added
	var showRightContainer = function() {

		$('.jsProductQuote').each(function(index) {
			var $this = $(this);
			var $productId = $this.data('item-id').toString();
			if (quoteCount > 4) {
				switchContainer($this, false, true);
			} else if (quoteCount > 0 && quoteCount <= 4) {
				localforage.iterate(function(value, key, iterationNumber) {
					if (value.itemId == $productId && value.quote == 'true') {
						switchContainer($this, true, false);
					} else if (value.itemId == $productId) {
						switchContainer($this, false, false);
					}
				});
			} else {
				switchContainer($this, false, false);
			}
		});

	};

	// switch the container around on the product detail page
	var switchContainer = function($parentContainer, inCart, maxReached) {
		if (maxReached) {
			$parentContainer.find('.jsProductQuoteMaxReached').removeClass('hidden');
			$parentContainer.find('.jsProductQuoteInitial').addClass('hidden');
			$parentContainer.find('.jsProductQuoteSuccess').addClass('hidden');
		} else if (inCart) {
			$parentContainer.find('.jsProductQuoteMaxReached').addClass('hidden');
			$parentContainer.find('.jsProductQuoteInitial').addClass('hidden');
			$parentContainer.find('.jsProductQuoteSuccess').removeClass('hidden');
		} else {
			$parentContainer.find('.jsProductQuoteMaxReached').addClass('hidden');
			$parentContainer.find('.jsProductQuoteInitial').removeClass('hidden');
			$parentContainer.find('.jsProductQuoteSuccess').addClass('hidden');
		}
	};

	// add to quote updating the quote value in the storage and the quantity value
	var addToQuote = function(productSku, productQty) {
		var deferred = new $.Deferred();
		// set quote to true
		getValue({ key: productSku, value: 'quote' }, function(value) {
			value.quote = 'true';
			storeKeyValue({ key: productSku, value: value });
		});
		// get and set quantity
		getKey(productSku, function() {
			value.quoteQuantity = productQty;
			storeKeyValue({ key: productSku, value: value });
		});
		setTimeout(function() {
			deferred.resolve();
		}, 200);
		return deferred.promise();
	};

	// bind enter key on quantity field
	var bindEnterKey = function() {
		$('.jsQuoteQuantity').on('keypress', function(e) {
			var $relatedBtn = $(this).parents('.jsProductQuote').find('.jsAddToQuote');
			// enter key
			if (e.which === 13) {
				$relatedBtn.trigger('click');
			}
		});
	};

	// add to quote quantity field
	if ($('.jsQuoteQuantity').length) {
		bindEnterKey();
	}

	// add to quote button
	$('.jsAddToQuote').each(function() {
		$(this).on('click', function(e) {
			var $item = $(this).parents('.jsProductQuote');
			var itemSku = $item.data('item-id').toString();
			var itemQty = 1;
			var itemDesc;
			if ($(this).hasClass('product-comparison__quote-btn')) {
				// product comparison page
				addToQuote(itemSku, itemQty).done(function() {
					countItemsInLocalStorage();
				});
			} else {
				// product detail page
				itemQty = $item.find('.jsQuoteQuantity').val();
				addToQuote(itemSku, itemQty, null).done(function() {
					countItemsInLocalStorage();
				});
			}
		});
	});

	// ---------------------------------------------------------------------
	// cart page
	// ---------------------------------------------------------------------

	// generates quote listing from local storage
	var generateQuoteList = function() {
		$jsQuoteList.empty();
		localforage.iterate(function(value, key, iterationNumber) {
			if (value.quote == 'true') {
				$jsQuoteList.append(
					'<li data-product-id="' + value.itemId + '" class="product-quote__listing-item jsQuoteListItem">' +
						'<div class="container">' +
							'<div class="product-quote__wrapper">' +
								'<div class="product-quote__left">' +
									'<a class="product-quote__link" href="' + value.href + '">' +
										'<img class="product-quote__thumb" src="' + value.itemImg + '" />' +
									'</a>' +
									'<div class="product-quote__info">' +
										'<h3 class="product-quote__product-name">' + value.itemName + '</h3>' +
										'<p>' + value.description + '</p>' +
										'<button type="button" class="product-quote__remove jsRemoveItemFromQuote">' + $.i18n("remove") + '</button>' +
									'</div>' +
								'</div>' +
								'<div class="product-quote__right">' +
									'<div class="form form--default">' +
										'<div class="form-group">' +
											'<label class="control-label" for="qty' + value.itemId + '">' + $.i18n("quantity") + '</label>' +
											'<input id="qty' + value.itemId + '" type="number" min="1" max="999" class="form-control jsProductQuantity" placeholder="1" value="' + value.quoteQuantity + '">' +
										'</div>' +
									'</div>' +
								'</div>' +
							'</div>' +
						'</div>' +
					'</li>'
				);
			}
		}).then(function() {
			// bind enter key after markup has been generated
			$('.jsProductQuantity').on('keypress', function(e) {
				// enter key
				if (e.which === 13) {
					$jsUpdateQty.trigger('click');
				}
			});
		});
	};

	// resetting quote value to false for a specific item
	var removeItemFromQuote = function(productId) {
		var deferred = new $.Deferred();
		// console.log('START removeItemFromQuote');
		// check current value state
		getValue({ key: productId, value: 'quote' }, function(value) {
			value.quote = 'false';
			storeKeyValue({ key: productId, value: value });
		});
		getKey(productId, function() {
			value.quoteQuantity = '1';
			storeKeyValue({ key: productId, value: value });
		});
		setTimeout(function() {
			deferred.resolve();
		}, 200);
		return deferred.promise();
		// console.log('END removeItemFromQuote');
	};

	// clean out the cart after submitting the form
	var clearCart = function() {
		localforage.iterate(function(value, key, iterationNumber) {
			if (value.quote == 'true') {
				value.quote = 'false';
				storeKeyValue({ key: key, value: value });
				// console.log('clearCart: removing this item from cart - ' + key);
			}
		});
	};

	// show or hide empty cart message depending on the amount of items in local storage
	var showHideEmptyCartMessage = function() {
		if (quoteCount > 0) {
			// hide empty cart message
			$quoteCartMessage.addClass('hidden');
			// show page elements
			$quoteCartHeader.removeClass('hidden');
			$quoteCartListing.removeClass('hidden');
			$quoteCartFooter.removeClass('hidden');
		} else {
			// hide page elements
			$quoteCartHeader.addClass('hidden');
			$quoteCartListing.addClass('hidden');
			$quoteCartFooter.addClass('hidden');
			// show empty cart message
			var $emptyMessage = $quoteCartMessage.data('empty-message');
			$quoteCartMessage.removeClass('hidden');
			$quoteCartMessage.html(
				'<div class="component message message--info">' +
					'<div class="component-content">' +
						'<div class="message__content">' +
							'<div class="message__text">' +
								'<i class="message__icon--sm ricon ricon-warning" aria-hidden="true"></i> ' +
								$emptyMessage +
							'</div>' +
						'</div>' +
					'</div>' +
				'</div>' +
				'<div class="divider"></div>'
			);
		}
	};

	// display success message when 'update qty' button is pressed
	var showUpdateCartSuccessMessage = function() {
		$updateQtySuccessMessage.stop(true).fadeIn(500);
		setTimeout(function() {
			$updateQtySuccessMessage.fadeOut(500);
		}, 4200);
	};

	// populate data from local storage into a hidden field for form submission
	var generateDataForSubmission = function() {
		var quoteData = [];
		var result = [];
		var charLimit = 255;
		var textArea = $('.jsQuoteHiddenField');
		$('.jsQuoteHiddenField').val('');
		localforage.iterate(function(value, key, iterationNumber) {
			if (value.quote == 'true') {
				quoteData += value.itemId;
				quoteData += '|';
				quoteData += value.itemName;
				quoteData += '|';
				quoteData += value.description;
				quoteData += '|';
				quoteData += value.quoteQuantity;
				quoteData += '|||';
			}
		}).then(function() {
			result = quoteData.toString().split('|||');
			result.forEach(function(item, index) {
				if (item.length == 0) {
					// removing empty array items.
					result.pop(item);
				}
				if (item.length > charLimit) {
					// + 3 here to account for ellipsis in leftStr
					var extraChars = (item.length - charLimit + 3);
					var position = item.lastIndexOf('|');
					var leftStr = $.trim(item).substring(0, (position - extraChars)) + '...';
					var rightStr = $.trim(item).substring(position);
					truncItem = leftStr + rightStr;
					textArea.val(textArea.val() + truncItem + '\n');
				} else {
					textArea.val(textArea.val() + item + '\n');
				}
			});
		});
	};

	// update qty button
	$jsUpdateQty.on('click', function(e) {
		$('.jsQuoteListItem').each(function() {
			var $productId = $(this).data('product-id');
			var $productQty = $(this).find('.jsProductQuantity').val();
			getValue({ key: $productId, value: 'quoteQuantity' }, function(value) {
				value.quoteQuantity = $productQty;
				storeKeyValue({ key: $productId, value: value });
			});
		});
		countItemsInLocalStorage(true);
	});

	// remove from quote
	$('body').on('click', '.jsRemoveItemFromQuote', function(index) {
		removeItemFromQuote(
			$(this).parents('.jsQuoteListItem').data('product-id')
		).done(function() {
			countItemsInLocalStorage(false);
		});
		$(this).parents('.jsQuoteListItem').remove();
	});

	// submit form button
	$('.jsRequestQuote').on('click', function() {
		generateDataForSubmission();
		clearCart();
	});

	localforage.ready(function() {
		countItemsInLocalStorage(false);
	});

});
