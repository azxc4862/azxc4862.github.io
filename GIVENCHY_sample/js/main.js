//main img fade style//
$(document).ready(function () {
    var num1 = $(".slide_wrap li").length;

    var stra = 0;
    var intva = setInterval(function () {
        nextfedd();
    }, 2500);

    function nextfedd() {
        $(".slide_wrap li").removeClass("on");

        stra++;
        if (stra >= num1) {
            stra = 0;
        }
        $(".slide_wrap li").eq(stra).addClass("on");

    };
});
$(document).ready(function () {
    var num = $(".img_fade li").length;
    var num2 = $(".ls").length;
    var str = 0;
    var intv = setInterval(function () {
        nextfd();
    }, 2500);

    function nextfd() {
        $(".img_fade li").removeClass("on");

        str++;
        if (str >= num) {
            str = 0;
        }
        $(".img_fade li").eq(str).addClass("on");

    };

});

//background-color on - class//
$(document).ready(function () {
    var num2 = $(".ls").length;
    var stra1 = 0;
    var intva = setInterval(function () {
        next();
    }, 2500);
    
    function next() {
        $(".ls").removeClass("fon");
        stra1++;
        if (stra1 >= num2) {
            stra1 = 0;
        }
        $(".ls").eq(stra1).addClass("fon");
    };
});
$(document).ready(function () {
    var num2 = $(".ls").length;
    var str1 = 0;
    var intv1 = setInterval(function () {
        nextfd1();
    }, 2500);

    function nextfd1() {
        $(".ls").removeClass("fon");
        str1++;
        if (str1 >= num2) {
            str1 = 0;
        }
        $(".ls").eq(str1).addClass("fon");

    };

});



//submenu slide
$(document).ready(function () {
    $(".menu_Btn").click(function () {
        $(".submenu").not(":animated").animate({
            "right": "0"
        }, 600);
        $(".close").css("display", "block");
        $(".menu_Btn").css("display", "none");
    });
});

$(document).ready(function () {
    $(".close").click(function () {
        $(".submenu").not(":animated").animate({
            "right": "-100%"
        }, 600);
        $(".close").css("display", "none");
        $(".menu_Btn").css("display", "block");
    });
});

//submenu page slide

