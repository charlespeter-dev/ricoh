jQuery(document).ready(function($) {
	$('[data-toggle="popover"]').popover();
	$('.modal').on('show.bs.modal',function(e){
		$('html').addClass('modal-open');
	});

	$('.modal').on('hide.bs.modal',function(e){
		$('html').removeClass('modal-open');
	});
});