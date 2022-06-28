let copyEl = document.querySelector('.copy-link');
let toolTip = new bootstrap.Tooltip(copyEl);

copyEl.addEventListener('click', (e) => {
    let link = location.href;
    navigator.clipboard.writeText(link).then(() => {
        copyEl.setAttribute('title', 'Copied!');
        copyEl.setAttribute('data-bs-original-title', 'Copied!');
        toolTip.show();
    });
});
