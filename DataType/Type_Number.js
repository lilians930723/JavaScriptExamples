var x = 1, y = -1, pi = 3.1415;

console.log('x type is ' + typeof (x));
console.log('y type is ' + typeof (y));
console.log('pi type is ' + typeof (pi));



//NaN(Not-A-Number非數值)
console.log(NaN == NaN);  //false
console.log(NaN === NaN); //false
console.log(isNaN(NaN));    //true
console.log(isNaN(Number.NaN)); //true

function checkNaN(value) { return value != value; }
console.log(checkNaN(1));   //false
console.log(checkNaN(NaN)); //true
console.log(checkNaN(Number.NaN));  //true