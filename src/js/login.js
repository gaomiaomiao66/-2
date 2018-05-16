        //正则判断账号(字符，字母，下划线，最短六位，最长10位)
		 var useReg=/^\w{6,10}$/;
		 // 密码的判断（字母，数字，特殊符号，最短六位，最长10位）
		 var passReg=/^[0-9a-zA-Z]\w{6,10}$/;

	$("input").focus(function(){
        $(this).css({'border':'1px solid skyblue'});
	});
	$("input").blur(function(){
		$(this).css({'border':'none'});
		if($(this).context.id=='user'){//账号
            Reg(useReg,$(this),'span1');
        }else{
        	Reg(useReg,$(this),'span2');
        }
	});

	 function Reg(reg,This,span){
        if(reg.test(This.val())){
            $("#"+span).html("√");
            $("#"+span).css("color",'green');
            This.css("border","none")
        }else{
            $("#"+span).html("×");
            $("#"+span).css("color",'red');
            This.css("border","1px solid red")
        }
    }

$(".last a").click(function(){
    if($("#span1").html()=='√'&&$("#span3").html()=='√'&&$("#span2").html()=='√'&&$("#span4").html()=='√'){
        window.location.href='login.html';
        return false;
    }else{
        if($("#span1").html()=='×'){
            alert("账号错了");
        }else if($("#span2").html()=='×'){
			alert("密码输入有误")
		}else{
			window.location.href='index.html';
		}
    }
});