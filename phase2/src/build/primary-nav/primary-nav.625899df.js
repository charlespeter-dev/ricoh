/**
 * attach 'is-desktop' or 'is-mobile' class into <body>
 * based on the screen breakpoint 992px
 */ let $d6d6aa8823aef16c$var$mql = window.matchMedia("(min-width: 992px)");
let $d6d6aa8823aef16c$var$attach = (e)=>{
    if (e.matches) {
        document.body.classList.remove("is-mobile");
        document.body.classList.add("is-desktop");
    } else {
        document.body.classList.remove("is-desktop");
        document.body.classList.add("is-mobile");
    }
};
window.addEventListener("DOMContentLoaded", $d6d6aa8823aef16c$var$attach($d6d6aa8823aef16c$var$mql));
$d6d6aa8823aef16c$var$mql.addEventListener("change", $d6d6aa8823aef16c$var$attach);


