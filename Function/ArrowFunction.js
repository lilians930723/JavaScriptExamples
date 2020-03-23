var title = function (title) {
    console.log('');
    console.log(`=============${title}=============`);
}

/**Function Declaration */
title('Function Declaration宣告');

//Ex - Function Declaration
function add(num1, num2) {
    return num1 + num2;
}

var num1 = 10;
var num2 = 15;

var result = add(num1, num2);

console.log(result);

/**Funcation Programming + Arrow Function */
title('Function宣告 + 箭頭函式');
var sum = (x, y) => { return x + y };
console.log(sum(8, 9));

//Ex - Function Declaration
function add(num1, num2) {
    return num1 + num2;
}

console.log(add(8, 9));

//Arrow Function Expression
var sum = (x, y) => { return x + y };
console.log(sum(8, 9));
