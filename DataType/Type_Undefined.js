var title = function (title) {
  console.log('');
  console.log(`=============${title}=============`);
}

//MDN -- - undefined - https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/undefined
function checkValue(value) {
  if (value === undefined) {
    return 'undefined value!未定義的值';
  }

  return '傳入值為：' + value;
}

let name;
let nickname = 'super man';

console.log(checkValue(name))

//Ex - compare null & undefined
//MDN - null -- https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/null

title('比較null & undefined');
console.log(typeof null);       //object
console.log(typeof undefined);  //undefined
console.log(null == undefined);   //true
console.log(null === undefined);  //false

//Ex - 判斷undefined
var status;

if (status === undefined) {
  console.log('status變數未定義！');
} else {
  console.log(status);
}

