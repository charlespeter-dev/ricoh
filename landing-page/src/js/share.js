import "../../../node_modules/bootstrap/js/src/dropdown";
import Tooltip from "../../../node_modules/bootstrap/js/src/tooltip";

let copyEl = document.querySelector('.copy-link');
let toolTip = new Tooltip(copyEl);

copyEl.addEventListener('click', (e) => {
    let link = location.href;
    navigator.clipboard.writeText(link).then(() => {
        copyEl.setAttribute('title', 'Copied!');
        copyEl.setAttribute('data-bs-original-title', 'Copied!');
        toolTip.show();
    });
});
