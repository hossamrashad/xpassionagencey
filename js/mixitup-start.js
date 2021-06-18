/*jslint plusplus: true, evil: true */
// jslint plusplus: true for error for ++
// evil: true for error document.write

/*global console , alert , prompt , confirm, $ , document, write, ADSAFE, report, jslint, bitwise, node*/

/*property charAt, slicexs*/

/*jslint browser: true */
/*global window */

$(document).ready(function () {

  // mixitup
  var mixer = mixitup(".portfolio-item", {
    animation: {
      duration: 300,
      effectsOut: "fade translateX(-100%)",
    },
  });
});