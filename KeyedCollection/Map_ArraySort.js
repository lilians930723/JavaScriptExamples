//宣告陳列
var taiwanArray = ['台灣', 41, 1, 12];
var chinaArray = ['中國', 80134, 2914, 44595];
var americaArray = ['美國', 9665, 146, 694];
var islandArray = ['小島', 41, 3, 59];

var Global = [taiwanArray, chinaArray, americaArray, islandArray];

console.log(Global);

//Ex1 - 加入key-value pairs資料到Map物件
var map = new Map();    //初始化Map物件
map.set("taiwan", taiwanArray);
map.set("china", chinaArray);
map.set("america", americaArray);
map.set("islandArray", islandArray);

//Ex2 - 利用forEach()自動加入Map物件
var globalMap = new Map();
Global.forEach((item) => {
    globalMap.set(item[0], item);
});

console.log(globalMap);

//Ex3 - 排序 by key
console.log([...map.entries()].sort());


//Ex4 - 依自訂鍵值排序，但需逐筆將Key-value pairs手工加入Map中
//String.prototype.padStart()
//https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/String/padStart

var sortMap = new Map()
var key1 = taiwanArray[1].toString().padStart(6, "0") + taiwanArray[0];
var key2 = chinaArray[1].toString().padStart(6, "0") + chinaArray[0];
var key3 = americaArray[1].toString().padStart(6, "0") + americaArray[0];
var key4 = islandArray[1].toString().padStart(6, "0") + islandArray[0];

var sortMap = new Map();
sortMap.set(key1, taiwanArray);
sortMap.set(key2, chinaArray);
sortMap.set(key3, americaArray);
sortMap.set(key4, islandArray);

console.log(sortMap);
console.log([...sortMap.entries()].sort());

//Ex5 -  依自訂鍵值排序，但利用forEach()將Key-value pairs手工加入Map中
var powerMap = new Map();
Global.forEach((item) => {
    powerMap.set(item[1].toString().padStart(6, "0") + item[0], item);
});

var newMap = [...powerMap.entries()].sort();
console.log(newMap);

//Ex6 - 擴充Number型別方法, 將數字補0
/* Number.prototype.padStart = function(len) {
    var n = String(this);
    return (n.length < len) ? "0".repeat(len - n.length) + n : n;
}; */
Number.prototype.padStart = function(len) {
    var n = String(this);
    return (n.length < len) ? "0".repeat(len - n.length) + n : n;
};

console.log((12345).padStart(10));

Global.forEach((item) => {
    powerMap.set(item[1].padStart(6) + item[0], item);
});
var myMap = [...powerMap.entries()].sort();
console.log(myMap);

//Ex7 - Array Reverse陣列反轉
console.log(myMap.reverse());



