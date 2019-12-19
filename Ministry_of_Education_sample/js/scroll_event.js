
$(function () {
    $("html, body").on('mousewheel DOMmouseScroll', function (e) {
        var e = e.originalEvent;
        delta = 0;
        console.log(e);
        if (e.detail) {
            delta = e.detail * -40;
        } else {
            delta = e.wheelDelta;
        };
        if (delta < 0) {
            d = true;
            $(".dh_top").slideUp();
            $(".desk_header").addClass("sc");
            
        };
        if (delta > 0) {
            d = true;
            $(".dh_top").slideDown();
            $(".desk_header").removeClass("sc");
        }

    });

});