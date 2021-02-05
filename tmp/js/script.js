"use strict";

(function ($) {
  'use strict';

  var setupGranim = function setupGranim() {
    var granimInstance = new Granim({
      element: '#canvas-image-blending',
      direction: 'top-bottom',
      isPausedWhenNotInView: true,
      states: {
        "default-state": {
          gradients: [['#29323c', '#485563'], ['#FF6B6B', '#556270']],
          transitionSpeed: 7000
        }
      }
    });
  };

  var setupSliderFunction = function setupSliderFunction() {
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
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true
        }
      } // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
      ]
    });
  };

  var videoPlayerClickSetup = function videoPlayerClickSetup() {
    $(".play-button").click(function () {
      var video = $(this).next().get(0);
      video.play();
      $(this).css("visibility", "hidden");
      $(this).next().next().css("visibility", "visible");
      $(this).next().next().next().css("visibility", "visible");
      return false;
    });
    $(".stop-button").click(function () {
      var video = $(this).prev().get(0);
      video.pause();
      video.currentTime = 0;
      video.load();
      $(this).css("visibility", "hidden");
      $('.play-button').css("visibility", "visible");
      return false;
    });
    $("video").bind("pause ended", function () {
      $(".play-button").css("visibility", "visible");
    });
    $(".prev-button, .next-button").click(function () {
      var video = $('.video-player');
      video.each(function () {
        if (this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2) {
          this.pause();
          this.currentTime = 0;
          this.load();
        }
      });
      $('.play-button').css("visibility", "visible");
      return false;
    });
  };

  var scrollToHomeFunction = function scrollToHomeFunction() {
    if (!$('body').hasClass('dove-lander')) {
      return false;
    }

    if ($('body').hasClass('dove-lander')) {
      var scrollbutton = $('.scroll-button-link');
      var scrollbuttonhref = $(scrollbutton).data('link');
      var target = $(scrollbuttonhref);
      $('.scroll-button-link').click(function () {
        $('html, body').animate({
          scrollTop: $(target).offset().top
        }, 500);
        return false;
      });
    }
  }; // Inits the Functions on Doc Ready


  $(document).ready(function () {
    //scrollToHomeFunction();
    //if( !$('video').length ) {
    //    return false;
    //}
    //setupSliderFunction();
    //videoPlayerClickSetup();
    setupGranim();
    Splitting();
  });
})(jQuery);
"use strict";

// Avoid `console` errors in browsers that lack a console.
(function () {
  var method;

  var noop = function noop() {};

  var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'];
  var length = methods.length;
  var console = window.console = window.console || {};

  while (length--) {
    method = methods[length]; // Only stub undefined methods.

    if (!console[method]) {
      console[method] = noop;
    }
  }
})(); // Place any jQuery/helper plugins in here.