jQuery(document).ready(function($) {

	var accordion = function() {
		// open accordion items that have the active class on them
		$('.accordion__item--active').each(function() {
			$(this).find('.jsAccordionContent').css('display','block');
		});

		// default functionality
		$('.jsAccordion').each(function() {
			var $allItems = $(this).find('.jsAccordionItem');
			var $allTriggers = $(this).find('.jsAccordionTrigger');
			var $allContent = $(this).find('.jsAccordionContent');
			var $allIcons = $(this).find('.jsAccordionIconElement');
			$allTriggers.on('click', function(e) {
				e.preventDefault();
				var $thisItem = $(this).parents('.jsAccordionItem');
				var $thisContent = $thisItem.find('.jsAccordionContent');
				var $thisIcon = $thisItem.find('.jsAccordionIconElement');
				if ($thisItem.hasClass('accordion__item--active')) {
					$thisItem.removeClass('accordion__item--active');
					$thisContent.slideUp(200);
					$thisIcon.addClass('ricon-plus').removeClass('ricon-minus');
				} else if ($allItems.hasClass('accordion__item--active')) {
					$allItems.removeClass('accordion__item--active');
					$allContent.slideUp(200);
					$thisItem.addClass('accordion__item--active');
					$thisContent.stop(true).slideDown(200);
					$allIcons.addClass('ricon-plus').removeClass('ricon-minus');
					$thisIcon.addClass('ricon-minus').removeClass('ricon-plus');
				} else {
					$thisItem.addClass('accordion__item--active');
					$thisContent.stop(true).slideDown(200);
					$thisIcon.addClass('ricon-minus').removeClass('ricon-plus');
				}
			});
		});

		// two col div wrapping
		$('.jsAccordionTwoCol').each(function() {
			var $itemGroup1 = $(this).find('.jsAccordionItem:nth-of-type(odd)');
			var $itemGroup2 = $(this).find('.jsAccordionItem:nth-of-type(even)');

			$itemGroup1.wrapAll('<div class="accordion__col--two-col">');
			$itemGroup2.wrapAll('<div class="accordion__col--two-col">');
		});
	};

	if ($('.jsAccordion').length || $('.jsAccordionTwoCol').length) {
		accordion();
	}

});
