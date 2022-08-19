jQuery(document).ready(function($) {

	// open sidenav dropdown (used in mobile only)
	var openSidenav = function($trigger) {
		var $this = $trigger;
		var $thisDropdown = $this.next('.jsSidenavDropdown');
		if (!$thisDropdown.is(':visible')) {
			$this.find('.sidenav__arrow').addClass('sidenav__arrow--active');
			$thisDropdown.slideDown(200);
		} else {
			$this.find('.sidenav__arrow').removeClass('sidenav__arrow--active');
			$thisDropdown.slideUp(200, function() {
				resetSidenav($this);
			});
		}
	};

	// reset sidenav to default state
	var resetSidenav = function($trigger) {
		var $triggeredDropdown = $trigger.next('.jsSidenavDropdown');
		var $triggeredSubItemTrigger = $triggeredDropdown.find('.jsSidenavItemTrigger');
		$trigger.find('.sidenav__arrow').removeClass('sidenav__arrow--active');
		$triggeredDropdown.removeAttr('style');
		$triggeredSubItemTrigger.parent().next('.jsSidenavItemContent').removeAttr('style');
		$triggeredSubItemTrigger.children('.sidenav-item__arrow').removeClass('sidenav-item__arrow--active');
	};

	// open sidenav list
	var openSidenavList = function($trigger) {
		$trigger.parent().next('.jsSidenavItemContent').slideToggle(200);
		$trigger.children('.sidenav-item__arrow').toggleClass('sidenav-item__arrow--active');
	};

	// initialise sidenav
	var initSidenav = function() {	
		var enable_desktop_nav_attr = $sidenav.attr('enable-desktop-nav');
        var enable_desktop_nav=false;
		// For some browsers, `attr` is undefined; for others, `attr` is false. Check for both.
		if (typeof enable_desktop_nav_attr !== typeof undefined && enable_desktop_nav_attr !== false) {
		  enable_desktop_nav=true;
		}	
		outerWidth=$(window).outerWidth();
		if (outerWidth < breakpoint||enable_desktop_nav) {
			$sidenav.find('.sidenav__arrow').removeClass('sidenav__arrow--active');			
			$sidenavItemTrigger.off().on('click', function(e) {
				e.preventDefault();
				openSidenavList($(this));
			});
			if(outerWidth >= breakpoint&&enable_desktop_nav)
			{
				openSidenavList($('.sidenav-item__btn--expand'));
			}
			
		} else {
			$sidenav.find('.sidenav__parent-list').removeAttr('style');
			$sidenavItemTrigger.off();
		}
	};

	if ($('.jsSidenav').length) {

		var $sidenav = $('.jsSidenav');
		var $sidenavTrigger = $('.jsSidenavDropdownTrigger');
		var $sidenavDropdown = $('.jsSidenavDropdown');
		var $sidenavItemTrigger = $('.jsSidenavItemTrigger');
		var breakpoint = 768;

		initSidenav();

		$(window).on('resize', $.throttle(250, function() {
			initSidenav();
		}));

		// open sidenav dropdown on mobile
		$sidenavTrigger.on('click', function(e) {
			openSidenav($(this));
		});

	}

	var $productListingSidenavTrigger = $('.jsProductListingSidenavDropdownTrigger');
	$productListingSidenavTrigger.on('click', function(e) {
			openSidenav($(this));
		});
});
