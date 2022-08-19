jQuery(document).ready(function($) {

	var advancedOptions = function() {
		// opens up the main wrapper
		$('.jsAdvancedOptionsTrigger').on('click', function(e) {
			e.preventDefault();
			$(this).find('.advanced-options__expander-icon').toggleClass('advanced-options__expander-icon--active ricon-plus ricon-minus');
			$(this).next().stop().slideToggle(200);
		});

		// close the advanced options into an accordion on mobile to show or hide the checkboxes group
		$('.jsAdvancedOptionsFilterTitle').on('click', function() {
			if ($('body').width() < 768) {
				$(this).next().stop().slideToggle(200);
				$(this).find('.advanced-options__icon').toggleClass('advanced-options__icon--active');
			}
		});
	};

	var advancedOptionsMessage = function() {
		if ($('#advancedOptionsContainer').has('.advanced-options__group').length) {
			$('.advanced-options .jsAdvancedOptionsTrigger').removeClass('hidden');
			$('.advanced-options .advanced-options__message').hide();
			$('.advanced-options .advanced-options__row .btn').removeClass('hidden');
		} else {
			$('.advanced-options .jsAdvancedOptionsTrigger').addClass('hidden');
			$('.advanced-options .advanced-options__message').show();
			$('.advanced-options .advanced-options__row .btn').addClass('hidden');
		}
	};

	if ($('.advanced-options').length) {
		advancedOptions();
		advancedOptionsMessage();
	}

});
