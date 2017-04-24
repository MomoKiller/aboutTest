/**
 * Created by pkk on 2017/1/18.
 */
/*获取页面的高度*/
//var pageH = document.documentElement.clientHeight - 30;
//屏幕分辨率的高度
var pageH = window.screen.height - 30;
/*定义页面北部占页面高度的比例*/
var pageRate = 4/9;
/*定义标题的高度*/
var h3H = 40;
/*定义边距值*/
var gaugeH = 10;
/*计算出北部panel的高度*/
var northPageH = pageH*pageRate;
/*计算出南部panel的高度*/
var southPageH = pageH-pageH*pageRate;
/*给南北部的panel设置高度*/
$(".northPanel").height(northPageH);
$(".southPanel").height(southPageH);
//northPanel 中panel的高度定义
$(".northLeftPanel").height(northPageH-2*gaugeH-h3H);
$(".northCenterPanel").height(northPageH-2*gaugeH-h3H);
$(".northRightPanel").height(northPageH-2*gaugeH-h3H);
//sourthPanel 中panel的高度定义
$(".southLeftPanel").height(southPageH-2*gaugeH);
$(".southCenterPanel").height(southPageH-2*gaugeH);