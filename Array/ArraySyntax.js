var title = function (title) {
    console.log('');
    console.log(`=============${title}=============`);
}


//陣列宣告與初始化

//Ex1 - 一維陣列
title('一維陣列');
var array1 = [];
var array2 = new Array();
var array3 = new Array(10);

var Computer = ['CPU', 'DRAM' , 'SSD', 'Mouse'];
var comp = new Array('CPU', 'DRAM' , 'SSD', 'Mouse');

for(var i in Computer){
    console.log(Computer[i]);
}

var Cars = ['BMW', 'Benz', 'Audi', 'Lexus'];
var Prices = [280, 320, 250, 210];

var Fruits = ['Apple', 'Banana', 'Cherry'];

var Person = ['John', 35, 'john@gmail.com'];

console.log(Person);

//Ex2 - 二維陣列
title('二維陣列');
var products = [
    ['CPU', 'DRAM' , 'SSD', 'Mouse'],
    ['BMW', 'Benz', 'Audi', 'Lexus'],
    ['Apple', 'Banana', 'Cherry']
];

console.log([products]);


//Ex3 - 用索引值存取陣列元素
title('用索引值存取陣列元素');
var part1 = Computer[0];
console.log(part1);


//Ex4 - 用for迴圈存取陣列元素
title('用for迴圈存取陣列元素');
for(var i=0; i < Cars.length; i++){
    console.log(Cars[i]);
}

//for較佳寫法
for(var i=0, len=Cars.length ; i < len; i++){
    console.log(Cars[i]);
}

//Ex5 - 用for...of取得陣列元素
title('用for...of取得陣列元素');
for(const element of Cars){
    console.log(element);
}

//Ex6 - forEach() array items(推薦)
title('forEach()');
Person.forEach(function(item, index, array){
    console.log(index, item, typeof item)
})

//Ex7 - 只傳入一個item參數
title('forEach(), 只傳入一個item參數');
Person.forEach(function(item){
    console.log(item, typeof item)
})

//Ex8 - 用typeof顯示型別
title('用typeof顯示型別');
console.log('--- typeof ---');
console.log(typeof(Computer));
console.log(typeof(Computer[0]));
console.log(typeof Person[1]);

//Ex9 - 用Array.isArray()判斷是否為陣列
title('用Array.isArray()判斷是否為陣列');
console.log(Array.isArray(Fruits[0]));
console.log(Array.isArray(products[0]));

//Ex10 - concat()陣列相加
title('concat()陣列相加');
var prods = Computer.concat(Cars).concat(Fruits);
console.log(prods);


//Ex11 - 加入元素到陣列末端,push() & pop()
title('push()加入元素到陣列末端');
Fruits.push('Orange');

Fruits.forEach(function(item, index, array){
    console.log(index,  item)
});

var pds=[];
pds.push(Computer);
pds.push(Cars);
pds.push(Fruits);

console.log(pds);


//Ex12 - 自陣列末端移除元素
title('pop()自陣列末端移除元素');
Fruits.pop('Orange');
console.log(Fruits);

//Ex13 - reverse()逆轉陣列
title('reverse()逆轉陣列');
Fruits.reverse();

Fruits.forEach(function(item, index, array){
    console.log(index,  item)
});


//Ex14 - Function委派
title('Function委派');
Fruits.forEach(Iteration);

function Iteration(item, index, array){
    console.log(index,  item)
}

var AllCars = "";
Cars.forEach(displayItems);

function displayItems(item) {
    AllCars = AllCars + item + ",";
}

console.log(AllCars);

//Ex15 - find()找尋陣列元素
title('find()找尋陣列元素');
console.log('--- find ---');
var result = Cars.find( c => c=='Benz');
console.log(result.toUpperCase() + ', ' + result.toLowerCase());

//Ex16 - indexof()回傳元素索引值
title('indexof()回傳元素索引值');
console.log("Your car's index is : " + Cars.indexOf('Audi'));

//Ex17 - findIndex()
title('findIndex()');
var highest = Prices.findIndex((c) => c > 300);
console.log('Highest price : ' + highest + ", " + Cars[highest]);


//Ex18 - filter過濾
title('filter過濾');
console.log('--- filter過濾 ---');
console.log(Prices.filter(p => p >  250));

Prices.filter(function(item, index, array){
    if(item > 250){
        console.log(Cars[index] + "'s price is " + item + ", it's larger 250." )
    }
});

//Ex19 - sort()升冪排序原理：1.將element轉為字串 2.比較UTF-16碼的單位值順序
title('sort()升冪排序');
console.log(Cars.sort());

title('sort().reverse()降冪排序');
console.log(Cars.sort().reverse());

//Ex20 - map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
//map()方法是對每一個陣列元素作運算，並將結果回傳至新陣列
title('用map()方法對每一個陣列元素作運算');
var newArray = Prices.map(p => p * 1.05);

console.log('含5%稅後價格' + newArray);

//Ex21 - reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
//reduce()方法是對所有陣列元素作加總
title('用reduce()方法對所有陣列元素作加總');
var reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log('總金額 ： ' + Prices.reduce(reducer) );

console.log('總金額 ： ' +  
  Prices.reduce((accumulator, currentValue) => accumulator + currentValue)
);
console.log('總金額 ： ' +  
    Prices.reduce(function(accumulator, currentValue, currentIndex, array) {
        return accumulator + currentValue;
    })
  );

//=========== 陣列相加 ===============
//Ex 22 - 用concat()合併多個陣列，但不會改變原來陣列
title('用concat()合併多個陣列');
var array1 = ['a', 'b', 'c'];
var array2 = ['d', 'e', 'f'];
var array3 = array1.concat(array2);

console.log(array3);

//Ex 23 - 用apply()方法合併到原來陣列
title('用apply()方法合併陣列');
array1.push.apply(array1, array2);
console.log(array1);

//=========== 陣列清除 ===============
//Ex24 - 
var friends = ['David', 'Mary', 'John'];
friends=[]; //重新指派一個空陣列
friends.length=0;   //將length設為0
friends.splice(0, friends.length);  //移除N個陣列元素