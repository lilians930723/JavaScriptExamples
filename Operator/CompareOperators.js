//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators

var s1 = new String("JavaScrit");
var s2 = new String("JavaScrit");

console.log(s1 == s2);
console.log(s1 === s2);

var a1 = ["Kevin"];
var a2 = ["Kevin"];
console.log(a1 == a2);
console.log(a1 === a2);

var o1 = { name: 'Kevin', email: 'kevin@gmail.com' };
var o2 = { name: 'Kevin', email: 'kevin@gmail.com' };
console.log(o1 == o2);
console.log(o1 === o2);

var obj1 = Object.create(null);
var obj2 = Object.create(null);

console.log(obj1 == obj2);
console.log(obj1 === obj2);

