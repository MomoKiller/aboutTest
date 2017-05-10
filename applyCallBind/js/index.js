/**
 * Created by pkk on 2017/5/4.
 */
function fruits(){}

fruits.prototype = {
    color : "red",
    say:function(){
        console.log("My color is " + this.color);
    }
}

var apple = new fruits();
apple.say();
//调用apply call 方法
banana = {
    color : "yellow"
}
apple.say.call(banana);
apple.say.apply(banana);

//
var array1 = [12,"foo",{name:"Joe"},-2458];
var array2 = ["Doe",555,100];
Array.prototype.push.apply(array1,array2);
console.log(array1);

var numbers = [5,458,120,-215];
var maxInNumbers = Math.max.apply(Math,numbers);
    maxInNumbers = Math.max.call(Math,5,458,120,-215);
console.log(maxInNumbers);

function log(){
    var args = Array.prototype.slice.call(arguments);
    args.unshift('(app)');
    console.log.apply(console,args);
}


//bind
var foo1 = {
    bar : 1,
    eventBind:function(){
        var _this = this;
        $('.someClass').on('click',function(){
            console.log(_this.bar);
        });
    }
}

//同时使用 apply call bind
var obj = {
    x:81
};
var foo = {
    getx:function(){
        return this.x;
    }
}
console.log("这是一条华丽的分隔线。。。。。。");
console.log(foo.getx.bind(obj));
console.log(foo.getx.call(obj));
console.log(foo.getx.apply(obj));








