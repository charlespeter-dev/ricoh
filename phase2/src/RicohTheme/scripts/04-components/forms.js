// ---------------------------------------------------------------------
// | forms                                                             |
// ---------------------------------------------------------------------

jQuery(document).ready(function($) {

	var formInputPatterns = function() {
		$('.form form').each(function() {
			var $this = $(this);
			// email
			if ($this.find('.form-control[type="email"]').length) {
				$('.form-control[type="email"]', $this).each(function() {
					var $email = $(this);
					$email.attr({
						autocapitalize: 'off',
						autocomplete: 'email',
						autocorrect: 'off'
					});
				});
			}
			// phone
			if ($this.find('.form-control[type="tel"]').length) {
				$('.form-control[type="tel"]', $this).each(function() {
					var $phone = $(this);
					$phone.attr({
						autocomplete: 'tel',
						autocorrect: 'off',
						pattern: '[0-9]*'
					});
				});
			}
			// text
			if ($this.find('.form-control[type="text"]').length) {
				$('.form-control[type="text"]', $this).each(function() {
					var $text = $(this);
					$text.attr({
						autocorrect: 'off'
					});
				});
			}
		});
	};

	// form required inputs
	var formRequiredInputs = function() {
		$('.form .form-group.required-field input:not(".selectric-input"), .form .form-group.required-field select, .form .form-group.required-field textarea').each(function() {
			$(this).attr('required','required');
			$(this).focus(function() {
				$(this).addClass('validate');
			});
			// disable html5 validation tooltips
			$(this).on('invalid', function(e) {
				e.preventDefault();
				$(this).addClass('validate');
			});
		});
	};

	// form placeholders
	var formPlaceholders = function() {
		$('.form .form-group').each(function() {
			var $this = $(this);
			if ($this.find('.control-label').length) {
				$('.control-label', $this).each(function() {
					var $placeholder = $(this).html();
					$('.control-label', $this).next('input.form-control').attr('placeholder', $placeholder);
				});
			}
		});
	};

	// comp init
	if ($('.form form').length) {
		formInputPatterns();
		formRequiredInputs();
		formPlaceholders();
	}

	// add a [btn--loading] class to form submit buttons when no validation errors have been found
	function checkForErrors(btnElement) {
		var errorCount = btnElement.parents('.form').find('.required-field.has-error').length;
		// console.log('errorcount = ' + errorCount);
		if (errorCount == 0) {
			// add loading class to button
			// console.log('errorcount = 0; add btn--loading class');
			btnElement.addClass('btn--loading').attr('value', 'Loading');
		}
	}
	if ($('.form .form-submit-border .btn').length) {
		$('.form .form-submit-border .btn').on('click', function(e) {
			var $this = $(this);
			setTimeout(function() {
				checkForErrors($this);
			}, 100);
		});
	}

	// footer subscribe
	var formSubscribeSubmit = function() {
		$('.jsSubscribeSubmit a').on('click', function(e) {
			var $val = $(this).siblings('.footer-subscribe-form__input').val();
			if ($val.length) {
				e.preventDefault();
				var $href = $(this).attr('href');
				var $emailString = '?subEmail=' + $val;
				var $url = $href + $emailString;
				window.location.href = $url;
			}
		});
	};
	if ($('.jsSubscribeSubmit').length) {
		formSubscribeSubmit();
	}


	// subscribe form
	var formSubscribe = function() {
		function getUrlParameter(name) {
			name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
			var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
			var results = regex.exec(location.search);
			return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
		}
		var $email = getUrlParameter('subEmail');
		if ($('.jsSubscribeForm').find('input[type="email"]').length) {
			$('.jsSubscribeForm input[type="email"]').val($email);
		}
	};
	if ($('.jsSubscribeForm').length) {
		formSubscribe();
	}


	// undo marketo styling and add ours
	var formMarketoStyle = function() {
		var $marketo = $('.form--marketo');
		// detach css links in head
		$('#mktoForms2BaseStyle').remove();
		$('#mktoForms2ThemeStyle').remove();
		// detach css link in form
		$($marketo).find('style').remove();
		// remove inline styles in form
		$($marketo).find('*').removeAttr('style');
		if ($marketo.hasClass('.form--marketo-half')) {
			$($marketo).find('.mktoFormRow').addClass('form-group halfAvailableWidth');
		} else {
			$($marketo).find('.mktoFormRow').addClass('form-group');
		}
		// add our classes
		$($marketo).find('.mktoLabel').addClass('control-label');
		$($marketo).find('.mktoRequiredField').parentsUntil('.mktoFormRow').addClass('required-field');
		$($marketo).find('.mktoAsterix').hide();
		$($marketo).find('.mktoField').addClass('form-control');
		$($marketo).find('.mktoButton').addClass('btn');
		$($marketo).addClass('visible');
	};
	var formMarketo = function() {
		if ($('.form--marketo form input').length) {
			// stop the interval
			clearInterval($interval);
			formMarketoStyle();
			initDropdowns($('.form--marketo select'));
		} else {
			// increment tries
			$tries++;
		}
		// stop trying after 5 tries
		if ($tries === 5) {
			clearInterval($interval);
			$('.form--marketo').addClass('visible');
		}
	};
	// length init check
	if ($('.form--marketo').length) {
		// check the forn inouts have loaded in every 2 seconds
		var $interval = setInterval(formMarketo, 2000);
		var $tries = 0;
		formMarketo();
	}

});
