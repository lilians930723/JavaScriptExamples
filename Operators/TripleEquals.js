// ECMAScript 5.1 Edition / June 2011-11.9.3小節，有談到==和===等號規格上之定義
//http://ecma-international.org/ecma-262/5.1/#sec-11.9.3

// MDN -- 重新介紹JavaScript,在文中有提到(關鍵字 double-equals, triple-equals)
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript

/**等號兩側會轉換成相同型別，然後再進行比較 */
"cat"=="cat"
"cat"==="cat"
1==true
1===true
0==false
0===false