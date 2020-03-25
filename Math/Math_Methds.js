
//Math
console.log(Math.max(1, 3, 5, 7, 9));
console.log(Math.min(-1, -3, -5, -7, 9));

//陣列計算要用Rest Paramerter
var array1 = [1, 3, 5, 7, 9];
console.log(Math.max(...array1));

//或用apply()方法
console.log(Math.max.apply(null, array1));
console.log(Math.min.apply(null, array1));