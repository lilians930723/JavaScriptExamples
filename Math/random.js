//Ex1 - random()產生0-1之小數點亂數
console.log(Math.random());

//Ex2 - floor()無條件捨去小數位

console.log(Math.floor(3.1415962));
console.log(Math.floor(-3.1415962));

//Ex3 - 撰寫取得一個Range範圍內的整數亂數
function getRandom(min, max) {
    return Math.floor(Math.random() * max + min);
}

console.log(getRandom(1, 100));

//Ex4 - round()
console.log(Math.round(3.1415962, 4));

//Ex5 - abs()
console.log(Math.abs(-3.1415962));

//Ex6 - max() & min()最大最小值
var array1 = [3, 7, 9, 16, 9, -1];
console.log(Math.max(...array1));
console.log(Math.min(...array1));