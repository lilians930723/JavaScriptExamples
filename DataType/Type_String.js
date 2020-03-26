//Ex
var s1 = '這是字串';
var s2 = "這也是字串";

var name = 'Kevin'
console.log(`Your name is ${name}`) //Template Literals

//Ex - Long Literal Strings
let longString1 = "天地玄黃，宇宙洪荒，日月盈昃，" +
  "辰宿列張，寒來暑往，秋收冬藏，" +
  "閏餘成歲，律呂調陽，雲騰致雨，";

//反斜線後面不能有任何空白或其他字元，甚至是縮排；否則這個方法將失效
let longString2 = "天地玄黃，宇宙洪荒，日月盈昃\
                  辰宿列張，寒來暑往，秋收冬藏，\
                  閏餘成歲，律呂調陽，雲騰致雨，";


//Ex - 字元存取 Character access
for (var i = 0; i < longString1.length; i++) {
  console.log(longString1.charAt(i));
}


for (var i = 0; i < longString1.length; i++) {
  console.log(longString1[i]);
}

//Ex - 字串比較
let a = 'a'
let b = 'b'
if (a < b) { // true
  console.log(a + ' is less than ' + b)
} else if (a > b) {
  console.log(a + ' is greater than ' + b)
} else {
  console.log(a + ' and ' + b + ' are equal.')
}

//Ex - Literal String vs. String Object
let name = "King";  //Literal String
var nickname = new String("King");  //String Object
console.log(name == nickname);
console.log(name === nickname);
console.log(typeof name);
console.log(typeof nickname);
console.log(nickname instanceof String);

//Ex - eval()方法
let s1 = "3 + 6";
let s2 = new String("3 + 6");
console.log(eval(s1));
console.log(eval(s2));
console.log(typeof eval(s2));
console.log(eval(s2.valueOf()));