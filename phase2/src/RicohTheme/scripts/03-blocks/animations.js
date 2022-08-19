jQuery(document).ready(function($) {

	// init scrollmagic controller
	var controller = new ScrollMagic.Controller();
	var duration = 0.4;
	var durationLong = 0.8;
	var distance = 100;
	var offset = 100;

	// mobile: everything fades in
	if ($(window).outerWidth() < 768) {

		$('.jsFadeIn, .jsStaggeredDropItem').each(function() {
			var elem = $(this).get();

			var tween = TweenMax.fromTo(elem, durationLong, {
				opacity: 0
			}, {
				opacity: 1
			});

			var scene = new ScrollMagic.Scene({
				offset: offset,
				reverse: false,
				triggerElement: elem,
				triggerHook: 'onEnter'
			})
			.setTween(tween)
			.addTo(controller);
		});

	} else { // desktop: fade, slide, and drop animations

		// fade in
		$('.jsFadeIn').each(function() {
			var elem = $(this).get();

			var tween = TweenMax.fromTo(elem, durationLong, {
				opacity: 0
			}, {
				opacity: 1
			});

			var scene = new ScrollMagic.Scene({
				offset: offset,
				reverse: false,
				triggerElement: elem,
				triggerHook: 'onEnter'
			})
			.setTween(tween)
			.addTo(controller);
		});

		// staggered drop in list
		$('.jsStaggeredDropList').each(function() {
			var $items = $(this).find('.jsStaggeredDropItem');
			var elem = $(this).get();

			var tween = TweenMax.staggerFromTo($items, duration, {
				position: 'relative',
				top: -distance,
				opacity: 0
			}, {
				top: 0,
				opacity: 1
			}, 0.2);

			var scene = new ScrollMagic.Scene({
				offset: offset,
				reverse: false,
				triggerElement: elem,
				triggerHook: 'onEnter'
			})
			.setTween(tween)
			.addTo(controller);
		});

	}

});
