$(document).ready(function() {
	var contactForm = $('#contact-form');
	contactForm.submit(function() {
		var buttonForm  = contactForm.find('button'),
				buttonWidth = buttonForm.width();

		var buttonCopy = buttonForm.html(),
			errorMessage = buttonForm.data('error-message'),
			sendingMessage = buttonForm.data('sending-message'),
			okMessage = buttonForm.data('ok-message'),
			hasError = false;

			buttonForm.width(buttonWidth);
			contactForm.find('.error-message').remove();

		$('.requiredField').each(function() {
			if($.trim($(this).val()) == '') {
				var errorText = $(this).data('error-empty');
				$(this).parents('.field-wrap').append('<span class="error-message" style="display:none;">'+errorText+'.</span>').find('.error-message').fadeIn('fast');
				$(this).addClass('inputError');
				hasError = true;
			} else if($(this).is("input[type='email']") || $(this).attr('name')==='email') {
				var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
				if(!emailReg.test($.trim($(this).val()))) {
					var invalidEmail = $(this).data('error-invalid');
					$(this).parents('.field-wrap').append('<span class="error-message" style="display:none;">'+invalidEmail+'.</span>').find('.error-message').fadeIn('fast');
					$(this).addClass('inputError');
					hasError = true;
				}
			} else if($(this).attr('name') === 'check') {
				if($.trim($(this).val().toLowerCase()) !== 'firefox') {
					var invalidAnswer = $(this).data('error-invalid');
					$(this).parents('.field-wrap').append('<span class="error-message" style="display:none;">'+invalidAnswer+'.</span>').find('.error-message').fadeIn('fast');
					$(this).addClass('inputError');
					hasError = true;
				}
			}
		});

		if(hasError) {
			buttonForm.html('<i class="fa fa-times"></i>'+errorMessage);
			setTimeout(function(){
				buttonForm.html(buttonCopy);
				buttonForm.width('auto');
			},2000);
		}
		else {
			buttonForm.html('<i class="fa fa-spinner fa-spin"></i>'+sendingMessage);

			var formInput = $(this).serialize();
			$.post($(this).attr('action'),formInput, function(data){
				buttonForm.html('<i class="fa fa-check"></i>'+okMessage);
				buttonForm.attr('disabled', 'disabled');
			});
		}

		return false;
	});
});
