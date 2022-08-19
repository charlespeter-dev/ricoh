 
jQuery(document).ready(function ($) {

function collectionHas(a, b) {
    for(var i = 0, len = a.length; i < len; i ++) {
        if(a[i] == b) return true;
    }
    return false;
}
function findParentBySelector(elm, selector) {
    var all = document.querySelectorAll(selector);
    var cur = elm.parentNode;
    while(cur && !collectionHas(all, cur)) { 
        cur = cur.parentNode; 
    }
    return cur; 
}
	//filter
	var browseByCategory = function ($el) {
		$el.selectric().on('change', function (event, element, selectric) {
			var sortOption = $(this).val();
			var currentProductTileElem = findParentBySelector(this,".product-tile");
			var containerId = $(currentProductTileElem).parent().parent().attr("id");
			var currentAnchor = containerId  == undefined ? "" : "#"+containerId;
			var url = window.location.href.split('#')[0];
			window.location = updateQueryStringParameter(url, 'categoryFilter', sortOption)+currentAnchor;
			window.sessionStorage.setItem('categoryFilter', JSON.stringify(sortOption));
		});
	};

	if ($('.jsBrowseByCategory').length) {
		browseByCategory($('.jsBrowseByCategory'));
	}

	var produdcTileFiler = function ($el) {
		$el.selectric().on('change', function (event, element, selectric) {
			var sortOption = $(this).val();
			var currentProductTileElem = findParentBySelector(this,".product-tile");
			var containerId = $(currentProductTileElem).parent().parent().attr("id");
			var currentAnchor = containerId  == undefined ? "" : "#"+containerId;
			var url = window.location.href.split('#')[0];
			window.location = updateQueryStringParameter(url, 'productFilter', sortOption)+currentAnchor;
			window.sessionStorage.setItem('productFilter', JSON.stringify(sortOption));
		});
	};

	if ($('.jsProductTileFiler').length) {
		produdcTileFiler($('.jsProductTileFiler'));
	}
	
	//carousel
	var productTileCarousel = function () {
		$('.jsProductTile').each(function () {
			var $carouselOptions = {
				// arrowShape: 'M72.1 78.3L42.4 50l29.7-28.3-7.2-6.7-37 35 37 35 7.2-6.7z',
				autoPlay: false,
				cellAlign: 'left',
				cellSelector: '.product-tile__cell',
				wrapAround: false,
				contain: true,
				pageDots: false,
				adaptiveHeight: false
			};

			var $productTileCarousel = $(this).flickity($carouselOptions);

			// adding class during drag
			$productTileCarousel.on('dragStart.flickity', function () {
				$(this).addClass('is-dragging');
			});
			$productTileCarousel.on('dragEnd.flickity', function () {
				$(this).removeClass('is-dragging');
			});
		});
	};

	if ($('.jsProductTile').length) {
		productTileCarousel();
	}
});

jQuery(document).ready(function ($) {
	if (window.sessionStorage.getItem('categoryFilter').length) {
		let element = document.getElementsByClassName('ricoh-row m-0 product-tile__tool')[0];
		let headerOffset = 50;
		let elementPosition = element.getBoundingClientRect().top;
		let offsetPosition = elementPosition - headerOffset;
		window.scrollTo({
			top: offsetPosition,
			behavior: "smooth"
		});
		window.sessionStorage.removeItem('categoryFilter');
	}
});

jQuery(document).ready(function ($) {
	if (window.sessionStorage.getItem('productFilter').length) {
		let element = document.getElementsByClassName('ricoh-row m-0 product-tile__tool')[0];
		let headerOffset = 50;
		let elementPosition = element.getBoundingClientRect().top;
		let offsetPosition = elementPosition - headerOffset;
		window.scrollTo({
			top: offsetPosition,
			behavior: "smooth"
		});
		window.sessionStorage.removeItem('productFilter');
	}
});
