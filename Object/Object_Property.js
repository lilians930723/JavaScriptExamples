/**說明
 * 1.物件建立方式
 * 2.顯示屬性
 * 3.新增屬性
 * 4.刪除屬性
 * 5.一次顯示所有屬性
 * */

//1.object literal
var person = { name: "Kevin", age: 32, height: 175, weight: 64 };

//存取Properties屬性
console.log(person.name + ", " + person.age + ', ' + person.height + ', ' + person.weight);

//2.new constructor
var p = new Object();
//add加入Properties屬性
p.name = 'David';
p.age = 35;
p.height = 170;
p.weight = 55;

//存取Properties屬性
console.log(p['name'] + ', ' + p['age'] + ', ' + p['height'] + ', ' + p['weight']);

//亦可用變數代表properties名稱
var n = 'name', a = 'age', h = 'height', w = 'weight';
console.log(p[n] + ', ' + p[a] + ', ' + p[h] + ', ' + p[w]);

//delete刪除Properties屬性
delete p.age;
console.log(p);

/**for ... in  */
var person = { name: "Kevin", age: 32, height: 175, weight: 64 };

//for...in
for (var prop in person) {
    // console.log(prop+ ":" + person[prop]);
    console.log(`${prop} : ${person[prop]}`);
}

/**Object.values() */
var person = { name: "Kevin", age: 32, height: 175, weight: 64 };

var array1 = Object.values(person);
console.log(array1);
array1.forEach((item, index, array) => {
    console.log(item);
});

/**JSON.stringfy() */
var person = { name: "Kevin", age: 32, height: 175, weight: 64 };

var personString = JSON.stringify(person);
console.log(personString);

