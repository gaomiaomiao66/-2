$(function(){$("#wrap_img li").eq(0).show(),$("#dots li").mouseover(function(){$(this).addClass("active").siblings().removeClass("active");var i=$(this).index();s=i,$("#wrap_img li").eq(i).fadeIn(500).siblings().fadeOut(500)});var s=0,i=setInterval(e,2e3),e=function(){s=3<++s?0:s,$("#dots li").eq(s).addClass("active").siblings().removeClass("active"),$("#wrap_img li").eq(s).fadeIn(500).siblings().fadeOut(500)};$("#carousel").hover(function(){clearInterval(i)},function(){i=setInterval(e,2e3)}),$("#prev").click(function(){s=--s<0?2:s,$("#dots li").eq(s).addClass("active").siblings().removeClass("active"),$("#wrap_img li").eq(s).fadeIn(500).siblings().fadeOut(500)}),$("#next").click(function(){e()})}),$(function(){$(".product-list li").mouseover(function(){$(this).css("border","1px solid #999")}),$(".product-list li").mouseout(function(){$(this).css("border","")})});