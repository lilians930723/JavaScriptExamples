//1.object literal
var person = { name: "Kevin", age: 32, height: 175, weight: 64 };

console.log(person);

var person = {
    name: "Kevin",
    age: 32,
    height: 175,
    weight: 64,
    bmi: function () {
        //object literal語法需要用this才能存取到本身屬性
        return this.weight / ((this.height / 100) ** 2);    
    }
};

console.log(person);
console.log(person.bmi());

//2.new constructor
var person = new Object();
person.name = 'David';
person.age = 35;
person.height = 170;
person.weight = 55;

console.log(person);
console.log(person.constructor.name);

var height = 178, weight = 75;
//3.function constructor 
function Person(name, age, height, weight) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.bmi = function () {
        return weight / ((height / 100) ** 2);
    }
}

var person = new Person('Mary', 26, 168, 52)
console.log(person);    //顯示person物件
console.log(person.bmi());
console.log(person.constructor.name);   //顯示person的constructor名稱
console.log(typeof person); //顯示Person型別
console.log(person instanceof Person);  //顯示person是否為Person實例

//4.Function expression
const Man = function Person(name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;
}

console.log(Man);

var person = new Man('Mary', 26, 168);
console.log(person);    //顯示person物件
console.log(person.constructor.name);   //顯示person的constructor名稱
console.log(typeof person); //顯示Person型別
console.log(person instanceof Man);  //顯示person是否為Person實例

//5.用Object.create()方法建立物件
const student = function Student(name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;
}
var s = Object.create(student.prototype);
s.name = 'Mary';
s.age = 26;
s.height = 168;
console.log(s);
console.log(s.constructor.name);

//6 new Function (Function constructor, new亦能省略) - 但Function的名稱會是anonymous
const lady = new Function('name', 'age', 'height', 'return {name, age, height}');
console.log(lady.name);
console.log(lady('Rose', 22, 168));