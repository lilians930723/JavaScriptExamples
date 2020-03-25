var b = Boolean(1);
var n = Number(135);
var i = BigInt(5566);
var s = String('Kevin');
var obj1 = new String("John"); //Object
var obj2 = new Object();
obj2.name = 'David';

console.log(b);
console.log(n);
console.log(i);
console.log(s);
console.log(obj1);
console.log(obj2.name);

console.log('.'.repeat(60));
console.log(typeof b);
console.log(typeof n);
console.log(typeof i);
console.log(typeof s);
console.log(typeof obj1);
console.log(typeof obj2);

console.log('.'.repeat(60));
console.log(b instanceof Boolean);
console.log(n instanceof Number);
console.log(i instanceof BigInt);
console.log(obj1 instanceof String);
console.log(obj1 instanceof Object);
console.log(obj2 instanceof Object);