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
		chemistry("化学作业打卡", isPC() ? "" : "");// 化学
		geography("地理疑难问题统计", isPC() ? "https://www.wjx.top/jq/61782838.aspx" : "https://www.wjx.top/m/61782838.aspx");// 地理
		IT("上个星期五的信息作业,请上次没写的人补上!", IsPC() ? "https://ks.wjx.top/jq/60120502.aspx" : "https://ks.wjx.top/m/60120502.aspx");// 信息
		summary("网课作业打卡总汇", isPC() ? "https://www.wjx.top/jq/61969842.aspx" : "https://www.wjx.top/m/61969842.aspx");// 总汇
	}else { // 未到打卡时间
		// 显示未到时间信息
		console.log("未到时间");
		// 外层框架
		var div = document.createElement("div");
		div.id = "null";
		document.body.appendChild(div);
		// 提示文本_时间未到
		var p1 = document.createElement("p");
		p1.innerHTML = "现在还未到作业打卡时间(晚上9点),请先认真完成作业.";
		div.appendChild(p1);
		// 提示文本_手动刷新
		var p2 = document.createElement("p");
		p2.innerHTML = "如果已到9点,请刷新或重新打开本网页.";
		div.appendChild(p2);
	}
})();

/**
 *	化学
 */
function chemistry(title,url) {
	// 外层框架
	var div = document.createElement("div");
	div.id = "chemistry";
	document.body.appendChild(div);
	// 标题
	var h3 = document.createElement("h3");
	h3.innerHTML = title;
	div.appendChild(h3);
	// 提示文本
	var p = document.createElement("p");
	p.innerHTML = "请自行在\"化学作业检查群\"中打卡";
	div.appendChild(p);
}

/**
 *	地理
 */
function geography(title, url) {
	// 外层框架
	var div = document.createElement("div");
	div.id = "geography";
	document.body.appendChild(div);
	// 标题
	var h3 = document.createElement("h3");
	h3.innerHTML = title;
	div.appendChild(h3);
	// 无法打开兼容
	var p = document.createElement("p");
	p.innerHTML = "如果下面的页面长时间显示白屏,请";
	div.appendChild(p);
	// 跳转链接
	var a = document.createElement("a");
	a.href = url;
	a.innerHTML = "点此跳转";
	a.onclick = function(){
		window.location.href=url;
	};// 绑定点按事件,以兼容移动端
	p.appendChild(a);
	// 访问页面
	var iframe = document.createElement("iframe");
	iframe.src = url;
	iframe.frameborder = "0";
	iframe.scrolling = "auto";
	div.appendChild(iframe);
}

/**
  *	信息技术
  */
function IT(title, url) {
	// 外层框架
	var div = document.createElement("div");
	div.id = "geography";
	document.body.appendChild(div);
	// 标题
	var h3 = document.createElement("h3");
	h3.innerHTML = title;
	div.appendChild(h3);
	// 无法打开兼容
	var p = document.createElement("p");
	p.innerHTML = "如果下面的页面长时间显示白屏,请";
	div.appendChild(p);
	// 跳转链接
	var a = document.createElement("a");
	a.href = url;
	a.innerHTML = "点此跳转";
	a.onclick = function(){
		window.location.href=url;
	};// 绑定点按事件,以兼容移动端
	p.appendChild(a);
	// 访问页面
	var iframe = document.createElement("iframe");
	iframe.src = url;
	iframe.frameborder = "0";
	iframe.scrolling = "auto";
	div.appendChild(iframe);
}

/**
 *	总汇
 */
function summary(title, url) {
	// 外层框架
	var div = document.createElement("div");
	div.id = "summary";
	document.body.appendChild(div);
	// 标题
	var h3 = document.createElement("h3");
	h3.innerHTML = title;
	div.appendChild(h3);
	// 无法打开兼容
	var p = document.createElement("p");
	p.innerHTML = "如果下面的页面长时间显示白屏,请";
	div.appendChild(p);
	// 跳转链接
	var a = document.createElement("a");
	a.href = url;
	a.innerHTML = "点此跳转";
	a.onclick = function(){
		window.location.href=url;
	};// 绑定点按事件,以兼容移动端
	p.appendChild(a);
	// 访问页面
	var iframe = document.createElement("iframe");
	iframe.src = url;
	iframe.frameborder = "0";
	iframe.scrolling = "auto";
	div.appendChild(iframe);
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