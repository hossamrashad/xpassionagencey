/*jslint plusplus: true, evil: true */
// jslint plusplus: true for error for ++
// evil: true for error document.write

/*global console , alert , prompt , $ , document, write, ADSAFE, report, jslint, bitwise, node*/

/*property charAt, slicexs*/

/*jslint browser: true */
/*global window */

/**
 *
 * Window Height
 *
 * Window Height / 2
 *
 * fixed menu
 *
 * button scroll to top
 *
 *
 *
 *
 *
 * menu-Plus
 *
 * jq-box-read-more
 */

/* Window Height */
$(function() {
    "use strict";
    var windowH = $(window).height();
    $(".jq-window-height").height(windowH);

    $(window).resize(function() {
        $(".jq-window-height").height(windowH);
    });
});
$(function() {
    "use strict";
    // windowHeight-middle
    var windowH = $(window).height();
    $(".jq-window-height-2").height(windowH / 2);
    $(window).resize(function() {
        $(".jq-window-height-2").height(windowH / 2);
    });
});

// fixed menu
$(document).ready(function() {
    "use strict";
    $(".fixed-menu-normal .fa-bars").on("click", function() {
        $(this).parent(".fixed-menu-normal").toggleClass("is-visible");
        if ($(this).parent(".fixed-menu-normal").hasClass("is-visible")) {
            $(this).parent(".fixed-menu-normal").animate({
                    right: 0,
                },
                300
            );
        } else {
            $(this).parent(".fixed-menu-normal").animate({
                    right: -150,
                },
                300
            );
        }
    });
    $(".fixed-menu-padding-body .fa-bars").on("click", function() {
        $(this).parent(".fixed-menu-padding-body").toggleClass("is-visible");
        if ($(this).parent(".fixed-menu-padding-body").hasClass("is-visible")) {
            $(this).parent(".fixed-menu-padding-body").animate({
                    right: 0,
                },
                300
            );
            $("body").animate({
                    paddingRight: "150px",
                },
                300
            );
        } else {
            $(this).parent(".fixed-menu-padding-body").animate({
                    right: -150,
                },
                300
            );
            $("body").animate({
                    paddingRight: 0,
                },
                300
            );
        }
    });

    // button scroll to top

    $(window).scroll(function() {
        var buttonScroll = $(".scroll-to-top");
        if ($(window).scrollTop() >= 500) {
            if (buttonScroll.is(":hidden")) {
                buttonScroll.fadeIn(400);
            }
        } else {
            buttonScroll.fadeOut(400);
        }
    });
    $(".scroll-to-top").click(function(e) {
        e.preventDefault();
        $("html, body").animate({
                scrollTop: 0,
            },
            1000
        );
    });

    // start section loading
    $(".loading .spinner").fadeOut(2000, function() {
        $(this)
            .parent()
            .fadeOut(2000, function() {
                $(this).remove();
            });
    });

    // start PRELOADER
    (function() {
        $(window).ready(function() {
            $("#preloader").fadeOut(3000);
        });
    })();

    // start section loading
    $(".loading-parent .loading-child").fadeOut(2000, function() {
        $(this)
            .parent()
            .fadeOut(2000, function() {
                $(this).remove();
            });
    });

    // start section loading 3
    $(".loading-parent-3 .loader-child").fadeOut(2000, function() {
        $(this)
            .parent()
            .fadeOut(2000, function() {
                $(this).remove();
            });
    });

    // start section loading 4
    $(".loading-parent-4 .loader-child").fadeOut(2000, function() {
        $(this)
            .parent()
            .fadeOut(2000, function() {
                $(this).remove();
            });
    });

    // start section loading 5
    $(".loading-parent-5 .loader-child").fadeOut(2000, function() {
        $(this)
            .parent()
            .fadeOut(2000, function() {
                $(this).remove();
            });
    });

    // Popup
    $(document).ready(function() {
        "use strict";

        $(".btn-show-popup").click(function() {
            $($(this).data("popup")).fadeIn();
        });

        $(".popup").click(function() {
            $(this).fadeOut();
        });

        $(".popup .inner").click(function(e) {
            e.stopPropagation();
        });

        $(".popup .close").click(function(e) {
            e.preventDefault();

            $(this).parentsUntil(".popup").parent().fadeOut();
        });

        $(document).keydown(function(e) {
            if (e.keyCode == 27) {
                $(".popup").fadeOut();
            }
        });
    });
    // show-parent-popup-chat
    $(document).ready(function() {
        "use strict";

        $(".btn-show-popup").click(function() {
            $($(this).data("popup-chat")).fadeIn();
        });

        $(".popup-chat").click(function() {
            $(this).fadeOut();
        });

        $(".popup-chat .inner").click(function(e) {
            e.stopPropagation();
        });

        $(".popup-chat .close").click(function(e) {
            e.preventDefault();

            $(this).parentsUntil(".popup-chat").parent().fadeOut();
        });

        $(document).keydown(function(e) {
            if (e.keyCode == 27) {
                $(".popup-chat").fadeOut();
            }
        });
    });

    // navbar background color
    $(window).scroll(function() {
        $("nav").toggleClass("css-nav-scroll", $(this).scrollTop() > 100);
    });

    // dynamic tabs
    $(".tabs-list li").on("click", function() {
        $(this).addClass("active").siblings().removeClass("active");

        //console.log($(this).data("content"));

        $(".content-list > div").hide();

        $($(this).data("content")).fadeIn();
    });

    // section box haver
    $(document).on(
        "mouseover",
        ".css-section-haver-box-parent .column",
        function() {
            "use strict";
            $(this).addClass("active").siblings().removeClass("active");
        }
    );
});

