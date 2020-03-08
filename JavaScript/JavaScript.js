/**
   *	生成全部打卡界面
   */
function newAllSignInInterface() {
	// 在此处手动更新每日作业打卡框架
}

/**
  *	主函数
  */
(function(){
	// 给熊孩子的警告
	console.log("请不要尝试更改网页源码,这样很无聊.与其用这些时间改网页的源码,不如再多去刷几道题.");
	
	// 获取当前时间对象
	var now = new Date();
	console.log(now);
	
	// 动态生成标题
	var month = parseInt(now.getMonth()) + 1;// 获取当前月份
	var day = parseInt(now.getDay()) + 1;// 获取当前日期
	console.log(month + "月" + day + "日");
	document.title = month + "月" + day + "日" + document.title;// 动态更改网页标题
	var top = document.getElementById("top");// 获取网页顶端的div标签
	top.children[0].innerHTML = document.title;// 动态更改网页顶端文字

	//判断是否开始打卡
	var hour = parseInt(now.getHours());// 获取当前小时
	console.log(hour + "时");
	if(hour >= 21) {// 到打卡时间
		// 显示打卡网页,运维方法见index.html内的注释
		console.log("可打卡");
		newAllSignInInterface();
	} else { // 未到打卡时间
		// 显示未到时间信息
		console.log("未到时间");
		var search = window.location.search.substring(1);// 获取当前网页参数
		console.log(search);
		if(search != "cipher=%E5%88%86%E6%97%B6%E5%8C%96%E8%82%B2") {// 判断时候拥有正确的密钥
			// 无密钥,显示未到时间界面
			newSignInInterface("现在还未到作业打卡时间(晚上9点),请先认真完成作业.","如果已到9点,请刷新或重新打开本网页.");
			// 获取暗层
			var homeworkTitle = document.getElementById("homework").children[0];
			// 绑定按下事件(与松开配合判断长按)
			homeworkTitle.onmousedown = function() {
				// 按下时间(全局变量)
				down = new Date();
			}
			// 绑定松开事件,并判定是否长按
			homeworkTitle.onmouseup = function() {
				// 松开时间(全局变量)
				up = new Date();
				// 判断是否长按1秒
				if(up - down >= 1 * 1000) {
					// 触发密钥验证
					console.log("密钥验证触发");
					// 获取密钥输入
					var imput = prompt("你在干什么?");
					console.log(imput);
					if(imput != null && imput != "")// 输入内容
						window.location.href += "?cipher=" + imput;// 增加参数,并重新加载页面判定
				}
			}
		} else {
			// 密钥正确
			console.log("暗号正确,分时化育");
			// 提前显示所有打卡界面
			newAllSignInInterface();
		}
	}
})();

/**
 *	添加打卡页面
 *	@param title 框架标题,可选
 *	@param tips 提示(说明)文本,可选
 *	@param url 地址,可选
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
		a.onclick = function(){
			window.location.href = url;
		};// 绑定点按事件,以兼容移动端
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
  *	判断是否为PC端
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