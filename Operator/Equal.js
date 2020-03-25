
//Ex - x==y比較， x是Number或String，y為Object
//則y會進行ToPrimitive()轉型
var x = 1;
var y = [1];
console.log(x==y);

console.log(1==false);

//x===y, x is Boolean, x will be converted as +0
var n = Boolean(null);
console.log(n);
console.log(typeof n);
console.log(n==+0);

console.log(typeof +0);