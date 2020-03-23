var title = function (title) {
    console.log('');
    console.log(`=============${title}=============`);
}

var print = function (value) {
    console.log(value);
}

//Ex - String to Number, 轉換數值字串成數值
Number("123")     // 123
Number("12.3")    // 12.3
Number("")        // 0
Number("0x11")    // 17
Number("0b11")    // 3
Number("0o11")    // 9
Number("foo")     // NaN
Number("100a")    // NaN

//Ex - parseInt() & parseFloat()
title("String字串相加 - '175' + '175' ");
var height = '175';
console.log(height + height);

//Ex - parseInt()
title('用parseInt()將string轉成整數(Number型別)');
var h = parseInt(height);
console.log(typeof h);
console.log(h + h);


var x = '3.1415962';
console.log(x + 7);

title('parseInt()');
console.log(parseInt(x) + 7);
console.log(typeof parseInt(x));

//Ex - parseFloat()
title('parseFloat()將string轉成浮Float點數(Number型別)');
var pi = parseFloat(x);
console.log(pi + 7);


