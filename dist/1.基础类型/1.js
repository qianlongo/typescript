"use strict";
var isDone = false;
var isNumber = 1;
var isString = 'hello';
// number是数据类型，[]表示数组
var array = [1, 2];
var x = ['q', 2];
var y = 1;
// 枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Red;
function create(o) {
    return o;
}
create({
    name: '1'
});
create(null);
console.log(isDone);
