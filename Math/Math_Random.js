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

