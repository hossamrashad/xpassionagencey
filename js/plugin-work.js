/*jslint plusplus: true, evil: true */
// jslint plusplus: true for error for ++
// evil: true for error document.write

/*global console , alert , prompt , $ , document, write, ADSAFE, report, jslint, bitwise, node*/

/*property charAt, slicexs*/

/*jslint browser: true */
/*global window */

/**
 * Wow
 *
 * Owl
 *
 * magnific
 *
 * snake
 *
 * show and hide box
 *
 * gmaps
 *
 * FitText
 *
 * nivo slide
 *
 * mixitup
 *
 * countTo
 *
 * typed js
 *
 *
 *
 *
 *
 */

// $(document).ready(function () {
//   "use strict";

// nice scroll
// $(function () {
//   $("html").niceScroll({
//     cursorcolor: "#ecf0f1",
//     cursorwidth: "12px",
//     cursorborder: "3px solid #34495e",
//     cursorborderradius: "10px",
//     scrollspeed: "60",
//   });
// });

// });

// circle
// $(function () {
//   $(".circlechart").circlechart();
// });
// });

// form validateMini
// $("form").validateMini({
//   validates: {
//     strong: (params, value) => {
//       return (
//         /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/.test(value) ||
//         "A Strong Password Required"
//       );
//     },
//   },
// });

// background move
// $(document).ready(function () {
//   "use strict";
//   $(".jq-backmove").backgroundMove({
//     movementStrength: "50",
//   });
// });

// window.onload = (function () {
$(document).ready(function () {
  "use strict";

  // wow
  new WOW().init();

  // owl
  $(".our-clients .owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });

  // mousewheel owl-carousel
  $(".owl-carousel").on("mousewheel", ".owl-stage", function (e) {
    if (e.deltaY > 0) {
      $(".owl-carousel").trigger("next.owl");
    } else {
      $(".owl-carousel").trigger("prev.owl");
    }
    e.preventDefault();
  });

  // magnific
  $(".jq-magnific-image").magnificPopup({
    type: "image",
  });

  $(".jq-magnific-gallery").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  $(".jq-magnific-video").magnificPopup({
    type: "iframe",
  });

  // snake
  $(".jq-snake").snakeify({
    speed: 200,
  });

  // show and hide box
  $(function () {
    $(".jq-show-hide-box").expandable({
      height: 375,
      expand_responsive: 768,
    });
  });

  // gmaps
  var map = new GMaps({ el: ".jq-map", lat: 30.039977, lng: 31.219695 });

  // FitText
  $(".jq-fittext").fitText(1.2, { minFontSize: "20px", maxFontSize: "30px" });

  // nivo slide
  $(".slider-active").nivoSlider({
    // points
    controlNav: true,
    // angle left & right
    directionNav: true,
    randomStart: true,
    controlNavThumbs: false,
    animSpeed: 500,
    pauseTime: 5000,
    pauseOnHover: false,
    manualAdvance: false,
    prevText: '<i class="fas fa-angle-left"></i>',
    nextText: '<i class="fas fa-angle-right"></i>',
    slices: 15,
    boxCols: 8,
    boxRows: 4,

    // effect: "random",

    // startSlide: 0,

    // beforeChange: function () {},
    // afterChange: function () {},
    // slideshowEnd: function () {},
    // lastSlide: function () {},
    // afterLoad: function () {},
  });

  // mixitup
  // var mixer = mixitup(".portfolio-item", {
  //   animation: {
  //     duration: 300,
  //     effectsOut: "fade translateX(-100%)",
  //   },
  // });

  // countTo
  $(".jq-countTo-245").countTo({
    from: 0,
    to: 245,
    speed: 5000,
    refreshInterval: 50,
  });
  $(".jq-countTo-491").countTo({
    from: 0,
    to: 491,
    speed: 7500,
    refreshInterval: 50,
  });
  $(".jq-countTo-1090").countTo({
    from: 0,
    to: 1090,
    speed: 9000,
    refreshInterval: 50,
  });
  $(".jq-countTo-1790").countTo({
    from: 0,
    to: 1790,
    speed: 12000,
    refreshInterval: 50,
  });
  
});
// end


