/**
 * attach 'is-desktop' or 'is-mobile' class into <body>
 * based on the screen breakpoint 992px
 */ let $33bdfc3716ea5d10$var$mql = window.matchMedia("(min-width: 992px)");
let $33bdfc3716ea5d10$var$attach = (e)=>{
    if (e.matches) {
        document.body.classList.remove("is-mobile");
        document.body.classList.add("is-desktop");
    } else {
        document.body.classList.remove("is-desktop");
        document.body.classList.add("is-mobile");
    }
};
window.addEventListener("DOMContentLoaded", $33bdfc3716ea5d10$var$attach($33bdfc3716ea5d10$var$mql));
$33bdfc3716ea5d10$var$mql.addEventListener("change", $33bdfc3716ea5d10$var$attach);


//# sourceMappingURL=back-to-top.59280573.js.map
