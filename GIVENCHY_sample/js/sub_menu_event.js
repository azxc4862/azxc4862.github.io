
 $(document).ready(function(){
            var cop1 = 1;
            var size1 = $(".xs").text();
            var size2 = $(".s").text();
            var size3 = $(".m").text();
            var size4 = $(".l").text();
            var size5 = $(".xl").text();
            
         $(".cho1:first-child .pon_mo").click(function(){
             $(".mo_wrap").fadeToggle();
             $(".size_wrap").fadeOut();
         });
            
           $(".si .pon_mo").click(function(){
             $(".size_wrap").fadeToggle();
               $(".mo_wrap").fadeOut();
         });
                $(".xs").click(function(){
                $(".si .pon_mo").text(size1);
                $(".size_wrap").fadeOut();
                 $(".pop_size").text(size1);
            });
            $(".s").click(function(){
                $(".si .pon_mo").text(size2);
                $(".size_wrap").fadeOut();
                 $(".pop_size").text(size2);
            });
             $(".m").click(function(){
                $(".si .pon_mo").text(size3);
                $(".size_wrap").fadeOut();
                  $(".pop_size").text(size3);
            });
             $(".l").click(function(){
                $(".si .pon_mo").text(size4)
                $(".size_wrap").fadeOut();
                  $(".pop_size").text(size4);
            });
             $(".xl").click(function(){
                $(".si .pon_mo").text(size5);
                $(".size_wrap").fadeOut();
                  $(".pop_size").text(size5);
            });
  
        
            
            $(".pop_mo").click(function(){
                $(".pop").fadeIn(); 
            });
            $(".pop_close").click(function(){
                $(".pop").fadeOut(); 
            });
            
   
             var wd= $(".tc").width();
            var num = $(".img_sd li").length;
        
        
        
        $(".left").click(function(){
            $(".img_sd").not("animated").animate({"margin-left": -wd+ "px"}, 600, function(){
           $(".img_sd li").eq(0).appendTo($(".img_sd ul"));
            $(".img_sd").css("margin-left", "0px");
console.log(wd);
        });

            });
        
        $(".right").click(function(){
             $(".img_sd li").eq(num - 1).prependTo($(".img_sd ul"));
                $(".img_sd").css("margin-left", -wd + "px");
                $(".img_sd").not(":animated").animate({
                    "margin-left": "0px"
                }, 700);
        });

       });
$(document).ready(function(){
    $(".tc:nth-child(1)").click(function(){
        var img1 = $(".tc:nth-child(1) .op_back_img").attr("src");
        var img2 = $(".tc:nth-child(1) .op_back_img.re").attr("src");
        $(".poimg1").attr("src", img1);
        $(".poimg2").attr("src", img2); 
        
    });
    


             
             
    });
  
        
