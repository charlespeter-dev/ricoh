// user agent detection
(function() {
	// apple devices
	if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
		$('body').addClass('ios-device');
	}
	// ie
	if (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > 0) {
		$('body').addClass('ie');
	}
	// edge
	if (/Edge\/\d./i.test(navigator.userAgent)) {
		$('body').addClass('ie-edge');
	}
}());
// change alt tag
jQuery(document).ready(function ($) {
	 var altTitle = "";
	var altTitleField = $("#altTitleID").text();
	var altTitleH1 = $("H1").first().text();
	var altTitleH2 = $("H2").first().text();
	if (altTitleField) {
	  altTitle = altTitleField;
	}
	else if (altTitleH1) {
	  altTitle = altTitleH1;
	}
	else if (altTitleH2) {
	  altTitle = altTitleH2;
	}
	
  $('body img').each(function (index) {
    $(this).attr("alt",altTitle)
  });
  });

// end change alt tag
// lazysizes init
(function() {
	window.lazySizesConfig = window.lazySizesConfig || {};
	window.lazySizesConfig.customMedia = {
		'--medium': '(max-width: 959px)' // $screen-md-max
	};
}());


jQuery(document).ready(function($) {


	// ---------------------------------------------------------------------F
	// | service worker                                                    |
	// ---------------------------------------------------------------------

	// if ('serviceWorker' in navigator) {
	// 	navigator.serviceWorker.register('/service-worker.js');
	// }


	// ---------------------------------------------------------------------
	// | print button                                                      |
	// ---------------------------------------------------------------------

	if ($('.jsPrintBtn').length) {
		$('.jsPrintBtn').on('click', function() {
			window.print();
			return false;
		});
	}


	// ---------------------------------------------------------------------
	// | back button                                                       |
	// ---------------------------------------------------------------------

	var checkReferrerExists = function() {
		if (document.referrer != '') {
			$('.jsBackBtn').removeClass('hidden');
		}
	};

	if ($('.jsBackBtn').length) {
		checkReferrerExists();
		$('.jsBackBtn').on('click', function() {
			window.history.back();
			return false;
		});
	}


	// ---------------------------------------------------------------------
	// | autosize textareas                                                |
	// ---------------------------------------------------------------------

	var autosizeTextareas = function() {
		autosize($('.form textarea'));
	};

	if ($('.form textarea').length) {
		autosizeTextareas();
	}


	// ---------------------------------------------------------------------
	// | scroll magic                                                      |
	// ---------------------------------------------------------------------

	// init scrollmagic controller
	// http://scrollmagic.io/docs/index.html
	var controller = new ScrollMagic.Controller();


	// ---------------------------------------------------------------------
	// | header                                                            |
	// ---------------------------------------------------------------------

	(function header() {
		var $body = $('body');
		var $overlay = $('.jsOverlay');
		var $fixedToolbar = $('.jsFixedToolbarSlider');
		var $fixedToolbarList = $('.jsFixedToolbarList');
		var $knowledgeHeader = $('.jsKnowledgeHeader');
		var $headerUpperContainer = $('.jsHeaderUpperContainer');
		var $headerUpper = $('.jsHeaderUpper');
		var $countryDropdown = $('.jsCountrySelectorDropdown');
		var $countryList = $('.jsCountrySelectorList');
		var $searchDropdown = $('.jsSiteSearchDropdown');
		var $searchForm = $('.jsSiteSearchForm');
		var $nav = $('.jsNav');
		var $hamburger = $('.jsHamburger');
		var duration = 0.4;
		var breakpoint = 960;
		var navExist = 0;
		var isAnotherDropdownOpen;
		var isSearchOpen;
		var scrollPos;

		// stick header
		var scene;
		var pinnedElement;
		var pinnedClass;

		// check if nav exists
		if ($headerUpperContainer.length && $nav.length) {
			navExist = 1;
		}

		var stickify = function() {
			if ($(window).outerWidth() < breakpoint) {
				pinnedElement = '.jsHeaderUpperContainer';
				pinnedClass = 'header__upper-container--stickified';
			} else {
				pinnedElement = '.jsNav';
				pinnedClass = 'nav--stickified';
			}

			// set scrollmagic scene if the nav elements exist
			if (navExist) {
				scene = new ScrollMagic.Scene({
						triggerElement: pinnedElement,
						triggerHook: 0
					})
					.setPin(pinnedElement, {
						pushFollowers: false
					})
					.setClassToggle(pinnedElement, pinnedClass)
					.addTo(controller);
			}
		};

		var unstickify = function() {
			if (navExist) {
				scene.remove().removePin(true);
				$(pinnedElement).removeClass(pinnedClass);
			}
		};

		// open overlay
		var openOverlay = function() {
			TweenMax.to($overlay, duration, {
				display: 'block',
				opacity: '1'
			});
		};

		// close overlay
		var closeOverlay = function() {
			TweenMax.to($overlay, duration, {
				display: 'none',
				opacity: '0'
			});
		};

		// open utility menu (country selector and search on mobile)
		var openUtilityMenu = function(utility, utilityChild) {
			TweenMax.to(utility, duration, {
				display: 'block',
				opacity: '1'
			});
			TweenMax.to(utilityChild, duration, {
				rotationX: '0deg'
			});
		};

		// close utility menu (country selector and search on mobile)
		var closeUtilityMenu = function(utility, utilityChild) {
			TweenMax.to(utility, duration, {
				display: 'none',
				opacity: '0'
			});
			TweenMax.to(utilityChild, duration, {
				rotationX: '-3deg'
			});
		};

		// get scroll pos
		var getScrollPos = function() {
			scrollPos = $(window).scrollTop();
		};

		// set scroll pos
		var setScrollPos = function() {
			if (scrollPos !== undefined) {
				$(window).scrollTop(scrollPos);
			}
		};

		// open main nav (mobile)
		var openNav = function() {
			var navOffset;
			var headerOffset;
			if ($(window).scrollTop() <= 0) {
				if ($knowledgeHeader.length) {
					headerOffset = $knowledgeHeader.outerHeight(true);
					navOffset = $headerUpperContainer.height() + $knowledgeHeader.outerHeight(true);
				} else {
					headerOffset = 0;
					navOffset = $headerUpperContainer.height();
				}
			} else {
				if ($knowledgeHeader.length) {
					headerOffset = '0';
					navOffset = $headerUpperContainer.height();
				} else {
					headerOffset = 0;
					navOffset = $headerUpperContainer.height();
				}
			}

			$hamburger.addClass('hamburger--active');
			$headerUpperContainer.css({
				position: 'fixed',
				top: headerOffset + 'px'
			});
			$nav.css({
				height: 'calc(100vh - ' + navOffset + 'px',
				top: navOffset + 'px'
			});
			TweenMax.to($nav, duration, {
				display: 'block',
				opacity: 1,
				onComplete: function() { $body.addClass('body--nav-open'); }
			});
		};

		// close main nav (mobile)
		var closeNav = function() {
			$body.removeClass('body--nav-open');
			$hamburger.removeClass('hamburger--active');
			TweenMax.to($nav, duration, {
				display: 'none',
				opacity: 0,
				onComplete: function() { $nav.removeAttr('style'); }
			});
		};

		var resetDropdownBtn = function() {
			var $activeBtn = $('.jsNavBtn.nav__btn--active');
			$activeBtn.removeClass('nav__btn--active');
			$activeBtn.children('.ricon').removeClass('nav__btn-icon--active');
		};

		// open dropdown
		var openDropdown = function(button, dropdown, isAnotherDropdownOpen) {
			closeDropdown(button);
			button.addClass('nav__btn--active');
			button.children('.ricon').addClass('nav__btn-icon--active');

			// mobile
			if ($(window).outerWidth() < breakpoint) {
				dropdown.slideDown(400);
				dropdown.find('.jsDropdownItem, .jsDropdownTitle').each(function(index) {
					TweenMax.from($(this), duration, {
						delay: 0.02 * index,
						left: '160px'
					});
					TweenMax.from($(this), duration, {
						opacity: 0
					});
				});
			}

			// desktop
			else {
				$body.addClass('body--nav-open');

				var $activeDropdown = $('.jsDropdown:visible');
				var $dropdownOverlay = dropdown.find('.jsDropdownOverlay');
				var $dropdownInner = dropdown.find('.jsDropdownInner');

				// if no other dropdowns are open
				if (!isAnotherDropdownOpen) {
					openOverlay();

					TweenMax.to($dropdownOverlay, duration, {
						opacity: '1'
					});
					TweenMax.to(dropdown, duration, {
						display: 'block',
						opacity: '1'
					});
					TweenMax.to($dropdownInner, duration, {
						rotationX: '0deg'
					});
				}
				// else another dropdown is open
				else {
					$dropdownOverlay.css('opacity', '1');
					dropdown.show().css('opacity', '1');
					$dropdownInner.css('transform', 'none');
				}
			}
		};

		// close dropdowns
		var closeDropdown = function(button) {
			// mobile
			if ($(window).outerWidth() < breakpoint) {
				$('.jsDropdown:visible').slideUp(400);
			}

			// desktop
			else {
				$body.removeClass('body--nav-open');

				closeUtilityMenu($countryDropdown, $countryList);
				closeUtilityMenu($searchDropdown, $searchForm);

				var $activeDropdown = $('.jsDropdown:visible');
				var $dropdownOverlay = $activeDropdown.find('.jsDropdownOverlay');
				var $dropdownInner = $activeDropdown.find('.jsDropdownInner');

				// if not triggered by a new dropdown opening (clicking out or clicking the active button)
				if (typeof button === 'undefined' || button.hasClass('nav__btn--active')) {
					closeOverlay();

					TweenMax.to($dropdownOverlay, duration, {
						opacity: '0'
					});
					TweenMax.to($activeDropdown, duration, {
						display: 'none',
						opacity: '0'
					});
					TweenMax.to($dropdownInner, duration, {
						rotationX: '-2deg'
					});
				}
				// else triggered by a new dropdown
				else {
					$dropdownOverlay.css('opacity', '0');
					$activeDropdown.hide().css('opacity', '0');
					$dropdownInner.css('transform', 'none');
				}
			}

			resetDropdownBtn();
		};

		// reset nav
		var resetNav = function() {
			if ($body.hasClass('body--nav-open')) {
				closeOverlay();
			}
			resetDropdownBtn();
			$body.removeClass('body--nav-open');
			$hamburger.removeClass('hamburger--active');
			$nav.removeAttr('style');
			$('.jsDropdown').removeAttr('style');
			$('.jsDropdownOverlay').removeAttr('style');
			$('.jsDropdownInner').removeAttr('style');
		};

		// close menus
		// accessed by fixed-toolbar.js
		window.closeMenus = function() {
			closeUtilityMenu($countryDropdown, $countryList);
			closeOverlay();
			closeDropdown();

			if ($(window).width() <= 960) {
				closeUtilityMenu($searchDropdown, $searchForm);

				if ($('body').hasClass('body--nav-open')) {
					$hamburger.trigger('click');
				}
			}
		};

		// country selector
		$('.jsCountrySelectorBtn').on('click', function() {
			closeMenus();
			if (!$countryDropdown.is(':visible')) {
				window.closeToolbar(); // fixed-toolbar.js
				openUtilityMenu($countryDropdown, $countryList);
				openOverlay();
			} else {
				closeUtilityMenu($countryDropdown, $countryList);
				closeOverlay();
			}
		});

		// search (mobile)
		$('.jsSiteSearchBtn').on('click', function() {
			closeMenus();
			if (!$searchDropdown.is(':visible')) {
				window.closeToolbar(); // fixed-toolbar.js
				isSearchOpen = true;
				openUtilityMenu($searchDropdown, $searchForm);
				openOverlay();
				setTimeout(function() {
					$searchForm.find('input').focus();
				}, (duration + 0.1) * 100);
			} else {
				isSearchOpen = false;
				closeUtilityMenu($searchDropdown, $searchForm);
				closeOverlay();
			}
		});
		
		var preWindowWidth = $(window).outerWidth();
		// search (desktop)
		$searchForm.find('input').on('focus', function() {
			if ($(window).outerWidth() >= breakpoint) {
				closeMenus();
			}
			var newWindowWidth =  $(window).outerWidth();
			if(newWindowWidth !== preWindowWidth){
				preWindowWidth = newWindowWidth;
			}
		});

		// main menu (mobile)
		$hamburger.on('click', function() {
			if (!$nav.is(':visible')) {
				window.closeToolbar(); // fixed-toolbar.js
				closeMenus();
				getScrollPos(); // before body gets class .body--nav-open
				openNav();
			} else {
				closeNav();
				setScrollPos(); // after body loses class .body--nav-open
			}
		});

		// dropdowns
		$('.jsNavBtn').on('click', function() {
			var $dropdown = $(this).parents('.jsNavItem').find('.jsDropdown');
			if (!$dropdown.is(':visible')) {
				if ($('.jsDropdown:visible').length) {
					isAnotherDropdownOpen = true;
				} else {
					isAnotherDropdownOpen = false;
				}
				openDropdown($(this), $dropdown, isAnotherDropdownOpen);
			} else {
				closeDropdown($(this));
			}
		});

		// click out to close
		$overlay.on('click', function() {
			closeMenus();
		});
		$knowledgeHeader.on('click', function() {
			closeMenus();
		});
		$knowledgeHeader.children('a').on('click', function(e) {
			e.stopPropagation();
		});
		$headerUpper.on('click', function() {
			closeMenus();
		});
		$headerUpper.children().on('click', function(e) {
			e.stopPropagation();
		});

		// esc key to close
		$(document).on('keyup', $.throttle(250, function(e) {
			if (e.keyCode === 27) {
				closeMenus();
			}
		}));

		// stick header to top of screen on scroll
		stickify();

		// on nav open, prevent scrollmagic from treating the pinned element as it would at its starting pos
		if (navExist) {
			scene.on('leave', function(e) {
				if ($('body').hasClass('body--nav-open') && $(window).outerWidth() < breakpoint) {
					var headerOffset;
					if ($(window).scrollTop() <= 0) {
						headerOffset = '0';
					} else {
						headerOffset = $knowledgeHeader.outerHeight(true);
					}

					$headerUpperContainer.css({
						position: 'fixed',
						top: headerOffset
					});
					$headerUpperContainer.addClass('test');
				}
			});
		}

		// reset on resize between mobile and desktop
		var windowWidth = $(window).outerWidth();
		$(window).on('resize', $.throttle(250, function() {
			var newWindowWidth = $(window).outerWidth();
			if (windowWidth >= breakpoint && newWindowWidth < breakpoint || windowWidth < breakpoint && newWindowWidth >= breakpoint) {
				// reset nav
				resetNav();
				// close site search dropdown
				if (isSearchOpen === true) {
					closeOverlay();
					closeUtilityMenu($searchDropdown, $searchForm);
					isSearchOpen = false;
				}
			}
			var bl = $searchForm.find('input').is(":focus") ? true : false;
			// unstickify then restickify with new element
			if(preWindowWidth !== newWindowWidth){
				unstickify();
				stickify();
			};
			if(bl){
			setTimeout(function() {
					$searchForm.find('input.tt-input').focus();
				}, (duration + 0.1) * 100);
			};
			// reset width var for next resize
			windowWidth = newWindowWidth;
			preWindowWidth = newWindowWidth;
		}));

	}());

	// ---------------------------------------------------------------------
	// | identify if value is different in any array                       |
	// ---------------------------------------------------------------------

	window.hasUniqueVal = function(arr, arrLen) {
		var uniVal;
		var result = false;
		for (var i = 0; i < arrLen; i++) {
			if (uniVal === undefined) {
				uniVal = arr[i];
			} else if (uniVal !== arr[i]) {
				result = true;
			}
		}
		return result;
	};


	// ---------------------------------------------------------------------
	// | show more button                                                  |
	// ---------------------------------------------------------------------

	var showMoreList = function() {
		$('.jsShowMoreList').each(function(index) {
			var $this = $(this);
			var $listItems = $this.find('li');
			var $isFooterList = $this.parents('.footer-sitemap__group').length;
			var count = $listItems.length;

			// add hidden class to 5th item and over
			$listItems.each(function(listItemsIndex) {
				if (listItemsIndex > 3) {
					$(this).addClass('hidden');
				}
			});

			// add show more button when there are more than 4 items
			if (count > 4) {
				$this.after('<button type="button" class="btn-show-more jsShowMore">' + $.i18n("show more") + ' <i class="btn-show-more__icon ricon ricon-plus"></i></button>');
			}
		});

		// standard show more button
		$('.jsShowMore').on('click', function() {
			var $this = $(this);
			var $list = $this.prev('.jsShowMoreList');
			var $listItem = $list.find('li');
			$this.addClass('hidden');
			$listItem.removeClass('hidden');
		});
	};

	if ($('.jsShowMoreList').length) {
		showMoreList();
	}


	// ---------------------------------------------------------------------
	// | footer show more button                                           |
	// ---------------------------------------------------------------------

	var footerShowMoreList = function() {
		$('.jsFooterShowMoreList').each(function(index) {
			var $this = $(this);
			var $listItems = $this.find('li');
			var count = $listItems.length;

			// add hidden class to 5th item and over
			$listItems.each(function(listItemsIndex) {
				if (listItemsIndex > 4) {
					$(this).addClass('hidden');
				}
			});

			// add show more button when there are more than 5 items (first item is title)
			if (count > 5) {
				$this.find('.component-content').append('<button type="button" class="btn-show-more jsFooterShowMoreBtn">' + $.i18n("show more") + ' <i class="btn-show-more__icon ricon ricon-plus"></i></button>');
			}
		});

		// footer show more button
		$('.jsFooterShowMoreBtn').on('click', function() {
			$('#page-footer .jsFooterShowMoreBtn').addClass('hidden');
			$('#page-footer .jsFooterShowMoreList li').removeClass('hidden');
		});
	};

	if ($('.jsFooterShowMoreList').length) {
		footerShowMoreList();
	}


	// ---------------------------------------------------------------------
	// | set min height on main                                            |
	// ---------------------------------------------------------------------

	// set main min height
	var getHeight = function() {
		var $pageHeight = window.innerHeight;
		var $headerHeight = $('#page-header').outerHeight();
		var $mainHeight = $('#page-main').outerHeight();
		var $footerHeight = $('#page-footer').outerHeight();
		var $setHeight = Math.ceil($pageHeight - ($footerHeight + $headerHeight));
		if ($mainHeight < $setHeight) {
			$(document).find('#page-main').css('min-height', $setHeight);
		}
	};

	getHeight();
	// optional set on resize
	$(window).on('resize', $.throttle(250, function() {
		getHeight();
	}));


	// ---------------------------------------------------------------------
	// | smooth scroll anchors using tweenmax                              |
	// ---------------------------------------------------------------------

	var smoothScrollTo = function() {
		controller.scrollTo(function(newpos, offset) {
			TweenMax.to(window, 0.5, {
				scrollTo: {
					y: newpos,
					offsetY: offset
				}
			});
		});

		$('.jsScrollTo').on('click', function(e) {
			// find the tag
			var $tag = $(this)[0].nodeName.toLowerCase();
			var $scrollTarget;
			var $stickyHeaderHeight = $('.jsNav.nav--stickified').height();

			if ($tag === 'a') {
				$scrollTarget = $(this).attr('href');
			} else {
				$scrollTarget = '#' + $(this).attr('data-scroll-to');
			}

			e.preventDefault();
			controller.scrollTo($scrollTarget, $stickyHeaderHeight + 24);
			if (window.history && window.history.pushState) {
				history.pushState('', document.title, $scrollTarget);
			}
		});
	};

	if ($('.jsScrollTo').length) {
		smoothScrollTo();
	}


	// ---------------------------------------------------------------------
	// | Smooth scroll anchor link                                         |
	// ---------------------------------------------------------------------
	
	$('a[href*=#]').on('click touchstart',function(e){
		var reg = /[#|?].*|/gi;
		var link = this.href.replace(reg,"");
		//polyfill
		if (!String.prototype.includes) {
			String.prototype.includes = function (str) {
				return this.indexOf(str) !== -1;
			}
		}
		if(window.location.href.includes(link)){
			event.preventDefault();
			var $stickyHeaderHeight = $('.jsNav.nav--stickified').height()
			var $offSet = $stickyHeaderHeight === undefined ? 0 : $stickyHeaderHeight;
			var $scrollPos = $(this.hash).offset().top + $offSet;
			$('html,body').stop().animate({scrollTop: $scrollPos}, 1000,'swing');
			if (window.history && window.history.pushState) {
				history.pushState('', document.title, this.hash);
			}
		}
	});
		

	// ---------------------------------------------------------------------
	// | breadcrumbs                                                       |
	// ---------------------------------------------------------------------

	var breadcrumb = function() {
		// disable last link from tabbing
		$('.jsBreadcrumbList li:last-child a').attr('tabindex', '-1');

		// function to check if there is overfow on the breadcrumbs and scroll them automatically to the right
		var breadcrumbOverflow = function() {
			var $breadcrumb = $('.jsBreadcrumbList');
			var $leftMost = $breadcrumb.width();

			// scroll the breadcrumbs to the left
			$breadcrumb.scrollLeft($leftMost);
		};

		breadcrumbOverflow();

		$(window).on('resize', $.throttle(250, function() {
			breadcrumbOverflow();
		}));
	};

	if ($('.jsBreadcrumb').length) {
		breadcrumb();
	}


	// ---------------------------------------------------------------------
	// | range sliders                                                     |
	// ---------------------------------------------------------------------
	window.initRangeSliders = function($parentContainer) {
		var $selector = $('.jsFilterSlider');

		if ($parentContainer != null) {
			$selector = $parentContainer.find('.jsFilterSlider');
		}

		$selector.each(function() {
			var $this = $(this);
			var slider = $this.find('.jsSlider')[0];
			var dataMinValue = $this.data('min');
			var dataMaxValue = $this.data('max');
			var $inputMinValue = $this.find('.jsInputMin');
			var $inputMaxValue = $this.find('.jsInputMax');
			var startMinValue = null;
			var startMaxValue = null;

			// #dev: need to get values from url parameters and populate the input fields

			// check if input fields have values in them to determine the range sliders starting values
			if ($inputMinValue[0].value) {
				startMinValue = $inputMinValue[0].value;
			} else {
				startMinValue = dataMinValue;
			}
			if ($inputMaxValue[0].value) {
				startMaxValue = $inputMaxValue[0].value;
			} else {
				startMaxValue = dataMaxValue;
			}

			// initialise sliders
			noUiSlider.create(slider, {
				start: [startMinValue, startMaxValue],
				connect: true,
				step: 1,
				range: {
					min: dataMinValue,
					max: dataMaxValue
				}
			});

			// update input fields when changing slider
			slider.noUiSlider.on('update', function(values, handle) {
				var value = values[handle];
				if (handle) {
					// handle[1] = max value
					$inputMaxValue[0].value = value;
				} else {
					// handle[0] = min value
					$inputMinValue[0].value = value;
				}
			});

			// update slider when changing min input field
			$inputMinValue.on('change', function() {
				slider.noUiSlider.set([this.value, null]);
			});

			// update slider when changing max input field
			$inputMaxValue.on('change', function() {
				slider.noUiSlider.set([null, this.value]);
			});

		});

	};

	if ($('.jsFilterSlider').length) {
		initRangeSliders();
	}


	// ---------------------------------------------------------------------
	// | selectric dropdowns                                               |
	// ---------------------------------------------------------------------
	// https://github.com/lcdsantos/jQuery-Selectric

	window.initDropdowns = function($selector) {
		$selector.selectric({
			arrowButtonMarkup: '<span class="selectric-btn"><i class="ricon ricon-arrow-down" aria-hidden="true"></i></span>',
			responsive: true
		});
		// console.log('skipping selectric init');
	};

	if ($('select').not('.glossary__dropdown').length) {
		initDropdowns($('.form select, .filter-dropdown').not('.gated-content select'));
	}


	// ---------------------------------------------------------------------
	// | on animation end                                                  |
	// ---------------------------------------------------------------------

	$('.btn').not('.btn--disabled').on('click', function() {
		var $this = $(this);
		$this.addClass('btn--clicked');
		$this.one('webkitAnimationEnd oAnimationEnd msAnimationEnd animationend', function(e) {
			$this.removeClass('btn--clicked');
		});
	});

	$('.btn-ghost').not('.btn-ghost--disabled').on('click', function() {
		var $this = $(this);
		$this.addClass('btn-ghost--clicked');
		$this.one('webkitAnimationEnd oAnimationEnd msAnimationEnd animationend', function(e) {
			$this.removeClass('btn-ghost--clicked');
		});
	});


	// ---------------------------------------------------------------------
	// | update <title> tag on product detail with ModelDisplayName        |
	// ---------------------------------------------------------------------
	if ($('.jsProductName').length) {
		document.title = $('.jsProductName')[0].innerText;
	}


	// ---------------------------------------------------------------------
	// | gated content modal                                               |
	// ---------------------------------------------------------------------
	if ($('.jsGatedContentContainer').length && $('.form.gated-content').length) {
		// hide form by default
		var $gatedContentForm = $('.jsGatedContentContainer').find('.form.gated-content');
		var $gatedContentFormContent = $gatedContentForm.html();

		// instantiate new modal
		var modal = new tingle.modal({
			closeMethods: ['overlay', 'button', 'escape'],
			closeLabel: 'Close',
			cssClass: ['custom-class-1'],
			beforeOpen: function() {
				$('.tingle-modal-box__content .form--default.hidden').removeClass('hidden');
			},
			onOpen: function() {
				initDropdowns($('.tingle-modal-box__content select'));
			},
			onClose: function() {

			}
		});

		// set content
		modal.setContent($gatedContentFormContent);

		// open modal
		modal.open();

	}


	// ---------------------------------------------------------------------
	// | sitemap accordions                                                |
	// ---------------------------------------------------------------------

	if ($('.sitemap').length) {
		var subMenu = $('.sitemap .level-2').find('> ul');
		subMenu.each(function() {
			$(this).parent('.level-2').addClass('level-2__trigger');
		});
		$('.sitemap .level-2__trigger').on('click', function(e) {
			var target = $(e.target);
			var item = $(this);
			if (target.is(item)) {
				item.toggleClass('level-2--active');
				item.find('> ul').slideToggle('fast');
			}
		});
	}


	// ---------------------------------------------------------------------
	// | add js loaded class to body                                       |
	// ---------------------------------------------------------------------

	$('body').addClass('jsLoaded');

});
