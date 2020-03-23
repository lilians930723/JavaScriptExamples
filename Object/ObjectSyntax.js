

//===================================================================

var person = {name : "Kevin", mail : "kevin@gmail.com"};
var objName = person.constructor.name;
console.log(objName);

var p = Promise.resolve(person);


p.then(function (value) {
    for (var prop in value) {
        console.log(prop + " : " + value[prop]);
    }
}, function (value) {
    console.log('Fail');
});




