
        $(document).ready(function(){
           var sub1 = $("#LtB > ul > li:nth-of-type(1)");
           var sub2 = $("#LtB > ul > li:nth-of-type(2)"); 
           var sub3 = $("#LtB > ul > li:nth-of-type(3)"); 
           var sub4 = $("#LtB > ul > li:nth-of-type(4)");
           var sub5 = $("#LtB > ul > li:nth-of-type(5)");
           var sub6 = $("#LtB > ul > li:nth-of-type(6)");
            
            $(sub1).click(function(){
                $(".RtBWrap > li").removeClass("rtb_on");
                $("#LtB > ul > li").removeClass("active");
               $(".rtb01").addClass("rtb_on");
                $(sub1).addClass("active");
            });
            $(sub2).click(function(){
                $(".RtBWrap > li").removeClass("rtb_on");
                $("#LtB > ul > li").removeClass("active");
               $(".rtb02").addClass("rtb_on");
                $(sub2).addClass("active");
            });
            $(sub3).click(function(){
                $(".RtBWrap > li").removeClass("rtb_on");
                $("#LtB > ul > li").removeClass("active");
               $(".rtb03").addClass("rtb_on");
                $(sub3).addClass("active");
            });
            $(sub4).click(function(){
                $(".RtBWrap > li").removeClass("rtb_on");
                $("#LtB > ul > li").removeClass("active");
               $(".rtb04").addClass("rtb_on");
                $(sub4).addClass("active");
            });
            $(sub5).click(function(){
                $(".RtBWrap > li").removeClass("rtb_on");
                $("#LtB > ul > li").removeClass("active");
               $(".rtb05").addClass("rtb_on");
                $(sub5).addClass("active");
            });
            $(sub6).click(function(){
                $(".RtBWrap > li").removeClass("rtb_on");
                $("#LtB > ul > li").removeClass("active");
               $(".rtb06").addClass("rtb_on");
                $(sub6).addClass("active");
            });
            
            
            
//            서브메뉴 버튼
            $(".menu_btn").click(function(){
                $(".LeftNavBar").fadeIn(300);
            });
            $(".MenuClose").click(function(){
                $(".LeftNavBar").fadeOut(300);
            });
//            서브메뉴버튼 끝
//            서치메뉴 버튼 
            $(".surch_btn").click(function(){
               $(".mo_serchBar").fadeIn(300); 
            });
            $(".top_area > a > span").click(function(){
                $(".mo_serchBar").fadeOut(300);
            });
//            서치메뉴 버튼 끝
            
            var clk1 = $(".rtb01 > div:nth-of-type(1)");
            var one = 0;
            $(".RtBWrap > li > div").click(function(){
            $(this).children($(".rtb_dip")).toggleClass("sub_open"); 
            });
            
            $("#gnb li:nth-of-type(1) a").hover(function(){
            $(".desk_sub").addClass("sub_hover");
            $(".dpn1").removeClass("sbon");
            $(".sdb1").toggleClass("sbon");
            });
            
             $("#gnb li:nth-of-type(2) a").hover(function(){
            $(".desk_sub").addClass("sub_hover");
            $(".dpn1").removeClass("sbon");
            $(".sdb2").toggleClass("sbon");
            });
            
            $("#gnb li:nth-of-type(3) a").hover(function(){
            $(".desk_sub").addClass("sub_hover");
            $(".dpn1").removeClass("sbon");
            $(".sdb3").toggleClass("sbon");
            });
            
            $("#gnb li:nth-of-type(4) a").hover(function(){
            $(".desk_sub").addClass("sub_hover");
            $(".dpn1").removeClass("sbon");
            $(".sdb4").toggleClass("sbon");
            });
            
            $("#gnb li:nth-of-type(5) a").hover(function(){
            $(".desk_sub").addClass("sub_hover");
            $(".dpn1").removeClass("sbon");
            $(".sdb5").toggleClass("sbon");
            });
            
            $("#gnb li:nth-of-type(6) a").hover(function(){
            $(".desk_sub").addClass("sub_hover");
            $(".dpn1").removeClass("sbon");
            $(".sdb6").toggleClass("sbon");
            });
            
          
            
            
            $(".desk_header").mouseleave(function(){
            $(".desk_sub").removeClass("sub_hover");
            $(".dpn1").removeClass("sbon");
            });



            
        });
        
