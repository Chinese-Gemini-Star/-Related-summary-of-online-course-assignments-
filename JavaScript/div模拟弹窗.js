/**
  * 获取当前页面位置
  */
function getPosition() { 
    var top = document.documentElement.scrollTop; 
    var left = document.documentElement.scrollLeft; 
    var height = document.documentElement.clientHeight; 
    var width = document.documentElement.clientWidth; 
    return {
        top:top,
        left:left,
        height:height,
        width:width
    }; 
} 

/**
  * 关闭弹窗
  */
function closePop(){
    var pop = document.getElementById("pop");// 获取弹窗
    if(pop != null)
        pop.parentNode.removeChild(pop);// 删除弹窗
}

/**
  * 弹出弹窗
  * @param text弹窗文本,支持html格式
  * @param buttonClick 退出按钮监听事件,默认为closePop(),可选
  */
function showPop(text, buttonClick){
    // 弹窗外观
    var width = 600;// 宽度
    var height = 200;// 高度
    
    // 弹窗
    var pop = document.getElementById("pop");
    // 如果弹窗不存在,就生成一个弹窗
    if (document.getElementById("pop") == null) 
        pop = document.createElement("div");
    
    // 设置弹窗样式
    pop.id = "pop";// 设置id为pop
    pop.innerHTML = text;// 设置内容
    pop.style.border = "1px solid #CCC";// 设置边框
    pop.style.backgroundColor = "#000000"; // 设置背景色为白色
    pop.style.color = "white";// 设置文字颜色
    pop.style.textAlign = "center";// 设置文字水平居中
    pop.style.position = "absolute";// 设置为绝对定位
    pop.style.zIndex = "999";// 置于顶层
    pop.style.width = width + "px";// 设置宽度
    pop.style.height = height + "px";// 设置高度
    
    // 定位在网页中心
    var Position = getPosition();// 获取网页位置
    var leftadd = (Position.width - width)/2;// 左侧偏移
    var topadd = (Position.height - height)/2;// 上侧偏移
    pop.style.top = (Position.top + topadd) + "px";// 定位垂直中心 
    pop.style.left = (Position.left + leftadd) + "px";// 定位水平中心

    window.onscroll = function (){ 
        var Position = getPosition();// 获取网页位置
        pop.style.top = (Position.top + topadd) +"px";// 定位垂直中心 
        pop.style.left = (Position.left + leftadd) +"px";// 定位水平中心
    };// 绑定滚动条事件,保持定位在网页中心
      
    // 关闭弹窗按钮
    var button = document.createElement("button");
    button.innerHTML = "确定";
    button.addEventListener("click", function() {
        eval(buttonClick != undefined ? buttonClick : "closePop();");// 运行事件代码
    });// 单击事件
    pop.appendChild(button);
    
    // 添加入网页中
    document.body.appendChild(pop);
} 