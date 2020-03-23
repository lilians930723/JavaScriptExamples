var title = function (title) {
    console.log('');
    var len = Math.floor((60 - title.length) / 2);
    title = (title.length > 0) ? `${"=".repeat(len)}${title}${"=".repeat(len)}` : "=".repeat(60);
    console.log(title);

    /*     if (title.length > 0) {
            console.log(`=============${title}=============`);
        } else {
            var title = "=".repeat(60);
            console.log(title);
        } */
}

var print = function (value) {
    console.log(value);
}

//======================Reference======================
//MDN — Function.prototype.apply()
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
//MDN — Function.prototype.call()
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call


//================= apply() ======================
//Ex1: 用apply()方法
var array1 = [8, 9, 16, 72, 35, 92, 44];

console.log(Math.max.apply(null, array1));
console.log(Math.min.apply(null, array1));


//Ex2: 計算傳入參數加總後平均值
function avg() {
    var sum = 0, len = arguments.length;
    for (var i = 0; i < len; i++) {
        sum += arguments[i];
    }

    return sum / len;
}

console.log("Average is " + avg(1, 3, 5, 7, 9));

//如果參數是陣列，不能直接傳入陣列當參數
console.log("Average is " + avg([2, 4, 6, 8, 10]));
console.log("Average is " + avg(...[2, 4, 6, 8, 10]));

//要用apply()方法
console.log("Average is " + avg.apply(null, [2, 4, 6, 8, 10]));

