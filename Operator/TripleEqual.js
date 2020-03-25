// ECMAScript 5.1 Edition / June 2011-11.9.3小節，有談到==和===等號規格上之定義
//http://ecma-international.org/ecma-262/5.1/#sec-11.9.3

// MDN -- 重新介紹JavaScript,在文中有提到(關鍵字 double-equals, triple-equals)
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript


//Ex1 - x===y, 若x和y是不同型別，永遠回傳false(首先做不同型別判斷)
//Number==BigInt
console.log(1 === 1n);  //false

//Number == Boolean
console.log(1 == true);   //true
console.log(0 == false);   //true

console.log(1 === true);  //false
console.log(0 === false);  //false


//Ex2 - x===y, 特殊value型別的比較
console.log(undefined === undefined); //true
console.log(null === null); //true

//Ex3 - x===y, x is Number
console.log(1 === 1);   //true
console.log(1 === 1.0); //true
console.log(+0 === -0); //true
console.log(-0 === +0); //true

var x = NaN, y = NaN;
console.log(typeof x); // x型別是number
console.log(x === true);   //false
console.log(x === y);   //false
console.log(1 === NaN);   //false

//Ex4 - x===y, x is String
// x and y are exactly the same sequence of characters (same length and same characters in corresponding positions); otherwise, return false.
console.log("1" === "1")    //true
console.log("cat" === "cat"); //true

console.log("1" == 1);  //true
console.log("1" === 1); //false


//Ex5 - x===y, x is Boolean
console.log(true === true);   //true
console.log(false === false); //true

console.log(true === false);  //false
console.log(false === false); //false
console.log(true === 1);  //false
console.log(false === 0); //false

