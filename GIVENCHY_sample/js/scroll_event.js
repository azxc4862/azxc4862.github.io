
//$(function () {
//    $("html, body").on('mousewheel DOMmouseScroll ', function (e) {
//        var e = e.originalEvent;
//        delta = 0;
//        console.log(e);
//        if (e.detail) {
//            delta = e.detail * -40;
//        } else {
//            delta = e.wheelDelta;
//        };
//        if (delta < 0) {
//            d = true;
//            $(".hd").slideUp();
//            
//        };
//        if (delta > 0) {
//            d = true;
//            $(".hd").slideDown();
//        }
//
//    });
//
//});

        $(function(){ 
            var lastScrollTop = 0, delta = 15; 
            $(window).scroll(function(event){
                var st = $(this).scrollTop();
                if(Math.abs(lastScrollTop - st) <= delta) 
                    return;
                
                if ((st > lastScrollTop) && (lastScrollTop>0)) {
                    $(".hd").slideUp();
                } else {
                     $(".hd").slideDown();
                }
                 lastScrollTop = st;
            });
    
    });