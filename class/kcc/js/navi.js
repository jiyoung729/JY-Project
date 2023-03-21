$(function () {
  var browserW = $(window).width();
  // console.log(browserW);

  if (browserW > 1280) {
    $(".mainmenu").on("mouseenter focus", function () {
      $(this).find($(".submenu")).stop().slideDown();
      $(".bg").stop().slideDown();
      $("header").css("background", "#fff");
      $(".top-menu").addClass("on");
      $(".header-bottom").addClass("on");
    });
    $(".mainmenu").on("mouseleave blur", function () {
      $(this).find($(".submenu")).css("display", "none");
      $(".bg").stop().slideUp();
      $("header").css("background", "transparent");
      $(".top-menu").removeClass("on");
      $(".header-bottom").removeClass("on");
    });
  }

  $(".menu_bar").on("click", function () {
    $("nav").addClass("on");
    $(".top-menu-m").addClass("on");
  });
  $("nav > .close").on("click", function () {
    $("nav").removeClass("on");
    $(".top-menu-m").removeClass("on");
  });
  $(".mainmenu > a").on("click", function () {
    // $('.mainmenu').not(this).removeClass('on');
    // $(this).addClass('on');
    $(this).toggleClass("on");
    $("mainmenu:has(a::before)").addClass("on");
    $("mainmenu:has(a::after)").addClass("on");
  });
  $(".sub > a").on("click", function () {
    // $('.sub').not(this).removeClass('on');
    // $(this).addClass('on');
    $(this).toggleClass("on");
  });
  $(".sub > ul a").on("click", function () {
    $(".sub > ul a").not(this).removeClass("on");
    $(this).addClass("on");
    $(this).css("color", "#333");
  });

  $(window).resize(function () {
    var browserW = $(window).width();
    console.log(browserW);

    $(".mainmenu").on("mouseleave blur", function () {
      $(".header-bottom").removeClass("on");
    });

    if (browserW > 1280) {
      $(".mainmenu").on("mouseenter focus", function () {
        $(this).find($(".submenu")).stop().slideDown();
        $(".bg").stop().slideDown();
        $("header").css("background", "#fff");
        $(".top-menu").addClass("on");
        $(".header-bottom").addClass("on");
      });
      $(".mainmenu").on("mouseleave blur", function () {
        $(this).find($(".submenu")).css("display", "none");
        $(".bg").stop().slideUp();
        $("header").css("background", "transparent");
        $(".top-menu").removeClass("on");
        $("header-bottom").removeClass("on");
      });

      $("nav").removeClass("on");
      $(".top-menu-m").removeClass("on");
      $(".mainmenu").removeClass("on");
      $(".sub").removeClass("on");
    } else if (browserW <= 1280) {
      $(".mainmenu, .bg").off("mouseenter");
      $(".mainmenu, .bg").off("mouseleave");

      $("header").removeAttr("style");
      $(".submenu").removeAttr("style");
      $(".bg").removeAttr("style");

      $(".mainmenu > a").on("click", function () {
        // $('.mainmenu').not(this).removeClass('on');
        // $(this).addClass('on');
        $(this).toggleClass("on");
        $("mainmenu:has(a::before)").addClass("on");
        $("mainmenu:has(a::after)").addClass("on");
      });

      $(".sub > a").on("click", function () {
        // $('.sub').not(this).removeClass('on');
        // $(this).addClass('on');
        $(this).toggleClass("on");
      });
    }
  });

  $(window).scroll(function () {
    var browserT = $(window).scrollTop();
    console.log(browserT);
    $("header").addClass("on");
    $("header").removeAttr("style");

    $(".mainmenu").on("mouseleave blur", function () {
      $("header").css("background", "#fff");
    });

    if (browserT == 0) {
      $("header").removeClass("on");

      $(".mainmenu").on("mouseleave blur", function () {
        $("header").css("background", "transparent");
      });
    }
  });
});
