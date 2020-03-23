//Ex1 - Set和字串的關係
let brand1 = "BuildSchool";
let brand2 = "BuildSCHOOL";
let mySet1 = new Set(brand1);
let mySet2 = new Set(brand2);
console.log(mySet1);
console.log(mySet2);

//Ex2 - 利用Set特性，移除陣列重複值
var numbers = [1, 3, 5, 7, 3, 6, 5, 8, 2, 7, 9];

var unique = [...new Set(numbers)];
console.log(unique);

//Ex3 - has()檢查是否有指定值
var array1 = [1, 3, 5, 7, 9, 11];
var array2 = [3, 6, 9];

var set1 = new Set(array1);
var set2 = new Set(array2);
console.log(set1.has(9));

//Ex4 - intersection交集
let intersection = new Set([...set1].filter(x => set2.has(x)));
console.log(intersection);

//Ex5 - difference差異
let difference = new Set([...set1].filter(x => !set2.has(x)));
console.log(difference);

//Ex6 - 複雜的