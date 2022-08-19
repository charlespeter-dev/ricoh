jQuery(document).ready(function($) {

	var accordionToTab = function() {
		$('.jsAccordionToTab').each(function() {
			var $this = $(this);
			var $tabParent = $this.find('.accordion-to-tab__tabs-list-item');
			var $tabLinks = $this.find('.jsAccordionToTabTab');
			var $accordionLinks = $this.find('.jsAccordionToTabTrigger');
			var $items = $this.find('.jsAccordionToTabItem');
			var $imgs = $this.find('.jsAccordionToTabImg');

			var updateTabs = function(element) {
				$tabParent.removeClass('accordion-to-tab__tabs-list-item--active');
				$imgs.removeClass('accordion-to-tab__item--active');
				$tabLinks.removeClass('accordion-to-tab__tab--active');
				$tabLinks.filter('[rel^="' + element + '"]').addClass('accordion-to-tab__tab--active');
				$tabLinks.filter('[rel^="' + element + '"]').find('accordion-to-tab__img').addClass('accordion-to-tab__img--active');
				$tabLinks.filter('[rel^="' + element + '"]').parent('.accordion-to-tab__tabs-list-item').addClass('accordion-to-tab__tabs-list-item--active');
			};

			var updateAccordion = function(element) {
				$items.not('[rel^="' + element + '"]').removeClass('accordion-to-tab__item--active');
				$items.filter('[rel^="' + element + '"]').addClass('accordion-to-tab__item--active');
				if ($(window).width() < 768) {
					$items.not('[rel^="' + element + '"]').find('.jsAccordionToTabContent').slideUp(300);
					$items.not('[rel^="' + element + '"]').find('.jsAccordionToTabImg').removeClass('accordion-to-tab__img--active');
					$items.not('[rel^="' + element + '"]').find('.jsAccordionToTabIcon').addClass('ricon-plus').removeClass('ricon-minus');
					$items.filter('[rel^="' + element + '"]').find('.jsAccordionToTabContent').slideToggle(300);
					$items.filter('[rel^="' + element + '"]').find('.jsAccordionToTabImg').toggleClass('accordion-to-tab__img--active');
					$items.filter('[rel^="' + element + '"]').find('.jsAccordionToTabIcon').toggleClass('ricon-plus ricon-minus');
				}
			};

			// tabs
			$tabLinks.on('click', function(e) {
				e.preventDefault();
				var $clickedTab = $(this).attr('rel');
				updateTabs($clickedTab);
				updateAccordion($clickedTab);
			});

			// accordion
			$accordionLinks.unbind('click');
			$accordionLinks.on('click', function(e) {
				e.preventDefault();
				var $clickedAccordion = $(this).parent('.jsAccordionToTabItem').attr('rel');
				updateTabs($clickedAccordion);
				updateAccordion($clickedAccordion);
			});

		});
	};

	if ($('.jsAccordionToTab').length) {
		accordionToTab();
	}

});
