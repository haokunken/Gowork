$(function(){
	$(".k_list li.l_01").hover(function(){
		$(this).toggleClass("active");
	})
// 价格切换
	$(".Navigation .jiage li a").click(function() {
        var index = $(".Navigation .jiage li a").index($(this))
        $(".Navigation .jiage li a").removeClass("current");
        $(this).addClass("current");
        $(".price").hide().eq(index).show();
        $(this).parent().parent().siblings(".rightLabel").html($(this).html());
    });
// 车型切换
	$(".Navigation .jibie li a").click(function() {
        var index = $(".Navigation .jibie li a").index($(this))
        $(".Navigation .jibie li a").removeClass("current");
        $(this).addClass("current");
        $(".Models").hide().eq(index).show();
        $(this).parent().parent().siblings(".rightLabel").html($(this).html());
    });
// 国别切换
	$(".Navigation .guobie li a").click(function() {
        var index = $(".Navigation .guobie li a").index($(this))
        $(".Navigation .guobie li a").removeClass("current");
        $(this).addClass("current");
        $(".Country").hide().eq(index).show();
        $(this).parent().parent().siblings(".rightLabel").html($(this).html());
    });
// 品牌切换
	$(".Navigation .pingpai li a").click(function() {
        var index = $(".Navigation .pingpai li a").index($(this))
        $(".Navigation .pingpai li a").removeClass("current");
        $(this).addClass("current");
        $(".brand").hide().eq(index).show();
        $(this).parent().parent().siblings(".rightLabel").html($(this).html());
        
    });

// 左侧选项卡
   $(".k_list li").click(function() {
   	    var index = $(".k_list li").index($(this))
   	    $(".k_list li").removeClass("l_current");
   	    $(this).addClass("l_current");
        $(".Navigation").hide().eq(index).show();
    });
});