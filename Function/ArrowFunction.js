var title = function (title) {
    console.log('');
    console.log(`=============${title}=============`);
}

/**Function Declaration */
title('Function Declaration宣告');

//Ex1 - Function Declaration
function add(num1, num2) {
    return num1 + num2;
}

var num1 = 10;
var num2 = 15;

var result = add(num1, num2);

console.log(result);

/**Funcational Programming + Arrow Function */
//Ex2 - 
title('Function宣告 + 箭頭函式');
var sum = (x, y) => { return x + y };
console.log(sum(8, 9));

//Arrow Function 
var display = (name) => { console.log('你的名字是：' + name) };

display('奚江華');

//Ex3 - Array.map()
var products =['iPhone', 'iPad', 'Mac', 'Apple Watch'];

products.map(function(element){
    element = '蘋果產品：' + element;
    console.log(element);
});

//Array
products.map((element)=>{
    element = '蘋果產品：' + element;
    console.log(element);
});








