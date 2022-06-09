/**
 * attach 'is_desktop' or 'is_mobile' class into <body>
 * based on the screen breakpoint 992px
 */

let mql = window.matchMedia("(min-width: 992px)");

let attach = (e) => {
    if (e.matches) {
        document.body.classList.remove('is_mobile');
        document.body.classList.add('is_desktop');
    }
    else {
        document.body.classList.remove('is_desktop');
        document.body.classList.add('is_mobile');
    }
}

window.addEventListener('DOMContentLoaded', attach(mql));
mql.addEventListener('change', attach);