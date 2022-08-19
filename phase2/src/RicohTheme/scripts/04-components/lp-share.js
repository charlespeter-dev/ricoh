/* Show Dropdown */
let dropdownToggle = document.querySelector('.lp-share .dropdown-custom-toggle');
let dropdownMenu = document.querySelector('.lp-share .dropdown-custom-menu');
let dropdownEl = document.querySelector('.lp-share .dropdown-custom');

if (dropdownToggle) {
    dropdownToggle.addEventListener('click', function () {
        this.nextElementSibling.classList.toggle('open');

        if (dropdownMenu.classList.contains('open')) {
            document.addEventListener("click", (event) => {

                const isClickInside = dropdownEl.contains(event.target);

                if (!isClickInside) {
                    dropdownMenu.classList.remove('open');
                }
            });
        }
    });
}

// /* Copy Link To Clipboard */
let copyButton = document.querySelector('.lp-share .copy-link');

if (copyButton) {
    copyButton.addEventListener('click', function () {
        let titleOK = this.getAttribute('title-ok');
    
        var inputc = this.appendChild(document.createElement("input"));
        inputc.value = window.location.href;
        inputc.focus();
        inputc.select();
        document.execCommand('copy');
        inputc.parentNode.removeChild(inputc);
    
        this.setAttribute('tooltip', titleOK);
    })
}
