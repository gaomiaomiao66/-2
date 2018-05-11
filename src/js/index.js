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


 // 搜索框


$(function(){

    $('.product-list li').mouseover(function(){
         $(this).css('border','1px solid #999');
    })
     $('.product-list li').mouseout(function(){
         $(this).css('border','');
    })
})