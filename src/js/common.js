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
// 头部导航

$(function(){
    $('.customer').on('mouseover',function(){
        $(this).css('backgroundColor','#fff');
        $('.service-list').css('display','block');
    });
     $('.customer').on('mouseout',function(){
         $(this).css('backgroundColor','#f2f2f2');
        $('.service-list').css('display','none');
    });

})

// 购物车
$(function(){
    $('.nav-cart').on('mouseover',function(){
        $(this).css('backgroundColor','#fff');
        $('.shopping-outer').css('display','block');
    });
     $('.nav-cart').on('mouseout',function(){
         $(this).css('backgroundColor','#f2f2f2');
        $('.shopping-outer').css('display','none');
    });

})

// 微信
$(function(){
    $('.dropdown-wx').on('mouseover',function(){
        $(this).css('backgroundColor','#fff');
        $('.nav-wx').css('display','block');
    });
     $('.dropdown-wx').on('mouseout',function(){
         $(this).css('backgroundColor','#f2f2f2');
        $('.nav-wx').css('display','none');
    });

})

// app
$(function(){
    $('.dropdown-app').on('mouseover',function(){
        $(this).css('backgroundColor','#fff');
        $('.nav-app').css('display','block');
    });
     $('.dropdown-app').on('mouseout',function(){
         $(this).css('backgroundColor','#f2f2f2');
        $('.nav-app').css('display','none');
    });

})