$(document).ready(function () {

    let header = $(".corona").height() + $(".headerTop").height();


    $(window).scroll(function () {
        var scroll = $(this).scrollTop();
        if (scroll > header) {
            $(".headerFixed").css({
                "top": "0"

            })
        }

        else {
            $(".headerFixed").css({
                "top": "-116px"

            })
        }
    });

    /* menu */
     

    $(".menuOpen ").on("click", function (e) {
        $(".menu").slideDown("slow");
        e.preventDefault();
    });


    /* submenu */


    $(".subMenu__item").each(function (index) {

        // Turn the index value into a reasonable animation delay
        var delay = 0.2 + index * 0.2;

        // Apply the animation delay
        $(this).css("animation-delay", delay + "s")
    });
})