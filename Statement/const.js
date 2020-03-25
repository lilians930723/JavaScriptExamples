//Ex1 - 常數不能重複宣告
'use strict'
const email = 'kevin@gmail.com';
const email = 'david@gmail.com';  //不能重新宣告
const email = 'kevin@gmail.com';  //不能重新宣告，即使value完全相同

const pi = 3.14;
const p1 = 3.1415962;
console.log(pi);

//Ex2 - 常數不能(用identifier識別名稱)重複指派值
const email = 'kevin@gmail.com';
email = 'kevin@gmail.com';    //不能(用identifier識別名稱)重新指派值,即使value完全相同

const pi = 3.14;
p1 = 3.1415962;
console.log(pi);

//Ex3 - 在同一Scope範圍內，常數名稱不能和其他變數(var, let)或function撞名
const pi = 3.14;
var pi = 1;
let p1 = 2;

function pi() {
    return 3.14;
}
console.log(pi);

//Ex4 - 用const宣告陣列，透過索引變更value值(不觸碰「用常數識別名稱重複指派值」鐡則)
const array1 = ['David', 'Mary'];
array1 = [1, 2, 3];
console.log(array1);

const friends = ['David', 'Mary'];
console.log(friends);

friends[0] = 'John';
console.log(friends);

//Ex5 - 清除常數陣列
const array1 = ['Apple', 'Google', 'Amazon', 'Microsoft'];
friends = [];         //No
friends.length = 0;   //Yes
friends.splice(0, friends.length); //移除N個陣列元素
console.log(friends);

//Ex6 - 如為常數物件，若想更改value，透過object.propertyName屬性名稱或object['屬性名稱']即可
const person = { 
    name: 'kevin', 
    email: 'kevin@gmail.com' 
}

person = { name: 'David', email: 'david@gmail.com' } //No
console.log(person);

person.name='Joe';
person['email']='joe@gmail.com'
console.log(person);
