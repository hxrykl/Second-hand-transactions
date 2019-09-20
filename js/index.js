
//根地址
var baseUrl = "http://134.175.154.93:6677";
var baseUrl2 = "http://134.175.100.63:6677";
//页面结构加载完时自行加载
$(function(){

	//为导航添加事件
	$("div.s-menu").on("click","div",function(){
		//获取自定义地址
		var url = $(this).attr("url");
		//删除属性名
		$("div.s-menu > div").removeClass("j-selection");
		//添加属性名
		$(this).addClass("j-selection");
		//删除图标
		$("div.s-menu > div > i").remove();
		//添加图标
		$(this).append('<i>></i>');
		//获取到菜单名
		var menun = $(this).children('span').text();
		//直接写入面包屑元素里
		$('.j-menun').text(menun);
		
		//获取到的html插入匹配的元素中
		$("#wrapper").load(url);
	});

	//自动点击第一个菜单栏
	$("div.s-menu > div:first-child").trigger('click');

	//为添加按钮绑定事件
	



});