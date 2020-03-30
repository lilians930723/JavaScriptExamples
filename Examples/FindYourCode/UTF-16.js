let allCode = '';
//Ex - 顯示所有的UTF-16 Code
for (let i = 33; i < 65563; i++) {
    // console.log(i + ', ' + String.fromCharCode(i));
    allCode += String.fromCharCode(i);
}

console.log(allCode);


//Ex - 找到你名字的UTF-16 Code
var getCharCode = (char) => {
    for (let i = 0; i < 65536; i++) {
        if (char == String.fromCharCode(i)) {
            return i;
        }
    }
}

console.log(getCharCode('奚'));
console.log(getCharCode('江'));
console.log(getCharCode('華'));

console.log(String.fromCharCode(22874) + String.fromCharCode(27743) + String.fromCharCode(33775));
