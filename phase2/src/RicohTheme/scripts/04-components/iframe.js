jQuery(document).ready(function($) {

	var proportionalIframes = function() {
		$('.iframe__container').each(function() {
			var $this = $(this);
			var $proportion = $this.data('proportion');
			var $width = $this.attr('width');
			var $actualWidth = $this.width();

			if (!$proportion) {
				$proportion = $this.attr('height') / $width;
				$this.data('proportion', $proportion);
			}

			if ($actualWidth != $width) {
				$this.css('height', Math.round($actualWidth * $proportion) + 'px');
			}
		});
	};

	if ($('.iframe-component').length) {
		proportionalIframes();
	}

});
