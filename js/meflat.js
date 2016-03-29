$(document).ready(function() {
	// video
	var videoAdded = false;

	function addVideo() {
		if (!videoAdded && $(window).width() > 991) {
			videoAdded = true;
			$("#meerkatVideo").html('<source src="assets/video/meerkat.mp4" type="video/mp4"><source src="assets/video/meerkat.webm" type="video/webm">');
		   $(window).off("resize.addVid");
		}
	}

	function startResize() {
	   $(window).on("resize.addVid",(function() {
	     addVideo();
	   }));
	}

	addVideo();
	if (!videoAdded) startResize();

	/*============================================
	Navigation Functions
	==============================================*/
	if ($(window).scrollTop()===0){
		$('#main-nav').removeClass('scrolled');
	}
	else{
		$('#main-nav').addClass('scrolled');
	}

	$(window).scroll(function(){
		if ($(window).scrollTop()===0){
			$('#main-nav').removeClass('scrolled');
		}
		else{
			$('#main-nav').addClass('scrolled');
		}
	});

	/*============================================
	Project thumbs - Masonry
	==============================================*/
	$(window).load(function(){

		$('#projects-container').css({visibility:'visible'});

		$('#projects-container').masonry({
			itemSelector: '.project-item:not(.filtered)',
			columnWidth:320,
			isFitWidth: true,
			isResizable: true,
			isAnimated: !Modernizr.csstransitions,
			gutterWidth: 25
		});

		scrollSpyRefresh();
		waypointsRefresh();
	});

	/*============================================
	Filter Projects
	==============================================*/
	$('#filter-works a').click(function(e){
		e.preventDefault();

		$('#filter-works li').removeClass('active');
		$(this).parent('li').addClass('active');

		var category = $(this).attr('data-filter');

		$('.project-item').each(function(){
			if($(this).is(category)){
				$(this).removeClass('filtered');
			}
			else{
				$(this).addClass('filtered');
			}

			$('#projects-container').masonry('reload');
		});

		scrollSpyRefresh();
		waypointsRefresh();
	});

	/*============================================
	Project Preview
	==============================================*/
	$('.project-item').click(function(e){
		e.preventDefault();

		var elem = $(this),
			title = elem.find('.project-title').text(),
			descr = elem.find('.project-description').html(),
			slidesHtml = '<ul class="slides">',
			elemDataCont = elem.find('.project-description');

			slides = elem.find('.project-description').data('images').split(',');

		for (var i = 0; i < slides.length; ++i) {
			slidesHtml = slidesHtml + '<li><img src='+slides[i]+' alt=""></li>';
		}

		slidesHtml = slidesHtml + '</ul>';


		$('#project-modal').on('show.bs.modal', function () {
			$(this).find('#hdr-title').text(title);
			$(this).find('#sdbr-title').text(title);
			$(this).find('#project-content').html(descr);
			$(this).find('.screen').addClass('flexslider').html(slidesHtml);

			var category = elemDataCont.data('category');
			if(category){
				if (category.indexOf('Web') !== -1) {
					$('#project-modal .bgImg').attr('src', 'assets/img/projects/chrome.png');
					$('.modal-header .screen').css('top', '10.5%');
				} else {
					$('#project-modal .bgImg').attr('src', 'assets/img/projects/grey.png');
					$('.modal-header .screen').css('top', '0');
				}
				$(this).find('#sdbr-category').show().text(elemDataCont.data('category'));
			}else{$(this).find('#sdbr-category').hide();}

			if(elemDataCont.data('date')){
				$(this).find('#sdbr-date').show().text(elemDataCont.data('date'));
			}else{$(this).find('#sdbr-date').hide();}

			var extLink;
			if(elemDataCont.data('github')){
				extLink = elemDataCont.data('github').split(',');
				$(this).find('#sdbr-github').show().find('a').text(extLink[0]).attr('href',extLink[1]);
			}else{$(this).find('#sdbr-github').hide();}

			if(elemDataCont.data('slides')){
				extLink = elemDataCont.data('slides').split(',');
				$(this).find('#sdbr-slides').show().find('a').text(extLink[0]).attr('href',extLink[1]);
			}else{$(this).find('#sdbr-slides').hide();}

			if(elemDataCont.data('descr')){
				$(this).find('#sdbr-descr').show().text(elemDataCont.data('descr'));
			}else{$(this).find('#sdbr-descr').hide();}

			setTimeout(function(){
				$('.screen.flexslider').flexslider({
					prevText: '<i class="fa fa-angle-left"></i>',
					nextText: '<i class="fa fa-angle-right"></i>',
					slideshowSpeed: 3000,
					animation: 'slide',
					controlNav: false,
					pauseOnAction: false,
					pauseOnHover: true,
					start: function(){
						$('#project-modal .screen')
						.addClass('done')
						.prev('.loader').fadeOut();
					}
				});
			}, 500);
		}).modal();

	});

	$('#project-modal').on('hidden.bs.modal', function () {
		$(this).find('.loader').show();
		$(this).find('.screen')
			.removeClass('flexslider')
			.removeClass('done')
			.html('')
			.flexslider('destroy');
	});


	/*============================================
	ScrollTo Links
	==============================================*/
	$('a.scrollto').click(function(e){
		$('html,body').scrollTo(this.hash, this.hash, {gap:{y:-50},animation:  {easing: 'easeInOutCubic', duration: 1600}});
		e.preventDefault();

		if ($('.navbar-collapse').hasClass('in')){
			$('.navbar-collapse').removeClass('in').addClass('collapse');
		}
	});

	/*============================================
	Contact Form
	==============================================*/

	$(".label_better").label_better({
	  easing: "bounce",
	  offset:5
	});

	/*============================================
	Tooltips
	==============================================*/
	$("[data-toggle='tooltip']").tooltip();

	/*============================================
	Placeholder Detection
	==============================================*/
	if (!Modernizr.input.placeholder) {
		$('#contact-form').addClass('no-placeholder');
	}

	/*============================================
	Scrolling Animations
	==============================================*/
	$('.scrollimation').waypoint(function(){
		$(this).addClass('in');
	},{offset:function(){
			var h = $(window).height();
			var elemh = $(this).outerHeight();
			if ( elemh > h*0.3){
				return h*0.7;
			}else{
				return h - elemh;
			}
		}
	});

	/*============================================
	Resize Functions
	==============================================*/
	$(window).resize(function(){
		scrollSpyRefresh();
		waypointsRefresh();
	});
	/*============================================
	Refresh scrollSpy function
	==============================================*/
	function scrollSpyRefresh(){
		setTimeout(function(){
			$('body').scrollspy('refresh');
		},1000);
	}

	/*============================================
	Refresh waypoints function
	==============================================*/
	function waypointsRefresh(){
		setTimeout(function(){
			$.waypoints('refresh');
		},1000);
	}

});
