$(document).ready(function() {
  lang = 'en';
  $('#home .isTooltip').hover(function () {
  	var title = $(this).attr('data-title-' + lang + '');
  	$(this).data('tipText', title).removeAttr('data-title-' + lang + '');
  	$('<p class="tooltipDesc"></p>').text(title).appendTo('body').fadeIn('slow');
  }, function () {
  	$(this).attr('data-title-' + lang + '', $(this).data('tipText'));
  	$('.tooltipDesc').remove();
  }).mousemove(function (e) {
    var right = $(e.currentTarget).hasClass('right'),
        offsetX = 8,
        offsetY = 17;

  	if (typeof(winMobile) != 'undefined') {
  		if (winMobile && winWidth <= 350) {
  			offsetX = 8;
  			offsetY = 2;
  		}
  	}

    if (right) {
      // var width = parseInt($('.tooltipDesc').width(), 10);
      offsetX = -offsetX - 175;
    }

  	var mousex = e.pageX + offsetX;
  	var mousey = e.pageY - offsetY;
  	$('.tooltipDesc').css({
  		top: mousey,
  		left: mousex
  	});
  });
});