// menu-Plus
function openMenu() {
    "use strict";
    const menu = document.querySelector(".menu-Plus");

    menu.classList.toggle("open");
}

// jq-box-read-more
function readmore() {
    "use strict";
    var blur = document.getElementById("jq-box-read-more");
    blur.classList.toggle("activeShow");
    // Show Popup
    var popupReadMore = document.getElementById("css-popup-box-read-more");
    popupReadMore.classList.toggle("activeShow");
}

// navbar change color
// window.addEventListener("scroll", function() {
//     // var windowH = $(window).height();
//     var nav = this.document.querySelector("nav");
//     var windowPosition = this.window.scrollY > 200;
//     nav.classList.toggle("css-nav-change-color", windowPosition);
// });

/* input direction */
$(function() {
    "use strict";

    $(".auto-direction").on("keyup", function() {
        if ($(this).val().charCodeAt(0) < 200) {
            $(this).css("direction", "ltr");
        } else {
            $(this).css("direction", "rtl");
        }
    });
});

//  Options website

// fixed menu
$(document).ready(function() {
    "use strict";
    $(".fixed-menu-options .fa-bars").on("click", function() {
        $(this).parent(".fixed-menu-options").toggleClass("is-visible");
        if ($(this).parent(".fixed-menu-options").hasClass("is-visible")) {
            $(this).parent(".fixed-menu-options").animate({
                    left: 0,
                },
                300
            );
        } else {
            $(this).parent(".fixed-menu-options").animate({
                    left: -250,
                },
                300
            );
        }
    });
    $(".fixed-menu-options-padding-body .fa-bars").on("click", function() {
        $(this)
            .parent(".fixed-menu-options-padding-body")
            .toggleClass("is-visible");
        if (
            $(this).parent(".fixed-menu-options-padding-body").hasClass("is-visible")
        ) {
            $(this).parent(".fixed-menu-options-padding-body").animate({
                    left: 0,
                },
                300
            );
            $("body").animate({
                    paddingLeft: "150px",
                },
                300
            );
        } else {
            $(this).parent(".fixed-menu-options-padding-body").animate({
                    left: -250,
                },
                300
            );
            $("body").animate({
                    paddingLeft: 0,
                },
                300
            );
        }
    });

    // button scroll to top

    $(window).scroll(function() {
        var buttonScroll = $(".scroll-to-top");
        if ($(window).scrollTop() >= 500) {
            if (buttonScroll.is(":hidden")) {
                buttonScroll.fadeIn(400);
            }
        } else {
            buttonScroll.fadeOut(400);
        }
    });
    $(".scroll-to-top").click(function(e) {
        e.preventDefault();
        $("html, body").animate({
                scrollTop: 0,
            },
            1000
        );
    });

    // start section loading
    $(".loading .spinner").fadeOut(2000, function() {
        $(this)
            .parent()
            .fadeOut(2000, function() {
                $(this).remove();
            });
    });

    // start PRELOADER
    (function() {
        $(window).ready(function() {
            $("#preloader").fadeOut(3000);
        });
    })();

    // start section loading
    $(".loading-parent .loading-child").fadeOut(2000, function() {
        $(this)
            .parent()
            .fadeOut(2000, function() {
                $(this).remove();
            });
    });

    // start section loading 3
    $(".loading-parent-3 .loader-child").fadeOut(2000, function() {
        $(this)
            .parent()
            .fadeOut(2000, function() {
                $(this).remove();
            });
    });

    // start section loading 4
    $(".loading-parent-4 .loader-child").fadeOut(2000, function() {
        $(this)
            .parent()
            .fadeOut(2000, function() {
                $(this).remove();
            });
    });

    // start section loading 5
    $(".loading-parent-5 .loader-child").fadeOut(2000, function() {
        $(this)
            .parent()
            .fadeOut(2000, function() {
                $(this).remove();
            });
    });

    // Popup
    $(document).ready(function() {
        "use strict";

        $(".btn-show-popup").click(function() {
            $($(this).data("popup")).fadeIn();
        });

        $(".popup").click(function() {
            $(this).fadeOut();
        });

        $(".popup .inner").click(function(e) {
            e.stopPropagation();
        });

        $(".popup .close").click(function(e) {
            e.preventDefault();

            $(this).parentsUntil(".popup").parent().fadeOut();
        });

        $(document).keydown(function(e) {
            if (e.keyCode == 27) {
                $(".popup").fadeOut();
            }
        });
    });

    // navbar background color
    $(window).scroll(function() {
        $("nav").toggleClass("css-nav-scroll", $(this).scrollTop() > 100);
    });

    // dynamic tabs
    $(".tabs-list li").on("click", function() {
        $(this).addClass("active").siblings().removeClass("active");

        //console.log($(this).data("content"));

        $(".content-list > div").hide();

        $($(this).data("content")).fadeIn();
    });

    // section box haver
    $(document).on(
        "mouseover",
        ".css-section-haver-box-parent .column",
        function() {
            "use strict";
            $(this).addClass("active").siblings().removeClass("active");
        }
    );
});

