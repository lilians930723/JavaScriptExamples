/**Funcation Programming + Arrow Function */

//Ex1 - Add相加兩個數字
var sum = (x, y) => { return x + y };
console.log(sum(8, 9));

//Ex2 - Full Name
var FullName = (LastName, firstName) => { return `Your full name is : ${LastName} ${firstName}` };
console.log(FullName('David', 'Lee'));


//Ex3 - 計算BMI
var bmi = (height, weight) => { return weight / ((height / 100) ** 2) }
console.log(bmi(179, 78));

//Ex4 - 迭代陣列元素
var array = [1, 3, 5, 7, 9];
array.forEach((item) => { console.log(item) });

//Ex5 - 計算5%稅率
var Tax = (amount, taxPercent) => { return amount * (1 + (taxPercent / 100)) };
console.log(Tax(100, 5));
