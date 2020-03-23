var title = function (title) {
    console.log('');
    var len = Math.floor((60 - title.length) / 2);
    title = (title.length > 0) ? `${"=".repeat(len)}${title}${"=".repeat(len)}` : "=".repeat(60);
    console.log(title);

    /*     if (title.length > 0) {
            console.log(`=============${title}=============`);
        } else {
            var title = "=".repeat(60);
            console.log(title);
        } */
}

var titleArrow = (title) => {
    console.log('');
    if (title.length > 0) {
        console.log(`=============${title}=============`);
    } else {
        var title = "=".repeat(60);
        console.log(title);
    }
}


var print = function (value) {
    console.log(value);
}

//Ex - 
title('');
function Product(name, price) {
    this.name = name;
    this.price = price;

    if (price < 0)
        throw RangeError('Cannot create product "' + name + '" with a negative price');
    return this;
}

function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food';
}
Food.prototype = new Product();

function Toy(name, price) {
    Product.call(this, name, price);
    this.category = 'toy';
}
Toy.prototype = new Product();

var cheese = new Food('feta', 5);
var fun = new Toy('robot', 40);
print(cheese);
print(fun);
print(new Food('bread', 10));
print(new Food('bread', 10).name);

//Ex - 
titleArrow('');
var animals = [
    { species: 'Lion', name: 'King' },
    { species: 'Whale', name: 'Fail' }
];

for (var i = 0; i < animals.length; i++) {
    (function (i) {
        this.print = function () {
            console.log('#' + i + ' ' + this.species + ': ' + this.name);
        }
        this.print();
    }).call(animals[i], i);
}
