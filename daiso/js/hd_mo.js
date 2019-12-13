     $(document).ready(function(){
         $(".menu_icon").click(function(){
             $(".menu_icon").toggleClass("ck");
             $(".sub_menu").toggleClass("s_close");
             $(".sub_back").toggleClass("on");
         });
         
         $(".season_item:nth-of-type(1)").click(function(){
             $(".sub_back").toggleClass("on");
               $(".pop_item1").toggleClass("pop_on");   
         });
         $(".season_item:nth-of-type(2)").click(function(){
             $(".sub_back").toggleClass("on");
               $(".pop_item2").toggleClass("pop_on");   
         });
         $(".season_item:nth-of-type(3)").click(function(){
             $(".sub_back").toggleClass("on");
               $(".pop_item3").toggleClass("pop_on");   
         });
         $(".season_item:nth-of-type(4)").click(function(){
             $(".sub_back").toggleClass("on");
               $(".pop_item4").toggleClass("pop_on");   
         });
         $(".season_item:nth-of-type(5)").click(function(){
             $(".sub_back").toggleClass("on");
               $(".pop_item5").toggleClass("pop_on");   
         });
         $(".season_pop_close").click(function(){
             $(".sub_back").toggleClass("on");
               $(".season_pop").removeClass("pop_on");
                 
         });


         
         $("#header").hover(function(){
             $("#header").toggleClass("ov");
             $(".main_nav").toggleClass("bk");
         });
         
         $(function(){ 
            var lastScrollTop = 0, delta = 50; 
            $(window).scroll(function(event){
                var st = $(this).scrollTop();
                if(Math.abs(lastScrollTop - st) <= delta) 
                    return;
                
                if ((st > lastScrollTop) && (lastScrollTop>0)) {
                    $("#header").addClass("bk_on");
                    $(".main_nav").addClass("tx_on");
                } else {
                      $("#header").removeClass("bk_on");
                    $(".main_nav").removeClass("tx_on");
                }
                 lastScrollTop = st;
            });
    
    });
     });
