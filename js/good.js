// JavaScript Document
/*
	农淘商城首页
	Author:Parker
	Date:2015/6/30
*/
var goods = {
	//加入到购物车动画效果
	addToshopCatAnimation : function(){
		function _getinfo(o){
			var obj = $(o);
			fs = obj.offset();
			w = obj.outerWidth();h = obj.outerHeight();
			return {left:fs.left,top:fs.top,width:w,height:h};
		}
		info0 = _getinfo('.left_p');
		info1 = _getinfo('.gwc');
		$('.f000001').remove();
		$('<img/>').attr('src',$('.left_p img').attr('src')).addClass('f000001').css({position:'absolute',left:info0.left,top:info0.top,width:info0.width,height:info0.height,zIndex:999}).appendTo('body');
		$(".f000001").animate({left:info1.left,top:info1.top,height:info1.height,width:info1.width,opacity:0.3}, "slow",function(){
			$(".f000001").fadeOut('fast');
		});
	},
	//首页移入购物车
	showShopcat : function (){
			$(".gwc").hover(function(){
				$(".settleup-content").show();	
			},function(){
				$(".settleup-content").hide();
			})
		}
}