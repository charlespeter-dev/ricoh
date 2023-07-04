var $71b86ce7f1059e97$exports = {};
let $71b86ce7f1059e97$var$mql = window.matchMedia("(min-width: 992px)");
let $71b86ce7f1059e97$var$attach = (e)=>{
    if (e.matches) {
        document.body.classList.remove("is-mobile");
        document.body.classList.add("is-desktop");
    } else {
        document.body.classList.remove("is-desktop");
        document.body.classList.add("is-mobile");
    }
};
window.addEventListener("DOMContentLoaded", $71b86ce7f1059e97$var$attach($71b86ce7f1059e97$var$mql));
$71b86ce7f1059e97$var$mql.addEventListener("change", $71b86ce7f1059e97$var$attach);


