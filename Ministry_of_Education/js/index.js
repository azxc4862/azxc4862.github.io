     $(document).ready(function() {

            //            메인 이미지 슬라이드
            var wd = $(".slide li").width();
            var len = $(".slide li").length;
            var con = 0;
            var con1 = $(".sd_item:nth-of-type(1)");
            var con2 = $(".sd_item:nth-of-type(2)");
            var con3 = $(".sd_item:nth-of-type(3)");
            var intv = setInterval(function() {
                nextAni();
            }, 2950);
            //끝

            //page3 이미지 슬라이드
            var p3slide = $(".p3_slide").width();
            var p3len = $(".p3_slide_wrap li").length;
            var p3intv = setInterval(function() {
                p3nextAni();
            }, 2950);
            //끝

            //page4 이미지 슬라이드
            var p4slide = $(".p4_slide_wrap li").width();
            var p4len = $(".p4_slide_wrap li").length;
            var p4intv = setInterval(function() {
                p4nextAni();
            }, 2950);
            //끝

            //            메인 이미지 슬라이드
            function nextAni() {
                
                con++;
                if(con >= len){
                    con = 0;
                   
                }
                $(".slide").not(":animated").animate({
                    "margin-left": -wd + "px"
                }, 700, function() {
                    $(".slide li").eq(0).appendTo($(".slide"));
                    $(".slide").css("margin-left", "0px");
                    $(".sd_item  a").css("background", "none");
                    $(".sd_item  a").eq(con).css("background-color", "white");
                });
                console.log(con);
            }

            function prevAni() {
                $(".slide li").eq(len - 1).prependTo($(".slide"));
                $(".slide").css("margin-left", -wd + "px");
                $(".slide").not(":animated").animate({
                    "margin-left": "0px"
                }, 700);
                $(".sd_item").eq(len - 1).appendTo($(".sd_btn_wrap"));
                $(".sd_item").removeClass("on");
                $(".sd_item").eq(0).addClass("on");
            }

            function numAni(num) {
                for (var x = 0; x < num - 1; x++) {
                    $(".slide li").eq(0).appendTo($(".slide"));
                    $(".sd_item").eq(0).appendTo($(".sd_btn_wrap"));
                }
                nextAni();
            }
            $(".sd_item").click(function() {
                var btnNum = $(this).parents($(".sd_item")).index();
                clearInterval(intv);
                numAni(btnNum);
                intv = setInterval(function() {
                    nextAni();
                }, 2950);
            });
            $(".lr_btn .next .btn").click(function() {
                clearInterval(intv);
                nextAni();
                intv = setInterval(function() {
                    nextAni();
                }, 2950);
            });
            $(".lr_btn .prev .btn").click(function() {
                clearInterval(intv);
                prevAni();
                intv = setInterval(function() {
                    nextAni();
                }, 2950);
            });
            // 메인 이미지 슬라이드 끝


            //page3 이미지 슬라이드
            function p3nextAni() {
                $(".p3_slide_wrap").not(":animated").animate({
                    "margin-left": -p3slide + "px"
                }, 700, function() {
                    $(".p3_slide_wrap > li").eq(0).appendTo($(".p3_slide_wrap"));
                    $(".p3_slide_wrap").css("margin-left", "0px");

                });
            }

            function p3prevAni() {
                $(".p3_slide_wrap li").eq(p3len - 1).prependTo($(".p3_slide_wrap"));
                $(".p3_slide_wrap").css("margin-left", -p3slide + "px");
                $(".p3_slide_wrap").not(":animated").animate({
                    "margin-left": "0px"
                }, 700);

            }

            $(".p3_right").click(function() {
                clearInterval(p3intv);
                p3nextAni();
                p3intv = setInterval(function() {
                    p3nextAni();
                }, 2950);
            });
            $(".p3_left").click(function() {
                clearInterval(p3intv);
                p3prevAni();
                p3intv = setInterval(function() {
                    p3nextAni();
                }, 2950);
            });
            //page3 이미지 슬라이드 끝

            //page4 이미지 슬라이드
            function p4nextAni() {
                $(".p4_slide_wrap").not(":animated").animate({
                    "margin-left": -p4slide + "px"
                }, 700, function() {
                    $(".p4_slide_wrap li").eq(0).appendTo($(".p4_slide_wrap"));
                    $(".p4_slide_wrap").css("margin-left", "0px");

                });
            }

            function p4prevAni() {
                $(".p4_slide_wrap li").eq(p4len - 1).prependTo($(".p4_slide_wrap"));
                $(".p4_slide_wrap").css("margin-left", -p4slide + "px");
                $(".p4_slide_wrap").not(":animated").animate({
                    "margin-left": "0px"
                }, 700);

            }

            $(".p4_right").click(function() {
                clearInterval(p4intv);
                p4nextAni();
                p4intv = setInterval(function() {
                    p4nextAni();
                }, 2950);
            });
            $(".p4_left").click(function() {
                clearInterval(p4intv);
                p4prevAni();
                p4intv = setInterval(function() {
                    p4nextAni();
                }, 2950);
            });
            //page3 이미지 슬라이드 끝



            //            page1 text event 시작
            $(".on1").click(function(){
                $(".tab_on span").removeClass("to");
                $(".tab_cnt").removeClass("tco");
                 $(".on1 span").addClass("to");
                $(".tab_board li:nth-of-type(1) .tab_cnt").addClass("tco");
                
            });
            $(".on2").click(function(){
                $(".tab_on span").removeClass("to");
                $(".tab_cnt").removeClass("tco");
                 $(".on2 span").addClass("to");
                $(".tab_board li:nth-of-type(2) .tab_cnt").addClass("tco");
                
            });
            $(".on3").click(function(){
                $(".tab_on span").removeClass("to");
                $(".tab_cnt").removeClass("tco");
                 $(".on3 span").addClass("to");
                $(".tab_board li:nth-of-type(3) .tab_cnt").addClass("tco");
                
            });
            $(".on4").click(function(){
                $(".tab_on span").removeClass("to");
                $(".tab_cnt").removeClass("tco");
                 $(".on4 span").addClass("to");
                $(".tab_board li:nth-of-type(4) .tab_cnt").addClass("tco");
                
            });
            



            //            page1 text event 끝
            //        page6 시작

            $(".p6_open").click(function() {
                $(".page6_cnt").css("display", "block").css("height", "100%");
                $(".page6").not(":animated").animate({
                    "height": "290px"
                }, 500).css("height", "290px");
                $(".page6 .pw1 .pw2").animate({
                    "height": "290px"
                }, 500);

                $(this).css("display", "none");
                $(".p6_close").css("display", "block");

            });
            $(".p6_close").click(function() {
                $(".page6").not(":animated").animate({
                    "height": "65px"
                }, 500).css("height", "65px");
                $(".page6 .pw1 .pw2").animate({
                    "height": "65px"
                }, 500);
                $(".page6_cnt").css("display", "none");
                $(this).css("display", "none");
                $(".p6_open").css("display", "block");

            });


            //        page6 끝

        });
        //            pw_01_slide 시작
        $(document).ready(function() {

            var pwwd = $(".sd_01_list").width();
            var pwlen = $(".sd_01_list").length;
            var pw_num = 0;
            $(".p_01_r").click(function() {
                $(".pw_01_page_link_hole > div > a").removeClass("hold_on");
                pw_num++;
                if(pw_num >= pwlen) {
                    pw_num = 0;
                }
                $(".pw_01_page_link_hole > div > a").eq(pw_num).addClass("hold_on");
                $(".pw_01_sd_wrap").not(":animated").animate({
                    "margin-left": -pwwd + "px"
                }, 700, function() {
                    $(".sd_01_list").eq(0).appendTo($(".pw_01_sd_wrap"));
                    $(".pw_01_sd_wrap").css("margin-left", "0px");

                });
            });

            $(".p_01_l").click(function() {
                 $(".pw_01_page_link_hole > div > a").removeClass("hold_on");
                pw_num--;
                if(pw_num < 0) {
                    pw_num = pwlen - 1 ;
                }
                $(".pw_01_page_link_hole > div > a").eq(pw_num).addClass("hold_on");
                $(".sd_01_list").eq(pwlen - 1).prependTo($(".pw_01_sd_wrap"));
                $(".pw_01_sd_wrap").css("margin-left", -pwwd + "px");
                $(".pw_01_sd_wrap").not(":animated").animate({
                    "margin-left": "0px"
                }, 700);
            });

            //            pw_01_slide 시작 끝 
            //            pw_02 fade 시작
            var pw2_fd_len = $(".pw2_fd").length;
            var pw2_num = 0;

            $(".pw2_r").click(function() {
                $(".pw2_fd").removeClass("op_on");
                $(".pw2_fd_hold a").removeClass("hold_on2");
                pw2_num++;
                if (pw2_num >= pw2_fd_len) {
                    pw2_num = 0;
                }
                $(".pw2_fd").eq(pw2_num).addClass("op_on");
                $(".pw2_fd_hold a").eq(pw2_num).addClass("hold_on2");
            });

            $(".pw2_l").click(function() {
                $(".pw2_fd").removeClass("op_on");
                $(".pw2_fd_hold a").removeClass("hold_on2");
                pw2_num--;
                if (pw2_num < 0) {
                    pw2_num = pw2_fd_len - 1;
                }
                $(".pw2_fd").eq(pw2_num).addClass("op_on");
                $(".pw2_fd_hold a").eq(pw2_num).addClass("hold_on2");
            });
            //            pw_02 fade 끝
//            푸터 슬라이드 시작
            var ftwd = $(".f_slide > ul > li").width();
            var ftlen = $(".f_slide > ul > li").length;
            $(".ft_l").click(function() {
                $(".f_slide > ul").not(":animated").animate({
                    "margin-left": -ftwd + "px"
                }, 700, function() {
                    $(".f_slide > ul > li").eq(0).appendTo($(".f_slide > ul"));
                    $(".f_slide > ul").css("margin-left", "0px");

                });
            });

            $(".ft_r").click(function() {
                $(".f_slide > ul > li").eq(ftlen - 1).prependTo($(".f_slide > ul"));
                $(".f_slide > ul").css("margin-left", -ftwd + "px");
                $(".f_slide > ul").not(":animated").animate({
                    "margin-left": "0px"
                }, 700);
            });
//            푸터슬라이드 끝
        });
