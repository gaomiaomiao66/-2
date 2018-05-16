// lunbotu
 $(function(){
        //第一张显示
        $("#wrap_img li").eq(0).show();
        //鼠标滑过手动切换，淡入淡出
        $("#dots li").mouseover(function() {
            $(this).addClass('active').siblings().removeClass("active");
            var index = $(this).index();
            i = index;//不加这句有个bug，鼠标移出小圆点后，自动轮播不是小圆点的后一个
            // $("#wrap_img li").eq(index).show().siblings().hide();
            $("#wrap_img li").eq(index).fadeIn(500).siblings().fadeOut(500);
        });
        //自动轮播
        var i=0;
        var timer=setInterval(play,2000);
        //向右切换
        var play=function(){
            i++;
            i = i > 3 ? 0 : i ;
            $("#dots li").eq(i).addClass('active').siblings().removeClass("active");
            $("#wrap_img li").eq(i).fadeIn(500).siblings().fadeOut(500);
        }
        //向左切换
        var playLeft=function(){
            i--;
            i = i < 0 ? 2 : i ;
            $("#dots li").eq(i).addClass('active').siblings().removeClass("active");
            $("#wrap_img li").eq(i).fadeIn(500).siblings().fadeOut(500);
        }
        //鼠标移入移出效果
        $("#carousel").hover(function() {
            clearInterval(timer);
        }, function() {
            timer=setInterval(play,2000);
        });
        //左右点击切换
        $("#prev").click(function(){
            playLeft();
        })
        $("#next").click(function(){
            play();
        })
    });


 
// 在新品上线添加鼠标进入事件

$(function(){

    $('.product-list li').mouseover(function(){
         $(this).css('border','1px solid #999');
    })
     $('.product-list li').mouseout(function(){
         $(this).css('border','');
    })
})



  
// 顶部的广告
$(function(){
    setTimeout(function(){
        $('.home-banner').css('display','none')

      },5000)
})

// 方向检测
$(function(){
        $('.bd-l').bind('mouseenter mouseleave', function (e) {
        var w = $(this).width();
        var h = $(this).height();
        var x = (e.pageX - this.offsetLeft - (w / 2)) * (w > h ? (h / w) : 1);
        var y = (e.pageY - this.offsetTop - (h / 2)) * (h > w ? (w / h) : 1);
        var direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;

        if(e.type === 'mouseenter') {
            var startPos = {left: 0, top: 0};
            switch(direction) {
                case 0:
                    startPos = {left: 0, top: -h};
                    break;
                case 1:
                    startPos = {left: w, top: 0};
                    break;
                case 2:
                    startPos = {left: 0, top: h};
                    break;
                case 3:
                    startPos = {left: -w, top: 0};
                    break;
            }

            $('.shadow').css(startPos).stop(true).animate({left: 0, top: 0});
        } else if(e.type === 'mouseleave') {
            var endPos = {left: 0, top: 0};
            switch(direction) {
                case 0:
                    endPos = {left: 0, top: -h};
                    break;
                case 1:
                    endPos = {left: w, top: 0};
                    break;
                case 2:
                    endPos = {left: 0, top: h};
                    break;
                case 3:
                    endPos = {left: -w, top: 0};
                    break;
            }

            $('.shadow').stop(true).animate(endPos);
        }
        
    });
});


// 左侧商品的显示隐藏

$('.cate-ysh').mouseover(function(){
    $('.right-menu-f').css('display','block');
});
$('.cate-cake').mouseout(function(){
    $('.right-menu-f').css('display','none');
})

// 蛋糕
$('.transcate_m').mouseover(function(){
    $('.right-menu-m').css('display','block');
});
$('.cate-cake').mouseout(function(){
    $('.right-menu-m').css('display','none');
})

// 礼品，公仔
$('.cate_letter').mouseover(function(){
    $('.right-menu-e').css('display','block');
});
$('.cate_letter').mouseout(function(){
    $('.right-menu-e').css('display','none');
})


// 回到顶部
$('.f-top').click(function(){
    $('html').animate({scrollTop:0},300);
})