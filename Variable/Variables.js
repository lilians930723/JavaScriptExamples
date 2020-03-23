
//================ global scope vs. block scope
if(true){
    var name = "Kevin"; //global scope
    let nickname="King";    //block scope
}

console.log(name);  //Kevin
console.log(nickname);  //ReferenceError


//================= 變數提升(Variable hoisting) ==============
console.log(typeof x)
console.log(x === undefined);
var x=5;

var product ="iPhone";
(function(){
    console.log(product);
    var product ="Android";
})();

console.log(product);

//================= 函式提升(Function hoisting) ===============


displayName();

/**Function declarationd are hoisted*/
function displayName(){
    console.log("Kevin");
}


showName();
/**Function expression - not hoisting */
var showName = function(){
    console.log("David");
}

//==================global object vs. global variable ===============
/*本段程式請在.html或瀏覽器的console模式執行，
 否則在.js檔中，因為不是Web Page，所以沒有window全域物件
*/

var book = "JavaScript";

console.log(book);
console.log(window.book);

window.book="ASP.NET MVC 5";
console.log(book);

//=====================Constant常數==================================

const pi =3.14;
const pi = 3.1415;

const avg=5;

function avg(){
    return 5;
}

