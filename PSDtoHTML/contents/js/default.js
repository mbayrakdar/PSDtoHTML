$(document).ready(function () {
    $("#btn-photography").click(function () {
        $("#div3-photography-image").show();
        $("#btn-photography").addClass("active");
        $("#btn-design").removeClass("active");
        $("#btn-print").removeClass("active");
        $("#div3-design-image").hide();
        $("#div3-print-image").hide();
    });

    $("#btn-design").click(function () {
        $("#div3-design-image").show();
        $("#btn-design").addClass("active");
        $("#btn-photography").removeClass("active");
        $("#btn-print").removeClass("active");
        $("#div3-photography-image").hide();
        $("#div3-print-image").hide();
    });

    $("#btn-print").click(function () {
        $("#div3-print-image").show();
        $("#btn-print").addClass("active");
        $("#btn-design").removeClass("active");
        $("#btn-photography").removeClass("active");
        $("#div3-design-image").hide();
        $("#div3-photography-image").hide();
    });

    $("#btn-seeallclients").click(function () {
        if ($("#btn-seeallclients").text() == ("See all client  ")) {
            $(".div5-image-other-clients").show();
            $("#btn-seeallclients").html("Show some client  <i class='fas fa-arrow-left'></i>");
        }
        else {
            $(".div5-image-other-clients").hide();
            $("#btn-seeallclients").html("See all client  <i class='fas fa-arrow-right'></i>");
        }

    });

    $("#home").click(function () {
        $("html,body").animate({ scrollTop: $("#div-1").offset().top }, "slow");
    });

    $("#whatwedo").click(function () {
        $("html,body").animate({ scrollTop: $("#div-2").offset().top }, "slow");
    });

    $("#testimonial").click(function () {
        $("html,body").animate({ scrollTop: $("#div-4").offset().top }, "slow");
    });

    $("#contactus").click(function () {
        $("html,body").animate({ scrollTop: $("#div-7").offset().top }, "slow");
    });


    $(window).scroll(function () {
        if ($(window).scrollTop() > 500) {
            $("#btn-backtotap").show();
        } else {
            $("#btn-backtotap").hide();
        }
    });

    $("#btn-backtotap").on("click", function (e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });


    $("#btn-scrolldown").click(function () {
        $("html,body").animate({ scrollTop: $("#div-7").offset().top }, "slow");
    });
});
