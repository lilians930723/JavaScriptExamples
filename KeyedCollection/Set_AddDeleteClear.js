//定義function expression
let display = function(obj){ 
    console.log(obj);
}

//擴充Set.prototype的log()方法
Set.prototype.log=function(){ 
    console.log( this);
}

//Ex1 - 建立Set
let set = new Set();
set.add(1);
set.add(3);
console.log(set);
console.log(set.size)
// console.log(typeof set);

set.add(3);
// set.add(5);
display(set);

set.add(Math.sqrt(25));
display(set);


set.add("iPhone");
set.add("iphone");
set.log();

let person = { name: "David", mail: "david@gmail.com" };
set.add(person);
display(set);

//Ex2 - delete刪除特定元素
set.delete("iPhone");
set.log();

//Ex3 - clear()清除所有
set.clear();
set.log();