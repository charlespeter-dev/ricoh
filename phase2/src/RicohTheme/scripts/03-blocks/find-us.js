var $J = jQuery.noConflict();
// function to check if the selector exists or if the selector returns results
$J.fn.exists = function() {
	return this.length > 0;
}; // global RICOH object

var RICOH = RICOH || {};

RICOH.utility = {
	ajaxRequest: function(data, url, enableUiBlock, elementSelector, useget) {
		if (typeof(enableUiBlock) === 'undefined') {
			enableUiBlock = false;
		}

		if (enableUiBlock && (typeof(elementSelector) !== 'undefined' && elementSelector != '')) {
			jQuery(elementSelector).block({ message: 'loading <i class="fa fa-spin fa-refresh"></i>' });
		}

		return jQuery.ajax({
			url: url,
			data: data,
			global: false,
			type: useget ? 'get' : 'post',
			dataType: 'json',
			success: function() {
				if (typeof(enableUiBlock) !== 'undefined' && enableUiBlock && (typeof(elementSelector) !== 'undefined' && elementSelector != '')) {
					jQuery(elementSelector).unblock();
				}
			}
		});
	},

	blockedUI: function(selector) {
		if ((typeof(selector) !== 'undefined' && selector != '')) {
			jQuery(selector).block({ message: 'loading <i class="fa fa-spin fa-refresh"></i>' });
		}
	},

	unblockedUI: function(selector) {
		if ((typeof(selector) !== 'undefined' && selector != '')) {
			jQuery(selector).unblock();
		}
	}
};


