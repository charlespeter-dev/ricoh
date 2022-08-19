    jQuery(document).ready(function ($) {
        var languageselector = function () {
           $('div').mouseup(function(e) 
			{
				var container = $(".language-selector-dropdown .selectric-wrapper");

				// if the target of the click isn't the container nor a descendant of the container
				if (!container.is(e.target) && container.has(e.target).length === 0) 
				{
					container.removeClass("selectric-open");
				}
				else{
					container.addClass("selectric-open");
				}
			});

        };
        if ($('.jsLanguageSelector').length) {
            languageselector();
        }

    });