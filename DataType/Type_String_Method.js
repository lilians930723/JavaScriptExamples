var $ex = function (title) {
    console.log('');
    var len = Math.floor((50 - title.length) / 2);
    title = (title.length > 0) ? `${".".repeat(len)}${title}${".".repeat(len)}` : "=".repeat(60);
    console.log(title);
}

var $print = function (value) {
    console.log(value);
}

const brand = 'BuildSchool2020';
const course = 'JavaScript';

//charAt()
$ex('chartAt()');
console.log(brand.charAt(5));

//concat()
$ex('concat()');
console.log(brand.concat(' ', course));
console.log(brand.concat(', ', course));
console.log(brand.concat('- ', course));

//indexof()
$ex('indexof()');
console.log(brand.indexOf('2020'));

//padStart() & padEnd()
$ex('padStart() & padEnd()');
const age = '3';
console.log(age.padStart(3,'0'));
console.log(age.padEnd(3,'0'))

//repeat()
$ex('repeat')
const star ='*';
console.log(star.repeat(50));
console.log('$'.repeat(25));

//replace()
$ex('replace()')
console.log(brand.replace('2020','2021'));

//slice()
$ex('slice()');
console.log(brand.slice(0,5));

//split()
$ex('split()');
var product = "Mobile Computer iPad Camera";
var numbers ='65 72 39 64 51 82 75 96';
var array1 = product.split(' ');
var array2 = numbers.split(' ');

console.log(array1);
console.log(array1[2]);
console.log(array2);
console.log(array2[1]);
console.log(product.split(''));


