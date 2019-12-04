     $(document).ready(function(){

         
           var wd = $(".sl_wrap li").width();
          var num = $(".sl_wrap li").length;
      
    
    $(".left").click(function(){
            $(".sl_wrap ul").not("animated").animate({"margin-left": -wd+ "px"}, 600, function(){
           $(".sl_wrap li").eq(0).appendTo($(".sl_wrap ul"));
            $(".sl_wrap ul").css("margin-left", "0px");

        });

            });
        
        $(".right").click(function(){
             $(".sl_wrap li").eq(num - 1).prependTo($(".sl_wrap ul"));
                $(".sl_wrap").css("margin-left", -wd + "px");
                $(".sl_wrap").not(":animated").animate({
                    "margin-left": "0px"
                }, 700);
        });

         
     });
     $(document).ready(function(){
        $(document).ready(function(){
        var sc, pg, pg_top;
        $(".page").eq(0).find(".title li").addClass("on");
        $(window).scroll(function(){
           var sc = $(window).scrollTop();
            $(".page").each(function(index){
               pg = $(this).offset();
                if(sc >= pg.top-15){
                    $(this).find(".icon_slide li").addClass("icon_on");
                    $(this).find(".text_wrap").addClass("pp");
                }
            });
        });
        
        
        var win_h = $(window).height();
        $(".page").each(function(index){
           $(this).attr("data-page", win_h*index); 
        });
        
        $(".page").on("mousewheel", function(e){
           //마우스 휠로 한 번 스크롤 할 때 한 페이지씩 스크롤링
            var curPage = parseInt($(this).attr("data-page"));
            if(e.originalEvent.wheelDelta >= 0){
                $("body, html").stop().animate({scrollTop:curPage - win_h}, 700);
                return false;
            } else {
                $("body, html").stop().animate({scrollTop:curPage + win_h}, 700);
                return false;
            }
        });
        
        $(".page_list li button").click(function(){
           var tar = parseInt($(this).attr("data-val"));
            $("body, html").stop().animate({scrollTop:win_h*tar});
            
        });
    }); 
     });