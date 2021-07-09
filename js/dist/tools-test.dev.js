"use strict";

// function to add button reload page it is for test
$(function () {
  "use strict";

  $("body").append("<button class='reload-page'>Reload Page</button>");
  $(".reload-page").css({
    width: "137px",
    color: "#fff",
    backgroundColor: "#bb2d3b",
    border: "10px solid #333",
    borderRadius: "10px",
    padding: "5px 15px",
    position: "fixed",
    bottom: "300px",
    right: "5px"
  });
  $(".reload-page").on("click", function () {
    window.location.reload();
  });
}); // function to open window xxl

$(function () {
  "use strict";

  $("body").append("<button class='window-xxl'>xxl 1400</button>");
  $(".window-xxl").css({
    width: "137px",
    color: "#fff",
    backgroundColor: "#bb2d3b",
    border: "10px solid #333",
    borderRadius: "10px",
    padding: "5px 15px",
    position: "fixed",
    bottom: "60px",
    right: "5px"
  });
  $(".window-xxl").on("click", function () {
    var windowHref = window.location.href;
    window.open(windowHref, "_blank", "width=1400,height=1080,menubar=no,status=no", "true");
  });
}); // function to open window Lg

$(function () {
  "use strict";

  $("body").append("<button class='window-lg'>Lg 1200 </button>");
  $(".window-lg").css({
    width: "137px",
    color: "#fff",
    backgroundColor: "#bb2d3b",
    border: "10px solid #333",
    borderRadius: "10px",
    padding: "5px 15px",
    position: "fixed",
    bottom: "120px",
    right: "5px"
  });
  $(".window-lg").on("click", function () {
    var windowHref = window.location.href;
    window.open(windowHref, "_blank", "width=1200,height=1080,menubar=no,status=no", "true");
  });
}); // function to open window md

$(function () {
  "use strict";

  $("body").append("<button class='window-md'>md 992</button>");
  $(".window-md").css({
    width: "137px",
    color: "#fff",
    backgroundColor: "#bb2d3b",
    border: "10px solid #333",
    borderRadius: "10px",
    padding: "5px 15px",
    position: "fixed",
    bottom: "180px",
    right: "5px"
  });
  $(".window-md").on("click", function () {
    var windowHref = window.location.href;
    window.open(windowHref, "_blank", "width=992,height=1080,menubar=no,status=no", "true");
  });
}); // function to open window sm

$(function () {
  "use strict";

  $("body").append("<button class='window-sm'>sm 768</button>");
  $(".window-sm").css({
    width: "137px",
    color: "#fff",
    backgroundColor: "#bb2d3b",
    border: "10px solid #333",
    borderRadius: "10px",
    padding: "5px 15px",
    position: "fixed",
    bottom: "240px",
    right: "5px"
  });
  $(".window-sm").on("click", function () {
    var windowHref = window.location.href;
    window.open(windowHref, "_blank", "width=768,height=1080,menubar=no,status=no", "true");
  });
}); // function to font Ar

$(function () {
  "use strict";

  var fontAr = document.createElement("link");
  fontAr.href = "https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;600;700&family=Changa:wght@200;300;400;500;600;700;800&family=El+Messiri:wght@400;500;600;700&family=Lateef&family=Markazi+Text:wght@400;500;600;700&family=Mirza:wght@400;500;600;700&family=Scheherazade:wght@400;700&family=Short+Stack&family=Tajawal:wght@200;300;400;500;700;800;900&display=swap";
  document.getElementsByTagName("head")[0].appendChild(fontAr);
  $("body").append("<input list='fontAr' class='fontAr' placeholder='set font Ar'>");
  $("body").append("<datalist id='fontAr'></datalist>");
  $("datalist#fontAr").append("<option value='Cairo, sans-serif'></option>");
  $("datalist#fontAr").append("<option value='DroidKufi-regular'></option>");
  $("datalist#fontAr").append("<option value='Droid Arabic Kufi'></option>");
  $("datalist#fontAr").append("<option value='Short Stack, cursive'></option>");
  $("datalist#fontAr").append("<option value='Tajawal, sans-serif'></option>");
  $("datalist#fontAr").append("<option value='Markazi Text, serif'></option>");
  $("datalist#fontAr").append("<option value='El Messiri, sans-serif'></option>");
  $("datalist#fontAr").append("<option value='Changa, sans-serif'></option>");
  $("datalist#fontAr").append("<option value='Mirza, cursive'></option>");
  $("datalist#fontAr").append("<option value='Lateef, cursive'></option>");
  $("datalist#fontAr").append("<option value='Scheherazade, serif'></option>");
  $(".fontAr").css({
    width: "fit-content",
    fontSize: "13px",
    border: "10px solid #333",
    borderRadius: "10px",
    padding: "5px 5px",
    position: "fixed",
    bottom: "0px",
    left: "320px"
  });
  $("body").append("<button class='fontArBtn'>Test Font</button>");
  $(".fontArBtn").css({
    width: "fit-content",
    backgroundColor: "#bb2d3b",
    fontSize: "13px",
    color: "#fff",
    border: "10px solid #333",
    borderRadius: "10px",
    padding: "5px 5px",
    position: "fixed",
    bottom: "0px",
    left: "490px"
  });
  $(".fontArBtn").on("click", function () {
    var setColorVideo14input1 = $(".fontAr").val();
    $("body").css("fontFamily", setColorVideo14input1);
  });
}); // window size

$(function () {
  $("body").css({});
});