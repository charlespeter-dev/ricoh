jQuery(document).ready(function($) {

	var accordionIcon = function() {
		// open accordion-icon items that have the active class on them
		$('.accordion-icon__item--active').each(function() {
			$(this).find('.jsAccordionIconContent').css('display','block');
		});

		// default functionality
		$('.jsAccordionIcon').each(function() {
			var $allItems = $(this).find('.jsAccordionIconItem');
			var $allTriggers = $(this).find('.jsAccordionIconTrigger');
			var $allContent = $(this).find('.jsAccordionIconContent');
			var $allIcons = $(this).find('.jsAccordionIconIconElement');
			var $allImgs = $(this).find('.jsAccordionIconImg');
			var $btnExpand = $(this).find('.jsAccordionIconExpand');
			var $btnCollapse = $(this).find('.jsAccordionIconCollapse');

			// opening/closing accordion items
			$allTriggers.on('click', function(e) {
				e.preventDefault();
				var $thisItem = $(this).parents('.jsAccordionIconItem');
				var $thisContent = $thisItem.find('.jsAccordionIconContent');
				var $thisIcon = $thisItem.find('.jsAccordionIconIconElement');
				var $thisImg = $(this).find('.jsAccordionIconImg');
				if ($thisItem.hasClass('accordion-icon__item--active')) {
					$thisItem.removeClass('accordion-icon__item--active');
					$thisContent.slideUp(200);
					$thisIcon.addClass('ricon-plus').removeClass('ricon-minus');
					$thisImg.removeClass('accordion-icon__img--active');
				} else if ($allItems.hasClass('accordion-icon__item--active')) {
					$allItems.removeClass('accordion-icon__item--active');
					$allContent.slideUp(200);
					$thisItem.addClass('accordion-icon__item--active');
					$thisContent.stop(true).slideDown(200);
					$allIcons.addClass('ricon-plus').removeClass('ricon-minus');
					$thisIcon.addClass('ricon-minus').removeClass('ricon-plus');
					$allImgs.removeClass('accordion-icon__img--active');
					$thisImg.addClass('accordion-icon__img--active');
				} else {
					$thisItem.addClass('accordion-icon__item--active');
					$thisContent.stop(true).slideDown(200);
					$thisIcon.addClass('ricon-minus').removeClass('ricon-plus');
					$thisImg.addClass('accordion-icon__img--active');
				}
			});

			// expand all button
			$btnExpand.on('click', function(e) {
				e.preventDefault();
				$allItems.addClass('accordion-icon__item--active');
				$allIcons.removeClass('ricon-plus').addClass('ricon-minus');
				$allContent.slideDown();
			});

			// collapse all button
			$btnCollapse.on('click', function(e) {
				e.preventDefault();
				$allItems.removeClass('accordion-icon__item--active');
				$allIcons.removeClass('ricon-minus').addClass('ricon-plus');
				$allContent.slideUp();
			});
		});
	};

	if ($('.jsAccordionIcon').length) {
		accordionIcon();
	}

});
