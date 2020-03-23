/**
 *  JavaScript interprets the array each time it evaluates the expression containing the array literal.
 *  In addition, a literal used in a function is created each time the function is called.
 */


/** String */
//String Literals
'foo'
"bar"
'13579'
console.log('foo'.length);

//String Object
var s1 = new String("Hello JavaScript");
console.log(s1)


/**Array */
//Array Literals
var friends =['David', 'Mary', 'John'];

//Array object
var f = new Array('David', 'Mary', 'John');


/** Boolean */
//Boolean Literals - true or false
let gender = true;

//Boolean object
let g = new Boolean(true);



/**Object*/ 
//Object literals
var person = { name : 'Kevin', email: 'kevin@gmail.com', phone : '0933-159224'};

//Object
var p = new Object();
p.name="Kevin";
p.email="kevin@gmail.com";
p.phone="0933-159224";

console.log(p.name);