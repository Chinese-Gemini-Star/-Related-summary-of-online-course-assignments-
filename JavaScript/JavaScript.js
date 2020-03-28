/**
  * 生成全部打卡界面
  */
function newAllSignInInterface() { 
// 在此处手动更新每日作业打卡框架
newSignInInterface("网课出勤打卡", undefined, "https://www.wjx.top/" + (isPC()? "jq" : "m") + "/67661044.aspx");
newSignInInterface("化学作业打卡", "请自行在\"106网课打卡群\"中打卡");
newSignInInterface("地理作业打卡", "请自行在\"106网课打卡群\"中打卡");
newSignInInterface("信息技术作业打卡", "请自行在\"106网课打卡群\"中打卡");
newSignInInterface("网课作业打卡总汇", undefined, "https://www.wjx.top/" + (isPC()? "jq" : "m") + "/67662655.aspx");
}

/**
  * 主函数
  * @param password 密钥
  */
(function(password){
	// 给熊孩子的警告
	console.log("请不要尝试更改网页源码,这样很无聊.与其用这些时间改网页的源码,不如再多去刷几道题.");
	
	// 获取当前时间对象
	var now = new Date();
	console.log(now);
	
	// 动态生成标题
	var month = parseInt(now.getMonth()) + 1;// 获取当前月份
	var date = parseInt(now.getDate());// 获取当前日期
	var day = parseInt(now.getDay());// 获取当前星期
	console.log(month + "月" + date + "日" + "星期:" +  day);
	document.title = month + "月" + date + "日" + document.title;// 动态更改网页标题
	var top = document.getElementById("top");// 获取网页顶端的div标签
	top.children[0].innerHTML = document.title;// 动态更改网页顶端文字
    
	//判断是否显示打卡页面
	var hour = parseInt(now.getHours());// 获取当前小时
	var minute = parseInt(now.getMinutes());// 获取当前分钟
	console.log(hour + "时" + minute + "分");
	var search = window.location.search.substring(1);// 获取当前网页参数
	var isNightTime = (hour == 21 && minute >= 30) || hour >= 22; // 晚上打卡时间判定(9点半以后)
	var isWeekendTime = (day == 6 && isNightTime) || (day == 0 && hour < 8); // 周末打卡时间区间:星期六晚上9点半到星期天早上8点前
	var isWeekdayTime = (day >= 1 && day <= 4 && isNightTime) || (day >= 2 && day <= 5 && hour < 8);// 工作日打卡时间:星期一到星期四晚上9点半至次日(星期二到星期五)早上8点前
	var passwordIsRight = search == "cipher="+encodeURI(password)+"&len=4";
    
	if (isWeekdayTime || isWeekendTime || passwordIsRight) {// 可显示打卡
		// 显示打卡网页,运维方法见index.html内的注释
		if (passwordIsRight)
			console.log("暗号正确");
		else 
			console.log("可打卡");
		newAllSignInInterface();
	} else { // 未到打卡时间
		// 显示未到时间信息
		console.log("未到时间");
		var search = window.location.search.substring(1);// 获取当前网页参数
		console.log(search);
		if(search != "") 
			window.location.href = window.location.href.split("?")[0];// 密钥错误,再次刷新页面
		// 获取暗层
		var homeworkTitle = document.getElementById("homework").children[0];
		// 禁止打开控制台
        document.oncontextmenu = new Function("return false;");// 禁用右键菜单
        document.onkeydown = document.onkeyup = document.onkeypress = 
            function(event) { 
                var e = event || window.event || arguments.callee.caller.arguments[0];
                if (e && e.keyCode == 123) {
//                    alert("请不要尝试更改网页源码,这样很无聊.与其用这些时间改网页的源码,不如再多去刷几道题.");
                    showPop("<p>请不要尝试更改网页源码,这样很无聊.与其用这些时间改网页的源码,不如再多去刷几道题.</p>");
                    e.returnValue = false;
                    return false;
                }
            };// 监听键盘F12事件,阻止打开控制台

        // 尝试阻止控制台调用JavaScript函数
        try {
            var $_console$$ = console;
            Object.defineProperty(window, "console", {
                get: function() {
                    if ($_console$$._commandLineAPI)
                        throw "请不要尝试更改网页源码,这样很无聊.与其用这些时间改网页的源码,不如再多去刷几道题.";
                        return $_console$$;
                },
                set: function($val$$) {
                    $_console$$ = $val$$;
                }
            });
        } catch ($ignore$$) {}
		// 显示未到时间界面
		newSignInInterface("现在还未到作业打卡时间或已过打卡时间(晚上9点半到第二天早上8点),请先认真完成作业或去自闭.","如果已到打卡时间,请刷新或重新打开本网页.");
		// 绑定按下事件(与松开配合判断长按)
		homeworkTitle.addEventListener(isPC() ? "mousedown" : "touchstart", function() {
			// 按下时间(全局变量)
			down = new Date();
		});
		// 绑定松开事件,并判定是否长按
		homeworkTitle.addEventListener(isPC() ? "mouseup" : "touchend", function() {
			// 松开时间(全局变量)
			up = new Date();
			// 判断是否长按0.5秒
			if(up - down >= 5 * 100) {
				// 触发密钥验证
				console.log("密钥验证触发");
				// 获取密钥输入
//				var imput = prompt("你在干什么?");
                if(isPC()){
                    showPop("<p>你在干什么?</p>"
                        +"<p><input type= \"text\" id= \"imput\" /></p>","processPasswordImput()");
                } else {
                    processPasswordImput(prompt("你在干什么?"));
                }
			}
		});
	}
})(/*在此处更新4位中文长度密钥,可用URI字符加密*/);

