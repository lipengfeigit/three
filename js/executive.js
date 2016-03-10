// JavaScript Document
/*
	执行
	Author:Parker
	Date:2015/6/30
*/
$(function(){
	goods.showShopcat();
	$(".con-sub .con-shop").each(function(i){
		$(this).click(function(){
			$(this).addClass("left_p");
			goods.addToshopCatAnimation();
			$(this).removeClass("left_p");
		    //goods.addToCatAjax();
		})
	})
})