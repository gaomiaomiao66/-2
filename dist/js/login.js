"use strict";var useReg=/^\w{6,10}$/,passReg=/^[0-9a-zA-Z]\w{6,10}$/;function Reg(s,e,t){s.test(e.val())?($("#"+t).html("√"),$("#"+t).css("color","green"),e.css("border","none")):($("#"+t).html("×"),$("#"+t).css("color","red"),e.css("border","1px solid red"))}$("input").focus(function(){$(this).css({border:"1px solid skyblue"})}),$("input").blur(function(){$(this).css({border:"none"}),"user"==$(this).context.id?Reg(useReg,$(this),"span1"):Reg(useReg,$(this),"span2")});