var $f0efad2dbf952ee1$exports = {};
/**
 * @link https://getbootstrap.com/docs/5.1/components/carousel/#events
 * 
 * - get the hidden caption
 * - copy to another visible outside container
 */ jQuery(document).ready(function($) {
    var carouselComponent = function() {
        $(".swh-carousel").each(function() {
            var carousel;
            var current = $(this);
            let visibleCaption = current.find(".visible-caption").first();
            visibleCaption.html(current.find(".carousel-caption").first().html());
            if ($.isFunction($.fn.carousel)) {
                let options = {
                    interval: 2000
                };
                carousel = current.carousel(options);
                current.on("slide.bs.carousel", function(e) {
                    let activeElement = e.relatedTarget;
                    let caption = activeElement.querySelector(".carousel-caption");
                    visibleCaption.html(caption.innerHTML.trim());
                });
                current.find("[data-slide-to]").on("click", function(e) {
                    carousel.carousel($(this).data("slideTo"));
                });
            }
        });
    };
    if ($(".swh-carousel") && $(".swh-carousel").length) carouselComponent();
});


