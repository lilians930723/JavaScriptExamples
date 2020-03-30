//Ex - 複製陣列
let array1 = [1, 3, 5, 7, 9];
let array2 = [2, 4, 6, 8, 10];

let array3 = [...array1]
let array4 = [...array1, ...array2]

console.log(array3);
console.log(array4);

//Ex - 展開成參數
function sum(...Args) {
    var sum = Args.reduce((total, current) => {
        return total + current;
    });

    return sum;
}

console.log(sum(1, 3, 5, 7, 9, 11, 13, 15));   //64



//Ex - 
const array1 = [...Array(9).keys()];
console.log(array1);
const array2 = array1.map(x => x + 1);
console.log(array2);

const array3 = [...Array(9).keys()].map(x => (x + 1) * 10);
console.log(array3);