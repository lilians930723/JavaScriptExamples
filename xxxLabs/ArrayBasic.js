var array1 = [];
var array2 = new Array();
var array3 = new Array(10);

console.log(array1);
console.log(array2);
console.log(array3);

var Cars = ['BMW', 'Benz', 'Audi', 'Lexus'];
var Prices = [280, 320, 250, 210];

var PriceWithTax = Prices.map(p => p * 1.05);
console.log(PriceWithTax)

var total = PriceWithTax.reduce((total, current) => total + current);
console.log(total);


//Ex - compare.用傳統語法算出四台汽車含稅5%的總價



//Ex - 將上面的轉為二維陣列，然後計算四台汽車含稅5%的總價
var CarPrice = [
    ['BMW', 280],
    ['Benz', 320],
    ['Audi', 250],
    ['Lexus', 210]];



//Ex-3.武漢肺炎
Covid_Table.html