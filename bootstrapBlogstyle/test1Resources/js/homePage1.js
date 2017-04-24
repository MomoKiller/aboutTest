/**
 * Created by pkk on 2017/1/17.
 */
//获取浏览器打开页面的高度
var pageH = document.documentElement.clientHeight - 30;
//获取屏幕分辨率的高度
var screenH = window.screen.height - 30;
//北部panel占屏比例
var pageRate = 4/9;
//设置H4 的高度
var h4H = 40;
//设置间隔
var space = 20;

var northPageH = screenH * pageRate;
var southPageH = screenH - screenH * pageRate;

$(".northPanel").height(northPageH);
$(".southPanel").height(southPageH);

//给北部和南部中的panel设置高度
$(".northPanel .row .panel").height(northPageH - h4H - space);
$(".southPanel .row .panel").height(southPageH - space)