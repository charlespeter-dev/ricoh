// generating the glossary listing
jQuery(document).ready(function($) {

	var glossary = []; // array to store glossary terms
	var glossaryxml = $('#glossary').data('base-url'); // glossary xml file

	// initialise combobox
	// https://jqueryui.com/autocomplete/#combobox
	var $dropdown = $('.glossary__dropdown');
	$dropdown.combobox();

	// customise combobox
	var $input = $dropdown.next('.custom-combobox').find('input');
	var $showAll = $input.next('a');
	$input.attr('placeholder', $.i18n("search the glossary"));

	// ajax call to get the xml file
	if ($('#glossary').length) {
		$.ajax({
			type: 'GET',
			url: glossaryxml,
			cache: false,
			dataType: 'xml',
			success: function(xml) {
				// call method to convert XML to Glossary JSON Dictionary
				buildGlossary(xml);

				// load dropdown and set selected values
				loadGlossaryDropdown();
			},
			error: function() {
				$('.glossary__loading').html('<div class="message message--warning">' + $.i18n("unable to load glossary XML") + '</div>');
			}
		});
	}

	// function to build glossary json object from xml
	function buildGlossary(xml) {
		var $xml = $(xml);
		// loop through all the terms (glossary_term) and build dictionary
		$xml.find('glossary_term').each(function(index, term) {
			glossary[index] = {}; // create new object for each term
			glossary[index].heading = $(term).find('glossary_term_heading').text(); // set heading of the term
			glossary[index].content = $(term).find('glossary_term_content').text(); // set content of the term

		});

		// sort the terms in glossary json by calling compare method
		glossary.sort(compare);
	}

	// method to sort two object based on heading
	function compare(a, b) {
		if (a.heading.toLowerCase() < b.heading.toLowerCase()) {
			return -1;
		}
		if (a.heading.toLowerCase() > b.heading.toLowerCase()) {
			return 1;
		}
		return 0;
	}

	// method to load glossary dropdown and bind change events
	function loadGlossaryDropdown() {

		// set json values to glossary dropdown
		var $glossarydropdown = $('.glossary__dropdown');
		var options = '';

		// loop all the terms in json and build options for dropdown
		$.each(glossary, function(index, term) {
			options += '<option value="' + term.heading.toLowerCase() + '">' + term.heading + '</option>';
		});

		// clear loading message
		$('.glossary__loading').empty();

		// appends options to dropdown
		$glossarydropdown.append(options);

		// history plugin to maintain history on dropdown change
		var History = window.History;
		if (!History.enabled) {
			// history.js is disabled for this browser.
			return false;
		}

		// the query string key
		var query = 'glossary_term_heading';

		// bind to StateChange Event (url change)
		History.Adapter.bind(window, 'statechange', function() { // Note: We are using statechange instead of popstate

			// read the current state of history
			var State = History.getState();

			// regex to read the term from query string
			query = query.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
			var regex = new RegExp('[\\?&]' + query + '=([^&#]*)');
			var results = regex.exec(State.cleanUrl);
			// var selectedItem = results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
			var selectedItem = results === null ? '' : decodeURIComponent(results[1]);

			// show content of glossary term
			showGlossaryTerm(selectedItem.toLowerCase());

		});

		// event handler for dropdown change
		$glossarydropdown.on('change', function(event) {
			var url = window.location.pathname + '?' + query + '=' + $(this).find('option:selected').val();
			// Set state to history based on selected value
			History.pushState({}, $(this).val(), url);
			sendPageRequest(url);
		});

		History.Adapter.trigger(window, 'statechange');
	}

	function sendPageRequest(url) {
		var xhr = new XMLHttpRequest();
		xhr.open('GET', url);
		xhr.send();
	}

	// method to show glossary term and content
	function showGlossaryTerm(heading) {
		// selector to get dropdown value
		var $glossarydropdown = $('.glossary__dropdown');

		// find the term in glossary json
		var glossaryterm = $.grep(glossary, function(item) {
			return item.heading.toLowerCase() == heading;
		});

		// if term is selected and valid
		if (glossaryterm.length > 0) {
			$glossarydropdown.val(heading);
			$('.glossary__error').hide();
			$('.glossary__result').addClass('glossary__result--active');
			$('.glossary__heading').html(glossaryterm[0].heading); // set the heading
			$('.glossary__content').html(glossaryterm[0].content); // set the content
		}
		// if term is invalid
		else {
			$glossarydropdown[0].selectedIndex = 0;
			$('.glossary__heading').html(glossary[0].heading); // set default heading
			$('.glossary__content').html(glossary[0].content); // set default content
			$('.glossary__result').removeClass('glossary__result--active');
			if (heading != '' && heading != ' select a glossary term') {
				$('.glossary__error').show();
			}
		}
	}

});
