/*jslint plusplus: true, evil: true */
// jslint plusplus: true for error for ++
// evil: true for error document.write

/*global console , alert , prompt , confirm, $ , document, write, ADSAFE, report, jslint, bitwise, node*/

/*property charAt, slicexs*/

/*jslint browser: true */
/*global window */



// background move
$(document).ready(function () {
    "use strict";
    $(".jq-backmove").backgroundMove({
      movementStrength: "50",
    });
  });


/* padding navbar height */


$(function () {
    "use strict";
  
    $("body, .paddingNavbarHeight").css("paddingTop", $(".navbar").innerHeight());
    // console.log($(".navbar").innerHeight());
  });

  // typed js
  $(function () {
    "use strict";

    var typed = new Typed(".jq-typed-page-about", {
      // Waits 1000ms after typing "First"
      strings: [
        "اكس باشون شركة تصنع قصص نجاح للشركات الصغيرة والكبيرة .",
        " تقدم تكنولوجيا معلومات ذات مستوى عالمي . ",
        "وكالة رقمية للاستشارات التسويقية وتصميم المواقع الكترونية",
      ],
      typeSpeed: 100,
      startDelay: 500,
      backDelay: 1000,
      loop: true,
      // loopCount:3, == Number of loop
      loopCount: false,
      cursorChar: " ",
      showCursor: true,
    });
  });