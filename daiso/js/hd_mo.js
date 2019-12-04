     $(document).ready(function(){
         $(".menu_icon").click(function(){
             $(".menu_icon").toggleClass("ck");
             $(".sub_back").toggleClass("on");
             $(".sub_menu").toggleClass("s_close");
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
