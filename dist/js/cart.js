"use strict";for(var arr=[{id:1,img:"../images/l_1.jpg",price:"￥358",title:"鲜花/忘情巴黎-33枝红玫瑰",language:"你的轻柔像阵微风，让我从容不迫，想让你知道，我对你始终一往情深。",img_small:{src1:"../images/1_1.jpg",src2:"../images/1_2.jpg",src3:"../images/1_3.jpg",src4:"../images/1_4.jpg"}},{id:2,img:"../images/l_2.jpg",price:"￥569",title:"鲜花/忘情巴黎-33枝红玫瑰",language:"你的轻柔像阵微风，让我从容不迫，想让你知道，我对你始终一往情深。",img_small:{src1:"../images/2_1.jpg",src2:"../images/2_2.jpg",src3:"../images/2_3.jpg",src4:"../images/2_4.jpg"}},{id:3,img:"../images/l_3.jpg",price:"￥199",title:"鲜花/忘情巴黎-33枝红玫瑰",language:"你的轻柔像阵微风，让我从容不迫，想让你知道，我对你始终一往情深。",img_small:{src1:"../images/3_1.jpg",src2:"../images/3_2.jpg",src3:"../images/3_3.jpg",src4:"../images/3_4.jpg"}},{id:4,img:"../images/l_4.jpg",price:"￥139",title:"鲜花/忘情巴黎-33枝红玫瑰",language:"你的轻柔像阵微风，让我从容不迫，想让你知道，我对你始终一往情深。",img_small:{src1:"../images/4_1.jpg",src2:"../images/4_2.jpg",src3:"../images/4_3.jpg",src4:"../images/4_4.jpg"}},{id:5,img:"../images/l_5.jpg",price:"￥245",title:"鲜花/忘情巴黎-33枝红玫瑰",language:"你的轻柔像阵微风，让我从容不迫，想让你知道，我对你始终一往情深。",img_small:{src1:"../images/d_1.jpg",src2:"../images/d_2.jpg",src3:"../images/d_3.jpg",src4:"../images/d_4.jpg"}},{id:6,img:"../images/l_6.jpg",price:"￥179",title:"鲜花/忘情巴黎-33枝红玫瑰",language:"你的轻柔像阵微风，让我从容不迫，想让你知道，我对你始终一往情深。",img_small:{src1:"../images/5_1.jpg",src2:"../images/5_2.jpg",src3:"../images/5_3.jpg",src4:"../images/5_4.jpg"}},{id:7,img:"../images/love_7.jpg",price:"￥206",title:"鲜花/忘情巴黎-33枝红玫瑰",language:"你的轻柔像阵微风，让我从容不迫，想让你知道，我对你始终一往情深。",img_small:{src1:"../images/d_1.jpg",src2:"../images/d_2.jpg",src3:"../images/d_3.jpg",src4:"../images/d_4.jpg"}},{id:8,img:"../images/love_8.jpg",price:"￥298",title:"鲜花/忘情巴黎-33枝红玫瑰",language:"你的轻柔像阵微风，让我从容不迫，想让你知道，我对你始终一往情深。",img_small:{src1:"../images/d_1.jpg",src2:"../images/d_2.jpg",src3:"../images/d_3.jpg",src4:"../images/d_4.jpg"}},{id:9,img:"../images/love_9.jpg",price:"￥599",title:"鲜花/忘情巴黎-33枝红玫瑰",language:"你的轻柔像阵微风，让我从容不迫，想让你知道，我对你始终一往情深。",img_small:{src1:"../images/d_1.jpg",src2:"../images/d_2.jpg",src3:"../images/d_3.jpg",src4:"../images/d_4.jpg"}},{id:10,img:"../images/love_10.jpg",price:"￥139",title:"鲜花/忘情巴黎-33枝红玫瑰",language:"你的轻柔像阵微风，让我从容不迫，想让你知道，我对你始终一往情深。",img_small:{src1:"../images/d_1.jpg",src2:"../images/d_2.jpg",src3:"../images/d_3.jpg",src4:"../images/d_4.jpg"}},{id:11,img:"../images/love_11.jpg",price:"￥308",title:"鲜花/忘情巴黎-33枝红玫瑰",language:"你的轻柔像阵微风，让我从容不迫，想让你知道，我对你始终一往情深。",img_small:{src1:"../images/d_1.jpg",src2:"../images/d_2.jpg",src3:"../images/d_3.jpg",src4:"../images/d_4.jpg"}},{id:12,img:"../images/love_12.jpg",price:"￥569",title:"鲜花/忘情巴黎-33枝红玫瑰",language:"你的轻柔像阵微风，让我从容不迫，想让你知道，我对你始终一往情深。",img_small:{src1:"../images/d_1.jpg",src2:"../images/d_2.jpg",src3:"../images/d_3.jpg",src4:"../images/d_4.jpg"}},{id:13,img:"../images/love_14.jpg",price:"￥236",title:"鲜花/忘情巴黎-33枝红玫瑰",language:"你的轻柔像阵微风，让我从容不迫，想让你知道，我对你始终一往情深。",img_small:{src1:"../images/d_1.jpg",src2:"../images/d_2.jpg",src3:"../images/d_3.jpg",src4:"../images/d_4.jpg"}},{id:14,img:"../images/love_15.jpg",price:"￥368",title:"鲜花/忘情巴黎-33枝红玫瑰",language:"你的轻柔像阵微风，让我从容不迫，想让你知道，我对你始终一往情深。",img_small:{src1:"../images/d_1.jpg",src2:"../images/d_2.jpg",src3:"../images/d_3.jpg",src4:"../images/d_4.jpg"}}],goodsId=localStorage.getItem("goods"),goodsNum=localStorage.getItem("num"),myGoods="",i=0;i<arr.length;i++)arr[i].id==goodsId&&(myGoods=arr[i]);goodsId?$(".cart").css("display","none"):$(".cart").css("display","block");var myGoodsPrice=goodsNum*myGoods.price.substring(1),strDom="";function priceSum(){-1<myGoodsPrice.toString().indexOf(".")&&(myGoodsPrice=myGoodsPrice.toString().silce(0,myGoodsPrice.toString().indexOf(".")+2)),strDom+='\n                <ul class="body_list">\n                    <li class="selecter">\n                        <input type="checkbox">\n                    </li>\n                    <li class="img_box"><a href="javascript:;""><img src="'+myGoods.img+'"></a></li>\n                    <li class="product">\n                        <a href="javascript:;">\n                            <span class="product_title">'+myGoods.title+'</span>\n                            <span class="feature"></span>\n                        </a>\n                    </li>\n                    <li class="market_price">\n                       <span class="price_num">'+(myGoods.price+50)+'</span>\n                    </li>\n                    <li class="order_price">\n                        <span class="price_num">'+myGoods.price+'</span>\n                    </li>\n                    <li class="num">\n                        <div class="input_num">\n                            <a href="javascript:;" class="btn btn_default no" onclick="redunce()"><i class="ico ico_minus" ></i></a>\n                            <input type="text" class="form_control input-sm" name="cpsl" value="1" maxlength="3" id="myNum">\n                            <a href="javascript:" class="btn btn_default yes" onclick="add()"><i class="ico ico_add" ></i></a>\n                        </div>\n                    </li>\n                    <li class="operate">\n                        <a href="javascript:;" class="delBtn" onclick="del()">删除</a><br><a href="javascript:;" class="collectBtn">移到我的收藏</a>\n                    </li>\n                </ul>\n            </div>\n        <div class="Choice">\n            <div class="Choice_left">\n                <span class="go"></span>\n                <a href="./index.html" class="Continue">继续挑选</a>\n                <div class="money">应付金额：\n                   <span class="money_num">'+myGoodsPrice+'</span>\n                </div>\n            </div>\n            <button class="Choice_right">去结算</button>',$("#info").append(strDom)}priceSum(),$("#myNum").val(goodsNum);var a=$("#myNum").val();function add(){$("#info").empty(),a++,$("#myNum").val(a),myGoodsPrice=a*myGoods.price.substring(1),contantDom(),$("#myNum").val(a)}function redunce(){a<=1?alert("别点了，还买不买了！"):($("#info").empty(),a--,$("#myNum").val(a),myGoodsPrice=a*myGoods.price.substring(1),contantDom(),$("#myNum").val(a))}function del(){$("#info").empty(),$(".cart_head").css("display","none"),$(".cart").css("display","block"),localStorage.removeItem("goods"),localStorage.removeItem("num")}$(".Choice_right").click(function(){$(window).attr("location","../../src/html/order.html")});