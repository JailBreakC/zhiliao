$(function() {

	$('.book-page .contact .checkout').click(function() {
		$(this).hide().parent().find('.details').show();
	});

	$('.manage-page .show-books').click(function() {
		$('.manage-page .show-links').removeClass('btn-primary');
		$(this).addClass('btn-primary');
		$('.net-books').hide();
		$('.books').show();
	})
	$('.manage-page .show-links').click(function() {
		$('.manage-page .show-books').removeClass('btn-primary');
		$(this).addClass('btn-primary');
		$('.books').hide();
		$('.net-books').show();
	})
	$('input:radio[name="type"]').on('change', function() {
		console.log($('#J_post_book').serialize());

		$('#J_post_book .form-control').attr('disabled', 'disabled');
		$(this).parents('.row').find('.form-control').removeAttr('disabled');
	});
});