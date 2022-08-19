jQuery(document).ready(function($) {
	var slide = $(".swiper-slide");
    var slideLength = slide === undefined ? 0 : $(".swiper-slide").length;
    var options = {
        loop: true,
        allowTouchMove: true,
        runCallbacksOnInit: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            992: {
                slidesPerView: 3,
                direction: 'vertical',
            },
            768: {
                slidesPerView: 2,
                direction: 'horizontal',
            },
            558: {
                slidesPerView: 1,
                direction: 'horizontal',
            }
        },
        on: {
            init: function() {
                var lazyBgElem = $(".jsCarousel-banner").find("div.carousel__image");
                lazyBgElem.each(function(e) {
                    $(this).empty();
                    $(this).addClass('lazyload');
                });
            },
            update: function() {
                var lazyBgElem = $(".jsCarousel-banner").find("div.carousel__image");
                lazyBgElem.each(function(e) {
                    $(this).empty();
                    $(this).addClass('lazyload');
                });
            },
			resize: function(){
			  this.autoplay.start();
			}		
        }
    };
	var autoplay = $(".jsCarousel-banner").data("autoplay");
	if(autoplay){
		options.autoplay ={delay: autoplay};
	};
	
    if (slideLength > 0) {
        var currentWidth = $(this).width();
        if (slideLength == 3 && currentWidth > 991) {
            $('.swiper-wrapper').addClass("disabled");
            $(".swiper-button-next").addClass("carousel-banner__btn");
            $(".swiper-button-prev").addClass("carousel-banner__btn");
            $(".jsCarousel-banner").addClass("p-0");
        } else {
            $('.swiper-wrapper').removeClass("disabled");
            $(".swiper-button-next").removeClass("carousel-banner__btn");
            $(".swiper-button-prev").removeClass("carousel-banner__btn");
            $(".jsCarousel-banner").removeClass("p-0");

        }

        var swiper = new Swiper('.swiper-container', options);

        $(window).on("resize", function(e) {
            var width = $(this).width();
            if (width > 991 && slideLength !== undefined && slideLength == 3) {
                $('.swiper-wrapper').addClass("disabled");
                $(".swiper-button-next").addClass("carousel-banner__btn");
                $(".swiper-button-prev").addClass("carousel-banner__btn");
                $(".jsCarousel-banner").addClass("p-0");
            } else {
                $('.swiper-wrapper').removeClass("disabled");
                $(".swiper-button-next").removeClass("carousel-banner__btn");
                $(".swiper-button-prev").removeClass("carousel-banner__btn");
                $(".jsCarousel-banner").removeClass("p-0");
            }
        });
    }
});