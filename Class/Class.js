//Ex1 - class declaration類別宣告
class Rectangle{
    constructor(height, width){
        this.name ='四邊形';
        this.area=height * width;
    }
}

var r = new Rectangle(6,3);
console.log(r);
console.log(r.area)


//Ex2 - class expression
const Rect = class {
    constructor(height, width) {
        // this.name ='四邊形';
        this.height = height;
        this.width = width;
    }

    area() {
        return this.height * this.width;
    }
}

console.log(Rect);

var rect = new Rect(4,5);
console.log(rect);
console.log(rect.area());


//Ex 3- extends a class (類別繼承)
class Square extends Rectangle{
    constructor(width){
        super(width, width);
        this.name ='正方形'
    }
}

var square = new Square(4);
console.log(square);
console.log(square.area);