(function($, sf, RICOH) {

	var icons = {
		marker: '/-/media/project/ricoh/knowledge/ricohtheme/images/map/ricoh-marker.png',
		// marker: {
		// 	url: '/-/media/project/ricoh/knowledge/ricohtheme/images/map/ricoh-marker.svg',
		// 	scaledSize: new google.maps.Size(100,39)
		// },
		marker_selected: '/-/media/project/ricoh/knowledge/ricohtheme/images/map/ricoh-marker.png'
	};

	// DEFAULT SETTINGS
	var _settings = {
		center: { lat: 0, lng: 0 },
		zoom: 6,
		API_KEY: $('#googleMapApiKey').val(),
		MAP_LANG: $('#mapLanguage').val(),
		RESTRICTED_TO_COUNTRIES: getRestrictedToCountries($('#restrictedToCountries').val()),
		elems: {
			geocodeInput: 'address2',
			jqStoreList: '.store-list__listing',
			jqStoreListNoResults: '.store-list__no-results',
			jqStoreListItem: '.store-list__item',
			jqStoreListItemTemplate: '#storeItemTemplate',
			jqStoreMarkerInfoTemplate: '#storeMarkerInfoTemplate',
			jqStoreActiveListItem: '.store-list__item--active',
			jqStoreListLink: '.store-list__link'
		}
	};

	function getRestrictedToCountries(str) {
		var countries = [];
		if (typeof str !== 'undefined') {
			countries = str.split('|').filter(function (country) {return country.trim() != ''});
		}
		return countries;
	}

	var _urls = {
		js: function() {
			return 'https://maps.googleapis.com/maps/api/js?&key=' + _settings.API_KEY + '&language=' + _settings.MAP_LANG + '&libraries=places&callback=sf_initialize';
		},
		geocode: function(address) {
			return 'https://maps.googleapis.com/maps/api/geocode/json?address=' + address + '&key=' + _settings.API_KEY;
		},
		findStore: function() {
			var apiUrl = $('#apiUrl').val();
			return apiUrl;
		}
	};

	var _map = {};
	var _autocomplete = {};
	var _autocompleteInput = document.getElementById(_settings.elems.geocodeInput);
	var _autocompleteOptions = {
		types: ['(regions)'],
		componentRestrictions: {
			country: _settings.RESTRICTED_TO_COUNTRIES
		}
	};
	
	var _selected = {};
	var _stores = {
			raw: [],
			HasShowRoom: false,
			hasReseller: false,
			setRaw: function(data) {
				this.raw = data;
			},
			_filter: 'showroom',
			filter: function() {
				var dis = this;
				if (dis._filter) {
					var data = [];
					for (var i = 0; i < dis.raw.length; i++) {
						data.push(dis.raw[i]);
					}
					return data;
				}

			},
			toList: function() {
				var data = this.filter();
				data = data.sort(function(a, b) {
					return (a.DistanceInKm > b.DistanceInKm) ? 1 : -1;
				});
				for (var i = 0; i < data.length; i++) {
					this.decorateOne(data[i]);
				}
				return data;
			},
			toLatLngArray: function() {
				var arr = [];
				var item;
				var dis = this;
				var data = dis.filter();
				if (data) {
					for (var i = 0; i < data.length; i++) {
						item = data[i];
						arr.push({
							lat: parseFloat(item.Latitude),
							lng: parseFloat(item.Longitude),
							id: item.SitecoreItemId,
							name: item.Name,
							IsAShowroom: item.IsAShowroom
						});
					}
				}
				return arr;
			},
			toGoogleLatLngArray: function() {
				var arr = [];
				var item;
				var dis = this;
				var data = dis.filter();
				if (data) {
					for (var i = 0; i < data.length; i++) {
						item = data[i];
						arr.push(new google.maps.LatLng(parseFloat(item.Latitude), parseFloat(item.Longitude)));
					}
				}
				return arr;
			},
			decorateOne: function(item) {
				if (item) {
					// decorate address
					item.AddressCompiled = '';
					if (item.AddressCity) {
						item.AddressCompiled += item.AddressCity + ', ';
					}
					if (item.AddressState) {
						item.AddressCompiled += item.AddressState + ', ';
					}
					if (item.AddressPostcode) {
						item.AddressCompiled += item.AddressPostcode + ' ';
					}
					if (item.AddressRegion) {
						item.AddressCompiled += item.AddressRegion + ' ';
					}
					if (item.AddressCountry) {
						item.AddressCompiled += item.AddressCountry + ', ';
					}
					// website url
					item.WebsiteUrlCompiled = '';
					item.Url = '';
					if (item.WebsiteUrl) {
						var normalizeHref = item.WebsiteUrl;
						if (normalizeHref.indexOf('http') === -1) {
							normalizeHref = 'http://' + item.WebsiteUrl;
						}

						item.WebsiteUrlCompiled = normalizeHref;
						item.Url = item.WebsiteUrl;
					}

					// website email
					item.Email = '';
					if (typeof(item.Email) !== 'undefined' && item.Email != '') {
						item.EmailHtml = '<span class="Email">' + $.i18n("email") + ': <a href="mailto:' + item.Email + '" target="_blank">' + item.Email + '</a></span><br/>';
					}

					// image element
					item.ImageElementCompiled = '';
					if (item.Logo && item.Logo.Src) {
						item.ImageElementCompiled = '<img src="' + item.Logo.Src + '" height="90px" width="90px">';
					}
				}
			},
			getById: function(itemId) {
				var found = false;
				var dis = this;
				var data = dis.filter();
				if (data) {
					for (var i = 0; i < data.length; i++) {
						if (data[i].SitecoreItemId === itemId) {
							found = data[i];
							break;
						}
					}
					if (found) {
						dis.decorateOne(found);
					}
				}
				return found;
			},
			getMarkerInfo: function(itemId) {
				var found = this.getById(itemId);
				if (found) {
					var rendered = $(_settings.elems.jqStoreMarkerInfoTemplate).tmpl(found);
					return rendered;
				}
				return false;
			}
		};


	/******************************************************************************/
	/*
	 *  private functions
	 */

	function initializeMap() {
		var mapOptions = {
			center: new google.maps.LatLng(_settings.center.lat, _settings.center.lng),
			zoom: _settings.zoom,
			scrollwheel: false
		};
		_map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
		window.wow = _map;
	}

	function getApiScript() {
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = _urls.js();
		document.body.appendChild(script);
	}

	function setupGeocodeSearch() {
		// create the autocomplete object, restricting the search to geographical location types.
		_autocomplete = new google.maps.places.Autocomplete(_autocompleteInput, _autocompleteOptions);

		// when the user selects an address from the dropdown
		google.maps.event.addListener(_autocomplete, 'place_changed', function() {
			var place = _autocomplete.getPlace();

			// begin place/geocode/address selected
			onPlaceSelected(place);
		});
	}

	function onPlaceSelected(place) {
		// set selected place/geocode/postcode/address
		_selected = place;

		// get data, meanwhile refresh map
		refreshMapBySelectedPlace();
		findStore();
	}

	function refreshMapBySelectedPlace() {
		if (typeof(_selected) !== 'undefined') {
			// set map settings
			var latlng = getLatLngFromPlace();
			_settings.center = latlng;

			// refresh map
			refreshMap();
		}
	}

	function refreshMap() {
		_map.setCenter(new google.maps.LatLng(_settings.center.lat, _settings.center.lng));
		_map.setZoom(_settings.zoom);
	}

	function findStore() {
		if (typeof(_selected) !== 'undefined') {
			var latlng = getLatLngFromPlace();
			var placeDetails = getPlaceDetails();
			var data = {
				storeFinderConfigurationId: $('#storeConfigId').val(),
				storesFolderId: $('#storesFolderId').val(),
				keyword: $('#address2').val(),
				latitude: latlng.lat,
				longitude: latlng.lng,
				countryCode: placeDetails.countryCode,
				aal1ShortName: placeDetails.aal1ShortName,
				aal1LongName: placeDetails.aal1LongName
				//radius: $('#store-list__radius').val()
			};
			// mock ajax
			var request = RICOH.utility.ajaxRequest(data, _urls.findStore(), true, '.jsStoreFinder', true);
			request.done(function(result) {
				if (typeof result === 'string') {
					_stores.raw = eval(result);
					$(sf).trigger('result.find.jsStoreFinder');
				} else if (typeof result === 'object') {
					_stores.raw = eval(result.Stores);
					_stores.HasShowRoom = eval(result.HasShowRoom);
					_stores.hasReseller = eval(result.HasReseller);
					$(sf).trigger('result.find.jsStoreFinder');
				}
			});
		}
	}

	function getLatLngFromPlace() {
		if (typeof(_selected) !== 'undefined' && typeof(_selected.geometry.location) !== 'undefined') {
			var latlng = {
				lat: _selected.geometry.location.lat(),
				lng: _selected.geometry.location.lng()
			};
			return latlng;
		}
		return false;
	}

	function getPlaceDetails() {
		var country = findAddressComponentByType(_selected.address_components, "country");
		var aal1 = findAddressComponentByType(_selected.address_components, "administrative_area_level_1");
		var placeDetails = {
			countryCode: country != null ? country.short_name : '',
			aal1ShortName: aal1 != null ? aal1.short_name : '',
			aal1LongName: aal1 != null ? aal1.long_name : '',
		};
		return placeDetails
	}

	function findAddressComponentByType(array, typeName) {
		for(var index in array) {
			if (array[index].types.indexOf(typeName) >= 0) {
				return array[index];
			}
		}
		return null;
	}

	$(sf).on('result.find.jsStoreFinder', function() {
		drawMapMarkers();
		drawList();
	});

	var _miniInfoWindow;
	var _realInfoWindow;
	var _markers = [];
	var _markerClusterer;

	var closeInfoWindows = function() {
		if (typeof _miniInfoWindow !== 'undefined') {
			_miniInfoWindow.close();
		}
		// if (typeof _realInfoWindow !== 'undefined') {
		// 	_realInfoWindow.close();
		// 	// _realInfoWindow.related_marker.setIcon(icons.marker);
		// }
	};

	var infoWindowClosed = function(marker) {
		return function() {
			marker.setIcon(icons.marker);
		};
	};

	var markerClicked = function(marker) {
		return function() {

			// closeInfoWindows();
			var infoStr = _stores.getMarkerInfo(marker.id);
			if (infoStr) {

				marker.setIcon(icons.marker_selected);
				if (typeof _realInfoWindow !== 'undefined') {
					_realInfoWindow.close();
					_realInfoWindow.related_marker.setIcon(icons.marker);
				}
				_realInfoWindow = new google.maps.InfoWindow({
					content: infoStr[0],
					// pixelOffset: new google.maps.Size(0, 25)
				});
				_realInfoWindow.related_marker = marker;
				_realInfoWindow.open(_map, marker);
				google.maps.event.addListener(_realInfoWindow, 'closeclick', infoWindowClosed(marker));
				google.maps.event.addListener(_realInfoWindow, 'domready', function() {

					// Reference to the DIV which receives the contents of the infowindow using jQuery
					var iwOuter = $('.gm-style-iw');

					/* The DIV we want to change is above the .gm-style-iw DIV.
					 * So, we use jQuery and create a iwBackground variable,
					 * and took advantage of the existing reference to .gm-style-iw for the previous DIV with .prev().
					 */
					var iwBackground = iwOuter.prev();

					// Remove the background shadow DIV
					iwBackground.children(':nth-child(2)').css({'display' : 'none'});

					// Remove the white background DIV
					iwBackground.children(':nth-child(4)').css({'display' : 'none'});

				 });
			}
			focusToList(marker.id);

		};
	};

	// var markerMouseOver = function(marker) {
	// 	return function() {
	// 		var go = false;
	// 		if (typeof _realInfoWindow === 'undefined') {
	// 			go = true;
	// 		} else {
	// 			if (_realInfoWindow.map === null) {
	// 				go = true;
	// 			} else {
	// 				go = _realInfoWindow.related_marker !== marker;
	// 			}
	// 		}
	// 		if (go) {
	// 			_miniInfoWindow = new google.maps.InfoWindow({
	// 				content: '<div class="info-window"><span class="info-window__contact info-window__name">' + marker.name + '</span></div>',
	// 				// pixelOffset: new google.maps.Size(0, 25)
	// 			});
	// 			_miniInfoWindow.open(_map, marker);
	// 		}
	// 	};
	// };

	// var markerMouseOut = function() {
	// 	return function() {
	// 		if (typeof _miniInfoWindow !== 'undefined') {
	// 			_miniInfoWindow.close();
	// 		}
	// 	};
	// };

	function setAllMap(map) {
		for (var i = 0; i < _markers.length; i++) {
			_markers[i].setMap(map);
		}
	}

	function clearMarkers() {
		setAllMap(null);
		if (typeof _markerClusterer !== 'undefined') {
			_markerClusterer.clearMarkers();
		}
	}
	// window.clearMarkers = clearMarkers;

	function drawMapMarkers() {
		if (_stores) {
			// clearMarkers();
			var arr = _stores.toLatLngArray();
			_markers = [];
			for (var i = 0; i < arr.length; i++) {
				// generate marker
				var marker = new google.maps.Marker({
					position: new google.maps.LatLng(arr[i].lat, arr[i].lng),
					map: _map,
					icon: icons.marker
				});
				marker.id = arr[i].id;
				marker.name = arr[i].name;
				marker.IsAShowroom = arr[i].IsAShowroom;
				// marker click event
				google.maps.event.addListener(marker, 'click', markerClicked(marker));
				_markers.push(marker);

				// google.maps.event.addListener(marker, 'mouseover', markerMouseOver(marker));
				// google.maps.event.addListener(marker, 'mouseout', markerMouseOut());
			} // endfor
			fitMarkers();
			clusterMarkers();
		} // endif
	}

	function clusterMarkers() {
		var mcSettings = {
			styles: [
				{ url: '/-/media/project/ricoh/knowledge/ricohtheme/images/map/ricoh-marker-group.png', height: 45, width: 45, textColor: '#fff' }
			],
			gridSize: 40
		};
		_markerClusterer = new MarkerClusterer(_map, _markers, mcSettings);
	}

	function fitMarkers() {
		if (_stores) {
			var arr = _stores.toGoogleLatLngArray();
			if (arr.length > 0) {
				var bounds = new google.maps.LatLngBounds();
				for (var i = 0; i < arr.length; i++) {
					bounds.extend(arr[i]);
				}
				_map.fitBounds(bounds);
			}
		}
	}

	function drawList() {
		var list = _stores.toList();
		if (list.length > 0) {
			// iterate through results and append into container
			$(_settings.elems.jqStoreList).removeClass('hidden').empty();
			$(_settings.elems.jqStoreListNoResults).addClass('hidden');
			for (var i = 0; i < list.length; i++) {
				var item = list[i];
				$(_settings.elems.jqStoreListItemTemplate).tmpl(item).appendTo($(_settings.elems.jqStoreList));
			}
		} else {
			// display no results message
			$(_settings.elems.jqStoreList).addClass('hidden').empty();
			$(_settings.elems.jqStoreListNoResults).removeClass('hidden');
		}
		$('.jsStoreWrapper').fadeIn();
	}

	function focusToMarker(id) {
		var found;
		for (var i = 0; i < _markers.length; i++) {
			if (_markers[i].id === id) {
				found = _markers[i];
				_markerClusterer.setGridSize(1);
				_map.setZoom(14);
				_map.setCenter(found.getPosition());
				markerClicked(found)();
				break;
			}
		}
		if (found) {

			// markerClicked(found)();
		}
	}

	function focusToList(id) {
		$(_settings.elems.jqStoreActiveListItem).removeClass('store-list__item--active');
		$listItem = $(_settings.elems.jqStoreListItem + '[data-id="' + id + '"]');
		$listItem.addClass('store-list__item--active');
		$listItem.get(0).scrollIntoViewIfNeeded();
		if (typeof _realInfoWindow !== 'undefined') {
			$listItem.trigger('click');
		}
	}

	// private injected event
	$(document).on('click', _settings.elems.jqStoreListLink, function(e) {
		e.preventDefault();
		// de-activate all the store items
		$(_settings.elems.jqStoreActiveListItem).removeClass('store-list__item--active');
		$(_settings.elems.jqStoreListItemDetails).hide();
		// activate the selected one
		var storeItem = $(this).closest(_settings.elems.jqStoreListItem).addClass('store-list__item--active');
		storeItem.find(_settings.elems.jqStoreListItemDetails).show();
		var id = storeItem.data('id');
		TweenMax.to(window, 1, {
			scrollTo: {
				y: $('#map_canvas').offset().top
			}
		});
		focusToMarker(id);
	});

	/******************************************************************************/
	/*
	 *  public functions
	 */

	window.sf_initialize = function() {
		initializeMap();
		setupGeocodeSearch();
		// setupFilterDescription();
	};

	sf.initialize = function(settings) {
		$.extend(true, _settings, settings);
		getApiScript();
	};

}(jQuery, window.STORE_FINDER = window.STORE_FINDER || {}, window.RICOH));


/*********************************************************************************/
/* Page Code
 */
(function($) {

	function showLoader() {
		$('#address2').parent().find('.input-group-addon').removeClass('hidden');
	}

	function hideLoader() {
		$('#address2').parent().find('.input-group-addon').addClass('hidden');
	}

	// document.ready
	$(function() {
		var isElementExist = $('#map_canvas').length;
		if (isElementExist) {
			var centerLat = parseFloat($('#map_canvas').data('center-lat'));
			var centerLng = parseFloat($('#map_canvas').data('center-lng'));
			var country = $('#map_canvas').data('country');

			var settings = {
				storesFolderId: $('#storesFolderId').val(),
				center: { lat: centerLat, lng: centerLng },
				zoom: 12,
				country: country,
				elems: {
					geocodeInput: 'address2'
				}
			};
			window.STORE_FINDER.initialize(settings);
		}
	});

}(jQuery));
