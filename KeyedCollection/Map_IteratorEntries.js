var title=function(title){ 
    console.log('');
    console.log(`=============${title}=============`);
}

//宣告陳列
var taiwanArray = ['台灣', 41, 1 ,12];
var chinaArray = ['中國', 80134, 2914, 44595];
var americaArray = ['美國', 9665, 146, 694];

var map = new Map();    //初始化Map物件
//Ex1 - 加入key-value pairs資料到Map物件
map.set("taiwan", taiwanArray);
map.set("china", chinaArray);
map.set("america", americaArray);


//Ex2 - Iteration單筆迭代 with entrices().next()
const iterator = map.entries();

console.log(map);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);


/**Iteration迴圈迭代for...of*/
//Ex3 - key
for (let key of map.keys()) {
    console.log(key);
}

//Ex4 - value
for (let value of map.values()) {
    console.log(value);
}

//Ex5 - key & value
for (let [key, value] of map) {
    console.log(`${key} : ${value}`);
}


//Ex4 - forEach() array
title('foreach()');
map.forEach(function(value, key, Map){
    console.log(`${key} : ${value}`);
});