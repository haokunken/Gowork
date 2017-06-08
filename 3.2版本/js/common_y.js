// lazyload
$("img.lazy").lazyload({
	skip_invisible: false,
	threshold: 200,//图片距离屏幕200px时提前载入
	failurelimit: 300
});
$(function(){
	// --------------head-city-------------------//
	$(".header-city").hover(function() {
	    $(this).addClass("active");
	});
	$(".header-city").mouseleave(function() {
		$(this).removeClass("active");
		$(this).find(".searchMini").hide();
	});

   // ------------右侧搜索框----------------//
    var $brand_letter = $('.brand-letters a');
	$brand_letter.click(function() {
		var $lettercon = $('#master-indexletters_' + $(this).attr('data-value'));
		$lettercon.length > 0 && $(".brand-name").animate({
			scrollTop: $lettercon.offset().top - $(".brand-name").offset().top + $(".brand-name").scrollTop()
		}, 500)
	});
    var $brand_name = $('#brand-name a');
	$brand_name.click(function() {
		$('.models_bg').show();
	});
   $("#indexSear").click(function(e) {
		$("#brandFirst").show();
		$(document).click(function() {
			$(".brand-bg").hide();
			$(".carlin").hide();
			$brand_name.removeClass('current');
		});
		e.stopPropagation();
	});
	$("#brandFirst").click(function(e) {
		e.stopPropagation();
	});
	$('.sug_submit').click(function() {
		var brandTypeId = $('#searchBrandTypeId').val();
	 	window.open(url_pre+'/'+ brandTypeId);
	});
    $.ajax({
		type: "GET",
		url: url_pre+'/xunjia/chedata',
		data: {},
		dataType: "jsonp",
		jsonp: "callback",
		success: function(result) {
			var num = 1;
			var num1 = 1;
			$.each(result, function(n, value) {
				if (value != '') {
					var trs = '<span id="master-indexletters_' + n + '">' + n + '</span>';
					$.each(value, function(k, val) {
						trs += '<a href="javascript:queryChexi(' + val.brand_id + ');" title="' + val.brand_name + '" data-value="' + val.brand_id + '">' + val.brand_name + '</a>';
						num = num + 1;
					});
					trs += "</p></li>";
				}
				$("#brand-name").append(trs);
			});
		}
	});
    //底部的热门车系 热门品牌tab
	$(".cxpp_tab .cxpp_tit li").hover(function() {
		var index = $(".cxpp_tab .cxpp_tit li").index($(this));
		$(".cxpp_tab .cxpp_tit li a").removeClass("current");
		$(this).find("a").addClass("current");
		$(".cxppCon").hide().eq(index).show();
	});

});
//搜索城市 top
$("#searchCityBtn").click(function () {
    var cityname = $("#searchCity").val();
     $.ajax({
        'type':'post',
        'url':url_pre+'/ajax/searchCity',
        'data':{'_token':'123','cityname':cityname},
        'dataType':'json',
        success:function(data){
            if(data.code==0){
                changeCityById(data.id)
            }else{
                alert('请输入正确城市名称');
            }

        },
        error:function(){

        }
    });
});
$("#searchCity").keyup(function(){
	var keywords = $("#searchCity").val();
    keywords = $.trim(keywords);
    if(keywords==''){
        return;
    }
    $.ajax({
        'type':'post',
        'url':url_pre+'/ajax/searchCityName',
        'data':{'_token':'123','keywords':keywords},
        'dataType':'json',
        success:function(data){
            $("#cityQueryList").show();
            $("#searchCityList").html(data);
        },
        error:function(){

        }
    });
});
// 字母定位
var $fastNum03 = $('.header-city .sfNum a');
$fastNum03.each(function(){
    $(this).click(function() {
    	var num03 = $(this).index() - 1;
		var clist03 = $(this).parents(".sfNum").next(".cityList");
		var legy03 = clist03.find(".zimu");
		clist03.animate({
			scrollTop: legy03.eq(num03).offset().top - clist03.offset().top + clist03.scrollTop()
		}, 300);
    });
});
// 改变城市
$(".cityBox a[data-ikey]").on("click", function () {alert(333333);
    changeCity1($(this));
});
function changeCity1(obj){

    var id = $(obj).attr("data-ikey");
    $.ajax({
        url: url_pre+"/ajax/getusercity",
        type: 'POST',
        data: {id: id},
        dataType:'jsonp',
        jsonp: "Callback_city",
        success: function (rsp) {
            //console.log(rsp);
            if(rsp.code==0)
            {
                $('#auto_citypop').html(rsp.data.name);
                var vurl=rsp.url;
                window.location.href=vurl;
            }
        },
        error:function(){
        }
    });
}
function changeCityById(id){

    $.ajax({
        url: url_pre+"/ajax/getusercity",
        type: 'POST',
        data: {id: id},
        dataType:'jsonp',
        jsonp: "Callback_city",
        success: function (rsp) {
            if(rsp.code==0)
            {
                $('#auto_citypop').html(rsp.data.name);
                var vurl=rsp.url;
                window.location.href=vurl;
            }
        },
        error:function(){
        }
    });
}
function getCookie(name){
	var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
	if(arr=document.cookie.match(reg))
		return unescape(arr[2]);
	else
		return null;
}
var json_city = getCookie("_jsoncity");
if(json_city != null) {
	var json_city_obj = eval("("+json_city+")");//转换为json对象 
    $('#auto_citypop').html(json_city_obj.name);
    $('#delarcityid').html(json_city_obj.name);
    $('.cheshi .tit h2').html(json_city_obj.name+'车市');		
} else {
    //自动切换城市
    $.ajax({
        type: "GET",
        url: url_pre+'/auto/autoCity',
        data: {},
        dataType:'jsonp',
        jsonp:"callback",
        success: function (result) {
            $('#auto_citypop').html(result);
            $('#delarcityid').html(result);
            $('.cheshi .tit h2').html(result+'车市');
        },
        error:function(xhr){
            console.log(xhr);
        }
    });
}
$('.city').show();
//品牌查询车系
function queryChexi(brand_id) {
	$.ajax({
		type: 'post',
		url: url_pre+'/ajax/getAllBrandTypeInfoByBrandId',
		data: {
			'brand_id': brand_id
		},
		dataType: 'jsonp',
		jsonp: "callback",
		success: function(data) {
			var chexiStr = '';
			$("#brand-type-name").html('');
			chexiStr = '<h3 class="allstyle"><a href="javascript:;">全部车系>></a></h3>';
			chexiStr += '<div class="carlin" id="carlin_' + brand_id + '">';
			$(data).each(function(i) {
				var list = data[i]['list'];
				var name = data[i]['name'];
				chexiStr += '<p><a href="javascript:;">' + name + '</a></p>';
				$(list).each(function(j) {
					chexiStr += '<a href="javascript:selectChexi(' + list[j]['car_brand_type_id'] + ',' + '\'' + list[j]['car_brand_type_name'] + '\'' + ',' + brand_id + ')">' + list[j]['car_brand_type_name'] + '</a>';
				});
			});
			chexiStr += '</div>';
			$("#brand-type-name").html(chexiStr);
			$('.models_bg').show();
		},
		error: function() {
		}
	});
}
//选择车系
function selectChexi(car_brand_type_id, car_brand_type_name, brand_id) {
	$("#indexSear").val(car_brand_type_name);
	$("#brandId").val(brand_id);
	$("#searchBrandTypeId").val(car_brand_type_id);
}
// 热门城市
$(".hotctCon a[data-ikey]").on("click", function() {
    changeCity_hot($(this));
});
function changeCity_hot(obj){

    var id = $(obj).attr("data-ikey");
    $.ajax({
        url: url_pre+"/ajax/getusercity",
        type: 'POST',
        data: {id: id},
        dataType:'jsonp',
        jsonp: "Callback_city",
        success: function (rsp) {
            if(rsp.code==0)
            {
                $('#local_citypop').html(rsp.data.name);
                var vurl=rsp.url;
                window.location.href=vurl;
            }
        },
        error:function(){
        }
    });
}

function changeCityById(id){

    $.ajax({
        url: url_pre+"/ajax/getusercity",
        type: 'POST',
        data: {id: id},
        dataType:'jsonp',
        jsonp: "Callback_city",
        success: function (rsp) {
            if(rsp.code==0)
            {
                $('#local_citypop').html(rsp.data.name);
                var vurl=window.location.href;
                window.location.href=vurl;
            }
        },
        error:function(){
        }
    });
}
$(function () {
    if(json_city != null) {
        var json_city_obj = eval("("+json_city+")");//转换为json对象 
        $('#local_citypop').html(json_city_obj.name);
    } else {
        //自动切换城市
        $.ajax({
            type: "GET",
            url: url_pre+'/auto/autoCity',
            data: {},
            dataType:'jsonp',
            jsonp:"callback",
            success: function (result) {
                $('#local_citypop').html(result);
            },
            error:function(xhr){
                console.log(xhr);
            }
        });
   }

   $('.city_hot').show();
});