//宣告陳列
var taiwanArray = ['台灣', 41, 1 ,12];
var chinaArray = ['中國', 80134, 2914, 44595];
var americaArray = ['美國', 9665, 146, 694];

var map = new Map();    //初始化Map物件
//Ex1 - 加入key-value pairs資料到Map物件
map.set("taiwan", taiwanArray);
map.set("china", chinaArray);
map.set("america", americaArray);

//console.log('成員數目:' + map.length);    //length為0
console.log('成員數目:' + map.size);      //用size屬性讀取成員數目


//Ex2 - 讀取Map成員
console.log(map.get('america'));
console.log(map.get('taiwan'));
console.log(map.get('china'));


//Ex3 - 刪除指定key的key-value pair
map.delete("china");
console.log(map);

//Ex4 - clear()全部清除
map.clear();
console.log(map);