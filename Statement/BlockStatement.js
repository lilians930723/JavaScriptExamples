//Ex1 - function外與內宣告變數與常數
var x = 1;      //global
let y = 2;      //global
const z = 3;    //global

function Calc() {
    var x = 'JavaScript';   //block scope, local
    let y = 'CSS';          //block scope, local
    const z = 'HTML';       //block scope, local

    console.log(x);
    console.log(y);
    console.log(z);
    console.log('.'.repeat(60));
}

Calc();
console.log(x);
console.log(y);
console.log(z);

//Ex2 - Block Statement { } only
var x = 1;      //global
let y = 2;      //global
const z = 3;    //global

{
    var x = 'JavaScript';   //No block scope, global
    let y = 'CSS';          //block scope, local
    const z = 'HTML';       //block scope, local

    console.log(x);
    console.log(y);
    console.log(z);
    console.log('.'.repeat(60));
}

console.log(x);
console.log(y);
console.log(z);

//Ex 3- if with { } Block Statement
var x = 1;      //global
let y = 2;      //global
const z = 3;    //global

if (x = 1) {
    var x = 'JavaScript';   //No block scope
    let y = 'CSS';          //block scope, local
    const z = 'HTML';       //block scope, local

    console.log(x);
    console.log(y);
    console.log(z);
    console.log('.'.repeat(60));
}

console.log(x);
console.log(y);
console.log(z);

//Ex 3- for with { } Block Statement
var x = 1;      //global
let y = 2;      //global
const z = 3;    //global

for (let i=0; i<1; i++) {
    var x = 'JavaScript';   //No block scope
    let y = 'CSS';          //block scope, local
    const z = 'HTML';       //block scope, local

    console.log(x);
    console.log(y);
    console.log(z);
    console.log('.'.repeat(60));
}

console.log(x);
console.log(y);
console.log(z);

//Ex 4- while with { } Block Statement
var x = 1;      //global
let y = 2;      //global
const z = 3;    //global
var loop1 = true;

while (loop1) {
    var x = 'JavaScript';   //No block scope
    let y = 'CSS';          //block scope, local
    const z = 'HTML';       //block scope, local

    console.log(x);
    console.log(y);
    console.log(z);
    console.log('.'.repeat(60));
    loop1 = false;
}

console.log(x);
console.log(y);
console.log(z);

//Ex5 - switch { }同一Block Statement內，let msg和var msg重複宣告
var msg = '這是var變數';
let port='80';
switch(port){
    case '80':
        var let = '這個port是用於Http通訊協定';
        console.log(msg);
        break;
    case '21':
        var msg = '這個port是用於FTP通訊協定';
        console.log(msg2);
        break;
}



//Ex6 - let & const有block scope區塊範圍效果
var name = 'Kevin';
{
    let nickname = 'King';
}

console.log(name);  //Kevin
console.log(nickname);
//ReferenceError: nickname is not defined


//Ex7 - let & const有block scope區塊範圍效果
var name = 'Kevin';
let nickname = 'Cowboy';
{
    var name = 'David';
    let nickname = 'King';
}

console.log(name);  //David
console.log(nickname);  //Cowboy

