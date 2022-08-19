jQuery(document).ready(function ($){
	var configuratorResult = function () {
		$("#config-actions .reset-config").click(function()
		{
			window.location=$(this).attr('reset-link');
		});
		$("#config-actions .edit-config").click(function()
		{
			window.location=$(this).attr('edit-link');
		});
		$("#config-actions .down-img").click(function()
		{
			window.location=$(this).attr('down-img-link');
		});
		$("#config-actions .down-pdf").click(function()
		{
			window.location=$(this).attr('down-pdf-link');
		});
		$("#config-actions .request-a-quote").click(function()
		{
			var configuratorid=$('#configurator-id').val();			
			var configuratordata=$('#request-a-quote-popup-modal form input.configurator-data').val();			
			$('#request-a-quote-popup-modal form .configurator-product-name').val($('#product-displayname').val());
			$('#request-a-quote-popup-modal form .configurator-id').val(configuratorid);
			var modalFormInputs = $('#request-a-quote-popup-modal form input.form-control');
			modalFormInputs.each(function() {
				if (!$(this).parent().hasClass('hidden')) {
					$(this).val('');
				}
			});
			$('#request-a-quote-popup-modal').css('display','block');
			$("#request-a-quote-popup-modal").css('z-index', '1000');
		});
		$("#request-a-quote-popup-modal .btn-close-modal").click(function()
		{
			$('#request-a-quote-popup-modal').css('display','none');
		});
		$("#config-actions .email-pdf").click(function()
		{
			var configuratorid=$('#configurator-id').val();			
			var configuratordata=$('#email-pdf-popup-modal form input.configurator-data').val();
			$('#email-pdf-popup-modal form .configurator-product-name').val($('#product-displayname').val());
			$('#email-pdf-popup-modal form .configurator-id').val(configuratorid);
			$('#email-pdf-popup-modal form input.form-control').val('');
			$('#email-pdf-popup-modal').css('display','block');
			$("#email-pdf-popup-modal").css('z-index', '1000');
		});
		$("#email-pdf-popup-modal .btn-close-modal").click(function()
		{
			$('#email-pdf-popup-modal').css('display','none');
		});
	}
	if($('.jsConfiguratorResult').length) {
		configuratorResult();
	}
});