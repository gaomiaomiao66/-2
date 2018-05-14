var arr=[
	{
		id:1,
		img:'../images/l_1.jpg',
		price:'￥358',
		title:'鲜花/忘情巴黎-33枝红玫瑰'
	},
		{
		id:2,
		img:'../images/l_2.jpg',
		price:'￥569',
		title:'鲜花/忘情巴黎-33枝红玫瑰'
	},
		{
		id:3,
		img:'../images/l_3.jpg',
		price:'￥199',
		title:'鲜花/忘情巴黎-33枝红玫瑰'
	},
		{
		id:4,
		img:'../images/l_4.jpg',
		price:'￥139',
		title:'鲜花/忘情巴黎-33枝红玫瑰'
	},
		{
		id:5,
		img:'../images/l_5.jpg',
		price:'￥245',
		title:'鲜花/忘情巴黎-33枝红玫瑰'
	},
		{
		id:6,
		img:'../images/l_6.jpg',
		price:'￥179',
		title:'鲜花/忘情巴黎-33枝红玫瑰'
	},
		{
		id:7,
		img:'../images/love_7.jpg',
		price:'￥206',
		title:'鲜花/忘情巴黎-33枝红玫瑰'
	},
		{
		id:8,
		img:'../images/love_8.jpg',
		price:'￥298',
		title:'鲜花/忘情巴黎-33枝红玫瑰'
	},
		{
		id:9,
		img:'../images/love_9.jpg',
		price:'￥599',
		title:'鲜花/忘情巴黎-33枝红玫瑰'
	},
		{
		id:10,
		img:'../images/love_10.jpg',
		price:'￥139',
		title:'鲜花/忘情巴黎-33枝红玫瑰'
	},
		{
		id:11,
		img:'../images/love_11.jpg',
		price:'￥308',
		title:'鲜花/忘情巴黎-33枝红玫瑰'
	},
		{
		id:12,
		img:'../images/love_12.jpg',
		price:'￥569',
		title:'鲜花/忘情巴黎-33枝红玫瑰'
	},
		{
		id:13,
		img:'../images/love_14.jpg',
		price:'￥236',
		title:'鲜花/忘情巴黎-33枝红玫瑰'
	},	{
		id:14,
		img:'../images/love_15.jpg',
		price:'￥368',
		title:'鲜花/忘情巴黎-33枝红玫瑰'
	}

];
var strDom='';
for(var i=0; i<arr.length;i++){
 strDom +=
        `<li class="gift" onclick="localNum(${arr[i].id})" >
        <a href="javascript:;" class="beauty"><img src="${arr[i].img}"></a>
        <div class="price">
            <span class="price_num">${arr[i].price}</span>
        </div>
        <div class="letter">
            <a href="./detail.html" target="_blank">${arr[i].title}</a>
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


// 分页符
 $(function(){
     
    //每页显示的数目
    var show_per_page = 5; 
    //获取content对象里面，数据的数量
    var number_of_items = $('#content').children().size();
    //计算页面显示的数量
    var number_of_pages = Math.ceil(number_of_items/show_per_page);
     
    //隐藏域默认值
    $('#current_page').val(0);
    $('#show_per_page').val(show_per_page);
     
    var navigation_html = '<a class="previous_link" href="javascript:previous();">上一页</a>';
    var current_link = 0;
    while(number_of_pages > current_link){
        navigation_html += '<a class="page_link" href="javascript:go_to_page(' + current_link +')" longdesc="' + current_link +'">'+ (current_link + 1) +'</a>';
        current_link++;
    }
    navigation_html += '<a class="next_link" href="javascript:next();">下一页</a>';
     
    $('#page_navigation').html(navigation_html);
     
    //add active_page class to the first page link
    $('#page_navigation .page_link:first').addClass('active_page');
     
    //隐藏该对象下面的所有子元素
    $('#content').children().css('display', 'none');
     
    //显示第n（show_per_page）元素
    $('#content').children().slice(0, show_per_page).css('display', 'block');
     
});
 
//上一页
function previous(){
    new_page = parseInt($('#current_page').val()) - 1;
    //if there is an item before the current active link run the function
    if($('.active_page').prev('.page_link').length==true){
        go_to_page(new_page);
    }
     
}
//下一页
function next(){
    new_page = parseInt($('#current_page').val()) + 1;
    //if there is an item after the current active link run the function
    if($('.active_page').next('.page_link').length==true){
        go_to_page(new_page);
    }
     
}
//跳转某一页
function go_to_page(page_num){
    //get the number of items shown per page
    var show_per_page = parseInt($('#show_per_page').val());
     
    //get the element number where to start the slice from
    start_from = page_num * show_per_page;
     
    //get the element number where to end the slice
    end_on = start_from + show_per_page;
     
    //hide all children elements of content div, get specific items and show them
    $('#content').children().css('display', 'none').slice(start_from, end_on).css('display', 'block');
     
    /*get the page link that has longdesc attribute of the current page and add active_page class to it
    and remove that class from previously active page link*/
    $('.page_link[longdesc=' + page_num +']').addClass('active_page').siblings('.active_page').removeClass('active_page');
     
    //update the current page input field
    $('#current_page').val(page_num);
}