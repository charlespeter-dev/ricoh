
$(() => {

    /**
     * multi selection helper
     */

    $('#area-of-expertise, #value-propositions').multiselect({
        templates: {
            button: '<div class="multiselect dropdown-toggle form-select" data-bs-toggle="dropdown">&mdash; Please Select &mdash;</div>'
        },
        onChange: (option, checked) => {
            let id = option[0].parentElement.id;
            let selectedOptions = $(`#${id} option:selected`);
            let ul = $(`#${id}`).parent().siblings('ul');

            if (selectedOptions.length > 0) {

                let tpl = '';
                selectedOptions.each((i, el) => {
                    tpl += `<li class="list-group-item active">${el.value}</li>`;
                });

                ul.html(tpl);
            }
            else {
                ul.html('');
            }
        }
    });

    /**
     * show/hide 'other' option value
     */

    $(document).on('change', '#account-type, #industry', (e) => {

        let el = e.target;
        let ffloat = $(el).siblings('.form-floating');

        if (el.value.toLowerCase() == 'other') {
            ffloat.removeClass('d-none');
        }
        else {
            ffloat.addClass('d-none');
            ffloat.find('input').val('')
        }
    });
});