$(document).ready(function(){
   $(".nex1").click(function(){
       $(".sub_Wrap").not(":animated").animate({"left": "-100%"}, 400);
      $(".sub_page1").not(":animated").animate({"left": "0"}, 400); 
   }); 
    $(".ret").click(function(){
        $(".sub_Wrap").not(":animated").animate({"left": "0"}, 400);
       $(".spg").not(":animated").animate({"left": "100%"}, 400); 
    });
    
    $(".nex2").click(function(){
       $(".sub_Wrap").not(":animated").animate({"left": "-100%"}, 400);
      $(".sub_page2").not(":animated").animate({"left": "0"}, 400); 
   }); 
    
    $(".ret").click(function(){
        $(".sub_Wrap").not(":animated").animate({"left": "0"}, 400);
       $(".spg").not(":animated").animate({"left": "100%"}, 400); 
    });
    
    $(".nex3").click(function(){
       $(".sub_Wrap").not(":animated").animate({"left": "-100%"}, 400);
      $(".sub_page3").not(":animated").animate({"left": "0"}, 400); 
   }); 
    
    $(".nex4").click(function(){
       $(".sub_Wrap").not(":animated").animate({"left": "-100%"}, 400);
      $(".sub_page1-1").not(":animated").animate({"left": "0"}, 400); 
   }); 
    $(".nex5").click(function(){
       $(".sub_Wrap").not(":animated").animate({"left": "-100%"}, 400);
      $(".sub_page1-2").not(":animated").animate({"left": "0"}, 400); 
   }); 
    $(".nex6").click(function(){
       $(".sub_Wrap").not(":animated").animate({"left": "-100%"}, 400);
      $(".sub_page1-3").not(":animated").animate({"left": "0"}, 400); 
   }); 
    
    $(".nex7").click(function(){
       $(".sub_Wrap").not(":animated").animate({"left": "-100%"}, 400);
      $(".sub_page2-1").not(":animated").animate({"left": "0"}, 400); 
   }); 
    $(".nex8").click(function(){
       $(".sub_Wrap").not(":animated").animate({"left": "-100%"}, 400);
      $(".sub_page2-2").not(":animated").animate({"left": "0"}, 400); 
   }); 
    $(".nex9").click(function(){
       $(".sub_Wrap").not(":animated").animate({"left": "-100%"}, 400);
      $(".sub_page2-3").not(":animated").animate({"left": "0"}, 400); 
   }); 
    $(".nex10").click(function(){
       $(".sub_Wrap").not(":animated").animate({"left": "-100%"}, 400);
      $(".sub_page2-4").not(":animated").animate({"left": "0"}, 400); 
   }); 
    $(".nex11").click(function(){
       $(".sub_Wrap").not(":animated").animate({"left": "-100%"}, 400);
      $(".sub_page2-5").not(":animated").animate({"left": "0"}, 400); 
   }); 
    
    
    $(".nex12").click(function(){
       $(".sub_Wrap").not(":animated").animate({"left": "-100%"}, 400);
      $(".sub_page3-1").not(":animated").animate({"left": "0"}, 400); 
   }); 
    $(".nex13").click(function(){
       $(".sub_Wrap").not(":animated").animate({"left": "-100%"}, 400);
      $(".sub_page3-2").not(":animated").animate({"left": "0"}, 400); 
   }); 
    $(".nex14").click(function(){
       $(".sub_Wrap").not(":animated").animate({"left": "-100%"}, 400);
      $(".sub_page3-3").not(":animated").animate({"left": "0"}, 400); 
   }); 
    $(".nex15").click(function(){
       $(".sub_Wrap").not(":animated").animate({"left": "-100%"}, 400);
      $(".sub_page3-4").not(":animated").animate({"left": "0"}, 400); 
   }); 
    $(".nex16").click(function(){
       $(".sub_Wrap").not(":animated").animate({"left": "-100%"}, 400);
      $(".sub_page3-5").not(":animated").animate({"left": "0"}, 400); 
   }); 
    
    
    $(".nex17").click(function(){
       $(".sub_Wrap").not(":animated").animate({"left": "-100%"}, 400);
      $(".sub_page4").not(":animated").animate({"left": "0"}, 400); 
   }); 
    $(".nex18").click(function(){
       $(".sub_Wrap").not(":animated").animate({"left": "-100%"}, 400);
      $(".sub_page4-1").not(":animated").animate({"left": "0"}, 400); 
   }); 
    $(".nex19").click(function(){
       $(".sub_Wrap").not(":animated").animate({"left": "-100%"}, 400);
      $(".sub_page4-2").not(":animated").animate({"left": "0"}, 400); 
   }); 
    $(".nex20").click(function(){
       $(".sub_Wrap").not(":animated").animate({"left": "-100%"}, 400);
      $(".sub_page4-3").not(":animated").animate({"left": "0"}, 400); 
   }); 
    
    
    
    
    
    
    $(".ret").click(function(){
        $(".sub_Wrap").not(":animated").animate({"left": "0"}, 300);
       $(".spg").not(":animated").animate({"left": "100%"}, 400); 
    });
    
    $(".ret2").click(function(){
       $(".sp").not(":animated").animate({"left": "100%"}, 400); 
    });
    
});
$(document).ready(function(){
   $(".footer li:nth-child(1) > a:nth-child(2)").attr("href", "https://www.givenchy.com/apac/ko/faq.html").attr("target", "_blank");
    $(".footer li:nth-child(1) > a:nth-child(3)").attr("href", "https://www.givenchy.com/apac/ko/unsubscribe").attr("target", "_blank");
    $(".footer li:nth-child(1) > a:nth-child(4)").attr("href", "https://www.givenchy.com/apac/ko/contact.html").attr("target", "_blank");
    $(".footer li:nth-child(1) > a:nth-child(5)").css("display", "none");
    
    $(".footer li:nth-child(2) > a:nth-child(2)").attr("href", "https://www.givenchy.com/apac/ko/careers.html").attr("target", "_blank");
    $(".footer li:nth-child(2) > a:nth-child(3)").attr("href", "https://www.givenchy.com/apac/ko/contact.html#press-enquiries").attr("target", "_blank");
    
    
    $(".footer li:nth-child(3) > a:nth-child(2)").attr("href", "https://www.givenchy.com/apac/ko/privacy-policy.html").attr("target", "_blank");
    $(".footer li:nth-child(3) > a:nth-child(3)").attr("href", "https://www.givenchy.com/apac/ko/cookie-policy.html").attr("target", "_blank");
    $(".footer li:nth-child(3) > a:nth-child(4)").attr("href", "https://www.givenchy.com/apac/ko/terms-conditions.html").attr("target", "_blank");
    $(".footer li:nth-child(3) > a:nth-child(5)").attr("href", "https://www.givenchy.com/on/demandware.static/-/Library-Sites-shared_GIV_Library/default/dw014aef6f/Content/ModernSlaveryAct/Modern%20Slavery%20Act%20-%20Statement%202016.pdf").attr("target", "_blank");
    
    
    
    $(".footer li:nth-child(5) > a:nth-child(1)").attr("href", "https://www.instagram.com/givenchyofficial/").attr("target", "_blank");
    $(".footer li:nth-child(5) > a:nth-child(2)").attr("href", "https://twitter.com/givenchy").attr("target", "_blank");
    $(".footer li:nth-child(5) > a:nth-child(3)").attr("href", "https://www.facebook.com/Givenchy").attr("target", "_blank");
        $(".footer li:nth-child(5) > a:nth-child(4)").attr("href", "https://www.youtube.com/user/givenchychannel").attr("target", "_blank");
    $(".footer li:nth-child(5) > a:nth-child(5)").attr("href", "http://weibo.com/officialgivenchy").attr("target", "_blank");
});