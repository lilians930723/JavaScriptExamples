//Ex1 - max() & min()最大最小值
console.log(Math.max(1, 3, 5, 7, 9));  
console.log(Math.min(-1, -3, -5, -7, 9));

//Ex2 - round()
console.log(Math.round(3.1415962, 4));

//Ex3 - abs()
console.log(Math.abs(-3.1415962));

//Ex4 - 陣列計算要用Rest Paramerter
var array1 = [1, 3, 5, 7, 9];
console.log(Math.max(...array1));

//Ex5 - 陣列的max() & min()最大最小值
var array1 = [3, 7, 9, 16, 9, -1];
console.log(Math.max(...array1));
console.log(Math.min(...array1));

//Ex6 - 或用apply()方法
console.log(Math.max.apply(null, array1));
console.log(Math.min.apply(null, array1));