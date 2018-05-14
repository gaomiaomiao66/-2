var arr=[
	{
		id:1,
		img:'../images/l_1.jpg',
		price:'￥358',
		title:'鲜花/忘情巴黎-33枝红玫瑰'
	},
		{
		id:2,
		img:'../images/l_1.jpg',
		price:'￥358',
		title:'鲜花/忘情巴黎-33枝红玫瑰'
	},
		{
		id:3,
		img:'../images/l_1.jpg',
		price:'￥358',
		title:'鲜花/忘情巴黎-33枝红玫瑰'
	},
		{
		id:4,
		img:'../images/l_1.jpg',
		price:'￥358',
		title:'鲜花/忘情巴黎-33枝红玫瑰'
	},
		{
		id:5,
		img:'../images/l_1.jpg',
		price:'￥358',
		title:'鲜花/忘情巴黎-33枝红玫瑰'
	},
		{
		id:6,
		img:'../images/l_1.jpg',
		price:'￥358',
		title:'鲜花/忘情巴黎-33枝红玫瑰'
	},
		{
		id:7,
		img:'../images/l_1.jpg',
		price:'￥358',
		title:'鲜花/忘情巴黎-33枝红玫瑰'
	},
		{
		id:8,
		img:'../images/l_1.jpg',
		price:'￥358',
		title:'鲜花/忘情巴黎-33枝红玫瑰'
	},
		{
		id:9,
		img:'../images/l_1.jpg',
		price:'￥358',
		title:'鲜花/忘情巴黎-33枝红玫瑰'
	},
		{
		id:10,
		img:'../images/l_1.jpg',
		price:'￥358',
		title:'鲜花/忘情巴黎-33枝红玫瑰'
	},
		{
		id:11,
		img:'../images/l_1.jpg',
		price:'￥358',
		title:'鲜花/忘情巴黎-33枝红玫瑰'
	},
		{
		id:12,
		img:'../images/l_1.jpg',
		price:'￥358',
		title:'鲜花/忘情巴黎-33枝红玫瑰'
	},
		{
		id:13,
		img:'../images/l_1.jpg',
		price:'￥358',
		title:'鲜花/忘情巴黎-33枝红玫瑰'
	},	{
		id:14,
		img:'../images/l_1.jpg',
		price:'￥358',
		title:'鲜花/忘情巴黎-33枝红玫瑰'
	}

];
var strDom='';
for(var i=0; i<arr.length;i++){
 strDom +=
        `<li class="gift" onclick="localNum('${arr[i].id}')" >
        <a href="javascript:;" class="beauty"><img src="${arr[i].img}"></a>
        <div class="price">
            <span class="price_num">'${arr[i].price}'</span>
        </div>
        <div class="letter">
            <a href="./detail.html" target="_blank">'${arr[i].title}'</a>
        </div>
        <div class="coll_cart">
            <a href="javascript:;" class="coll_letter_color"><span class="coll"></span>收藏</a><a href="javascript:;" class="cart_bg"><span class="cart"></span>加入购物车</a>
        </div>
    </li>`
  }
$(".list").append(strDom);
// function  localNum(id) {
//     localStorage.setItem("goods",id);
//     window.location.href='../html/detail.html';
// }