"use strict";var useReg=/^\w{6,10}$/,passReg=/^[0-9a-zA-Z]\w{6,10}$/,phoneReg=/^[1][3,4,5,7,8][0-9]{9}$/,emilReg=/^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/;function Reg(s,t,e){s.test(t.val())?($("#"+e).html("√"),$("#"+e).css("color","green"),t.css("border","none")):($("#"+e).html("×"),$("#"+e).css("color","red"),t.css("border","1px solid red"))}$("input").focus(function(){$(this).css({border:"1px solid skyblue"})}),$("input").blur(function(){$(this).css({border:"none"}),"txt"==$(this).context.id?Reg(useReg,$(this),"span1"):"psw"==$(this).context.id?Reg(passReg,$(this),"span2"):"num"==$(this).context.id?Reg(phoneReg,$(this),"span3"):Reg(emilReg,$(this),"span4")}),$("button").click(function(){if("√"==$("#span1").html()&&"√"==$("#span3").html()&&"√"==$("#span2").html()&&"√"==$("#span4").html())return!(window.location.href="login.html");"×"==$("#span1").html()?alert("账号错了"):"×"==$("#span2").html()?alert("密码错了"):"×"==$("#span3").html()?alert("手机号错了"):alert("邮箱输入有误")});