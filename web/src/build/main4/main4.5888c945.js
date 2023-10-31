var $fb47da027f49c040$exports = {};
/**
 * attach 'is-desktop' or 'is-mobile' class into <body>
 * based on the screen breakpoint 992px
 */ let $fb47da027f49c040$var$mql = window.matchMedia("(min-width: 992px)");
let $fb47da027f49c040$var$attach = (e)=>{
    if (e.matches) {
        document.body.classList.remove("is-mobile");
        document.body.classList.add("is-desktop");
    } else {
        document.body.classList.remove("is-desktop");
        document.body.classList.add("is-mobile");
    }
};
window.addEventListener("DOMContentLoaded", $fb47da027f49c040$var$attach($fb47da027f49c040$var$mql));
$fb47da027f49c040$var$mql.addEventListener("change", $fb47da027f49c040$var$attach);


