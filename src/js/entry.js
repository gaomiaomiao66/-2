//正则判断账号(字符，字母，下划线，最短六位，最长10位)
		 var useReg=/^\w{6,10}$/;
		 // 密码的判断（字母，数字，特殊符号，最短六位，最长10位）
		 var passReg=/^[0-9a-zA-Z]\w{6,10}$/;
		 // 手机号码的判断(1开头，剩余的为10位数字)
		 var phoneReg=/^[1][3,4,5,7,8][0-9]{9}$/;
		 // 邮箱的验证
		 var emilReg=/^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/;
	$("input").focus(function(){
        $(this).css({'border':'1px solid skyblue'});
//        $(this).val("");
	});
	$("input").blur(function(){
		$(this).css({'border':'none'});
        if($(this).context.id=='txt'){//账号
            Reg(useReg,$(this),'span1');
        }else if($(this).context.id=='psw'){//密码
            Reg(passReg,$(this),'span2');
        }else if($(this).context.id=='num'){//手机号
            Reg(phoneReg,$(this),'span3');
        }else{
        	Reg(emilReg,$(this),'span4');
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
$("button").click(function(){
    if($("#span1").html()=='√'&&$("#span3").html()=='√'&&$("#span2").html()=='√'&&$("#span4").html()=='√'){
        window.location.href='login.html';
        return false;
    }else{
        if($("#span1").html()=='×'){
            alert("账号错了");
        }else if($("#span2").html()=='×'){
            alert("密码错了");
		}else if($("#span3").html()=='×'){
            alert("手机号错了");
		}else{
			alert("邮箱输入有误")
		}
    }
});