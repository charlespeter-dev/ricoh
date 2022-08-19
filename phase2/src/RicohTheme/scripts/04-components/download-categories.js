jQuery(document).ready(function ($) {
    var downloadcategories = function () {
        $('.dowload-link-selector').on('change', function () {
            if (this.value != '') {
                window.open(this.value, '_blank');
            }
        });

    };
    if ($('.jsDownloadCategories').length) {
        downloadcategories();
    }

    window.initDropdowns($('.dowload-link-selector'));
});