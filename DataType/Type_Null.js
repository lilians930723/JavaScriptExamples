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

var person = null;

console.log(person);
console.log(typeof person);
console.log(typeof (person));
