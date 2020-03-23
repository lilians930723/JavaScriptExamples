//Ex1 - Basic object
//object literal
var product = { id: 'A13', name: 'switch', price: 12000 };

console.log(product.id + ", " + product.name + ', ' + product.price);
console.log(product['id'] + ", " + product['name'] + ', ' + product['price']);

//Ex2 - more complex object

var person = {

}

//Ex3 - 
var triangle = { a: 1, b: 2, c: 3 };

function ColoredTriangle() {
  this.color = 'red';
}

ColoredTriangle.prototype = triangle;

var obj = new ColoredTriangle();

for (const prop in obj) {
  if (obj.hasOwnProperty(prop)) {
    console.log(`obj.${prop} = ${obj[prop]}`);
  }
}