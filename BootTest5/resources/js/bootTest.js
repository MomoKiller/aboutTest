/**
 * Created by pkk on 2017/5/11.
 */
//定义图片的鼠标浮动事件
$("div.picCenter img").hover(
    function(e){
        var picIndex = e.currentTarget.id;
        $(this).attr("src","resources/images/bootTest/"+picIndex+"OK.png");
    },
    function(e){
        var picIndex = e.currentTarget.id;
        $(this).attr("src","resources/images/bootTest/"+picIndex+"NO.png");
    }
);
//定义按钮组的选择事件
$("#btnRight button").click(
    function(e){
        $("#btnRight button").attr("class","btn btn-default");
        $(this).addClass("btn-success active");
    }
);