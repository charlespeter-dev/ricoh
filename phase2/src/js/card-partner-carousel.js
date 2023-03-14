import "../../../node_modules/bootstrap/js/src/carousel";

const carousels = document.querySelectorAll('.carousel');

carousels.forEach(function (el) {

    const items = el.querySelectorAll('.carousel-item');

    items.forEach(function (el) {
        const minPerSlide = 4;
        let next = el.nextElementSibling;
        for (var i = 1; i < minPerSlide; i++) {
            if (!next) {
                // wrap carousel by using first child
                next = items[0];
            }
            let cloneChild = next.cloneNode(true);
            el.appendChild(cloneChild.children[0]);
            next = next.nextElementSibling;
        }
    });
});
