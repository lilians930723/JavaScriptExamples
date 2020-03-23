//# MDN — Difference between Function constructor and function declaration段落有提到二者差異
//https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Function

/**Function 建立型式 */
//Ex1 - Function Statement(Declaration)
function calcRectArea(height, width){ 
    return height * width;
}

console.log(calcRectArea(4,8));

//Ex2 - Function Expression(Function寫成一行的，就叫Function Expression)
const getRectArea = function(height, width){ 
    return height * width;
}

console.log(getRectArea(3,4));

//Ex3 - Function constructor(new關鍵字可省略)，但function名稱會是anonymous
const computeRectArea = new Function('height', 'width', 'return height * width');
console.log(computeRectArea(9,7));
console.log(computeRectArea.name);

/**Function constructor */
const sum = new Function('x', 'y', '{ return x + y }');
console.log(sum(8, 6));


/**用new Function()建構式建立的函數，它建立的context內容
 * 不會產生Closure閉包，而是在global scope建立Function，
 * 而它只能存取new Function()內變數，以及global層級變數
*/
//以下這段程式只能在BROWSER中執行，參考Function.html
var x = 10;
function createFunction1() {
    var x = 20;
    return new Function('return x;'); // this |x| refers global |x|
}

function createFunction2() {
    var x = 20;
    function f() {
        return x; // this |x| refers local |x| above
    }
    return f;
}

var f1 = createFunction1();
console.log(f1());          // 10
var f2 = createFunction2();




//=============  Basic Function ============= 
function Add(x, y) {
    return x + y;
}

// You can't perform addition on undefined
console.log(Add()); //NaN

console.log(Add(3, 4));  //7
console.log(Add(3, 4, 5));    //7, ignore 5

//arguements物件(array-like)持有傳入function的所有參數值
//計算傳入參數加總數
function add() {
    var total = 0;
    for (var i = 0, len = arguments.length; i < len; i++) {
        total += arguments[i];
    }

    return total;
}

console.log(add(1, 3, 5, 7, 9));

//但如果是陣列元素相加，原本方式就不適用，須用apply()方法
var array = [3, 6, 9, 11, 13, 15];
console.log(add.apply(null, array));
//或用Rest Parameters
console.log(add(...array));


//計算傳入參數加總後平均值
function avg() {
    var sum = 0, len = arguments.length;
    for (var i = 0; i < len; i++) {
        sum += arguments[i];
    }

    return sum / len;
}

console.log("Average is " + avg(1, 3, 5, 7, 9));

//
console.log("Average is " + avg.apply(null, [2, 4, 6, 8, 10]));

//=============  Rest Paramters Syntax =============  
function sum(...Args) {
    var sum = Args.reduce((total, current) => {
        return total + current;
    });

    return sum;
}

console.log(sum(1, 3, 5, 7, 9, 11, 13, 15));   //64

