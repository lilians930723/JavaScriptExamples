var name = 'Jane';  //單引號single quote
var name = "Jane";  //雙引號dobule quotes

a = b = 3, c = 4; // Returns 4 in console
console.log(a); // 3 (left-most)

x = (y = 5, z = 6); // Returns 6 in console
console.log(x); // 6 (right-most)

console.log(String.fromCharCode(65));

var ascii='';
for (let i = 0; i < 65563; i++) {
    // ascii+=String.fromCharCode(i);
    // console.log(String.fromCharCode(i));
    if(String.fromCharCode(i)=='奚'){
        console.log(i + ":" + String.fromCharCode(i));
    }
}

console.log(ascii);