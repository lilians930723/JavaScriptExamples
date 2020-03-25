var $ex = function (title) {
    console.log('');
    var len = Math.floor((50 - title.length) / 2);
    title = (title.length > 0) ? `${".".repeat(len)}${title}${".".repeat(len)}` : "=".repeat(60);
    console.log(title);
}

$ex('for');
for (let x = 1; x <= 9; x++) {
    for (let y = 1; y <= 9; y++) {
        console.log(`${x}x${y} = ${x * y}`);
    }
    console.log('.'.repeat(60));
}

$ex('spread operator');
const arrayBase = [...Array(9).keys()].map(x => x + 1);
console.log(arrayBase);

const line1 = arrayBase.map(x => x * 1);
// console.log(line1.join(', '));

const line2 = arrayBase.map(x => x * 2);
// console.log(line2.join(', '));

//Ex - 將每個數字分別存在陣列中
var finalArray = [];
arrayBase.forEach((item, index, array) => {
    finalArray.push(arrayBase.map(x => x * (index + 1)));
});

$ex('display finalArray');
finalArray.forEach((item, index)=>{
    console.log(item.join(', '));
});

