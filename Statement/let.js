//# MDN - let : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
//The let statement declares a block scope local variable, optionally initializing it to a value.

//Ex - let & const宣告的變數不會建立全域物件屬性
//請在Browser console中執行
var lastName = 'John';
var firstName = 'Lee';
let nickName = 'Monkey';
const fullName = lastName + ' ' + firstName;

console.log(this.lastName);     //Yes
console.log(this.firstName);    //Yes
console.log(this.nickName);     //No
console.log(this.fullName);     //No

/* 請在Browser console中執行
console.log(this.lastName);
console.log(window.lastName);
console.log(window.nickName);
console.log(window.fullName); */

//在同一function或block scope，let不能重複宣告變數
//Ex - let Error
let user = 'John';
let user = 'Steve';
var user = 'Steve';

let password = '123';
let password = '456';
let password;

//Ex - let Error, 在同一Block Scope(Block Statement), 
if (true) {
    let x;
    let x;
}

{
    let y = 1;
    let y = 2;
}

//Ex - working, 兩個不在同一scope中
let x = 1;
if (true) {
    let x = 2;
    console.log(x);
}

console.log(x);

//Ex - switch {} , 由於在同一個Block Statement中有兩個msg，故會Error
let port='80';
switch(port){
    case '80':
        let msg = '這個port是用於Http通訊協定';
        console.log(msg);
        break;
    case '21':
        let msg = '這個port是用於FTP通訊協定';
        console.log(msg);
        break;
}

//Ex - var working
var lady = 'Rose';
function customer() {
    var lady = 'Mary';
    console.log(lady);
}
customer();
console.log(lady);

//Ex2 - var working, 在{} Block Statement
var lady = 'Rose';  //global
{
    var lady = 'Mary';  //var在{} Block Statement中沒有Block Scope效果
    console.log(lady);
}
console.log(lady);

//Ex - let working
let name = 'Kevin'; //global
function user() {
    let name = 'David'; //local, function - block scope
    console.log(name);
}
user();
console.log(name);

//Ex - let working
let name = 'Kevin'; //global
{
    let name = 'David'; //local, block statement
    console.log(name);
}
console.log(name);

//Ex - for中的var與let差異
//var
for (var i = 0; i < 3; i++) {
    console.log(i)
}
console.log(i);

//let
for (let i = 0; i < 3; i++) {
    console.log(i)
}
console.log(i);