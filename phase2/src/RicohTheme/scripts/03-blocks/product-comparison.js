jQuery(document).ready(function($) {

	var $productComparisonAccordion = $('.jsProductComparisonAccordion');
	var $productExpand = $('.jsProductExpand');
	var $productCollapse = $('.jsProductCollapse');
	var $productKey = $('.product-comparison__key');
	var $productRow = $('.product-comparison__row');
	var $productComparisonInner = $('.product-comparison__top-inner');
	var $productComparisonTop = $('.product-comparison__top-listing');
	var $productComparisonWrapper = $('.product-comparison__top-wrapper');

	var productComparison = function() {

		// opens up the main wrapper
		$productComparisonAccordion.on('click', function(e) {
			e.preventDefault();
			$(this).toggleClass('product-comparison__accordion--active');
			$(this).next().slideToggle();
		});

		// expanding all the accordions and their state
		$productExpand.on('click', function(e) {
			e.preventDefault();
			$productComparisonAccordion.addClass('product-comparison__accordion--active');
			$productComparisonAccordion.next().slideDown();
		});

		// collapsing all the accordions and their state
		$productCollapse.on('click', function(e) {
			e.preventDefault();
			$productComparisonAccordion.removeClass('product-comparison__accordion--active');
			$productComparisonAccordion.next().slideUp();
		});

		// searching for differences in arrays of results and highlighting them
		$productRow.each(function(index) {
			var comparisonKeys = [];
			$(this).find($productKey).each(function(index) {
				if ($(this).data('value')) {
					var str = $('<p>').append($('<textarea>').html($(this).data('value') ).text()).text().trim().replace(/ /g,'');
					comparisonKeys.push(str);
				}
				var testing = hasUniqueVal(comparisonKeys, comparisonKeys.length);
				if (testing === true) { $(this).parent().addClass('product-comparison--highlighted'); }
			});
		});

		// sticking the top container of product with images
		var controller = new ScrollMagic.Controller();

		// create a scene
		new ScrollMagic.Scene({
				triggerElement: '.product-comparison__top-wrapper',
				triggerHook: 'onLeave' // start this scene after scrolling for 160px
			})
			.setClassToggle('.product-comparison__top-wrapper', 'is-sticky') // add class toggle
			.setPin('.product-comparison__top-wrapper') // pins the element for the the scene's duration
			.addTo(controller); // assign the scene to the controller
		// hide remove button when only two products are in comparison
		var $itemsCompared = $('.jsProductListingItem');
		if ($itemsCompared.length == 2) {
			$('.jsCompareDeleteOnCompare').addClass('hidden');
		}

	};

	// fix for sticky bar at some resolutions preventing page scroll
	var setMainHeight = function() {
		var $mainReset = $('#page-main').outerHeight();
		$('#page-main').css('min-height', $mainReset);
	};

	if ($productComparisonAccordion.length) {
		productComparison();
		setMainHeight();
	}

});
