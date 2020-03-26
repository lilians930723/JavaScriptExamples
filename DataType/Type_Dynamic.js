

//Ex - 動態型別(dynamic data type)
var age = 35;
age = "真的假的35歲？";
age = false;

console.log(age);
console.log(typeof age);

//Ex - 動態型別有什麼關係？？？
//定義一個Add() Function，用途是將兩個傳入參數相加後回傳
function Add(x, y) {
    return x + y;
}

console.log(Add(3, 5));

//Ex - Add方法計算兩個數字相加，但參數卻傳入非number型別
var z = Add('3' + 5)
console.log(z);

//Ex - 請參考另一個DataType/DataType_typeof_NaN.js

