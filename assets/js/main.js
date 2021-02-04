(function ($) {
    'use strict';

	const setupSliderFunction = function() {

        /**
        *   loop through .your-target to find -- note .your-target is a placeholder same with .your-target-wrapper
        *   target item .your-target-wrapper and bind slick(function) to it
        *   run any slick carousel params inside of function
        **/


			$('.slider-section').slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                nextArrow: $('.next-button'),
  				prevArrow: $('.prev-button'),
                autoplaySpeed: 2500,

                responsive: [
                    {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        arrows: true,
                    }
                    },
                    {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        arrows: true,
                    }
                    },
                    {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: true,
                    }
                    }
                    // You can unslick at a given breakpoint now by adding:
                    // settings: "unslick"
                    // instead of a settings object
                ]
			  });






    };


    const videoPlayerClickSetup = function() {
        $(".play-button").click(function() {
            var video = $(this).next().get(0);
            video.play();

            $(this).css("visibility", "hidden");
            $(this).next().next().css("visibility", "visible");
            $(this).next().next().next().css("visibility", "visible");
            return false;
        });


        $(".stop-button").click(function() {

            var video = $(this).prev().get(0);
            video.pause();
            video.currentTime = 0;
            video.load();

            $(this).css("visibility", "hidden");
            $('.play-button').css("visibility", "visible");
            return false;
        });

        $("video").bind("pause ended", function() {
            $(".play-button").css("visibility", "visible");
        });


        $(".prev-button, .next-button").click(function(){
            var video = $('.video-player');
            video.each(function(){
                if (this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2) {
                    this.pause();
                    this.currentTime = 0;
                    this.load();
                }

            });


            $('.play-button').css("visibility", "visible");
            return false;
        })
    }



    const scrollToHomeFunction = function() {
		if (!$('body').hasClass('dove-lander')){
			return false;
		}
		if ($('body').hasClass('dove-lander')) {
			let scrollbutton = $('.scroll-button-link');
			let scrollbuttonhref = $(scrollbutton).data('link');

			let target = $(scrollbuttonhref);

			$('.scroll-button-link').click(function(){
				$('html, body').animate({
					scrollTop: $( target ).offset().top
				}, 500);
				return false;
			});
		}
	};



	  // Inits the Functions on Doc Ready
	  $(document).ready(function() {
        scrollToHomeFunction();
        if( !$('video').length ) {
            return false;
        }
        setupSliderFunction();
        videoPlayerClickSetup();

	  });

})(jQuery);
