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


// 搜索框获取后台数据
    var placehold = document.getElementById('placehold');
    
    var ssUo = document.getElementById('ss_uo');

function place(placehold) {
        var notice = ['爱情鲜花', '友情鲜花', '商务花', '生日鲜花','玫瑰','郁金香'];
        // 显示默认值
        var index = 0;
        placehold.value = notice[index];
        var timer = null;

        autoMove();

        function autoMove() {
            if(placehold.value === '' || placehold.value === notice[index]) {
                timer = setInterval(function () {
                    index++;
                    if(index >= notice.length) {
                        index = 0;
                    }
                    placehold.value = notice[index];
                }, 3000);
            }
        }

        placehold.onfocus = function () {
            clearInterval(timer);
            if(this.value === notice[index]) {
                this.value = '';
            }
            ssUo.style.display='block';
        };

        placehold.onblur = function () {
            autoMove();
            if(this.value === '') {
                this.value = notice[index];
            }
            ssUo.style.display='none';
        }
    };

    place(placehold);

function callback(data) {
            ssUo.innerHTML = '';
            data.result.forEach( v => {
                var newLi = document.createElement('li');
                newLi.innerHTML = v[0];
                ssUo.append(newLi);
            });
        }
        placehold.oninput = function () {
            // 创建script标签
            var script = document.createElement('script');

            script.src = 'https://suggest.taobao.com/sug?code=utf-8&q='+ this.value +'&_ksTS=1524750507019_398&callback=callback';
            document.body.appendChild(script);
        };
  
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