/**
 * 添加打卡页面
 * @param title 框架标题,可选
 * @param tips 提示(说明)文本,可选
 * @param url 地址,可选
 */
function  newSignInInterface(title, tips ,url) {
	// 外层框架
	var div = document.createElement("div");
	document.body.appendChild(div);
	if (title != undefined) {// 传入标题
		// 标题
		var h3 = document.createElement("h3");
		h3.innerHTML = title;
		div.appendChild(h3);
	}
	if (tips != undefined) {// 传入提示
		// 提示文本
		var p1 = document.createElement("p");
		p1.innerHTML = tips;
		p1.style = "color: red";// 设置提示文本颜色
		div.appendChild(p1);
	}
	if (url != undefined) {// 传入地址
		// 无法打开兼容
		var p2 = document.createElement("p");
		p2.innerHTML = "如果下面的页面长时间显示白屏,请";
		div.appendChild(p2);
		// 跳转链接
		var a = document.createElement("a");
		a.href = url;
		a.innerHTML = "点此跳转";
		a.addEventListener("touchstart",function() {
			window.location.href = url;	
		});// 绑定点按事件,以兼容不支持超链接的移动端
		p2.appendChild(a);
		// 访问页面
		var iframe = document.createElement("iframe");
		iframe.src = url;
		iframe.frameborder = "0";
		iframe.scrolling = "auto";
		div.appendChild(iframe);
	}
}

/**
  * 处理传入的密钥数据
  * @param imput 传入数据,不填代表通过输入框传入,填写代表通过其他方法传入,可省
  */
function processPasswordImput(imput) {
    if (imput == undefined)
        imput = document.getElementById("imput").value;// 获取用户输入
    console.log(imput + "\r\n" + encodeURI(imput));
    window.location.href = window.location.href.split("?")[0] +  "?cipher=" + encodeURI(imput) + "&len=" + imput.length;// 增加参数(自动转为url字符),并重新加载页面判定  
}

/**
  * 判断是否为PC端
  */
function isPC() {
		var userAgentInfo = navigator.userAgent;
		var Agents = ["Android", "iPhone","SymbianOS", "Windows Phone","iPad", "iPod"];
		var flag = true;
		for (var v = 0; v < Agents.length; v++) {
				if (userAgentInfo.indexOf(Agents[v]) > 0) {
						flag = false;
					break;
				}
		}
		return flag;
}
