"use strict";for(var arr=[{id:1,img:"../images/l_1.jpg",price:"￥358",title:"鲜花/忘情巴黎-33枝红玫瑰",language:"你的轻柔像阵微风，让我从容不迫，想让你知道，我对你始终一往情深。",img_small:{src1:"../images/1_1.jpg",src2:"../images/1_2.jpg",src3:"../images/1_3.jpg",src4:"../images/1_4.jpg"}},{id:2,img:"../images/l_2.jpg",price:"￥569",title:"鲜花/忘情巴黎-33枝红玫瑰",language:"你的轻柔像阵微风，让我从容不迫，想让你知道，我对你始终一往情深。",img_small:{src1:"../images/2_1.jpg",src2:"../images/2_2.jpg",src3:"../images/2_3.jpg",src4:"../images/2_4.jpg"}},{id:3,img:"../images/l_3.jpg",price:"￥199",title:"鲜花/忘情巴黎-33枝红玫瑰",language:"你的轻柔像阵微风，让我从容不迫，想让你知道，我对你始终一往情深。",img_small:{src1:"../images/3_1.jpg",src2:"../images/3_2.jpg",src3:"../images/3_3.jpg",src4:"../images/3_4.jpg"}},{id:4,img:"../images/l_4.jpg",price:"￥139",title:"鲜花/忘情巴黎-33枝红玫瑰",language:"你的轻柔像阵微风，让我从容不迫，想让你知道，我对你始终一往情深。",img_small:{src1:"../images/4_1.jpg",src2:"../images/4_2.jpg",src3:"../images/4_3.jpg",src4:"../images/4_4.jpg"}},{id:5,img:"../images/l_5.jpg",price:"￥245",title:"鲜花/忘情巴黎-33枝红玫瑰",language:"你的轻柔像阵微风，让我从容不迫，想让你知道，我对你始终一往情深。",img_small:{src1:"../images/d_1.jpg",src2:"../images/d_2.jpg",src3:"../images/d_3.jpg",src4:"../images/d_4.jpg"}},{id:6,img:"../images/love_6.jpg",price:"￥179",title:"鲜花/忘情巴黎-33枝红玫瑰",language:"你的轻柔像阵微风，让我从容不迫，想让你知道，我对你始终一往情深。",img_small:{src1:"../images/5_1.jpg",src2:"../images/5_2.jpg",src3:"../images/5_3.jpg",src4:"../images/5_4.jpg"}},{id:7,img:"../images/love_7.jpg",price:"￥206",title:"鲜花/忘情巴黎-33枝红玫瑰",language:"你的轻柔像阵微风，让我从容不迫，想让你知道，我对你始终一往情深。",img_small:{src1:"../images/d_1.jpg",src2:"../images/d_2.jpg",src3:"../images/d_3.jpg",src4:"../images/d_4.jpg"}},{id:8,img:"../images/love_8.jpg",price:"￥298",title:"鲜花/忘情巴黎-33枝红玫瑰",language:"你的轻柔像阵微风，让我从容不迫，想让你知道，我对你始终一往情深。",img_small:{src1:"../images/d_1.jpg",src2:"../images/d_2.jpg",src3:"../images/d_3.jpg",src4:"../images/d_4.jpg"}},{id:9,img:"../images/love_9.jpg",price:"￥599",title:"鲜花/忘情巴黎-33枝红玫瑰",language:"你的轻柔像阵微风，让我从容不迫，想让你知道，我对你始终一往情深。",img_small:{src1:"../images/d_1.jpg",src2:"../images/d_2.jpg",src3:"../images/d_3.jpg",src4:"../images/d_4.jpg"}},{id:10,img:"../images/love_10.jpg",price:"￥139",title:"鲜花/忘情巴黎-33枝红玫瑰",language:"你的轻柔像阵微风，让我从容不迫，想让你知道，我对你始终一往情深。",img_small:{src1:"../images/d_1.jpg",src2:"../images/d_2.jpg",src3:"../images/d_3.jpg",src4:"../images/d_4.jpg"}},{id:11,img:"../images/love_11.jpg",price:"￥308",title:"鲜花/忘情巴黎-33枝红玫瑰",language:"你的轻柔像阵微风，让我从容不迫，想让你知道，我对你始终一往情深。",img_small:{src1:"../images/d_1.jpg",src2:"../images/d_2.jpg",src3:"../images/d_3.jpg",src4:"../images/d_4.jpg"}},{id:12,img:"../images/love_12.jpg",price:"￥569",title:"鲜花/忘情巴黎-33枝红玫瑰",language:"你的轻柔像阵微风，让我从容不迫，想让你知道，我对你始终一往情深。",img_small:{src1:"../images/d_1.jpg",src2:"../images/d_2.jpg",src3:"../images/d_3.jpg",src4:"../images/d_4.jpg"}},{id:13,img:"../images/love_14.jpg",price:"￥236",title:"鲜花/忘情巴黎-33枝红玫瑰",language:"你的轻柔像阵微风，让我从容不迫，想让你知道，我对你始终一往情深。",img_small:{src1:"../images/d_1.jpg",src2:"../images/d_2.jpg",src3:"../images/d_3.jpg",src4:"../images/d_4.jpg"}},{id:14,img:"../images/love_15.jpg",price:"￥368",title:"鲜花/忘情巴黎-33枝红玫瑰",language:"你的轻柔像阵微风，让我从容不迫，想让你知道，我对你始终一往情深。",img_small:{src1:"../images/d_1.jpg",src2:"../images/d_2.jpg",src3:"../images/d_3.jpg",src4:"../images/d_4.jpg"}}],myId=localStorage.getItem("goods"),myGoods="",i=0;i<arr.length;i++)arr[i].id==myId&&(myGoods=arr[i]);var strDom='<div class="section_product">\n        <div class="product_l">\n            <div class="large_img">\n                <img src="'+myGoods.img+'" class="pt_active">\n                <div class="btn_left"><span> < </span></div>\n                <div class="btn_right"><span> > </span></div>\n            </div>\n            <div class="product_small_img">\n                <p class="active"><img src="'+myGoods.img_small.src1+'"></p>\n                <p><img src="'+myGoods.img_small.src2+'"></p>\n                <p><img src="'+myGoods.img_small.src3+'"></p>\n                <p><img src="'+myGoods.img_small.src4+'"></p>\n            </div>\n        </div>\n        <div class="product_r">\n            <h3>阳光心情<span>-----</span>10枝多头百合</h3>\n            <div class="attribute">\n                <dl>\n                    <dt>类别：</dt>\n                    <dd>鲜花编号：9010811</dd>\n                </dl>\n                <dl>\n                    <dt>材料：</dt>\n                    <dd>10枝多头黄百合,黄莺适量搭配</dd>\n                </dl>\n                <dl>\n                    <dt>包装：</dt>\n                    <dd>蓝色平面纸圆形包装，拉菲草束扎</dd>\n                </dl>\n                <dl>\n                    <dt>花语：</dt>\n                    <dd>'+myGoods.language+'</dd>\n                </dl>\n                <dl>\n                    <dt>附送：</dt>\n                    <dd>下单填写留言，即免费赠送精美贺卡！</dd>\n                </dl>\n                <dl>\n                    <dt>配送</dt>\n                    <dd>全国大中城市</dd>\n                </dl>\n                <dl>\n                    <dt style="line-height: 25px;">配送至</dt>\n                    <dd style="line-height: 25px;">鲜花编号：9010811</dd>\n                </dl>\n                <dl>\n                    <dt>说明：</dt>\n                    <dd><span class="text_explain">特别花材,大城市请提前一天订购,中小城市请订购前咨询</span></dd>\n                </dl>\n            </div>\n            <div class="product_price">\n                <div class="price_original">市场价：'+(myGoods.price+50)+'</div>\n                <div class="price_sell">花礼价：<strong><span class="price_num_A">'+myGoods.price+'</span></strong></div>\n            </div>\n            <div class="product_appzx">\n                <ul>\n                    <li>促销信息 ：<img src="../images/appzx_01.png"><strong><span class="price_sign_A">¥</span><span class="price_num_A">339</span></strong></li>\n                    <li class="hidden">\n                        <p><span class="app_dropdown"></span>去APP购买<img src="../images/xxjt.png" class="app_img"></p>\n                        <div class="app_ewm">\n                            <img src="../images/app_qrcode.jpg" style="width: 120px; height: 120px;" class="ewm_app_dis">\n                            新人专享100元大礼包\n                        </div>\n                    </li>\n                    <li class="hidden">\n                        <p><span class="app_dropdown"></span>去微信购买<img src="src/images/detail/xxjt.png" class="app_img"></p>\n                        <div class="app_ewm">\n                            <img src="../images/app_qrcode.jpg" style="width: 120px; height: 120px;" class="ewm_app_dis">\n                            新人专享100元大礼包\n                        </div>\n                    </li>\n                </ul>\n            </div>\n            <div class="btn_buy">\n                <a href="javascript:;" class="im_buy"  onclick="skip()"><span class="im"></span>立即购买</a>\n                <a href="javascript:;" class="future_buy"><span class="future"></span>收 藏</a>\n            </div>\n        </div>\n    </div>';$(".section_cont").append(strDom);var obj={};function skip(){localStorage.setItem("goods",myId),window.location.href="./cart.html"}obj.goods=myId,$(function(){$(".product_small_img p").mouseover(function(){$(".product_small_img p").removeClass("active").eq($(this).index()).addClass("active"),$(".large_img img").eq($(this).index()).show()})});