"use strict";var placehold=document.getElementById("placehold"),ssUo=document.getElementById("ss_uo");function place(o){var n=["爱情鲜花","友情鲜花","商务花","生日鲜花","玫瑰","郁金香"],s=0;o.value=n[s];var c=null;function e(){""!==o.value&&o.value!==n[s]||(c=setInterval(function(){n.length<=++s&&(s=0),o.value=n[s]},3e3))}e(),o.onfocus=function(){clearInterval(c),this.value===n[s]&&(this.value=""),ssUo.style.display="block"},o.onblur=function(){e(),""===this.value&&(this.value=n[s]),ssUo.style.display="none"}}function callback(o){ssUo.innerHTML="",o.result.forEach(function(o){var n=document.createElement("li");n.innerHTML=o[0],ssUo.append(n)})}place(placehold),placehold.oninput=function(){var o=document.createElement("script");o.src="https://suggest.taobao.com/sug?code=utf-8&q="+this.value+"&_ksTS=1524750507019_398&callback=callback",document.body.appendChild(o)},$(function(){$(".customer").on("mouseover",function(){$(this).css("backgroundColor","#fff"),$(".service-list").css("display","block")}),$(".customer").on("mouseout",function(){$(this).css("backgroundColor","#f2f2f2"),$(".service-list").css("display","none")})}),$(function(){$(".nav-cart").on("mouseover",function(){$(this).css("backgroundColor","#fff"),$(".shopping-outer").css("display","block")}),$(".nav-cart").on("mouseout",function(){$(this).css("backgroundColor","#f2f2f2"),$(".shopping-outer").css("display","none")})}),$(function(){$(".dropdown-wx").on("mouseover",function(){$(this).css("backgroundColor","#fff"),$(".nav-wx").css("display","block")}),$(".dropdown-wx").on("mouseout",function(){$(this).css("backgroundColor","#f2f2f2"),$(".nav-wx").css("display","none")})}),$(function(){$(".dropdown-app").on("mouseover",function(){$(this).css("backgroundColor","#fff"),$(".nav-app").css("display","block")}),$(".dropdown-app").on("mouseout",function(){$(this).css("backgroundColor","#f2f2f2"),$(".nav-app").css("display","none")})});