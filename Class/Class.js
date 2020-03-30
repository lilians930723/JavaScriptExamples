//Ex1 - class declaration類別宣告
class Rectangle {
    constructor(height, width) {
        this.name = '四邊形';
        this.height = height;
        this.width = width;
    }

    get area() {
        return this.height * this.width;
    }

    Area() {
        return this.height * this.width;
    }
}

console.log(Rectangle);

var r = new Rectangle(6, 3);
console.log(r.area);
console.log(r.Area());

//Ex2 - 以上可以改寫如下
class Rectangle {
    name = '';    //public field公開欄位
    height = 0;   //public field公開欄位
    width;      //public field公開欄位
    constructor(height, width) {
        this.name = '四邊形';
        this.height = height;
        this.width = width;
    }

    get area() {
        return this.height * this.width;
    }

    Area() {
        return this.height * this.width;
    }
}

var r = new Rectangle(6, 8);
console.log(r.height);
console.log(r.width);

//Ex3 - public & private field
class Rectangle {
    name = '';     //public field公開欄位
    #height = 0;   //private field私有欄位
    #width;      //private field私有欄位
    constructor(height, width) {
        this.name = '四邊形';
        this.#height = height;
        this.#width = width;
    }

    get area() {
        return this.height * this.width;
    }

    Area() {
        return this.height * this.width;
    }
}

var r = new Rectangle(8, 9);
console.log(r.name);
console.log(r.height);
console.log(r.width);

//Ex4 - class expression
const Rect = class {
    constructor(height, width) {
        this.name = '四邊形';
        this.height = height;
        this.width = width;
    }

    get area() {
        return this.height * this.width;
    }

    Area() {
        return this.height * this.width;
    }
}

console.log(Rect);

var rect = new Rect(4, 5);
console.log(rect);
console.log(rect.area);
console.log(rect.Area());


//Ex 5- extends a class (類別繼承)
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    Area() {
        return this.height * this.width;
    }
}

class Square extends Rectangle {
    constructor(width) {
        super(width, width);
        this.name = '正方形'
    }
}

var square = new Square(4);
console.log(square);
console.log(square instanceof Rectangle);
console.log(square.Area());

//Ex6 - super關鍵字
class Cat {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Tiger extends Cat {
    speak() {
        super.speak();
        console.log(`${this.name} roars.`);
    }
}

let tiger = new Tiger('Juguar');
tiger.speak(); 
