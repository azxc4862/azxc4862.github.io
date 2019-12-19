     $(document).ready(function(){
        $(".icon_wrap").click(function(){
            $(".icon_wrap").toggleClass("icon_bar");
            $(".nav_wrap").toggleClass("on");
        });
         
         $(".article:nth-of-type(1) .article_img").hover(function(){
             $(".article:nth-of-type(1) .hover_event").toggleClass("port_on");
         });
         $(".article:nth-of-type(2) .article_img").hover(function(){
             $(".article:nth-of-type(2) .hover_event").toggleClass("port_on");
         });
         $(".article:nth-of-type(3) .article_img").hover(function(){
             $(".article:nth-of-type(3) .hover_event").toggleClass("port_on");
         });
         $(".article:nth-of-type(1) .article_img").click(function(){
             $(".pop_1").fadeIn();
         }); 
         $(".article:nth-of-type(2) .article_img").click(function(){
             $(".pop_2").fadeIn();
         });
         $(".article:nth-of-type(3) .article_img").click(function(){
             $(".pop_3").fadeIn();
         });
             
         $(".pop_close").click(function(){
             $(".pop").fadeOut();
         });


           $(document).ready(function () {
            $("label").click(function () {
                    var th = $(this).attr("for"); 
                    var thId = "." + th; 
                    var scObj = $(thId).offset(); 
                    var scDist = scObj.top; 
                     $(".icon_wrap").toggleClass("icon_bar");
                      $(".nav_wrap").toggleClass("on");

                    $("body, html").not(":animated").animate({
                        "scrollTop": scDist
                    }, 600);
                });
            });
         
//   $(function () {
//    $("html, body").on('mousewheel DOMmouseScroll', function (e) {
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
//            $("#hd > .hd_wrap ul").addClass("hd_pd");
//            $("#hd").addClass("hd_on");
//            
//        };
//        if (delta > 0) {
//            d = true;
//            $("#hd > .hd_wrap ul").removeClass("hd_pd");
//            $("#hd").removeClass("hd_on");
//        }
//
//    });
//
//});

         
         $(document).ready(function () {

    $(window).scroll(function () {
        var scTop = $(window).scrollTop();
        if (scTop >= 100) {;
            $("#hd > .hd_wrap ul").addClass("hd_pd");
            $("#hd").addClass("hd_on");
        } else if (scTop >= 0) {
            $("#hd > .hd_wrap ul").removeClass("hd_pd");
            $("#hd").removeClass("hd_on");
        }
    });

     });
            });
