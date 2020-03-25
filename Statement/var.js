/**The scope of a variable declared with var is its current execution context
 * var宣告可為global全域或local(block scope)
 * Declared variables are constrained in the execution context in which they are declared
 */

//Ex1
var x = 1;
var x;  //重新宣告，value值不會丟失
function init() {
    var x = 0;  //在function內宣告var變數，它會有scope效果
    console.log(x);
}

init();
console.log(x);

//Ex2
var x = 1;
var x;
function init() {
    x = 0;  //在function內重新指派值，由於x在function外宣告，故x為global全域，x會被改變
    console.log(x);
}

init();
console.log(x);

//Ex3 - Block Statement
var x = 1;
{
    var x = 3;

    function setValue() {
        var x = 5;
        console.log(x);
    }
    console.log(x);
}

setValue();
console.log(x);


//Ex4
'use strict'
var x = 1;  //global
var x;
n = 5; //在strict模式下，如果沒有用var宣告會報錯
function init() {
    var x = 0;
    var y = 2;  //local(block scope)
    var z = 3;  //local(block scope)
    n = -1;
    console.log(x);
}

init();
console.log(x); // 0
console.log(y); //ReferenceError: y is not defined
console.log(z); //ReferenceError: z is not defined
console.log(n); //strict mode : ReferenceError: n is not defined