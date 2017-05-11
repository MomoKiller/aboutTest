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
//定义按钮 展开所有项目 的事件
$("#tableBeforHtml").click(function(){
    //$("#tableCenter tr").attr("class","show");
    $("#tableCenter tr").removeClass("hidden");
});

//测试使用的HTMLL
var tableHtml = '<tr>'+
    '<td class="col-md-3">bootstrap</td>'+
    '<td>'+
    '<p>The most popular front-end framework for developing responsive,mobile first project on the web</p>'+
    '<p><span class="glyphicon glyphicon-star">110244</span></p>'+
    '</td>'+
    '</tr>'+
    '<tr>'+
    '<td>react</td>'+
    '<td>'+
    '<p>React is a JavaScript library for builbing user interface</p>'+
    '<p><span class="glyphicon glyphicon-star">66086</span></p>'+
    '</td>'+
    '</tr>';
//专业制造假数据 的 方法
function fakeTableDate(){
    var tableDate = [];
    var newArr;
    for(var i=0;i<20;i++){
        newArr = {};
        if(i%2==1){
            newArr.textTitle = "react";
            newArr.textContent = "React is a JavaScript library for builbing user interface";
            newArr.textNum = 66086;
        }else {
            newArr.textTitle = "bootstrap";
            newArr.textContent = "The most popular front-end framework for developing responsive,mobile first project on the web";
            newArr.textNum = 110244;
        }
        tableDate.push(newArr);
    }
    return tableDate;
};
//将专业制造的假数据 进行 HTML化处理
function fakeDateToHtml(fakeDate){
    var tableHtml = '';
    $.each(fakeDate,function(index,val){
        if(index<10){
            tableHtml +=  '<tr>'+
                '<td class="col-md-3">'+val.textTitle+'</td>'+
                '<td>'+
                '<p>'+val.textContent+'</p>'+
                '<p><span class="glyphicon glyphicon-star">'+val.textNum+'</span></p>'+
                '</td>'+
                '</tr>';
        }else{
            tableHtml +=  '<tr class="hidden">'+
                '<td class="col-md-3">'+val.textTitle+'</td>'+
                '<td>'+
                '<p>'+val.textContent+'</p>'+
                '<p><span class="glyphicon glyphicon-star">'+val.textNum+'</span></p>'+
                '</td>'+
                '</tr>';
        }

    });
    return tableHtml;
}
$(function () {
    var tableDate = fakeTableDate();
    var tableBeforHtml = fakeDateToHtml(tableDate);
    $("#tableBeforHtml").before(tableBeforHtml);
});

window.onload = function(){
    var oTop = document.getElementById("to_top");
    var screenw = document.documentElement.clientWidth || document.body.clientWidth;
    var screenh = document.documentElement.clientHeight || document.body.clientHeight;
    oTop.style.left = -10+screenw - oTop.offsetWidth +"px";
    oTop.style.top =-10+ screenh - oTop.offsetHeight + "px";
    window.onscroll = function(){
        var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
        oTop.style.top = -10+ screenh - oTop.offsetHeight + scrolltop +"px";
    }
    oTop.onclick = function(){
        document.documentElement.scrollTop = document.body.scrollTop =0;
    }
}
