var title = function (title) {
    console.log('');
    console.log(`=============${title}=============`);
}

/*
> person
Uncaught ReferenceError: foo is not defined at <anonymous>:1:1

>var person = null ; person;
null
*/

//Ex - person根本不存在
console.log(person);

//Ex - 看似有宣告，但JavaScript認為它是undefine未定義
var person;
console.log(person);

//Ex - 為Object物件，但值為null，
var person = null;

console.log(person);
console.log(typeof person);
console.log(typeof (person));
