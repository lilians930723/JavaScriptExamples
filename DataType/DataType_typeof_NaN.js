//Ex - Waht's NaN(Not-A-Number，不是數字) ?
//sqrt()開根號
var sqrt = Math.sqrt(4);
console.log(sqrt);

sqrt = Math.sqrt(-1);
console.log(sqrt);  //回傳NaN

//Ex - 利用typeof判斷變數型別，作出決策
function add(x, y) {
    if (typeof (x) != Number || typeof (y) != Number) {
        return NaN

        // throw  '你犯錯了！';
    }
    return x + y;
}

var z = add('3' + 5)
console.log(z);

if(isNaN(z)){
    console.log('傳入的參數型別有誤');
}else{
    console.log(add('3' + 5))
}

//Ex - 
var g;
console.log(g + 2);



