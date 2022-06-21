import "../../../node_modules/bootstrap/js/src/carousel"


/**
 * @link https://getbootstrap.com/docs/5.1/components/carousel/#events
 * 
 * - get the hidden caption
 * - copy to another visible outside container
 */

let swhCarousel = document.getElementById('swh-carousel');
let visibleCaption = document.querySelector('.visible-caption');

swhCarousel.addEventListener('slide.bs.carousel', (e) => {
    let activeElement = e.relatedTarget;
    let caption = activeElement.querySelector('.carousel-caption');
    visibleCaption.innerHTML = caption.innerHTML.trim();
});

/**
 * on document load, get the first caption, put it in the Visible Caption container
 */

document.addEventListener('DOMContentLoaded', () => {
    let firstCaption = document.querySelector('.carousel-caption');
    visibleCaption.innerHTML = firstCaption.innerHTML.trim();
});