// change all color & background color
var checkbox = document.querySelector("input[name=theme]");
checkbox.addEventListener("change", function() {
    if (this.checked) {
        trans();
        document.documentElement.setAttribute("data-theme", "dark");
    } else {
        trans();
        document.documentElement.setAttribute("data-theme", "light");
    }
});
let trans = () => {
    document.documentElement.classList.add("transition");
    window.setTimeout(() => {
        document.documentElement.classList.remove("transition");
    }, 1000);
};

// function to font Ar
$(function() {
    "use strict";
    var fontAr = document.createElement("link");
    fontAr.href =
        "https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;600;700&family=Changa:wght@200;300;400;500;600;700;800&family=El+Messiri:wght@400;500;600;700&family=Lateef&family=Markazi+Text:wght@400;500;600;700&family=Mirza:wght@400;500;600;700&family=Scheherazade:wght@400;700&family=Short+Stack&family=Tajawal:wght@200;300;400;500;700;800;900&display=swap";
    document.getElementsByTagName("head")[0].appendChild(fontAr);
    $(".fontArBtnOptions").on("click", function() {
        var setColorVideo14input1 = $(".fontArOptions").val();
        $("body").css("fontFamily", setColorVideo14input1);
    });
});

var className = document.getElementById("14559");



// ! Rovan Hossam Rashad

// // Rovan Hossam Rashad

// ? Rovan Hossam Rashad

// * Rovan Hossam Rashad

// todo Rovan Hossam Rashad

// Rovan Hossam Rashad

// explain: Rovan Hossam Rashad

// ++ explain: Rovan Hossam Rashad

// -- explain: Rovan Hossam Rashad

// = explain: Rovan Hossam Rashad